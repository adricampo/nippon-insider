import { Link, useNavigate, useSearchParams } from "react-router";
import { ArrowRight } from "lucide-react";
import { trpc } from "@/providers/trpc";
import PostCard from "@/components/PostCard";
import { CATEGORIES } from "@/lib/categories";
import { CATEGORY_META, CATEGORY_ORDER } from "@/lib/affiliateCategories";
import JapanMap from "@/components/destinos/JapanMap";
import { Skeleton } from "@/components/ui/skeleton";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Home() {
  usePageMeta(
    "Nippon Insider — Japón, desde dentro",
    "Blog en español sobre Japón: turismo, economía, cultura y mercado inmobiliario, con guías de viaje y un mapa interactivo de las 47 prefecturas.",
  );

  const navigate = useNavigate();
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-1600.jpg"
            srcSet="/images/hero-640.jpg 640w, /images/hero-1200.jpg 1200w, /images/hero-1600.jpg 1600w, /images/hero-2400.jpg 2400w"
            sizes="100vw"
            alt="Japón"
            fetchPriority="high"
            className="h-full w-full object-cover object-right sm:object-center"
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
            Turismo, economía, cultura y mercado inmobiliario, con guías de
            viaje y un mapa interactivo de las 47 prefecturas. Sin tópicos,
            con datos contrastados y guías pensadas para moverte con
            criterio.
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

      {/* Destinos: banda con el mapa interactivo real en miniatura */}
      <section className="bg-accent/40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-[1fr_1fr]">
          <div className="order-2 mx-auto w-full max-w-xs lg:order-1">
            <JapanMap onSelect={(slug) => navigate(`/destinos?pref=${slug}`)} />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <span className="font-serif text-3xl text-aka/30">地</span>
              <h2 className="font-serif text-3xl font-semibold text-sumi">
                Destinos
              </h2>
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-sumi/60">
              Las 47 prefecturas de Japón, agrupadas en sus 8 regiones
              tradicionales, con guías de sus ciudades y pueblos más
              importantes. Toca cualquier zona del mapa para empezar a
              explorar.
            </p>
            <Link
              to="/destinos"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-aka"
            >
              Explorar el mapa completo
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Filtro de categorías */}
      <section id="articulos" className="scroll-mt-20 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-12">
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
              {posts.map((post, i) =>
                i >= 3 ? (
                  <div key={post.id} className="hidden sm:block">
                    <PostCard post={post} />
                  </div>
                ) : (
                  <PostCard key={post.id} post={post} />
                ),
              )}
            </div>
          )}
        </div>
      </section>

      {/* Esenciales: banda con vista previa de las 7 categorías */}
      <section className="bg-accent/40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-serif text-3xl text-aka/30">要</span>
              <h2 className="font-serif text-3xl font-semibold text-sumi">
                Esenciales
              </h2>
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-sumi/60">
              Vuelos, alojamiento, transporte, seguro, conectividad, dinero y
              tours: lo que conviene resolver antes de salir, explicado
              categoría por categoría.
            </p>
            <Link
              to="/esenciales"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-aka"
            >
              Ver la guía completa
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {CATEGORY_ORDER.map((cat) => {
              const { label, icon: Icon } = CATEGORY_META[cat];
              return (
                <Link
                  key={cat}
                  to={`/esenciales#${cat}`}
                  className="group flex items-center gap-3 rounded-lg border border-sumi/15 bg-card px-4 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-aka hover:shadow-lg"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-aka/10 transition-colors group-hover:bg-aka">
                    <Icon className="h-5 w-5 text-aka transition-colors group-hover:text-washi" />
                  </span>
                  <span className="text-sm font-semibold text-sumi transition-colors group-hover:text-aka">
                    {label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
