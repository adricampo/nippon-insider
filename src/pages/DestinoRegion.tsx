import { useParams, Navigate, Link } from "react-router";
import { ChevronRight, Map } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PREFECTURES, REGIONS, REGION_ORDER, type RegionSlug } from "@contracts/prefectures";
import { REGION_GUIDES } from "@contracts/regionGuides";
import { REGION_GUIDE_IMAGES } from "@contracts/regionGuideImages.generated";
import { CITY_GUIDES } from "@contracts/cityGuides";
import { CITY_GUIDE_IMAGES } from "@contracts/cityGuideImages.generated";
import { findCity } from "@contracts/prefectures";
import ShortcodeRenderer from "@/components/ShortcodeRenderer";

// Página de una de las 8 regiones tradicionales de Japón. El listado de
// prefecturas se calcula aquí a partir de PREFECTURES (mismo filtro que
// ya usa PrefectureListFallback.tsx) — no se escribe a mano en
// contracts/regionGuides.ts, para no duplicar datos que ya existen.

export default function DestinoRegion() {
  const { regionSlug } = useParams<{ regionSlug: string }>();

  const isValidRegion = (s: string | undefined): s is RegionSlug =>
    !!s && (REGION_ORDER as string[]).includes(s);

  if (!isValidRegion(regionSlug)) {
    return <Navigate to="/destinos" replace />;
  }

  const region = REGIONS[regionSlug];
  const guide = REGION_GUIDES[regionSlug];
  const coverImage = REGION_GUIDE_IMAGES[regionSlug];

  usePageMeta(
    `${region.label} — Nippon Insider`,
    guide.intro,
  );

  const prefecturesInRegion = Object.values(PREFECTURES)
    .filter((p) => p.region === regionSlug)
    .sort((a, b) => a.name.localeCompare(b.name, "es"));

  const mustSeeCities = guide.mustSeeCities
    .map((slug) => {
      const cityGuide = CITY_GUIDES[slug];
      if (!cityGuide) return undefined;
      const found = findCity(cityGuide.prefectureSlug, slug);
      return found ? { slug, ...found } : undefined;
    })
    .filter((v): v is NonNullable<typeof v> => v !== undefined);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <nav className="flex items-center gap-1.5 text-xs text-sumi/50">
        <Link to="/destinos" className="hover:text-aka">
          Destinos
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-sumi/70">{region.label}</span>
      </nav>

      <div className="mt-6 max-w-3xl">
        <p
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: region.color }}
        >
          <span
            aria-hidden
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: region.color }}
          />
          Región
        </p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-sumi">
          {region.label}
        </h1>

        {coverImage && (
          <img
            src={coverImage}
            alt={region.label}
            className="mt-6 aspect-[2/1] w-full rounded-lg object-cover shadow-sm"
          />
        )}

        <p className="mt-6 text-sm leading-relaxed text-sumi/70">
          {guide.intro}
        </p>

        <ShortcodeRenderer content={guide.content} />
      </div>

      <div className="mt-12 border-t border-sumi/10 pt-10">
        <h2 className="font-serif text-2xl font-semibold text-sumi">
          Prefecturas de {region.label}
        </h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {prefecturesInRegion.map((pref) => (
            <Link
              key={pref.slug}
              to={`/destinos?pref=${pref.slug}`}
              className="group flex items-center justify-between rounded-lg border border-sumi/10 bg-card px-4 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span>
                <span className="block text-sm font-semibold text-sumi group-hover:text-aka">
                  {pref.name}
                </span>
                <span className="block text-xs text-sumi/50">
                  Capital: {pref.capital}
                </span>
              </span>
              <ChevronRight className="h-4 w-4 shrink-0 text-sumi/30 transition-transform group-hover:translate-x-0.5 group-hover:text-aka" />
            </Link>
          ))}
        </div>
      </div>

      {mustSeeCities.length > 0 && (
        <div className="mt-12 border-t border-sumi/10 pt-10">
          <h2 className="font-serif text-2xl font-semibold text-sumi">
            Destinos imprescindibles
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mustSeeCities.map((c) => (
              <Link
                key={c.slug}
                to={`/destinos/${c.prefecture.slug}/${c.slug}`}
                className="group overflow-hidden rounded-lg border border-sumi/10 bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                {CITY_GUIDE_IMAGES[c.slug] ? (
                  <img
                    src={CITY_GUIDE_IMAGES[c.slug]}
                    alt={c.city}
                    className="aspect-[3/2] w-full object-cover"
                  />
                ) : (
                  <div className="flex aspect-[3/2] w-full items-center justify-center bg-accent/60 font-serif text-3xl text-aka/30">
                    地
                  </div>
                )}
                <div className="p-3">
                  <span className="block text-sm font-semibold text-sumi transition-colors group-hover:text-aka">
                    {c.city}
                  </span>
                  <span className="block text-xs text-sumi/50">
                    {c.prefecture.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12 border-t border-sumi/10 pt-8">
        <Link
          to="/destinos"
          className="inline-flex items-center gap-1.5 text-sm text-sumi/60 hover:text-aka"
        >
          <Map className="h-3.5 w-3.5" />
          Volver al mapa
        </Link>
      </div>
    </div>
  );
}
