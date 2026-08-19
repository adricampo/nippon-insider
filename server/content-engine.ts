// ─────────────────────────────────────────────────────────────
// MOTOR DE CONTENIDO AUTOMÁTICO
// Equivalente en esta plataforma a la API Route /api/cron/generate-post
// de Next.js: toma una noticia fuente, la reescribe con una
// personalidad editorial definida y la publica en la base de datos.
//
// generatePost() intenta primero fuentes en vivo (RSS reales, ver
// sources.ts + rss.ts) reescritas con OpenAI vía rewriteWithAI(). Si no
// hay OPENAI_API_KEY configurada, o cualquier paso falla (feed caído,
// sin candidatos nuevos, respuesta inválida), cae al NEWS_POOL fijo de
// abajo como red de seguridad — nunca deja de publicar.
// ─────────────────────────────────────────────────────────────

import { z } from "zod";
import { getDb } from "./queries/connection";
import { posts, type InsertPost } from "../db/schema";
import {
  NEWS_FEEDS,
  CATEGORY_KEYWORDS,
  CATEGORY_COVER_QUERY,
  JAPAN_KEYWORDS,
  type Category,
  type NewsFeed,
} from "./sources";
import { fetchRssItems, type RssItem } from "./rss";
import { findCoverImage } from "./lib/pexels";

// Prompt de sistema para OpenAI (gpt-4o). Tal como se diseñó para
// evitar el tono "robótico": personalidad concreta, primera persona,
// datos contrastados. Úsalo tal cual en producción.
export const PERSONA_SYSTEM_PROMPT = `Eres un expatriado español que vive en Tokio desde hace 10 años.
Escribes para "Nippon Insider", un blog en español sobre Japón (turismo, economía, cultura y mercado inmobiliario).

REGLAS DE ESTILO:
- Escribe de forma cercana, en primera persona, con anécdotas breves y experiencias de primera mano.
- Contrasto los datos: cifras concretas, fechas y nombres propios siempre que la noticia fuente los aporte.
- Optimiza para SEO: título atractivo con palabra clave, subtítulos H2 descriptivos, párrafos cortos.
- Español neutro peninsular, sin traducciones literales del inglés o del japonés (explica los términos japoneses la primera vez).
- Nunca inventes cifras que no estén en la fuente; si falta un dato, habla de tendencias cualitativas.

FORMATO DE SALIDA:
- Párrafos separados por líneas en blanco. Encabezados de sección con "## ".
- Inserta shortcodes de afiliados SOLO donde encajen de forma natural en la lectura (máximo 3 por artículo):
  [BANNER_JRPASS] (trenes/JR Pass), [PRODUCT_POCKET_WIFI] (conectividad), [PRODUCT_JAPAN_SIM] (eSIM),
  [LINK_AGODA_TOKYO] (hoteles Tokio), [LINK_RAKUTEN_TRAVEL] (ryokan/onsen), [LINK_BOOKING_HOTELS] (hoteles fuera de las
  grandes ciudades), [PRODUCT_KLOOK_TOURS] / [PRODUCT_GETYOURGUIDE] (tours y entradas), [LINK_SKYSCANNER_VUELOS] (vuelos),
  [PRODUCT_SEGURO_VIAJE] (seguro), [PRODUCT_TARJETA_VIAJE] (tarjeta sin comisiones), [PRODUCT_AMAZON_GEAR] (equipo).
- SOLO si el artículo es una guía de viaje completa (overview de un destino o "qué ver y hacer"), añade además, aparte
  del límite de 3 anteriores, el bloque [RECURSOS_VIAJE] una vez cerca del inicio (tras el primer o segundo párrafo)
  y opcionalmente otra vez en la conclusión. NO lo uses en piezas de economía, cultura puntual o inmobiliaria: agrupa
  vuelos, alojamiento, transporte, seguro, conectividad, dinero y tours, y solo tiene sentido en una guía general.
- Cierra con una conclusión personal, con carácter y una opinión clara — una afirmación, no una pregunta. Este blog no tiene sección de comentarios, así que el último párrafo NUNCA debe incluir una pregunta dirigida al lector (ni "¿tú qué opinas?", ni "¿te imaginas...?", ni "¿cuál te gustaría probar?", ni ninguna variante) ni invitarle a comentar, compartir su opinión o escribir abajo. Termina con una afirmación tuya, no con una pregunta esperando respuesta.`;

// ─────────────────────────────────────────────────────────────
// POOL EDITORIAL FIJO — red de seguridad
// Se usa solo cuando la ingesta en vivo (arriba) no está activa o no
// encuentra candidatos nuevos. Cada entrada simula el "texto bruto" que
// llegaría de una fuente real, ya destilado en hechos verificables.
// ─────────────────────────────────────────────────────────────

