// Inyecta metadatos específicos de página en el index.html estático antes
// de servirlo. Necesario porque el sitio es una SPA: sin esto, un
// crawler que no ejecuta JS (Twitter, Facebook, WhatsApp, Slack...) solo
// ve el <title>/<meta> genéricos del HTML base, nunca los del post o
// categoría concretos. Google sí ejecuta JS y ya recibe el valor correcto
// vía usePageMeta() en el cliente, pero esto lo cubre también a él sin
// depender de ello.
export interface PageMeta {
  title: string;
  description: string;
  url: string;
  image?: string | null;
  type?: "website" | "article";
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function injectMeta(html: string, meta: PageMeta): string {
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const image = meta.image ? escapeHtml(meta.image) : undefined;

  let out = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
  out = out.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${description}" />`,
  );
  out = out.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${title}" />`,
  );
  out = out.replace(
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${description}" />`,
  );
  out = out.replace(
    /<meta property="og:type" content="[^"]*"\s*\/?>/,
    `<meta property="og:type" content="${meta.type ?? "website"}" />`,
  );

  const extraTags = [
    `<meta property="og:url" content="${escapeHtml(meta.url)}" />`,
    image ? `<meta property="og:image" content="${image}" />` : "",
    image ? `<meta name="twitter:card" content="summary_large_image" />` : "",
    image ? `<meta name="twitter:image" content="${image}" />` : "",
  ]
    .filter(Boolean)
    .join("\n    ");

  return out.replace("</head>", `    ${extraTags}\n  </head>`);
}
