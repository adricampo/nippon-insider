// ─────────────────────────────────────────────────────────────
// Guías de ciudad para Destinos — piloto de ~17 páginas sobre las
// 47 prefecturas (el resto se queda con la ficha ligera de
// DestinoCiudad.tsx hasta que se amplíen).
//
// `content` usa el mismo formato que posts.content: "## " para
// encabezados, shortcodes [CODIGO] en su propio bloque — se
// renderiza con el ShortcodeRenderer ya existente (src/components/
// ShortcodeRenderer.tsx), sin componentes nuevos. Solo se usan
// shortcodes que existen de verdad en contracts/affiliates.ts, y
// solo donde encajan temáticamente (nada de códigos inventados).
//
// `relatedPosts` solo incluye posts verificados en la base de datos
// en vivo en el momento de escribir esto (slug + título reales) —
// nunca un slug supuesto.
// ─────────────────────────────────────────────────────────────

export interface CityGuideContent {
  citySlug: string;
  prefectureSlug: string;
  intro: string;
  content: string;
  relatedCities?: string[];
  relatedPosts?: { slug: string; title: string }[];
}

export const CITY_GUIDES: Record<string, CityGuideContent> = {
  shinjuku: {
    citySlug: "shinjuku",
    prefectureSlug: "tokyo",
    intro:
      "Shinjuku es la estación más transitada del mundo y, a la vez, uno de los barrios con más contrastes de Tokio: rascacielos y vida nocturna a un paseo de distancia.",
    content: `## Cómo llegar

### Desde el aeropuerto de Narita

El Narita Express (N'EX) llega directo a Shinjuku en poco más de una hora, y está incluido en el Japan Rail Pass. El Skyliner + un transbordo es la alternativa más económica.

[BANNER_JRPASS]

### Desde el aeropuerto de Haneda

Autobús limusina directo (unos 45-60 minutos según tráfico) o un cambio de tren en el centro de Tokio; ambas opciones son razonables.

### Dentro de Tokio

La estación de Shinjuku concentra las líneas JR Yamanote, Chuo y Sobu, además de las privadas Odakyu y Keio y varias líneas de metro (Marunouchi, Shinjuku, Toei Oedo) — es la mejor conexión posible con el resto de la ciudad.

[RECURSOS_VIAJE]

## Qué ver y hacer

### Shinjuku Gyoen

Uno de los parques más cuidados de Tokio, con zonas de estilo japonés, francés e inglés — un respiro verde a un paseo de los rascacielos, especialmente popular en la temporada de cerezos.

### Golden Gai y Omoide Yokocho

Golden Gai reúne más de 200 bares diminutos, de apenas unos taburetes cada uno, repartidos por un puñado de callejones que sobrevivieron a la reconstrucción de posguerra. Omoide Yokocho ("callejón de los recuerdos") es la versión más gastronómica de esa misma atmósfera, con puestos de yakitori humeantes desde media tarde.

### Mirador del Gobierno Metropolitano

El edificio del Gobierno Metropolitano de Tokio, diseñado por el arquitecto Tange Kenzo, tiene un mirador gratuito en el piso 45 (202 metros), con vistas a toda la ciudad y, en días claros, al Tokyo Skytree y al monte Fuji al fondo. La propia estación de Shinjuku, con cerca de 3,6 millones de pasajeros diarios, está reconocida por el Guinness como la más transitada del mundo.

### Kabukicho y Tokyu Kabukicho Tower

Kabukicho debe su nombre a un plan de la posguerra para construir un teatro kabuki que nunca llegó a realizarse. La Tokyu Kabukicho Tower, de 2023 y 225 metros, dedica sus 53 plantas por completo al ocio —hotel, teatros, salas de conciertos, cines—, sin una sola oficina.

## Dónde alojarse

El lado oeste, entre rascacielos, tiene hoteles de negocios con buenas vistas; el lado este, cerca de Kabukicho y Golden Gai, está mejor situado para salir de noche. Cualquiera de los dos deja el resto de Tokio a un salto de tren.

[LINK_AGODA_TOKYO]`,
    relatedCities: ["shibuya", "asakusa", "hakone", "nikko", "kamakura"],
    relatedPosts: [
      {
        slug: "eventos-imperdibles-en-tokio-para-agosto-2026",
        title: "Eventos Imperdibles en Tokio Agosto 2026: Fuegos Artificiales y Festivales",
      },
    ],
  },

  shibuya: {
    citySlug: "shibuya",
    prefectureSlug: "tokyo",
    intro:
      "Shibuya es la imagen que casi todo el mundo tiene de Tokio antes de pisarla: el cruce más famoso del mundo, pantallas gigantes y una vida comercial que no para.",
    content: `## Cómo llegar

### Desde los aeropuertos

Desde Narita, el Narita Express llega hasta Shibuya directo (cubierto por el JR Pass); desde Haneda, tren o autobús limusina en 30-45 minutos.

[BANNER_JRPASS]

### Dentro de Tokio

La estación de Shibuya conecta la línea JR Yamanote con las líneas Tokyu, y las de metro Ginza, Hanzomon y Fukutoshin. Está a un solo transbordo de Shinjuku y Harajuku.

## Qué ver y hacer

### El cruce de Shibuya

El Shibuya Scramble es el cruce peatonal más transitado del mundo, con hasta 3.000 personas cruzando a la vez en cada cambio de semáforo. Shibuya Sky, un mirador al aire libre en la azotea del edificio Scramble Square, ofrece la mejor vista del cruce desde arriba.

[PRODUCT_GETYOURGUIDE]

### La estatua de Hachiko

Junto a la salida homónima de la estación, sigue siendo el punto de encuentro clásico de Shibuya — la estatua honra al perro que esperó a su dueño fallecido en la estación durante años, ya en los años 30.

### Center Gai y Miyashita Park

Center Gai concentra tiendas y restaurantes a pie de calle, el corazón comercial más denso del barrio. Miyashita Park combina zona verde con comercio sobre un antiguo aparcamiento elevado, con terrazas y tiendas a pie de calle debajo.

### Santuario Konno Hachimangu y Shibuya 109

A pocos pasos del cruce, el santuario Konno Hachimangu tiene casi 1.000 años de historia, con estructuras del siglo XVIII que sobrevivieron a los bombardeos de la Segunda Guerra Mundial — un contraste tranquilo con el bullicio de alrededor. Shibuya 109, de diez plantas, es la "meca de la moda" para las jóvenes japonesas desde hace décadas.

## Dónde alojarse

Alojarte en Shibuya te deja muy cerca de Shinjuku y Harajuku en pocos minutos de tren, con buena oferta de hoteles de todos los presupuestos alrededor de la estación.

[LINK_AGODA_TOKYO]`,
    relatedCities: ["shinjuku", "asakusa"],
  },

  asakusa: {
    citySlug: "asakusa",
    prefectureSlug: "tokyo",
    intro:
      "Asakusa conserva el ambiente más tradicional de Tokio: el templo Senso-ji, sus calles comerciales y el Tokyo Skytree asomando al otro lado del río Sumida.",
    content: `## Cómo llegar

### Desde los aeropuertos

Desde Narita, el Skyliner hasta Ueno + metro es la ruta más rápida (unos 50 minutos en total); desde Haneda, un cambio de tren en el centro de Tokio.

### Dentro de Tokio

Las líneas de metro Ginza y Asakusa, además de la línea Tobu Skytree, conectan Asakusa con el resto de Tokio en pocos minutos. Está a un paseo corto del Tokyo Skytree, cruzando el río Sumida.

## Qué ver y hacer

### Templo Senso-ji y calle Nakamise

El templo Senso-ji, el más antiguo de Tokio, tiene su origen en el siglo VII, cuando según la tradición dos hermanos pescadores encontraron una estatua de Kannon en el río Sumida. Se accede a través de la puerta Kaminarimon —11,7 metros de alto, con un farolillo de papel de 4 metros y 670 kilos, reconstruida en 1960— y de la calle comercial Nakamise, con 89 tiendas a lo largo de 250 metros con origen en el propio periodo Edo. A mediados de mayo, el Sanja Matsuri, uno de los tres grandes festivales sintoístas de Tokio, llena el barrio de procesiones desde el santuario Asakusa anexo al templo.

[RECURSOS_VIAJE]

### Oficios tradicionales y paseos por el Sumida

El barrio conserva talleres de oficios antiguos —desde peines de madera hasta artículos de papel washi—, además de paseos en rickshaw por las calles del entorno del templo y cruceros por el río Sumida hacia Odaiba.

### Exhibición de sumo con chankonabe

Si te interesa el sumo, en Asakusa se puede asistir a una exhibición con degustación de chankonabe, el guiso tradicional con el que se alimentan los luchadores.

[PRODUCT_KLOOK_SUMO]

## Dónde alojarse

Asakusa tiene un ambiente más tranquilo y tradicional que Shinjuku o Shibuya, con buena relación calidad-precio en alojamiento y fácil conexión al resto de la ciudad.

[PRODUCT_KLOOK_TOURS]`,
    relatedCities: ["shinjuku", "shibuya"],
    relatedPosts: [
      {
        slug: "eventos-imperdibles-en-tokio-para-agosto-2026",
        title: "Eventos Imperdibles en Tokio Agosto 2026: Fuegos Artificiales y Festivales",
      },
    ],
  },

  kioto: {
    citySlug: "kioto",
    prefectureSlug: "kyoto",
    intro:
      "Kioto fue la capital imperial durante más de mil años, y todavía concentra la mayor densidad de templos, santuarios y jardines tradicionales de todo Japón.",
    content: `## Cómo llegar

### Desde Tokio

El Shinkansen Tokaido conecta la estación de Tokio con Kioto en poco más de dos horas.

[BANNER_JRPASS]

### Desde Osaka

Shinkansen (unos 15 minutos) o trenes JR, Kintetsu y Hankyu más lentos pero más baratos (30-50 minutos según la línea).

### Desde el aeropuerto de Kansai (KIX)

El tren limited express JR Haruka llega directo a la estación de Kioto en unos 75 minutos.

[RECURSOS_VIAJE]

## Qué ver y hacer

### Fushimi Inari Taisha

Con sus miles de torii bermellón trepando por la ladera del monte Inari, es el santuario más fotografiado de Japón. La subida completa hasta la cima lleva un par de horas, pero la mayoría de los visitantes se queda en el tramo inferior, mucho más concurrido.

### Kinkaku-ji, el Pabellón Dorado

Un pabellón recubierto de pan de oro reflejado en un estanque, reconstruido en los años 50 tras un incendio provocado. Es una de las visitas más rápidas y más fotografiadas de Kioto.

### Arashiyama

El bosque de bambú de Arashiyama, al oeste de la ciudad, se disfruta mejor a primera hora de la mañana para evitar las aglomeraciones. Cerca, el Kimono Forest reúne cientos de postes decorados con telas de kimono que se iluminan al anochecer, y el templo Tenryuji, fundado en 1339 con un jardín diseñado por el monje Muso Soseki, es Patrimonio de la Humanidad.

### Castillo Nijo y Sanjusangendo

El castillo Nijo conserva sus famosos "suelos ruiseñor", que chirrían al caminar como sistema de alarma ante posibles intrusos. El templo Sanjusangendo, por su parte, alberga 1.000 estatuas de madera del Kannon de mil brazos alineadas en su salón principal — hay que descalzarse antes de entrar.

### Barrio de Gion

Conserva el ambiente de las geiko y maiko, pero algunas de sus callejuelas privadas han empezado a restringir el paso y las fotos a turistas — conviene fijarse en la señalización antes de entrar.

## Dónde alojarse

La zona de la estación de Kioto es la más práctica para moverte; Gion e Higashiyama tienen más encanto tradicional y buena oferta de ryokan. Una noche en un ryokan con onsen es una de las experiencias más recomendables de la ciudad.

[LINK_RAKUTEN_TRAVEL]`,
    relatedCities: ["nara", "osaka"],
    relatedPosts: [
      {
        slug: "gion-pone-limites-a-los-turistas-la-foto-perfecta-tiene-precio-y-multa",
        title: "Kioto limita el acceso en Gion: Multas por fotos en callejones privados",
      },
    ],
  },

  osaka: {
    citySlug: "osaka",
    prefectureSlug: "osaka",
    intro:
      "Osaka es la capital no oficial de la gastronomía japonesa: menos monumental que Kioto, más directa, y con Dotonbori como su escaparate más ruidoso.",
    content: `## Cómo llegar

### Desde Tokio

Shinkansen Tokaido-Sanyo hasta Shin-Osaka, poco más de dos horas y media.

[BANNER_JRPASS]

### Desde Kioto

Shinkansen (15 minutos) o trenes JR, Hankyu y Keihan más lentos pero más económicos (30-45 minutos).

### Desde el aeropuerto de Kansai (KIX)

El tren JR Haruka o la línea Nankai conectan directamente con el centro en 30-45 minutos según el punto de llegada.

## Qué ver y hacer

### Dotonbori

Con sus carteles de neón y puestos de takoyaki y okonomiyaki, es la postal clásica de Osaka — el canal se recorre a pie o en un corto crucero turístico nocturno.

### Castillo de Osaka y mercado Kuromon Ichiba

El castillo de Osaka, reconstruido en hormigón en los años 30 y con un mirador en lo alto de la torre, y el mercado Kuromon Ichiba, con marisco y fruta para comer de pie mientras paseas, completan un buen recorrido de un par de días. El mirador del Umeda Sky Building, con su pasarela circular abierta entre dos torres, añade otra vista de la ciudad de noche.

### Santuario Sumiyoshi Taisha

El santuario más importante de la ciudad, con un estilo arquitectónico propio ajeno a la influencia budista, poco habitual en Japón, y más de 700 farolillos de piedra y bronce donados por comerciantes a lo largo de los siglos. Se llega en un tranvía directo desde el centro.

### Torre Abeno Harukas y barrio de Shinsekai

Con 300 metros, Abeno Harukas es el edificio más alto de Japón y tiene mirador abierto de día y de noche. Shinsekai, el barrio retro que creció alrededor de la torre Tsutenkaku —reconstruida en 1956, con la estatua de la deidad de la suerte Billiken en uno de sus pisos—, conserva un ambiente muy distinto al resto de la ciudad, con carteles antiguos y freidurías de kushikatsu.

### Universal Studios Japan

Requiere entrada aparte y suele llevar un día completo — conviene comprar la entrada con antelación para no perder tiempo de parque en la cola de taquilla.

[PRODUCT_KLOOK_USJ]

[RECURSOS_VIAJE]

## Dónde alojarse

Namba/Dotonbori concentra la vida nocturna y gastronómica; Umeda es más práctico si vas a moverte mucho en tren, por su cercanía a Shin-Osaka.

[LINK_BOOKING_HOTELS]`,
    relatedCities: ["kioto", "nara"],
    relatedPosts: [
      {
        slug: "descubre-el-nuevo-bus-wanwan-liner-viaje-comodo-entre-tokio-y-osaka-con-tu-perro",
        title: "Viaja Cómodamente con tu Perro entre Tokio y Osaka en el Nuevo Autobús Wanwan Liner",
      },
    ],
  },

  sapporo: {
    citySlug: "sapporo",
    prefectureSlug: "hokkaido",
    intro:
      "Sapporo es la puerta de entrada a Hokkaido: una ciudad ordenada en cuadrícula, famosa por su cerveza, su marisco y el Festival de la Nieve cada febrero.",
    content: `## Cómo llegar

### Desde cualquier punto de Japón (avión)

La mayoría de los viajeros llega en avión al aeropuerto de New Chitose, con vuelos directos desde Tokio, Osaka, Nagoya, Fukuoka y otras grandes ciudades. Desde el aeropuerto, un tren rápido JR (unos 40 minutos) o autobús conectan con el centro de Sapporo.

### Desde Hakodate (tren)

El Shinkansen de Hokkaido todavía no llega hasta Sapporo — de momento termina en Hakodate —, así que para este tramo se usa el limited express Hokuto, unas 3 horas y media hasta Sapporo.

[BANNER_JRPASS]

## Qué ver y hacer

### Festival de la Nieve de Sapporo

Cada febrero, el Yuki Matsuri llena el parque Odori de esculturas de hielo y nieve a gran escala, algunas de varios pisos de altura — uno de los grandes eventos de invierno de Japón.

### Parque Odori y Museo de la Cerveza

El resto del año, el propio parque Odori, que atraviesa el centro de la ciudad, el Museo de la Cerveza Sapporo (en la antigua fábrica original) y el mercado Nijo, con marisco fresco para comer de pie, son las paradas obligadas en la ciudad.

[RECURSOS_VIAJE]

### Torre T38 y Tokeidai

El mirador de la torre T38, en lo alto de la JR Tower junto a la estación, es especialmente bonito al atardecer. El Tokeidai, la torre del reloj más antigua de Japón (1878), es uno de los pocos edificios de estilo occidental que quedan del Sapporo de finales del siglo XIX, hoy convertido en un pequeño museo.

### Antiguo edificio del Gobierno de Hokkaido

Conocido como "el edificio de ladrillo rojo" (1888), alberga hoy un museo sobre la historia de la colonización de Hokkaido, a un paseo corto del parque Odori.

### Excursiones a Otaru, Niseko y Jozankei

Otaru, con su canal histórico, Niseko, una de las grandes estaciones de esquí de Japón, y Jozankei Onsen, un pueblo termal decorado con figuras de kappa, funcionan bien como excursión de un día o una noche extra desde Sapporo.

## Dónde alojarse

Susukino concentra restaurantes y vida nocturna; los alrededores de la estación de Sapporo son más cómodos para quien prioriza moverse en tren.

[LINK_BOOKING_HOTELS]`,
    relatedCities: ["hakodate"],
    relatedPosts: [
      {
        slug: "hokkaido-en-invierno-la-guia-honesta-de-quien-se-ha-congelado-alli-tres-veces",
        title: "Descubre el invierno mágico de Hokkaido: nieve en polvo, onsen y marisco de primera",
      },
    ],
  },

  hakodate: {
    citySlug: "hakodate",
    prefectureSlug: "hokkaido",
    intro:
      "Hakodate combina un pasado de puerto internacional con una de las vistas nocturnas más citadas de Japón, desde lo alto del monte Hakodate.",
    content: `## Cómo llegar

### Desde Tokio

El Shinkansen de Hokkaido llega hasta la estación de Shin-Hakodate-Hokuto en unas 4 horas, desde donde un tren local corto (unos 20 minutos) te deja en el centro de Hakodate.

[BANNER_JRPASS]

### Desde Sapporo

El limited express Hokuto cubre el trayecto en unas 3 horas y media; también hay vuelos directos de poco más de 40 minutos.

### En avión

Hakodate tiene aeropuerto propio con vuelos nacionales directos desde varias ciudades de Japón.

## Qué ver y hacer

### Vista nocturna desde el monte Hakodate

Accesible en teleférico, está considerada una de las tres mejores vistas nocturnas de Japón — la ciudad se estrecha entre dos bahías, así que las luces dibujan una silueta de reloj de arena.

### Barrio de Motomachi

Conserva edificios de estilo occidental de la época en que Hakodate fue uno de los primeros puertos japoneses abiertos al comercio exterior, a finales del siglo XIX.

### Mercado matutino y fuerte de Goryokaku

El mercado matutino (Hakodate Asaichi) es parada obligada para marisco fresco, con puestos donde puedes pescar tu propio pulpo o probar cuencos de calamar recién capturado — el calamar es tal símbolo de la ciudad que hasta las tapas de alcantarilla llevan tres grabados. El fuerte en forma de estrella de Goryokaku, el primero de estilo occidental construido en Japón, es un buen paseo, especialmente en la época de cerezos, con una torre mirador de 107 metros junto a la entrada.

### Torre de conmutación y convento Trapistino

La antigua Switch Tower (1939), con forma de seta, es la última superviviente de las seis torres de control remoto de tranvías que llegó a haber en Japón. El convento Trapistino, de 1927, es otra herencia del pasado de Hakodate como puerto internacional.

[LINK_BOOKING_HOTELS]

## Dónde alojarse

La zona de la estación de Hakodate o el barrio de Motomachi, junto al mar, dejan los principales puntos de interés a distancia caminable.`,
    relatedCities: ["sapporo"],
    relatedPosts: [
      {
        slug: "hokkaido-en-invierno-la-guia-honesta-de-quien-se-ha-congelado-alli-tres-veces",
        title: "Descubre el invierno mágico de Hokkaido: nieve en polvo, onsen y marisco de primera",
      },
    ],
  },

  hiroshima: {
    citySlug: "hiroshima",
    prefectureSlug: "hiroshima",
    intro:
      "Hiroshima es memoria y reconstrucción a partes iguales, y desde su puerto se llega en poco tiempo a Miyajima, uno de los paisajes más fotografiados de Japón.",
    content: `## Cómo llegar

### Desde Osaka

Shinkansen Sanyo, algo más de una hora y media.

[BANNER_JRPASS]

### Desde Tokio

Shinkansen Tokaido-Sanyo combinado, unas 4 horas en total.

### Desde Fukuoka/Hakata

Shinkansen Sanyo en dirección contraria, aproximadamente 1 hora.

### Moverse por la ciudad

Hiroshima se mueve muy bien en tranvía, incluida la línea que llega hasta el embarcadero para Miyajima.

## Qué ver y hacer

### Parque Memorial de la Paz

El parque y su museo, junto a la Cúpula de la Bomba Atómica —la única estructura que quedó en pie cerca del hipocentro y se conserva tal cual desde 1945—, son la visita central de la ciudad.

[RECURSOS_VIAJE]

### Miyajima

A poca distancia en ferry desde el centro de Hiroshima está Miyajima, con el santuario de Itsukushima y su torii que parece flotar sobre el mar en marea alta — una de las tres vistas más célebres de Japón.

### Isla de los conejos de Okunoshima

La prefectura de Hiroshima incluye también la isla de Okunoshima, conocida por su población de conejos salvajes que se acercan sin miedo a los visitantes.

### Castillo de Hiroshima y jardines Shukkeien

El castillo, apodado "castillo de la carpa", data de la década de 1590 y fue reconstruido en 1958 tras la bomba atómica. Los jardines Shukkeien, trazados en 1620 para el daimyo Asano Nagaakira, son un paseo tradicional de periodo Edo a poca distancia del centro.

### Okonomimura

Un edificio de varias plantas con más de veinte puestos independientes, cada uno con su propia receta de okonomiyaki al estilo Hiroshima —con fideos yakisoba incorporados a la plancha, a diferencia de la versión de Osaka.

## Dónde alojarse

El centro de Hiroshima, cerca de la estación o el Parque de la Paz, es la base más práctica; pasar una noche en Miyajima permite ver el torii sin las aglomeraciones del día.

[LINK_BOOKING_HOTELS]`,
    relatedCities: ["kioto", "osaka"],
    relatedPosts: [
      {
        slug: "la-isla-de-los-conejos-en-japon-el-desafio-de-los-jabalies-y-la-importancia-de-s",
        title: "Protege a los Conejos de Okunoshima: Normas de Alimentación ante la Amenaza de Jabalíes",
      },
    ],
  },

  nara: {
    citySlug: "nara",
    prefectureSlug: "nara",
    intro:
      "Nara fue la primera capital permanente de Japón, y hoy es conocida sobre todo por su gran Buda de bronce y los cientos de ciervos que campan libres por el parque.",
    content: `## Cómo llegar

### Desde Kioto

Tren JR o Kintetsu, unos 45 minutos — Nara es una excursión de un día muy sencilla desde aquí, y la mayoría de los visitantes no se aloja en la ciudad.

### Desde Osaka

Tren JR o Kintetsu, unos 40 minutos, con salidas frecuentes durante todo el día.

## Qué ver y hacer

### Los ciervos del parque de Nara

Los ciervos sika se consideran mensajeros divinos y campan en libertad por todo el parque; hay puestos que venden "shika senbei" (galletas para ciervos) por si quieres darles de comer, aunque conviene hacerlo con cuidado — algunos ya han aprendido a pedir haciendo una reverencia.

### Todai-ji

Alberga un Buda de bronce de más de 15 metros dentro de uno de los edificios de madera más grandes del mundo, reconstruido varias veces desde el siglo VIII.

### Santuario Kasuga Taisha

Destaca por sus senderos flanqueados de miles de faroles de piedra, cubiertos de musgo, que se encienden dos veces al año en festivales concretos.

[PRODUCT_GETYOURGUIDE]

### Kofukuji y Horyuji

Kofukuji conserva una pagoda de cinco pisos trasladada desde Kioto en el año 710 y varias esculturas del escultor medieval Unkei. Un poco más lejos, Horyuji está considerado el edificio de madera más antiguo del mundo, con estatuas atribuidas al escultor Tori Busshi de los siglos VI-VII.

### Naramachi

El antiguo barrio de comerciantes conserva casas machiya de madera, como Koshi-no-Ie, de entrada gratuita. Hay bodegas de sake con más de un siglo de historia, como Harushika, y una pastelería, Nakatanidou, conocida por hacer el mochi a golpe de mazo delante del público.

## Dónde alojarse

Casi todo el mundo visita Nara en el día desde Kioto u Osaka; si decides quedarte, la zona junto al parque deja los principales templos a pie.`,
    relatedCities: ["kioto", "osaka"],
  },

  kanazawa: {
    citySlug: "kanazawa",
    prefectureSlug: "ishikawa",
    intro:
      "Kanazawa escapó a los bombardeos de la Segunda Guerra Mundial, así que conserva barrios históricos casi intactos junto a uno de los jardines más celebrados de Japón.",
    content: `## Cómo llegar

### Desde Tokio

Shinkansen Hokuriku directo, unas dos horas y media.

[BANNER_JRPASS]

### Desde Kioto/Osaka

Tren limited express Thunderbird hasta Tsuruga, con transbordo al Shinkansen Hokuriku hasta Kanazawa — en torno a dos horas y media en total.

## Qué ver y hacer

### Jardín Kenroku-en

Considerado uno de los tres grandes jardines paisajísticos de Japón, con estanques, puentes y pinos cuidados durante generaciones — el nombre significa "jardín de las seis cualidades", por las seis características que la estética clásica china exigía a un jardín perfecto.

### Barrio de Higashi Chaya

Conserva casas de té tradicionales de madera, muchas convertidas hoy en tiendas de artesanía y pan de oro, la especialidad más asociada a Kanazawa.

### Mercado Omicho y Museo del Siglo XXI

El mercado Omicho es la mejor parada para marisco fresco de la costa del mar de Japón, con más de 170 puestos activos desde hace tres siglos. El Museo de Arte Contemporáneo del Siglo XXI, de planta circular y entrada libre en gran parte del edificio, complementa la parte más histórica de la ciudad.

### Puerta Tsuzumi de la estación y Castillo de Kanazawa

La puerta de madera Tsuzumi, de más de 13 metros de alto, recibe a los visitantes nada más salir de la estación de Kanazawa. El castillo, con su reconstruida puerta Ishikawa, tiene una casa de té junto al parque donde tomar matcha con vistas al foso.

### Myoryuji, el templo ninja

Conocido como "templo ninja" por sus escaleras y pasadizos ocultos, pensados para despistar a posibles atacantes, se visita solo con reserva previa. Kanazawa produce la inmensa mayoría del pan de oro de Japón, y varios talleres del centro dejan ver de cerca el batido de las láminas.

[LINK_BOOKING_HOTELS]

## Dónde alojarse

El centro de Kanazawa, entre la estación y el área de Kenroku-en/Higashi Chaya, deja los principales puntos de interés a distancia caminable.`,
  },

  nagasaki: {
    citySlug: "nagasaki",
    prefectureSlug: "nagasaki",
    intro:
      "Nagasaki fue durante siglos el único puerto japonés abierto a Occidente, y esa historia de contacto e intercambio se nota en cada barrio de la ciudad.",
    content: `## Cómo llegar

### Desde Fukuoka/Hakata

Shinkansen Kyushu por la ruta Nishi-Kyushu combinado con limited express, alrededor de 2 horas en total.

[BANNER_JRPASS]

### Desde Tokio u Osaka

Vuelo directo al aeropuerto de Nagasaki suele ser más práctico que el tren para estas distancias.

## Qué ver y hacer

### Parque de la Paz y Dejima

El Parque de la Paz y el Museo de la Bomba Atómica son la visita central, junto al Dejima reconstruido, el antiguo enclave comercial holandés en forma de abanico que fue durante más de dos siglos la única ventana de Japón al exterior.

### Glover Garden

Conserva mansiones de estilo occidental de la era del puerto internacional, con vistas sobre la bahía de Nagasaki desde la colina.

### Vista nocturna desde el monte Inasa

Está entre las más citadas de Japón, junto a las de Hakodate y Kobe — se sube en teleférico desde el centro.

### Catedral de Oura y santuario Suwa

La catedral de Oura, de 1864, es la iglesia más antigua de Japón que se conserva, levantada nada más terminar la prohibición del cristianismo tras siglos de persecución. El santuario Suwa, en pleno centro, tiene entre sus numerosas estatuas guardianas un "gankake komainu" giratorio al que se le pide un deseo dándole vueltas.

[LINK_BOOKING_HOTELS]

## Dónde alojarse

El centro de Nagasaki, cerca del puerto o la estación, conecta bien con la red de tranvías que cubre la mayoría de los puntos de interés.`,
    relatedCities: ["fukuoka"],
  },

  fukuoka: {
    citySlug: "fukuoka",
    prefectureSlug: "fukuoka",
    intro:
      "Fukuoka es la gran puerta de entrada a Kyushu: un aeropuerto a minutos del centro, buena vida nocturna y el ramen tonkotsu como seña de identidad.",
    content: `## Cómo llegar

### En avión desde cualquier punto de Japón

El aeropuerto de Fukuoka está inusualmente cerca del centro, a pocos minutos en metro — para distancias largas suele ser más rápido que el tren.

### Desde Osaka

Shinkansen Sanyo, unas 2 horas y media.

[BANNER_JRPASS]

### Desde Kagoshima

Shinkansen Kyushu hacia el sur, aproximadamente 1 hora y 20 minutos.

## Qué ver y hacer

### Yatai, los puestos de comida callejera

Se instalan cada noche al aire libre en zonas como Nakasu y Tenjin y son la experiencia más característica de la ciudad — mesas compartidas con desconocidos, ramen, yakitori y oden servidos casi a pie de calle.

[RECURSOS_VIAJE]

### Parque Ohori y ramen tonkotsu en Hakata

El parque Ohori, con un lago y un jardín japonés dentro, ofrece un contrapunto tranquilo al bullicio de los yatai. Y, por supuesto, un buen bol de ramen tonkotsu en el barrio de Hakata —caldo de hueso de cerdo cocido durante horas— es casi de visita obligada.

### Santuario Kushida y Kawabata Shotengai

El santuario Kushida, fundado según la tradición en el año 757, es el escenario del festival Hakata Gion Yamakasa cada julio, con sus carrozas monumentales expuestas todo el año. Justo al lado, la galería comercial cubierta de Kawabata Shotengai reúne más de 130 tiendas a lo largo de 400 metros, con más de un siglo de historia.

### Fukuoka Tower y parque Uminonakamichi

La Fukuoka Tower, de 234 metros, tiene un mirador a 123 metros con vistas a toda la bahía de Hakata. El parque Uminonakamichi, en una península junto a la bahía, combina más de 2.000 cerezos con un acuario y la mayor piscina de Kyushu.

### Excursión a Dazaifu

El santuario Dazaifu Tenmangu, dedicado al dios del aprendizaje, queda a un corto trayecto en tren y es una de las excursiones de medio día más habituales desde Fukuoka.

## Dónde alojarse

Tenjin o los alrededores de la estación de Hakata son las zonas más prácticas, ambas bien conectadas con metro y Shinkansen.

[LINK_BOOKING_HOTELS]`,
    relatedCities: ["nagasaki", "beppu"],
  },

  hakone: {
    citySlug: "hakone",
    prefectureSlug: "kanagawa",
    intro:
      "Hakone es la escapada clásica de onsen desde Tokio: montañas volcánicas, vistas al Fuji sobre el lago Ashi, y ryokan tradicionales para pasar la noche.",
    content: `## Cómo llegar

### Desde Shinjuku (Tokio)

El Romancecar de Odakyu conecta Shinjuku con Hakone-Yumoto en poco más de 80 minutos, sin transbordos. El Hakone Freepass cubre los trenes locales, el funicular, el teleférico y el barco del lago Ashi con un único billete.

### Desde la estación de Tokio (vía Odawara)

El Shinkansen Tokaido hasta Odawara (35 minutos) es la opción más rápida si vienes de más lejos o ya tienes JR Pass; desde Odawara, la línea Hakone Tozan continúa hasta Hakone-Yumoto en unos 15 minutos.

[BANNER_JRPASS]

## Qué ver y hacer

### Lago Ashi

Con buen tiempo, se ve el monte Fuji reflejado al fondo del lago — el crucero turístico con forma de barco pirata es la forma más popular de recorrerlo.

### Valle volcánico de Owakudani

El teleférico de Hakone sobrevuela este valle volcánico, con sus fumarolas de azufre activas; los huevos cocidos en sus aguas termales, que se ennegrecen por los minerales, son un tentempié clásico de la parada.

[LINK_RAKUTEN_TRAVEL]

### Museo al Aire Libre de Hakone

Combina esculturas de artistas como Henry Moore con naturaleza, incluida una sala dedicada por completo a obras de Picasso.

### Santuario de Hakone y el Museo de Arte POLA

El torii rojo del santuario de Hakone, medio metido en el lago Ashi, es una de las imágenes más fotografiadas de la zona. El Museo de Arte POLA reúne una de las mayores colecciones de arte impresionista y contemporáneo de Japón, con obras de Monet y Renoir, en un edificio semienterrado en el bosque que deja pasar la luz natural.

## Dónde alojarse

La experiencia clásica es un ryokan con onsen propio, muchos con cena kaiseki y desayuno incluidos — una de las mejores formas de conocer la hospitalidad tradicional japonesa.

[PRODUCT_SEGURO_VIAJE]`,
    relatedCities: ["kamakura", "nikko", "shinjuku"],
  },

  kamakura: {
    citySlug: "kamakura",
    prefectureSlug: "kanagawa",
    intro:
      "Kamakura fue la capital de facto de Japón durante el periodo homónimo, y hoy es una excursión de un día perfecta desde Tokio: templos, el Gran Buda y costa.",
    content: `## Cómo llegar

### Desde Tokio

La línea JR Yokosuka conecta el centro de Tokio con Kamakura en aproximadamente una hora, sin transbordos.

[BANNER_JRPASS]

### Desde Yokohama

Tren JR o Shonan Monorail, unos 25-30 minutos — una combinación habitual para quien visita ambas ciudades el mismo día.

### Moverse por Kamakura

El pequeño tranvía Enoden une la estación de Kamakura con la costa y Enoshima, parada a parada por los templos más conocidos.

## Qué ver y hacer

### Gran Buda de Kotoku-in

Al aire libre desde el siglo XIII, tras perder el edificio que lo cubría en un tsunami, es la imagen más conocida de la ciudad. Se puede entrar en el interior de la estatua por una pequeña puerta lateral.

### Hase-dera y el bosque de bambú de Hokoku-ji

Hase-dera añade jardines escalonados con vistas al mar, y el bosque de bambú de Hokoku-ji, mucho más pequeño y tranquilo que el de Arashiyama en Kioto, es una parada con una casa de té al fondo del sendero.

### Paseo en Enoden hacia Enoshima

El pequeño tranvía Enoden, con el mar como fondo en buena parte del trayecto, lleva hasta Enoshima, una isla unida a tierra por un puente peatonal con templos y miradores sobre la costa.

### Santuario Tsurugaoka Hachimangu

El gran santuario sintoísta de Kamakura, con patrocinio samurái histórico, está unido al mar por el camino sagrado Wakamiyaoji, flanqueado de cerezos en primavera.

### Los grandes templos zen: Kenchoji y Engakuji

Kenchoji, el templo zen más antiguo de la ciudad, tiene un mirador panorámico al final de un tramo de escaleras entre cedros centenarios. Engakuji, cerca de la estación de Kita-Kamakura, se sube por una escalinata similar hasta un pabellón de campana declarado tesoro nacional.

## Dónde alojarse

La mayoría visita Kamakura en el día desde Tokio o Yokohama; si te quedas, la zona junto a la estación o hacia la costa de Enoshima son las más agradables.`,
    relatedCities: ["hakone", "shinjuku"],
  },

  nikko: {
    citySlug: "nikko",
    prefectureSlug: "tochigi",
    intro:
      "Nikko reúne, a poco más de dos horas de Tokio, uno de los santuarios más recargados de Japón y paisajes de montaña que cambian por completo en otoño.",
    content: `## Cómo llegar

### Desde Asakusa (Tokio)

Los trenes de Tobu Railway, incluidos los de largo recorrido con reserva de asiento, conectan directamente con Nikko en aproximadamente dos horas — la opción más cómoda y sin transbordos.

### Desde la estación de Tokio (vía Utsunomiya)

Shinkansen Tohoku hasta Utsunomiya (50 minutos) + línea JR Nikko (45 minutos); esta ruta sí está cubierta por el JR Pass, a diferencia de la línea Tobu.

[BANNER_JRPASS]

## Qué ver y hacer

### Santuario Toshogu

Mausoleo del shogun Tokugawa Ieyasu y Patrimonio de la Humanidad, es famoso por su decoración recargada —muy distinta a la sobriedad habitual de otros santuarios japoneses— y por sus tallas de los "tres monos sabios" (no ver, no oír, no hablar el mal).

[LINK_RAKUTEN_TRAVEL]

### Lago Chuzenji y cascada de Kegon

Más arriba en la montaña, el lago Chuzenji y la cascada de Kegon, con un ascensor que baja hasta una plataforma de observación a media caída, ofrecen un paisaje muy distinto al de los templos, especialmente espectacular en otoño a lo largo de la carretera de montaña Irohazaka.

### Santuario Futarasan y puente Shinkyo

Futarasan, fundado en el año 782, es más antiguo que el propio Toshogu y mucho más sobrio en su decoración. El puente Shinkyo, de laca roja sobre el río Daiya, está considerado uno de los tres puentes más bonitos de Japón y se puede cruzar pagando una pequeña entrada.

### Mausoleo Taiyuinbyo y Kanmangafuchi

El Taiyuinbyo, dedicado al shogun Tokugawa Iemitsu, se construyó deliberadamente más sobrio que el de su abuelo Ieyasu, por respeto jerárquico. El paseo del Kanmangafuchi, junto al río, reúne decenas de estatuas de piedra del bodhisattva Jizo con gorros y baberos rojos, en un tramo mucho más tranquilo que el distrito de templos principal.

## Dónde alojarse

El centro de Nikko, cerca de Toshogu, es lo más práctico para los templos; la zona del lago Chuzenji/Yumoto Onsen añade una noche de onsen y montaña.`,
    relatedCities: ["hakone", "asakusa"],
  },

  beppu: {
    citySlug: "beppu",
    prefectureSlug: "oita",
    intro:
      "Beppu tiene una de las mayores concentraciones de aguas termales de Japón, con «infiernos» de colores imposibles y baños de arena caliente incluidos.",
    content: `## Cómo llegar

### Desde Fukuoka/Hakata

Tren limited express (Sonic), un trayecto de unas dos horas por la costa.

[BANNER_JRPASS]

### En avión

El aeropuerto de Oita recibe vuelos desde varias ciudades japonesas, con traslado en autobús hasta el centro de Beppu (unos 45 minutos).

## Qué ver y hacer

### Los jigoku (infiernos)

Un recorrido de ocho estanques termales de colores intensos —el "infierno de sangre" es rojo por los óxidos de hierro disueltos, el "infierno del mar" es de un azul turquesa por el sulfato de cobalto— que se visitan más que se bañan en ellos.

[LINK_RAKUTEN_TRAVEL]

### Onsen tradicionales y baños de arena

Beppu tiene una de las mayores concentraciones de aguas termales de Japón, con onsen tradicionales por todo el pueblo y baños de arena caliente, donde te entierran hasta el cuello en arena volcánica templada frente al mar.

### Teleférico al monte Tsurumi

Sube hasta cerca de la cima del monte Tsurumi para vistas panorámicas de la bahía de Beppu y, en días despejados, hasta Shikoku al otro lado del mar.

### Infierno Tatsumaki y Oniishibozu

Entre los ocho jigoku, el Tatsumaki es un géiser que lanza agua a 105°C hasta 20 metros de altura en erupciones de 6-10 minutos, mientras que el Oniishibozu debe su nombre a sus burbujas de barro gris, que recuerdan a la cabeza afeitada de un monje.

## Dónde alojarse

Un ryokan con onsen es la razón de ser de Beppu — hay opciones desde pensiones sencillas hasta ryokan tradicionales más elaborados.

[PRODUCT_SEGURO_VIAJE]`,
    relatedCities: ["fukuoka"],
  },

  naha: {
    citySlug: "naha",
    prefectureSlug: "okinawa",
    intro:
      "Naha es la puerta de entrada a Okinawa, con una cultura, gastronomía y arquitectura que se sienten distintas al resto de Japón por herencia del antiguo Reino de Ryukyu.",
    content: `## Cómo llegar

### Desde Tokio

Vuelo directo de unas 2 horas y 45 minutos a Naha; es la ruta con más frecuencias diarias.

### Desde Osaka o Fukuoka

Vuelo directo de aproximadamente 2 horas.

### Nota sobre el JR Pass

Okinawa no está conectada por tren con el resto del país, así que el avión es la única forma práctica de llegar, y el trayecto no está cubierto por el Japan Rail Pass ni pases similares.

[LINK_SKYSCANNER_VUELOS]

## Qué ver y hacer

### Castillo de Shuri

Reconstruido varias veces, la última tras un incendio en 2019, refleja la arquitectura propia del antiguo Reino de Ryukyu, con colores y proporciones muy distintas a las de un castillo japonés tradicional — más cercana a la tradición china y del sudeste asiático.

### Calle Kokusai-dori

Concentra tiendas y restaurantes a lo largo de casi dos kilómetros; es el sitio más fácil para probar la cocina okinawense (goya champuru, soba de Okinawa), que se nota claramente diferente a la del resto del país.

### Excursiones en ferry a islas cercanas

Desde el puerto de Naha se organizan excursiones en ferry a playas e islas cercanas, una buena opción para quien no tenga tiempo de llegar hasta Ishigaki o Miyakojima.

### Cuevas de Gyokusendo y acuario Churaumi

Las cuevas de Gyokusendo, con 5 km de longitud (850 metros abiertos al público), forman parte del complejo Okinawa World. El acuario Churaumi, algo más lejos en el Ocean Expo Park, tiene uno de los tanques más grandes del mundo, con tiburones ballena y mantarrayas nadando juntos. El monorraíl YuiRail, de 13 km y 15 estaciones, conecta el aeropuerto con el centro de Naha.

### Memoria de la Batalla de Okinawa

La batalla de 1945, de 82 días, causó más de 250.000 muertos entre civiles y militares —casi la mitad de la población local de entonces—, y el monumento Himeyuri recuerda a más de 1.700 estudiantes de 14 a 17 años alistadas forzosamente como enfermeras durante el combate.

## Dónde alojarse

Kokusai-dori y el centro de Naha son lo más práctico para tiendas y restaurantes; si la playa es la prioridad, los resorts del norte de la isla principal o de las islas periféricas compensan el trayecto extra.

[PRODUCT_SEGURO_VIAJE]`,
  },

  tokio: {
    citySlug: "tokio",
    prefectureSlug: "tokyo",
    intro:
      "Tokio es la megalópolis que da nombre al país que quieres conocer: 23 distritos especiales que funcionan casi como ciudades independientes, unidos por una de las redes de tren más eficientes del mundo.",
    content: `## Cómo orientarte

Tokio no tiene un único "centro" en el sentido tradicional: se organiza en 23 distritos especiales (Shinjuku, Shibuya, Asakusa, Chiyoda, Minato...), cada uno con su propio carácter, conectados por la línea circular JR Yamanote y una amplia red de metro. La mayoría de los visitantes se instala cerca de una estación de la Yamanote y se mueve desde ahí.

## Cómo llegar

### Desde el aeropuerto de Narita

El Narita Express llega al centro en poco más de una hora y está incluido en el Japan Rail Pass; el Skyliner es más rápido hasta Ueno (unos 40 minutos) pero requiere un transbordo después.

[BANNER_JRPASS]

### Desde el aeropuerto de Haneda

Mucho más cerca del centro: monorraíl o línea Keikyu, ambos en 20-30 minutos hasta las principales estaciones.

[RECURSOS_VIAJE]

## Por dónde empezar

Shinjuku, Shibuya y Asakusa son los tres distritos clásicos para una primera visita, cada uno con un carácter muy distinto — de los rascacielos y la vida nocturna al ambiente tradicional junto al templo Senso-ji. Cada uno tiene su propia guía dentro de Destinos.`,
    relatedCities: ["shinjuku", "shibuya", "asakusa"],
    relatedPosts: [
      {
        slug: "eventos-imperdibles-en-tokio-para-agosto-2026",
        title: "Eventos Imperdibles en Tokio Agosto 2026: Fuegos Artificiales y Festivales",
      },
    ],
  },

  otaru: {
    citySlug: "otaru",
    prefectureSlug: "hokkaido",
    intro:
      "Otaru es la escapada clásica desde Sapporo: un antiguo puerto con canal, almacenes de piedra y una tradición artesanal del vidrio que sigue viva.",
    content: `## Qué ver y hacer

### Canal de Otaru

Flanqueado por antiguos almacenes de piedra reconvertidos en tiendas y restaurantes, es la postal más conocida de la ciudad, especialmente de noche con las farolas de gas encendidas. Otaru fue un puerto e importante centro financiero a principios del siglo XX, y de esa época quedan varios edificios de estilo occidental repartidos por el centro.

### Vidrio soplado y Museo de Cajas de Música

La ciudad es conocida por sus talleres de vidrio soplado, muchos abiertos a la visita, y por su marisco, sobre todo el erizo de mar. El Museo de Cajas de Música, en un antiguo almacén, reúne cientos de piezas mecánicas de distintas épocas y organiza talleres para montar la tuya propia como recuerdo.

[LINK_OTARU_MUSICBOX]

### Museo del Ferrocarril y calle Sakaimachi

En la antigua terminal de Temiya, el Museo del Ferrocarril reúne 50 vehículos históricos, incluida la locomotora de vapor Shizuka, con paseos en tren en verano. La calle Sakaimachi conserva edificios de principios del siglo XX con tiendas como la pastelería LeTAO, y a principios de febrero el Festival Yuki Akari no Michi llena el canal de farolillos de nieve iluminados.

## Cómo llegar

### Desde Sapporo

Tren rápido JR, unos 30-40 minutos, con salidas frecuentes durante todo el día.

## Dónde alojarse

Se visita bien como excursión de un día desde Sapporo; el centro, junto al canal, es la zona más práctica si te quedas.`,
    relatedCities: ["sapporo"],
  },

  aomori: {
    citySlug: "aomori",
    prefectureSlug: "aomori",
    intro:
      "Aomori es la puerta norte de Honshu hacia Hokkaido, y cada agosto se transforma con uno de los festivales más espectaculares de Japón, el Nebuta Matsuri.",
    content: `## Qué ver y hacer

### Nebuta Matsuri y museo Nebuta Warasse

El Nebuta Matsuri, celebrado a principios de agosto, llena las calles de gigantescas estructuras de papel iluminadas con guerreros y figuras mitológicas — uno de los grandes festivales de verano de Japón. El museo Nebuta Warasse exhibe estas figuras fuera de temporada, y hay talleres donde se puede probar a tocar los tambores taiko del festival.

### Yacimiento de Sannai-Maruyama

A las afueras de la ciudad, conserva los restos de un gran asentamiento del periodo Jomon (hace más de 5.000 años), declarado Patrimonio de la Humanidad en 2021. Aomori es también una de las principales regiones productoras de manzana de Japón.

### Mercados Auga y Furukawa

Con un sistema de tickets, se puede montar un nokkedon —un bol de arroz a la carta— con sashimi fresco del estrecho de Tsugaru en cualquiera de los dos mercados. El Museo de Arte de Aomori, obra del arquitecto Jun Aoki semienterrada en el terreno, alberga la gran escultura de perro del artista Yoshitomo Nara.

## Cómo llegar

### Desde Tokio

Shinkansen Tohoku hasta Shin-Aomori, unas 3 horas.

[BANNER_JRPASS]

### En avión

Aomori tiene aeropuerto propio, con vuelos directos desde varias ciudades de Japón.

## Dónde alojarse

El centro, cerca de la estación de Aomori y el museo Nebuta Warasse, es la zona más práctica y deja Hirosaki y Hachinohe a un trayecto corto de tren.`,
    relatedCities: ["hirosaki", "hachinohe"],
  },

  hirosaki: {
    citySlug: "hirosaki",
    prefectureSlug: "aomori",
    intro:
      "Hirosaki conserva uno de los pocos castillos originales de Japón y una de las mejores floraciones de cerezos del país en primavera.",
    content: `## Qué ver y hacer

### Castillo de Hirosaki

Rodeado por un parque con más de 2.500 cerezos, es uno de los mejores lugares de Japón para el hanami en primavera, con barcas de remo disponibles en el foso durante la floración.

### Barrio occidental y jardín Fujita Kinenteien

La ciudad conserva un barrio de casas de estilo occidental de la era Meiji y Taisho, y el jardín Fujita Kinenteien, con vistas al castillo desde su mirador elevado, es una de las zonas productoras de manzana más importantes del país.

### Neputa Matsuri

En agosto, el Neputa Matsuri de Hirosaki —distinto del Nebuta de Aomori, con carrozas en forma de abanico en vez de figuras tridimensionales— llena las calles de música y faroles.

### Zenringai y distrito samurái de Nakacho

Zenringai reúne 33 templos budistas de la escuela zen Soto, agrupados en 1610 para proteger espiritualmente el castillo. El distrito de Nakacho conserva cuatro residencias samurái de rango medio abiertas al público, con sus jardines y setos de época casi intactos.

## Cómo llegar

### Desde Aomori o Shin-Aomori

Tren local o limited express, unos 30-40 minutos.

[BANNER_JRPASS]

## Dónde alojarse

El centro histórico, entre el castillo y la estación, permite recorrer a pie la mayoría de los puntos de interés.`,
    relatedCities: ["aomori"],
  },

  hachinohe: {
    citySlug: "hachinohe",
    prefectureSlug: "aomori",
    intro:
      "Hachinohe es un puerto pesquero en la costa del Pacífico de Aomori, conocido por su mercado matutino y su marisco.",
    content: `## Qué ver y hacer

### Mercado Hachinohe Asaichi

Uno de los más grandes de Japón, reúne cientos de puestos los fines de semana con marisco, verdura y comida callejera lista para comer en el propio mercado, empezando muy temprano. La ciudad vive en gran medida de la pesca, y su santuario Kushihiki Hachimangu es uno de los más importantes de la región.

### Costa de Tanesashi

Con praderas que llegan hasta los acantilados sobre el Pacífico, es un tramo poco conocido pero muy fotogénico de la ruta costera Michinoku Shiokaze, que conecta Hachinohe con Soma, ya en Fukushima.

### Castillo Nejo y festival Sansha Taisai

El castillo Nejo, construido en 1334 por el clan Nanbu y sitio histórico nacional desde 1941, conserva su salón principal, atalaya y fragua reconstruidos. Del 31 de julio al 4 de agosto, el festival Sansha Taisai saca a la calle carrozas tan altas que se pliegan sobre la marcha para pasar bajo los cables eléctricos.

## Cómo llegar

### Desde Tokio

Shinkansen Tohoku directo hasta la estación de Hachinohe, unas 3 horas.

[BANNER_JRPASS]

## Dónde alojarse

El centro, junto al puerto y el mercado, es la zona más práctica; la costa de Tanesashi queda a un corto trayecto en tren local.`,
    relatedCities: ["aomori"],
  },

  morioka: {
    citySlug: "morioka",
    prefectureSlug: "iwate",
    intro:
      "Morioka es la capital de Iwate, conocida por sus tres fideos (wanko soba, reimen y jajamen) y por ser la puerta de entrada a Hiraizumi.",
    content: `## Qué ver y hacer

### Wanko soba y reimen

Morioka es famosa gastronómicamente por el wanko soba (un ritual de comer fideos en pequeños boles que se van rellenando sin parar, con récords locales de cientos de boles) y por el reimen, fideos fríos de estilo coreano-japonés.

### Castillo Morioka y río Kitakami

El castillo Morioka, hoy en ruinas convertidas en parque, y el río Kitakami que atraviesa la ciudad completan un paseo tranquilo por el centro.

### Granja histórica de Koiwai

A las afueras, esta granja fundada en el siglo XIX ofrece praderas abiertas con el monte Iwate como telón de fondo.

### Hoonji y el festival Sansa Odori

El templo Hoonji reúne 500 estatuas rakan, talladas a mano por artesanos venidos de Kioto, cada una con un rostro distinto. Del 1 al 4 de agosto, el festival Sansa Odori convierte la avenida principal en una pista de baile, con la antigua torre de vigilancia Konyacho Banya (1891) como una de las imágenes más reconocibles de la ciudad.

## Cómo llegar

### Desde Tokio

Shinkansen Tohoku directo, poco más de 2 horas.

[BANNER_JRPASS]

## Dónde alojarse

El centro, cerca de la estación, deja tanto el casco histórico como las excursiones a Hiraizumi o Tono a un trayecto corto.`,
    relatedCities: ["hiraizumi", "tono"],
  },

  hiraizumi: {
    citySlug: "hiraizumi",
    prefectureSlug: "iwate",
    intro:
      "Hiraizumi fue, en el siglo XII, una capital regional que rivalizaba en esplendor con Kioto, y hoy es Patrimonio de la Humanidad por sus templos budistas.",
    content: `## Qué ver y hacer

### Templo Chuson-ji

Con su Salón Dorado (Konjikido, de 1124) recubierto de pan de oro, es el gran testimonio del esplendor de Hiraizumi en el siglo XII —dentro se conservan los restos momificados de varios líderes del clan Fujiwara— y se recorre caminando por una senda de cedros centenarios. De más de una docena de edificios originales del templo, solo sobreviven dos: el Konjikido y el Kyozo (1122), el almacén de sutras budistas más antiguo del recinto.

### Motsu-ji

Conserva uno de los pocos jardines de estilo "Tierra Pura" originales de Japón que representan el paraíso budista, con un estanque que se puede rodear a pie en un cómodo paseo circular. El conjunto arqueológico de Hiraizumi fue declarado Patrimonio de la Humanidad por la UNESCO en junio de 2011.

### Takkoku no Iwaya

Un pequeño templo excavado en un acantilado a las afueras, añade una parada adicional para quien tenga medio día más.

## Cómo llegar

### Desde Morioka

Tren local, unos 40 minutos.

### Desde Ichinoseki

Tren local desde esta estación, que sí tiene parada de Shinkansen Tohoku — la opción más rápida si vienes de Tokio.

[BANNER_JRPASS]

## Dónde alojarse

Hiraizumi se visita casi siempre como excursión de un día desde Morioka o Ichinoseki; los templos principales están a poca distancia a pie de la estación.`,
    relatedCities: ["morioka", "tono"],
  },

  tono: {
    citySlug: "tono",
    prefectureSlug: "iwate",
    intro:
      'Tono es un valle rural que inspiró uno de los libros de folclore más influyentes de Japón, «Tono Monogatari», y sigue siendo la imagen del campo japonés tradicional.',
    content: `## Qué ver y hacer

### Leyendas de kappa y folclore local

Tono se hizo famoso por la recopilación de leyendas locales sobre kappa (criaturas acuáticas del folclore) y otros espíritus, publicada a principios del siglo XX y todavía muy presente en la identidad del valle.

### Casas magariya y Tono Furusato Mura

El valle conserva casas de labranza tradicionales de estilo "magariya" (con el establo integrado en forma de L) y un paisaje rural que apenas ha cambiado. El Museo al Aire Libre Tono Furusato Mura reúne varias de estas granjas trasladadas de otros puntos del valle, con demostraciones de artesanía tradicional y talleres para probar oficios como tejer o moler arroz a mano.

## Cómo llegar

### Desde Hanamaki

Línea JR Kamaishi; Hanamaki tiene parada de Shinkansen Tohoku, así que suele ser el punto de transbordo más rápido desde Tokio.

[BANNER_JRPASS]

### Desde Morioka

También por la línea JR Kamaishi, con más frecuencias que desde Hanamaki.

## Dónde alojarse

Tono se recorre bien como excursión de un día desde Morioka; quienes prefieran quedarse encuentran alojamiento sencillo tipo minshuku (pensión familiar) en pleno valle.`,
    relatedCities: ["morioka", "hiraizumi"],
  },

  sendai: {
    citySlug: "sendai",
    prefectureSlug: "miyagi",
    intro:
      "Sendai es la gran ciudad de Tohoku, conocida como la «ciudad de los árboles» por sus avenidas arboladas y como base para explorar la costa y las montañas del norte.",
    content: `## Qué ver y hacer

### Ruinas del castillo de Sendai

Fundado por el señor feudal Date Masamune, ofrecen vistas sobre la ciudad y tienen un pequeño museo con armadura samurái original.

### Mausoleo de Zuihoden

Muy cerca del castillo, conserva la tumba del propio Date Masamune con una decoración mucho más recargada de lo habitual en un mausoleo japonés.

### Tanabata Matsuri

En agosto, es uno de los festivales de esta celebración más grandes de Japón, con calles cubiertas de adornos de papel de colores. La ciudad es también conocida por su lengua de vaca (gyutan) a la parrilla, con toda una calle de restaurantes especializados en la propia estación de Sendai.

### Mediateca de Sendai

Este edificio del arquitecto Toyo Ito, de 2001, sostiene sus plantas de cristal sobre columnas con forma de tronco de árbol y tiene entrada libre — un contraste moderno con el legado samurái de Date Masamune que domina el resto de la ciudad.

## Cómo llegar

### Desde Tokio

Shinkansen Tohoku directo, aproximadamente 1 hora y media.

[BANNER_JRPASS]

[RECURSOS_VIAJE]

## Dónde alojarse

El centro, cerca de la estación de Sendai, concentra la mayor oferta de hoteles y es la base habitual para excursiones de un día a Matsushima o Ishinomaki.`,
    relatedCities: ["matsushima", "ishinomaki"],
  },

  matsushima: {
    citySlug: "matsushima",
    prefectureSlug: "miyagi",
    intro:
      "La bahía de Matsushima está considerada, junto a Miyajima y Amanohashidate, una de las tres vistas más célebres de Japón.",
    content: `## Qué ver y hacer

### La bahía y sus islotes

Cientos de islotes cubiertos de pinos salpican la bahía; se puede recorrer en crucero turístico de unos 50 minutos o contemplar desde varios miradores en tierra, como el de Otakamori.

### Templo Zuigan-ji

Excavado parcialmente en la roca, es uno de los templos zen más importantes de la región.

### Godaido y casa de té Kanrantei

El pequeño templo de Godaido, fundado en el año 807, guarda cinco estatuas que solo se muestran al público cada 33 años (la última vez, en 2006), y se levanta sobre unos islotes unidos a tierra por puentes de madera; la casa de té Kanrantei, del periodo Momoyama, ofrece otra perspectiva clásica de la bahía. En total, la bahía reúne unas 260 islas e islotes, cuya geografía amortiguó buena parte del impacto del tsunami de 2011.

## Cómo llegar

### Desde Sendai

Tren local JR Senseki, unos 40 minutos, con salidas frecuentes.

## Dónde alojarse

La mayoría de los visitantes hace Matsushima en el día desde Sendai; si te quedas, hay ryokan frente a la bahía con vistas a los islotes.`,
    relatedCities: ["sendai"],
  },

  ishinomaki: {
    citySlug: "ishinomaki",
    prefectureSlug: "miyagi",
    intro:
      "Ishinomaki es un puerto pesquero en la costa de Miyagi, muy golpeado por el tsunami de 2011 y reconstruido con un fuerte vínculo a la obra del manga Ishinomori Shotaro.",
    content: `## Qué ver y hacer

### Museo Manga Ishinomori

Dedicado al creador de Kamen Rider y Cyborg 009, se ha convertido en símbolo de la reconstrucción de la ciudad tras el terremoto y tsunami de 2011. Ishinomaki sigue siendo uno de los puertos pesqueros más importantes de la región, con buen marisco fresco.

### Isla sagrada de Kinkasan

Frente a la costa, alberga un santuario centenario y una población de ciervos y monos salvajes; se llega en un corto trayecto en ferry y se puede recorrer a pie en un día completo de senderismo.

## Cómo llegar

### Desde Sendai

Tren local JR Senseki, poco más de una hora.

## Dónde alojarse

Se visita bien en el día desde Sendai; el centro, junto al puerto, es la zona más práctica si decides pasar la noche.`,
    relatedCities: ["sendai", "matsushima"],
  },

  akita: {
    citySlug: "akita",
    prefectureSlug: "akita",
    intro:
      "Akita es conocida por su arroz, su sake y el festival Kanto, en el que los participantes equilibran largas varas cargadas de faroles.",
    content: `## Qué ver y hacer

### Kanto Matsuri

En agosto, es de los festivales más vistosos de Tohoku: los participantes sostienen en equilibrio varas de varios metros cargadas con decenas de faroles encendidos, y fuera de temporada se puede probar la técnica en sesiones de práctica abiertas al público.

### Parque Senshu y arroz y sake de Akita

Akita es también una de las principales regiones productoras de arroz y sake de Japón, y el parque Senshu ocupa el terreno del antiguo castillo de la ciudad.

### Akita Inu

La raza de perro Akita Inu, símbolo de fidelidad en todo Japón, es originaria de esta prefectura, y un pequeño museo junto a la estación recoge su historia.

### Museo de Arte de Akita

Obra del arquitecto Tadao Ando (2013), reúne obras de Picasso y Rubens junto a una colección del pintor japonés Tsuguharu Foujita, frente al parque Senshu.

## Cómo llegar

### Desde Tokio

Shinkansen Akita directo, unas 4 horas vía Morioka.

[BANNER_JRPASS]

## Dónde alojarse

El centro, cerca de la estación, es la base habitual para excursiones de un día a Kakunodate o Yokote.`,
    relatedCities: ["kakunodate", "yokote"],
  },

  kakunodate: {
    citySlug: "kakunodate",
    prefectureSlug: "akita",
    intro:
      "Kakunodate conserva uno de los barrios de samuráis mejor preservados de Japón, con casas señoriales tradicionales bajo cientos de cerezos llorones.",
    content: `## Qué ver y hacer

### Barrio samurái y casa Aoyagi

El antiguo barrio samurái mantiene varias residencias históricas abiertas al público, algunas con sus jardines originales; la casa Aoyagi, la más grande y mejor conservada, funciona como museo con objetos originales de la familia y una colección de espadas y armadura samurái.

### Cerezos llorones

En primavera, los cerezos llorones plantados hace generaciones —unos 400, muchos con más de 300 años— convierten las calles del barrio samurái en uno de los rincones de hanami más fotografiados de Tohoku, con cerca de un millón de visitantes en la temporada.

### Museo Kabazaiku y sake Hideyoshi

El museo Kabazaiku muestra la técnica local de artesanía en corteza de cerezo, con 200 años de tradición y once artesanos maestros todavía activos. La destilería familiar Hideyoshi, con más de 300 años y 19 generaciones, ofrece catas guiadas con reserva previa.

## Cómo llegar

### Desde Akita o desde Tokio

Shinkansen Akita directo hasta la estación de Kakunodate — unos 45 minutos desde Akita, o unas 3 horas y cuarto desde Tokio.

[BANNER_JRPASS]

## Dónde alojarse

El barrio samurái está a un paseo corto de la estación; se visita bien en el día desde Akita o como parada camino de otras zonas de la prefectura.`,
    relatedCities: ["akita"],
  },

  yokote: {
    citySlug: "yokote",
    prefectureSlug: "akita",
    intro:
      "Yokote es conocida sobre todo por el Kamakura Matsuri, un festival de invierno en el que se construyen iglús de nieve iluminados por dentro.",
    content: `## Qué ver y hacer

### Kamakura Matsuri

Cada febrero, la ciudad se llena de "kamakura" — pequeños iglús de nieve con un altar dentro, iluminados con velas, en los que los niños del pueblo reciben a los visitantes con arroz dulce y bebidas calientes; algunos incluso se pueden reservar para cenar dentro por la noche.

### Yakisoba de Yokote

El resto del año, Yokote es una tranquila ciudad agrícola típica del interior de Akita, conocida también dentro del país por su yakisoba local, más suave y menos especiado que el de otras regiones.

## Cómo llegar

### Desde Akita

Tren local JR Ou, poco más de una hora.

## Dónde alojarse

Fuera del Kamakura Matsuri de febrero, Yokote se visita bien como excursión de un día desde Akita.`,
    relatedCities: ["akita"],
  },

  yamagata: {
    citySlug: "yamagata",
    prefectureSlug: "yamagata",
    intro:
      "Yamagata es la puerta a uno de los templos de montaña más espectaculares de Japón, Yamadera, además de una región conocida por su cereza y sus onsen.",
    content: `## Qué ver y hacer

### Yamadera

("El templo de la montaña"), formalmente Risshaku-ji, se alcanza tras subir más de mil escalones tallados en la roca hasta un pequeño santuario con vistas al valle — una de las excursiones de un día más recomendables de Tohoku.

### Montañas Zao

La ciudad de Yamagata es también un buen punto de partida para el onsen y el esquí en las montañas Zao, donde en invierno los árboles cubiertos de hielo forman los conocidos "monstruos de nieve" (juhyo), visibles incluso sin esquiar subiendo en telesilla.

[LINK_ZAO_ONSEN]

### Capital del ramen y parque Kajo

Yamagata reivindica el mayor consumo de ramen per cápita de Japón, con el tori chuka (caldo de pollo) como especialidad local. El parque Kajo ocupa las ruinas del castillo de Yamagata, reconstruido en 1592 y singular por no haber tenido nunca una torre principal (tenshu), a diferencia de la mayoría de castillos japoneses.

## Cómo llegar

### Desde Tokio

Shinkansen Yamagata directo, unas 2 horas y media.

[BANNER_JRPASS]

## Dónde alojarse

El centro de Yamagata es la base más práctica para Yamadera (excursión de un día); Zao Onsen, algo más lejos, merece una noche si el objetivo es el esquí o el onsen.`,
    relatedCities: ["yonezawa", "tsuruoka"],
  },

  yonezawa: {
    citySlug: "yonezawa",
    prefectureSlug: "yamagata",
    intro:
      "Yonezawa es sinónimo, en Japón, de una de las carnes de vacuno de mayor prestigio del país, la wagyu de Yonezawa.",
    content: `## Qué ver y hacer

### Wagyu de Yonezawa

La ciudad da nombre a una de las tres grandes marcas de wagyu de Japón (junto a Kobe y Matsusaka), criada en la región desde el siglo XIX y servida en yakiniku y sukiyaki en restaurantes especializados del centro.

### Santuario Uesugi Jinja

Yonezawa fue el feudo del clan Uesugi, y este santuario conserva objetos de la época samurái y honra la memoria de Uesugi Kenshin y Uesugi Yozan, dos de los señores feudales más respetados del Japón medieval.

## Cómo llegar

### Desde Yamagata o desde Tokio

Shinkansen Yamagata directo hasta la estación de Yonezawa — unos 30 minutos desde Yamagata, o unas 2 horas desde Tokio.

[BANNER_JRPASS]

## Dónde alojarse

Se visita bien como excursión de un día desde Yamagata; el centro, cerca del santuario Uesugi, es la zona más agradable para pasear.`,
    relatedCities: ["yamagata"],
  },

  tsuruoka: {
    citySlug: "tsuruoka",
    prefectureSlug: "yamagata",
    intro:
      "Tsuruoka, en la costa del mar de Japón, es la base tradicional para peregrinar a las Tres Montañas de Dewa, uno de los grandes centros del ascetismo Shugendo.",
    content: `## Qué ver y hacer

### Tres Montañas de Dewa

Haguro, Gassan y Yudono son desde hace siglos uno de los principales destinos de peregrinación de Japón, asociadas a los monjes ascetas yamabushi y, según la tradición Shugendo, al presente, el pasado y el futuro respectivamente. El monte Haguro, el más accesible en cualquier época del año, se sube por una escalinata de 2.446 escalones de piedra flanqueada por 585 cedros centenarios —con tres estrellas en la Guía Michelin—, con una pagoda de cinco pisos a mitad de camino. En invierno, solo Haguro queda accesible por la nieve.

### Edificios históricos de Tsuruoka

La escuela Chidokan (1805) es la única academia neoconfuciana de este tipo que se conserva en pie en Tohoku, de entrada gratuita. El Museo Chido reúne seis edificios históricos, entre ellos la antigua residencia del señor feudal, y el Museo Taihokan, de estilo occidental con cúpula roja, se construyó en 1915 para conmemorar la coronación del emperador Taisho. La pequeña iglesia católica de 1903, con suelo de tatami bajo su arquitectura románica, añade otro contraste poco habitual en la ciudad.

### Acuario Kamo

Con la mayor colección de medusas del mundo, es otra parada muy recomendable, y la llanura de Shonai que rodea la ciudad es una de las regiones arroceras más prestigiosas de Japón.

[LINK_KAMO_AQUARIUM]

## Cómo llegar

### Desde Niigata o Yamagata

Tren limited express (Inaho desde Niigata, o Tsubasa + transbordo desde Yamagata).

[BANNER_JRPASS]

### En avión

Vuelo directo desde Tokio al aeropuerto de Shonai, unos 55 minutos.

## Dónde alojarse

El centro de Tsuruoka es la base habitual; quienes hagan la peregrinación completa a las Tres Montañas suelen pasar una noche en un templo con alojamiento (shukubo) en Haguro.`,
    relatedCities: ["yamagata"],
  },

  "fukushima": {
    citySlug: "fukushima",
    prefectureSlug: "fukushima",
    intro:
      "Fukushima capital, en el interior de la prefectura, queda lejos de la costa afectada por el accidente nuclear de 2011 y es conocida por su fruta y sus onsen.",
    content: `## Qué ver y hacer

### Fruta de Fukushima e Iizaka Onsen

La ciudad de Fukushima es una de las grandes productoras de fruta de Japón, especialmente melocotón y manzana, con huertos abiertos a la recolección en temporada donde se puede comer la fruta recién cogida. El onsen de Iizaka, en las afueras, es uno de los más antiguos de la región.

### Parque Hanamiyama

Una antigua finca de cultivo de flores reconvertida en mirador, se llena de cerezos, melocotoneros y azaleas en flor a la vez durante unas pocas semanas de primavera.

### Radiación y gastronomía local

Los niveles de radiación en la capital y en la práctica totalidad de la prefectura volvieron hace años a los valores previos a 2011; la zona de exclusión que aún queda ocupa solo alrededor del 3% del territorio de Fukushima, muy lejos de la ciudad. El plato más propio de la ciudad es el enban gyoza, servido directamente en la sartén de hierro donde se cocina, con más de treinta restaurantes especializados en el centro.

## Cómo llegar

### Desde Tokio

Shinkansen Tohoku directo, poco más de 1 hora y media.

[BANNER_JRPASS]

## Dónde alojarse

El centro es la base más práctica; Iizaka Onsen, a un corto trayecto en tranvía, es una buena opción para una noche de onsen.`,
    relatedCities: ["aizuwakamatsu", "iwaki"],
  },

  aizuwakamatsu: {
    citySlug: "aizuwakamatsu",
    prefectureSlug: "fukushima",
    intro:
      "Aizuwakamatsu conserva uno de los relatos samurái más conocidos de Japón, el del castillo de Tsuruga y la resistencia del clan Aizu al final del shogunato.",
    content: `## Qué ver y hacer

### Castillo de Tsuruga

Reconstruido con su característico tejado de tejas rojas, es el centro de la ciudad y recuerda la defensa del clan Aizu durante la Guerra Boshin de 1868; su interior es un museo que se recorre piso a piso hasta un mirador en la torre.

### Colina de Iimoriyama

Conserva la tumba de los Byakkotai, un grupo de jóvenes samurái adolescentes que, al ver arder erróneamente lo que creyeron el castillo, se quitaron la vida siguiendo el código del honor samurái — una de las historias más recordadas de la guerra.

### Ouchijuku

Cerca de la ciudad, este barrio conserva una antigua ruta de postas con casas de techo de paja, prácticamente intacta desde el periodo Edo.

### Academia Nisshinkan

Fundada en 1803, formaba a los hijos samurái del clan Aizu desde los 10 años en artes marciales, astronomía, caligrafía y estrategia militar. El wappa-meshi, arroz servido en cuencos de madera con salmón o verduras de temporada, es el plato más asociado a la ciudad — que, pese a estar en la prefectura de Fukushima, no sufrió contaminación radiactiva tras el accidente nuclear de 2011.

## Cómo llegar

### Desde Koriyama (con Shinkansen Tohoku desde Tokio)

Tren limited express Banetsu-West, una hora aproximadamente desde Koriyama.

[BANNER_JRPASS]

## Dónde alojarse

El centro, cerca del castillo, es la zona más práctica para moverte a pie; Ouchijuku se visita mejor como excursión de medio día en autobús.`,
    relatedCities: ["fukushima"],
  },

  iwaki: {
    citySlug: "iwaki",
    prefectureSlug: "fukushima",
    intro:
      "Iwaki, en la costa del Pacífico de Fukushima, es conocida por su parque acuático tropical bajo techo, Spa Resort Hawaiians.",
    content: `## Qué ver y hacer

### Spa Resort Hawaiians

Combina aguas termales con un parque temático de ambiente hawaiano que existe desde los años 60 —llegó a ser el mayor baño termal cubierto del mundo, y su historia inspiró una película japonesa— con espectáculos de hula varias veces al día.

[LINK_HAWAIIANS_IWAKI]

### Aquamarine Fukushima

La costa de Iwaki, más al sur que la zona directamente afectada por el accidente nuclear de 2011, ha recuperado su actividad pesquera y turística. Aquamarine Fukushima, un acuario centrado en la fauna marina de la corriente de Oyashio, es otra parada habitual junto al puerto.

## Cómo llegar

### Desde Tokio (Ueno)

Tren limited express Joban directo, unas 2 horas y cuarto.

[BANNER_JRPASS]

## Dónde alojarse

El propio complejo de Spa Resort Hawaiians tiene hoteles integrados; si prefieres el centro, la zona junto a la estación de Iwaki es la más práctica.`,
    relatedCities: ["fukushima"],
  },

  mito: {
    citySlug: "mito",
    prefectureSlug: "ibaraki",
    intro:
      "Mito es la capital de Ibaraki, conocida sobre todo por Kairaku-en, uno de los tres grandes jardines paisajísticos de Japón.",
    content: `## Qué ver y hacer

### Jardín Kairaku-en

Célebre por sus más de 3.000 ciruelos en flor a finales de invierno, está considerado uno de los tres grandes jardines de Japón, junto a Kenroku-en (Kanazawa) y Koraku-en (Okayama). Dentro del jardín, el pabellón Kobuntei se puede subir piso a piso para ver vistas elevadas sobre los ciruelos y el lago Senba.

### Castillo de Mito

Del que hoy queda sobre todo el recinto y algunas puertas reconstruidas, fue sede de una de las ramas más influyentes del clan Tokugawa.

## Cómo llegar

### Desde Tokio (Ueno)

Tren limited express Joban directo, poco más de una hora.

[BANNER_JRPASS]

## Dónde alojarse

El centro, cerca de la estación de Mito, es la base más práctica para visitar Kairaku-en y seguir viaje hacia Tsukuba o Hitachi.`,
    relatedCities: ["tsukuba", "hitachi"],
  },

  tsukuba: {
    citySlug: "tsukuba",
    prefectureSlug: "ibaraki",
    intro:
      "Tsukuba es la ciudad de la ciencia de Japón: una urbe planificada desde cero en los años 60 para concentrar universidades y centros de investigación.",
    content: `## Qué ver y hacer

### Centro Espacial de Tsukuba (JAXA)

Tsukuba alberga la mayor concentración de institutos de investigación de Japón, incluida la agencia espacial JAXA, con un centro de visitantes (Space Dome) donde se puede ver de cerca un módulo real de la Estación Espacial Internacional; también se puede reservar una visita guiada por las instalaciones.

[LINK_JAXA_TSUKUBA]

### Monte Tsukuba

Con dos picos accesibles en teleférico o telesilla, ofrece vistas hasta Tokio en días despejados y es uno de los pocos "montes sagrados" de baja altitud con fácil acceso desde la capital. A sus pies, el santuario Tsukuba tiene unos 3.000 años de historia y está tradicionalmente asociado al amor y la armonía marital.

## Cómo llegar

### Desde Akihabara (Tokio)

Línea Tsukuba Express directa, unos 45 minutos — esta línea privada no está cubierta por el JR Pass.

## Dónde alojarse

Se visita bien como excursión de un día desde Tokio; si te quedas, el centro junto a la estación de Tsukuba concentra la mayor oferta de hoteles.`,
    relatedCities: ["mito"],
  },

  hitachi: {
    citySlug: "hitachi",
    prefectureSlug: "ibaraki",
    intro:
      "Hitachi da nombre al gigante industrial japonés, y su Hitachi Seaside Park es famoso por sus colinas cubiertas de flores azules nemophila.",
    content: `## Qué ver y hacer

### Hitachi Seaside Park

Conocido internacionalmente por sus colinas que se tiñen de azul intenso con flores nemophila en primavera y de rojo con kochia en otoño; el parque también alquila bicicletas para recorrer sus más de 3,5 km² sin cansarse.

### Costa y parque Kamine

La ciudad, cuna de la empresa Hitachi, conserva un paseo elevado junto a la costa del Pacífico y el parque Kamine, con un pequeño zoo y buenas vistas sobre el puerto.

## Cómo llegar

### Desde Tokio (Ueno)

Tren limited express Joban directo, poco menos de dos horas.

[BANNER_JRPASS]

## Dónde alojarse

El centro, cerca de la estación de Hitachi, deja el parque costero a un trayecto corto en autobús.`,
    relatedCities: ["mito"],
  },

  utsunomiya: {
    citySlug: "utsunomiya",
    prefectureSlug: "tochigi",
    intro:
      "Utsunomiya es la capital de Tochigi y la autoproclamada capital japonesa del gyoza, con decenas de locales especializados en las empanadillas al vapor o a la plancha.",
    content: `## Qué ver y hacer

### Capital del gyoza

La ciudad compite tradicionalmente con Hamamatsu por el título no oficial de "capital del gyoza" de Japón, con más de 200 locales especializados y una estatua de gyoza de 1,5 metros junto a la estación, inspirada en "El nacimiento de Venus" de Botticelli. El primer fin de semana de noviembre se celebra el Gyoza Matsuri, y Ming Ming, uno de los restaurantes más veteranos, llega a servir más de 12.000 gyozas en un fin de semana.

### Museo de la Piedra de Oya

A las afueras, ocupa una antigua cantera subterránea excavada a mano, con salas de piedra que llegan a los 30 metros de profundidad y una temperatura fresca todo el año, muy usada como set de rodaje. Utsunomiya es también el principal nudo de tren para seguir hacia Nikko.

## Cómo llegar

### Desde Tokio

Shinkansen Tohoku directo, unos 50 minutos.

[BANNER_JRPASS]

## Dónde alojarse

La mayoría de los viajeros la usan como escala camino de Nikko más que como destino en sí; los hoteles de negocios junto a la estación son la opción más práctica para una noche o para comer gyoza antes de seguir viaje.`,
    relatedCities: ["nasu", "nikko"],
  },

  nasu: {
    citySlug: "nasu",
    prefectureSlug: "tochigi",
    intro:
      "Nasu es una zona de montaña y aguas termales, tradicionalmente asociada a la familia imperial japonesa, que tiene aquí una de sus residencias de verano.",
    content: `## Qué ver y hacer

### Altiplano de Nasu

Combina onsen, granjas lecheras abiertas al público —donde se puede ordeñar una vaca o probar helados y quesos artesanales locales— y senderismo en las faldas del monte Nasu, un volcán todavía activo con fumarolas visibles.

### Villa imperial de verano

La familia imperial japonesa mantiene una villa de verano en la zona desde hace más de un siglo, símbolo del prestigio de sus aguas termales.

## Cómo llegar

### Desde Tokio

Shinkansen Tohoku hasta Nasushiobara, con enlace en autobús hasta el altiplano (unos 30-40 minutos más).

[BANNER_JRPASS]

## Dónde alojarse

La zona del onsen, en las faldas del monte Nasu, reúne la mayor oferta de ryokan y pensiones de montaña; conviene alquilar coche o depender de los autobuses locales, que son poco frecuentes.`,
    relatedCities: ["utsunomiya", "nikko"],
  },

  maebashi: {
    citySlug: "maebashi",
    prefectureSlug: "gunma",
    intro:
      "Maebashi es la capital de Gunma, una ciudad que prosperó gracias a la seda y que hoy sirve de puerta a los onsen de montaña de la prefectura.",
    content: `## Qué ver y hacer

### Legado de la seda junto al río Tone

Maebashi fue un centro clave de la industria de la seda japonesa en los siglos XIX y XX, y aún conserva almacenes y edificios de esa época junto al río Tone, algunos reconvertidos hoy en cafeterías y pequeñas tiendas.

### Puerta a los onsen de montaña

La ciudad es sobre todo un buen punto de partida hacia los onsen de Kusatsu e Ikaho y las montañas del norte de Gunma, y el cercano Parque de las Flores de Gunma ofrece jardines temáticos por estación durante todo el año.

## Cómo llegar

### Desde Tokio

Shinkansen Joetsu hasta Takasaki, con enlace en tren local (unos 15 minutos más) hasta Maebashi.

[BANNER_JRPASS]

## Dónde alojarse

El centro de Maebashi es más tranquilo y menos turístico que Takasaki; ambas ciudades funcionan bien como base para excursiones a los onsen de montaña.`,
    relatedCities: ["takasaki", "kusatsu"],
  },

  takasaki: {
    citySlug: "takasaki",
    prefectureSlug: "gunma",
    intro:
      "Takasaki es el gran nudo de transporte de Gunma y hogar de una de las estatuas de Buda más grandes de Japón, el Byakue Daikannon.",
    content: `## Qué ver y hacer

### Byakue Daikannon

Una estatua blanca de Kannon de más de 40 metros con mirador en su interior, domina el perfil de la ciudad.

### Daruma y templo Shorinzan Darumaji

Takasaki es también conocida por el daruma, las muñecas redondas de la buena suerte —cerca del 80% de todos los daruma de Japón se fabrican aquí—, con talleres artesanales donde se puede pintar la propia. El templo Shorinzan Darumaji, fundado en 1697, es el lugar de origen de esta tradición: durante una hambruna de la década de 1780, el maestro zen del templo enseñó a los vecinos a fabricar daruma de papel maché para vender en la calle, y hoy el templo organiza el mercado Daruma Ichi cada 6 y 7 de enero.

## Cómo llegar

### Desde Tokio

Shinkansen Joetsu o Hokuriku, poco más de una hora, con salidas muy frecuentes.

[BANNER_JRPASS]

## Dónde alojarse

El centro, junto a la estación de Takasaki (uno de los grandes nudos de Shinkansen de la región), es la base más práctica para moverte por el resto de Gunma.`,
    relatedCities: ["maebashi", "kusatsu"],
  },

  kusatsu: {
    citySlug: "kusatsu",
    prefectureSlug: "gunma",
    intro:
      "Kusatsu Onsen está considerado, junto a Gero y Arima, uno de los tres grandes onsen de Japón, gracias al mayor caudal natural de agua termal del país.",
    content: `## Qué ver y hacer

### El yubatake

("Campo de agua caliente"), una fuente termal humeante en pleno centro del pueblo que produce unos 5.000 litros por minuto a más de 70°C, es la imagen de postal de Kusatsu — con tanto renombre que el shogunato llegó a transportar en barriles su agua hasta el castillo de Edo para uso personal de dos de los shogunes. El olor sulfuroso del pueblo le ha valido un puesto en la lista oficial japonesa de "100 lugares con olores peculiares".

### Espectáculo de yumomi

El pueblo mantiene la tradición del "yumomi", remover el agua con grandes tablas de madera para enfriarla, que se representa como espectáculo para los visitantes varias veces al día — y en algunas sesiones se puede participar.

## Cómo llegar

### Desde Karuizawa

Autobús directo desde la estación (Shinkansen Hokuriku desde Tokio hasta aquí, poco más de una hora).

[BANNER_JRPASS]

### Desde Takasaki

Tren local hasta Naganohara-Kusatsuguchi, con enlace en autobús hasta el pueblo (unos 25 minutos más).

[LINK_RAKUTEN_TRAVEL]

## Dónde alojarse

Un ryokan con onsen propio, a un paseo del yubatake, es la forma habitual de visitar Kusatsu; muchos incluyen cena y desayuno, pensados para quedarse una noche entera sin salir del pueblo.`,
    relatedCities: ["maebashi", "takasaki"],
  },

  saitama: {
    citySlug: "saitama",
    prefectureSlug: "saitama",
    intro:
      "Saitama, ciudad dormitorio de la gran área metropolitana de Tokio, alberga el Saitama Super Arena, uno de los grandes recintos de conciertos y eventos deportivos de Japón.",
    content: `## Qué ver y hacer

### Saitama Super Arena

Acoge desde partidos de baloncesto y voleibol hasta grandes conciertos, con capacidad para más de 30.000 personas en su configuración máxima.

### Santuario Hikawa y Museo del Ferrocarril

El santuario Hikawa, uno de los más antiguos de la región de Kanto, y el Museo del Ferrocarril, con locomotoras históricas expuestas y simuladores de conducción, completan la oferta de la ciudad.

### Barrio de Omiya Bonsai

Con varios viveros centenarios abiertos a la visita, es uno de los centros de referencia mundial del cultivo de bonsái; el barrio se fundó en 1925, tras el Gran Terremoto de Kanto de 1923, y llegó a reunir treinta viveros en 1930. El santuario Hikawa tiene historia desde el siglo V y fue elevado a santuario principal de la región de Kanto por el emperador Meiji, con una puerta Ni-no-torii de 13 metros tallada en ciprés taiwanés de 1.200 años. El Museo del Ferrocarril de Saitama es uno de los tres grandes de Japón, junto a los de Kioto y Nagoya.

## Cómo llegar

### Desde Tokio

Varias líneas JR y Saikyo conectan directamente con el centro de la capital en 30-40 minutos.

## Dónde alojarse

Se visita bien como excursión de un día desde Tokio, con el que está perfectamente conectada por tren.`,
    relatedCities: ["kawagoe"],
  },

  kawagoe: {
    citySlug: "kawagoe",
    prefectureSlug: "saitama",
    intro:
      "Kawagoe, conocida como «la pequeña Edo», conserva una calle de almacenes de estilo Edo del siglo XIX que la convierten en una escapada de un día muy popular desde Tokio.",
    content: `## Qué ver y hacer

### Calle Kurazukuri y torre Toki no Kane

La calle Kurazukuri, con sus almacenes de paredes gruesas y tejados curvos que sobrevivieron a los incendios del periodo Edo, da a Kawagoe su apodo de "pequeña Edo". La torre del reloj Toki no Kane, reconstruida varias veces desde el siglo XVII, sigue marcando las horas en el centro histórico.

### Kashiya Yokocho

("Callejón de las dulcerías") conserva un puñado de tiendas de golosinas tradicionales al estilo de principios del siglo XX —llegó a tener más de setenta en la era Showa temprana—, donde se puede ver cómo se hacen a mano y comprarlas recién hechas.

### Kita-in

Este templo alberga el salón Kyukuden, lugar de nacimiento del shogun Tokugawa Iemitsu, y 540 estatuas de piedra de discípulos de Buda talladas entre 1782 y 1825, cada una con una expresión distinta. El palacio Honmaru Goten, de 1848, es el único edificio del antiguo castillo de Kawagoe que sobrevive, con sus salas de tatami y jardines interiores.

## Cómo llegar

### Desde Ikebukuro o Shinjuku (Tokio)

Tren directo, unos 30-50 minutos según la línea (Tobu Tojo desde Ikebukuro es la más rápida).

## Dónde alojarse

Se visita casi siempre como excursión de un día desde Tokio; el casco histórico se recorre entero a pie desde la estación de Kawagoe.`,
    relatedCities: ["saitama", "chichibu"],
  },

  chichibu: {
    citySlug: "chichibu",
    prefectureSlug: "saitama",
    intro:
      "Chichibu es una región de montaña al oeste de Saitama, conocida por su festival de invierno con carrozas gigantes y por sus paisajes de senderismo.",
    content: `## Qué ver y hacer

### Chichibu Yomatsuri

En diciembre, es uno de los tres grandes festivales de carrozas de Japón, con estructuras de varias toneladas tiradas por las calles y fuegos artificiales nocturnos poco habituales en pleno invierno. El santuario Chichibu, sede del festival, se puede visitar cualquier época del año.

### Senderismo y monte Buko

La zona es apreciada por senderismo suave y por sus campos de shibazakura en primavera. El monte Buko, con su teleférico propio, es otra excursión habitual de medio día para quien quiera vistas sobre todo el valle.

## Cómo llegar

### Desde Ikebukuro (Tokio)

Línea Seibu Ikebukuro directa, poco más de una hora y media.

## Dónde alojarse

Se visita bien como excursión de un día desde Tokio; quienes quieran hacer senderismo con calma encuentran ryokan sencillos en el propio Chichibu.`,
    relatedCities: ["kawagoe"],
  },

  chiba: {
    citySlug: "chiba",
    prefectureSlug: "chiba",
    intro:
      "Chiba capital, a las puertas de Tokio, es sobre todo conocida como sede de eventos, ferias internacionales y como nudo de transporte hacia el aeropuerto de Narita.",
    content: `## Qué ver y hacer

### Makuhari Messe

Este recinto ferial acoge algunas de las mayores convenciones y ferias comerciales de Japón, desde tecnología hasta cómics, y merece la pena revisar la agenda antes de ir por si coincide algún evento abierto al público.

### Costa de la bahía de Tokio

La ciudad tiene un tramo de costa con el parque portuario de Chiba como zona de paseo y una torre mirador junto al puerto, y buena conexión con los parques temáticos de la zona.

### Castillo de Chiba y monorraíl

El castillo original se construyó en 1126 y quedó abandonado en 1455 tras la derrota del clan Chiba; la torre actual, sin base histórica real, se levantó en los años 60 como museo folclórico, con katanas y armaduras samurái. El monorraíl suspendido de Chiba, inaugurado en 1988, es el más largo del mundo en su categoría, con 15,2 km repartidos en dos líneas.

## Cómo llegar

### Desde el centro de Tokio

Tren JR o Keisei, unos 30-40 minutos.

## Dónde alojarse

Suele visitarse en el día desde Tokio o como parada en el trayecto hacia Narita o los parques de Urayasu.`,
    relatedCities: ["narita", "urayasu"],
  },

  narita: {
    citySlug: "narita",
    prefectureSlug: "chiba",
    intro:
      "Narita es sobre todo conocida por su aeropuerto internacional, pero el templo Naritasan Shinsho-ji, a un paseo de la estación, merece parada aunque solo hagas escala.",
    content: `## Qué ver y hacer

### Templo Naritasan Shinsho-ji

Fundado en el año 940 por el monje Kancho Daisojo, recibe a millones de visitantes al año y está flanqueado por 800 metros de calle comercial tradicional (Omotesando), con arquitectura de periodo Edo, estatuas de los doce animales del zodíaco chino y puestos de anguila a la parrilla, especialidad local que se puede ver preparar en directo en varias tiendas.

### Parque Naritasan

Detrás del templo, añade un jardín japonés y un estanque tranquilo, poco transitado por la mayoría de los visitantes que solo pasan por el templo — una parada fácil para quien tiene horas libres entre vuelos.

## Cómo llegar

### Desde el Aeropuerto Internacional de Narita

Unos 10 minutos en tren o autobús — la parada perfecta para quien tiene horas libres entre vuelos.

## Dónde alojarse

Hay hoteles de todas las categorías junto al aeropuerto y en el centro de Narita, pensados sobre todo para escalas de una noche antes de un vuelo temprano.`,
    relatedCities: ["chiba"],
  },

  urayasu: {
    citySlug: "urayasu",
    prefectureSlug: "chiba",
    intro:
      "Urayasu es, para la mayoría de los visitantes, sinónimo de Tokyo Disney Resort, aunque técnicamente pertenece a la prefectura de Chiba y no a Tokio.",
    content: `## Qué ver y hacer

### Tokyo Disneyland y Tokyo DisneySea

Tokyo Disneyland abrió el 15 de abril de 1983, el primer parque Disney fuera de Estados Unidos; Tokyo DisneySea, único en el mundo por su temática marítima, abrió el 4 de septiembre de 2001 y hoy es uno de los parques temáticos más visitados del planeta, con Fantasy Springs como su zona más reciente, inaugurada en 2024. Con dos parques tan grandes, conviene planificar con antelación qué día visitar cada uno en vez de intentar combinarlos en una sola jornada, y comprar la entrada online con antelación porque se agotan con frecuencia.

[LINK_TOKYO_DISNEY]

### Cómo moverse entre los parques

Los hoteles del resort y una red de monorraíl interna conectan los dos parques y las zonas de ocio cercanas, sin necesidad de salir a la calle en ningún momento.

## Cómo llegar

### Desde el centro de Tokio

Línea JR Keiyo directa, unos 15-20 minutos hasta la estación de Maihama.

## Dónde alojarse

Los hoteles oficiales del resort están integrados en el recinto y facilitan la entrada anticipada a los parques; los de la zona de Maihama, algo más económicos, quedan a un paseo o un trayecto corto en monorraíl.`,
    relatedCities: ["chiba"],
  },

  yokohama: {
    citySlug: "yokohama",
    prefectureSlug: "kanagawa",
    intro:
      "Yokohama es la segunda ciudad más poblada de Japón, un puerto abierto al comercio exterior desde el siglo XIX que hoy tiene el mayor Chinatown del país.",
    content: `## Qué ver y hacer

### Chinatown de Yokohama

El mayor de Japón (Yokohama Chukagai), con cientos de restaurantes y tiendas donde comer de pie mientras paseas.

### Minato Mirai y barrio de Yamate

La zona de Minato Mirai, con su noria y sus rascacielos junto a la bahía, contrasta con el barrio histórico de Yamate, de casas occidentales de la era del puerto internacional que se visitan a pie en una ruta tranquila con vistas al mar.

### Museo Ramen Shin-Yokohama

Recrea una calle de los años 50 dedicada por completo a este plato, con varios locales de ramen de distintas regiones de Japón sirviendo dentro del propio museo.

### Landmark Tower y el buque Nippon Maru

El mirador Sky Garden de la Landmark Tower, a 273 metros de altura, ofrece vistas a Tokio y, en días despejados, al monte Fuji. Junto a la bahía, el Nippon Maru, un buque escuela de 1930 convertido en museo, recuerda el pasado marítimo de la ciudad.

### Almacenes Akarenga y Sankeien

Los almacenes de ladrillo rojo Akarenga, de los años 1920, acogen mercadillos y eventos según la temporada, desde un festival de la cerveza en otoño hasta una pista de hielo en invierno. El jardín Sankeien, algo apartado del centro, incluye una pagoda de tres pisos trasladada desde un templo de Kioto.

## Cómo llegar

### Desde el centro de Tokio

Tren directo (JR o Tokyu), unos 30 minutos, con salidas muy frecuentes.

[RECURSOS_VIAJE]

## Dónde alojarse

Minato Mirai concentra los hoteles con mejores vistas a la bahía; también es fácil visitar Yokohama en el día desde Tokio.`,
    relatedCities: ["kamakura"],
  },

  niigata: {
    citySlug: "niigata",
    prefectureSlug: "niigata",
    intro:
      "Niigata es el gran puerto de la costa del mar de Japón, capital de una de las regiones arroceras y sakeras más prestigiosas del país.",
    content: `## Qué ver y hacer

### Arroz y sake de Niigata

Niigata es sinónimo de arroz de calidad (aquí se cultiva la variedad Koshihikari) y de sake: la prefectura reúne más fabricantes de sake que ninguna otra de Japón, con una sala de cata en la propia estación donde probar decenas de variedades por unas pocas monedas.

### Barrio de Furumachi

Fue uno de los barrios de geishas (hanamachi) más importantes de Japón, comparable a Gion en Kioto, con unas 300 geishas activas durante el periodo Edo; hoy conserva parte de ese ambiente en sus calles. El puerto de Niigata conecta además en ferry con la isla de Sado.

### Sake y edamame

La ciudad reúne más de 15 bodegas de sake en su propio término municipal, y la región cultiva más de 40 variedades de edamame además del célebre arroz koshihikari. Niigata fue, además, el objetivo elegido originalmente por Estados Unidos para la segunda bomba atómica, antes de que el mal tiempo desviara el ataque hacia Nagasaki.

## Cómo llegar

### Desde Tokio

Shinkansen Joetsu directo, unas 2 horas.

[BANNER_JRPASS]

## Dónde alojarse

El centro, cerca de la estación de Niigata, es la base habitual antes de tomar el ferry a Sado.`,
    relatedCities: ["sado", "echigo-yuzawa"],
  },

  sado: {
    citySlug: "sado",
    prefectureSlug: "niigata",
    intro:
      "Sado es la mayor isla del mar de Japón, un antiguo destino de exilio político reconvertido en refugio de tradiciones que ya han desaparecido del resto del país.",
    content: `## Qué ver y hacer

### Minas de oro de Sado

Sado fue durante siglos lugar de destierro (incluido el del emperador Juntoku y el monje budista Nichiren) y, más tarde, un importante centro minero de oro: las minas, en explotación desde el siglo XVII hasta 1989, se pueden recorrer en parte y fueron declaradas Patrimonio de la Humanidad en 2024.

[LINK_SADO_KINZAN]

### Tambores taiko e ibis crestado

La isla es también conocida por sus tambores taiko — el grupo Kodo, de fama internacional, tiene aquí su base en la llamada "Kodo Village" y organiza cada año el festival internacional Earth Celebration — y por conservar el ibis crestado japonés (toki), reintroducido tras haberse extinguido en estado salvaje. La bahía de Senkaku, con sus acantilados recorribles en barco al noroeste de la isla, y un teatro Noh del siglo XIX junto al santuario Daizen, en Mano, completan el perfil cultural de Sado.

## Cómo llegar

### Desde Niigata (ferry)

Entre 1 y 2 horas y media desde el puerto, según el tipo de barco (jetfoil o ferry convencional). El ferry no está cubierto por el JR Pass.

## Dónde alojarse

La isla es grande y el transporte público limitado; conviene alquilar coche o moverse en los pocos autobuses turísticos si vas a pasar más de un día.`,
    relatedCities: ["niigata"],
  },

  "echigo-yuzawa": {
    citySlug: "echigo-yuzawa",
    prefectureSlug: "niigata",
    intro:
      "Echigo-Yuzawa es la estación de esquí y onsen más accesible desde Tokio, hecha famosa por la novela «País de nieve» de Yasunari Kawabata.",
    content: `## Qué ver y hacer

### GALA Yuzawa

Esta estación de esquí, una de las que se llenan en invierno en la zona, tiene su propio acceso directo desde el andén del Shinkansen, sin necesidad de autobús.

[LINK_GALA_YUZAWA]

### Pueblo de onsen de «País de nieve»

Echigo-Yuzawa es también un pueblo de onsen tradicional, escenario de la novela «País de nieve» (Kawabata, primer premio Nobel japonés de literatura). Varios baños termales públicos están a un paseo de la propia estación de Shinkansen.

## Cómo llegar

### Desde Tokio

Shinkansen Joetsu directo, unos 75 minutos — uno de los onsen de montaña más rápidos de alcanzar desde la capital.

[BANNER_JRPASS]

## Dónde alojarse

Muchos ryokan y hoteles de esquí ofrecen traslado directo desde la estación; en temporada alta de nieve conviene reservar con antelación.`,
    relatedCities: ["niigata"],
  },

  toyama: {
    citySlug: "toyama",
    prefectureSlug: "toyama",
    intro:
      "Toyama es la puerta de entrada a la Ruta Alpina Tateyama-Kurobe, uno de los recorridos de montaña más espectaculares de Japón.",
    content: `## Qué ver y hacer

### Ruta Alpina Tateyama-Kurobe

La ciudad de Toyama es sobre todo el punto de partida hacia esta ruta, famosa por el "corredor de nieve" de primavera, con paredes de nieve de hasta 20 metros a ambos lados de la carretera; se cruza en un relevo de teleférico, funicular y trolebús que conviene reservar con antelación en temporada alta.

[LINK_TATEYAMA_ALPINE]

### Bahía de Toyama y Museo de Cristal

La bahía es célebre por su camarón de aguas profundas (shiroebi) y por las vistas a la cordillera nevada de los Alpes japoneses. El Museo de Cristal de Toyama, diseñado por el arquitecto Kengo Kuma, es otra parada habitual en el centro.

### Parque del castillo y templo Chokei-ji

El castillo, construido originalmente en 1543 y reconstruido en 1954, alberga hoy un museo municipal y un jardín tradicional. En el monte Kureha, el templo Chokei-ji reúne 500 estatuas de discípulos de Buda (rakan) talladas en 1786, cada una con una expresión facial distinta.

## Cómo llegar

### Desde Tokio

Shinkansen Hokuriku directo, unas 2 horas y 10 minutos.

[BANNER_JRPASS]

## Dónde alojarse

El centro, junto a la estación de Toyama, es la base más práctica tanto para la ciudad como para iniciar la Ruta Alpina.`,
    relatedCities: ["takaoka", "gokayama"],
  },

  takaoka: {
    citySlug: "takaoka",
    prefectureSlug: "toyama",
    intro:
      "Takaoka es un centro histórico de fundición de metal, con un gran Buda de bronce que rivaliza en fama con los de Nara y Kamakura.",
    content: `## Qué ver y hacer

### Gran Buda de Takaoka

De bronce, es considerado por muchos japoneses uno de los tres grandes budas del país, junto a los de Nara y Kamakura.

### Fundición artesanal de cobre y bronce

La ciudad lleva siglos siendo un centro de fundición artesanal, con talleres que todavía producen utensilios y objetos decorativos de forma tradicional y algunos abren sus puertas para ver el proceso o probar un taller breve.

### Templo Zuiryuji

Tesoro Nacional, conserva uno de los conjuntos de arquitectura zen del periodo Edo mejor preservados de la región.

## Cómo llegar

### Desde Toyama

Tren limited express o local, unos 20 minutos.

## Dónde alojarse

Se visita bien como excursión de un día desde Toyama; el centro, cerca de la estación, es la zona más práctica si te quedas.`,
    relatedCities: ["toyama"],
  },

  gokayama: {
    citySlug: "gokayama",
    prefectureSlug: "toyama",
    intro:
      "Gokayama, junto a Shirakawa-go, conserva algunas de las últimas casas de estilo gassho-zukuri de Japón, con tejados empinados de paja pensados para la nieve.",
    content: `## Qué ver y hacer

### Casas gassho-zukuri

Sus tejados, con una inclinación pronunciada en forma de manos juntas en oración, permitían soportar las fuertes nevadas de la región y aprovechar el espacio bajo el tejado para la cría de gusanos de seda.

### Pueblo de Ainokura

El núcleo más grande de Gokayama conserva unas veinte de estas casas en un valle mucho más tranquilo que Shirakawa-go, con un mirador a las afueras del pueblo para ver el conjunto desde arriba. Junto con esta última, en la vecina Gifu, Gokayama forma parte del mismo conjunto declarado Patrimonio de la Humanidad por la UNESCO.

## Cómo llegar

### Desde Shin-Takaoka o Johana

Autobús directo desde cualquiera de las dos estaciones — Shin-Takaoka tiene parada de Shinkansen Hokuriku desde Tokio.

[BANNER_JRPASS]

## Dónde alojarse

Varias de las casas gassho-zukuri de Ainokura funcionan como minshuku (pensión familiar), con cena de cocina de montaña incluida — una de las formas más auténticas de dormir en una de estas casas históricas.`,
    relatedCities: ["toyama"],
  },

  wajima: {
    citySlug: "wajima",
    prefectureSlug: "ishikawa",
    intro:
      "Wajima, en la punta de la península de Noto, es sinónimo en Japón de laca de altísima calidad y de un mercado matutino centenario.",
    content: `## Qué ver y hacer

### Laca de Wajima

(Wajima-nuri) está considerada una de las mejores de Japón, con un proceso artesanal de decenas de capas que puede llevar meses; varios talleres se pueden visitar para ver el proceso de cerca. El mercado matutino de Wajima, con siglos de historia, reúne puestos de marisco, verdura y artesanía local.

### Terrazas de arroz de Shiroyone Senmaida

Cerca de la ciudad, bajan en más de mil parcelas escalonadas hasta el mismo mar. La península de Noto, muy afectada por el terremoto de 2024, sigue en proceso de reconstrucción en algunas zonas, así que conviene comprobar el estado de los accesos antes de ir.

### Museo Wajima Kiriko

Expone los grandes farolillos festivos tradicionales de la ciudad, de hasta 15 metros, iluminados por la noche entre octubre y marzo. Varios talleres de laca, como Ohsaki Shikkiten, permiten elegir un bol y aprender a tallarlo e incorporar pan de oro con la técnica chinkin.

## Cómo llegar

### Desde Kanazawa

Autobús limited express, unas 2 horas por la costa de la península de Noto.

## Dónde alojarse

Dada la reconstrucción en curso tras el terremoto, conviene reservar con antelación y confirmar disponibilidad; el centro de Wajima concentra la mayor parte de la oferta.`,
    relatedCities: ["kanazawa"],
  },

  kaga: {
    citySlug: "kaga",
    prefectureSlug: "ishikawa",
    intro:
      "Kaga Onsen agrupa varios pueblos termales tradicionales al sur de Kanazawa, con más de mil años de historia como destino de descanso.",
    content: `## Qué ver y hacer

### Núcleos termales de Kaga Onsen

La zona reúne varios pueblos de onsen (Yamashiro, Yamanaka, Katayamazu, Awazu) con siglos de tradición, algunos frecuentados históricamente por artistas y escritores. El casco antiguo de Yamashiro Onsen conserva una casa de baños pública restaurada al estilo de la era Meiji, abierta a un baño rápido de paso.

### Porcelana Kutani

La región es cuna de esta porcelana, reconocible por sus esmaltes de colores intensos, con talleres y galerías abiertos a la visita, algunos con clases de pintado para principiantes.

### Garganta de Kakusenkei y laguna de Katayamazu

Junto a Yamanaka Onsen, el sendero de la garganta de Kakusenkei recorre 1,3 km entre cedros que, según la tradición, inspiraron haikus del poeta Matsuo Basho. Katayamazu Onsen se asoma a la laguna Shibayamagata, con el templo Ukimi-do iluminado de noche y el monte Hakusan de fondo; un autobús circular ("Can Bus") conecta los cuatro núcleos de Kaga Onsen por un bono de día económico.

## Cómo llegar

### Desde Kanazawa o desde Tokio

Shinkansen Hokuriku directo hasta la estación de Kaga Onsen — unos 20 minutos desde Kanazawa, o unas 3 horas desde Tokio.

[BANNER_JRPASS]

## Dónde alojarse

Un ryokan en cualquiera de los cuatro núcleos de Kaga Onsen es la forma habitual de visitar la zona, casi siempre con cena kaiseki incluida.`,
    relatedCities: ["kanazawa"],
  },

  fukui: {
    citySlug: "fukui",
    prefectureSlug: "fukui",
    intro:
      "Fukui es, entre otras cosas, la capital japonesa de los fósiles de dinosaurio, con uno de los museos paleontológicos más grandes de Asia.",
    content: `## Qué ver y hacer

### Museo de Dinosaurios de Fukui

En Katsuyama (a las afueras de la ciudad), es uno de los tres mayores museos de paleontología del mundo, construido junto a uno de los yacimientos de fósiles más ricos de Japón, con una zona de excavación real visitable en temporada. La propia ciudad de Fukui tiene, además, esculturas de dinosaurios repartidas por el centro, incluida la estación.

[LINK_FUKUI_DINOSAUR]

### Templo Eiheiji

A poca distancia, fundado en el siglo XIII, es uno de los dos grandes monasterios centrales de la escuela zen Soto y sigue en activo, con monjes en formación. Sus más de 70 edificios están conectados por corredores de madera cubiertos, entre laderas de cedros.

### Ruinas del castillo y jardín Yokokan

Del castillo de Fukui, del clan Matsudaira, solo quedan los muros de piedra y el foso, con el puente Orouka reconstruido y de acceso libre. El jardín Yokokan, antigua villa de la misma familia, tiene un estanque de carpas koi especialmente bonito en otoño.

## Cómo llegar

### Desde Tokio

Shinkansen Hokuriku directo hasta la estación de Fukui, poco más de 3 horas.

[BANNER_JRPASS]

### Desde Kioto/Osaka

Tren limited express Thunderbird, aproximadamente 1 hora y cuarto.

## Dónde alojarse

El centro, cerca de la estación, es la base más práctica; Eiheiji se visita bien como excursión de medio día en autobús.`,
    relatedCities: ["obama", "tsuruga"],
  },

  obama: {
    citySlug: "obama",
    prefectureSlug: "fukui",
    intro:
      "Obama, en la costa del mar de Japón, es una pequeña ciudad portuaria con una notable concentración de templos budistas antiguos.",
    content: `## Qué ver y hacer

### Ciudad de los templos

Conocida como la "ciudad de los templos", Obama conserva más de una decena de templos budistas de gran valor histórico, herencia de su papel como puerto de entrada de cultura e influencias del continente asiático hace siglos; varios se pueden recorrer en una misma ruta a pie por el casco histórico.

### Templo Myotsuji

Con su pagoda de tres pisos declarada Tesoro Nacional, es uno de los más destacados. La ciudad se hizo brevemente famosa fuera de Japón por compartir nombre con el expresidente estadounidense Barack Obama.

## Cómo llegar

### Desde Fukui

Tren limited express con transbordo, o autobús directo — conviene comprobar horarios, ya que las frecuencias son limitadas.

### Desde Kioto

Autobús directo, la opción más sencilla sin transbordos.

## Dónde alojarse

El centro, cerca del puerto, concentra la mayoría de los templos y es la zona más práctica para recorrerlos a pie.`,
    relatedCities: ["fukui"],
  },

  tsuruga: {
    citySlug: "tsuruga",
    prefectureSlug: "fukui",
    intro:
      "Tsuruga es un puerto histórico del mar de Japón, punto de llegada de refugiados judíos durante la Segunda Guerra Mundial gracias a los visados del diplomático Chiune Sugihara.",
    content: `## Qué ver y hacer

### Museo Puerto de Tsuruga

Recuerda cómo cientos de refugiados judíos, con visados emitidos por el cónsul japonés Chiune Sugihara en Lituania, llegaron a este puerto en 1940-41 huyendo de la persecución nazi, con documentos y testimonios originales de aquellos refugiados.

### Santuario Kehi Jingu

Fundado en el año 702, es uno de los más antiguos e importantes de la región de Hokuriku, con uno de los tres mayores torii de madera de Japón (11 metros, de 1902). Tsuruga es hoy también un nudo de conexión ferroviaria entre la costa del mar de Japón y la región de Kansai, terminal del Shinkansen Hokuriku desde su llegada en marzo de 2024.

### Almacenes Tsuruga Akarenga

Estos almacenes de ladrillo rojo de 1905 albergan hoy un diorama ferroviario y restaurantes; la calle principal de la ciudad reúne además 28 esculturas de bronce de personajes del dibujante Leiji Matsumoto (Galaxy Express 999, Space Battleship Yamato), nacido en la región.

## Cómo llegar

### Desde Kioto/Osaka

Shinkansen Hokuriku directo, o tren limited express — ambas opciones rondan la hora y media.

[BANNER_JRPASS]

### Desde Fukui

Tren limited express o Shinkansen Hokuriku, unos 20-30 minutos.

## Dónde alojarse

El centro, cerca de la estación y el puerto, es la base más práctica; Tsuruga se visita bien como parada de un día camino de Fukui o Kansai.`,
    relatedCities: ["fukui"],
  },

  kofu: {
    citySlug: "kofu",
    prefectureSlug: "yamanashi",
    intro:
      "Kofu es la capital de Yamanashi, corazón de una de las principales regiones vitivinícolas de Japón, a los pies del monte Fuji.",
    content: `## Qué ver y hacer

### Bodegas del valle de Katsunuma

La región de Kofu produce buena parte del vino japonés, con bodegas abiertas a cata en este valle, muchas con visita guiada a los viñedos incluida.

### Castillo Kofu y clan Takeda

Hoy convertido en el parque Maizuru, con la puerta Yamate-mon reconstruida, fue construido a finales del siglo XVI por Toyotomi Hideyoshi sobre el terreno de la antigua fortaleza Tsutsujigasaki, capital del daimyo Takeda Shingen —apodado "el Tigre de Kai"— durante el periodo Sengoku. El templo Chozenji, fundado por el propio Takeda Shingen, conserva pagodas de tres y cinco pisos.

### Hoto y bodega Sadoya

El hoto, fideos anchos en caldo de miso con calabaza servidos en cazuela de hierro, es el plato local por excelencia. La bodega Sadoya, fundada en 1917, fue pionera en variedades de uva europea en Yamanashi.

### Desfiladero de Shosenkyo

A las afueras, combina paredes de granito, una cascada y un pequeño teleférico con vistas al valle.

## Cómo llegar

### Desde Shinjuku (Tokio)

Tren limited express Azusa directo, unos 90 minutos.

[BANNER_JRPASS]

## Dónde alojarse

El centro, cerca de la estación de Kofu, es la base más práctica tanto para las bodegas como para Shosenkyo.`,
    relatedCities: ["fujiyoshida", "kawaguchiko"],
  },

  fujiyoshida: {
    citySlug: "fujiyoshida",
    prefectureSlug: "yamanashi",
    intro:
      "Fujiyoshida, a los pies del Fuji, ofrece una de las vistas más clásicas del monte, con la pagoda Chureito y sus cerezos en primer plano.",
    content: `## Qué ver y hacer

### Pagoda Chureito

Junto al santuario Arakura Sengen, ofrece la imagen más reproducida del monte Fuji en postales y redes sociales, especialmente en temporada de cerezos.

### Ascensión al Fuji y posadas oshi

Fujiyoshida es uno de los puntos de partida clásicos para la ascensión al Fuji en temporada de verano (julio-septiembre, con reserva obligatoria en el tramo Yoshida), y conserva un casco antiguo de posada de peregrinos (oshi) del periodo Edo, cuando subir el Fuji era ante todo un acto religioso. La pagoda Chureito, de 1962, se construyó en memoria de los caídos del periodo Meiji; primavera e invierno son las mejores épocas para verla con el Fuji despejado detrás, ya que en los meses más calurosos suele quedar cubierto de bruma.

## Cómo llegar

### Desde Shinjuku (Tokio)

Tren limited express Azusa/Fujisan hasta Otsuki, con transbordo a la línea Fujikyu — unas 2 horas en total. Hay también autobuses directos sin transbordo desde la estación de autobuses de Shinjuku.

[BANNER_JRPASS]

## Dónde alojarse

El centro de Fujiyoshida es más económico y tranquilo que la zona del lago Kawaguchiko, a solo unos minutos de distancia.`,
    relatedCities: ["kawaguchiko", "kofu"],
  },

  kawaguchiko: {
    citySlug: "kawaguchiko",
    prefectureSlug: "yamanashi",
    intro:
      "Kawaguchiko, el más accesible de los Cinco Lagos de Fuji, es el mejor lugar para ver el monte reflejado en el agua en un día despejado.",
    content: `## Qué ver y hacer

### Lago Kawaguchiko

Ofrece algunas de las vistas más fotografiadas del Fuji, con el monte reflejado en el agua en días de calma, especialmente desde el parque Oishi, en la orilla norte, con nemophila en abril-mayo y kochia roja a finales de septiembre. El teleférico Kachi Kachi sube a un mirador con el lago y el Fuji en el mismo encuadre.

### Pagoda Chureito

En el parque Arakurayama Sengen, esta pagoda de 26 metros enmarca el monte Fuji al fondo en una de las imágenes más fotografiadas de Japón. Cerca, el santuario Kawaguchi Asama se accede por un camino de cedros de 1.200 años con un mirador a media ladera conocido como "puerta celestial".

### Fuji-Q Highland

Este parque temático, conocido por sus montañas rusas extremas, es uno de los grandes reclamos de la zona, junto a varios museos y onsen con vistas al lago.

[LINK_FUJIQ_HIGHLAND]

## Cómo llegar

### Desde Shinjuku (Tokio)

Autobús directo sin transbordos, unas 2 horas — la opción más cómoda con equipaje.

### Desde Otsuki

Tren Fujikyu directo, con conexión previa en limited express Azusa desde Shinjuku.

[BANNER_JRPASS]

## Dónde alojarse

Los ryokan y hoteles con onsen frente al lago, muchos con vistas al Fuji desde el propio baño, son la opción más buscada de la zona.`,
    relatedCities: ["fujiyoshida", "kofu"],
  },

  nagano: {
    citySlug: "nagano",
    prefectureSlug: "nagano",
    intro:
      "Nagano, sede de los Juegos Olímpicos de Invierno de 1998, es sobre todo conocida por Zenko-ji, uno de los templos budistas más importantes de Japón.",
    content: `## Qué ver y hacer

### Zenko-ji

Alberga, según la tradición, la primera imagen budista que llegó a Japón, y recibe peregrinos desde hace más de mil años sin distinción de escuela budista. Bajo el templo, un pasadizo completamente a oscuras ("el camino hacia la llave del paraíso") es una de las experiencias más singulares que se pueden vivir en un templo japonés: hay que buscar a tientas una llave metálica en la pared para asegurarse la salvación, según la tradición.

### Puerta a los Alpes japoneses

Nagano es también la puerta a los Alpes japoneses y a estaciones de esquí como Hakuba, sede de parte de los Juegos Olímpicos de Invierno de 1998.

### Santuario Togakushi

En las montañas al norte de la ciudad, se accede por un camino de dos kilómetros flanqueado por más de 300 cedros centenarios — uno de los paseos de santuario más impresionantes de la región de Nagano.

## Cómo llegar

### Desde Tokio

Shinkansen Hokuriku directo, unos 90 minutos.

[BANNER_JRPASS]

## Dónde alojarse

El centro, cerca de la calle comercial Zenkoji Omotesando que lleva hasta el templo, es la zona más práctica para moverte a pie.`,
    relatedCities: ["matsumoto", "karuizawa"],
  },

  matsumoto: {
    citySlug: "matsumoto",
    prefectureSlug: "nagano",
    intro:
      "Matsumoto tiene uno de los castillos originales mejor conservados de Japón, con su característico color negro que le vale el apodo de «Castillo del Cuervo».",
    content: `## Qué ver y hacer

### Castillo de Matsumoto

Uno de los pocos que conservan su torreón original de madera del siglo XVI-XVII, destaca por su fachada negra, muy distinta al blanco de castillos como el de Himeji. La calle Nawate, junto al río que bordea el castillo, reúne pequeñas tiendas y puestos con motivos de rana (símbolo tradicional del barrio) casi a diario, y la cercana calle Nakamachi conserva antiguos almacenes de comerciantes (kura) de muros blancos, hoy convertidos en tiendas y cafés.

### Valle de los Monos de Jigokudani

La ciudad es también un buen punto de partida hacia los Alpes japoneses y este valle, famoso por sus macacos bañándose en aguas termales — conviene revisar la previsión de presencia de monos antes de hacer el trayecto.

[LINK_JIGOKUDANI_MONKEY]

### Granja de wasabi Daio

A unos 30 km de Matsumoto, es la mayor granja de wasabi de Japón, con 15 hectáreas y entrada gratuita; el agua de riego se mantiene a unos 13°C constantes todo el año. Se llega con la línea JR Oito hasta Hotaka y un autobús turístico circular, y en el recinto se puede probar helado con sabor a wasabi.

## Cómo llegar

### Desde Shinjuku (Tokio)

Tren limited express Azusa directo, unas 2 horas y media.

[BANNER_JRPASS]

### Desde Nagano

Tren limited express Shinano, unos 50 minutos.

## Dónde alojarse

El centro, entre la estación y el castillo, concentra la mayor oferta de hoteles y deja el Valle de los Monos a una excursión de medio día.`,
    relatedCities: ["nagano"],
  },

  karuizawa: {
    citySlug: "karuizawa",
    prefectureSlug: "nagano",
    intro:
      "Karuizawa es la escapada de montaña de la clase acomodada de Tokio desde la era Meiji: aire fresco en verano, outlets y villas entre los árboles.",
    content: `## Qué ver y hacer

### Retiro de verano histórico

Karuizawa se convirtió en 1886 en el retiro de verano preferido por misioneros extranjeros —de la mano de Alexander Shaw, un obispo y misionero inglés que huía del calor húmedo de Tokio— y, después, por la alta sociedad japonesa. Antes de eso, fue una de las 69 estaciones de descanso de la ruta Nakasendo, una de las cinco grandes rutas Gokaido que partían de Edo. Hoy combina senderismo suave alrededor del estanque de Kumoba, ciclismo (hay varias tiendas de alquiler junto a la estación, unos 1.000 yenes al día), un gran centro comercial outlet junto a la estación y cafeterías con encanto entre los árboles, incluida la iglesia Shaw, fundada en 1895 por el propio obispo que popularizó la zona.

### Cascada de Shiraito

Con decenas de finos hilos de agua cayendo sobre una pared de roca curva, es una excursión fácil desde el centro.

## Cómo llegar

### Desde Tokio

Shinkansen Hokuriku directo, poco más de una hora.

[BANNER_JRPASS]

## Dónde alojarse

El centro, cerca de la estación, es la zona más práctica; hay también villas y hoteles de montaña algo más alejados, entre los bosques.`,
    relatedCities: ["nagano", "kusatsu"],
  },

  gifu: {
    citySlug: "gifu",
    prefectureSlug: "gifu",
    intro:
      "Gifu es conocida por una de las tradiciones pesqueras más singulares de Japón: la pesca con cormoranes amaestrados sobre el río Nagara.",
    content: `## Qué ver y hacer

### Pesca con cormoranes (ukai)

Sobre el río Nagara, con más de 1.300 años de historia, se representa cada noche en temporada (mayo-octubre) con barcas iluminadas por antorchas; se puede ver de cerca embarcando en una de las barcas turísticas que siguen a los pescadores.

### Castillo de Gifu

En lo alto del monte Kinka y accesible en teleférico, ofrece vistas sobre la ciudad y el valle.

### Templo Shohoji

A los pies del monte, alberga un gran Buda hecho de papel maché sobre una estructura de bambú y laca, una técnica poco habitual en las estatuas budistas de esta escala.

## Cómo llegar

### Desde Nagoya

Tren limited express, unos 20 minutos, con salidas frecuentes.

## Dónde alojarse

El centro, junto al río Nagara, es la zona más práctica para ver la pesca con cormoranes y visitar el castillo.`,
    relatedCities: ["takayama", "shirakawa-go"],
  },

  takayama: {
    citySlug: "takayama",
    prefectureSlug: "gifu",
    intro:
      "Takayama, en las montañas de Gifu, conserva uno de los cascos históricos mejor preservados de Japón, con casas de comerciantes de la era Edo.",
    content: `## Qué ver y hacer

### Barrio de Sanmachi Suji

Mantiene calles enteras de casas de madera de comerciantes del periodo Edo, muchas convertidas hoy en tiendas de sake, artesanía y encurtidos.

### Mercados matutinos y festivales de Takayama

Los mercados matutinos junto al río Miyagawa llevan siglos funcionando, con puestos de encurtidos y artesanía para probar y comprar directamente al productor. Los festivales de primavera y otoño de Takayama, con carrozas ornamentadas, están declarados Patrimonio Inmaterial de la UNESCO.

## Cómo llegar

### Desde Nagoya

Tren limited express Hida directo, unas 2 horas y cuarto — la ruta más habitual.

[BANNER_JRPASS]

### Desde Tokio

Shinkansen Tokaido hasta Nagoya (poco más de 1h 40) + limited express Hida (2h 15) — unas 4 horas en total. Alternativa: Shinkansen Hokuriku hasta Toyama + limited express hasta Takayama, unas 5 horas. También hay autocares directos (Keio/Nohi Bus) desde la estación de autobuses de Shinjuku, unas 6 horas.

### Desde Kioto/Osaka

Hay un servicio directo diario del limited express Hida entre Osaka y Takayama (unas 5 horas); si no coincide el horario, Shinkansen hasta Nagoya (40 minutos desde Kioto) + Hida (2h 15) es la alternativa. También circulan autocares directos vía Kintetsu/Nohi Bus, unas 4 horas.

### Desde Kanazawa

Shinkansen Hokuriku hasta Toyama (23 minutos) + limited express hasta Takayama (1h 30) — unas 2 horas en total. También hay autobús directo vía Shirakawa-go.

### Desde Shirakawa-go

Autobús Nohi Bus de la línea Takayama–Shirakawago–Kanazawa/Toyama, alrededor de una hora — este tramo no está incluido en el JR Pass.

### Desde Matsumoto

Tren limited express Shinano hasta Nagoya (2 horas) y desde ahí, Hida hasta Takayama — unas 3 horas y media en total. También hay autobús directo de Nohi Bus.

## Dónde alojarse

El casco histórico de Sanmachi Suji se recorre entero a pie desde la estación; hay ryokan tradicionales tanto en el centro como en las afueras, junto al río.`,
    relatedCities: ["gifu", "shirakawa-go"],
  },

  "shirakawa-go": {
    citySlug: "shirakawa-go",
    prefectureSlug: "gifu",
    intro:
      "Shirakawa-go es el más conocido de los pueblos de casas gassho-zukuri, declarado Patrimonio de la Humanidad por la UNESCO junto con Gokayama.",
    content: `## Qué ver y hacer

### Pueblo de Ogimachi

El núcleo principal de Shirakawa-go reúne más de cien casas gassho-zukuri, algunas de más de 250 años y todavía habitadas. Un mirador en la colina cercana (Shiroyama) ofrece la vista panorámica clásica del pueblo, especialmente evocadora con nieve en invierno.

### Casas museo

Algunas casas funcionan como museo (Wada-ke, la más grande, es la más visitada) y permiten ver por dentro la estructura del tejado, con vigas de madera unidas sin un solo clavo — un tejado que se renueva cada 30-40 años. El museo al aire libre Gassho-zukuri Minkaen reúne otras 25 casas tradicionales trasladadas de otros puntos del valle, y el 14 y 15 de octubre el pueblo celebra el Doburoku Matsuri. El conjunto es Patrimonio de la Humanidad por la UNESCO desde 1995, junto con la vecina Gokayama.

## Cómo llegar

### Desde Takayama

Autobús Nohi Bus directo, unos 50 minutos, con hasta 16 salidas diarias en cada sentido — la ruta más frecuente y sencilla, con billete de ida en torno a 2.800 yenes. La mayoría de los servicios no exige reserva, aunque conviene revisar el horario oficial (nouhibus.co.jp), ya que algunos sí la requieren.

### Desde Kanazawa

Autobús Nohi Bus/Hokutetsu, alrededor de una hora y cuarto, con billete de ida en torno a 2.800 yenes. A diferencia del tramo desde Takayama, este sí exige reserva de asiento obligatoria: se puede reservar online, hasta un mes antes del viaje, en Japan Bus Online (japanbusonline.com), o directamente en las taquillas de la estación de Kanazawa — en temporada alta conviene hacerlo con bastante antelación, porque se llena rápido. La misma línea continúa hasta Toyama (unos 2.400 yenes desde Shirakawa-go) y Takaoka.

### Desde Nagoya

Autobús directo de Gifu Bus, Meitetsu Bus o Hokutetsu desde el Meitetsu Bus Center, junto a la estación de Nagoya, entre 2 horas y media y 3 horas, con asiento siempre reservado (entre 3.600 y 4.700 yenes según el día). Se reserva en Willer o en las webs de autobuses de larga distancia (highway bus); ni este trayecto ni el resto de tramos en autobús hacia Shirakawa-go están cubiertos por el Japan Rail Pass.

## Dónde alojarse

Pasar la noche en una de las casas gassho-zukuri reconvertidas en minshuku permite ver el pueblo sin las aglomeraciones de las visitas de un día, aunque las plazas son limitadas y conviene reservar con mucha antelación.`,
    relatedCities: ["takayama", "gifu"],
  },

  "shizuoka": {
    citySlug: "shizuoka",
    prefectureSlug: "shizuoka",
    intro:
      "Shizuoka capital, junto a la bahía de Suruga, es una de las mejores zonas de Japón para ver el monte Fuji desde el nivel del mar.",
    content: `## Qué ver y hacer

### Té verde de Shizuoka

La ciudad es un gran centro productor de té verde, con plantaciones visibles en las colinas cercanas y tiendas especializadas en el centro donde se puede catar antes de comprar.

### Vistas al Fuji desde Miho no Matsubara

En días despejados, el Fuji se ve con claridad desde varios puntos de la costa, incluido este pinar declarado Patrimonio de la Humanidad como parte del conjunto del Fuji.

### Santuario Kunozan Toshogu

En lo alto de un acantilado junto al mar, alberga el primer mausoleo del shogun Tokugawa Ieyasu, antes de su traslado definitivo a Nikko.

## Cómo llegar

### Desde Tokio

Shinkansen Tokaido directo, poco más de una hora.

[BANNER_JRPASS]

### Desde Nagoya

Shinkansen Tokaido en dirección contraria, aproximadamente una hora.

## Dónde alojarse

El centro, cerca de la estación de Shizuoka, es la base más práctica para moverte por la costa y las plantaciones de té cercanas.`,
    relatedCities: ["atami", "hamamatsu"],
  },

  atami: {
    citySlug: "atami",
    prefectureSlug: "shizuoka",
    intro:
      "Atami es el balneario costero clásico de la región de Tokio: onsen con vistas al mar y un ambiente retro que ha vuelto a ponerse de moda.",
    content: `## Qué ver y hacer

### Ambiente retro de balneario

Atami vivió su época dorada como destino de luna de miel en los años 60-70, y conserva ese ambiente retro en sus hoteles-onsen frente al mar, hoy redescubiertos por generaciones más jóvenes. Los fuegos artificiales sobre la bahía, varias veces al año, son otro de sus reclamos clásicos.

### Museo de Arte MOA

En lo alto de una colina con vistas a la bahía, reúne una notable colección de arte japonés clásico —unas 3.500 obras entre pintura, laca y cerámica, con varios tesoros nacionales— y se llega en una escalera mecánica larga que ya es parte de la experiencia.

### Hashiriyu y jardín de ciruelos Baien

Hashiriyu es una de las tres fuentes termales más antiguas de Japón, con aguas a 70°C descubiertas hace más de 1.300 años. El jardín Atami Baien florece de enero a marzo con cientos de ciruelos, y el mirador del castillo de Atami —una construcción turística de 1959, no histórica— se alcanza en un teleférico de tres minutos con vistas a la bahía.

## Cómo llegar

### Desde Tokio

Shinkansen Tokaido directo, unos 50 minutos — una de las escapadas de onsen más rápidas desde la capital.

[BANNER_JRPASS]

## Dónde alojarse

Un hotel-onsen con vistas al mar es la experiencia clásica de Atami; muchos están a un paseo corto de la estación, en la ladera que baja hacia la bahía.`,
    relatedCities: ["hakone", "shizuoka"],
  },

  hamamatsu: {
    citySlug: "hamamatsu",
    prefectureSlug: "shizuoka",
    intro:
      "Hamamatsu es una ciudad industrial junto al lago Hamana, cuna de marcas como Yamaha y Suzuki, y rival histórica de Utsunomiya por el título de capital del gyoza.",
    content: `## Qué ver y hacer

### Museo de instrumentos musicales

Hamamatsu es sede histórica de fabricantes de instrumentos musicales y motores — Yamaha y Suzuki tienen aquí sus orígenes — y mantiene un museo de referencia internacional, con salas donde se pueden tocar réplicas de varios instrumentos del mundo.

### Lago Hamana y Hamamatsu Matsuri

El lago Hamana, famoso por su anguila de cría, y la costa cercana completan la visita. Cada mayo, el Hamamatsu Matsuri llena el cielo de cometas gigantes competitivas durante el día y las calles de carrozas iluminadas por la noche.

### Gyoza de Hamamatsu

Los gyoza llegaron a la ciudad en los años 50, vendidos por un inmigrante chino en un puesto callejero cerca de la estación, y hoy se sirven "en rueda", dispuestos en círculo en la sartén con brotes de soja rellenando el centro — unos 80 restaurantes del centro están especializados en ellos. Los pianos que decoran la propia estación de tren son un guiño a Yamaha, fundada en la ciudad.

## Cómo llegar

### Desde Tokio

Shinkansen Tokaido directo, aproximadamente 1 hora y 40 minutos.

[BANNER_JRPASS]

### Desde Nagoya

Shinkansen Tokaido en dirección contraria, unos 30 minutos.

## Dónde alojarse

El centro, cerca de la estación de Hamamatsu, es la base más práctica para el museo de instrumentos y las excursiones al lago Hamana.`,
    relatedCities: ["shizuoka"],
  },

  nagoya: {
    citySlug: "nagoya",
    prefectureSlug: "aichi",
    intro:
      "Nagoya es la cuarta ciudad de Japón por población, corazón industrial del país (sede de Toyota) y punto medio natural entre Tokio y Kansai.",
    content: `## Qué ver y hacer

### Castillo de Nagoya

Con sus icónicos delfines dorados (shachihoko) en el tejado, es el símbolo de la ciudad.

### Museo Toyota de la Industria y la Tecnología

Muestra la evolución de la compañía desde los telares textiles hasta el automóvil, con máquinas originales todavía en funcionamiento durante demostraciones programadas.

### Gastronomía propia de Nagoya

Miso katsu, tebasaki (alitas de pollo) y hitsumabushi (anguila servida de tres formas distintas) son platos que casi no se ven fuera de la ciudad.

### Excursiones de un día desde Nagoya

Tokoname, a 30-40 minutos en tren Meitetsu, es el principal centro de producción de figuras maneki-neko (el gato de la suerte) de Japón, con un paseo lleno de ellas entre sus talleres de ceramistas. Las rocas Meoto Iwa, en Futami, están unidas por una gruesa cuerda sagrada (shimenawa) y son uno de los símbolos más fotografiados de la costa de Ise-Shima.

## Cómo llegar

### Desde Tokio

Shinkansen Tokaido directo, poco más de 1 hora y 40 minutos.

[BANNER_JRPASS]

### Desde Kioto/Osaka

Shinkansen Tokaido, unos 35-50 minutos según el punto de origen — Nagoya es prácticamente el punto medio de la línea.

[RECURSOS_VIAJE]

## Dónde alojarse

El centro, entre la estación de Nagoya y el castillo, concentra la mayor oferta de hoteles; el barrio de Osu, con su mercado cubierto y su templo Kannon, es una buena base alternativa más económica.`,
    relatedCities: ["inuyama", "toyota"],
  },

  inuyama: {
    citySlug: "inuyama",
    prefectureSlug: "aichi",
    intro:
      "Inuyama tiene uno de los doce castillos originales de Japón que sobreviven desde el periodo feudal, considerado el más antiguo del país.",
    content: `## Qué ver y hacer

### Castillo de Inuyama

Construido en 1537 por Oda Nobuyasu, tío de Oda Nobunaga, es uno de los cinco castillos de Japón declarados Tesoro Nacional (junto a Matsumoto, Himeji, Matsue e Hikone) y uno de los pocos torreones originales que quedan en el país — 24 metros de altura, con cuatro plantas sobre el suelo y dos subterráneas— y ofrece vistas sobre el río Kiso desde lo alto. La cercana garganta de Kiso permite paseos en barca tradicional bajo pequeños acantilados, con barquero incluido. El Festival de Inuyama, con 13 carrozas mecánicas de muñecos del periodo Edo, se celebra cada abril desde 1635.

### Museo al aire libre Meiji Mura

A poca distancia, reúne más de 60 edificios históricos de la era Meiji trasladados de distintos puntos de Japón, incluida parte de un antiguo hotel diseñado por Frank Lloyd Wright; el recinto es tan grande que tiene su propio tranvía y autobús interno.

## Cómo llegar

### Desde Nagoya

Tren Meitetsu directo, unos 30 minutos — esta línea privada no está cubierta por el JR Pass.

## Dónde alojarse

Se visita bien como excursión de un día desde Nagoya; el centro, junto al castillo, es la zona más agradable para pasear.`,
    relatedCities: ["nagoya"],
  },

  toyota: {
    citySlug: "toyota",
    prefectureSlug: "aichi",
    intro:
      "Toyota, la ciudad que tomó el nombre de la empresa y no al revés, es el gran centro de producción del fabricante de coches más grande del mundo.",
    content: `## Qué ver y hacer

### De Koromo a ciudad Toyota

La ciudad, originalmente llamada Koromo, se rebautizó en 1959 en honor a la compañía Toyota, cuya sede y principales plantas siguen aquí.

### Museo Toyota Kaikan

De entrada gratuita, permite ver de cerca la evolución de sus modelos y sus tecnologías de movilidad más recientes.

[LINK_TOYOTA_KAIKAN]

### Estadio Toyota

Con capacidad para más de 40.000 espectadores, es sede habitual de partidos de fútbol y rugby de primer nivel.

## Cómo llegar

### Desde Nagoya

Tren Meitetsu, unos 30-40 minutos — esta línea privada no está cubierta por el JR Pass.

## Dónde alojarse

Se visita casi siempre como excursión de un día desde Nagoya; los hoteles de negocios cerca de la estación son la opción más práctica si te quedas.`,
    relatedCities: ["nagoya"],
  },

  tsu: {
    citySlug: "tsu",
    prefectureSlug: "mie",
    intro:
      "Tsu es la discreta capital de Mie, más conocida como punto de paso hacia Ise que como destino en sí misma.",
    content: `## Qué ver y hacer

### Castillo de Tsu y tenmusu

Tsu tiene poca fama turística propia, pero es un nudo práctico para llegar a Ise, con el castillo de Tsu (hoy solo parque y muralla) y una tradición local de fideos tenmusu (bola de arroz con gamba tempura, para llevar y comer paseando) que se ha extendido por toda la región. Sus gyoza fritos, de gran tamaño —15 centímetros de diámetro o más—, son otra especialidad local poco conocida fuera de Mie.

### Capital administrativa de Mie

Conserva un ambiente de ciudad de tamaño medio poco transitado por turistas extranjeros, alejado del circuito clásico de Kansai.

## Cómo llegar

### Desde Nagoya u Osaka

Tren limited express Kintetsu — esta línea privada no está cubierta por el JR Pass.

## Dónde alojarse

La mayoría de los viajeros la usan como escala camino de Ise; el centro, cerca de la estación, es la opción más práctica para una noche.`,
    relatedCities: ["ise", "toba"],
  },

  ise: {
    citySlug: "ise",
    prefectureSlug: "mie",
    intro:
      "Ise alberga el santuario sintoísta más importante de Japón, el Santuario de Ise, reconstruido cada 20 años según una tradición milenaria.",
    content: `## Qué ver y hacer

### Santuario de Ise

El Ise Jingu se divide en dos recintos principales, unidos por tradición aunque separados varios kilómetros: el Santuario Exterior (Geku), dedicado a la deidad de la agricultura, y el Interior (Naiku), dedicado a la diosa solar Amaterasu y considerado el más sagrado del sintoísmo japonés. Cada veinte años se reconstruyen por completo en un terreno adyacente siguiendo el ritual Shikinen Sengu, una práctica que se remonta más de 1.300 años.

### Calle Okage Yokocho

Junto al Naiku, recrea el ambiente de una ciudad de peregrinos del periodo Edo, con puestos de comida callejera y tiendas de artesanía para pasear sin prisa después de la visita al santuario.

### Más allá de los dos recintos principales

El complejo completo del Gran Santuario de Ise reúne 123 santuarios adicionales repartidos entre el Naiku y el Geku. El Naiku tiene unos 2.000 años de historia, unos 500 más que el Geku, y alberga el Espejo Sagrado, una de las tres regalías imperiales de Japón — los visitantes solo pueden ver los tejados del edificio principal por encima de las vallas de madera, sin poder fotografiar esa zona. La próxima reconstrucción ritual (Shikinen Sengu), que se repite cada 20 años, está prevista para 2033.

## Cómo llegar

### Desde Nagoya u Osaka

Tren limited express Kintetsu, la ruta más directa (no cubierta por el JR Pass); también hay conexión JR desde Nagoya para quien tenga pase de tren.

[BANNER_JRPASS]

## Dónde alojarse

El centro de Ise, entre las estaciones de Ise-shi y Uji-Yamada, deja ambos recintos del santuario a un trayecto corto en autobús.`,
    relatedCities: ["toba", "tsu"],
  },

  toba: {
    citySlug: "toba",
    prefectureSlug: "mie",
    intro:
      "Toba, en la costa de Mie, es la cuna de la perla cultivada, gracias al trabajo pionero de Kokichi Mikimoto a finales del siglo XIX.",
    content: `## Qué ver y hacer

### Isla de las Perlas Mikimoto

Conserva el laboratorio original donde Mikimoto perfeccionó el cultivo de perlas, con demostraciones en vivo de las buceadoras ama recogiendo ostras varias veces al día.

### Acuario de Toba

Uno de los más grandes de Japón por número de especies, es otra parada habitual junto al puerto. La bahía de Toba, salpicada de pequeñas islas, es también un buen mirador sobre la costa de Ise-Shima.

## Cómo llegar

### Desde Ise

Tren limited express Kintetsu, unos 15 minutos.

## Dónde alojarse

Se visita bien como excursión de un día desde Ise; quienes prefieran quedarse encuentran hoteles con vistas a la bahía cerca del puerto.`,
    relatedCities: ["ise"],
  },

  otsu: {
    citySlug: "otsu",
    prefectureSlug: "shiga",
    intro:
      "Otsu, a orillas del lago Biwa, el mayor lago de Japón, fue brevemente capital imperial en el siglo VII y hoy es una escapada tranquila desde Kioto.",
    content: `## Qué ver y hacer

### Lago Biwa

Domina el paisaje de Otsu, con paseos en barco (incluidos algunos con crucero panorámico y comida a bordo) y una costa que se puede recorrer en bicicleta.

### Templo Miidera y santuario Hiyoshi Taisha

El templo Miidera, uno de los cuatro grandes templos de la escuela Tendai, y el santuario Hiyoshi Taisha, a los pies del monte Hiei, son las visitas históricas principales.

### Ishiyama-dera

Otro templo con vistas al lago, está tradicionalmente asociado a la escritora Murasaki Shikibu, autora de «La historia de Genji» — según la tradición, empezó a escribirla aquí en una noche de luna llena del año 1004.

### Santuario Omi Jingu y crucero Michigan

El santuario Omi Jingu, con su torii bermellón Romon, se construyó en 1940 para conmemorar el 2.600 aniversario del primer emperador de Japón, y hoy es sede de campeonatos de karuta. El Michigan, un barco de rueda de paletas que navega el lago Biwa desde 1981, es otra forma clásica de ver la ciudad desde el agua.

## Cómo llegar

### Desde Kioto

Tren JR o metro directo, unos 10 minutos — una de las escapadas más rápidas desde la ciudad.

## Dónde alojarse

Se visita bien como excursión de un día desde Kioto, con la que está conectada en apenas 10 minutos de tren.`,
    relatedCities: ["hikone", "nagahama"],
  },

  hikone: {
    citySlug: "hikone",
    prefectureSlug: "shiga",
    intro:
      "Hikone tiene uno de los doce castillos originales de Japón, con su torreón declarado Tesoro Nacional.",
    content: `## Qué ver y hacer

### Castillo de Hikone

Construido a principios del siglo XVII, es uno de los pocos castillos japoneses cuyo torreón original ha llegado intacto hasta hoy y está clasificado como Tesoro Nacional.

### Barrio samurái y jardín Genkyuen

La ciudad, a orillas del lago Biwa, conserva un barrio samurái con jardines tradicionales, entre ellos el jardín Genkyuen, junto al propio castillo, con una casa de té donde se puede tomar matcha con vistas al estanque.

### Hikonyan

El gato samurái con casco que hace de mascota de la ciudad se ha convertido en uno de los personajes de este tipo más populares de Japón, con apariciones regulares junto a la entrada del castillo. Este es, junto a los de Matsumoto, Himeji, Matsue e Inuyama, uno de los cinco castillos de Japón declarados Tesoro Nacional.

## Cómo llegar

### Desde Kioto

Tren JR limited express o local, unos 40-50 minutos.

[BANNER_JRPASS]

## Dónde alojarse

Se visita bien como excursión de un día desde Kioto u Otsu; el centro, junto al castillo, es la zona más agradable para pasear.`,
    relatedCities: ["otsu"],
  },

  nagahama: {
    citySlug: "nagahama",
    prefectureSlug: "shiga",
    intro:
      "Nagahama, en la orilla norte del lago Biwa, conserva un casco antiguo de comerciantes y uno de los mejores puntos de vista del lago.",
    content: `## Qué ver y hacer

### Kurokabe Square y castillo de Nagahama

El barrio de Kurokabe Square reúne edificios comerciales tradicionales convertidos en tiendas de artesanía y cristal, donde se puede ver soplar vidrio en directo, junto al castillo de Nagahama, reconstruido con vistas al lago Biwa. Nagahama fue además el primer feudo que gobernó Toyotomi Hideyoshi, uno de los tres grandes unificadores del Japón feudal.

### Isla de Chikubushima

Accesible en barco, alberga un santuario considerado uno de los tres grandes de la diosa Benzaiten en Japón. El curry negro del lago Biwa, creado para conmemorar el aniversario de la restauración de Kurokabe Square, y el saba somen —fideos servidos con caballa cocinada a fuego lento en salsa agridulce de soja— son dos especialidades propias de Nagahama.

## Cómo llegar

### Desde Kioto

Tren JR con transbordo en Maibara, poco más de una hora.

[BANNER_JRPASS]

## Dónde alojarse

Se visita bien como excursión de un día desde Kioto; el centro, junto al castillo y Kurokabe Square, es la zona más práctica.`,
    relatedCities: ["otsu"],
  },

  uji: {
    citySlug: "uji",
    prefectureSlug: "kyoto",
    intro:
      "Uji, entre Kioto y Nara, es la cuna del té matcha de mayor prestigio de Japón y hogar del templo que aparece en la moneda de 10 yenes.",
    content: `## Qué ver y hacer

### Byodo-in

Con su Salón Fénix reflejado en un estanque, es uno de los templos más fotografiados de Japón y da imagen a la moneda de 10 yenes; el museo Hoshokan, dentro del recinto, guarda las piezas originales retiradas del edificio para su conservación.

[LINK_BYODOIN]

### Té de Uji y santuario Ujigami

Uji es la región productora de té más prestigiosa del país, con salones de té y tiendas donde probar matcha de alta calidad recién molido — el distrito de Naka-Uji conserva numerosas "cha-shi", casas y fábricas de té tradicionales de periodo Edo. El cercano santuario Ujigami, mucho más discreto, conserva el edificio de santuario más antiguo que se conoce en Japón.

### Museo Nintendo

Abierto el 2 de octubre de 2024 en una fábrica restaurada de 1969 —que originalmente producía cartas hanafuda, el primer producto de la compañía—, repasa la historia de Nintendo a 20 minutos de la estación de Uji.

## Cómo llegar

### Desde Kioto

Tren JR o Keihan, unos 20-30 minutos.

## Dónde alojarse

Se visita casi siempre como excursión de un día desde Kioto, con la que está muy bien conectada por tren.`,
    relatedCities: ["kioto", "nara"],
  },

  amanohashidate: {
    citySlug: "amanohashidate",
    prefectureSlug: "kyoto",
    intro:
      "Amanohashidate, en la costa norte de Kioto, es una de las tres vistas más célebres de Japón: una lengua de arena de casi 4 km cubierta de pinos.",
    content: `## Qué ver y hacer

### La franja de arena

Amanohashidate ("el puente al cielo"), de casi 4 kilómetros y cubierta de miles de pinos, separa la bahía en dos y se puede cruzar a pie o en bicicleta. La tradición local invita a mirarla boca abajo, entre las piernas, desde uno de los miradores elevados, para que parezca un puente flotando en el cielo.

### Templo Nariaiji

En la montaña frente a la bahía, se alcanza en telesilla o funicular y añade una segunda perspectiva panorámica desde más altura.

### View Land y templo Chionji

El parque View Land, en el lado opuesto de la bahía, ofrece la clásica vista "del dragón volador" de la lengua de arena. El templo Chionji, junto a la estación, alberga una de las tres grandes estatuas de Monju Bosatsu (deidad de la sabiduría) de Japón, con pinos cercanos cubiertos de papeles de fortuna en forma de abanico.

## Cómo llegar

### Desde Kioto

Tren limited express, unas 2 horas hacia el norte de la prefectura.

[BANNER_JRPASS]

## Dónde alojarse

El pueblo junto a la estación, a un lado de la bahía, concentra ryokan y hoteles con vistas a la franja de arena.`,
    relatedCities: ["kioto"],
  },

  sakai: {
    citySlug: "sakai",
    prefectureSlug: "osaka",
    intro:
      "Sakai, al sur de Osaka, fue durante siglos un puerto comercial independiente y hoy conserva las mayores tumbas imperiales (kofun) de Japón.",
    content: `## Qué ver y hacer

### Daisen Kofun

La tumba con forma de cerradura atribuida al emperador Nintoku es la mayor tumba del mundo por superficie y forma parte de un conjunto de kofun de Mozu-Furuichi declarado Patrimonio de la Humanidad; el mirador del cercano ayuntamiento ofrece la única vista elevada disponible, ya que la propia tumba no se puede recorrer por dentro.

### Forja de cuchillos japoneses

Sakai es históricamente famosa por la forja de cuchillos de alta calidad, un oficio nacido de las técnicas de forja de katanas samurái: en 1761 recibieron la denominación "Sakai-kiwame" por su calidad de corte, y hoy se calcula que 9 de cada 10 chefs japoneses usan cuchillos de Sakai. El Museo de Artesanía Tradicional tiene entrada gratuita, y talleres como Mizuno Tanrenjo (fundado en 1872) ofrecen demostraciones de forja en vivo. Sakai fue además la ciudad natal de Sen no Rikyu, la figura que perfeccionó la ceremonia del té japonesa.

## Cómo llegar

### Desde Osaka

Tren Nankai desde el centro, unos 20-30 minutos — esta línea privada no está cubierta por el JR Pass.

## Dónde alojarse

Se visita bien como excursión de un día desde Osaka, con la que está muy bien conectada por tren.`,
    relatedCities: ["osaka"],
  },

  takatsuki: {
    citySlug: "takatsuki",
    prefectureSlug: "osaka",
    intro:
      "Takatsuki, entre Osaka y Kioto, es una ciudad residencial práctica más que un destino turístico en sí, útil como base para explorar ambas.",
    content: `## Qué ver y hacer

### Base residencial entre dos capitales

Takatsuki no tiene grandes reclamos turísticos propios, pero su posición a medio camino entre Osaka y Kioto, con buena conexión de tren en ambas direcciones, la convierte en una base residencial cómoda.

### Castillo de Takatsuki

Del que apenas quedan restos, recuerda su papel histórico como plaza fuerte cristiana en el siglo XVI, y el parque que ocupa hoy su terreno es un buen sitio para un paseo tranquilo entre dos visitas. En primavera, el parque Akutagawa Sakurazutsumi despliega el Koinobori Festa 1000, con un millar de banderolas de carpa (koinobori) coincidiendo con el Kodomo no Hi, el Día del Niño.

## Cómo llegar

### Desde Osaka o Kioto

Tren JR o Hankyu; Takatsuki está a medio camino entre ambas, con trayectos cortos en cualquier dirección.

## Dónde alojarse

Por su posición y buenas conexiones, algunos viajeros la usan como base para visitar tanto Osaka como Kioto sin cambiar de hotel.`,
    relatedCities: ["osaka", "kioto"],
  },

  kobe: {
    citySlug: "kobe",
    prefectureSlug: "hyogo",
    intro:
      "Kobe es uno de los grandes puertos internacionales de Japón desde el siglo XIX, y da nombre a la carne de vacuno más famosa del mundo.",
    content: `## Qué ver y hacer

### Carne de Kobe

Criada bajo un estricto control de calidad, es una de las experiencias gastronómicas más buscadas por los visitantes, servida en restaurantes especializados en teppanyaki.

### Barrio de Kitano y monte Rokko

El barrio de Kitano conserva mansiones de estilo occidental de la era del puerto internacional, y el mirador nocturno desde el monte Rokko ofrece una de las mejores vistas urbanas de Japón.

### Jardín de hierbas de Nunobiki

Accesible en teleférico desde el propio centro, añade un paseo tranquilo con vistas al puerto y una cascada a mitad de camino.

### Santuario Ikuta y Nankinmachi

El santuario Ikuta, fundado según la tradición en el año 201, es uno de los más antiguos de Japón y fue escenario de una batalla samurái en 1184. A un paseo, Nankinmachi es uno de los tres grandes barrios chinos del país, con el butaman —un bollo relleno de cerdo al vapor— como especialidad callejera.

### Parque Meriken

Junto al puerto, reúne la escultura "BE KOBE" —uno de los rincones más fotografiados de la ciudad— y un memorial al terremoto de Kobe de 1995, con un tramo del muelle dejado tal como quedó tras el desastre.

## Cómo llegar

### Desde Osaka

Shinkansen Tokaido-Sanyo desde Shin-Osaka, unos 20 minutos.

[BANNER_JRPASS]

### Desde Kioto

Shinkansen o tren JR directo, unos 30-50 minutos según la línea.

## Dónde alojarse

El centro, entre la estación de Sannomiya y el puerto (Kobe Harborland), concentra la mayor oferta de hoteles y restaurantes.`,
    relatedCities: ["himeji", "awaji"],
  },

  himeji: {
    citySlug: "himeji",
    prefectureSlug: "hyogo",
    intro:
      "El castillo de Himeji es, para muchos, el castillo japonés por excelencia: la fortaleza original mejor conservada del país, Patrimonio de la Humanidad.",
    content: `## Qué ver y hacer

### Castillo de Himeji

Apodado "Castillo de la Garza Blanca" por su fachada, es el único de los grandes castillos de Japón que conserva su estructura original casi intacta desde el siglo XVII, sin haber sufrido incendios ni bombardeos. Fue de los primeros lugares de Japón declarados Patrimonio de la Humanidad por la UNESCO, en 1993.

[LINK_HIMEJI_TICKET]

### Jardín Kokoen

Junto al castillo, recrea nueve jardines de estilo Edo separados por muros, construidos en el terreno de las antiguas residencias samurái.

### Templo Engyoji y galería Miyuki-dori

En el monte Shosha, el templo Engyoji, fundado en 966, es parada 27 de la peregrinación Saigoku Kannon de 33 templos. La galería comercial cubierta de Miyuki-dori Shotengai, con ambiente retro de la era Showa, es un buen sitio para probar el oden de Himeji, servido en cuencos con forma de castillo.

## Cómo llegar

### Desde Osaka

Shinkansen Sanyo desde Shin-Osaka, unos 50 minutos.

[BANNER_JRPASS]

### Desde Kioto

Shinkansen o tren JR directo, aproximadamente una hora.

## Dónde alojarse

Se visita bien como excursión de un día desde Osaka o Kioto; el centro, junto a la estación, deja el castillo a un paseo recto de 15 minutos.`,
    relatedCities: ["kobe"],
  },

  awaji: {
    citySlug: "awaji",
    prefectureSlug: "hyogo",
    intro:
      "Awaji es la mayor isla del mar Interior de Seto, conectada a Kobe y Shikoku por dos de los puentes colgantes más largos del mundo.",
    content: `## Qué ver y hacer

### Puente Akashi Kaikyo

Une Awaji con Kobe y fue durante años el puente colgante más largo del mundo.

### Jardines, granjas y teatro de marionetas

La isla combina jardines florales, granjas y una tradición propia de teatro de marionetas (Ningyo Joruri) reconocida como patrimonio cultural. Awaji Yumebutai, un complejo de jardines y arquitectura diseñado por Tadao Ando sobre una antigua cantera, es otra parada habitual, con un invernadero circular y una escalinata de cientos de macetas de flores.

### Remolinos de Naruto

En el estrecho hacia Shikoku, se pueden ver desde un puente con suelo de cristal a 45 metros sobre el mar, mejor en horas cercanas a la marea alta o baja, cuando el remolino es más intenso.

## Cómo llegar

### Desde Kobe u Osaka

Autobús directo, cruzando el puente Akashi Kaikyo — esta ruta en autobús no está cubierta por el JR Pass.

## Dónde alojarse

La isla se recorre mejor en coche de alquiler; hay hoteles y ryokan repartidos por la costa, muchos con onsen y vistas al mar Interior de Seto.`,
    relatedCities: ["kobe"],
  },

  yoshino: {
    citySlug: "yoshino",
    prefectureSlug: "nara",
    intro:
      "Yoshino está considerado el mejor lugar de Japón para ver la floración del cerezo, con más de 30.000 árboles cubriendo la montaña en distintas franjas de altitud.",
    content: `## Qué ver y hacer

### Los cerezos de Yoshino

Cubren la montaña en cuatro zonas escalonadas por altitud, que florecen de forma sucesiva a lo largo de varias semanas — una peculiaridad que hace que la temporada dure más que en la mayoría de lugares de Japón.

### Santuario Yoshimizu y templo Kinpusen-ji

El templo Kinpusen-ji, con uno de los edificios de madera más grandes de Japón, y el santuario Yoshimizu completan la visita; la ruta entera se recorre bien caminando desde el pueblo hasta los miradores más altos.

## Cómo llegar

### Desde Osaka o Nara

Tren Kintetsu con transbordo — esta línea privada no está cubierta por el JR Pass.

## Dónde alojarse

Fuera de la temporada de cerezos se visita bien en el día desde Nara u Osaka; en plena floración conviene reservar con mucha antelación si quieres quedarte, porque se llena rápido.`,
    relatedCities: ["nara"],
  },

  asuka: {
    citySlug: "asuka",
    prefectureSlug: "nara",
    intro:
      "Asuka fue la cuna del primer estado centralizado japonés en los siglos VI-VII, y hoy es un paisaje rural salpicado de tumbas y ruinas de aquella época.",
    content: `## Qué ver y hacer

### Tumbas y ruinas de Asuka

La región conserva tumbas antiguas (kofun) con pinturas murales, ruinas de palacios imperiales y estatuas de piedra de origen incierto, testimonio de cuando esta llanura fue el centro político de Japón antes de que la capital se trasladara a Nara y después a Kioto.

### Ishibutai Kofun

Una tumba cuya cámara de piedra quedó al descubierto tras perder su cubierta de tierra hace siglos, es la más visitada y una de las pocas que se pueden recorrer por dentro. Toda la zona se recorre bien en bicicleta entre campos de arroz.

## Cómo llegar

### Desde Nara u Osaka

Tren Kintetsu directo hasta la estación de Asuka.

## Dónde alojarse

Se visita casi siempre como excursión de un día desde Nara u Osaka; hay pocas opciones de alojamiento en la propia zona rural de Asuka.`,
    relatedCities: ["nara"],
  },

  wakayama: {
    citySlug: "wakayama",
    prefectureSlug: "wakayama",
    intro:
      "Wakayama capital, junto al castillo que da nombre a la ciudad, es sobre todo la puerta de entrada al monte sagrado de Koyasan.",
    content: `## Qué ver y hacer

### Castillo de Wakayama

Reconstruido tras la Segunda Guerra Mundial, domina el centro de la ciudad.

### Bahía de Wakaura y templo Kimiidera

La bahía de Wakaura, con formaciones rocosas y buenas vistas al mar, y el cercano templo Kimiidera, uno de los treinta y tres lugares de peregrinación Saigoku, completan la visita con un paseo tranquilo por la costa.

## Cómo llegar

### Desde Osaka

Tren JR limited express desde Shin-Osaka, poco más de una hora.

[BANNER_JRPASS]

## Dónde alojarse

El centro, cerca del castillo y la estación, es la base más práctica antes de seguir hacia Koyasan o la costa.`,
    relatedCities: ["koyasan", "shirahama"],
  },

  koyasan: {
    citySlug: "koyasan",
    prefectureSlug: "wakayama",
    intro:
      "Koyasan es el centro mundial del budismo Shingon, fundado por el monje Kukai en el siglo IX, con más de cien templos donde es posible alojarse.",
    content: `## Qué ver y hacer

### Cementerio de Okunoin

Con más de 200.000 tumbas entre cedros centenarios, conduce hasta el mausoleo del monje Kukai, que según la tradición sigue en meditación eterna.

### Kongobuji y Danjo Garan

Kongobuji, el templo principal de la escuela Shingon, y el complejo de Danjo Garan, con su gran pagoda roja, son las otras dos grandes visitas del pueblo.

### Alojamiento en shukubo

Decenas de templos ofrecen alojamiento con cena vegetariana budista (shojin ryori) y la posibilidad de asistir a la meditación matutina.

[LINK_KOYASAN_SHUKUBO]

## Cómo llegar

### Desde Osaka (Namba)

Tren Nankai hasta Gokurakubashi, seguido de funicular — esta línea privada no está cubierta por el JR Pass.

## Dónde alojarse

Dormir en un shukubo es la experiencia central de Koyasan; conviene reservar con antelación, especialmente en fin de semana o temporada de otoño.`,
    relatedCities: ["wakayama"],
  },

  shirahama: {
    citySlug: "shirahama",
    prefectureSlug: "wakayama",
    intro:
      "Shirahama es uno de los balnearios de playa y onsen más antiguos de Japón, con aguas termales documentadas desde hace más de 1.300 años.",
    content: `## Qué ver y hacer

### Playa de Shirarahama

De arena blanca importada de Australia para reforzar la original, es uno de los pocos destinos de sol y playa clásicos dentro de Japón. Sus onsen, entre ellos varios con acceso público gratuito frente al mar, están documentados desde el periodo Nara.

### Acantilados de Sandanbeki

Tallados por la erosión en capas de roca, tienen además una cueva marina visitable en ascensor, usada antiguamente por piratas de la zona para esconder sus barcas.

## Cómo llegar

### Desde Osaka

Tren JR limited express desde Shin-Osaka, unas 2 horas y media.

[BANNER_JRPASS]

## Dónde alojarse

Los hoteles y ryokan con onsen frente al mar, cerca de la playa de Shirarahama, son la opción más buscada de la zona.`,
    relatedCities: ["wakayama"],
  },

  tottori: {
    citySlug: "tottori",
    prefectureSlug: "tottori",
    intro:
      "Tottori es la prefectura menos poblada de Japón, conocida sobre todo por sus dunas de arena, las únicas de gran escala del país.",
    content: `## Qué ver y hacer

### Dunas de Tottori

Con 16 km de largo, 2 km de ancho y hasta 50 metros de altura en la duna Umanose, la más alta, son el único sistema de dunas de arena de gran escala de Japón —formadas hace más de 100.000 años por sedimentos del río Sendai— y reciben alrededor de 1,3 millones de visitantes al año. Forman parte del parque nacional San'in Kaigan y se pueden recorrer a pie, en sandboard, en camello (con paseo guiado) o en parapente. El cercano Museo de Arena, con esculturas efímeras de arena a tamaño monumental renovadas cada año con un tema distinto, es otro de los grandes reclamos de la ciudad.

### Costa de Uradome

Muy cerca, cambia por completo de paisaje: acantilados y calas de aguas turquesas que se recorren en barco o kayak.

## Cómo llegar

### Desde Osaka u Okayama

Tren limited express — ambas rutas están cubiertas por el JR Pass.

[BANNER_JRPASS]

### En avión

Vuelo directo desde Tokio, la opción más rápida para esa distancia.

## Dónde alojarse

El centro de Tottori es la base más práctica; hay también algún hotel con vistas junto a las propias dunas.`,
    relatedCities: ["kurayoshi", "yonago"],
  },

  kurayoshi: {
    citySlug: "kurayoshi",
    prefectureSlug: "tottori",
    intro:
      "Kurayoshi conserva un barrio de almacenes de paredes blancas y tejas rojas a orillas de un canal, poco visitado por turistas extranjeros.",
    content: `## Qué ver y hacer

### Barrio de Utsubuki-Tamagawa

Con sus almacenes tradicionales de paredes encaladas junto a un pequeño canal, conserva el ambiente de una ciudad comercial del periodo Edo casi sin las aglomeraciones de otros cascos históricos similares.

### Santuario Mitokusan Sanbutsuji y onsen de Misasa

Kurayoshi es también base para visitar este santuario de montaña, con su edificio suspendido en un acantilado al que se sube por una ruta exigente en pendiente y con cadenas, y para el onsen de Misasa, uno de los pocos del mundo con aguas de origen radiactivo natural consideradas terapéuticas.

## Cómo llegar

### Desde Okayama o Tottori

Tren limited express directo desde cualquiera de las dos ciudades.

[BANNER_JRPASS]

## Dónde alojarse

El centro histórico se recorre bien en el día; para quedarse, el onsen de Misasa, a un corto trayecto en autobús, es la opción más atractiva de la zona.`,
    relatedCities: ["tottori"],
  },

  yonago: {
    citySlug: "yonago",
    prefectureSlug: "tottori",
    intro:
      "Yonago, junto al monte Daisen, es la puerta a la montaña más alta de la región de Chugoku y a la costa del lago Nakaumi.",
    content: `## Qué ver y hacer

### Monte Daisen

El pico más alto de Chugoku ofrece senderismo en verano y esquí en invierno, con vistas hasta el mar de Japón en días despejados.

### Mizuki Shigeru Road

Yonago es la ciudad natal del dibujante Shigeru Mizuki, creador de GeGeGe no Kitaro, con una calle comercial decorada con más de cien estatuas de bronce de sus personajes de yokai para ir contando mientras paseas. El homenaje sigue en la propia estación: los trenes de la línea JR Sakai que salen de Yonago están decorados con estos personajes, y cada parada de la línea tiene un apodo yokai oficial — la de Yonago es la "estación Nezumi Otoko".

## Cómo llegar

### Desde Okayama

Tren limited express directo.

[BANNER_JRPASS]

### En avión

Vuelo directo desde Tokio al aeropuerto de Yonago.

## Dónde alojarse

El centro, cerca de la estación de Yonago, es la base más práctica para subir al Daisen o cruzar a la vecina Sakaiminato.`,
    relatedCities: ["tottori"],
  },

  matsue: {
    citySlug: "matsue",
    prefectureSlug: "shimane",
    intro:
      "Matsue, junto al lago Shinji, tiene uno de los pocos castillos originales de Japón y fama de ciudad de espíritus y leyendas.",
    content: `## Qué ver y hacer

### Castillo de Matsue

Con su torreón original de madera, es uno de los doce castillos japoneses que han sobrevivido intactos desde el periodo feudal. La ciudad se hizo célebre en Occidente gracias a Lafcadio Hearn, el escritor que la retrató a finales del siglo XIX en sus libros sobre fantasmas y leyendas japonesas.

### Puesta de sol sobre el lago Shinji

Es una de las más fotografiadas de Japón, visible desde varios puntos del paseo junto al castillo.

### Museo de Arte Adachi

Cerca de la ciudad, combina una colección de pintura japonesa con jardines paisajísticos considerados, año tras año, entre los mejores del país; los jardines se ven desde dentro del museo, como si fueran cuadros enmarcados en las ventanas.

### Distrito Shiomi-Nawate

Este antiguo barrio samurái conserva la residencia Matsue Buke Yashiki, de mediados del siglo XVIII, y la antigua casa de Lafcadio Hearn, hoy convertida en un pequeño museo dedicado al escritor.

[LINK_ADACHI_MUSEUM]

## Cómo llegar

### Desde Okayama

Tren limited express directo, unas 2 horas y media.

[BANNER_JRPASS]

## Dónde alojarse

El centro, cerca del castillo y el lago Shinji, es la base más práctica para el resto de la prefectura de Shimane.`,
    relatedCities: ["izumo", "oda"],
  },

  izumo: {
    citySlug: "izumo",
    prefectureSlug: "shimane",
    intro:
      "Izumo Taisha es, según la tradición, el santuario sintoísta más antiguo de Japón, y el único lugar del país donde todos los dioses se reúnen una vez al año.",
    content: `## Qué ver y hacer

### Izumo Taisha

Dedicado al dios Okuninushi, es uno de los santuarios más venerados de Japón, especialmente asociado al amor y las buenas relaciones. Según la tradición sintoísta, en el décimo mes lunar todos los dioses de Japón se reúnen aquí, por lo que ese mes se llama "el mes sin dioses" en el resto del país y "el mes con dioses" solo en Izumo.

### Soba de Izumo

Servido en varios boles lacados apilados (warigo soba), es una forma de comerlo propia de la región que se prueba en varios restaurantes junto al santuario.

## Cómo llegar

### Desde Okayama o Matsue

Tren limited express directo desde cualquiera de las dos ciudades.

[BANNER_JRPASS]

### En avión

Vuelo directo desde Tokio al aeropuerto de Izumo.

## Dónde alojarse

Se visita bien como excursión de un día desde Matsue; el pueblo junto al santuario tiene también alojamiento sencillo para quien prefiera quedarse.`,
    relatedCities: ["matsue"],
  },

  oda: {
    citySlug: "oda",
    prefectureSlug: "shimane",
    intro:
      "Oda es la puerta a las minas de plata de Iwami Ginzan, que en el siglo XVI llegaron a suministrar una parte significativa de la plata mundial.",
    content: `## Qué ver y hacer

### Minas de Iwami Ginzan

Declaradas Patrimonio de la Humanidad, fueron una de las mayores fuentes de plata del mundo durante los siglos XVI y XVII, con una influencia directa en el comercio internacional de la época. Hoy se pueden recorrer a pie túneles de mina abiertos al público y el pueblo minero conservado alrededor.

### Onsen de Yunotsu

El puerto histórico por el que salía la plata hacia el resto de Japón conserva un ambiente de pueblo termal tradicional mucho más tranquilo que otros más conocidos.

## Cómo llegar

### Desde Matsue o Izumo

Tren local con transbordo, seguido de autobús hasta las minas — el trayecto en autobús no está cubierto por el JR Pass.

## Dónde alojarse

El propio pueblo minero de Omori tiene alojamiento sencillo; Yunotsu Onsen, a un corto trayecto, ofrece la opción de combinar la visita con una noche de onsen.`,
    relatedCities: ["matsue"],
  },

  okayama: {
    citySlug: "okayama",
    prefectureSlug: "okayama",
    intro:
      "Okayama tiene uno de los tres grandes jardines paisajísticos de Japón, Koraku-en, junto a un castillo apodado «el castillo cuervo» por su color negro.",
    content: `## Qué ver y hacer

### Jardín Koraku-en

Considerado uno de los tres grandes jardines de Japón junto a Kenroku-en y Kairaku-en, se diseñó en el siglo XVII para ofrecer vistas del cercano castillo de Okayama desde cada rincón, usándolo como "paisaje prestado" (shakkei). El castillo, de fachada negra, contrasta con el blanco habitual de otros castillos japoneses. La casa de té Enyo-tei y el escenario de teatro no del jardín no se destruyeron en la Segunda Guerra Mundial y se conservan según los planos originales del siglo XVII.

### Momotaro y cerámica Bizen

Okayama es conocida como la tierra natal del cuento popular de Momotaro, el "niño melocotón", y la prefectura produce la cerámica Bizen, una de las seis grandes tradiciones alfareras antiguas de Japón, sin esmaltar y cocida a leña; varios talleres del centro permiten probar el torno.

## Cómo llegar

### Desde Osaka

Shinkansen Sanyo desde Shin-Osaka, unos 45 minutos.

[BANNER_JRPASS]

### Desde Tokio

Shinkansen Tokaido-Sanyo combinado, unas 3 horas y cuarto.

## Dónde alojarse

El centro, entre la estación y el castillo, concentra la mayor oferta de hoteles y deja Kurashiki a un trayecto de 15 minutos en tren.`,
    relatedCities: ["kurashiki", "tsuyama"],
  },

  kurashiki: {
    citySlug: "kurashiki",
    prefectureSlug: "okayama",
    intro:
      "Kurashiki conserva uno de los barrios de canal mejor preservados de Japón, con almacenes blancos del periodo Edo convertidos en museos y tiendas.",
    content: `## Qué ver y hacer

### Barrio de Bikan

Con su canal flanqueado de sauces y almacenes encalados, fue un importante centro de almacenamiento de arroz en el periodo Edo y hoy reúne museos, cafeterías y tiendas de artesanía.

### Museo de Arte de Ohara

De los primeros de Japón dedicados a arte occidental, tiene una colección que sorprende por su calidad, con obras originales de Monet y El Greco.

### Kurashiki Ivy Square

Muy cerca, este complejo de ladrillo rojo, una antigua fábrica textil reconvertida en hoteles y tiendas, añade otro ángulo de la ciudad.

## Cómo llegar

### Desde Okayama

Tren JR directo, unos 15 minutos, con salidas muy frecuentes.

## Dónde alojarse

El barrio de Bikan y sus alrededores concentran la mejor oferta de ryokan y hoteles con encanto, a un paseo de los principales museos.`,
    relatedCities: ["okayama"],
  },

  tsuyama: {
    citySlug: "tsuyama",
    prefectureSlug: "okayama",
    intro:
      "Tsuyama, en el interior montañoso de Okayama, conserva las ruinas de uno de los castillos más grandes de Japón y un casco histórico poco masificado.",
    content: `## Qué ver y hacer

### Ruinas del castillo de Tsuyama

Hoy convertidas en el parque Kakuzan, fueron en su día una de las mayores fortalezas de Japón por número de torres, y se han convertido en uno de los mejores lugares de la región para el hanami gracias a sus más de 5.000 cerezos.

### Barrio de Terao-cho

Conserva templos y casas tradicionales con poca afluencia turística.

## Cómo llegar

### Desde Okayama

Tren limited express directo, poco más de una hora.

[BANNER_JRPASS]

## Dónde alojarse

Se visita bien como excursión de un día desde Okayama; el centro, cerca de la estación, es la zona más práctica si te quedas.`,
    relatedCities: ["okayama"],
  },

  miyajima: {
    citySlug: "miyajima",
    prefectureSlug: "hiroshima",
    intro:
      "Miyajima, formalmente la isla de Itsukushima, es hogar del torii que parece flotar sobre el mar, una de las postales más reconocibles de Japón.",
    content: `## Qué ver y hacer

### Santuario de Itsukushima

Construido sobre pilotes de madera, con su torii bermellón que parece flotar con la marea alta, es Patrimonio de la Humanidad desde 1996 y una de las tres vistas más célebres de Japón. Desde octubre de 2023, entrar en la isla tiene una tasa turística de 100 yenes por trayecto de ferry, incluso con Japan Rail Pass.

### Monte Misen

El teleférico sube desde el vecino Momijidani Park —llamado así por sus arces, especialmente vistosos en noviembre— hasta cerca del punto más alto de la isla, considerado sagrado y nunca talado, con vistas al mar Interior de Seto tras un corto tramo final a pie.

### Ciervos sika y momiji manju

La isla es también conocida por sus ciervos sika, que campan libremente por las calles, y por el momiji manju, un pastelito relleno con forma de hoja de arce.

## Cómo llegar

### Desde Hiroshima

Tren JR o tranvía hasta el embarcadero de Miyajimaguchi, seguido de un corto ferry — el ferry JR está cubierto por el Japan Rail Pass.

[BANNER_JRPASS]

## Dónde alojarse

Pasar la noche en la isla permite ver el santuario sin las aglomeraciones del día y, con marea baja, caminar hasta el propio torii; los ryokan con onsen son la opción más buscada.`,
    relatedCities: ["hiroshima"],
  },

  onomichi: {
    citySlug: "onomichi",
    prefectureSlug: "hiroshima",
    intro:
      "Onomichi, entre el mar y la montaña, es el punto de partida de la Shimanami Kaido, una de las mejores rutas ciclistas de Japón.",
    content: `## Qué ver y hacer

### Shimanami Kaido

Conecta Onomichi con Imabari, en Shikoku, a través de una serie de puentes sobre pequeñas islas del mar Interior de Seto, con carril bici dedicado en todo el recorrido — considerada una de las mejores rutas cicloturistas de Asia. Se puede alquilar una bicicleta en la propia estación de Onomichi para empezar la ruta nada más llegar.

### Templo Senkoji y el Camino de los Templos

La propia ciudad, con sus calles empinadas y templos escalonados por la ladera, ha sido escenario de varias películas japonesas clásicas; el templo Senkoji, en lo alto de la colina y accesible en teleférico, ofrece la vista panorámica clásica sobre el puerto y las islas. El llamado Camino de los Templos conecta hasta 25 de ellos por callejuelas y cuestas empedradas, entre ellos Tenneiji, con una pagoda de tres pisos declarada Bien de Interés Cultural. Onomichi es también célebre por sus gatos —con su propio "callejón de los gatos"— y por un ramen local de caldo claro de pescado y soja con fideos planos.

## Cómo llegar

### Desde Hiroshima

Tren JR directo.

[BANNER_JRPASS]

### Desde Osaka

Shinkansen Sanyo hasta Shin-Onomichi.

## Dónde alojarse

El centro, junto a la estación y el puerto, es la base habitual tanto para pasear por la ciudad como para empezar la Shimanami Kaido en bicicleta.`,
    relatedCities: ["hiroshima"],
  },

  "yamaguchi": {
    citySlug: "yamaguchi",
    prefectureSlug: "yamaguchi",
    intro:
      "Yamaguchi capital fue, en el siglo XVI, un centro tan floreciente de comercio y cultura que se la llamaba «la pequeña Kioto».",
    content: `## Qué ver y hacer

### Pagoda de Rurikoji

De cinco pisos y considerada una de las tres más bellas de Japón, es el símbolo de la ciudad.

### Herencia jesuita y jardín Joeiji

Yamaguchi acogió a misioneros jesuitas en el siglo XVI, incluido Francisco Javier, y esa herencia se recuerda en varios monumentos, entre ellos el jardín Joeiji, obra del pintor y monje Sesshu, uno de los grandes jardines zen de la región.

### Cascadas de Ryuzu y cuevas de Akiyoshido

Las cuevas de piedra caliza de Akiyoshido, una de las mayores de Japón y recorrible a pie por un sendero iluminado de un kilómetro, junto a las cascadas de Ryuzu, son buenas excursiones de un día cerca de la ciudad.

## Cómo llegar

### Desde Osaka/Hiroshima o Tokio

Shinkansen Sanyo hasta Shin-Yamaguchi, con enlace en autobús o tren local hasta el centro (unos 20 minutos más).

[BANNER_JRPASS]

## Dónde alojarse

El centro de Yamaguchi es tranquilo y poco turístico; también es posible alojarse en Shin-Yamaguchi, con mejor conexión de Shinkansen.`,
    relatedCities: ["shimonoseki", "hagi"],
  },

  shimonoseki: {
    citySlug: "shimonoseki",
    prefectureSlug: "yamaguchi",
    intro:
      "Shimonoseki, en el extremo occidental de Honshu, mira directamente a Kyushu al otro lado del estrecho de Kanmon y es célebre por su fugu.",
    content: `## Qué ver y hacer

### Fugu de Shimonoseki

La ciudad es el mayor centro de distribución de fugu (pez globo) de Japón, con un mercado dedicado casi por completo a esta especialidad que requiere licencia especial para prepararse.

### Estrecho de Kanmon

Escenario de la batalla naval de Dan-no-ura que puso fin al clan Taira en el siglo XII, se cruza a pie de forma gratuita por un túnel peatonal bajo el mar hasta Kyushu.

### Acuario Kaikyokan

Junto al puerto, está especializado en la fauna marina del propio estrecho, incluidos varios tipos de fugu vivos.

### Mercado de Karato y santuario Akama

El mercado de Karato es mayorista entre semana y se convierte en mercado gastronómico los fines de semana, con fugu y sushi recién preparados. El santuario Akama, con su puerta bermellón Suitenmon en forma de palacio-dragón, está dedicado al emperador Antoku, que murió ahogado con 8 años en la batalla de Dan-no-ura de 1185 — recordada también en el cercano parque Mimosusogawa, con estatuas de los generales de aquella batalla. El mirador del monte Hinoyama, accesible en teleférico, ofrece otra vista del estrecho, especialmente de noche.

## Cómo llegar

### Desde Osaka/Hiroshima

Shinkansen Sanyo directo hasta Shin-Shimonoseki.

[BANNER_JRPASS]

### Desde Yamaguchi

Tren local desde Shin-Yamaguchi.

## Dónde alojarse

El centro, junto al puerto y el estrecho de Kanmon, es la base más práctica para moverte a pie por la ciudad.`,
    relatedCities: ["yamaguchi"],
  },

  hagi: {
    citySlug: "hagi",
    prefectureSlug: "yamaguchi",
    intro:
      "Hagi, cuna de varios de los líderes que impulsaron la Restauración Meiji, conserva un casco histórico samurái casi intacto y una tradición cerámica de prestigio.",
    content: `## Qué ver y hacer

### Barrio samurái de Hagi

Mantiene calles enteras con muros de tierra y casas tradicionales, prácticamente sin apenas cambios desde el siglo XIX, cuando la ciudad formó a algunos de los principales artífices de la modernización de Japón — varios de ellos estudiaron en la escuela Shokasonjuku, hoy parte de un conjunto declarado Patrimonio de la Humanidad.

### Cerámica Hagi-yaki y castillo de Hagi

La cerámica Hagi-yaki, apreciada tradicionalmente en la ceremonia del té por su esmalte cambiante con el uso, sigue produciéndose en talleres locales donde se puede comprar directamente al ceramista, y las ruinas del castillo de Hagi, junto al mar, completan el paseo por el barrio histórico.

## Cómo llegar

### Desde Shin-Yamaguchi o Yamaguchi

Autobús o tren local desde cualquiera de las dos estaciones; Shin-Yamaguchi tiene parada de Shinkansen Sanyo.

[BANNER_JRPASS]

## Dónde alojarse

El barrio samurái y sus alrededores se recorren bien a pie; hay ryokan y pensiones tradicionales repartidos por todo el casco histórico.`,
    relatedCities: ["yamaguchi"],
  },

  tokushima: {
    citySlug: "tokushima",
    prefectureSlug: "tokushima",
    intro:
      "Tokushima es la sede del Awa Odori, el mayor festival de danza de Japón, que llena las calles cada agosto con miles de bailarines.",
    content: `## Qué ver y hacer

### Awa Odori

Celebrado del 12 al 15 de agosto durante el Obon, reúne a unos 100.000 bailarines en grupos organizados (ren) y más de 1,3 millones de visitantes cada año, con sesiones de baile por la tarde y por la noche — uno de los grandes festivales de danza de Japón, con más de 400 años de historia. Tiene incluso una réplica anual en Tokio, en el barrio de Koenji, con más de 12.000 bailarines.

### Museo Awa Odori Kaikan

Fuera de temporada, permite ver representaciones diarias y aprender los pasos básicos todo el año, con la posibilidad de unirte al baile al final del espectáculo. Desde el propio edificio, un teleférico sube al monte Bizan, con vistas sobre toda la ciudad y la desembocadura del río Yoshino.

## Cómo llegar

### Desde Okayama

Tren limited express directo, cruzando el puente Seto-Ohashi.

[BANNER_JRPASS]

### Desde Osaka/Kobe

Autobús directo cruzando el puente de Naruto (Awaji) — esta ruta en autobús no está cubierta por el JR Pass.

## Dónde alojarse

El centro, cerca de la estación de Tokushima, es la base más práctica; en pleno Awa Odori (agosto) conviene reservar con mucha antelación.`,
    relatedCities: ["naruto", "miyoshi"],
  },

  naruto: {
    citySlug: "naruto",
    prefectureSlug: "tokushima",
    intro:
      "Naruto da nombre a los remolinos marinos más famosos de Japón, formados por las corrientes del estrecho que separa Shikoku de Awaji.",
    content: `## Qué ver y hacer

### Remolinos de Naruto

Generados por el fuerte cambio de mareas entre el mar Interior de Seto y el océano Pacífico, se pueden observar desde barcos turísticos o desde un pasillo con suelo de cristal bajo el puente de Naruto, y son más intensos en invierno. La ciudad da también nombre, de forma indirecta, al ingrediente narutomaki, el remolino rosa y blanco típico del ramen, que curiosamente casi nunca se prepara en el propio Naruto. El templo Ryozen-ji, en la ciudad, es la primera estación de la peregrinación de los 88 templos de Shikoku.

### Museo de Arte Otsuka

Uno de los mayores de Japón, expone reproducciones cerámicas a tamaño real de obras maestras del arte mundial, desde Las Meninas hasta la Capilla Sixtina completa, y se puede tocar las obras sin las restricciones de un museo con originales.

[LINK_OTSUKA_MUSEUM]

## Cómo llegar

### Desde Tokushima

Autobús desde la estación, unos 30-40 minutos.

## Dónde alojarse

Se visita bien como excursión de un día desde Tokushima, con la que está a poca distancia.`,
    relatedCities: ["tokushima"],
  },

  miyoshi: {
    citySlug: "miyoshi",
    prefectureSlug: "tokushima",
    intro:
      "Miyoshi, en el interior de Tokushima, da acceso al valle de Iya, uno de los rincones más remotos y espectaculares de Shikoku.",
    content: `## Qué ver y hacer

### Valle de Iya

Con sus puentes colgantes de enredaderas —originalmente diseñados para poder cortarse en caso de invasión— y sus gargantas profundas, está considerado uno de los tres grandes rincones remotos de Japón. El puente principal (Iya Kazurabashi), que se cruza a pie sintiendo el balanceo entre las tablas de madera, es el más visitado, pero en el Oku-Iya, más al interior, quedan un par de puentes gemelos mucho menos transitados.

### Ritmo de vida rural

La zona conserva un ritmo muy alejado del Japón urbano, con onsen aislados y aldeas de montaña dispersas.

## Cómo llegar

### Desde Tokushima u Okayama

Tren JR hasta Oboke o Awa-Ikeda, con enlace en autobús hacia el valle de Iya.

[BANNER_JRPASS]

## Dónde alojarse

El transporte público es escaso; conviene alquilar coche o reservar con antelación en alguno de los ryokan y casas rurales del valle, muchos con onsen propio.`,
    relatedCities: ["tokushima"],
  },

  takamatsu: {
    citySlug: "takamatsu",
    prefectureSlug: "kagawa",
    intro:
      "Takamatsu es la capital de la prefectura del udon: Kagawa tiene, en proporción, más locales de este fideo por habitante que ninguna otra parte de Japón.",
    content: `## Qué ver y hacer

### Jardín Ritsurin

Con sus estanques, colinas artificiales y pinos podados durante generaciones, está considerado uno de los mejores jardines paisajísticos de Japón, aunque no forme parte de la lista oficial de los tres grandes.

### La prefectura del udon

Kagawa es informalmente conocida como "la prefectura del udon", con cientos de locales especializados, muchos de autoservicio y muy económicos.

### Meseta de Yashima

Escenario de una batalla clave entre los clanes Genji y Heike en el siglo XII, ofrece vistas sobre la bahía de Takamatsu y las islas cercanas, accesible en autobús o telesilla.

### Parque del castillo y Takamatsu Shotengai

El parque del castillo de Takamatsu, construido en 1590 junto al mar, conserva torretas originales declaradas Bien Cultural. La galería comercial cubierta de Takamatsu Shotengai se extiende cerca de 2,7 kilómetros, entre las más largas de Japón.

## Cómo llegar

### Desde Tokio

Shinkansen hasta Okayama y tren limited express hasta Takamatsu, unas 4 horas en total.

[BANNER_JRPASS]

### Desde Okayama

Tren limited express directo cruzando el puente Seto-Ohashi, poco menos de una hora.

## Dónde alojarse

El centro, cerca del puerto, es la base habitual para tomar el ferry a Naoshima o seguir hacia Kotohira.`,
    relatedCities: ["naoshima", "kotohira"],
  },

  naoshima: {
    citySlug: "naoshima",
    prefectureSlug: "kagawa",
    intro:
      "Naoshima ha convertido una pequeña isla del mar Interior de Seto en uno de los destinos de arte contemporáneo más singulares del mundo.",
    content: `## Qué ver y hacer

### Museo de Arte Chichu

Semienterrado y diseñado por Tadao Ando, junto a instalaciones al aire libre como la Calabaza amarilla de Yayoi Kusama —de 19 metros de diámetro, la mayor escultura de la artista, junto a la terminal de ferris de Miyanoura, con diseño del estudio SANAA (Pritzker 2010)—, ha convertido esta isla, antes dedicada a la pesca, en un referente internacional de arte contemporáneo. Desde 2010, la isla acoge además el Setouchi Triennale, un festival de arte que se celebra cada tres años por varias islas del mar Interior de Seto. La entrada es limitada y requiere reserva online con franja horaria, así que conviene reservarla antes de ir.

[LINK_BENESSE_NAOSHIMA]

### Art House Project y Museo Benesse

Varias casas tradicionales del pueblo de Honmura se han reconvertido en instalaciones artísticas permanentes, el proyecto Art House. El Museo Benesse, el primero de la isla, combina también hotel y galería en un mismo edificio sobre un acantilado.

## Cómo llegar

### Desde Takamatsu

Ferry directo desde el puerto — el trayecto en barco no está cubierto por el JR Pass.

### Desde Uno (Okayama)

Ferry corto, la ruta más habitual para quien viene desde Honshu.

## Dónde alojarse

Dormir en el propio hotel Benesse permite visitar sus obras fuera del horario de apertura al público; también hay pensiones más sencillas en el pueblo de Honmura.`,
    relatedCities: ["takamatsu"],
  },

  kotohira: {
    citySlug: "kotohira",
    prefectureSlug: "kagawa",
    intro:
      "Kotohira alberga uno de los santuarios de peregrinación más venerados de Japón, Kotohira-gu, al final de una escalinata de 1.368 escalones.",
    content: `## Qué ver y hacer

### Kotohira-gu

Popularmente conocido como Konpira-san, ha sido durante siglos uno de los destinos de peregrinación más populares de Japón, tradicionalmente asociado a la protección de marineros y pescadores. Subir los 1.368 escalones hasta el santuario interior es en sí mismo parte de la experiencia, con vistas a la llanura de Kagawa desde el camino.

### Teatro Kanamaru-za

Al pie de la escalinata, construido en 1835, es el teatro kabuki más antiguo de Japón que se conserva en su forma original y se puede visitar por dentro, incluida la maquinaria bajo el escenario. El Kotohira-gu Reitaisai, del 9 al 11 de octubre, es el festival más importante del santuario, popularmente conocido como Konpira-san.

## Cómo llegar

### Desde Takamatsu

Tren JR o Kotoden, unos 45-60 minutos.

[BANNER_JRPASS]

## Dónde alojarse

Se visita bien como excursión de un día desde Takamatsu; el pueblo junto al santuario tiene también ryokan tradicionales para quien prefiera quedarse.`,
    relatedCities: ["takamatsu"],
  },

  matsuyama: {
    citySlug: "matsuyama",
    prefectureSlug: "ehime",
    intro:
      "Matsuyama tiene uno de los onsen más antiguos de Japón, Dogo Onsen, con más de 3.000 años de historia según la leyenda.",
    content: `## Qué ver y hacer

### Dogo Onsen

Uno de los baños termales más antiguos de Japón según la tradición, inspiró parte de la estética de la casa de baños de la película "El viaje de Chihiro" de Studio Ghibli; el edificio histórico (Honkan) se puede visitar y bañar por separado, con varios niveles de entrada según las salas a las que se accede.

[LINK_DOGO_ONSEN]

### Castillo de Matsuyama y tren Botchan

El castillo, uno de los pocos que conservan su torreón original, se alcanza en un telesilla panorámico. La ciudad es también célebre por su tradición literaria, ligada al escritor Masaoka Shiki y al haiku, y el pequeño tren a vapor "Botchan", inspirado en la novela homónima de Natsume Soseki ambientada aquí, recorre varias líneas del centro.

### Templo Ishiteji y parque Dogo

Ishiteji, estación 51 de la peregrinación de los 88 templos de Shikoku, conserva tallas y esculturas poco habituales para un templo de la ruta. El parque Dogo, con cerezos en primavera, alberga el pequeño Museo Shiki dedicado al poeta de haiku Masaoka Shiki, y la calle comercial cubierta de Okaido concentra tiendas y restaurantes a los pies del castillo.

## Cómo llegar

### Desde Okayama

Tren limited express directo vía el puente Seto-Ohashi.

[BANNER_JRPASS]

### En avión

Vuelo directo desde Tokio, la opción más rápida para esa distancia.

## Dónde alojarse

El barrio de Dogo Onsen, con varios ryokan y hoteles con baño termal propio, es la zona más buscada; el centro, junto al castillo, es la alternativa más práctica para moverte en tranvía.`,
    relatedCities: ["uchiko", "imabari"],
  },

  uchiko: {
    citySlug: "uchiko",
    prefectureSlug: "ehime",
    intro:
      "Uchiko conserva una calle de casas de comerciantes casi intacta del periodo Edo, con paredes encaladas y tejados tradicionales.",
    content: `## Qué ver y hacer

### Calle de Yokaichi-Gokoku

Mantiene decenas de casas y almacenes tradicionales que prosperaron gracias al comercio de cera vegetal (desde el siglo XVIII, exportada a Europa y Estados Unidos) y papel washi, a lo largo de 600 metros con unos 90 edificios declarados Bien Cultural en 1985 — con muros namako, cortafuegos udatsu y celosías koshi típicos de la arquitectura Edo/Meiji de la zona. El teatro Uchiko-za (1916), con escenario giratorio y restaurado en 1985, es otra de las grandes paradas, junto al Buda reclinado de 20 metros y 200 toneladas del templo Koshoji, inspirado en las cuevas de Mogao chinas. Es uno de los cascos históricos mejor conservados de Shikoku y recibe muchos menos visitantes que sus equivalentes en Honshu.

### Residencia Kamihaga

La de un antiguo comerciante de cera, se puede visitar por dentro y muestra el proceso tradicional de fabricación de velas de cera vegetal, con las herramientas originales del taller.

## Cómo llegar

### Desde Matsuyama

Tren JR directo, unos 40 minutos.

[BANNER_JRPASS]

## Dónde alojarse

Se visita bien como excursión de un día desde Matsuyama; el propio casco histórico se recorre entero a pie.`,
    relatedCities: ["matsuyama"],
  },

  imabari: {
    citySlug: "imabari",
    prefectureSlug: "ehime",
    intro:
      "Imabari es el extremo Shikoku de la Shimanami Kaido, la ruta ciclista sobre puentes que la conecta con Onomichi, en Hiroshima.",
    content: `## Qué ver y hacer

### Toallas de Imabari

La ciudad es célebre en Japón por sus toallas de algodón, de una suavidad y calidad muy valoradas, con tiendas y fábricas que pueden visitarse y un pequeño museo dedicado por completo a su fabricación.

### Castillo de Imabari

Poco habitual por tener su foso conectado directamente al mar en vez de agua dulce, es otra parada del centro.

### Punto de partida de la Shimanami Kaido

Como punto de llegada (o partida) de la ruta, la ciudad se ha convertido en un destino habitual para cicloturistas que cruzan el mar Interior de Seto por sus puentes. La ruta completa suma unos 70 km sobre nueve islas, con el puente Kurushima Kaikyo —de más de 4 km, la subida más exigente del recorrido— cerca ya del propio Imabari; las bicicletas se alquilan por unos 1.000 yenes al día con fianza reembolsable en la misma estación de alquiler.

## Cómo llegar

### Desde Matsuyama

Tren o autobús directo.

### Desde Onomichi (Hiroshima), en bicicleta

Cruzando la Shimanami Kaido, unas 6-7 horas de pedaleo tranquilo con paradas — muchos ciclistas lo hacen en dos días.

## Dónde alojarse

El centro, cerca de la estación y el castillo, es la base más práctica antes o después de cruzar la Shimanami Kaido.`,
    relatedCities: ["matsuyama", "onomichi"],
  },

  kochi: {
    citySlug: "kochi",
    prefectureSlug: "kochi",
    intro:
      "Kochi, en la costa sur de Shikoku, es la tierra de Sakamoto Ryoma, una de las figuras más veneradas de la historia moderna japonesa.",
    content: `## Qué ver y hacer

### Castillo de Kochi

Uno de los pocos que conserva tanto el torreón como el palacio del señor feudal originales, domina el centro de la ciudad.

### Sakamoto Ryoma y playa de Katsurahama

Sakamoto Ryoma, samurái clave en el fin del shogunato y la Restauración Meiji, nació aquí y se le recuerda con estatuas y un museo interactivo junto a la costa, cerca de la playa de Katsurahama, un tramo de costa rocosa con vistas abiertas al Pacífico.

### Mercado dominical de Kochi

Con siglos de historia, es uno de los mercados callejeros más largos de Japón.

### Katsuo no tataki y puente Harimayabashi

El katsuo no tataki, bonito soasado a fuego vivo de paja y servido con salsa de yuzu, es la especialidad gastronómica de la ciudad. El puente Harimayabashi, de color rojo y con un reloj de autómatas, está ligado a una leyenda local de amor prohibido entre un monje y una joven.

## Cómo llegar

### Desde Okayama

Tren limited express directo (Nanpu), unas 2 horas y media.

[BANNER_JRPASS]

### En avión

Vuelo directo desde Tokio.

## Dónde alojarse

El centro, cerca del castillo y la estación, es la base más práctica para moverte por el resto de la prefectura.`,
    relatedCities: ["shimanto", "muroto"],
  },

  shimanto: {
    citySlug: "shimanto",
    prefectureSlug: "kochi",
    intro:
      "El río Shimanto está considerado el último gran río «sin represas» de Japón, y su cuenca conserva un paisaje rural excepcionalmente limpio.",
    content: `## Qué ver y hacer

### El río sin represas

El Shimanto, sin grandes presas en todo su curso, es célebre en Japón por la limpieza de sus aguas y sus 47 puentes bajos sin barandillas (chinkabashi), diseñados para quedar sumergidos sin sufrir daños durante las crecidas. La región nació en 2005 de la fusión de la ciudad de Nakamura y el pueblo de Nishitosa, y hoy dispone de un sistema de alquiler de bicicletas eléctricas con GPS y audioguía en varios idiomas.

### Canoa, bicicleta y pesca tradicional

La zona se recorre bien en canoa (con alquiler y monitor en varios puntos del río) o bicicleta, con pesca tradicional de anguila y ayu (trucha del río) todavía activa.

## Cómo llegar

### Desde Kochi

Tren JR hasta Nakamura, con enlace en autobús o coche de alquiler para explorar el río.

[BANNER_JRPASS]

## Dónde alojarse

Nakamura, el núcleo principal, tiene la mayor oferta de hoteles; para dormir junto al río, algunas casas rurales y campings ofrecen alojamiento más sencillo.`,
    relatedCities: ["kochi"],
  },

  muroto: {
    citySlug: "muroto",
    prefectureSlug: "kochi",
    intro:
      "Muroto, en la punta más oriental de la costa de Kochi, es un geoparque reconocido por la UNESCO por su formación geológica única.",
    content: `## Qué ver y hacer

### Formaciones geológicas del cabo

El cabo de Muroto expone capas de roca formadas por el movimiento de placas tectónicas a lo largo de millones de años, y da nombre a uno de los geoparques mundiales de la UNESCO en Japón, con senderos señalizados que explican la geología de cada punto.

### Faro y acantilados

El faro de Muroto y los acantilados cercanos, donde según la tradición el monje Kukai alcanzó la iluminación, completan un paisaje de costa salvaje poco transitada.

## Cómo llegar

### Desde Kochi o Nahari

Autobús desde cualquiera de las dos estaciones — el tramo en autobús no está cubierto por el JR Pass.

## Dónde alojarse

Se visita bien como excursión de un día desde Kochi; hay también algún hotel sencillo junto al cabo para quien prefiera quedarse a ver el amanecer sobre el Pacífico.`,
    relatedCities: ["kochi"],
  },

  kitakyushu: {
    citySlug: "kitakyushu",
    prefectureSlug: "fukuoka",
    intro:
      "Kitakyushu fue uno de los grandes motores industriales del Japón moderno, y hoy combina ese legado con parques y espacios reconvertidos junto al mar.",
    content: `## Qué ver y hacer

### Legado industrial

Kitakyushu creció a principios del siglo XX en torno a la siderurgia y sigue siendo una de las grandes ciudades industriales de Japón, aunque hoy apuesta por tecnologías medioambientales.

### Jardín de glicinas Kawachi Fujien

Con sus túneles de flores en flor a finales de abril, se ha vuelto muy popular en redes sociales; en temporada alta exige entrada con franja horaria reservada de antemano, sin venta en la propia puerta.

### Mojiko Retro y castillo de Kokura

Mojiko Retro, el antiguo barrio portuario, conserva edificios de estilo occidental de principios del siglo XX —como la estación de Mojiko, de madera desde 1891, y el edificio octogonal de Mitsui O.S.K. Lines, de 1917— y el castillo de Kokura —construido originalmente en 1602, quemado en 1837 y reconstruido en 1959— añade otra parada fácil en pleno centro, junto al santuario Yasaka que lo protege desde 1617. El puente levadizo Blue Wing Moji se eleva seis veces al día frente al puerto.

### Kokura y la bomba atómica

Kokura fue el objetivo alternativo de la bomba atómica el 6 de agosto de 1945 y el objetivo principal el 9 de agosto; la mala visibilidad sobre la ciudad esa mañana hizo que el bombardero cambiara de rumbo hacia Nagasaki. El Museo del Manga de Kitakyushu, impulsado por Leiji Matsumoto (creador de Galaxy Express 999 y Capitán Harlock), recuerda otra faceta de la ciudad, que nació en 1963 de la fusión de cinco municipios, entre ellos la propia Kokura.

## Cómo llegar

### Desde Fukuoka/Hakata

Shinkansen Kyushu directo, unos 15-20 minutos.

[BANNER_JRPASS]

### Desde Shimonoseki

Tren local cruzando el estrecho de Kanmon; está muy cerca, al otro lado del agua.

## Dónde alojarse

El centro, cerca de la estación de Kokura, es la base más práctica; Mojiko Retro se visita bien como excursión de medio día.`,
    relatedCities: ["fukuoka", "dazaifu"],
  },

  dazaifu: {
    citySlug: "dazaifu",
    prefectureSlug: "fukuoka",
    intro:
      "Dazaifu fue durante siglos la capital administrativa de Kyushu, y hoy alberga uno de los santuarios dedicados al aprendizaje más visitados de Japón.",
    content: `## Qué ver y hacer

### Santuario Dazaifu Tenmangu

Construido sobre la tumba de Sugawara no Michizane, fallecido en el exilio en el año 903 y deificado como dios del aprendizaje, es la cabeza de unos 12.000 santuarios Tenmangu repartidos por todo Japón y recibe cada año a estudiantes que van a rezar antes de sus exámenes. El salón principal actual, de estilo Momoyama, data de 1591, tras perderse el original en un incendio en el año 905. El recinto reúne más de 6.000 ciruelos de 167 variedades, con el ejemplar "tobiume" señalado por la tradición como el primero de Japón en florecer cada enero. La calle comercial de acceso, con unos 80 locales, es célebre por el umegae-mochi, un dulce de arroz relleno de pasta de judía roja.

### Museo Nacional de Kyushu

Conectado al santuario por un pasillo con cintas transportadoras que atraviesa la colina, se centra en el intercambio histórico entre Japón y el resto de Asia.

[LINK_KYUSHU_MUSEUM]

### Ruinas del gobierno regional

Recuerdan el papel histórico de la ciudad como sede administrativa de Kyushu durante siglos.

## Cómo llegar

### Desde Fukuoka

Tren Nishitetsu directo desde el centro, unos 30 minutos — esta línea privada no está cubierta por el JR Pass.

## Dónde alojarse

Se visita casi siempre como excursión de un día desde Fukuoka, con la que está muy bien conectada por tren.`,
    relatedCities: ["fukuoka"],
  },

  saga: {
    citySlug: "saga",
    prefectureSlug: "saga",
    intro:
      "Saga capital es una ciudad tranquila conocida sobre todo por su festival internacional de globos aerostáticos, uno de los mayores de Asia.",
    content: `## Qué ver y hacer

### Saga International Balloon Fiesta

Cada noviembre, reúne a decenas de globos aerostáticos de todo el mundo a orillas del río Kase, uno de los eventos de este tipo más grandes de Asia.

### Yacimiento de Yoshinogari

A las afueras, reconstruye un gran asentamiento fortificado del periodo Yayoi (hace más de 2.000 años), uno de los más importantes de Japón para entender esa época, recorrible a pie entre las réplicas de las torres de vigilancia.

### Base para Arita y Karatsu

Fuera de las fechas del festival, Saga es sobre todo una base tranquila para visitar Arita y Karatsu, los grandes centros cerámicos de la prefectura.

## Cómo llegar

### Desde Fukuoka/Hakata

Tren limited express directo, unos 40 minutos.

[BANNER_JRPASS]

## Dónde alojarse

El centro, cerca de la estación de Saga, es la base más práctica para el resto de la prefectura.`,
    relatedCities: ["arita", "karatsu"],
  },

  arita: {
    citySlug: "arita",
    prefectureSlug: "saga",
    intro:
      "Arita es la cuna de la porcelana japonesa, producida aquí desde principios del siglo XVII y exportada históricamente a toda Europa.",
    content: `## Qué ver y hacer

### Porcelana de Arita

La primera producida en Japón, nació aquí a comienzos del siglo XVII de la mano de alfareros coreanos instalados en la zona — según la tradición, fue Yi Sam-pyeong quien descubrió el caolín necesario en 1616. La Compañía Holandesa de las Indias Orientales la exportó masivamente a Europa entre mediados del siglo XVII y principios del XVIII, y sigue siendo una de las cerámicas más prestigiosas del país.

### Talleres y Festival de la Cerámica

Decenas de talleres y tiendas familiares, algunos con siglos de historia, permiten comprar directamente a los artesanos y ver el proceso en varios de ellos, y el Festival de la Cerámica de Arita, durante la Golden Week de primavera, reúne a unos 500 artesanos a lo largo de la calle principal y atrae a cientos de miles de visitantes. El distrito histórico de Uchiyama, con más de 160 edificios declarados zona de conservación en 1991, y el Museo de Cerámica de Arita, en un almacén de 1874 abierto como museo en 1954, completan la visita.

## Cómo llegar

### Desde Saga o Fukuoka/Hakata

Tren JR o limited express directo desde cualquiera de las dos ciudades.

[BANNER_JRPASS]

## Dónde alojarse

Se visita bien como excursión de un día desde Saga o Fukuoka; el propio pueblo tiene también algún ryokan sencillo para quien prefiera quedarse.`,
    relatedCities: ["saga", "karatsu"],
  },

  karatsu: {
    citySlug: "karatsu",
    prefectureSlug: "saga",
    intro:
      "Karatsu, en la costa norte de Kyushu, combina un estilo de cerámica propio con uno de los festivales de carrozas más espectaculares de la región.",
    content: `## Qué ver y hacer

### Karatsu Kunchi

En noviembre, saca a las calles catorce enormes carrozas (hikiyama) con forma de figuras como leones, dragones o cascos samurái, algunas de más de 200 años de antigüedad, expuestas el resto del año en un salón dedicado junto al santuario Karatsu.

### Cerámica Karatsu-yaki y castillo de Karatsu

La cerámica Karatsu-yaki, apreciada tradicionalmente en la ceremonia del té por su estética rústica, se sigue produciendo en la zona, y el castillo de Karatsu (Maizuru-jo) —construido entre 1602 y 1608 con materiales del cercano castillo de Nagoya, en Kyushu, y con el propio mar como foso natural— ofrece vistas sobre la bahía y el pinar de Niji no Matsubara, declarado en 1955 el primer pinar "lugar especial de belleza escénica" de Japón.

### Antiguo Banco de Karatsu

Hoy convertido en museo, está dedicado a Tatsuno Kingo, el arquitecto nacido en Karatsu que diseñó, entre otros edificios, la estación de Tokio.

## Cómo llegar

### Desde Fukuoka/Hakata

Tren JR directo, poco más de una hora.

[BANNER_JRPASS]

## Dónde alojarse

Se visita bien como excursión de un día desde Fukuoka; el centro, junto al castillo, es la zona más agradable si te quedas.`,
    relatedCities: ["saga", "arita"],
  },

  sasebo: {
    citySlug: "sasebo",
    prefectureSlug: "nagasaki",
    intro:
      "Sasebo es una ciudad naval con una bahía de islotes conocida como «las 99 islas», y base histórica de la marina japonesa y estadounidense.",
    content: `## Qué ver y hacer

### Parque de Kujukushima

("Las 99 islas") ofrece cruceros turísticos entre decenas de pequeños islotes cubiertos de vegetación, uno de los paisajes de costa más singulares de Kyushu.

### Legado naval y gastronomía

Sasebo ha sido base naval desde finales del siglo XIX y hoy comparte instalaciones con la marina estadounidense, lo que ha dejado huella en su gastronomía: unas treinta hamburgueserías especializadas hacen de la ciudad una de las cunas de la hamburguesa en Japón. La galería comercial cubierta de Yonkacho Shotengai, de un kilómetro y unos 160 locales, es el mejor sitio para probarla.

### Huis Ten Bosch

Un gran parque temático que recrea un pueblo holandés con canales y molinos de viento, es otro de los grandes reclamos de la ciudad, con espectáculos de luces nocturnos según la temporada.

[LINK_HUIS_TEN_BOSCH]

## Cómo llegar

### Desde Nagasaki o Fukuoka/Hakata

Tren JR limited express directo desde cualquiera de las dos ciudades.

[BANNER_JRPASS]

## Dónde alojarse

El centro, cerca del puerto, es la base más práctica para Kujukushima; Huis Ten Bosch tiene sus propios hoteles integrados en el recinto.`,
    relatedCities: ["nagasaki", "hirado"],
  },

  hirado: {
    citySlug: "hirado",
    prefectureSlug: "nagasaki",
    intro:
      "Hirado fue el primer puerto de Japón abierto al comercio con Europa en el siglo XVI, antes de que ese papel pasara a Nagasaki.",
    content: `## Qué ver y hacer

### Primer puerto abierto a Europa

Hirado recibió a comerciantes portugueses, españoles, holandeses e ingleses desde el siglo XVI, antes de que el shogunato concentrara el comercio exterior en Dejima (Nagasaki). El castillo de Hirado, iglesias católicas centenarias y templos budistas conviven en un paisaje de costa poco visitado por turistas extranjeros.

### Antigua factoría holandesa

Reconstruida junto al puerto, recrea el almacén original del siglo XVII con documentos y objetos de la época que se pueden ver de cerca en su interior.

## Cómo llegar

### Desde Sasebo

Autobús directo, cruzando el puente de Hirado — este tramo en autobús no está cubierto por el JR Pass.

## Dónde alojarse

El centro, junto al puerto y el castillo, es la base más práctica para recorrer la isla.`,
    relatedCities: ["sasebo", "nagasaki"],
  },

  kumamoto: {
    citySlug: "kumamoto",
    prefectureSlug: "kumamoto",
    intro:
      "Kumamoto tiene uno de los tres grandes castillos de Japón, muy dañado por el terremoto de 2016 y en pleno proceso de restauración.",
    content: `## Qué ver y hacer

### Castillo de Kumamoto

Considerado, junto a los de Osaka y Nagoya, uno de los tres grandes castillos de Japón por su tamaño y diseño defensivo. El terremoto de 2016 causó daños importantes en varias de sus estructuras; la torre principal reabrió al público en 2021, aunque parte del recinto sigue en restauración.

[LINK_KUMAMOTO_CASTLE]

### Jardín Suizenji

Recrea en miniatura el paisaje del Tokaido, la antigua ruta entre Kioto y Edo, recorrible a pie en un cómodo paseo circular.

### Kumamon

La ciudad es la cuna de esta mascota, un oso negro con mejillas sonrosadas convertido en uno de los personajes más populares de Japón, presente en tiendas y productos por todo el centro.

## Cómo llegar

### Desde Fukuoka/Hakata

Shinkansen Kyushu directo, unos 50 minutos.

[BANNER_JRPASS]

## Dónde alojarse

El centro, cerca del castillo y la estación de Kumamoto, es la base más práctica para el resto de la prefectura, incluido Aso.`,
    relatedCities: ["aso", "kurokawa"],
  },

  aso: {
    citySlug: "aso",
    prefectureSlug: "kumamoto",
    intro:
      "Aso alberga una de las mayores calderas volcánicas activas del mundo, con un cráter que todavía se puede visitar cuando la actividad lo permite.",
    content: `## Qué ver y hacer

### La caldera de Aso

De más de 100 km de circunferencia, es una de las mayores del mundo y alberga pueblos, campos de cultivo y pastos dentro de sus límites.

### Cráter Nakadake

Todavía activo, se puede acercar en coche o teleférico cuando los niveles de gas lo permiten — conviene comprobar el estado antes de ir, ya que el acceso se cierra con frecuencia por seguridad.

### Pradera de Kusasenri

Con dos pequeños lagos y caballos pastando en libertad, ofrece una vista más tranquila del volcán al fondo.

## Cómo llegar

### Desde Kumamoto

Tren JR hasta la estación de Aso, con enlace en autobús hacia el cráter.

[BANNER_JRPASS]

## Dónde alojarse

La zona tiene pocos hoteles propios; muchos visitantes se alojan en Kumamoto o en Kurokawa Onsen y visitan Aso como excursión de un día.`,
    relatedCities: ["kumamoto", "kurokawa"],
  },

  kurokawa: {
    citySlug: "kurokawa",
    prefectureSlug: "kumamoto",
    intro:
      "Kurokawa Onsen es, para muchos japoneses, el pueblo de aguas termales más bonito del país: un valle de ryokan tradicionales entre bosques.",
    content: `## Qué ver y hacer

### Estética unificada del pueblo

Kurokawa Onsen ha apostado desde hace décadas por mantener una estética unificada de ryokan tradicionales de madera junto a un río, sin apenas construcciones modernas visibles, lo que le ha valido premios de conservación paisajística en Japón.

### Pase nyuto tegata

Permite a los no huéspedes bañarse en varios de los baños al aire libre del pueblo sin necesidad de alojarse en ellos.

## Cómo llegar

### Desde Kumamoto

Autobús directo — el tramo en autobús no está cubierto por el JR Pass.

### Desde Yufuin/Beppu (Oita)

Autobús directo, la ruta habitual para combinar Kurokawa con los onsen de Oita.

[LINK_RAKUTEN_TRAVEL]

## Dónde alojarse

Dormir en uno de los ryokan del propio pueblo, con acceso incluido a varios baños al aire libre, es la experiencia central de Kurokawa — no hay apenas alojamiento fuera de este formato.`,
    relatedCities: ["aso", "beppu"],
  },

  "oita": {
    citySlug: "oita",
    prefectureSlug: "oita",
    intro:
      "Oita capital es sobre todo un nudo práctico de transporte, punto de partida hacia los onsen de Beppu y Yufuin.",
    content: `## Qué ver y hacer

### Nudo de transporte y budas de Usuki

Oita capital tiene pocos reclamos turísticos propios, pero es un buen punto de partida gracias a su puerto de ferris hacia Shikoku y Kansai, y su cercanía a Beppu. Los budas tallados en roca de Usuki, a las afueras, son uno de los mejores conjuntos de escultura budista al aire libre de Japón.

### Parque de monos de Takasakiyama

Entre Oita y Beppu, reúne a más de mil macacos salvajes en libertad, alimentados desde hace décadas por los guardas del parque, aunque conviene comprobar antes si las manadas están bajando ese día.

[LINK_TAKASAKIYAMA]

## Cómo llegar

### Desde Fukuoka/Hakata

Tren limited express directo, unas 2 horas.

[BANNER_JRPASS]

## Dónde alojarse

El centro es un buen punto de partida práctico; la mayoría de los visitantes prefiere pasar la noche en Beppu o Yufuin, a un trayecto corto.`,
    relatedCities: ["yufuin", "beppu"],
  },

  yufuin: {
    citySlug: "yufuin",
    prefectureSlug: "oita",
    intro:
      "Yufuin, a los pies del monte Yufu, es el onsen de moda de Kyushu: más boutique y menos masivo que su vecina Beppu.",
    content: `## Qué ver y hacer

### Imagen tranquila y artesanal

Yufuin ha cultivado una imagen más tranquila y artesanal que Beppu, con galerías de arte, cafeterías y ryokan de diseño repartidos por un valle a los pies del monte Yufu.

### Lago Kinrin y calle Yunotsubo

El lago Kinrin, con aguas templadas por fuentes termales submarinas que generan neblina en las mañanas frías, es el paseo obligado del pueblo, con un pequeño santuario y un pediluvio gratuito en la propia orilla — su nombre, según la leyenda, viene de un erudito confuciano que quedó fascinado por el brillo de las escamas de una carpa al atardecer. La calle comercial de Yunotsubo, que lleva hasta el lago, concentra la mayoría de las tiendas y cafeterías del centro. La estación de Yufuin, de 1925 y reconstruida en 1990 por el arquitecto Arata Isozaki —también autor del Palau Sant Jordi de Barcelona—, y el Museo de Vidrieras, el primero de Japón dedicado a vidrieras europeas del siglo XIX, son otras dos paradas propias del pueblo.

## Cómo llegar

### Desde Fukuoka/Hakata

Tren JR limited express (Yufuin no Mori), un tren panorámico muy popular que conviene reservar con antelación.

[BANNER_JRPASS]

### Desde Beppu

Autobús directo, la opción más rápida entre los dos onsen de Oita.

## Dónde alojarse

Los ryokan de diseño con onsen propio, muchos con solo un puñado de habitaciones, son la razón por la que Yufuin se ha vuelto tan popular; conviene reservar con antelación en temporada alta.`,
    relatedCities: ["beppu", "oita"],
  },

  miyazaki: {
    citySlug: "miyazaki",
    prefectureSlug: "miyazaki",
    intro:
      "Miyazaki, en la costa subtropical del sureste de Kyushu, combina playas de surf con santuarios ligados a los mitos fundacionales de Japón.",
    content: `## Qué ver y hacer

### Aoshima

Una isla unida a tierra por un istmo y rodeada de formaciones rocosas conocidas como "la tabla de lavar del diablo", está vinculada a los mitos sintoístas sobre el origen de la familia imperial.

### Parque Heiwadai

Con su gran torre de la paz construida en los años 40, ofrece otro mirador tranquilo sobre la ciudad, rodeado de réplicas de estatuas haniwa (figuras funerarias antiguas) que se pueden ver de cerca.

### Costa de surf

El clima subtropical de la costa ha hecho de Miyazaki un destino de surf poco habitual dentro de Japón.

### Miyazaki-gyu y gyoza

El wagyu local, con denominación "Miyazaki Beef" desde 1986, es de los más premiados de Japón. La ciudad también se disputa con Utsunomiya y Hamamatsu el título de "capital del gyoza" del país, con varios locales especializados por el centro.

## Cómo llegar

### Desde Kumamoto o Kagoshima

Tren limited express directo desde cualquiera de las dos ciudades.

[BANNER_JRPASS]

### En avión

Vuelo directo desde Tokio, la opción más rápida para esa distancia.

## Dónde alojarse

El centro, cerca de la estación de Miyazaki, es la base más práctica para moverse por la costa hacia Aoshima o Nichinan.`,
    relatedCities: ["nichinan", "takachiho"],
  },

  nichinan: {
    citySlug: "nichinan",
    prefectureSlug: "miyazaki",
    intro:
      "Nichinan, al sur de Miyazaki, reúne una costa espectacular con el santuario de Udo, construido dentro de una cueva junto al mar.",
    content: `## Qué ver y hacer

### Santuario Udo Jingu

Construido dentro de una cavidad natural en un acantilado sobre el océano, es uno de los santuarios con emplazamiento más singular de Japón, tradicionalmente asociado a la fertilidad.

### Cabo de Toi y caballos Misaki

Más al sur, el cabo de Toi es conocido por sus caballos Misaki, una raza autóctona que vive en semilibertad en la pradera del cabo desde hace siglos y se puede observar de cerca caminando por los senderos abiertos. La costa de Nichinan, con palmeras y formaciones rocosas, tiene un aire subtropical poco habitual en el resto del país.

## Cómo llegar

### Desde Miyazaki

Tren JR o autobús, unos 40-60 minutos.

## Dónde alojarse

Se visita bien como excursión de un día desde Miyazaki; hay también algún hotel con vistas al mar cerca del propio santuario.`,
    relatedCities: ["miyazaki"],
  },

  takachiho: {
    citySlug: "takachiho",
    prefectureSlug: "miyazaki",
    intro:
      "Takachiho, en las montañas del interior de Miyazaki, es uno de los lugares con más peso mitológico de Japón, cuna legendaria de la familia imperial.",
    content: `## Qué ver y hacer

### Desfiladero de Takachiho

Con paredes de basalto de hasta 80 metros que se pueden recorrer en barca de remos, es una de las postales más fotografiadas de Kyushu.

### Mitología y danza kagura

Según la mitología sintoísta, es aquí donde el dios Ninigi descendió a la tierra, antepasado legendario de la línea imperial japonesa; el santuario Amano Iwato y las representaciones nocturnas de danza kagura, gratuitas y abiertas cada noche del año en un pequeño santuario del pueblo, mantienen viva esa tradición.

## Cómo llegar

### Desde Kumamoto

Autobús directo — este tramo no está cubierto por el JR Pass.

### Desde Nobeoka

Tren JR hasta Nobeoka, con enlace en autobús hasta Takachiho.

[BANNER_JRPASS]

## Dónde alojarse

Se visita bien como excursión de un día desde Kumamoto o Miyazaki; el pueblo junto al desfiladero tiene también algún ryokan sencillo para quien prefiera quedarse.`,
    relatedCities: ["miyazaki"],
  },

  kagoshima: {
    citySlug: "kagoshima",
    prefectureSlug: "kagoshima",
    intro:
      "Kagoshima vive a la sombra (y bajo la ceniza) de Sakurajima, uno de los volcanes más activos de Japón, justo al otro lado de la bahía.",
    content: `## Qué ver y hacer

### Sakurajima

Un volcán activo que expulsa ceniza con regularidad (los locales barren la ceniza de sus calles como quien barre hojas), domina el perfil de la ciudad al otro lado de la bahía y se visita en un corto trayecto en ferry.

### Jardín Sengan-en

Antigua residencia de la familia Shimazu, usa la propia bahía y el volcán como parte de su diseño paisajístico, una técnica llamada "paisaje prestado"; el museo Shoko Shuseikan, junto al jardín, se puede visitar con la misma entrada.

[LINK_SENGANEN]

### Clima y gastronomía

Kagoshima tiene un clima suave que le ha valido el apodo de "la Nápoles de Oriente", y una gastronomía marcada por el cerdo kurobuta y el shochu de boniato.

### Calle techada Tenmonkan

La galería comercial de Tenmonkan es la zona más animada del centro, con tiendas y restaurantes bajo techo a un paseo de la estación y el puerto de ferris a Sakurajima.

## Cómo llegar

### Desde Fukuoka/Hakata

Shinkansen Kyushu directo, poco más de una hora.

[BANNER_JRPASS]

## Dónde alojarse

El centro, cerca de la estación y el puerto de ferris a Sakurajima, es la base más práctica para el resto de la prefectura.`,
    relatedCities: ["ibusuki", "yakushima"],
  },

  ibusuki: {
    citySlug: "ibusuki",
    prefectureSlug: "kagoshima",
    intro:
      "Ibusuki es célebre por sus baños de arena caliente natural en la playa, calentados por el vapor geotérmico que emana del subsuelo.",
    content: `## Qué ver y hacer

### Baños de arena (sunamushi)

Consisten en tumbarse en la playa mientras te cubren con arena caliente por el vapor geotérmico natural, calentada por aguas termales a unos 85°C bajo el subsuelo — una experiencia de onsen única en Japón por su forma. La instalación Suna Mushi Kaikan, a 20 minutos a pie de la estación, cobra alrededor de 1.100 yenes con yukata incluido, y lo habitual es aguantar entre 8 y 15 minutos enterrado.

### Península de Satsuma

Con el volcán Kaimondake ("el Fuji de Satsuma") como telón de fondo, completa un paisaje de costa subtropical que se puede recorrer en bicicleta desde el propio pueblo.

## Cómo llegar

### Desde Kagoshima

Tren JR limited express directo, unos 50 minutos.

[BANNER_JRPASS]

## Dónde alojarse

Varios hoteles y ryokan junto a la playa incluyen el baño de arena en sus instalaciones, sin necesidad de moverte para probarlo.`,
    relatedCities: ["kagoshima"],
  },

  yakushima: {
    citySlug: "yakushima",
    prefectureSlug: "kagoshima",
    intro:
      "Yakushima es una isla montañosa cubierta de bosques milenarios de cedro, Patrimonio de la Humanidad y una de las mayores inspiraciones del Studio Ghibli.",
    content: `## Qué ver y hacer

### Bosques de cedro yakusugi

Algunos con más de 1.000 años —el más antiguo, Jomon Sugi, podría superar los varios milenios según distintas estimaciones—, cubiertos de musgo y niebla, inspiraron directamente parte de la estética de la película "La Princesa Mononoke", en especial el desfiladero de Shiratani Unsuikyo, la ruta más citada como referencia directa de la película.

### Cómo recorrer la isla

Declarada Patrimonio de la Humanidad, recibe abundantes lluvias durante buena parte del año, así que conviene ir preparado para el agua; las rutas se pueden hacer por libre o con guía local, recomendable para las más largas hasta el Jomon Sugi.

## Cómo llegar

### Desde Kagoshima

Ferry rápido (el trayecto en barco no está cubierto por el JR Pass) o vuelo directo, ambos de aproximadamente entre 1 y 2 horas y media según la opción.

## Dónde alojarse

La isla tiene varios pueblos costeros con pensiones y hoteles sencillos; conviene reservar con antelación, ya que la oferta es limitada.`,
    relatedCities: ["kagoshima"],
  },

  ishigaki: {
    citySlug: "ishigaki",
    prefectureSlug: "okinawa",
    intro:
      "Ishigaki es la puerta a las islas Yaeyama, con algunas de las mejores playas y arrecifes de coral de todo Japón.",
    content: `## Qué ver y hacer

### Kabira Bay

Con sus aguas de color turquesa y perlas cultivadas en sus criaderos, es una de las postales clásicas de Ishigaki.

### Buceo y puerta a las Yaeyama

La isla es uno de los mejores puntos de buceo y snorkel de Japón, con arrecifes de coral bien conservados y salidas en barco desde el propio puerto —el Manta Scramble es uno de los puntos más conocidos para avistar mantarrayas—, y sirve de puerta de embarque hacia otras islas del archipiélago Yaeyama como Iriomote o Taketomi.

### Cabo Tamatorizaki

Este mirador panorámico, junto a los ríos Miyara y Fukido con sus manglares recorribles en kayak, completa la parte más natural de la isla — que además tiene su propia marca de wagyu premium, el Ishigaki-gyu.

## Cómo llegar

### Desde Tokio, Osaka o Naha

Vuelo directo desde cualquiera de estas ciudades — no hay conexión por tren ni ferry práctico, así que el avión es la única opción real, y no está cubierto por el JR Pass.

[LINK_SKYSCANNER_VUELOS]

## Dónde alojarse

El centro de Ishigaki concentra la mayor oferta de hoteles; para bucear o ir de playa a diario, los resorts junto a la costa norte están más cerca de Kabira Bay.`,
    relatedCities: ["naha", "miyakojima"],
  },

  miyakojima: {
    citySlug: "miyakojima",
    prefectureSlug: "okinawa",
    intro:
      "Miyakojima tiene, según encuestas turísticas repetidas, algunas de las playas de arena blanca y aguas más claras de todo Japón.",
    content: `## Qué ver y hacer

### Playa de Yonaha Maehama

De arena blanca fina y varios kilómetros de longitud, aparece habitualmente en los rankings de mejores playas de Japón.

### Puente Irabu

Uno de los más largos de Japón sin peaje, conecta la isla principal con la vecina Irabujima, con más playas y miradores sobre el mar, ideal para recorrer en coche de alquiler con paradas libres.

### Playa de Sunayama y cabo Higashi-Hennazaki

La playa de Sunayama es conocida por su arco de roca natural sobre la arena. En el extremo opuesto de la isla, el faro de Higashi-Hennazaki remata la península homónima con vistas abiertas al mar.

## Cómo llegar

### Desde Tokio, Osaka o Naha

Vuelo directo desde cualquiera de estas ciudades — no hay conexión por tren ni ferry práctico, así que el avión es la única opción real, y no está cubierto por el JR Pass.

[LINK_SKYSCANNER_VUELOS]

## Dónde alojarse

Los resorts junto a la playa de Yonaha Maehama son la opción más buscada; el centro de la ciudad, más económico, queda a un corto trayecto en coche.`,
    relatedCities: ["naha", "ishigaki"],
  },
};

export const CITY_GUIDE_SLUGS = Object.keys(CITY_GUIDES);
