// Único archivo de esta carpeta a propósito: Vercel trata cualquier
// fichero dentro de /api como una función serverless independiente, así
// que el resto del backend vive en /server (un servidor Hono normal,
// reutilizado tal cual) y aquí solo se adapta para correr en Vercel.
// Ver vercel.json: restringe la detección de funciones a este archivo.
import { handle } from "hono/vercel";
import path from "path";
import { app } from "../server/app.js";
import { registerSeoRoutes, registerSpaFallback } from "../server/lib/seo-routes.js";

export const config = { runtime: "nodejs" };

const distPath = path.resolve(process.cwd(), "dist/public");
registerSeoRoutes(app, distPath);
registerSpaFallback(app, distPath);

export default handle(app);
