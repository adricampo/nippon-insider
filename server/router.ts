import { authRouter } from "./auth-router.js";
import { postsRouter } from "./posts-router.js";
import { generateRouter } from "./generate-router.js";
import { createRouter, publicQuery } from "./middleware.js";

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),
  auth: authRouter,
  posts: postsRouter,
  generate: generateRouter,
});

export type AppRouter = typeof appRouter;
