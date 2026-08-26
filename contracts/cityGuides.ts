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

La estación de Shinjuku concentra las líneas JR Yamanote, Chuo y Sobu, además de las privadas Odakyu y Keio y varias líneas de metro (Marunouchi, Shinjuku, Toei Oedo). Desde Narita hay Narita Express directo; desde Haneda, autobús limusina o un cambio en Tokio.

[RECURSOS_VIAJE]

## Qué ver y hacer

El Shinjuku Gyoen es uno de los parques más cuidados de Tokio, con zonas de estilo japonés, francés e inglés. Golden Gai reúne más de 200 bares diminutos en un puñado de callejones; Omoide Yokocho ("callejón de los recuerdos") es la versión más gastronómica de esa misma atmósfera. El edificio del Gobierno Metropolitano tiene un mirador gratuito con vistas a toda la ciudad, y en días claros, al Fuji.

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

La estación de Shibuya conecta la línea JR Yamanote con las líneas Tokyu, y las de metro Ginza, Hanzomon y Fukutoshin. Está a un solo transbordo de Shinjuku y Harajuku.

## Qué ver y hacer

El cruce de Shibuya (Shibuya Scramble) es el más transitado del mundo; Shibuya Sky ofrece un mirador al aire libre para verlo desde arriba. La estatua de Hachiko, junto a la salida homónima, sigue siendo el punto de encuentro clásico. Center Gai concentra tiendas y restaurantes a pie de calle, y Miyashita Park combina zona verde con comercio sobre un antiguo aparcamiento.

[PRODUCT_GETYOURGUIDE]

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

Las líneas de metro Ginza y Asakusa, además de la línea Tobu Skytree, conectan Asakusa con el resto de Tokio en pocos minutos. Está a un paseo corto del Tokyo Skytree, cruzando el río Sumida.

## Qué ver y hacer

El templo Senso-ji, el más antiguo de Tokio, se accede a través de la calle comercial Nakamise, con más de 300 metros de puestos de artesanía y dulces tradicionales. El barrio conserva talleres de oficios antiguos, paseos en rickshaw y cruceros por el Sumida hacia Odaiba.

[RECURSOS_VIAJE]

Si te interesa el sumo, en Asakusa se puede asistir a una exhibición con degustación de chankonabe, el guiso tradicional de los luchadores:

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

El Shinkansen Tokaido conecta la estación de Kioto con Tokio en poco más de dos horas, y con Osaka en apenas 15 minutos. También hay líneas JR, Kintetsu y Hankyu para moverte por la región de Kansai.

[RECURSOS_VIAJE]

## Qué ver y hacer

Fushimi Inari Taisha, con sus miles de torii bermellón trepando por la montaña, es el santuario más fotografiado de Japón. Kinkaku-ji (el Pabellón Dorado), el bosque de bambú de Arashiyama y el castillo Nijo completan la lista de imprescindibles. El barrio de Gion conserva el ambiente de las geiko y maiko, pero algunas de sus callejuelas privadas han empezado a restringir el paso y las fotos a turistas — conviene fijarse en la señalización antes de entrar.

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

La estación de Shin-Osaka está en la línea Shinkansen Tokaido-Sanyo, a 15 minutos de Kioto y poco más de dos horas y media de Tokio. El aeropuerto de Kansai (KIX) conecta con el centro mediante el tren JR Haruka o la línea Nankai.

## Qué ver y hacer

Dotonbori, con sus carteles de neón y puestos de takoyaki y okonomiyaki, es la postal clásica de Osaka. El castillo de Osaka, el mercado Kuromon Ichiba y el mirador del Umeda Sky Building completan un buen recorrido de un par de días. Universal Studios Japan requiere entrada aparte y suele llevar un día completo — conviene comprar la entrada con antelación para no perder tiempo de parque en la cola de taquilla:

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

La mayoría de los viajeros llega en avión al aeropuerto de New Chitose, conectado con el centro de Sapporo por tren rápido JR (unos 40 minutos) o autobús. El Shinkansen de Hokkaido todavía no llega a Sapporo — de momento termina en Hakodate —, así que el avión sigue siendo la opción más práctica desde Tokio.

## Qué ver y hacer

El Festival de la Nieve de Sapporo (Yuki Matsuri), en febrero, llena el parque Odori de esculturas de hielo y nieve a gran escala. El resto del año, el propio parque Odori, el Museo de la Cerveza Sapporo y el mercado Nijo (marisco fresco) son las paradas obligadas en la ciudad. Otaru y Niseko funcionan bien como excursión de un día o una noche extra.

[RECURSOS_VIAJE]

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

El Shinkansen de Hokkaido llega hasta la estación de Shin-Hakodate-Hokuto, desde donde un tren local corto te deja en el centro de Hakodate. También tiene aeropuerto propio con vuelos nacionales directos.

## Qué ver y hacer

La vista nocturna desde el monte Hakodate, accesible en teleférico, está considerada una de las tres mejores de Japón. El barrio de Motomachi conserva edificios de estilo occidental de la época en que Hakodate fue uno de los primeros puertos abiertos al comercio exterior. El mercado matutino (Hakodate Asaichi) es parada obligada para marisco fresco, y el fuerte en forma de estrella de Goryokaku es un buen paseo, especialmente en la época de cerezos.

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

La estación de Hiroshima está en el Shinkansen Sanyo, a algo más de una hora y media de Osaka. La ciudad se mueve muy bien en tranvía, incluida la línea que llega hasta el embarcadero para Miyajima.

## Qué ver y hacer

El Parque Memorial de la Paz y su museo, junto a la Cúpula de la Bomba Atómica, son la visita central de la ciudad. A poca distancia en ferry está Miyajima, con el santuario de Itsukushima y su torii que parece flotar sobre el mar en marea alta. La prefectura de Hiroshima también incluye la isla de Okunoshima, conocida por su población de conejos salvajes.

[RECURSOS_VIAJE]

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

Nara es una excursión de un día muy sencilla desde Kioto (unos 45 minutos) u Osaka (unos 40 minutos) en tren JR o Kintetsu. La mayoría de los visitantes no se aloja en la ciudad.

## Qué ver y hacer

Los ciervos sika del parque de Nara se consideran mensajeros divinos y campan en libertad; hay puestos que venden "shika senbei" (galletas para ciervos) por si quieres darles de comer. Todai-ji alberga un Buda de bronce de más de 15 metros dentro de uno de los edificios de madera más grandes del mundo, y el santuario Kasuga Taisha destaca por sus senderos flanqueados de faroles de piedra.

[PRODUCT_GETYOURGUIDE]

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

El Shinkansen Hokuriku conecta Kanazawa con Tokio en unas dos horas y media. También es accesible desde Kioto u Osaka en tren de largo recorrido.

## Qué ver y hacer

Kenroku-en está considerado uno de los tres grandes jardines paisajísticos de Japón, con estanques, puentes y pinos cuidados durante generaciones. El barrio de Higashi Chaya conserva casas de té tradicionales de madera; el mercado Omicho es la mejor parada para marisco fresco de la costa del mar de Japón, y el Museo de Arte Contemporáneo del Siglo XXI complementa la parte más histórica de la ciudad.

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

Se llega en avión al aeropuerto de Nagasaki o en tren de largo recorrido (Shinkansen Kyushu por la ruta Nishi-Kyushu combinado con limited express) desde Fukuoka/Hakata.

## Qué ver y hacer

El Parque de la Paz y el Museo de la Bomba Atómica son la visita central, junto al Dejima reconstruido, el antiguo enclave comercial holandés que fue durante mucho tiempo la única ventana de Japón al exterior. El Glover Garden conserva mansiones de estilo occidental de la era del puerto internacional, y la vista nocturna desde el monte Inasa está entre las más citadas de Japón.

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

El aeropuerto de Fukuoka está inusualmente cerca del centro, a pocos minutos en metro. El Shinkansen Kyushu conecta hacia el sur con Kagoshima, y hacia el norte, vía la línea Sanyo, con Osaka y Tokio.

## Qué ver y hacer

Los "yatai", puestos de comida callejera al aire libre, se instalan cada noche en zonas como Nakasu y Tenjin y son la experiencia más característica de la ciudad. El parque Ohori, el santuario Dazaifu Tenmangu (a un corto trayecto en tren) y, por supuesto, un buen bol de ramen tonkotsu en Hakata completan la visita.

[RECURSOS_VIAJE]

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

El Romancecar de Odakyu conecta Shinjuku con Hakone-Yumoto en poco más de 80 minutos. El Hakone Freepass cubre los trenes locales, el funicular, el teleférico y el barco del lago Ashi con un único billete.

## Qué ver y hacer

Desde el lago Ashi, con buen tiempo, se ve el monte Fuji al fondo. El teleférico de Hakone sobrevuela el valle volcánico de Owakudani, con sus fumarolas de azufre. El Museo al Aire Libre de Hakone combina esculturas y naturaleza, y la zona reúne una de las mayores concentraciones de ryokan con onsen de todo Japón.

[LINK_RAKUTEN_TRAVEL]

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

La línea JR Yokosuka conecta el centro de Tokio con Kamakura en aproximadamente una hora. El pequeño tranvía Enoden une la estación de Kamakura con la costa y Enoshima.

## Qué ver y hacer

El Gran Buda de Kotoku-in, al aire libre desde el siglo XIII, es la imagen más conocida de la ciudad. Hase-dera añade jardines y vistas al mar, y el bosque de bambú de Hokoku-ji es una parada más tranquila. El paseo en Enoden hacia Enoshima, con el mar como fondo casi todo el trayecto, es parte de la experiencia.

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

Los trenes de Tobu Railway, incluidos los de largo recorrido, conectan la estación de Asakusa (Tokio) con Nikko en aproximadamente dos horas. También se puede llegar por JR vía Utsunomiya.

## Qué ver y hacer

El santuario Toshogu, mausoleo del shogun Tokugawa Ieyasu y Patrimonio de la Humanidad, es famoso por su decoración recargada y por sus tallas de los "tres monos sabios" (no ver, no oír, no hablar el mal). Más arriba en la montaña, el lago Chuzenji y la cascada de Kegon ofrecen un paisaje muy distinto, especialmente espectacular en la temporada de otoño a lo largo de la carretera de montaña Irohazaka.

[LINK_RAKUTEN_TRAVEL]

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

Se llega en avión al aeropuerto de Oita (con traslado en autobús) o en tren limited express desde Fukuoka/Hakata, un trayecto de unas dos horas.

## Qué ver y hacer

Los "jigoku" (infiernos) son un recorrido de estanques termales de colores intensos que se visitan más que se bañan en ellos. Beppu tiene además una enorme variedad de onsen tradicionales, incluidos los baños de arena caliente, donde te entierran hasta el cuello en arena volcánica templada. El teleférico de Beppu sube al monte Tsurumi para vistas panorámicas de la bahía.

[LINK_RAKUTEN_TRAVEL]

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

El aeropuerto de Naha tiene vuelos directos desde las principales ciudades japonesas. Okinawa no está conectada por tren con el resto del país, así que el avión es la única forma práctica de llegar, y no está cubierta por la mayoría de los pases de tren tipo JR Pass.

[LINK_SKYSCANNER_VUELOS]

## Qué ver y hacer

