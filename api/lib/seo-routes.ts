import type { Hono } from "hono";
import type { HttpBindings } from "@hono/node-server";
import type { Context } from "hono";
import fs from "fs";
import path from "path";
import { eq, and, desc } from "drizzle-orm";
import { getDb } from "../queries/connection";
import { posts } from "@db/schema";
import { injectMeta } from "./seo";

type App = Hono<{ Bindings: HttpBindings }>;

const CATEGORY_LABELS: Record<string, string> = {
  turismo: "Turismo",
  economia: "Economía",
  cultura: "Cultura",
  inmobiliaria: "Inmobiliaria",
};

const STATIC_PATHS = [
  "",
  "/categoria/turismo",
  "/categoria/economia",
  "/categoria/cultura",
  "/categoria/inmobiliaria",
  "/privacidad",
  "/aviso-legal",
];

function siteUrl(c: Context): string {
  const host = c.req.header("host") ?? "localhost";
  const proto = c.req.header("x-forwarded-proto") ?? "https";
  return `${proto}://${host}`;
}

// Registra las rutas de SEO (metadatos por página, sitemap, robots.txt).
// Debe llamarse ANTES de montar el servidor de estáticos, para que estas
// rutas intercepten la petición en vez de caer al index.html sin más.
export function registerSeoRoutes(app: App, distPath: string) {
  const readIndexHtml = () =>
    fs.readFileSync(path.resolve(distPath, "index.html"), "utf-8");

  app.get("/post/:slug", async (c) => {
    const db = getDb();
    const post = await db.query.posts.findFirst({
      where: and(
        eq(posts.slug, c.req.param("slug")),
        eq(posts.status, "publicado"),
      ),
    });
    const html = readIndexHtml();
    if (!post) return c.html(html, 404);
    return c.html(
      injectMeta(html, {
        title: `${post.title} — Nippon Insider`,
        description: post.excerpt,
        url: `${siteUrl(c)}/post/${post.slug}`,
        image: post.coverImage,
        type: "article",
      }),
    );
  });

  app.get("/categoria/:slug", (c) => {
    const slug = c.req.param("slug");
    const label = CATEGORY_LABELS[slug];
    const html = readIndexHtml();
    if (!label) return c.html(html, 404);
    return c.html(
      injectMeta(html, {
        title: `${label} — Nippon Insider`,
        description: `Las entradas más recientes sobre ${label.toLowerCase()} en Nippon Insider.`,
        url: `${siteUrl(c)}/categoria/${slug}`,
      }),
    );
  });

  app.get("/sitemap.xml", async (c) => {
    const db = getDb();
    const rows = await db
      .select({ slug: posts.slug, publishedAt: posts.publishedAt })
      .from(posts)
      .where(eq(posts.status, "publicado"))
      .orderBy(desc(posts.publishedAt));

    const base = siteUrl(c);
    const urls = [
      ...STATIC_PATHS.map((p) => `  <url><loc>${base}${p}</loc></url>`),
      ...rows.map(
        (r) =>
          `  <url><loc>${base}/post/${r.slug}</loc><lastmod>${new Date(r.publishedAt).toISOString()}</lastmod></url>`,
      ),
    ].join("\n");

    return c.text(
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      200,
      { "Content-Type": "application/xml; charset=utf-8" },
    );
  });

  app.get("/robots.txt", (c) => {
    return c.text(
      `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl(c)}/sitemap.xml\n`,
    );
  });
}
