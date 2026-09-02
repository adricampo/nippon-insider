import { Link } from "react-router";
import { ChevronRight, X } from "lucide-react";
import { PREFECTURES, REGIONS, citySlug } from "@contracts/prefectures";

// Panel de detalle de la prefectura seleccionada. Sin contenido "qué
// ver" inventado por prefectura — solo los datos geográficos estables
// del registro, más las ciudades principales, cada una enlazando a su
// propia página de navegación dentro de /destinos. Se reutiliza tal
// cual en el panel fijo de escritorio y en el Drawer móvil de
// Destinos.tsx.

interface PrefectureDetailPanelProps {
  slug?: string;
  onClose?: () => void;
}

export default function PrefectureDetailPanel({
  slug,
  onClose,
}: PrefectureDetailPanelProps) {
  const pref = slug ? PREFECTURES[slug] : undefined;

  if (!pref) {
    return (
      <div className="rounded-lg border border-dashed border-sumi/20 p-6 text-center">
        <p className="font-serif text-lg text-sumi/60">
          Selecciona una prefectura
        </p>
        <p className="mt-1 text-sm text-sumi/50">
          En el mapa o en la lista de abajo.
        </p>
      </div>
    );
  }

  const region = REGIONS[pref.region];

  return (
    <div className="rounded-lg border border-sumi/10 bg-card p-6">
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="float-right text-sumi/40 hover:text-sumi"
        >
          <X className="h-4 w-4" />
        </button>
      )}
      <Link
        to={`/destinos/region/${pref.region}`}
        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] hover:underline"
        style={{ color: region.color }}
      >
        <span
          aria-hidden
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: region.color }}
        />
        {region.label}
      </Link>
      <h3 className="mt-2 font-serif text-3xl font-semibold text-sumi">
        {pref.name}{" "}
        <span className="text-xl font-normal text-sumi/40">
          {pref.kanji}
        </span>
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-sumi/65">
        Capital: <span className="font-medium text-sumi">{pref.capital}</span>
      </p>

      <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-sumi/40">
        Ciudades y pueblos
      </p>
      <ul className="mt-2 space-y-1">
        {pref.cities.map((city) => (
          <li key={city}>
            <Link
              to={`/destinos/${pref.slug}/${citySlug(city)}`}
              className="group flex items-center justify-between rounded-md px-2 py-1.5 -mx-2 text-sm text-sumi/80 transition-colors hover:bg-accent/50 hover:text-aka"
            >
              {city}
              <ChevronRight className="h-3.5 w-3.5 text-sumi/30 transition-transform group-hover:translate-x-0.5 group-hover:text-aka" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