El castillo de Shuri, reconstruido tras un incendio en 2019, refleja la arquitectura propia del antiguo Reino de Ryukyu, muy distinta a la de un castillo japonés tradicional. La calle Kokusai-dori concentra tiendas y restaurantes; la cocina okinawense (goya champuru, soba de Okinawa) también se nota diferente a la del resto del país. Desde Naha se organizan además excursiones en ferry a playas e islas cercanas.

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

Los aeropuertos de Narita y Haneda son las dos puertas de entrada. Desde Narita, el Narita Express o el Skyliner llegan al centro en un máximo de una hora; Haneda está más cerca, conectado por monorraíl o la línea Keikyu.

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

El Canal de Otaru, flanqueado por antiguos almacenes de piedra reconvertidos en tiendas y restaurantes, es la postal más conocida de la ciudad, especialmente de noche con las farolas de gas encendidas. Otaru fue un puerto e importante centro financiero a principios del siglo XX, y de esa época quedan varios edificios de estilo occidental. La ciudad es también conocida por sus talleres de vidrio soplado y por su marisco, sobre todo el erizo de mar; el Museo de Cajas de Música, en un antiguo almacén, reúne cientos de piezas mecánicas de distintas épocas y organiza talleres para montar la tuya propia como recuerdo.

[LINK_OTARU_MUSICBOX]

## Cómo llegar

Tren rápido JR desde Sapporo, unos 30-40 minutos.

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

El Nebuta Matsuri, celebrado a principios de agosto, llena las calles de gigantescas estructuras de papel iluminadas con guerreros y figuras mitológicas — uno de los grandes festivales de verano de Japón. El museo Nebuta Warasse exhibe estas figuras fuera de temporada, y hay talleres donde se puede probar a tocar los tambores taiko del festival. A las afueras, el yacimiento de Sannai-Maruyama conserva los restos de un gran asentamiento del periodo Jomon (hace más de 5.000 años), declarado Patrimonio de la Humanidad en 2021. Aomori es también una de las principales regiones productoras de manzana de Japón.

## Cómo llegar

Shinkansen Tohoku hasta Shin-Aomori (unas 3 horas desde Tokio); también tiene aeropuerto propio.

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

El castillo de Hirosaki, rodeado por un parque con más de 2.500 cerezos, es uno de los mejores lugares de Japón para el hanami en primavera, con barcas de remo disponibles en el foso durante la floración. La ciudad conserva también un barrio de casas de estilo occidental de la era Meiji y Taisho, el jardín Fujita Kinenteien con vistas al castillo, y es una de las zonas productoras de manzana más importantes del país. En agosto, el Neputa Matsuri de Hirosaki —distinto del Nebuta de Aomori, con carrozas en forma de abanico— llena las calles de música y faroles.

## Cómo llegar

Tren local o limited express desde Aomori o Shin-Aomori, unos 30-40 minutos.

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

El mercado Hachinohe Asaichi, uno de los más grandes de Japón, reúne cientos de puestos los fines de semana con marisco, verdura y comida callejera lista para comer en el propio mercado, empezando muy temprano. La ciudad vive en gran medida de la pesca, y su santuario Kushihiki Hachimangu es uno de los más importantes de la región. La costa de Tanesashi, con praderas que llegan hasta los acantilados sobre el Pacífico, es un tramo poco conocido pero muy fotogénico de la ruta costera de Sanriku.

## Cómo llegar

Shinkansen Tohoku hasta la estación de Hachinohe.

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

Morioka es famosa gastronómicamente por el wanko soba (un ritual de comer fideos en pequeños boles que se van rellenando sin parar, con récords locales de cientos de boles) y por el reimen, fideos fríos de estilo coreano-japonés. El castillo Morioka, hoy en ruinas convertidas en parque, y el río Kitakami que atraviesa la ciudad completan un paseo tranquilo por el centro. A las afueras, la granja histórica de Koiwai, fundada en el siglo XIX, ofrece praderas abiertas con el monte Iwate como telón de fondo.

## Cómo llegar

Shinkansen Tohoku, poco más de 2 horas desde Tokio.

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

El templo Chuson-ji, con su Salón Dorado (Konjikido) recubierto de pan de oro, es el gran testimonio de aquel esplendor y se recorre caminando por una senda de cedros centenarios. Motsu-ji conserva uno de los jardines de estilo "Paraíso Puro" mejor preservados de Japón, con un estanque que se puede rodear a pie en un cómodo paseo circular. El conjunto arqueológico de Hiraizumi fue declarado Patrimonio de la Humanidad por la UNESCO en 2011. Takkoku no Iwaya, un pequeño templo excavado en un acantilado a las afueras, añade una parada adicional para quien tenga medio día más.

## Cómo llegar

Tren local desde Morioka o desde Ichinoseki, que tiene parada de Shinkansen.

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

Tono se hizo famoso por la recopilación de leyendas locales sobre kappa (criaturas acuáticas del folclore) y otros espíritus, publicada a principios del siglo XX. El valle conserva casas de labranza tradicionales de estilo "magariya" (con el establo integrado en forma de L) y un paisaje rural que apenas ha cambiado. El Museo al Aire Libre Tono Furusato Mura reúne varias de estas granjas trasladadas de otros puntos del valle, con demostraciones de artesanía tradicional y talleres para probar oficios como tejer o moler arroz a mano.

## Cómo llegar

Línea JR Kamaishi desde Hanamaki (con parada de Shinkansen) o desde Morioka.

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

Las ruinas del castillo de Sendai, fundado por el señor feudal Date Masamune, ofrecen vistas sobre la ciudad y tienen un pequeño museo con armadura samurái original. El Tanabata Matsuri de Sendai, en agosto, es uno de los festivales de esta celebración más grandes de Japón, con calles cubiertas de adornos de papel. El mausoleo de Zuihoden, muy cerca del castillo, conserva la tumba del propio Date Masamune con una decoración mucho más recargada de lo habitual en un mausoleo japonés. La ciudad es también conocida por su lengua de vaca (gyutan) a la parrilla.

## Cómo llegar

Shinkansen Tohoku, aproximadamente 1 hora y media desde Tokio.

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

Cientos de islotes cubiertos de pinos salpican la bahía; se puede recorrer en crucero turístico de unos 50 minutos o contemplar desde varios miradores en tierra, como el de Otakamori. El templo Zuigan-ji, excavado parcialmente en la roca, es uno de los templos zen más importantes de la región. Muy cerca, el pequeño templo de Godaido se levanta sobre unos islotes unidos a tierra por puentes de madera, y la casa de té Kanrantei, del periodo Momoyama, ofrece otra perspectiva clásica de la bahía.

## Cómo llegar

Tren local JR Senseki desde Sendai, unos 40 minutos.

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

El Museo Manga Ishinomori, dedicado al creador de Kamen Rider y Cyborg 009, se ha convertido en símbolo de la reconstrucción de la ciudad tras el terremoto y tsunami de 2011. Ishinomaki sigue siendo uno de los puertos pesqueros más importantes de la región, con buen marisco fresco. Frente a la costa, la isla sagrada de Kinkasan alberga un santuario centenario y una población de ciervos y monos salvajes; se llega en un corto trayecto en ferry y se puede recorrer a pie en un día completo de senderismo.

## Cómo llegar

Tren local JR Senseki desde Sendai, poco más de una hora.

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

El Kanto Matsuri, en agosto, es de los festivales más vistosos de Tohoku: los participantes sostienen en equilibrio varas de varios metros cargadas con decenas de faroles encendidos, y fuera de temporada se puede probar la técnica en sesiones de práctica abiertas al público. Akita es también una de las principales regiones productoras de arroz y sake de Japón, y el parque Senshu ocupa el terreno del antiguo castillo de la ciudad. La raza de perro Akita Inu, símbolo de fidelidad en todo Japón, es originaria de esta prefectura, y un pequeño museo junto a la estación recoge su historia.

## Cómo llegar

Shinkansen Akita, unas 4 horas desde Tokio vía Morioka.

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

El antiguo barrio samurái mantiene varias residencias históricas abiertas al público, algunas con sus jardines originales; la casa Aoyagi, la más grande y mejor conservada, funciona como museo con objetos originales de la familia y una colección de espadas y armadura samurái. En primavera, los cerezos llorones plantados hace generaciones convierten las calles en uno de los rincones de hanami más fotografiados de Tohoku.

## Cómo llegar

Shinkansen Akita hasta la estación de Kakunodate.

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

Cada febrero, la ciudad se llena de "kamakura" — pequeños iglús de nieve con un altar dentro, iluminados con velas, en los que los niños del pueblo reciben a los visitantes con arroz dulce y bebidas calientes; algunos incluso se pueden reservar para cenar dentro por la noche. El resto del año, Yokote es una tranquila ciudad agrícola típica del interior de Akita, conocida también dentro del país por su yakisoba local, más suave y menos especiado que el de otras regiones.

## Cómo llegar

Tren local JR Ou desde Akita, poco más de una hora.

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

Yamadera ("el templo de la montaña"), formalmente Risshaku-ji, se alcanza tras subir más de mil escalones tallados en la roca hasta un pequeño santuario con vistas al valle — una de las excursiones de un día más recomendables de Tohoku. La ciudad de Yamagata es también un buen punto de partida para el onsen y el esquí en las montañas Zao, donde en invierno los árboles cubiertos de hielo forman los conocidos "monstruos de nieve" (juhyo), visibles incluso sin esquiar subiendo en telesilla.

[LINK_ZAO_ONSEN]

## Cómo llegar

Shinkansen Yamagata, unas 2 horas y media desde Tokio.

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

La ciudad da nombre a una de las tres grandes marcas de wagyu de Japón (junto a Kobe y Matsusaka), criada en la región desde el siglo XIX y servida en yakiniku y sukiyaki en restaurantes especializados del centro. Yonezawa fue también el feudo del clan Uesugi, cuyo santuario (Uesugi Jinja) conserva objetos de la época samurái y honra la memoria de Uesugi Kenshin y Uesugi Yozan, dos de los señores feudales más respetados del Japón medieval.

## Cómo llegar

Shinkansen Yamagata hasta la estación de Yonezawa.

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

Las Tres Montañas de Dewa (Haguro, Gassan y Yudono) son desde hace siglos uno de los principales destinos de peregrinación de Japón, asociadas a los monjes ascetas yamabushi. El monte Haguro, el más accesible, se sube por una escalinata de piedra flanqueada por cedros centenarios, con una pagoda de cinco pisos a mitad de camino. El Acuario Kamo, con la mayor colección de medusas del mundo, es otra parada muy recomendable, y la llanura de Shonai que rodea la ciudad es una de las regiones arroceras más prestigiosas de Japón.

[LINK_KAMO_AQUARIUM]

## Cómo llegar

Tren limited express desde Niigata o Yamagata, o vuelo directo desde Tokio al aeropuerto de Shonai.

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

La ciudad de Fukushima es una de las grandes productoras de fruta de Japón, especialmente melocotón y manzana, con huertos abiertos a la recolección en temporada donde se puede comer la fruta recién cogida. El onsen de Iizaka, en las afueras, es uno de los más antiguos de la región. El parque Hanamiyama, una antigua finca de cultivo de flores reconvertida en mirador, se llena de cerezos, melocotoneros y azaleas en flor a la vez durante unas pocas semanas de primavera.

## Cómo llegar

Shinkansen Tohoku, poco más de 1 hora y media desde Tokio.

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

