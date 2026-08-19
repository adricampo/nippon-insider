import { app } from "./app";
import { env } from "./lib/env";

// Punto de entrada para hosting Node tradicional (Railway, Render, un VPS
// con `npm start`...): un proceso persistente que sirve la API y los
// estáticos generados por `vite build`. En Vercel no se usa este archivo
// — ver api/index.ts, que reutiliza el mismo `app` como función serverless.
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
