import { useParams, Link } from "react-router";
import { trpc } from "@/providers/trpc";
import ShortcodeRenderer from "@/components/ShortcodeRenderer";
import PostCard from "@/components/PostCard";
import AffiliateBanner from "@/components/affiliates/AffiliateBanner";
import ProductCard from "@/components/affiliates/ProductCard";
import { categoryLabel, categoryKanji } from "@/lib/categories";
import { Skeleton } from "@/components/ui/skeleton";
import { Clock, ArrowLeft, ExternalLink } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading } = trpc.posts.bySlug.useQuery(
    { slug: slug ?? "" },
    { enabled: !!slug },
  );
  const { data: related } = trpc.posts.related.useQuery(
    { slug: slug ?? "", limit: 3 },
    { enabled: !!slug },
  );

  usePageMeta(
    post ? `${post.title} — Nippon Insider` : "Nippon Insider",
    post?.excerpt,
  );

  if (isLoading) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="mt-4 h-5 w-1/2" />
        <Skeleton className="mt-10 h-96 w-full" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <p className="font-serif text-3xl text-sumi/60">Artículo no encontrado</p>
        <Link to="/" className="mt-4 inline-block text-aka underline">
          Volver a la portada
        </Link>
      </div>
    );
  }

  return (
    <article>
      {/* Cabecera del artículo */}
      <header className="border-b border-sumi/10 bg-accent/40">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm text-sumi/60 hover:text-aka"
          >
            <ArrowLeft className="h-4 w-4" /> Portada
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-sm bg-aka px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-washi">
              {categoryLabel(post.category)}
            </span>
            <span className="flex items-center gap-1 text-xs text-sumi/50">
              <Clock className="h-3.5 w-3.5" /> {post.readingMinutes} min de lectura
            </span>
          </div>
          <h1 className="mt-5 font-serif text-3xl font-semibold leading-tight text-sumi md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-sumi/65">
            {post.excerpt}
          </p>
          <div className="mt-6 flex items-center gap-3 border-t border-sumi/10 pt-5 text-sm text-sumi/55">
            <p>
              {new Date(post.publishedAt).toLocaleDateString("es-ES", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              {post.sourceName && (
                <>
                  {" · Fuente: "}
                  {post.sourceUrl ? (
                    <a
                      href={post.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-aka hover:underline"
                    >
                      {post.sourceName}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    post.sourceName
                  )}
                </>
              )}
            </p>
          </div>
        </div>
      </header>

      {/* Imagen de portada */}
      {post.coverImage && (
        <div className="mx-auto max-w-6xl px-4">
          <img
            src={post.coverImage}
            alt={post.title}
            className="mt-8 aspect-[2/1] w-full rounded-lg object-cover shadow-sm"
          />
        </div>
      )}

      {/* Cuerpo + sidebar */}
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[1fr_300px]">
        <div className="mx-auto w-full max-w-3xl">
          <ShortcodeRenderer content={post.content} />
        </div>

        {/* Sidebar de afiliados estáticos */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sumi/40">
              Recomendado
            </p>
            <SidebarBox>
              <AffiliateBanner code="BANNER_JRPASS" />
            </SidebarBox>
            <SidebarBox>
              <ProductCard code="PRODUCT_POCKET_WIFI" />
            </SidebarBox>
            <div className="rounded-lg border border-sumi/10 bg-accent/50 p-5 text-center">
              <span className="font-serif text-4xl text-aka/30">
                {categoryKanji(post.category)}
              </span>
              <p className="mt-2 text-xs leading-relaxed text-sumi/55">
                Los enlaces marcados son de afiliado: apoyas el blog sin coste
                adicional.
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* Relacionados */}
      {related && related.length > 0 && (
        <section className="border-t border-sumi/10 bg-accent/30">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="font-serif text-2xl font-semibold text-sumi">
              Sigue leyendo
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}

function SidebarBox({ children }: { children: React.ReactNode }) {
  // Los componentes de afiliado traen márgenes de flujo de lectura;
  // en el sidebar los compactamos.
  return <div className="[&_aside]:!my-0 [&_aside]:!shadow-none">{children}</div>;
}