El castillo de Tsuruga, reconstruido con su característico tejado de tejas rojas, es el centro de la ciudad y recuerda la defensa del clan Aizu durante la Guerra Boshin de 1868; su interior es un museo que se recorre piso a piso hasta un mirador en la torre. En la cercana colina de Iimoriyama se conserva la tumba de los Byakkotai, un grupo de jóvenes samurái adolescentes que, al ver arder erróneamente lo que creyeron el castillo, se quitaron la vida siguiendo el código del honor samurái — una de las historias más recordadas de la guerra. El barrio de Ouchijuku, cerca de la ciudad, conserva una antigua ruta de postas con casas de techo de paja.

## Cómo llegar

Tren limited express desde Koriyama, que tiene parada de Shinkansen.

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

Spa Resort Hawaiians combina aguas termales con un parque temático de ambiente hawaiano que existe desde los años 60 y que llegó a inspirar una película japonesa, con espectáculos de hula varias veces al día. La costa de Iwaki, más al sur que la zona directamente afectada por el accidente nuclear de 2011, ha recuperado su actividad pesquera y turística, y Aquamarine Fukushima, un acuario centrado en la fauna marina de la corriente de Oyashio, es otra parada habitual junto al puerto.

[LINK_HAWAIIANS_IWAKI]

## Cómo llegar

Tren limited express Joban desde Tokio (Ueno), unas 2 horas y cuarto.

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

Kairaku-en, célebre por sus más de 3.000 ciruelos en flor a finales de invierno, está considerado uno de los tres grandes jardines de Japón, junto a Kenroku-en (Kanazawa) y Koraku-en (Okayama); dentro del jardín, el pabellón Kobuntei se puede subir piso a piso para ver vistas elevadas sobre los ciruelos y el lago Senba. El castillo de Mito, del que hoy queda sobre todo el recinto y algunas puertas reconstruidas, fue sede de una de las ramas más influyentes del clan Tokugawa.

## Cómo llegar

Tren limited express Joban desde Tokio (Ueno), poco más de una hora.

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

Tsukuba alberga la mayor concentración de institutos de investigación de Japón, incluida la agencia espacial JAXA, con un centro de visitantes (Space Dome) donde se puede ver de cerca un módulo real de la Estación Espacial Internacional; también se puede reservar una visita guiada por las instalaciones. El monte Tsukuba, con dos picos accesibles en teleférico o telesilla, ofrece vistas hasta Tokio en días despejados y es uno de los pocos "montes sagrados" de baja altitud con fácil acceso desde la capital.

[LINK_JAXA_TSUKUBA]

## Cómo llegar

Línea Tsukuba Express directa desde Akihabara (Tokio), unos 45 minutos.

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

El Hitachi Seaside Park es conocido internacionalmente por sus colinas que se tiñen de azul intenso con flores nemophila en primavera y de rojo con kochia en otoño; el parque también alquila bicicletas para recorrer sus más de 3,5 km² sin cansarse. La ciudad, cuna de la empresa Hitachi, conserva también un paseo elevado junto a la costa del Pacífico y el parque Kamine, con un pequeño zoo y buenas vistas sobre el puerto.

## Cómo llegar

Tren limited express Joban desde Tokio (Ueno), poco menos de dos horas.

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

La ciudad compite tradicionalmente con Hamamatsu por el título no oficial de "capital del gyoza" de Japón, con una concentración de restaurantes especializados poco habitual — hay incluso una estatua dedicada al gyoza junto a la estación. A las afueras, el Museo de la Piedra de Oya ocupa una antigua cantera subterránea excavada a mano, con salas de piedra que llegan a los 30 metros de profundidad y una temperatura fresca todo el año, muy usada como set de rodaje. Utsunomiya es también el principal nudo de tren para seguir hacia Nikko.

## Cómo llegar

Shinkansen Tohoku, unos 50 minutos desde Tokio.

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

El altiplano de Nasu combina onsen, granjas lecheras abiertas al público —donde se puede ordeñar una vaca o probar helados y quesos artesanales locales— y senderismo en las faldas del monte Nasu, un volcán todavía activo con fumarolas visibles. La familia imperial japonesa mantiene una villa de verano en la zona desde hace más de un siglo, símbolo del prestigio de sus aguas termales.

## Cómo llegar

Shinkansen Tohoku hasta Nasushiobara, con enlace en autobús.

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

Maebashi fue un centro clave de la industria de la seda japonesa en los siglos XIX y XX, y aún conserva almacenes y edificios de esa época junto al río Tone, algunos reconvertidos hoy en cafeterías y pequeñas tiendas. La ciudad es sobre todo un buen punto de partida hacia los onsen de Kusatsu e Ikaho y las montañas del norte de Gunma, y el cercano Parque de las Flores de Gunma ofrece jardines temáticos por estación durante todo el año.

## Cómo llegar

Shinkansen Joetsu hasta Takasaki, con enlace en tren local.

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

El Byakue Daikannon, una estatua blanca de Kannon de más de 40 metros con mirador en su interior, domina el perfil de la ciudad. Takasaki es también conocida por el daruma, las muñecas redondas de la buena suerte, con talleres artesanales donde se puede pintar la propia; el templo Shorinzan Darumaji, en las afueras, es el lugar de origen de esta tradición y organiza un mercado de daruma cada enero.

## Cómo llegar

Shinkansen Joetsu/Hokuriku, poco más de una hora desde Tokio.

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

El "yubatake" ("campo de agua caliente"), una fuente termal humeante en pleno centro del pueblo, es la imagen de postal de Kusatsu. El pueblo mantiene la tradición del "yumomi", remover el agua con grandes tablas de madera para enfriarla, que se representa como espectáculo para los visitantes varias veces al día — y en algunas sesiones se puede participar. La zona reúne decenas de ryokan con onsen propio.

## Cómo llegar

Autobús directo desde la estación de Karuizawa o desde Naganohara-Kusatsuguchi (tren desde Takasaki).

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

El Saitama Super Arena acoge desde partidos de baloncesto y voleibol hasta grandes conciertos, con capacidad para más de 30.000 personas en su configuración máxima. El santuario Hikawa, uno de los más antiguos de la región de Kanto, y el Museo del Ferrocarril, con locomotoras históricas expuestas y simuladores de conducción, completan la oferta de la ciudad. El barrio de Omiya Bonsai, con varios viveros centenarios abiertos a la visita, es uno de los centros de referencia mundial del cultivo de bonsái.

## Cómo llegar

Varias líneas JR y Saikyo conectan Saitama con el centro de Tokio en 30-40 minutos.

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

La calle Kurazukuri, con sus almacenes de paredes gruesas y tejados curvos que sobrevivieron a los incendios del periodo Edo, da a Kawagoe su apodo de "pequeña Edo". La torre del reloj Toki no Kane, reconstruida varias veces desde el siglo XVII, sigue marcando las horas en el centro histórico. Muy cerca, el callejón de Kashiya Yokocho ("callejón de las dulcerías") conserva un puñado de tiendas de golosinas tradicionales al estilo de principios del siglo XX, donde se puede ver cómo se hacen a mano y comprarlas recién hechas.

## Cómo llegar

Tren directo desde Ikebukuro o Shinjuku (Tokio), unos 30-50 minutos según la línea.

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

El Chichibu Yomatsuri, en diciembre, es uno de los tres grandes festivales de carrozas de Japón, con estructuras de varias toneladas tiradas por las calles y fuegos artificiales nocturnos poco habituales en pleno invierno. La zona es también apreciada por senderismo suave y por sus campos de shibazakura en primavera, y el santuario Chichibu, sede del festival, se puede visitar cualquier época del año. El monte Buko, con su teleférico propio, es otra excursión habitual de medio día para quien quiera vistas sobre todo el valle.

## Cómo llegar

Línea Seibu Ikebukuro directa desde Tokio, poco más de una hora y media.

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

El recinto ferial Makuhari Messe acoge algunas de las mayores convenciones y ferias comerciales de Japón, desde tecnología hasta cómics, y merece la pena revisar la agenda antes de ir por si coincide algún evento abierto al público. La ciudad tiene también un tramo de costa en la bahía de Tokio, con el parque portuario de Chiba como zona de paseo y una torre mirador junto al puerto, y buena conexión con los parques temáticos de la zona.

## Cómo llegar

Tren JR o Keisei desde el centro de Tokio, unos 30-40 minutos.

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

El templo Naritasan Shinsho-ji, fundado en el siglo X, recibe a millones de visitantes al año y está flanqueado por una calle comercial tradicional (Omotesando) con puestos de anguila a la parrilla, especialidad local que se puede ver preparar en directo en varias tiendas. Detrás del templo, el parque Naritasan añade un jardín japonés y un estanque tranquilo, poco transitado por la mayoría de los visitantes que solo pasan por el templo. Es una parada fácil para quien tiene horas libres entre vuelos.

## Cómo llegar

A unos 10 minutos en tren o autobús desde el Aeropuerto Internacional de Narita.

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

Tokyo Disneyland y Tokyo DisneySea, este último único en el mundo por su temática marítima, son la razón por la que casi todo el mundo visita Urayasu. Los hoteles del resort y una red de monorraíl interna conectan los dos parques y las zonas de ocio cercanas. Con dos parques tan grandes, conviene planificar con antelación qué día visitar cada uno en vez de intentar combinarlos en una sola jornada, y comprar la entrada online con antelación porque se agotan con frecuencia.

[LINK_TOKYO_DISNEY]

## Cómo llegar

Línea JR Keiyo directa desde el centro de Tokio, unos 15-20 minutos hasta la estación de Maihama.

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

El Chinatown de Yokohama (Yokohama Chukagai) es el más grande de Japón, con cientos de restaurantes y tiendas donde comer de pie mientras paseas. La zona de Minato Mirai, con su noria y sus rascacielos junto a la bahía, contrasta con el barrio histórico de Yamate, de casas occidentales de la era del puerto internacional que se visitan a pie en una ruta tranquila con vistas al mar. El Museo Ramen Shin-Yokohama recrea una calle de los años 50 dedicada por completo a este plato.

## Cómo llegar

Tren directo desde el centro de Tokio (JR o Tokyu), unos 30 minutos.

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

Niigata es sinónimo de arroz de calidad (aquí se cultiva la variedad Koshihikari) y de sake: la prefectura reúne más fabricantes de sake que ninguna otra de Japón, con una sala de cata en la propia estación donde probar decenas de variedades por unas pocas monedas. El barrio de Furumachi conserva parte del ambiente de las antiguas casas de geisha del puerto. El puerto de Niigata conecta además en ferry con la isla de Sado.

## Cómo llegar

Shinkansen Joetsu, unas 2 horas desde Tokio.

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

Sado fue durante siglos lugar de destierro (incluido el del emperador Juntoku y el monje budista Nichiren) y, más tarde, un importante centro minero de oro: las minas de Sado, en explotación desde el siglo XVII hasta 1989, se pueden recorrer en parte y fueron declaradas Patrimonio de la Humanidad en 2024. Hoy la isla es también conocida por sus tambores taiko — el grupo Kodo, de fama internacional, tiene aquí su base — y por conservar el ibis crestado japonés (toki), reintroducido tras haberse extinguido en estado salvaje.

[LINK_SADO_KINZAN]

## Cómo llegar

Ferry desde el puerto de Niigata, entre 1 y 2 horas y media según el tipo de barco.

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

