import { useParams, Navigate, Link } from "react-router";
import { ChevronLeft, ChevronRight, Map, MapPin } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { findCity, citySlug, REGIONS } from "@contracts/prefectures";
import { CITY_GUIDES } from "@contracts/cityGuides";
import { CITY_GUIDE_IMAGES } from "@contracts/cityGuideImages.generated";
import ShortcodeRenderer from "@/components/ShortcodeRenderer";

// Página de ciudad/pueblo dentro de una prefectura. Si existe una guía
// en CITY_GUIDES (piloto de ~17 destinos), se renderiza contenido
// completo; si no, se mantiene la ficha ligera de siempre (ubicación +
// CTA genérico a turismo) — sin inventar contenido para el resto.

export default function DestinoCiudad() {
  const { prefSlug, citySlug: citySlugParam } = useParams<{
    prefSlug: string;
    citySlug: string;
  }>();

  const found = prefSlug && citySlugParam ? findCity(prefSlug, citySlugParam) : undefined;
  const guide = citySlugParam ? CITY_GUIDES[citySlugParam] : undefined;

  usePageMeta(
    found ? `${found.city} — Nippon Insider` : "Nippon Insider",
    found
      ? guide?.intro ??
          `${found.city}, en la prefectura de ${found.prefecture.name} (Japón).`
      : undefined,
  );

  if (!found) return <Navigate to="/destinos" replace />;

  const { prefecture, city } = found;
  const region = REGIONS[prefecture.region];
  const otherCities = prefecture.cities.filter((c) => c !== city);

  const coverImage = citySlugParam ? CITY_GUIDE_IMAGES[citySlugParam] : undefined;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${city}, ${prefecture.name}, Japón`,
  )}`;

  const relatedCityLinks = (guide?.relatedCities ?? [])
    .map((slug) => {
      const relatedGuide = CITY_GUIDES[slug];
      if (!relatedGuide) return undefined;
      const relatedFound = findCity(relatedGuide.prefectureSlug, slug);
      return relatedFound ? { slug, ...relatedFound } : undefined;
    })
    .filter((v): v is NonNullable<typeof v> => v !== undefined);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <nav className="flex items-center gap-1.5 text-xs text-sumi/50">
        <Link to="/destinos" className="hover:text-aka">
          Destinos
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link
          to={`/destinos?pref=${prefecture.slug}`}
          className="hover:text-aka"
        >
          {prefecture.name}
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-sumi/70">{city}</span>
      </nav>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_300px]">
        <div>
          <p
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: region.color }}
          >
            <span
              aria-hidden
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: region.color }}
            />
            {region.label} · {prefecture.name}
          </p>
          <h1 className="mt-2 font-serif text-4xl font-semibold text-sumi">
            {city}
          </h1>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-sumi/50 hover:text-aka"
          >
            <MapPin className="h-3.5 w-3.5" />
            Ver ubicación y cómo llegar en Google Maps
          </a>

          {guide ? (
            <div className="max-w-2xl">
              {coverImage && (
                <img
                  src={coverImage}
                  alt={city}
                  className="mt-6 aspect-[2/1] w-full rounded-lg object-cover shadow-sm"
                />
              )}
              <p className="mt-6 text-sm leading-relaxed text-sumi/70">
                {guide.intro}
              </p>
              <ShortcodeRenderer content={guide.content} simpleMobileCards />

              {(relatedCityLinks.length > 0 ||
                (guide.relatedPosts?.length ?? 0) > 0) && (
                <div className="mt-10 border-t border-sumi/10 pt-8">
                  <p className="text-xs font-semibold uppercase tracking-wide text-sumi/40">
                    También te puede interesar
                  </p>
                  <ul className="mt-3 space-y-2">
                    {relatedCityLinks.map((rc) => (
                      <li key={rc.slug}>
                        <Link
                          to={`/destinos/${rc.prefecture.slug}/${rc.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-medium text-aka hover:underline"
                        >
                          {rc.city}
                          <span className="font-normal text-sumi/50">
                            — {rc.prefecture.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                    {guide.relatedPosts?.map((p) => (
                      <li key={p.slug}>
                        <Link
                          to={`/post/${p.slug}`}
                          className="text-sm font-medium text-aka hover:underline"
                        >
                          {p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-sumi/60">
                {city} está en la prefectura de {prefecture.name} (
                {prefecture.kanji}), cuya capital es {prefecture.capital}.
                Todavía no tenemos una guía propia de {city} — mientras
                tanto, puedes ver los artículos de turismo del blog.
              </p>

              <Link
                to="/categoria/turismo"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-aka hover:underline"
              >
                Ver artículos de turismo
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </>
          )}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg border border-sumi/10 bg-card p-5">
            {otherCities.length > 0 && (
              <>
                <p className="text-xs font-semibold uppercase tracking-wide text-sumi/40">
                  También en {prefecture.name}
                </p>
                <ul className="mt-2 space-y-1">
                  {otherCities.map((c) => (
                    <li key={c}>
                      <Link
                        to={`/destinos/${prefecture.slug}/${citySlug(c)}`}
                        className="text-sm text-sumi/70 hover:text-aka"
                      >
                        {c}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 border-t border-sumi/10 pt-4" />
              </>
            )}
            <Link
              to={`/destinos?pref=${prefecture.slug}`}
              className="inline-flex items-center gap-1.5 text-sm text-sumi/60 hover:text-aka"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              <Map className="h-3.5 w-3.5" />
              Volver al mapa
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
