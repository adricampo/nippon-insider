import { authRouter } from "./auth-router";
import { postsRouter } from "./posts-router";
import { generateRouter } from "./generate-router";
import { createRouter, publicQuery } from "./middleware";

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),
  auth: authRouter,
  posts: postsRouter,
  generate: generateRouter,
});

export type AppRouter = typeof appRouter;