Rodeada de estaciones de esquí que se llenan en invierno —GALA Yuzawa tiene su propio acceso directo desde el andén del Shinkansen, sin necesidad de autobús—, Echigo-Yuzawa es también un pueblo de onsen tradicional, escenario de la novela «País de nieve» (Kawabata, primer premio Nobel japonés de literatura). Varios baños termales públicos están a un paseo de la propia estación de Shinkansen.

[LINK_GALA_YUZAWA]

## Cómo llegar

Shinkansen Joetsu, unos 75 minutos desde Tokio.

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

La ciudad de Toyama es sobre todo el punto de partida hacia la Ruta Alpina Tateyama-Kurobe, famosa por el "corredor de nieve" de primavera, con paredes de nieve de hasta 20 metros a ambos lados de la carretera; se cruza en un relevo de teleférico, funicular y trolebús que conviene reservar con antelación en temporada alta. La bahía de Toyama es célebre por su camarón de aguas profundas (shiroebi) y por las vistas a la cordillera nevada de los Alpes japoneses. El Museo de Cristal de Toyama, diseñado por el arquitecto Kengo Kuma, es otra parada habitual en el centro.

[LINK_TATEYAMA_ALPINE]

## Cómo llegar

Shinkansen Hokuriku, unas 2 horas y 10 minutos desde Tokio.

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

El Gran Buda de Takaoka, de bronce, es considerado por muchos japoneses uno de los tres grandes budas del país, junto a los de Nara y Kamakura. La ciudad lleva siglos siendo un centro de fundición artesanal de cobre y bronce, con talleres que todavía producen utensilios y objetos decorativos de forma tradicional y algunos abren sus puertas para ver el proceso o probar un taller breve. El templo Zuiryuji, Tesoro Nacional, conserva uno de los conjuntos de arquitectura zen del periodo Edo mejor preservados de la región.

## Cómo llegar

Tren limited express o local desde Toyama, unos 20 minutos.

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

Los tejados gassho-zukuri, con una inclinación pronunciada en forma de manos juntas en oración, permitían soportar las fuertes nevadas de la región y aprovechar el espacio bajo el tejado para la cría de gusanos de seda. El pueblo de Ainokura, el núcleo más grande de Gokayama, conserva unas veinte de estas casas en un valle mucho más tranquilo que Shirakawa-go, con un mirador a las afueras del pueblo para ver el conjunto desde arriba. Junto con esta última, en la vecina Gifu, Gokayama forma parte del mismo conjunto declarado Patrimonio de la Humanidad por la UNESCO.

## Cómo llegar

Autobús desde la estación de Shin-Takaoka o Johana.

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

La laca de Wajima (Wajima-nuri) está considerada una de las mejores de Japón, con un proceso artesanal de decenas de capas que puede llevar meses; varios talleres se pueden visitar para ver el proceso de cerca. El mercado matutino de Wajima, con siglos de historia, reúne puestos de marisco, verdura y artesanía local. Cerca de la ciudad, las terrazas de arroz de Shiroyone Senmaida bajan en más de mil parcelas escalonadas hasta el mismo mar. La península de Noto, muy afectada por el terremoto de 2024, sigue en proceso de reconstrucción en algunas zonas, así que conviene comprobar el estado de los accesos antes de ir.

## Cómo llegar

Autobús limited express desde Kanazawa, unas 2 horas.

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

La zona de Kaga Onsen reúne varios núcleos termales (Yamashiro, Yamanaka, Katayamazu, Awazu) con siglos de tradición, algunos frecuentados históricamente por artistas y escritores. El casco antiguo de Yamashiro Onsen conserva una casa de baños pública restaurada al estilo de la era Meiji, abierta a un baño rápido de paso. La región es también cuna de la porcelana Kutani, reconocible por sus esmaltes de colores intensos, con talleres y galerías abiertos a la visita, algunos con clases de pintado para principiantes.

## Cómo llegar

Shinkansen Hokuriku hasta la estación de Kaga Onsen, unos 20 minutos desde Kanazawa.

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

El Museo de Dinosaurios de la Prefectura de Fukui, en Katsuyama (a las afueras de la ciudad), es uno de los tres mayores museos de paleontología del mundo, construido junto a uno de los yacimientos de fósiles más ricos de Japón, con una zona de excavación real visitable en temporada. La propia ciudad de Fukui tiene, además, esculturas de dinosaurios repartidas por el centro, incluida la estación. A poca distancia, el templo Eiheiji, fundado en el siglo XIII, es uno de los dos grandes monasterios centrales de la escuela zen Soto y sigue en activo, con monjes en formación.

[LINK_FUKUI_DINOSAUR]

## Cómo llegar

Shinkansen Hokuriku hasta la estación de Fukui.

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

Conocida como la "ciudad de los templos", Obama conserva más de una decena de templos budistas de gran valor histórico, herencia de su papel como puerto de entrada de cultura e influencias del continente asiático hace siglos; varios se pueden recorrer en una misma ruta a pie por el casco histórico. El templo Myotsuji, con su pagoda de tres pisos declarada Tesoro Nacional, es uno de los más destacados. La ciudad se hizo brevemente famosa fuera de Japón por compartir nombre con el expresidente estadounidense Barack Obama.

## Cómo llegar

Tren limited express desde Fukui o Kioto (con transbordo), o autobús directo desde Kioto.

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

El Museo Puerto de Tsuruga recuerda cómo cientos de refugiados judíos, con visados emitidos por el cónsul japonés Chiune Sugihara en Lituania, llegaron a este puerto en 1940-41 huyendo de la persecución nazi, con documentos y testimonios originales de aquellos refugiados. El santuario Kehi Jingu, uno de los más antiguos e importantes de la región de Hokuriku, y su gran torii de madera son otra parada habitual. Tsuruga es hoy también un nudo de conexión ferroviaria entre la costa del mar de Japón y la región de Kansai.

## Cómo llegar

Tren limited express o Shinkansen Hokuriku desde Kioto/Osaka o Fukui.

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

La región de Kofu produce buena parte del vino japonés, con bodegas abiertas a cata en el valle de Katsunuma, muchas con visita guiada a los viñedos incluida. El castillo Kofu (Maizuru-jo), hoy convertido en parque, recuerda el papel de la ciudad como feudo del clan Takeda, una de las grandes familias samurái del periodo Sengoku. A las afueras, el desfiladero de Shosenkyo combina paredes de granito, una cascada y un pequeño teleférico con vistas al valle.

## Cómo llegar

Tren limited express Azusa desde Shinjuku (Tokio), unos 90 minutos.

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

La pagoda Chureito, junto al santuario Arakura Sengen, ofrece la imagen más reproducida del monte Fuji en postales y redes sociales, especialmente en temporada de cerezos. Fujiyoshida es también uno de los puntos de partida clásicos para la ascensión al Fuji en temporada de verano (julio-septiembre, con reserva obligatoria en el tramo Yoshida), y conserva un casco antiguo de posada de peregrinos (oshi) del periodo Edo, cuando subir el Fuji era ante todo un acto religioso.

## Cómo llegar

Tren Fujikyu desde Otsuki, con parada de tren limited express desde Shinjuku.

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

El lago Kawaguchiko ofrece algunas de las vistas más fotografiadas del Fuji, con el monte reflejado en el agua en días de calma, especialmente desde el parque Oishi, en la orilla norte. La zona reúne museos, onsen con vistas y el parque temático Fuji-Q Highland, conocido por sus montañas rusas; el teleférico Kachi Kachi sube a un mirador con el lago y el Fuji en el mismo encuadre.

[LINK_FUJIQ_HIGHLAND]

## Cómo llegar

Tren Fujikyu directo desde Otsuki, o autobús directo desde Shinjuku (Tokio), unas 2 horas.

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

Zenko-ji alberga, según la tradición, la primera imagen budista que llegó a Japón, y recibe peregrinos desde hace más de mil años sin distinción de escuela budista. Bajo el templo, un pasadizo completamente a oscuras ("el camino hacia la llave del paraíso") es una de las experiencias más singulares que se pueden vivir en un templo japonés: hay que buscar a tientas una llave metálica en la pared para asegurarse la salvación, según la tradición. Nagano es también la puerta a los Alpes japoneses y a estaciones de esquí como Hakuba.

## Cómo llegar

Shinkansen Hokuriku, unos 90 minutos desde Tokio.

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

El castillo de Matsumoto, uno de los pocos que conservan su torreón original de madera del siglo XVI-XVII, destaca por su fachada negra, muy distinta al blanco de castillos como el de Himeji. La calle Nawate, junto al río que bordea el castillo, reúne pequeñas tiendas y puestos con motivos de rana (símbolo tradicional del barrio) casi a diario. La ciudad es también un buen punto de partida hacia los Alpes japoneses y el Valle de los Monos de Jigokudani, famoso por sus macacos bañándose en aguas termales — conviene revisar la previsión de presencia de monos antes de hacer el trayecto.

[LINK_JIGOKUDANI_MONKEY]

## Cómo llegar

Tren limited express Azusa desde Shinjuku (Tokio), unas 2 horas y media.

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

Karuizawa se convirtió a finales del siglo XIX en el retiro de verano preferido por misioneros extranjeros y, después, por la alta sociedad japonesa, huyendo del calor de Tokio. Hoy combina senderismo suave alrededor del estanque de Kumoba, ciclismo (hay varias tiendas de alquiler junto a la estación), un gran centro comercial outlet junto a la estación y cafeterías con encanto entre los árboles. La cascada de Shiraito, con decenas de finos hilos de agua cayendo sobre una pared de roca curva, es una excursión fácil desde el centro.

## Cómo llegar

Shinkansen Hokuriku, poco más de una hora desde Tokio.

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

La pesca con cormoranes (ukai) sobre el río Nagara, con más de 1.300 años de historia, se representa cada noche en temporada (mayo-octubre) con barcas iluminadas por antorchas. El castillo de Gifu, en lo alto del monte Kinka y accesible en teleférico, ofrece vistas sobre la ciudad y el valle. El templo Shohoji, a los pies del monte, alberga un gran Buda hecho de papel maché sobre una estructura de bambú y laca, una técnica poco habitual en las estatuas budistas de esta escala. La pesca con cormoranes se puede ver también de cerca embarcando en una de las barcas turísticas que siguen a los pescadores.

## Cómo llegar

Tren limited express desde Nagoya, unos 20 minutos.

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

El barrio de Sanmachi Suji mantiene calles enteras de casas de madera de comerciantes del periodo Edo, muchas convertidas hoy en tiendas de sake, artesanía y encurtidos. Los mercados matutinos junto al río Miyagawa llevan siglos funcionando, con puestos de encurtidos y artesanía para probar y comprar directamente al productor, y los festivales de primavera y otoño de Takayama, con carrozas ornamentadas, están declarados Patrimonio Inmaterial de la UNESCO.

## Cómo llegar

Tren limited express Hida desde Nagoya, unas 2 horas y cuarto.

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

El pueblo de Ogimachi, el núcleo principal de Shirakawa-go, reúne más de cien casas gassho-zukuri, algunas de más de 250 años y todavía habitadas. Un mirador en la colina cercana (Shiroyama) ofrece la vista panorámica clásica del pueblo, especialmente evocadora con nieve en invierno. Algunas casas funcionan como museo (Wada-ke, la más grande, es la más visitada) y permiten ver por dentro la estructura del tejado, con vigas de madera unidas sin un solo clavo.

