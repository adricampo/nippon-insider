import { z } from "zod";
import { createRouter, adminQuery } from "./middleware";
import { generatePost, listPoolStatus } from "./content-engine";

// Motor de generación: solo administradores desde la UI.
// El cron externo (Vercel Cron / GitHub Actions / cron del servidor)
// llama al endpoint HTTP /api/cron/generate-post (ver server/app.ts).
export const generateRouter = createRouter({
  run: adminQuery
    .input(
      z
        .object({
          category: z
            .enum(["turismo", "economia", "cultura", "inmobiliaria"])
            .optional(),
        })
        .optional(),
    )
    .mutation(async ({ input }) => {
      return generatePost(input?.category);
    }),

  poolStatus: adminQuery.query(() => listPoolStatus()),
});
