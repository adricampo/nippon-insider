import { Hono } from "hono";
import { bodyLimit } from "hono/body-limit";
import type { HttpBindings } from "@hono/node-server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "./router";
import { createContext } from "./context";
import { generatePost } from "./content-engine";

// Núcleo de la app: solo las rutas /api/*, sin nada específico de un
// entorno de hosting concreto. Dos puntos de entrada distintos la
// reutilizan:
//   - server/boot.ts   → proceso Node tradicional (Railway, Render, VPS...)
//   - api/index.ts     → función serverless de Vercel
export const app = new Hono<{ Bindings: HttpBindings }>();

app.use(bodyLimit({ maxSize: 50 * 1024 * 1024 }));

// ─────────────────────────────────────────────────────────────
// CRON: generación automática de artículos
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