## Cómo llegar

Autobús directo desde Takayama, unos 50 minutos, o desde Kanazawa.

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

La ciudad de Shizuoka es un gran centro productor de té verde, con plantaciones visibles en las colinas cercanas y tiendas especializadas en el centro donde se puede catar antes de comprar. En días despejados, el Fuji se ve con claridad desde varios puntos de la costa, incluido el paseo de Miho no Matsubara, un pinar declarado Patrimonio de la Humanidad como parte del conjunto del Fuji. El santuario Kunozan Toshogu, en lo alto de un acantilado junto al mar, alberga el primer mausoleo del shogun Tokugawa Ieyasu, antes de su traslado definitivo a Nikko.

## Cómo llegar

Shinkansen Tokaido, poco más de una hora desde Tokio.

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

Atami vivió su época dorada como destino de luna de miel en los años 60-70, y conserva ese ambiente retro en sus hoteles-onsen frente al mar, hoy redescubiertos por generaciones más jóvenes. El Museo de Arte MOA, en lo alto de una colina con vistas a la bahía, reúne una notable colección de arte japonés clásico y se llega en una escalera mecánica larga que ya es parte de la experiencia. Los fuegos artificiales sobre la bahía, varias veces al año, son otro de sus reclamos clásicos.

## Cómo llegar

Shinkansen Tokaido, unos 50 minutos desde Tokio.

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

Hamamatsu es sede histórica de fabricantes de instrumentos musicales y motores — Yamaha y Suzuki tienen aquí sus orígenes — y mantiene un museo de instrumentos musicales de referencia internacional, con salas donde se pueden tocar réplicas de varios instrumentos del mundo. El lago Hamana, famoso por su anguila de cría, y la costa cercana completan la visita. Cada mayo, el Hamamatsu Matsuri llena el cielo de cometas gigantes competitivas durante el día y las calles de carrozas iluminadas por la noche.

## Cómo llegar

Shinkansen Tokaido, aproximadamente 1 hora y 40 minutos desde Tokio.

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

El castillo de Nagoya, con sus icónicos delfines dorados (shachihoko) en el tejado, es el símbolo de la ciudad. El Museo Toyota de la Industria y la Tecnología muestra la evolución de la compañía desde los telares textiles hasta el automóvil, con máquinas originales todavía en funcionamiento durante demostraciones programadas. Nagoya tiene además una gastronomía propia muy marcada: miso katsu, tebasaki (alitas de pollo) y hitsumabushi (anguila servida de tres formas distintas).

## Cómo llegar

Shinkansen Tokaido, poco más de 1 hora y 40 minutos desde Tokio, y unos 35 minutos desde Kioto.

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

El castillo de Inuyama, construido en el siglo XVI, es uno de los pocos torreones originales que quedan en Japón y ofrece vistas sobre el río Kiso desde lo alto. La cercana garganta de Kiso permite paseos en barca tradicional bajo pequeños acantilados, con barquero incluido. A poca distancia, el museo al aire libre Meiji Mura reúne más de 60 edificios históricos de la era Meiji trasladados de distintos puntos de Japón, incluida parte de un antiguo hotel diseñado por Frank Lloyd Wright; el recinto es tan grande que tiene su propio tranvía y autobús interno.

## Cómo llegar

Tren Meitetsu directo desde Nagoya, unos 30 minutos.

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

La ciudad, originalmente llamada Koromo, se rebautizó en 1959 en honor a la compañía Toyota, cuya sede y principales plantas siguen aquí. El museo Toyota Kaikan, de entrada gratuita, permite ver de cerca la evolución de sus modelos y sus tecnologías de movilidad más recientes. El estadio Toyota, con capacidad para más de 40.000 espectadores, es sede habitual de partidos de fútbol y rugby de primer nivel.

[LINK_TOYOTA_KAIKAN]

## Cómo llegar

Tren Meitetsu desde Nagoya, unos 30-40 minutos.

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

Tsu tiene poca fama turística propia, pero es un nudo práctico para llegar a Ise, con el castillo de Tsu (hoy solo parque y muralla) y una tradición local de fideos tenmusu (bola de arroz con gamba tempura, para llevar y comer paseando) que se ha extendido por toda la región. Como capital administrativa de Mie, conserva también un ambiente de ciudad de tamaño medio poco transitado por turistas extranjeros.

## Cómo llegar

Tren limited express Kintetsu desde Nagoya u Osaka.

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

El Santuario de Ise (Ise Jingu) se divide en dos recintos principales, unidos por tradición aunque separados varios kilómetros: el Santuario Exterior (Geku), dedicado a la deidad de la agricultura, y el Interior (Naiku), dedicado a la diosa solar Amaterasu y considerado el más sagrado del sintoísmo japonés. Cada veinte años se reconstruyen por completo en un terreno adyacente siguiendo el ritual Shikinen Sengu, una práctica que se remonta más de 1.300 años. La calle Okage Yokocho, junto al Naiku, recrea el ambiente de una ciudad de peregrinos del periodo Edo, con puestos de comida callejera y tiendas de artesanía para pasear sin prisa después de la visita al santuario.

## Cómo llegar

Tren limited express Kintetsu desde Nagoya u Osaka, o JR desde Nagoya.

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

La isla de las Perlas Mikimoto conserva el laboratorio original donde Mikimoto perfeccionó el cultivo de perlas, con demostraciones en vivo de las buceadoras ama recogiendo ostras varias veces al día. El acuario de Toba, uno de los más grandes de Japón por número de especies, es otra parada habitual junto al puerto. La bahía de Toba, salpicada de pequeñas islas, es también un buen mirador sobre la costa de Ise-Shima.

## Cómo llegar

Tren limited express Kintetsu desde Ise, unos 15 minutos.

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

El lago Biwa domina el paisaje de Otsu, con paseos en barco (incluidos algunos con crucero panorámico y comida a bordo) y una costa que se puede recorrer en bicicleta. El templo Miidera, uno de los cuatro grandes templos de la escuela Tendai, y el santuario Hiyoshi Taisha, a los pies del monte Hiei, son las visitas históricas principales. Ishiyama-dera, otro templo con vistas al lago, está tradicionalmente asociado a la escritora Murasaki Shikibu, autora de «La historia de Genji».

## Cómo llegar

Tren JR o metro directo desde Kioto, unos 10 minutos.

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

El castillo de Hikone, construido a principios del siglo XVII, es uno de los pocos castillos japoneses cuyo torreón original ha llegado intacto hasta hoy y está clasificado como Tesoro Nacional. La ciudad, a orillas del lago Biwa, conserva también un barrio samurái con jardines tradicionales, entre ellos el jardín Genkyuen, junto al propio castillo, con una casa de té donde se puede tomar matcha con vistas al estanque. Hikonyan, el gato samurái con casco que hace de mascota de la ciudad, se ha convertido en uno de los personajes de este tipo más populares de Japón.

## Cómo llegar

Tren JR limited express o local desde Kioto, unos 40-50 minutos.

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

El barrio de Kurokabe Square reúne edificios comerciales tradicionales convertidos en tiendas de artesanía y cristal, donde se puede ver soplar vidrio en directo, junto al castillo de Nagahama, reconstruido con vistas al lago Biwa. La cercana isla de Chikubushima, accesible en barco, alberga un santuario considerado uno de los tres grandes de la diosa Benzaiten en Japón. Nagahama fue además el primer feudo que gobernó Toyotomi Hideyoshi, uno de los tres grandes unificadores del Japón feudal.

## Cómo llegar

Tren JR desde Kioto, con transbordo en Maibara, poco más de una hora.

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

Byodo-in, con su Salón Fénix reflejado en un estanque, es uno de los templos más fotografiados de Japón y da imagen a la moneda de 10 yenes; el museo Hoshokan, dentro del recinto, guarda las piezas originales retiradas del edificio para su conservación. Uji es además la región productora de té más prestigiosa del país, con salones de té y tiendas donde probar matcha de alta calidad recién molido.

[LINK_BYODOIN] El cercano santuario Ujigami, mucho más discreto, conserva el edificio de santuario más antiguo que se conoce en Japón.

## Cómo llegar

Tren JR o Keihan desde Kioto, unos 20-30 minutos.

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

La franja de arena de Amanohashidate ("el puente al cielo"), de casi 4 kilómetros y cubierta de miles de pinos, separa la bahía en dos y se puede cruzar a pie o en bicicleta. La tradición local invita a mirarla boca abajo, entre las piernas, desde uno de los miradores elevados, para que parezca un puente flotando en el cielo. El templo Nariaiji, en la montaña frente a la bahía, se alcanza en telesilla o funicular y añade una segunda perspectiva panorámica desde más altura.

## Cómo llegar

Tren limited express desde Kioto, unas 2 horas.

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

El Daisen Kofun, la tumba con forma de cerradura atribuida al emperador Nintoku, es la mayor tumba del mundo por superficie y forma parte de un conjunto de kofun de Mozu-Furuichi declarado Patrimonio de la Humanidad; el mirador del cercano ayuntamiento ofrece la única vista elevada disponible, ya que la propia tumba no se puede recorrer por dentro. Sakai es también históricamente famosa por la forja de cuchillos japoneses de alta calidad, un oficio que se remonta siglos atrás, y algunos talleres venden directamente al público con posibilidad de grabar el nombre en la hoja. Fue además la ciudad natal de Sen no Rikyu, la figura que perfeccionó la ceremonia del té japonesa.

## Cómo llegar

Tren Nankai desde el centro de Osaka, unos 20-30 minutos.

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

Takatsuki no tiene grandes reclamos turísticos propios, pero su posición a medio camino entre Osaka y Kioto, con buena conexión de tren en ambas direcciones, la convierte en una base residencial cómoda. El castillo de Takatsuki, del que apenas quedan restos, recuerda su papel histórico como plaza fuerte cristiana en el siglo XVI, y el parque que ocupa hoy su terreno es un buen sitio para un paseo tranquilo entre dos visitas.

## Cómo llegar

Tren JR o Hankyu, a medio camino entre Osaka y Kioto.

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

La carne de Kobe, criada bajo un estricto control de calidad, es una de las experiencias gastronómicas más buscadas por los visitantes, servida en restaurantes especializados en teppanyaki. El barrio de Kitano conserva mansiones de estilo occidental de la era del puerto internacional, y el mirador nocturno desde el monte Rokko ofrece una de las mejores vistas urbanas de Japón. El jardín de hierbas de Nunobiki, accesible en teleférico desde el propio centro, añade un paseo tranquilo con vistas al puerto y una cascada a mitad de camino.

## Cómo llegar

Shinkansen Tokaido-Sanyo, unos 20 minutos desde Shin-Osaka.

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

El castillo de Himeji, apodado "Castillo de la Garza Blanca" por su fachada, es el único de los grandes castillos de Japón que conserva su estructura original casi intacta desde el siglo XVII, sin haber sufrido incendios ni bombardeos. Fue de los primeros lugares de Japón declarados Patrimonio de la Humanidad por la UNESCO, en 1993. Junto al castillo, el jardín Kokoen recrea nueve jardines de estilo Edo separados por muros, construidos en el terreno de las antiguas residencias samurái.

[LINK_HIMEJI_TICKET]

## Cómo llegar

Shinkansen Sanyo, unos 50 minutos desde Shin-Osaka.

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

