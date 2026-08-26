import { useParams, Navigate } from "react-router";
import { trpc } from "@/providers/trpc";
import PostCard from "@/components/PostCard";
import { CATEGORIES, categoryLabel } from "@/lib/categories";
import { Skeleton } from "@/components/ui/skeleton";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const isValid = CATEGORIES.some((c) => c.slug === slug);

  usePageMeta(
    isValid ? `${categoryLabel(slug!)} — Nippon Insider` : "Nippon Insider",
    isValid
      ? `Las entradas más recientes sobre ${categoryLabel(slug!).toLowerCase()} en Nippon Insider.`
      : undefined,
  );

  const { data: posts, isLoading } = trpc.posts.list.useQuery(
    { category: slug as "turismo" | "economia" | "cultura" | "inmobiliaria", limit: 6 },
    { enabled: isValid },
  );

  if (!isValid) return <Navigate to="/" replace />;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-serif text-4xl font-semibold text-sumi">
        {categoryLabel(slug!)}
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-sumi/60">
        Las entradas más recientes sobre {categoryLabel(slug!).toLowerCase()}.
      </p>

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
    </div>
  );
}
