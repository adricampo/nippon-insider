import { useSearchParams } from "react-router";
import { trpc } from "@/providers/trpc";
import PostCard from "@/components/PostCard";
import { CATEGORIES } from "@/lib/categories";
import { Skeleton } from "@/components/ui/skeleton";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Home() {
  usePageMeta(
    "Nippon Insider — Japón, desde dentro",
    "Blog en español sobre Japón: turismo, economía, cultura y mercado inmobiliario, escrito por un expatriado en Tokio.",
  );

  const [params, setParams] = useSearchParams();
  const cat = params.get("cat") ?? undefined;

  const { data: posts, isLoading } = trpc.posts.list.useQuery(
    cat
      ? { category: cat as "turismo" | "economia" | "cultura" | "inmobiliaria", limit: 6 }
      : { limit: 6 },
  );

  return (
    <div>
      {/* Hero editorial */}
      <section className="relative overflow-hidden border-b border-sumi/10">
        <div className="absolute inset-0">
          <img
            src="/images/hero-1600.jpg"
            srcSet="/images/hero-640.jpg 640w, /images/hero-1200.jpg 1200w, /images/hero-1600.jpg 1600w, /images/hero-2400.jpg 2400w"
            sizes="100vw"
            alt="Japón"
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sumi/85 via-sumi/60 to-sumi/30" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-kin">
            日本 — Blog en español
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight text-washi md:text-6xl">
            Japón, contado desde dentro.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-washi/80 md:text-lg">
            Turismo, economía, cultura y mercado inmobiliario. Sin tópicos,
            con datos contrastados y diez años de vida en Tokio a la espalda.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#articulos"
              className="rounded-md bg-aka px-6 py-3 text-sm font-semibold text-washi transition-colors hover:bg-aka-dark"
            >
              Leer los artículos
            </a>
          </div>
        </div>
      </section>

      {/* Filtro de categorías */}
      <section id="articulos" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setParams({})}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              !cat
                ? "border-aka bg-aka text-washi"
                : "border-sumi/20 text-sumi/70 hover:border-aka hover:text-aka"
            }`}
          >
            Todos
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.slug}
              onClick={() => setParams({ cat: c.slug })}
              className={`flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm transition-colors ${
                cat === c.slug
                  ? "border-aka bg-aka text-washi"
                  : "border-sumi/20 text-sumi/70 hover:border-aka hover:text-aka"
              }`}
            >
              <span className="font-serif">{c.kanji}</span> {c.label}
            </button>
          ))}
        </div>

        {/* Grid de posts */}
        {isLoading ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-80 rounded-lg" />
            ))}
          </div>
        ) : !posts || posts.length === 0 ? (
          <div className="mt-16 rounded-lg border border-dashed border-sumi/20 p-16 text-center">
            <p className="font-serif text-2xl text-sumi/60">
              Aún no hay artículos en esta sección
            </p>
            <p className="mt-2 text-sm text-sumi/50">
              El motor editorial publica nuevos artículos periódicamente.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