El puente Akashi Kaikyo, que une Awaji con Kobe, fue durante años el puente colgante más largo del mundo. La isla combina jardines florales, granjas y una tradición propia de teatro de marionetas (Ningyo Joruri) reconocida como patrimonio cultural. Awaji Yumebutai, un complejo de jardines y arquitectura diseñado por Tadao Ando sobre una antigua cantera, es otra parada habitual, con un invernadero circular y una escalinata de cientos de macetas de flores. Los remolinos de Naruto, en el estrecho hacia Shikoku, se pueden ver desde un puente con suelo de cristal a 45 metros sobre el mar, mejor en horas cercanas a la marea alta o baja, cuando el remolino es más intenso.

## Cómo llegar

Autobús directo desde Kobe o Osaka, cruzando el puente Akashi Kaikyo.

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

Los cerezos de Yoshino cubren la montaña en cuatro zonas escalonadas por altitud, que florecen de forma sucesiva a lo largo de varias semanas — una peculiaridad que hace que la temporada dure más que en la mayoría de lugares de Japón. El santuario Yoshimizu y el templo Kinpusen-ji, con uno de los edificios de madera más grandes de Japón, completan la visita; la ruta entera se recorre bien caminando desde el pueblo hasta los miradores más altos.

## Cómo llegar

Tren Kintetsu desde Osaka o Nara, con transbordo.

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

La región de Asuka conserva tumbas antiguas (kofun) con pinturas murales, ruinas de palacios imperiales y estatuas de piedra de origen incierto, testimonio de cuando esta llanura fue el centro político de Japón antes de que la capital se trasladara a Nara y después a Kioto. Ishibutai Kofun, una tumba cuya cámara de piedra quedó al descubierto tras perder su cubierta de tierra hace siglos, es la más visitada y una de las pocas que se pueden recorrer por dentro. Se recorre bien en bicicleta entre campos de arroz.

## Cómo llegar

Tren Kintetsu desde Nara u Osaka hasta la estación de Asuka.

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

El castillo de Wakayama, reconstruido tras la Segunda Guerra Mundial, domina el centro de la ciudad. La bahía de Wakaura, con formaciones rocosas y buenas vistas al mar, y el cercano templo Kimiidera, uno de los treinta y tres lugares de peregrinación Saigoku, completan la visita con un paseo tranquilo por la costa. La estación de tren funciona además como nudo para seguir hacia Koyasan o Shirahama.

## Cómo llegar

Tren JR limited express desde Shin-Osaka, poco más de una hora.

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

El cementerio de Okunoin, con más de 200.000 tumbas entre cedros centenarios, conduce hasta el mausoleo del monje Kukai, que según la tradición sigue en meditación eterna. Kongobuji, el templo principal de la escuela Shingon, y el complejo de Danjo Garan, con su gran pagoda roja, son las otras dos grandes visitas del pueblo. Decenas de templos ofrecen alojamiento (shukubo) con cena vegetariana budista (shojin ryori) y la posibilidad de asistir a la meditación matutina.

[LINK_KOYASAN_SHUKUBO]

## Cómo llegar

Tren Nankai desde Osaka (Namba) hasta Gokurakubashi, seguido de funicular.

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

La playa de Shirarahama, de arena blanca importada de Australia para reforzar la original, es uno de los pocos destinos de sol y playa clásicos dentro de Japón. Sus onsen, entre ellos varios con acceso público gratuito frente al mar, están documentados desde el periodo Nara. Los acantilados de Sandanbeki, tallados por la erosión en capas de roca, tienen además una cueva marina visitable en ascensor, usada antiguamente por piratas de la zona para esconder sus barcas.

## Cómo llegar

Tren JR limited express desde Shin-Osaka, unas 2 horas y media.

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

Las Dunas de Tottori, con más de 30 metros de altura en algunos puntos, son el único sistema de dunas de arena de gran escala de Japón, y se pueden recorrer a pie, en camello (con paseo guiado) o en parapente. El cercano Museo de Arena, con esculturas efímeras de arena a tamaño monumental renovadas cada año con un tema distinto, es otro de los grandes reclamos de la ciudad. La costa de Uradome, muy cerca, cambia por completo de paisaje: acantilados y calas de aguas turquesas que se recorren en barco o kayak.

## Cómo llegar

Tren limited express desde Osaka u Okayama, o vuelo directo desde Tokio.

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

El barrio de Utsubuki-Tamagawa, con sus almacenes tradicionales de paredes encaladas junto a un pequeño canal, conserva el ambiente de una ciudad comercial del periodo Edo casi sin las aglomeraciones de otros cascos históricos similares. Kurayoshi es también base para visitar el santuario de montaña Mitokusan Sanbutsuji, con su edificio suspendido en un acantilado al que se sube por una ruta exigente en pendiente y con cadenas, y para el onsen de Misasa, uno de los pocos del mundo con aguas de origen radiactivo natural consideradas terapéuticas.

## Cómo llegar

Tren limited express desde Okayama o Tottori.

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

El monte Daisen, el pico más alto de Chugoku, ofrece senderismo en verano y esquí en invierno, con vistas hasta el mar de Japón en días despejados. Yonago es también conocida por ser la ciudad natal del dibujante Shigeru Mizuki, creador de GeGeGe no Kitaro, con una calle comercial (Mizuki Shigeru Road) decorada con más de cien estatuas de bronce de sus personajes de yokai para ir contando mientras paseas.

## Cómo llegar

Tren limited express desde Okayama, o vuelo directo desde Tokio al aeropuerto de Yonago.

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

El castillo de Matsue, con su torreón original de madera, es uno de los doce castillos japoneses que han sobrevivido intactos desde el periodo feudal. La ciudad se hizo célebre en Occidente gracias a Lafcadio Hearn, el escritor que la retrató a finales del siglo XIX en sus libros sobre fantasmas y leyendas japonesas. La puesta de sol sobre el lago Shinji es una de las más fotografiadas de Japón. Cerca de la ciudad, el Museo de Arte Adachi combina una colección de pintura japonesa con jardines paisajísticos considerados, año tras año, entre los mejores del país; los jardines se ven desde dentro del museo, como si fueran cuadros enmarcados en las ventanas.

[LINK_ADACHI_MUSEUM]

## Cómo llegar

Tren limited express desde Okayama, unas 2 horas y media.

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

Izumo Taisha, dedicado al dios Okuninushi, es uno de los santuarios más venerados de Japón, especialmente asociado al amor y las buenas relaciones. Según la tradición sintoísta, en el décimo mes lunar todos los dioses de Japón se reúnen aquí, por lo que ese mes se llama "el mes sin dioses" en el resto del país y "el mes con dioses" solo en Izumo. La ciudad es también conocida por el soba de Izumo, servido en varios boles lacados apilados (warigo soba), una forma de comerlo propia de la región que se prueba en varios restaurantes junto al santuario.

## Cómo llegar

Tren limited express desde Okayama o Matsue, o vuelo directo desde Tokio.

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

Las minas de Iwami Ginzan, declaradas Patrimonio de la Humanidad, fueron una de las mayores fuentes de plata del mundo durante los siglos XVI y XVII, con una influencia directa en el comercio internacional de la época. Hoy se pueden recorrer a pie túneles de mina abiertos al público y el pueblo minero conservado alrededor. El cercano onsen de Yunotsu, el puerto histórico por el que salía la plata hacia el resto de Japón, conserva un ambiente de pueblo termal tradicional mucho más tranquilo que otros más conocidos.

## Cómo llegar

Tren local desde Matsue o Izumo, con transbordo, seguido de autobús a las minas.

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

Koraku-en, considerado uno de los tres grandes jardines de Japón junto a Kenroku-en y Kairaku-en, se diseñó en el siglo XVII para ofrecer vistas del cercano castillo de Okayama desde cada rincón. El castillo, de fachada negra, contrasta con el blanco habitual de otros castillos japoneses. Okayama es también conocida como la tierra natal del cuento popular de Momotaro, el "niño melocotón", y la prefectura produce la cerámica Bizen, una de las seis grandes tradiciones alfareras antiguas de Japón, sin esmaltar y cocida a leña; varios talleres del centro permiten probar el torno.

## Cómo llegar

Shinkansen Sanyo, unas 3 horas y cuarto desde Tokio y 45 minutos desde Shin-Osaka.

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

El barrio de Bikan, con su canal flanqueado de sauces y almacenes encalados, fue un importante centro de almacenamiento de arroz en el periodo Edo y hoy reúne museos, cafeterías y tiendas de artesanía. El Museo de Arte de Ohara, de los primeros de Japón dedicados a arte occidental, tiene una colección que sorprende por su calidad, con obras originales de Monet y El Greco. Muy cerca, el complejo de ladrillo rojo de Kurashiki Ivy Square, una antigua fábrica textil reconvertida en hoteles y tiendas, añade otro ángulo de la ciudad.

## Cómo llegar

Tren JR desde Okayama, unos 15 minutos.

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

Las ruinas del castillo de Tsuyama, hoy convertidas en el parque Kakuzan, fueron en su día una de las mayores fortalezas de Japón por número de torres, y se han convertido en uno de los mejores lugares de la región para el hanami gracias a sus más de 5.000 cerezos. El barrio de Terao-cho conserva templos y casas tradicionales con poca afluencia turística.

## Cómo llegar

Tren limited express desde Okayama, poco más de una hora.

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

El santuario de Itsukushima, construido sobre pilotes de madera, y su torii bermellón, que parece flotar con la marea alta, son Patrimonio de la Humanidad y una de las tres vistas más célebres de Japón. El teleférico al monte Misen sube hasta cerca del punto más alto de la isla, considerado sagrado y nunca talado, con vistas al mar Interior de Seto tras un corto tramo final a pie. La isla es también conocida por sus ciervos sika, que campan libremente por las calles, y por el momiji manju, un pastelito relleno con forma de hoja de arce.

## Cómo llegar

Ferry desde el embarcadero de Miyajimaguchi, accesible en tren desde Hiroshima.

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

La Shimanami Kaido conecta Onomichi con Imabari, en Shikoku, a través de una serie de puentes sobre pequeñas islas del mar Interior de Seto, con carril bici dedicado en todo el recorrido — considerada una de las mejores rutas cicloturistas de Asia. La propia ciudad, con sus calles empinadas y templos escalonados por la ladera, ha sido escenario de varias películas japonesas clásicas; el templo Senkoji, en lo alto de la colina y accesible en teleférico, ofrece la vista panorámica clásica sobre el puerto y las islas, y se puede alquilar una bicicleta en la propia estación para empezar la Shimanami Kaido nada más llegar.

## Cómo llegar

Tren JR desde Hiroshima, o desde Osaka con Shinkansen hasta Shin-Onomichi.

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

La pagoda de cinco pisos de Rurikoji, considerada una de las tres más bellas de Japón, es el símbolo de la ciudad. Yamaguchi acogió a misioneros jesuitas en el siglo XVI, incluido Francisco Javier, y esa herencia se recuerda en varios monumentos, entre ellos el jardín Joeiji, obra del pintor y monje Sesshu, uno de los grandes jardines zen de la región. Las cascadas de Ryuzu y las cuevas de piedra caliza de Akiyoshido, una de las mayores de Japón y recorrible a pie por un sendero iluminado de un kilómetro, son buenas excursiones de un día cerca de la ciudad.

