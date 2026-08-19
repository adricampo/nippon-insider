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
    url: "https://affiliate.klook.com/redirect?aid=131827&aff_adid=1392893&k_site=https%3A%2F%2Fwww.klook.com%2Fes%2Factivity%2F109994-asakusa-sumo-club-sumo-show-admission-chankonabe-tokyo",
    cta: "Reservar",
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
};

export const AFFILIATE_CODES = Object.keys(AFFILIATES);
