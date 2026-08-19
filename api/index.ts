// Único archivo de esta carpeta a propósito: Vercel trata cualquier
// fichero dentro de /api como una función serverless independiente, así
// que el resto del backend vive en /server (un servidor Hono normal,
// reutilizado tal cual) y aquí solo se adapta para correr en Vercel.
// Ver vercel.json: restringe la detección de funciones a este archivo.
import path from "path";
import { app } from "../server/app.js";
import { registerSeoRoutes, registerSpaFallback } from "../server/lib/seo-routes.js";

export const config = { runtime: "nodejs" };

const distPath = path.resolve(process.cwd(), "dist/public");
registerSeoRoutes(app, distPath);
registerSpaFallback(app, distPath);

// Vercel solo reconoce el handler "Web Standard" si el default export es un
// objeto con método `fetch` (ver docs.vercel.com/functions/functions-api-reference
// → "fetch Web Standard Handler"). El adaptador hono/vercel exporta una
// función pelada `(req) => Response`, que Vercel NO reconoce como tal y cae
// al modo Node legado `(req, res)` — ahí la Response se descarta en
// silencio (visto en los runtime logs: "default export returned a
// `Response`... returns are ignored").
export default {
  fetch: (request: Request) => app.fetch(request),
};