## Cómo llegar

Tren limited express o Shinkansen hasta Shin-Yamaguchi, con enlace en autobús o tren local.

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

Shimonoseki es el mayor centro de distribución de fugu (pez globo) de Japón, con un mercado dedicado casi por completo a esta especialidad que requiere licencia especial para prepararse. El estrecho de Kanmon, escenario de la batalla naval de Dan-no-ura que puso fin al clan Taira en el siglo XII, se cruza a pie de forma gratuita por un túnel peatonal bajo el mar hasta Kyushu. El acuario Kaikyokan, junto al puerto, está especializado en la fauna marina del propio estrecho, incluidos varios tipos de fugu vivos.

## Cómo llegar

Shinkansen Sanyo hasta Shin-Shimonoseki, o tren local desde Shin-Yamaguchi.

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

El barrio samurái de Hagi mantiene calles enteras con muros de tierra y casas tradicionales, prácticamente sin apenas cambios desde el siglo XIX, cuando la ciudad formó a algunos de los principales artífices de la modernización de Japón — varios de ellos estudiaron en la escuela Shokasonjuku, hoy parte de un conjunto declarado Patrimonio de la Humanidad. La cerámica Hagi-yaki, apreciada tradicionalmente en la ceremonia del té por su esmalte cambiante con el uso, sigue produciéndose en talleres locales donde se puede comprar directamente al ceramista, y las ruinas del castillo de Hagi, junto al mar, completan el paseo por el barrio histórico.

## Cómo llegar

Autobús o tren local desde Shin-Yamaguchi (con Shinkansen) o desde Yamaguchi.

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

El Awa Odori, celebrado a mediados de agosto durante el Obon, reúne a decenas de miles de bailarines en grupos organizados (ren) que recorren las calles al ritmo de shamisen y tambores — uno de los grandes festivales de danza de Japón, con más de 400 años de historia. Fuera de temporada, el museo Awa Odori Kaikan permite ver representaciones diarias y aprender los pasos básicos todo el año, con la posibilidad de unirte al baile al final del espectáculo, y desde el propio edificio un teleférico sube al monte Bizan, con vistas sobre toda la ciudad y la desembocadura del río Yoshino.

## Cómo llegar

Tren limited express desde Okayama, o autobús directo desde Osaka/Kobe cruzando el puente de Naruto.

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

Los remolinos de Naruto, generados por el fuerte cambio de mareas entre el mar Interior de Seto y el océano Pacífico, se pueden observar desde barcos turísticos o desde un pasillo con suelo de cristal bajo el puente de Naruto. La ciudad da también nombre, de forma indirecta, al ingrediente narutomaki, el remolino rosa y blanco típico del ramen, que curiosamente casi nunca se prepara en el propio Naruto. El Museo de Arte Otsuka, uno de los mayores de Japón, expone reproducciones cerámicas a tamaño real de obras maestras del arte mundial, desde Las Meninas hasta la Capilla Sixtina completa, y se puede tocar las obras sin las restricciones de un museo con originales.

[LINK_OTSUKA_MUSEUM]

## Cómo llegar

Autobús desde la estación de Tokushima, unos 30-40 minutos.

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

El valle de Iya, con sus puentes colgantes de enredaderas —originalmente diseñados para poder cortarse en caso de invasión— y sus gargantas profundas, está considerado uno de los tres grandes rincones remotos de Japón. El puente principal (Iya Kazurabashi), que se cruza a pie sintiendo el balanceo entre las tablas de madera, es el más visitado, pero en el Oku-Iya, más al interior, quedan un par de puentes gemelos mucho menos transitados. La zona conserva un ritmo de vida rural muy alejado del Japón urbano, con onsen aislados y aldeas de montaña dispersas.

## Cómo llegar

Tren JR hasta Oboke o Awa-Ikeda, con enlace en autobús hacia el valle de Iya.

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

El jardín Ritsurin, con sus estanques, colinas artificiales y pinos podados durante generaciones, está considerado uno de los mejores jardines paisajísticos de Japón, aunque no forme parte de la lista oficial de los tres grandes. Kagawa es informalmente conocida como "la prefectura del udon", con cientos de locales especializados, muchos de autoservicio y muy económicos. La meseta de Yashima, escenario de una batalla clave entre los clanes Genji y Heike en el siglo XII, ofrece además vistas sobre la bahía de Takamatsu y las islas cercanas, accesible en autobús o telesilla.

## Cómo llegar

Shinkansen hasta Okayama y tren limited express hasta Takamatsu, unas 4 horas desde Tokio en total.

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

El Museo de Arte Chichu, semienterrado y diseñado por Tadao Ando, junto a instalaciones al aire libre como la Calabaza amarilla de Yayoi Kusama, han convertido esta isla, antes dedicada a la pesca, en un referente internacional de arte contemporáneo. Varias casas tradicionales del pueblo de Honmura se han reconvertido en instalaciones artísticas permanentes, el proyecto Art House. El Museo Benesse, el primero de la isla, combina también hotel y galería en un mismo edificio sobre un acantilado. La entrada al Museo Chichu es limitada y requiere reserva online con franja horaria, así que conviene reservarla antes de ir.

[LINK_BENESSE_NAOSHIMA]

## Cómo llegar

Ferry desde el puerto de Takamatsu o desde Uno, en Okayama.

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

Kotohira-gu, popularmente conocido como Konpira-san, ha sido durante siglos uno de los destinos de peregrinación más populares de Japón, tradicionalmente asociado a la protección de marineros y pescadores. Subir los 1.368 escalones hasta el santuario interior es en sí mismo parte de la experiencia, con vistas a la llanura de Kagawa desde el camino. Al pie de la escalinata, el teatro Kanamaru-za, construido en 1835, es el teatro kabuki más antiguo de Japón que se conserva en su forma original y se puede visitar por dentro, incluida la maquinaria bajo el escenario.

## Cómo llegar

Tren JR o Kotoden desde Takamatsu, unos 45-60 minutos.

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

Dogo Onsen, uno de los baños termales más antiguos de Japón según la tradición, inspiró parte de la estética de la casa de baños de la película "El viaje de Chihiro" de Studio Ghibli; el edificio histórico (Honkan) se puede visitar y bañar por separado, con varios niveles de entrada según las salas a las que se accede.

[LINK_DOGO_ONSEN] El castillo de Matsuyama, uno de los pocos que conservan su torreón original, se alcanza en un telesilla panorámico. La ciudad es también célebre por su tradición literaria, ligada al escritor Masaoka Shiki y al haiku, y el pequeño tren a vapor "Botchan", inspirado en la novela homónima de Natsume Soseki ambientada aquí, recorre varias líneas del centro.

## Cómo llegar

Vuelo directo desde Tokio, o tren limited express desde Okayama vía el puente Seto-Ohashi.

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

La calle de Yokaichi-Gokoku mantiene decenas de casas y almacenes tradicionales que prosperaron gracias al comercio de cera vegetal y papel washi en los siglos XVIII y XIX, con un teatro kabuki de madera restaurado, el Uchikoza. La residencia Kamihaga, la de un antiguo comerciante de cera, se puede visitar por dentro y muestra el proceso tradicional de fabricación de velas de cera vegetal, con las herramientas originales del taller. Es uno de los cascos históricos mejor conservados de Shikoku y recibe muchos menos visitantes que sus equivalentes en Honshu.

## Cómo llegar

Tren JR desde Matsuyama, unos 40 minutos.

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

Imabari es célebre en Japón por sus toallas de algodón, de una suavidad y calidad muy valoradas, con tiendas y fábricas que pueden visitarse y un pequeño museo dedicado por completo a su fabricación. El castillo de Imabari, poco habitual por tener su foso conectado directamente al mar en vez de agua dulce, es otra parada del centro. Como punto de llegada (o partida) de la Shimanami Kaido, la ciudad se ha convertido en un destino habitual para cicloturistas que cruzan el mar Interior de Seto por sus puentes.

## Cómo llegar

Tren o autobús desde Matsuyama; en bicicleta, directamente desde Onomichi (Hiroshima) cruzando la Shimanami Kaido.

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

El castillo de Kochi, uno de los pocos que conserva tanto el torreón como el palacio del señor feudal originales, domina el centro de la ciudad. Sakamoto Ryoma, samurái clave en el fin del shogunato y la Restauración Meiji, nació aquí y se le recuerda con estatuas y un museo interactivo junto a la costa, cerca de la playa de Katsurahama, un tramo de costa rocosa con vistas abiertas al Pacífico. El mercado dominical de Kochi, con siglos de historia, es uno de los más largos de Japón.

## Cómo llegar

Vuelo directo desde Tokio, o tren limited express desde Okayama.

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

El río Shimanto, sin grandes presas en todo su curso, es célebre en Japón por la limpieza de sus aguas y sus puentes bajos sin barandillas (chinkabashi), diseñados para quedar sumergidos sin sufrir daños durante las crecidas. La zona se recorre bien en canoa (con alquiler y monitor en varios puntos del río) o bicicleta, con pesca tradicional de anguila y ayu (trucha del río) todavía activa.

## Cómo llegar

Tren JR hasta Nakamura, con enlace en autobús o coche de alquiler para explorar el río.

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

El cabo de Muroto expone capas de roca formadas por el movimiento de placas tectónicas a lo largo de millones de años, y da nombre a uno de los geoparques mundiales de la UNESCO en Japón. El faro de Muroto y los acantilados cercanos, donde según la tradición el monje Kukai alcanzó la iluminación, completan un paisaje de costa salvaje poco transitada, con senderos señalizados que explican la geología de cada punto.

## Cómo llegar

Autobús desde la estación de Kochi o de Nahari, en la costa.

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

Kitakyushu creció a principios del siglo XX en torno a la siderurgia y sigue siendo una de las grandes ciudades industriales de Japón, aunque hoy apuesta por tecnologías medioambientales. El jardín de glicinas Kawachi Fujien, con sus túneles de flores en flor a finales de abril, se ha vuelto muy popular en redes sociales; en temporada alta exige entrada con franja horaria reservada de antemano, sin venta en la propia puerta. Mojiko Retro, el antiguo barrio portuario, conserva edificios de estilo occidental de principios del siglo XX, y el castillo de Kokura, reconstruido junto a la estación, añade otra parada fácil en pleno centro.

## Cómo llegar

Shinkansen Sanyo-Kyushu; está muy cerca de Shimonoseki, al otro lado del estrecho.

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

El santuario Dazaifu Tenmangu, dedicado a Sugawara no Michizane, deificado como dios del aprendizaje, recibe cada año a estudiantes que van a rezar antes de sus exámenes. La calle comercial de acceso al santuario es célebre por el umegae-mochi, un dulce de arroz relleno de pasta de judía roja. El Museo Nacional de Kyushu, conectado al santuario por un pasillo con cintas transportadoras que atraviesa la colina, se centra en el intercambio histórico entre Japón y el resto de Asia. Las ruinas del antiguo gobierno regional recuerdan el papel histórico de la ciudad como sede administrativa de Kyushu.

[LINK_KYUSHU_MUSEUM]

## Cómo llegar

Tren Nishitetsu desde el centro de Fukuoka, unos 30 minutos.

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

