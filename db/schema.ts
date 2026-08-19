import {
  pgTable,
  pgEnum,
  serial,
  varchar,
  text,
  timestamp,
  bigint,
  boolean,
  integer,
  index,
} from "drizzle-orm/pg-core";

export const userRoleEnum = pgEnum("user_role", ["user", "admin"]);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  unionId: varchar("unionId", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 320 }),
  avatar: text("avatar"),
  role: userRoleEnum("role").default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
  lastSignInAt: timestamp("lastSignInAt").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// ─────────────────────────────────────────────────────────────
// POSTS — contenido del blog (generado automáticamente o manual)
// ─────────────────────────────────────────────────────────────
export const postCategoryEnum = pgEnum("post_category", [
  "turismo",
  "economia",
  "cultura",
  "inmobiliaria",
]);
export const postStatusEnum = pgEnum("post_status", ["borrador", "publicado"]);

export const posts = pgTable(
  "posts",
  {
    id: serial("id").primaryKey(),
    slug: varchar("slug", { length: 255 }).notNull().unique(),
    title: varchar("title", { length: 500 }).notNull(),
    excerpt: text("excerpt").notNull(),
    // Contenido en formato texto enriquecido con shortcodes de afiliados:
    // [BANNER_JRPASS], [PRODUCT_POCKET_WIFI], [CTA_PREMIUM], etc.
    content: text("content").notNull(),
    category: postCategoryEnum("category").notNull(),
    coverImage: varchar("coverImage", { length: 500 }),
    // Paywall: true = requiere suscripción activa para leer completo
    isPremium: boolean("isPremium").default(false).notNull(),
    status: postStatusEnum("status").default("publicado").notNull(),
    // Trazabilidad de la fuente original (RSS / NewsAPI)
    sourceName: varchar("sourceName", { length: 255 }),
    sourceUrl: varchar("sourceUrl", { length: 500 }),
    readingMinutes: integer("readingMinutes").default(4).notNull(),
    publishedAt: timestamp("publishedAt").defaultNow().notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (table) => ({
    categoryIdx: index("posts_category_idx").on(table.category),
    statusIdx: index("posts_status_idx").on(table.status),
    publishedIdx: index("posts_published_idx").on(table.publishedAt),
  }),
);

export type Post = typeof posts.$inferSelect;
export type InsertPost = typeof posts.$inferInsert;

// ─────────────────────────────────────────────────────────────
// SUBSCRIPTIONS — estado de suscripción por usuario
// Preparado para Stripe: stripeCustomerId / stripeSubscriptionId
// se rellenan desde el webhook /api/webhooks/stripe
// ─────────────────────────────────────────────────────────────
export const subscriptionPlanEnum = pgEnum("subscription_plan", ["mensual", "anual"]);
export const subscriptionStatusEnum = pgEnum("subscription_status", [
  "activa",
  "cancelada",
  "vencida",
  "pendiente",
]);

export const subscriptions = pgTable(
  "subscriptions",
  {
    id: serial("id").primaryKey(),
    userId: bigint("userId", { mode: "number" })
      .notNull()
      .references(() => users.id),
    plan: subscriptionPlanEnum("plan").notNull(),
    status: subscriptionStatusEnum("status").default("pendiente").notNull(),
    stripeCustomerId: varchar("stripeCustomerId", { length: 255 }),
    stripeSubscriptionId: varchar("stripeSubscriptionId", { length: 255 }),
    currentPeriodEnd: timestamp("currentPeriodEnd"),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt")
      .defaultNow()
      .notNull()
      .$onUpdate(() => new Date()),
  },
  (table) => ({
    userIdx: index("subs_user_idx").on(table.userId),
    stripeSubIdx: index("subs_stripe_idx").on(table.stripeSubscriptionId),
  }),
);

export type Subscription = typeof subscriptions.$inferSelect;
export type InsertSubscription = typeof subscriptions.$inferInsert;
