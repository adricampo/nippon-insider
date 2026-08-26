// ─────────────────────────────────────────────────────────────
// Registro central de afiliados (CPL / CPS)
// Compartido entre backend (el generador inserta los shortcodes)
// y frontend (el parser los convierte en componentes visuales).
//
// Para producción: sustituye las URLs por tus enlaces de afiliado
// reales (JR Pass / Agoda / Rakuten Travel / Sakura Mobile, etc.)
// ─────────────────────────────────────────────────────────────

export type AffiliateKind = "banner" | "product" | "inline";

// Categoría de logística de viaje. Se usa para agrupar en el cuadro de
// "recursos básicos" ([RECURSOS_VIAJE]); un afiliado sin categoría solo
// aparece donde el shortcode de su propio código lo coloque en el texto.
export type AffiliateCategory =
  | "vuelos"
  | "alojamiento"
  | "transporte"
  | "seguro"
  | "conectividad"
  | "dinero"
  | "tours";

export interface AffiliateDef {
  code: string; // shortcode, ej. [BANNER_JRPASS]
  kind: AffiliateKind;
  title: string;
  description: string;
  url: string;
  cta: string;
  // Metadato interno (modelo de comisión: CPS/CPL) — ya no se muestra en la
  // web, es jerga de marketing de afiliados que no aporta nada al lector.
  // Se conserva aquí solo como referencia tuya.
  badge?: string;
  priceHint?: string;
  category?: AffiliateCategory;
}

