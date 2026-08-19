import { useAuth } from "@/hooks/useAuth";
import { trpc } from "@/providers/trpc";
import { Button } from "@/components/ui/button";
import { CATEGORIES } from "@/lib/categories";
import { Bot, Loader2, RefreshCw, FileEdit } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

// Panel del motor editorial: genera artículos bajo demanda.
// El mismo motor corre de forma automática vía /api/cron/generate-post.
export default function Admin() {
  const { user, isLoading: authLoading } = useAuth({
    redirectOnUnauthenticated: true,
  });
  const utils = trpc.useUtils();
  const [lastResult, setLastResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { data: pool, refetch } = trpc.generate.poolStatus.useQuery(undefined, {
    enabled: user?.role === "admin",
    retry: false,
  });

  const { data: drafts, refetch: refetchDrafts } =
    trpc.posts.listDrafts.useQuery(undefined, {
      enabled: user?.role === "admin",
      retry: false,
    });

  const generate = trpc.generate.run.useMutation({
    onSuccess: async (post) => {
      setLastResult(post.slug);
      setError(null);
      await utils.posts.list.invalidate();
      refetch();
      refetchDrafts();
    },
    onError: (e) => {
      setError(e.message);
      setLastResult(null);
    },
  });

  const publish = trpc.posts.publish.useMutation({
    onSuccess: async () => {
      await utils.posts.list.invalidate();
      refetchDrafts();
    },
  });

  if (authLoading) {
    return <div className="mx-auto max-w-3xl px-4 py-24">Cargando…</div>;
  }

  if (user?.role !== "admin") {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <p className="font-serif text-3xl text-sumi/60">Acceso restringido</p>
        <p className="mt-2 text-sm text-sumi/50">
          El motor editorial solo está disponible para administradores.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-md bg-aka/10">
          <Bot className="h-6 w-6 text-aka" />
        </span>
        <div>
          <h1 className="font-serif text-3xl font-semibold text-sumi">
            Motor editorial automático
          </h1>
          <p className="text-sm text-sumi/55">
            Genera y publica artículos con la voz del "Expatriado de Tokio".
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-lg border border-sumi/15 bg-card p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-sumi/50">
          Generar ahora
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button
            onClick={() => generate.mutate({})}
            disabled={generate.isPending}
            className="bg-aka text-washi hover:bg-aka-dark"
          >
            {generate.isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <RefreshCw className="mr-2 h-4 w-4" />
            )}
            Categoría aleatoria
          </Button>
          {CATEGORIES.map((c) => (
            <Button
              key={c.slug}
              variant="outline"
              disabled={generate.isPending}
              onClick={() => generate.mutate({ category: c.slug })}
            >
              {c.label}
            </Button>
          ))}
        </div>

        {lastResult && (
          <p className="mt-4 rounded-md bg-amber-50 p-3 text-sm text-amber-800">
            Borrador creado, pendiente de revisión:{" "}
            <Link to={`/post/${lastResult}`} className="font-semibold underline">
              /post/{lastResult}
            </Link>
          </p>
        )}
        {error && (
          <p className="mt-4 rounded-md bg-red-50 p-3 text-sm text-red-700">
            {error}
          </p>
        )}
      </div>

      {drafts && (
        <div className="mt-6 rounded-lg border border-sumi/15 bg-card p-6">
          <div className="flex items-center gap-2">
            <FileEdit className="h-4 w-4 text-amber-600" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-sumi/50">
              Borradores pendientes de revisión ({drafts.length})
            </h2>
          </div>
          <ul className="mt-4 space-y-3">
            {drafts.map((d) => (
              <li
                key={d.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-md border border-sumi/10 p-3"
              >
                <div>
                  <Link
                    to={`/post/${d.slug}`}
                    className="text-sm font-semibold text-sumi hover:text-aka"
                  >
                    {d.title}
                  </Link>
                  <p className="text-xs text-sumi/50">{d.category}</p>
                </div>
                <Button
                  size="sm"
                  disabled={publish.isPending}
                  onClick={() => publish.mutate({ id: d.id })}
                  className="bg-aka text-washi hover:bg-aka-dark"
                >
                  Publicar
                </Button>
              </li>
            ))}
            {drafts.length === 0 && (
              <li className="text-sm text-sumi/50">
                No hay borradores pendientes.
              </li>
            )}
          </ul>
        </div>
      )}

      {pool && (
        <div className="mt-6 rounded-lg border border-sumi/15 bg-card p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sumi/50">
            Pool editorial ({pool.publicados}/{pool.total} publicados)
          </h2>
          <ul className="mt-4 space-y-2">
            {pool.pendientes.map((p) => (
              <li
                key={p.id}
                className="flex items-center justify-between gap-3 text-sm"
              >
                <span className="text-sumi/75">{p.headline}</span>
                <span className="shrink-0 rounded-full bg-sumi/5 px-2 py-0.5 text-xs text-sumi/55">
                  {p.category}
                </span>
              </li>
            ))}
            {pool.pendientes.length === 0 && (
              <li className="text-sm text-sumi/50">
                Pool agotado: todas las fuentes están publicadas.
              </li>
            )}
          </ul>
        </div>
      )}

      <div className="mt-6 rounded-lg border border-dashed border-sumi/20 p-6 text-sm leading-relaxed text-sumi/60">
        <p className="font-semibold text-sumi">Automatización (cron)</p>
        <p className="mt-2">
          Endpoint: <code className="rounded bg-sumi/5 px-1.5 py-0.5 text-xs">GET /api/cron/generate-post</code>{" "}
          con cabecera <code className="rounded bg-sumi/5 px-1.5 py-0.5 text-xs">Authorization: Bearer $CRON_SECRET</code>.
          Prográmalo con Vercel Cron, GitHub Actions o el cron del servidor
          para publicar automáticamente cada día.
        </p>
      </div>
    </div>
  );
}
