import { z } from "zod";
import { createRouter, publicQuery, adminQuery } from "./middleware";
import { getDb } from "./queries/connection";
import { posts } from "@db/schema";
import { and, desc, eq } from "drizzle-orm";

const categoryEnum = z.enum(["turismo", "economia", "cultura", "inmobiliaria"]);

export const postsRouter = createRouter({
  // Grid de portada: últimos posts publicados, con filtro opcional
  list: publicQuery
    .input(
      z
        .object({
          category: categoryEnum.optional(),
          limit: z.number().min(1).max(50).default(24),
        })
        .optional(),
    )
    .query(async ({ input }) => {
      const db = getDb();
      const conditions = [eq(posts.status, "publicado")];
      if (input?.category) conditions.push(eq(posts.category, input.category));
      return db
        .select()
        .from(posts)
        .where(and(...conditions))
        .orderBy(desc(posts.publishedAt))
        .limit(input?.limit ?? 24);
    }),

  // Post individual por slug. Los borradores solo son visibles para
  // administradores (revisión editorial antes de publicar).
  bySlug: publicQuery
    .input(z.object({ slug: z.string().min(1) }))
    .query(async ({ input, ctx }) => {
      const db = getDb();
      const post = await db.query.posts.findFirst({
        where: eq(posts.slug, input.slug),
      });
      if (!post) return null;
      if (post.status !== "publicado" && ctx.user?.role !== "admin") {
        return null;
      }
      return post;
    }),

  // Borradores pendientes de revisión (panel de administración)
  listDrafts: adminQuery.query(async () => {
    const db = getDb();
    return db
      .select()
      .from(posts)
      .where(eq(posts.status, "borrador"))
      .orderBy(desc(posts.createdAt));
  }),

  // Publica un borrador tras la revisión editorial
  publish: adminQuery
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = getDb();
      await db
        .update(posts)
        .set({ status: "publicado", publishedAt: new Date() })
        .where(eq(posts.id, input.id));
      return { ok: true };
    }),

  // Relacionados (misma categoría, excluye el actual)
  related: publicQuery
    .input(z.object({ slug: z.string().min(1), limit: z.number().default(3) }))
    .query(async ({ input }) => {
      const db = getDb();
      const current = await db.query.posts.findFirst({
        where: eq(posts.slug, input.slug),
      });
      if (!current) return [];
      const rows = await db
        .select()
        .from(posts)
        .where(
          and(
            eq(posts.category, current.category),
            eq(posts.status, "publicado"),
          ),
        )
        .orderBy(desc(posts.publishedAt))
        .limit(input.limit + 1);
      return rows.filter((p) => p.slug !== input.slug).slice(0, input.limit);
    }),
});