export const AFFILIATES: Record<string, AffiliateDef> = {
  BANNER_JRPASS: {
    code: "BANNER_JRPASS",
    kind: "banner",
    title: "Japan Rail Pass",
    description:
      "Trenes ilimitados por todo Japón, incluido el shinkansen. Se amortiza con un solo Tokyo–Kioto ida y vuelta.",
    url: "https://www.jrailpass.com/es?aff=NIPPONINSIDER",
    cta: "Comprar JR Pass",
    badge: "CPS · Comisión por venta",
    priceHint: "Desde 50.000 ¥ / 7 días",
    category: "transporte",
  },
  PRODUCT_POCKET_WIFI: {
    code: "PRODUCT_POCKET_WIFI",
    kind: "product",
    title: "Pocket WiFi 4G ilimitado",
    description:
      "Recógelo en el aeropuerto de Narita o Haneda y olvídate del roaming: conexión estable durante todo el viaje sin depender del wifi de cada sitio.",
    url: "https://www.sakuramobile.jp/?aff=NIPPONINSIDER",
    cta: "Reservar WiFi",
    badge: "CPL · Lead cualificado",
    priceHint: "≈ 900 ¥/día",
  },
  PRODUCT_JAPAN_SIM: {
    code: "PRODUCT_JAPAN_SIM",
    kind: "product",
    title: "eSIM Japón 5G",
    description:
      "Actívala antes de despegar y aterriza con datos. Sin colas en el aeropuerto ni tarjetas físicas.",
    url: "https://www.mobal.com/japan-sim-card/?aff=NIPPONINSIDER",
    cta: "Ver planes eSIM",
    badge: "CPS · Comisión por venta",
    priceHint: "Desde 2.980 ¥",
    category: "conectividad",
  },
  LINK_AGODA_TOKYO: {
    code: "LINK_AGODA_TOKYO",
    kind: "inline",
    title: "Hoteles en Tokio con cancelación gratis",
    description: "Comparativa de barrios y ofertas actualizadas en Agoda.",
    url: "https://www.agoda.com/es-es/city/tokyo-jp.html?cid=NIPPONINSIDER",
    cta: "Ver ofertas en Tokio",
    badge: "CPS · Comisión por reserva",
  },
  LINK_RAKUTEN_TRAVEL: {
    code: "LINK_RAKUTEN_TRAVEL",
    kind: "inline",
    title: "Ryokan y onsen con Rakuten Travel",
    description: "La plataforma que usan los propios japoneses para reservar alojamiento tradicional.",
    url: "https://travel.rakuten.com/?aff=NIPPONINSIDER",
    cta: "Explorar ryokan",
    badge: "CPS · Comisión por reserva",
  },
  LINK_BOOKING_HOTELS: {
    code: "LINK_BOOKING_HOTELS",
    kind: "inline",
    title: "Hoteles en Japón con cancelación gratis",
    description: "El buscador con más disponibilidad fuera de las grandes ciudades: ideal para Hokkaido, Shikoku o pueblos akiya.",
    url: "https://www.booking.com/index.html?aid=NIPPONINSIDER",
    cta: "Buscar alojamiento",
    badge: "CPS · Comisión por reserva",
    category: "alojamiento",
  },
  PRODUCT_KLOOK_TOURS: {
    code: "PRODUCT_KLOOK_TOURS",
    kind: "product",
    title: "Billete de metro de Tokio",
    description:
      "Canje directo desde el móvil, sin colas en las máquinas expendedoras: acceso a la red de metro de Tokio los días que necesites.",
    url: "https://affiliate.klook.com/redirect?aid=131827&aff_adid=1392890&k_site=https%3A%2F%2Fwww.klook.com%2Fes%2Factivity%2F1552-subway-ticket-tokyo",
    cta: "Ver en Klook",
    badge: "CPS · Comisión por reserva",
    category: "transporte",
  },
  PRODUCT_KLOOK_SUMO: {
    code: "PRODUCT_KLOOK_SUMO",
    kind: "product",
    title: "Exhibición de sumo con chankonabe en Asakusa",
    description:
      "Entrada a una exhibición de sumo en un club de Asakusa, con degustación de chankonabe incluida — el guiso tradicional con el que se alimentan los luchadores.",
    url: "https://affiliate.klook.com/redirect?aid=131827&aff_adid=1402673&k_site=https%3A%2F%2Fwww.klook.com%2Fes%2Factivity%2F109994-asakusa-sumo-club-sumo-show-admission-chankonabe-tokyo",
    cta: "Reservar",
    badge: "CPS · Comisión por reserva",
    category: "tours",
  },
  PRODUCT_KLOOK_USJ: {
    code: "PRODUCT_KLOOK_USJ",
    kind: "product",
    title: "Entrada a Universal Studios Japan",
    description:
      "E-ticket con QR de entrada directa, sin pasar por taquilla — pensada para no perder tiempo de parque en la cola de la entrada.",
    url: "https://affiliate.klook.com/redirect?aid=131827&aff_adid=1402674&k_site=https%3A%2F%2Fwww.klook.com%2Fes%2Factivity%2F46604-universal-studios-japan-e-ticket-osaka-qr-code-direct-entry",
    cta: "Comprar entrada",
    badge: "CPS · Comisión por reserva",
    category: "tours",
  },
  PRODUCT_GETYOURGUIDE: {
    code: "PRODUCT_GETYOURGUIDE",
    kind: "product",
    title: "Experiencias con GetYourGuide",
    description: "Alternativa a Klook con buen catálogo de excursiones de un día desde Tokio y Kioto.",
    url: "https://www.getyourguide.com/tokio-l178/?partner_id=NIPPONINSIDER",
    cta: "Ver experiencias",
    badge: "CPS · Comisión por reserva",
  },
  PRODUCT_AMAZON_GEAR: {
    code: "PRODUCT_AMAZON_GEAR",
    kind: "product",
    title: "Equipo de viaje recomendado",
    description: "Adaptador de corriente, power bank y mochila pensados para aguantar de la humedad de Tokio a la nieve de Hokkaido.",
    url: "https://www.amazon.es/shop/nipponinsider?tag=NIPPONINSIDER",
    cta: "Ver en Amazon",
    badge: "CPS · Comisión por venta",
  },
  LINK_SKYSCANNER_VUELOS: {
    code: "LINK_SKYSCANNER_VUELOS",
    kind: "inline",
    title: "Vuelos a Japón",
    description: "Comparador de vuelos con alertas de precio para encontrar el mejor momento de reservar tu billete a Japón.",
    url: "https://www.skyscanner.es/transport/flights-to/jp/?associateid=NIPPONINSIDER",
    cta: "Comparar vuelos",
    badge: "CPS · Comisión por reserva",
    category: "vuelos",
  },
  PRODUCT_SEGURO_VIAJE: {
    code: "PRODUCT_SEGURO_VIAJE",
    kind: "product",
    title: "Seguro de viaje con cobertura médica",
    description: "En Japón la sanidad privada es excelente pero cara: un buen seguro se amortiza con una sola visita a urgencias.",
    url: "https://www.intermundial.es/seguros-de-viaje?prom=NIPPONINSIDER",
    cta: "Calcular seguro",
    badge: "CPS · Comisión por póliza",
    category: "seguro",
  },
  PRODUCT_TARJETA_VIAJE: {
    code: "PRODUCT_TARJETA_VIAJE",
    kind: "product",
    title: "Tarjeta sin comisiones en el extranjero",
    description: "Paga y saca yenes en cualquier konbini sin comisión de cambio ni de cajero — evita perder dinero en cada operación.",
    url: "https://www.revolut.com/es-ES/?referral-code=NIPPONINSIDER",
    cta: "Pedir mi tarjeta",
    badge: "CPL · Alta cualificada",
    category: "dinero",
  },

  // ─────────────────────────────────────────────────────────────
  // Enlaces oficiales de atracciones concretas (sin comisión de
  // afiliado — no existe programa para estos sitios). Se usan en
  // las guías de ciudad para dar al lector un enlace directo y
  // verificado a la web oficial de la atracción, en vez de solo
  // nombrarla en el texto. URL comprobada antes de añadirla aquí.
  // ─────────────────────────────────────────────────────────────
  LINK_HAWAIIANS_IWAKI: {
    code: "LINK_HAWAIIANS_IWAKI",
    kind: "inline",
    title: "Spa Resort Hawaiians",
    description: "Parque acuático y de aguas termales de ambiente hawaiano, con espectáculos de hula todos los días.",
    url: "https://www.hawaiians.co.jp/en/",
    cta: "Ver web oficial",
    badge: "Sin comisión · enlace informativo",
  },
  LINK_JAXA_TSUKUBA: {
    code: "LINK_JAXA_TSUKUBA",
    kind: "inline",
    title: "Centro Espacial de Tsukuba (JAXA)",
    description: "Visitas guiadas y el Space Dome, con un módulo real de la Estación Espacial Internacional. Conviene reservar la visita guiada con antelación.",
    url: "https://global.jaxa.jp/about/centers/tksc/",
    cta: "Ver web oficial",
    badge: "Sin comisión · enlace informativo",
  },
  LINK_KAMO_AQUARIUM: {
    code: "LINK_KAMO_AQUARIUM",
    kind: "inline",
    title: "Acuario Kamo",
    description: "El acuario con mayor colección de medusas del mundo, con un gran tanque circular como pieza central.",
    url: "https://kamo-kurage.jp/",
    cta: "Ver web oficial",
    badge: "Sin comisión · enlace informativo",
  },
  LINK_ZAO_ONSEN: {
    code: "LINK_ZAO_ONSEN",
    kind: "inline",
    title: "Zao Onsen (esquí y onsen)",
    description: "Información de pistas, telesillas y alojamiento de una de las mayores estaciones de esquí y onsen de Tohoku.",
    url: "https://www.zao-spa.or.jp/english/",
    cta: "Ver web oficial",
    badge: "Sin comisión · enlace informativo",
  },
  LINK_OTARU_MUSICBOX: {
    code: "LINK_OTARU_MUSICBOX",
    kind: "inline",
    title: "Museo de Cajas de Música de Otaru",
    description: "Horarios y talleres para montar tu propia caja de música como recuerdo.",
    url: "https://www.otaru-orgel.co.jp/en",
    cta: "Ver web oficial",
    badge: "Sin comisión · enlace informativo",
  },
  LINK_TOKYO_DISNEY: {
    code: "LINK_TOKYO_DISNEY",
    kind: "inline",
    title: "Tokyo Disney Resort",
    description: "Entradas oficiales a Tokyo Disneyland y Tokyo DisneySea — las entradas se agotan con frecuencia, conviene comprarlas con antelación.",
    url: "https://www.tokyodisneyresort.jp/en/index.html",
    cta: "Ver web oficial",
    badge: "Sin comisión · enlace informativo",
  },
  LINK_SADO_KINZAN: {
    code: "LINK_SADO_KINZAN",
    kind: "inline",
    title: "Mina de oro de Sado",
    description: "Recorrido histórico por la mina, Patrimonio de la Humanidad desde 2024, con talleres de dorado a la hoja.",
    url: "https://www.sado-kinzan.com/en/",
    cta: "Ver web oficial",
    badge: "Sin comisión · enlace informativo",
  },
  LINK_GALA_YUZAWA: {
    code: "LINK_GALA_YUZAWA",
    kind: "inline",
    title: "GALA Yuzawa (esquí)",
    description: "Estación de esquí con acceso directo desde el propio andén del Shinkansen — sin necesidad de autobús ni traslado.",
    url: "https://gala.co.jp/en/",
    cta: "Ver web oficial",
    badge: "Sin comisión · enlace informativo",
  },
  LINK_FUKUI_DINOSAUR: {
    code: "LINK_FUKUI_DINOSAUR",
    kind: "inline",
    title: "Museo de Dinosaurios de Fukui",
    description: "Uno de los tres mayores museos de paleontología del mundo, con excavaciones reales visitables en temporada.",
    url: "https://www.dinosaur.pref.fukui.jp/en/",
    cta: "Ver web oficial",
    badge: "Sin comisión · enlace informativo",
  },
  LINK_TATEYAMA_ALPINE: {
    code: "LINK_TATEYAMA_ALPINE",
    kind: "inline",
    title: "Ruta Alpina Tateyama-Kurobe",
    description: "Horarios, tarifas y venta de billetes con reserva anticipada para los distintos tramos de teleférico, funicular y trolebús.",
    url: "https://www.alpen-route.com/en/",
    cta: "Ver web oficial",
    badge: "Sin comisión · enlace informativo",
  },
  LINK_FUJIQ_HIGHLAND: {
    code: "LINK_FUJIQ_HIGHLAND",
    kind: "inline",
    title: "Fuji-Q Highland",
    description: "Parque de atracciones con algunas de las montañas rusas más extremas de Japón, con el Fuji de telón de fondo. Entrada al recinto gratis; las atracciones se pagan aparte o con pase de un día.",
    url: "https://www.fujiq.jp/en/index.html",
    cta: "Ver web oficial",
    badge: "Sin comisión · enlace informativo",
  },
  LINK_JIGOKUDANI_MONKEY: {
    code: "LINK_JIGOKUDANI_MONKEY",
    kind: "inline",
    title: "Parque de los Monos de Jigokudani",
    description: "Previsión de presencia de los monos y venta de entrada online — conviene revisarla antes de hacer el trayecto hasta el valle.",
    url: "https://en.jigokudani-yaenkoen.co.jp/",
    cta: "Ver web oficial",
    badge: "Sin comisión · enlace informativo",
  },
  LINK_TOYOTA_KAIKAN: {
    code: "LINK_TOYOTA_KAIKAN",
    kind: "inline",
    title: "Museo Toyota Kaikan",
    description: "Entrada gratuita, sin reserva necesaria para visitantes individuales — horarios y exposición actual en la web oficial.",
    url: "https://www.toyota.co.jp/en/about_toyota/facility/toyota_kaikan/",
    cta: "Ver web oficial",
    badge: "Sin comisión · enlace informativo",
  },
  LINK_HIMEJI_TICKET: {
    code: "LINK_HIMEJI_TICKET",
    kind: "inline",
    title: "Entrada al castillo de Himeji",
    description: "Venta oficial de entradas online, con la opción de combinarla con el jardín Kokoen.",
    url: "https://himejicastle-ticket.jp/",
    cta: "Comprar entrada",
    badge: "Sin comisión · enlace informativo",
  },
  LINK_ADACHI_MUSEUM: {
    code: "LINK_ADACHI_MUSEUM",
    kind: "inline",
    title: "Museo de Arte Adachi",
    description: "Horarios, colección y el jardín paisajístico elegido año tras año como el mejor de Japón.",
    url: "https://www.adachi-museum.or.jp/en/",
    cta: "Ver web oficial",
    badge: "Sin comisión · enlace informativo",
  },
  LINK_KOYASAN_SHUKUBO: {
    code: "LINK_KOYASAN_SHUKUBO",
    kind: "inline",
    title: "Reserva de shukubo en Koyasan",
    description: "Portal oficial de la asociación de templos de Koyasan para reservar alojamiento monástico con cena shojin ryori incluida.",
    url: "https://koyasan-shukubo.net/en/",
    cta: "Reservar shukubo",
    badge: "Sin comisión · enlace informativo",
  },
  LINK_BYODOIN: {
    code: "LINK_BYODOIN",
    kind: "inline",
    title: "Templo Byodo-in",
    description: "Horarios del templo y del museo Hoshokan, con las piezas originales retiradas del Salón Fénix para su conservación.",
    url: "https://www.byodoin.or.jp/en/",
    cta: "Ver web oficial",
    badge: "Sin comisión · enlace informativo",
  },
  LINK_BENESSE_NAOSHIMA: {
    code: "LINK_BENESSE_NAOSHIMA",
    kind: "inline",
    title: "Benesse Art Site Naoshima",
    description: "Entrada online obligatoria con franja horaria para el Museo Chichu — el aforo es limitado y se agota con frecuencia en temporada alta.",
    url: "https://benesse-artsite.jp/en/",
    cta: "Reservar entrada",
    badge: "Sin comisión · enlace informativo",
  },
  LINK_OTSUKA_MUSEUM: {
    code: "LINK_OTSUKA_MUSEUM",
    kind: "inline",
    title: "Museo de Arte Otsuka",
    description: "El mayor espacio expositivo de Japón, con reproducciones cerámicas a tamaño real de obras como el Guernica o la Capilla Sixtina completa.",
    url: "https://o-museum.or.jp/en/",
    cta: "Ver web oficial",
    badge: "Sin comisión · enlace informativo",
  },
  LINK_DOGO_ONSEN: {
    code: "LINK_DOGO_ONSEN",
    kind: "inline",
    title: "Dogo Onsen",
    description: "Horarios y tiempos de espera en tiempo real de las tres casas de baños, incluido el histórico Honkan.",
    url: "https://dogo.jp/en/",
    cta: "Ver web oficial",
    badge: "Sin comisión · enlace informativo",
  },
  LINK_HUIS_TEN_BOSCH: {
    code: "LINK_HUIS_TEN_BOSCH",
    kind: "inline",
    title: "Huis Ten Bosch",
    description: "Parque temático de ambiente holandés, con espectáculos de luces y flores según la época del año.",
    url: "https://english.huistenbosch.co.jp/",
    cta: "Ver web oficial",
    badge: "Sin comisión · enlace informativo",
  },
  LINK_KYUSHU_MUSEUM: {
    code: "LINK_KYUSHU_MUSEUM",
    kind: "inline",
    title: "Museo Nacional de Kyushu",
    description: "Exposiciones actuales y horarios del museo dedicado al intercambio cultural entre Japón y el resto de Asia.",
    url: "https://www.kyuhaku.jp/en/",
    cta: "Ver web oficial",
    badge: "Sin comisión · enlace informativo",
  },
  LINK_TAKASAKIYAMA: {
    code: "LINK_TAKASAKIYAMA",
    kind: "inline",
    title: "Parque de Monos de Takasakiyama",
    description: "Horarios y estado de las dos manadas de macacos, que no siempre están visibles en la zona de observación.",
    url: "https://www.takasakiyama.jp/",
    cta: "Ver web oficial",
    badge: "Sin comisión · enlace informativo",
  },
  LINK_KUMAMOTO_CASTLE: {
    code: "LINK_KUMAMOTO_CASTLE",
    kind: "inline",
    title: "Entrada al castillo de Kumamoto",
    description: "Venta de entradas y estado actual de las obras de restauración tras el terremoto de 2016.",
    url: "https://castle.kumamoto-guide.jp/",
    cta: "Ver web oficial",
    badge: "Sin comisión · enlace informativo",
  },
  LINK_SENGANEN: {
    code: "LINK_SENGANEN",
    kind: "inline",
    title: "Jardín Sengan-en",
    description: "Antigua residencia del clan Shimazu, con Sakurajima integrado en el propio diseño del jardín.",
    url: "https://www.senganen.jp/",
    cta: "Ver web oficial",
    badge: "Sin comisión · enlace informativo",
  },
};

export const AFFILIATE_CODES = Object.keys(AFFILIATES);
