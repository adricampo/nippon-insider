// ─────────────────────────────────────────────────────────────
// Fuentes de noticias en vivo para el motor de contenido.
// Cada feed es RSS/Atom público y gratuito, verificado manualmente
// (curl a la URL real) antes de añadirlo aquí — nada de endpoints
// adivinados. Si un feed deja de funcionar, se salta sin romper la
// generación (ver findLiveCandidate en content-engine.ts).
// ─────────────────────────────────────────────────────────────

export type Category = "turismo" | "economia" | "cultura" | "inmobiliaria";

// Búsqueda de respaldo en Pexels cuando no hay una query más específica
// para el artículo (ver findCoverImage en server/lib/pexels.ts).
export const CATEGORY_COVER_QUERY: Record<Category, string> = {
  turismo: "Japan travel tourism",
  economia: "Tokyo business finance",
  cultura: "Japan traditional culture",
  inmobiliaria: "Japan house real estate",
};

export interface NewsFeed {
  name: string;
  url: string;
  categories: Category[];
  // Fuentes monotemáticas (todo su contenido es de la categoría, ej. un
  // banco central) no necesitan filtro de palabras clave. Las generalistas
  // (un medio con muchas secciones) sí, para no colar noticias irrelevantes.
  alwaysRelevant?: boolean;
  // Diarios generalistas (cubren también noticias internacionales) donde el
  // filtro por categoría no basta: "economic indicators in Nigeria" cuela
  // como "economía" sin esto. Exige además que mencione Japón o un lugar
  // japonés conocido.
  requireJapanMention?: boolean;
}

export const JAPAN_KEYWORDS = [
  "japan",
  "japon",
  "japón",
  "tokyo",
  "tokio",
  "kyoto",
  "kioto",
  "osaka",
  "yokohama",
  "hokkaido",
  "okinawa",
  "nippon",
  "nihon",
];

export const NEWS_FEEDS: NewsFeed[] = [
  {
    name: "Nippon.com",
    url: "https://www.nippon.com/es/feed/",
    categories: ["turismo", "economia", "cultura"],
  },
  {
    name: "SoraNews24",
    url: "https://soranews24.com/feed/",
    categories: ["turismo", "cultura"],
  },
  {
    name: "Savvy Tokyo",
    url: "https://savvytokyo.com/feed/",
    categories: ["cultura"],
  },
  {
    name: "GaijinPot Blog",
    url: "https://blog.gaijinpot.com/feed/",
    categories: ["cultura"],
  },
  {
    name: "The Japan Times",
    url: "https://www.japantimes.co.jp/feed/",
    categories: ["economia"],
    requireJapanMention: true,
  },
  {
    name: "Real Estate Japan",
    url: "https://resources.realestate.co.jp/feed/",
    categories: ["inmobiliaria"],
    alwaysRelevant: true,
  },
  {
    name: "Kyodo News",
    url: "https://english.kyodonews.net/list/feed/rss4kyodonews-fzone",
    categories: ["turismo", "economia", "cultura", "inmobiliaria"],
    requireJapanMention: true,
  },
];

// Filtro de relevancia para feeds generalistas: el ítem debe mencionar al
// menos una de estas palabras (título o resumen) para considerarse de la
// categoría solicitada.
export const CATEGORY_KEYWORDS: Record<Category, string[]> = {
  turismo: [
    "travel",
    "tourism",
    "tourist",
    "visitor", // no "visit": en español "visitó/visita" es un verbo genérico
    // (visita diplomática, médica...), no específico de turismo.
    "hotel",
    "trip",
    "sightsee",
    "flight",
    "viaj",
    "turis",
  ],
  economia: [
    "econom",
    "yen",
    "bank of japan",
    "boj",
    "inflat",
    "trade",
    "market",
    "gdp",
    "rate",
    "stock",
    "wage",
  ],
  cultura: [
    "culture",
    "tradition",
    "festival",
    "food",
    "cafe",
    "café",
    // no "art" suelto: es prefijo de "artículo/article", presente en
    // casi cualquier pieza periodística sin relación con el arte.
    "artist",
    "temple",
    "shrine",
    "anime",
    "cultura",
  ],
  inmobiliaria: [
    "real estate",
    "property",
    "housing",
    "akiya",
    "apartment",
    "home price",
    "inmobiliar",
    "vivienda",
  ],
};

// Fuentes probadas y descartadas (dejarlo anotado para no repetir el
// trabajo de verificación):
// - MLIT y JNTO: candidatos naturales para inmobiliaria/turismo oficiales,
//   pero no exponen RSS público verificable a día de hoy.
// - Banco de Japón (whatsnew.xml): el feed existe, pero cada ítem enlaza a
//   un PDF/Excel sin resumen en el propio RSS — no hay texto real que
//   reescribir. Probado con 15 ítems reales, 0 aprovechables.
// - Japan Today y Tokyo Weekender: sus feeds devuelven 403 (bloqueo de
//   bot) a peticiones automatizadas — se pueden revisar más adelante.
// Por esto economía e inmobiliaria tienen menos fuentes que turismo/cultura;
// ambas siguen cubiertas por el pool fijo como red de seguridad.