interface SourceItem {
  id: string;
  category: Category;
  sourceName: string;
  sourceUrl: string;
  // Término de búsqueda en Pexels para la foto de portada real (ver
  // findCoverImage en server/lib/pexels.ts). Sin PEXELS_API_KEY configurada,
  // se usa el glifo de categoría como marcador de posición.
  coverQuery: string;
  headline: string; // título SEO final
  excerpt: string;
  // Cuerpo ya reescrito con voz editorial (salida del "modelo").
  sections: ArticleBlock[];
  readingMinutes: number;
}

type ArticleBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "shortcode"; code: string };

const NEWS_POOL: SourceItem[] = [
  // ── TURISMO ────────────────────────────────────────────────
  {
    id: "turismo-record-visitantes-2026",
    category: "turismo",
    sourceName: "Japan National Tourism Organization",
    sourceUrl: "https://www.jnto.go.jp/",
    coverQuery: "Shibuya crossing Tokyo crowd tourists",
    headline: "Japón bate su récord de visitantes: qué significa para tu próximo viaje",
    excerpt:
      "El país supera por primera vez los 40 millones de turistas anuales. Te cuento, desde dentro, cómo ha cambiado la experiencia de viajar por Japón y cómo esquivar las multitudes.",
    readingMinutes: 6,
    sections: [
      {
        type: "p",
        text: "Llevo diez años viendo aterrizar aviones en Haneda, y te prometo que nunca había visto nada igual. La cifra que maneja la JNTO para este año supera los 40 millones de visitantes internacionales, un récord absoluto que ha pillado a medio país con el paso cambiado. Si estás planeando venir, esto te afecta directamente: precios, disponibilidad y hasta la paciencia de los locales.",
      },
      { type: "shortcode", code: "RECURSOS_VIAJE" },
      { type: "h2", text: "El dato detrás del titular" },
      {
        type: "p",
        text: "El yen débil ha convertido Japón en un destino 'barato' para bolsillos europeos y americanos. Un menú del día que en Madrid cuesta 14 € aquí sale por 900 yenes. Esa percepción de ganga, sumada a la obsesión global con la cultura japonesa (anime, gastronomía, minimalismo), ha creado la tormenta perfecta. Los meses fuertes siguen siendo abril (sakura) y noviembre (momiji), pero la novedad es que ya no hay temporada baja real.",
      },
      {
        type: "p",
        text: "¿La consecuencia práctica? Kioto ha empezado a regular el acceso a Gion, el monte Fuji cobra entrada y limita ascensos diarios, y los hoteles de Tokio suben de media un 18 % interanual. Reservar con antelación ya no es un consejo: es una obligación.",
      },
      { type: "shortcode", code: "LINK_AGODA_TOKYO" },
      { type: "h2", text: "Cómo viajar sin ahogarte entre multitudes" },
      {
        type: "p",
        text: "Mi estrategia personal tras una década aquí: cambia el 'qué' antes que el 'cuándo'. Kanazawa tiene el jardín Kenrokuen sin las colas de Kioto; Takayama ofrece el Japón de postal con mitad de turistas; y la isla de Shikoku sigue siendo territorio casi virgen para el visitante internacional. El shinkansen te lo pone fácil: desde Tokio estás en Kanazawa en dos horas y media.",
      },
      { type: "shortcode", code: "BANNER_JRPASS" },
      {
        type: "p",
        text: "Y un detalle que nadie te cuenta: madruga. Los templos abren a las 6:00 y hasta las 9:00 son prácticamente tuyos. La foto de Fushimi Inari sin gente existe; solo requiere un despertador y un konbini con café caliente de camino.",
      },
      { type: "h2", text: "Mi veredicto" },
      {
        type: "p",
        text: "Japón sigue mereciendo cada euro, pero el Japón espontáneo de 2015 ha muerto. Planifica, reserva y salte del triángulo Tokio–Kioto–Osaka.",
      },
      { type: "shortcode", code: "RECURSOS_VIAJE" },
    ],
  },
  {
    id: "turismo-hokkaido-invierno",
    category: "turismo",
    sourceName: "Hokkaido Tourism Board",
    sourceUrl: "https://www.visit-hokkaido.jp/",
    coverQuery: "Hokkaido snow onsen winter Japan",
    headline: "Hokkaido en invierno: la guía honesta de quien se ha congelado allí tres veces",
    excerpt:
      "Nieve en polvo, onsen al aire libre y el mejor marisco del país. Todo lo que necesitas para sobrevivir (y disfrutar) el invierno de la isla del norte.",
    readingMinutes: 7,
    sections: [
      {
        type: "p",
        text: "La primera vez que aterricé en Sapporo en enero salí del aeropuerto con vaqueros y una chaqueta 'de entretiempo' española. Error de novato que no le deseo a nadie. Tres inviernos después, Hokkaido se ha convertido en mi escapada favorita de todo Japón, y esta es la guía que me habría gustado leer antes de aquel bautismo de hielo.",
      },
      { type: "h2", text: "Por qué Hokkaido y no los Alpes japoneses" },
      {
        type: "p",
        text: "La nieve de Hokkaido es legendaria por una razón física: el aire siberiano se carga de humedad al cruzar el mar del Japón y descarga una 'nieve en polvo' (powder snow) seca y ligera que no existe en Europa. Niseko y Rusutsu son meca del esquí internacional, pero incluso sin esquiar, el festival de la nieve de Sapporo (yuki matsuri, cada febrero) justifica el viaje por sí solo.",
      },
      {
        type: "p",
        text: "La logística importa: las distancias engañan. Sapporo–Otaru son 40 minutos de tren, pero llegar a Shiretoko requiere planificación. Un JR Pass de Hokkaido regional suele rentar mejor que el nacional si solo vas a la isla.",
      },
      { type: "shortcode", code: "BANNER_JRPASS" },
      { type: "h2", text: "Onsen bajo la nieve: la experiencia que te llevas" },
      {
        type: "p",
        text: "Bañarte a 42 °C en un rotenburo (baño exterior) mientras nieva sobre tu cabeza es de esas cosas que suenan a tópico hasta que las haces. Noboribetsu y Jozankei son los clásicos accesibles desde Sapporo. Mi consejo de veterano: reserva un ryokan con baño privado (kashikiri) si te intimida el desnudo colectivo; existe y no cuesta un riñón si lo pillas con antelación.",
      },
      { type: "shortcode", code: "LINK_RAKUTEN_TRAVEL" },
      { type: "h2", text: "Qué meter en la maleta (lo que de verdad importa)" },
      {
        type: "p",
        text: "Capas térmicas, calzado con suela de agarre (los hielos de Sapporo son traicioneros) y, sobre todo, conectividad: el GPS es tu mejor amigo cuando la nevada borra las señales. Yo no piso Hokkaido sin mi pocket WiFi cargado; el transporte rural perdona poco.",
      },
      { type: "shortcode", code: "PRODUCT_POCKET_WIFI" },
      {
        type: "p",
        text: "Yo ya tengo decidido cuál de los dos prefiero, y no es precisamente el sol.",
      },
    ],
  },
  // ── ECONOMÍA ───────────────────────────────────────────────
  {
    id: "economia-boj-tipos-2026",
    category: "economia",
    sourceName: "Bank of Japan",
    sourceUrl: "https://www.boj.or.jp/en/",
    coverQuery: "Tokyo financial district skyline",
    headline: "El Banco de Japón y el fin del dinero gratis: qué cambia para tu bolsillo (y para tu viaje)",
    excerpt:
      "Tras 17 años, la era de tipos negativos queda atrás. Analizo qué significa la normalización monetaria japonesa para el yen, las hipotecas y el turista.",
    readingMinutes: 6,
    sections: [
      {
        type: "p",
        text: "Cuando llegué a Tokio, el yen estaba a 100 por euro y mi sueldo español convertido parecía de juguete. Hoy el tablero se ha dado la vuelta: el Banco de Japón (BoJ) ha roto casi dos décadas de política ultra laxa y el mercado entero está recolocando piezas. Te lo explico sin jerga de Bloomberg, que para eso estamos.",
      },
      { type: "h2", text: "Qué ha pasado exactamente" },
      {
        type: "p",
        text: "El BoJ abandonó los tipos negativos y ha encadenado subidas graduales hasta situar el tipo oficial en terreno visiblemente positivo, algo impensable cuando aterricé aquí. La inflación japonesa lleva más de dos años por encima del objetivo del 2 %, empujada por un yen débil que encarece las importaciones energéticas y alimentarias. El famoso shunto (negociación salarial primaveral) ha cerrado subidas salariales que no se veían desde los 90.",
      },
      { type: "h2", text: "Tres consecuencias que sí te tocan" },
      {
        type: "p",
        text: "Primera: el yen tiende a apreciarse a medio plazo, así que el 'Japón barato' del turista tiene fecha de caducidad. Si piensas venir, el tipo de cambio actual sigue siendo históricamente favorable, pero la ventana se estrecha. Segunda: las hipotecas japonesas, ancladas en tipos variables ínfimos durante décadas, empiezan a moverse, y eso reordena todo el mercado inmobiliario. Tercera: el carry trade —pedir prestado en yenes baratos para invertir fuera— se desinfla, y cada sacudida se nota en bolsas de medio mundo.",
      },
      { type: "h2", text: "Mi lectura desde Tokio" },
      {
        type: "p",
        text: "La normalización es sana pero lenta: el BoJ se mueve a paso de tortuga precisamente para no romper nada. Para el lector viajero, la conclusión práctica es simple: cambia una parte del presupuesto ahora y asegura el tipo. Para el inversor, la diversión acaba de empezar.",
      },
    ],
  },
  {
    id: "economia-yen-turismo",
    category: "economia",
    sourceName: "Nikkei Asia",
    sourceUrl: "https://asia.nikkei.com/",
    coverQuery: "Japanese yen banknotes currency",
    headline: "El yen en mínimos de décadas: la oportunidad (y la trampa) para viajeros e inversores",
    excerpt:
      "Un euro compra hoy más yenes que en cualquier momento reciente. Analizo hasta cuándo puede durar y cómo aprovecharlo sin hacer el primo.",
    readingMinutes: 5,
    sections: [
      {
        type: "p",
        text: "Cada vez que llamo a mi madre y le digo lo que cuesta un café aquí, me pregunta si me he vuelto rico. No: es que el yen anda por los suelos y el euro fuerte hace magia. Pero como todo en economía, hay letra pequeña. Vamos a ella.",
      },
      { type: "h2", text: "Por qué el yen está tan barato" },
      {
        type: "p",
        text: "El diferencial de tipos es la respuesta corta: mientras el BCE y la Fed mantienen tipos altos, Japón normaliza a ritmo glacial. El dinero busca rendimiento fuera y el yen se deprecia. Añade la balanza energética (Japón importa casi toda su energía) y tienes la receta completa. El Ministerio de Finanzas ya ha intervenido verbalmente varias veces; la intervención real es el comodín que nadie descarta.",
      },
      { type: "h2", text: "Cómo lo aprovecha el viajero inteligente" },
      {
        type: "p",
        text: "Regla uno: paga siempre en yenes, nunca aceptes la 'conversión dinámica' de la TPV. Regla dos: las reservas grandes (hoteles, JR Pass) conviene cerrarlas cuanto antes, porque el precio en yenes está fijo pero tu banco te cobra el cambio del día del cargo. Regla tres: la electrónica y el whisky japonés siguen siendo chollos incluso con aranceles de vuelta.",
      },
      { type: "shortcode", code: "PRODUCT_JAPAN_SIM" },
      {
        type: "p",
        text: "Y un aviso de amigo: no cambies todo el presupuesto en efectivo en el aeropuerto. Los cajeros de 7-Eleven aceptan tarjetas europeas con comisiones menores que cualquier casa de cambio, y con una eSIM activa consultas el tipo en tiempo real antes de cada compra grande.",
      },
      { type: "h2", text: "¿Y para el inversor?" },
      {
        type: "p",
        text: "Ahí el análisis se pone serio: sectores exportadores que ganan con el yen débil, inmobiliario para compradores en divisa fuerte y el riesgo de un repunte alcista del yen. Lo básico, gratis: nunca compres divisa por FOMO.",
      },
    ],
  },
  // ── CULTURA ────────────────────────────────────────────────
  {
    id: "cultura-gion-reglas",
    category: "cultura",
    sourceName: "Kyoto City Official Travel Guide",
    sourceUrl: "https://kyoto.travel/en/",
    coverQuery: "Kyoto Gion district traditional street",
    headline: "Gion pone límites a los turistas: la foto perfecta tiene precio (y multa)",
    excerpt:
      "Kioto restringe el acceso a las callejuelas privadas del barrio de las geishas. Te explico qué puedes y qué no puedes hacer, y por qué tiene todo el sentido del mundo.",
    readingMinutes: 5,
    sections: [
      {
        type: "p",
        text: "Vivo con una japonesa que creció en Kioto, y te aseguro que la conversación de sobremesa sobre Gion se repite cada primavera: la foto del turista persiguiendo a una maiko (aprendiz de geisha) callejón arriba. El barrio ha dicho basta, y como residente que ama esta ciudad, lo celebro.",
      },
      { type: "h2", text: "Qué ha decidido Kioto" },
      {
        type: "p",
        text: "Los callejones privados de Gion —ojo, privados, no la vía pública de Hanamikoji— quedan cerrados al paso turístico, con multas de 10.000 yenes para quien los pise fotografiando. El distrito ha reforzado además la norma ya vigente contra fotografiar personas sin permiso. No es un capricho: las maiko van y vienen de compromisos con horarios estrictos, y el acoso fotográfico se había vuelto insostenible.",
      },
      { type: "h2", text: "Cómo disfrutar Gion sin ser 'ese' turista" },
      {
        type: "p",
        text: "Hanamikoji-dori, la calle principal, sigue abierta y es preciosa al atardecer, cuando se encienden los farolillos y las ochaya (casas de té) abren sus celosías. Si quieres ver cultura geisha de verdad, reserva el espectáculo Miyako Odori o una experiencia de té con maiko en un venue autorizado: cuesta, sí, pero es auténtico y las artistas cobran dignamente por ello.",
      },
      { type: "shortcode", code: "LINK_RAKUTEN_TRAVEL" },
      {
        type: "p",
        text: "Mi recomendación de alojamiento: quédate en un machiya (casa tradicional restaurada) en los alrededores de Gion. Caminar el barrio a las 6 de la mañana, vacío y con niebla, es el Gion real que las multas protegen.",
      },
      { type: "h2", text: "La lección grande" },
      {
        type: "p",
        text: "Japón está redefiniendo su contrato con el turismo: bienvenido tu dinero, no tu invasión. Quien viaja con respeto no notará las restricciones; quien viaja para el selfie, sí.",
      },
    ],
  },
  {
    id: "cultura-kissa-cafeterias",
    category: "cultura",
    sourceName: "Tokyo Weekender",
    sourceUrl: "https://www.tokyoweekender.com/",
    coverQuery: "retro Japanese coffee shop cafe",
    headline: "Kissaten: las cafeterías retro de Japón que el algoritmo no te enseña",
    excerpt:
      "Antes del latte art existieron las kissaten: café sifón, sillas de terciopelo y silencio de biblioteca. Un mapa sentimental de los templos del café japonés.",
    readingMinutes: 6,
    sections: [
      {
        type: "p",
        text: "Mi oficina real en Tokio no es WeWork: es una kissaten de Shibamata regentada por un señor de 78 años que tuesta su propio café desde 1968. Las kissaten (喫茶店) son las cafeterías clásicas japonesas, anteriores a Starbucks y a la ola specialty, y están desapareciendo a ritmo de una al día. Esta es mi carta de amor… y tu mapa.",
      },
      { type: "h2", text: "Qué es exactamente una kissaten" },
      {
        type: "p",
        text: "Imagina terciopelo granate, lámparas Tiffany, jazz bajito y el maestro detrás de la barra preparando tu taza con sifón de vidrio como quien celebra misa. El menú manda el 'morning set': café + tostada gruesa + huevo por el precio del café solo si llegas antes de las 11. No hay wifi, no hay prisa, y pedir un matcha latte con leche de avena es deporte de riesgo.",
      },
      { type: "h2", text: "Mis cinco imprescindibles en Tokio" },
      {
        type: "p",
        text: "Café de L'Ambre en Ginza (abierto en 1948, solo café, sin comida), Kayaba Coffee en Yanaka (edificio de 1916 rescatado por vecinos), Tajimaya en Shinjuku para el flan de caramelo que cura males, Lion en Shibuya si quieres escuchar clásica en altavoces de museo, y mi querida de Shibamata, cuyo nombre me guardo celosamente. Llega temprano, pide el sifón y deja el móvil en el bolsillo: ese es el trato.",
      },
      { type: "shortcode", code: "PRODUCT_POCKET_WIFI" },
      {
        type: "p",
        text: "Un matiz práctico: muchas kissaten siguen siendo de pago en efectivo y algunas permiten fumar en horario de tarde. Consulta antes de sentarte con el portátil; estas casas viven de regulares, no de nómadas digitales, y esa es precisamente su magia.",
      },
      { type: "h2", text: "Por qué deberías ir ya" },
      {
        type: "p",
        text: "La edad media del maestro supera los 70 y los alquileres de barrio no perdonan. Cada kissaten que cierra se lleva un trozo de Showa (la era 1926–1989) irrecuperable.",
      },
    ],
  },
  // ── INMOBILIARIA ───────────────────────────────────────────
  {
    id: "inmob-akiya-guia",
    category: "inmobiliaria",
    sourceName: "MLIT — Ministry of Land, Infrastructure, Transport and Tourism",
    sourceUrl: "https://www.mlit.go.jp/en/",
    coverQuery: "abandoned Japanese house countryside",
    headline: "Akiya: la guía definitiva para comprar una casa abandonada en Japón (con números reales)",
    excerpt:
      "Hay más de 9 millones de viviendas vacías en Japón. Analizo el fenómeno akiya con datos del MLIT, costes reales de reforma y los errores que he visto cometer a otros extranjeros.",
    readingMinutes: 9,
    sections: [
      {
        type: "p",
        text: "La casa de mis sueños japoneses existe: madera de ciprés, engawa (galería acristalada) mirando a un jardín de musgo, y un precio inferior al de mi coche en España. Se llama akiya —vivienda vacía— y hay más de 9 millones según la última encuesta quinquenal del Ministerio de Vivienda (MLIT). Pero entre el sueño y la escritura hay un abismo de letra pequeña. Esta guía es el mapa completo.",
      },
      { type: "h2", text: "El dato estructural: por qué regalan casas" },
      {
        type: "p",
        text: "Japón pierde población fuera de las grandes urbes a ritmo de cientos de miles de personas al año. Los herederos viven en Tokio, la casa del pueblo queda vacía, y mantenerla cuesta impuestos y vergüenza social (una akiya descuidada 'ensucia' el barrio). Resultado: ayuntamientos enteros operan 'bancos de akiya' (akiya bank) con viviendas desde precio simbólico hasta unos pocos millones de yenes. El récord de vacíos nacional ya supera el 13 % del parque total.",
      },
      { type: "h2", text: "Los números que nadie te pone en el anuncio" },
      {
        type: "p",
        text: "Caso real que asesoré este año: akiya en prefectura de Nagano, 2,5 millones de yenes de compra. Suma: 200.000 de registro y licencias, ~1,2 millones de reforma básica habitable (tejado sano, baño y cocina nuevos), 150.000 anuales de impuesto de propiedad, y seguro contra nieve porque Nagano. Total año uno: unos 4 millones de yenes, ~25.000 € al cambio. Sigue siendo ganga europea, pero no es 'una casa gratis'.",
      },
      { type: "h2", text: "Los tres errores mortales del comprador extranjero" },
      {
        type: "p",
        text: "Error uno: comprar sin inspección estructural. El estándar sísmico cambió en 1981 (shin-taishin); una casa anterior puede necesitar refuerzo carísimo. Error dos: ignorar la tierra. En Japón casa y suelo se valoran por separado, y hay akiya sobre terreno arrendado (shakuchiken) que no puedes comprar en propiedad plena. Error tres: soñar el visado. Comprar propiedad NO da residencia en Japón; para vivir allí necesitas visado de trabajo, cónyuge, estudiante o el nuevo estatus de nómada digital.",
      },
      { type: "h2", text: "El proceso paso a paso (versión ejecutiva)" },
      {
        type: "p",
        text: "Uno: define uso (vacacional, teletrabajo estacional o inversión rural) porque condiciona el municipio. Dos: filtra en los akiya bank municipales y portales como Real Estate Japan. Tres: visita en persona con inspector (junken) antes de ofertar. Cuatro: firma con judicial scrivener (shiho shoshi) que sanea el título. Cinco: presupuesta la reforma con constructor local, jamás a distancia.",
      },
      {
        type: "p",
        text: "Yo ya teletrabajo desde un engawa con vistas a los Alpes japoneses, y cada akiya que visito confirma que el sueño es real si haces los deberes antes de firmar.",
      },
    ],
  },
  {
    id: "inmob-tokyo-precios-2026",
    category: "inmobiliaria",
    sourceName: "Real Estate Economic Institute (REEI)",
    sourceUrl: "https://www.reel.or.jp/",
    coverQuery: "Tokyo Tower skyline aerial",
    headline: "El precio del metro cuadrado en Tokio, distrito a distrito: el mapa 2026 que los portales no te enseñan",
    excerpt:
      "Análisis con datos del REEI: dónde se está inflando la burbuja, dónde queda valor real y los tres barrios que yo miraría hoy con dinero en la mano.",
    readingMinutes: 8,
    sections: [
      {
        type: "p",
        text: "Cada trimestre me siento con los informes del Real Estate Economic Institute y un café de sifón, y cada trimestre el mapa de Tokio se reordena un poco más. Esta es la radiografía que suelo compartir solo con clientes; hoy la abro aquí, en abierto.",
      },
      { type: "h2", text: "El titular: el centro se despega" },
      {
        type: "p",
        text: "Los pisos nuevos en los seis distritos centrales (Chiyoda, Chuo, Minato, Shinjuku, Bunkyo, Shibuya) marcan máximos históricos, con el metro cuadrado medio de obra nueva en Minato muy por encima del millón y medio de yenes. El combustible: compradores internacionales con divisa fuerte, stock escaso y salarios ejecutivos al alza. Mientras, el anillo exterior (los '23 ku' periféricos y la Tama) avanza a ritmo muy inferior: ahí vive el valor.",
      },
      { type: "h2", text: "Dónde yo miraría hoy" },
      {
        type: "p",
        text: "Uno: Koto-ku ribereño (Toyosu aparte, mira Kiyosumi-Shirakawa), con metro nuevo y precio aún de barrio obrero. Dos: Nakano-ku, a una parada de Shinjuku, con stock de los 70 reformable y comunidad internacional real. Tres: la franja de la línea Keio hacia Chofu, donde el teletrabajo híbrido mantiene demanda sin prima de centro. Los tres comparten algo: alquiler fuerte, precio de compra aún racional y liquidez japonesa, no solo especulativa.",
      },
      { type: "h2", text: "La trampa del comprador extranjero en 2026" },
      {
        type: "p",
        text: "Con el yen barato, el inmueble tokiota parece 'rebajado' en euros. Cuidado: estás comprando activo en yen con ingreso probablemente en euro. Si el yen se aprecia un 15 % —escenario nada descabellado con la normalización del BoJ—, tu plusvalía en divisa se evapora aunque el piso suba en yenes. Cobertura cambiaria o horizonte muy largo: elige una antes de firmar.",
      },
      {
        type: "p",
        text: "Aquí va mi resumen: qué distritos concentran el mayor recorrido, qué modelo de rentabilidad neta uso yo tras impuestos, y los términos legales japoneses que más confusión generan. Si estás tanteando una compra real, esto te ahorra los errores que yo ya pagué.",
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// Núcleo del generador
// ─────────────────────────────────────────────────────────────

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);
}

function renderContent(sections: ArticleBlock[]): string {
  return sections
    .map((b) => {
      if (b.type === "h2") return `## ${b.text}`;
      if (b.type === "shortcode") return `[${b.code}]`;
      return b.text;
    })
    .join("\n\n");
}

// ─────────────────────────────────────────────────────────────
// Ingesta en vivo: RSS reales (ver sources.ts) en vez del NEWS_POOL fijo.
// Se activa solo si hay OPENAI_API_KEY configurada; si falla cualquier
// paso (feed caído, sin candidatos, respuesta de OpenAI inválida),
// generatePost() cae automáticamente al NEWS_POOL — nunca rompe la
// generación (decisión tomada junto al usuario: red de seguridad fija).
// ─────────────────────────────────────────────────────────────

interface LiveCandidate {
  feedName: string;
  item: RssItem;
  category: Category;
}

// Coincidencia solo al inicio de palabra: evita falsos positivos como "yen"
// embebido en "leyendo/trayendo" o "art" dentro de "artículo". Un simple
// .includes() los coló en las pruebas reales con Nippon.com (en español).
function hasKeywordAtWordStart(haystack: string, keyword: string): boolean {
  let from = 0;
  for (;;) {
    const idx = haystack.indexOf(keyword, from);
    if (idx === -1) return false;
    const before = haystack[idx - 1];
    if (!before || !/[\p{L}\p{N}]/u.test(before)) return true;
    from = idx + 1;
  }
}

function isRelevant(item: RssItem, category: Category): boolean {
  const haystack = `${item.title} ${item.summary}`.toLowerCase();
  return CATEGORY_KEYWORDS[category].some((kw) =>
    hasKeywordAtWordStart(haystack, kw),
  );
}

function mentionsJapan(item: RssItem): boolean {
  const haystack = `${item.title} ${item.summary}`.toLowerCase();
  return JAPAN_KEYWORDS.some((kw) => hasKeywordAtWordStart(haystack, kw));
}

function isCandidateOk(item: RssItem, category: Category, feed: NewsFeed): boolean {
  if (!feed.alwaysRelevant && !isRelevant(item, category)) return false;
  if (feed.requireJapanMention && !mentionsJapan(item)) return false;
  return true;
}

function shuffled<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

async function findLiveCandidate(
  category: Category | undefined,
  usedUrls: Set<string>,
): Promise<LiveCandidate | null> {
  const categoriesToTry = category
    ? [category]
    : shuffled(["turismo", "economia", "cultura", "inmobiliaria"] as const);

  for (const cat of categoriesToTry) {
    const feeds = shuffled(
      NEWS_FEEDS.filter((f) => f.categories.includes(cat)),
    );
    for (const feed of feeds) {
      try {
        const items = await fetchRssItems(feed.url);
        const candidate = items.find(
          (it) => !usedUrls.has(it.link) && isCandidateOk(it, cat, feed),
        );
        if (candidate) return { feedName: feed.name, item: candidate, category: cat };
      } catch (err) {
        // Feed caído, timeout o formato inesperado: probamos el siguiente.
        console.error(`[content-engine] Fallo leyendo ${feed.name}:`, err);
      }
    }
  }
  return null;
}

const GeneratedArticleSchema = z.object({
  title: z.string().min(10),
  excerpt: z.string().min(20),
  content: z.string().min(200),
  readingMinutes: z.number().int().min(2).max(15),
});

export type GeneratedArticle = z.infer<typeof GeneratedArticleSchema>;

/**
 * Reescribe una noticia real (RSS) con la voz editorial de Nippon Insider,
 * usando OpenAI gpt-4o. Devuelve el artículo ya estructurado y listo para
 * guardar: título, extracto, cuerpo con shortcodes y minutos de lectura.
 */
export async function rewriteWithAI(source: {
  title: string;
  summary: string;
  sourceName: string;
  sourceUrl: string;
  category: Category;
}): Promise<GeneratedArticle> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error(
      "OPENAI_API_KEY no configurada: añádela a tu .env para activar la reescritura con IA.",
    );
  }

  const userPrompt = `Fuente: ${source.sourceName}
Categoría: ${source.category}
Titular original: ${source.title}
Resumen/cuerpo original: ${source.summary}
URL original: ${source.sourceUrl}

Reescribe esta noticia como un artículo completo para Nippon Insider. Responde ÚNICAMENTE con un objeto JSON
con estas claves: "title" (titular SEO en español), "excerpt" (resumen de 1-2 frases), "content" (el cuerpo
completo, con párrafos separados por líneas en blanco, encabezados "## " y shortcodes de afiliados según las
reglas anteriores) y "readingMinutes" (entero, minutos de lectura estimados).`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [
        { role: "system", content: PERSONA_SYSTEM_PROMPT },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.8,
      response_format: { type: "json_object" },
    }),
  });

  if (!res.ok) {
    throw new Error(`OpenAI respondió ${res.status}: ${await res.text()}`);
  }

  const data = (await res.json()) as {
    choices: { message: { content: string } }[];
  };
  const raw = data.choices[0]?.message.content ?? "{}";
  return GeneratedArticleSchema.parse(JSON.parse(raw));
}

