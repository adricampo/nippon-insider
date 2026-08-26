// ─────────────────────────────────────────────────────────────
// Registro central de prefecturas y regiones de Japón.
// Mismo patrón que affiliates.ts: registro estático compartido
// entre el mapa interactivo (Destinos) y su lista de respaldo.
//
// Solo datos geográficos estables (nombre, kanji, región, capital,
// ciudades principales) — sin contenido editorial "qué ver" por
// prefectura o ciudad, para no fabricar información turística sin
// verificar. Las páginas de ciudad son de navegación, no de guía.
//
// `code` coincide EXACTO con el data-code (sin padding) del SVG
// fuente (github.com/geolonia/japanese-prefectures), y `slug` con
// su className en inglés — no cambiar sin regenerar JapanMap.tsx.
// ─────────────────────────────────────────────────────────────

export type RegionSlug =
  | "hokkaido"
  | "tohoku"
  | "kanto"
  | "chubu"
  | "kinki"
  | "chugoku"
  | "shikoku"
  | "kyushu-okinawa";

export interface RegionDef {
  slug: RegionSlug;
  label: string;
  color: string;
}

export const REGIONS: Record<RegionSlug, RegionDef> = {
  hokkaido: { slug: "hokkaido", label: "Hokkaido", color: "#3d7a8c" },
  tohoku: { slug: "tohoku", label: "Tohoku", color: "#5b8c3d" },
  kanto: { slug: "kanto", label: "Kanto", color: "#b8934a" },
  chubu: { slug: "chubu", label: "Chubu", color: "#7a5c8c" },
  kinki: { slug: "kinki", label: "Kansai (Kinki)", color: "#8f1d22" },
  chugoku: { slug: "chugoku", label: "Chugoku", color: "#3d6b8c" },
  shikoku: { slug: "shikoku", label: "Shikoku", color: "#8c6b3d" },
  "kyushu-okinawa": {
    slug: "kyushu-okinawa",
    label: "Kyushu y Okinawa",
    color: "#4a8c6b",
  },
};

export const REGION_ORDER: RegionSlug[] = [
  "hokkaido",
  "tohoku",
  "kanto",
  "chubu",
  "kinki",
  "chugoku",
  "shikoku",
  "kyushu-okinawa",
];

export interface PrefectureDef {
  slug: string;
  code: string;
  name: string;
  kanji: string;
  region: RegionSlug;
  capital: string;
  // 2-3 ciudades o pueblos más reconocibles de la prefectura, para
  // navegar desde el panel de detalle del mapa. Solo nombres —
  // ninguna página de ciudad lleva descripción editorial en v1.
  cities: string[];
}

