import { Hono } from "hono";
import { bodyLimit } from "hono/body-limit";
import type { HttpBindings } from "@hono/node-server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "./router";
import { createContext } from "./context";
import { env } from "./lib/env";
import { generatePost } from "./content-engine";

const app = new Hono<{ Bindings: HttpBindings }>();

app.use(bodyLimit({ maxSize: 50 * 1024 * 1024 }));

// ─────────────────────────────────────────────────────────────
// CRON: generación automática de artículos
// Equivalente a la API Route /api/cron/generate-post de Next.js.
// Configura un cron externo (Vercel Cron, GitHub Actions, cron del
// servidor) que haga GET/POST a esta URL con la cabecera:
//   Authorization: Bearer <CRON_SECRET>
// ─────────────────────────────────────────────────────────────
const cronHandler = async (c: {
  req: { header: (name: string) => string | undefined; query: (n: string) => string | undefined };
  json: (body: unknown, status?: number) => Response;
}) => {
  const secret = process.env.CRON_SECRET;
  const auth = c.req.header("authorization");
  if (secret && auth !== `Bearer ${secret}`) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  const category = c.req.query("category") as
    | "turismo"
    | "economia"
    | "cultura"
    | "inmobiliaria"
    | undefined;
  try {
    const post = await generatePost(category);
    return c.json({ ok: true, post });
  } catch (err) {
    return c.json({ ok: false, error: (err as Error).message }, 200);
  }
};
app.get("/api/cron/generate-post", cronHandler);
app.post("/api/cron/generate-post", cronHandler);

app.use("/api/trpc/*", async (c) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: c.req.raw,
    router: appRouter,
    createContext,
  });
});
app.all("/api/*", (c) => c.json({ error: "Not Found" }, 404));

export default app;

if (env.isProduction) {
  const { serve } = await import("@hono/node-server");
  const { serveStaticFiles } = await import("./lib/vite");
  const { registerSeoRoutes } = await import("./lib/seo-routes");
  const path = await import("path");

  registerSeoRoutes(app, path.resolve(import.meta.dirname, "../dist/public"));
  serveStaticFiles(app);

  const port = parseInt(process.env.PORT || "3000");
  serve({ fetch: app.fetch, port }, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}
