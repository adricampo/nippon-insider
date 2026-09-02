import { Link } from "react-router";
import { PREFECTURES, REGIONS, REGION_ORDER } from "@contracts/prefectures";

// Lista de respaldo, siempre visible (no oculta tras un toggle), agrupada
// por región y alfabética dentro de cada una. Dobla como leyenda de
// colores del mapa y como vía de selección accesible/táctil para cuando
// las formas del SVG son demasiado pequeñas para tocar con precisión.

interface PrefectureListFallbackProps {
  selectedSlug?: string;
  onSelect: (slug: string) => void;
}

export default function PrefectureListFallback({
  selectedSlug,
  onSelect,
}: PrefectureListFallbackProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {REGION_ORDER.map((regionSlug) => {
        const region = REGIONS[regionSlug];
        const prefs = Object.values(PREFECTURES)
          .filter((p) => p.region === regionSlug)
          .sort((a, b) => a.name.localeCompare(b.name, "es"));

        return (
          <section key={regionSlug}>
            <h3>
              <Link
                to={`/destinos/region/${regionSlug}`}
                className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-sumi/60 hover:text-aka"
              >
                <span
                  aria-hidden
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: region.color }}
                />
                {region.label}
              </Link>
            </h3>
            <ul className="mt-3 space-y-1">
              {prefs.map((pref) => (
                <li key={pref.slug}>
                  <button
                    type="button"
                    onClick={() => onSelect(pref.slug)}
                    aria-pressed={pref.slug === selectedSlug}
                    className={`text-sm transition-colors ${
                      pref.slug === selectedSlug
                        ? "font-semibold text-aka"
                        : "text-sumi/70 hover:text-aka"
                    }`}
                  >
                    {pref.name}
                  </button>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