export interface GenerateResult {
  id: number;
  slug: string;
  title: string;
  category: string;
}

export async function generatePost(
  category?: SourceItem["category"],
): Promise<GenerateResult> {
  const db = getDb();

  const existing = await db
    .select({
      slug: posts.slug,
      sourceUrl: posts.sourceUrl,
      coverImage: posts.coverImage,
    })
    .from(posts);
  const usedSlugs = new Set(existing.map((r) => r.slug));
  const usedUrls = new Set(
    existing.map((r) => r.sourceUrl).filter((u): u is string => !!u),
  );
  const usedCovers = new Set(
    existing.map((r) => r.coverImage).filter((u): u is string => !!u),
  );

  // 1) Fuentes en vivo (RSS reales), solo si hay clave de OpenAI configurada.
  //    Cualquier fallo (feed caído, sin candidatos, JSON inválido) cae al
  //    pool fijo de abajo — la generación nunca se rompe.
  if (process.env.OPENAI_API_KEY) {
    try {
      const live = await findLiveCandidate(category, usedUrls);
      if (live) {
        const article = await rewriteWithAI({
          title: live.item.title,
          summary: live.item.summary,
          sourceName: live.feedName,
          sourceUrl: live.item.link,
          category: live.category,
        });
        const slug = slugify(article.title);
        if (!usedSlugs.has(slug)) {
          const coverImage = await findCoverImage(
            [live.item.title, CATEGORY_COVER_QUERY[live.category]],
            usedCovers,
          );
          const row: InsertPost = {
            slug,
            title: article.title,
            excerpt: article.excerpt,
            content: article.content,
            category: live.category,
            coverImage,
            isPremium: false,
            status: "borrador",
            sourceName: live.feedName,
            sourceUrl: live.item.link,
            readingMinutes: article.readingMinutes,
            publishedAt: new Date(),
          };
          const [{ id }] = await db.insert(posts).values(row).returning({ id: posts.id });
          return { id, slug: row.slug, title: row.title, category: row.category };
        }
      }
    } catch (err) {
      console.error(
        "[content-engine] Fallo generando desde fuente en vivo, caigo al NEWS_POOL:",
        err,
      );
    }
  }

  // 2) Red de seguridad: pool editorial fijo (comportamiento original).
  let candidates = NEWS_POOL.filter(
    (item) => !usedSlugs.has(slugify(item.headline)),
  );
  // Si se pide una categoría concreta, respétala siempre: mejor avisar de
  // que no quedan noticias de esa categoría que devolver una de otra
  // categoría sin decirlo (bug real, encontrado generando en bloque).
  if (category) {
    candidates = candidates.filter((i) => i.category === category);
  }

  if (candidates.length === 0) {
    throw new Error(
      "No quedan noticias nuevas en el pool editorial. Añade nuevas fuentes (en producción: NewsAPI/RSS).",
    );
  }

  // Selección pseudo-aleatoria estable
  const pick = candidates[Math.floor(Math.random() * candidates.length)];
  const coverImage = await findCoverImage(
    [pick.coverQuery, CATEGORY_COVER_QUERY[pick.category]],
    usedCovers,
  );

  const row: InsertPost = {
    slug: slugify(pick.headline),
    title: pick.headline,
    excerpt: pick.excerpt,
    content: renderContent(pick.sections),
    category: pick.category,
    coverImage,
    isPremium: false,
    // Nace como borrador: requiere revisión editorial antes de publicarse
    // (ver postsRouter.publish, expuesto en el panel de administración).
    status: "borrador",
    sourceName: pick.sourceName,
    sourceUrl: pick.sourceUrl,
    readingMinutes: pick.readingMinutes,
    publishedAt: new Date(),
  };

  const [{ id }] = await db.insert(posts).values(row).returning({ id: posts.id });

  return {
    id,
    slug: row.slug,
    title: row.title,
    category: row.category,
  };
}

export async function listPoolStatus() {
  const db = getDb();
  const existing = await db.select({ slug: posts.slug }).from(posts);
  const usedSlugs = new Set(existing.map((r) => r.slug));
  return {
    total: NEWS_POOL.length,
    publicados: NEWS_POOL.filter((i) => usedSlugs.has(slugify(i.headline)))
      .length,
    pendientes: NEWS_POOL.filter((i) => !usedSlugs.has(slugify(i.headline)))
      .map((i) => ({ id: i.id, category: i.category, headline: i.headline })),
  };
}