El Saga International Balloon Fiesta, cada noviembre, reúne a decenas de globos aerostáticos de todo el mundo a orillas del río Kase, uno de los eventos de este tipo más grandes de Asia. El yacimiento de Yoshinogari, a las afueras, reconstruye un gran asentamiento fortificado del periodo Yayoi (hace más de 2.000 años), uno de los más importantes de Japón para entender esa época. Fuera de esas fechas, Saga es sobre todo una base tranquila para visitar Arita y Karatsu, los grandes centros cerámicos de la prefectura, con el propio yacimiento de Yoshinogari recorrible a pie entre las réplicas de las torres de vigilancia.

## Cómo llegar

Tren limited express desde Fukuoka/Hakata, unos 40 minutos.

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

La porcelana de Arita, la primera producida en Japón, se exportó masivamente a Europa desde el siglo XVII a través de los comerciantes holandeses, y sigue siendo una de las cerámicas más prestigiosas del país. Decenas de talleres y tiendas familiares, algunos con siglos de historia, permiten comprar directamente a los artesanos y ver el proceso en varios de ellos, y el Festival de la Cerámica de Arita, cada primavera, atrae a cientos de miles de visitantes.

## Cómo llegar

Tren JR o limited express desde Saga o Fukuoka/Hakata.

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

El Karatsu Kunchi, en noviembre, saca a las calles catorce enormes carrozas (hikiyama) con forma de figuras como leones, dragones o cascos samurái, algunas de más de 200 años de antigüedad, expuestas el resto del año en un salón dedicado junto al santuario Karatsu. La cerámica Karatsu-yaki, apreciada tradicionalmente en la ceremonia del té por su estética rústica, se sigue produciendo en la zona, y el castillo de Karatsu (Maizuru-jo), junto a la costa, ofrece vistas sobre la bahía y el pinar de Niji no Matsubara.

## Cómo llegar

Tren JR desde Fukuoka/Hakata, poco más de una hora.

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

El parque de Kujukushima ("las 99 islas") ofrece cruceros turísticos entre decenas de pequeños islotes cubiertos de vegetación, uno de los paisajes de costa más singulares de Kyushu. Sasebo ha sido base naval desde finales del siglo XIX y hoy comparte instalaciones con la marina estadounidense, lo que ha dejado huella en su gastronomía, incluida la hamburguesa al estilo Sasebo. Huis Ten Bosch, un gran parque temático que recrea un pueblo holandés con canales y molinos de viento, es otro de los grandes reclamos de la ciudad, con espectáculos de luces nocturnos según la temporada.

[LINK_HUIS_TEN_BOSCH]

## Cómo llegar

Tren JR limited express desde Nagasaki o desde Hakata (Fukuoka).

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

Hirado recibió a comerciantes portugueses, españoles, holandeses e ingleses desde el siglo XVI, antes de que el shogunato concentrara el comercio exterior en Dejima (Nagasaki). El castillo de Hirado, iglesias católicas centenarias y templos budistas conviven en un paisaje de costa poco visitado por turistas extranjeros. La antigua factoría holandesa, reconstruida junto al puerto, recrea el almacén original del siglo XVII con documentos y objetos de la época que se pueden ver de cerca en su interior.

## Cómo llegar

Autobús desde Sasebo, cruzando el puente de Hirado.

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

El castillo de Kumamoto está considerado, junto a los de Osaka y Nagoya, uno de los tres grandes castillos de Japón por su tamaño y diseño defensivo. El terremoto de 2016 causó daños importantes en varias de sus estructuras, y buena parte del recinto sigue en restauración, aunque las zonas accesibles ya permiten ver el avance de las obras. El jardín Suizenji recrea en miniatura el paisaje del Tokaido, la antigua ruta entre Kioto y Edo, recorrible a pie en un cómodo paseo circular. La ciudad es también la cuna de Kumamon, el oso negro con mejillas sonrosadas convertido en una de las mascotas más populares de Japón, presente en tiendas y productos por todo el centro.

[LINK_KUMAMOTO_CASTLE]

## Cómo llegar

Shinkansen Kyushu, unos 50 minutos desde Hakata (Fukuoka).

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

La caldera de Aso, de más de 100 km de circunferencia, es una de las mayores del mundo y alberga pueblos, campos de cultivo y pastos dentro de sus límites. El cráter Nakadake, todavía activo, se puede acercar en coche o teleférico cuando los niveles de gas lo permiten — conviene comprobar el estado antes de ir, ya que el acceso se cierra con frecuencia por seguridad. La pradera de Kusasenri, con dos pequeños lagos y caballos pastando en libertad, ofrece una vista más tranquila del volcán al fondo.

## Cómo llegar

Tren JR hasta la estación de Aso, con enlace en autobús hacia el cráter.

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

Kurokawa Onsen ha apostado desde hace décadas por mantener una estética unificada de ryokan tradicionales de madera junto a un río, sin apenas construcciones modernas visibles, lo que le ha valido premios de conservación paisajística en Japón. Un pase (nyuto tegata) permite a los no huéspedes bañarse en varios de los baños al aire libre del pueblo.

## Cómo llegar

Autobús desde Kumamoto o desde Yufuin/Beppu, en Oita.

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

Oita capital tiene pocos reclamos turísticos propios, pero es un buen punto de partida gracias a su puerto de ferris hacia Shikoku y Kansai, y su cercanía a Beppu. Los budas tallados en roca de Usuki, a las afueras, son uno de los mejores conjuntos de escultura budista al aire libre de Japón. El parque de monos de Takasakiyama, entre Oita y Beppu, reúne a más de mil macacos salvajes en libertad, alimentados desde hace décadas por los guardas del parque, aunque conviene comprobar antes si las manadas están bajando ese día.

[LINK_TAKASAKIYAMA]

## Cómo llegar

Tren limited express desde Fukuoka/Hakata, unas 2 horas.

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

Yufuin ha cultivado una imagen más tranquila y artesanal que Beppu, con galerías de arte, cafeterías y ryokan de diseño repartidos por un valle a los pies del monte Yufu. El lago Kinrin, con aguas templadas por fuentes termales submarinas que generan neblina en las mañanas frías, es el paseo obligado del pueblo, con un pequeño santuario y un pediluvio gratuito en la propia orilla. La calle comercial de Yunotsubo, que lleva hasta el lago, concentra la mayoría de las tiendas y cafeterías del centro.

## Cómo llegar

Tren JR limited express (Yufuin no Mori) desde Fukuoka/Hakata, o autobús desde Beppu.

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

El cercano Aoshima, una isla unida a tierra por un istmo y rodeada de formaciones rocosas conocidas como "la tabla de lavar del diablo", está vinculado a los mitos sintoístas sobre el origen de la familia imperial. El parque Heiwadai, con su gran torre de la paz construida en los años 40, ofrece otro mirador tranquilo sobre la ciudad, rodeado de réplicas de estatuas haniwa (figuras funerarias antiguas) que se pueden ver de cerca. El clima subtropical de la costa ha hecho de Miyazaki un destino de surf poco habitual dentro de Japón.

## Cómo llegar

Vuelo directo desde Tokio, o tren limited express desde Kumamoto o Kagoshima.

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

El santuario Udo Jingu, construido dentro de una cavidad natural en un acantilado sobre el océano, es uno de los santuarios con emplazamiento más singular de Japón, tradicionalmente asociado a la fertilidad. Más al sur, el cabo de Toi es conocido por sus caballos Misaki, una raza autóctona que vive en semilibertad en la pradera del cabo desde hace siglos y se puede observar de cerca caminando por los senderos abiertos. La costa de Nichinan, con palmeras y formaciones rocosas, tiene un aire subtropical poco habitual en el resto del país.

## Cómo llegar

Tren JR o autobús desde Miyazaki, unos 40-60 minutos.

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

El desfiladero de Takachiho, con paredes de basalto de hasta 80 metros que se pueden recorrer en barca de remos, es una de las postales más fotografiadas de Kyushu. Según la mitología sintoísta, es aquí donde el dios Ninigi descendió a la tierra, antepasado legendario de la línea imperial japonesa; el santuario Amano Iwato y las representaciones nocturnas de danza kagura, gratuitas y abiertas cada noche del año en un pequeño santuario del pueblo, mantienen viva esa tradición.

## Cómo llegar

Autobús desde Kumamoto o desde Nobeoka, con tren JR.

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

Sakurajima, un volcán activo que expulsa ceniza con regularidad (los locales barren la ceniza de sus calles como quien barre hojas), domina el perfil de la ciudad al otro lado de la bahía y se visita en un corto trayecto en ferry. El jardín Sengan-en, antigua residencia de la familia Shimazu, usa la propia bahía y el volcán como parte de su diseño paisajístico, una técnica llamada "paisaje prestado"; el museo Shoko Shuseikan, junto al jardín, se puede visitar con la misma entrada. Kagoshima tiene también un clima suave que le ha valido el apodo de "la Nápoles de Oriente", y una gastronomía marcada por el cerdo kurobuta y el shochu de boniato.

[LINK_SENGANEN]

## Cómo llegar

Shinkansen Kyushu, poco más de una hora desde Hakata (Fukuoka).

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

Los baños de arena de Ibusuki (sunamushi) consisten en tumbarse en la playa mientras te cubren con arena caliente por el vapor geotérmico natural — una experiencia de onsen única en Japón por su forma. La península de Satsuma, con el volcán Kaimondake ("el Fuji de Satsuma") como telón de fondo, completa un paisaje de costa subtropical que se puede recorrer en bicicleta desde el propio pueblo.

## Cómo llegar

Tren JR limited express desde Kagoshima, unos 50 minutos.

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

Los bosques de cedro yakusugi, algunos con más de 1.000 años —el más antiguo, Jomon Sugi, podría superar los varios milenios según distintas estimaciones—, cubiertos de musgo y niebla, inspiraron directamente parte de la estética de la película "La Princesa Mononoke", en especial el desfiladero de Shiratani Unsuikyo, la ruta más citada como referencia directa de la película. La isla, declarada Patrimonio de la Humanidad, recibe abundantes lluvias durante buena parte del año, así que conviene ir preparado para el agua; las rutas se pueden hacer por libre o con guía local, recomendable para las más largas hasta el Jomon Sugi.

## Cómo llegar

Ferry rápido o avión desde Kagoshima.

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

Kabira Bay, con sus aguas de color turquesa y perlas cultivadas en sus criaderos, es una de las postales clásicas de Ishigaki. La isla es también uno de los mejores puntos de buceo y snorkel de Japón, con arrecifes de coral bien conservados y salidas en barco desde el propio puerto, y sirve de puerta de embarque hacia otras islas del archipiélago Yaeyama como Iriomote o Taketomi.

## Cómo llegar

Vuelo directo desde Tokio, Osaka o Naha.

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

La playa de Yonaha Maehama, de arena blanca fina y varios kilómetros de longitud, aparece habitualmente en los rankings de mejores playas de Japón. El puente Irabu, uno de los más largos de Japón sin peaje, conecta la isla principal con la vecina Irabujima, con más playas y miradores sobre el mar, ideal para recorrer en coche de alquiler con paradas libres.

## Cómo llegar

Vuelo directo desde Tokio, Osaka o Naha.

## Dónde alojarse

Los resorts junto a la playa de Yonaha Maehama son la opción más buscada; el centro de la ciudad, más económico, queda a un corto trayecto en coche.`,
    relatedCities: ["naha", "ishigaki"],
  },
};

export const CITY_GUIDE_SLUGS = Object.keys(CITY_GUIDES);