export const PREFECTURES: Record<string, PrefectureDef> = {
  hokkaido: { slug: "hokkaido", code: "1", name: "Hokkaido", kanji: "北海道", region: "hokkaido", capital: "Sapporo", cities: ["Sapporo", "Hakodate", "Otaru"] },
  aomori: { slug: "aomori", code: "2", name: "Aomori", kanji: "青森", region: "tohoku", capital: "Aomori", cities: ["Aomori", "Hirosaki", "Hachinohe"] },
  iwate: { slug: "iwate", code: "3", name: "Iwate", kanji: "岩手", region: "tohoku", capital: "Morioka", cities: ["Morioka", "Hiraizumi", "Tono"] },
  miyagi: { slug: "miyagi", code: "4", name: "Miyagi", kanji: "宮城", region: "tohoku", capital: "Sendai", cities: ["Sendai", "Matsushima", "Ishinomaki"] },
  akita: { slug: "akita", code: "5", name: "Akita", kanji: "秋田", region: "tohoku", capital: "Akita", cities: ["Akita", "Kakunodate", "Yokote"] },
  yamagata: { slug: "yamagata", code: "6", name: "Yamagata", kanji: "山形", region: "tohoku", capital: "Yamagata", cities: ["Yamagata", "Yonezawa", "Tsuruoka"] },
  fukushima: { slug: "fukushima", code: "7", name: "Fukushima", kanji: "福島", region: "tohoku", capital: "Fukushima", cities: ["Fukushima", "Aizuwakamatsu", "Iwaki"] },
  ibaraki: { slug: "ibaraki", code: "8", name: "Ibaraki", kanji: "茨城", region: "kanto", capital: "Mito", cities: ["Mito", "Tsukuba", "Hitachi"] },
  tochigi: { slug: "tochigi", code: "9", name: "Tochigi", kanji: "栃木", region: "kanto", capital: "Utsunomiya", cities: ["Utsunomiya", "Nikko", "Nasu"] },
  gunma: { slug: "gunma", code: "10", name: "Gunma", kanji: "群馬", region: "kanto", capital: "Maebashi", cities: ["Maebashi", "Takasaki", "Kusatsu"] },
  saitama: { slug: "saitama", code: "11", name: "Saitama", kanji: "埼玉", region: "kanto", capital: "Saitama", cities: ["Saitama", "Kawagoe", "Chichibu"] },
  chiba: { slug: "chiba", code: "12", name: "Chiba", kanji: "千葉", region: "kanto", capital: "Chiba", cities: ["Chiba", "Narita", "Urayasu"] },
  tokyo: { slug: "tokyo", code: "13", name: "Tokio", kanji: "東京", region: "kanto", capital: "Shinjuku (sede del gobierno metropolitano)", cities: ["Tokio", "Shinjuku", "Shibuya", "Asakusa"] },
  kanagawa: { slug: "kanagawa", code: "14", name: "Kanagawa", kanji: "神奈川", region: "kanto", capital: "Yokohama", cities: ["Yokohama", "Kamakura", "Hakone"] },
  niigata: { slug: "niigata", code: "15", name: "Niigata", kanji: "新潟", region: "chubu", capital: "Niigata", cities: ["Niigata", "Sado", "Echigo-Yuzawa"] },
  toyama: { slug: "toyama", code: "16", name: "Toyama", kanji: "富山", region: "chubu", capital: "Toyama", cities: ["Toyama", "Takaoka", "Gokayama"] },
  ishikawa: { slug: "ishikawa", code: "17", name: "Ishikawa", kanji: "石川", region: "chubu", capital: "Kanazawa", cities: ["Kanazawa", "Wajima", "Kaga"] },
  fukui: { slug: "fukui", code: "18", name: "Fukui", kanji: "福井", region: "chubu", capital: "Fukui", cities: ["Fukui", "Obama", "Tsuruga"] },
  yamanashi: { slug: "yamanashi", code: "19", name: "Yamanashi", kanji: "山梨", region: "chubu", capital: "Kofu", cities: ["Kofu", "Fujiyoshida", "Kawaguchiko"] },
  nagano: { slug: "nagano", code: "20", name: "Nagano", kanji: "長野", region: "chubu", capital: "Nagano", cities: ["Nagano", "Matsumoto", "Karuizawa"] },
  gifu: { slug: "gifu", code: "21", name: "Gifu", kanji: "岐阜", region: "chubu", capital: "Gifu", cities: ["Gifu", "Takayama", "Shirakawa-go"] },
  shizuoka: { slug: "shizuoka", code: "22", name: "Shizuoka", kanji: "静岡", region: "chubu", capital: "Shizuoka", cities: ["Shizuoka", "Atami", "Hamamatsu"] },
  aichi: { slug: "aichi", code: "23", name: "Aichi", kanji: "愛知", region: "chubu", capital: "Nagoya", cities: ["Nagoya", "Inuyama", "Toyota"] },
  mie: { slug: "mie", code: "24", name: "Mie", kanji: "三重", region: "kinki", capital: "Tsu", cities: ["Tsu", "Ise", "Toba"] },
  shiga: { slug: "shiga", code: "25", name: "Shiga", kanji: "滋賀", region: "kinki", capital: "Otsu", cities: ["Otsu", "Hikone", "Nagahama"] },
  kyoto: { slug: "kyoto", code: "26", name: "Kioto", kanji: "京都", region: "kinki", capital: "Kioto", cities: ["Kioto", "Uji", "Amanohashidate"] },
  osaka: { slug: "osaka", code: "27", name: "Osaka", kanji: "大阪", region: "kinki", capital: "Osaka", cities: ["Osaka", "Sakai", "Takatsuki"] },
  hyogo: { slug: "hyogo", code: "28", name: "Hyogo", kanji: "兵庫", region: "kinki", capital: "Kobe", cities: ["Kobe", "Himeji", "Awaji"] },
  nara: { slug: "nara", code: "29", name: "Nara", kanji: "奈良", region: "kinki", capital: "Nara", cities: ["Nara", "Yoshino", "Asuka"] },
  wakayama: { slug: "wakayama", code: "30", name: "Wakayama", kanji: "和歌山", region: "kinki", capital: "Wakayama", cities: ["Wakayama", "Koyasan", "Shirahama"] },
  tottori: { slug: "tottori", code: "31", name: "Tottori", kanji: "鳥取", region: "chugoku", capital: "Tottori", cities: ["Tottori", "Kurayoshi", "Yonago"] },
  shimane: { slug: "shimane", code: "32", name: "Shimane", kanji: "島根", region: "chugoku", capital: "Matsue", cities: ["Matsue", "Izumo", "Oda"] },
  okayama: { slug: "okayama", code: "33", name: "Okayama", kanji: "岡山", region: "chugoku", capital: "Okayama", cities: ["Okayama", "Kurashiki", "Tsuyama"] },
  hiroshima: { slug: "hiroshima", code: "34", name: "Hiroshima", kanji: "広島", region: "chugoku", capital: "Hiroshima", cities: ["Hiroshima", "Miyajima", "Onomichi"] },
  yamaguchi: { slug: "yamaguchi", code: "35", name: "Yamaguchi", kanji: "山口", region: "chugoku", capital: "Yamaguchi", cities: ["Yamaguchi", "Shimonoseki", "Hagi"] },
  tokushima: { slug: "tokushima", code: "36", name: "Tokushima", kanji: "徳島", region: "shikoku", capital: "Tokushima", cities: ["Tokushima", "Naruto", "Miyoshi"] },
  kagawa: { slug: "kagawa", code: "37", name: "Kagawa", kanji: "香川", region: "shikoku", capital: "Takamatsu", cities: ["Takamatsu", "Naoshima", "Kotohira"] },
  ehime: { slug: "ehime", code: "38", name: "Ehime", kanji: "愛媛", region: "shikoku", capital: "Matsuyama", cities: ["Matsuyama", "Uchiko", "Imabari"] },
  kochi: { slug: "kochi", code: "39", name: "Kochi", kanji: "高知", region: "shikoku", capital: "Kochi", cities: ["Kochi", "Shimanto", "Muroto"] },
  fukuoka: { slug: "fukuoka", code: "40", name: "Fukuoka", kanji: "福岡", region: "kyushu-okinawa", capital: "Fukuoka", cities: ["Fukuoka", "Kitakyushu", "Dazaifu"] },
  saga: { slug: "saga", code: "41", name: "Saga", kanji: "佐賀", region: "kyushu-okinawa", capital: "Saga", cities: ["Saga", "Arita", "Karatsu"] },
  nagasaki: { slug: "nagasaki", code: "42", name: "Nagasaki", kanji: "長崎", region: "kyushu-okinawa", capital: "Nagasaki", cities: ["Nagasaki", "Sasebo", "Hirado"] },
  kumamoto: { slug: "kumamoto", code: "43", name: "Kumamoto", kanji: "熊本", region: "kyushu-okinawa", capital: "Kumamoto", cities: ["Kumamoto", "Aso", "Kurokawa"] },
  oita: { slug: "oita", code: "44", name: "Oita", kanji: "大分", region: "kyushu-okinawa", capital: "Oita", cities: ["Oita", "Beppu", "Yufuin"] },
  miyazaki: { slug: "miyazaki", code: "45", name: "Miyazaki", kanji: "宮崎", region: "kyushu-okinawa", capital: "Miyazaki", cities: ["Miyazaki", "Nichinan", "Takachiho"] },
  kagoshima: { slug: "kagoshima", code: "46", name: "Kagoshima", kanji: "鹿児島", region: "kyushu-okinawa", capital: "Kagoshima", cities: ["Kagoshima", "Ibusuki", "Yakushima"] },
  okinawa: { slug: "okinawa", code: "47", name: "Okinawa", kanji: "沖縄", region: "kyushu-okinawa", capital: "Naha", cities: ["Naha", "Ishigaki", "Miyakojima"] },
};

export const PREFECTURE_SLUGS = Object.keys(PREFECTURES);

export function prefectureByCode(code: string): PrefectureDef | undefined {
  return Object.values(PREFECTURES).find((p) => p.code === code);
}

// Slug de URL para una ciudad (minúsculas, sin espacios ni acentos) —
// usado tanto para generar los enlaces desde PrefectureDetailPanel
// como para resolver el parámetro de ruta en la página de ciudad.
export function citySlug(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function findCity(
  prefSlug: string,
  cSlug: string,
): { prefecture: PrefectureDef; city: string } | undefined {
  const prefecture = PREFECTURES[prefSlug];
  if (!prefecture) return undefined;
  const city = prefecture.cities.find((c) => citySlug(c) === cSlug);
  return city ? { prefecture, city } : undefined;
}
