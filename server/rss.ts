import { XMLParser } from "fast-xml-parser";

export interface RssItem {
  title: string;
  summary: string;
  link: string;
  pubDate?: string;
}

const parser = new XMLParser({
  ignoreAttributes: false,
  cdataPropName: "__cdata",
  textNodeName: "__text",
});

function textOf(node: unknown): string {
  if (node == null) return "";
  if (typeof node === "string") return node;
  if (typeof node === "object") {
    const obj = node as Record<string, unknown>;
    if (typeof obj.__cdata === "string") return obj.__cdata;
    if (typeof obj.__text === "string") return obj.__text;
  }
  return String(node);
}

function stripHtml(input: string): string {
  return input
    .replace(/<!\[CDATA\[|\]\]>/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function linkOf(node: unknown): string {
  // RSS 2.0: <link>texto</link>. Atom: <link href="..."/> (a veces varios).
  if (Array.isArray(node)) node = node[0];
  if (typeof node === "object" && node !== null && "@_href" in (node as object)) {
    return String((node as Record<string, unknown>)["@_href"]);
  }
  return textOf(node);
}

// Descarga y normaliza un feed RSS 2.0 o Atom. Nunca lanza en formato
// inesperado más allá de errores de red/HTTP: si el feed cambia de forma,
// simplemente devuelve menos ítems (o ninguno) en vez de romper la llamada.
export async function fetchRssItems(
  feedUrl: string,
  limit = 15,
): Promise<RssItem[]> {
  const res = await fetch(feedUrl, {
    headers: { "User-Agent": "NipponInsiderBot/1.0 (+content curation)" },
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) {
    throw new Error(`RSS ${feedUrl} respondió ${res.status}`);
  }
  const xml = await res.text();
  const data = parser.parse(xml) as Record<string, unknown>;

  const rss = data.rss as Record<string, unknown> | undefined;
  const channel = rss?.channel as Record<string, unknown> | undefined;
  const feed = data.feed as Record<string, unknown> | undefined;
  const rssItems = channel?.item;
  const atomEntries = feed?.entry;
  const rawItems: unknown[] = Array.isArray(rssItems)
    ? rssItems
    : rssItems
      ? [rssItems]
      : Array.isArray(atomEntries)
        ? atomEntries
        : atomEntries
          ? [atomEntries]
          : [];

  return rawItems
    .slice(0, limit)
    .map((item): RssItem => {
      const it = item as Record<string, unknown>;
      const title = stripHtml(textOf(it.title));
      const summarySource =
        it.description ?? it.summary ?? it["content:encoded"] ?? it.content;
      const summary = stripHtml(textOf(summarySource)).slice(0, 1200);
      const link = linkOf(it.link);
      const pubDate = textOf(it.pubDate ?? it.published ?? it.updated);
      return { title, summary, link, pubDate: pubDate || undefined };
    })
    .filter((item) => {
      if (!item.title || !item.link) return false;
      // Sin resumen real no hay nada que reescribir (frecuente en feeds
      // institucionales que enlazan directo a un PDF/Excel sin descripción).
      if (item.summary.length < 40) return false;
      // No es una página de artículo: hoja de cálculo, PDF, etc.
      if (/\.(pdf|xlsx?|csv|docx?|zip)(\?|$)/i.test(item.link)) return false;
      // Contenido patrocinado: no lo reescribimos como si fuera periodismo
      // independiente (se detecta en el título/resumen o en la propia URL,
      // ej. resources.realestate.co.jp/sponsored/...).
      if (/sponsored|patrocinad/i.test(`${item.title} ${item.summary} ${item.link}`)) {
        return false;
      }
      return true;
    });
}
