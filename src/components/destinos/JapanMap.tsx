import type { CSSProperties } from "react";
import { useState } from "react";
import { PREFECTURES, REGIONS } from "@contracts/prefectures";
import { JAPAN_MAP_PATHS } from "./japanMapData.generated";

// Mapa SVG interactivo de las 47 prefecturas, construido a partir de
// scripts/build-japan-map.ts (github.com/geolonia/japanese-prefectures,
// GFDL). Un único listener de click/teclado/hover en el <svg> resuelve
// la prefectura vía delegación de eventos (data-slug), en vez de 47
// handlers individuales.

const SVG_MAP_TRANSFORM =
  "matrix(1.028807, 0, 0, 1.028807, -47.544239, -28.806583)";
const PREFECTURES_TRANSFORM = "matrix(1, 0, 0, 1, 6, 18)";

interface JapanMapProps {
  selectedSlug?: string;
  onSelect: (slug: string) => void;
  className?: string;
}

function resolveSlug(target: EventTarget | null): string | undefined {
  if (!(target instanceof Element)) return undefined;
  return target.closest("[data-slug]")?.getAttribute("data-slug") ?? undefined;
}

export default function JapanMap({
  selectedSlug,
  onSelect,
  className,
}: JapanMapProps) {
  const [hoveredSlug, setHoveredSlug] = useState<string | undefined>();
  const [focusedSlug, setFocusedSlug] = useState<string | undefined>();

  function handleClick(e: React.MouseEvent<SVGSVGElement>) {
    const slug = resolveSlug(e.target);
    if (slug) onSelect(slug);
  }

  function handleKeyDown(e: React.KeyboardEvent<SVGSVGElement>) {
    if (e.key !== "Enter" && e.key !== " ") return;
    const slug = resolveSlug(e.target);
    if (!slug) return;
    e.preventDefault();
    onSelect(slug);
  }

  function getGroupStyle(slug: string): CSSProperties {
    const pref = PREFECTURES[slug];
    const region = pref ? REGIONS[pref.region] : undefined;
    const baseFill = region?.color ?? "#cccccc";
    const isSelected = slug === selectedSlug;
    const isActive = isSelected || slug === hoveredSlug || slug === focusedSlug;

    return {
      fill: isSelected ? "#8f1d22" : baseFill,
      fillOpacity: isActive ? 1 : 0.55,
      stroke: isSelected ? "#180c04" : undefined,
      strokeWidth: isSelected ? 2 : undefined,
      cursor: "pointer",
      transition: "fill-opacity 150ms ease, fill 150ms ease",
      outline: "none",
    };
  }

  return (
    <div className={className}>
      <p id="japan-map-instructions" className="sr-only">
        Usa Tab para moverte entre prefecturas e Intro o Espacio para
        seleccionar una. También puedes usar la lista de más abajo.
      </p>
      <svg
        viewBox="0 0 1000 1000"
        role="group"
        aria-label="Mapa de las 47 prefecturas de Japón"
        aria-describedby="japan-map-instructions"
        className="h-auto w-full"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseOver={(e) => setHoveredSlug(resolveSlug(e.target))}
        onMouseOut={() => setHoveredSlug(undefined)}
        onFocus={(e) => setFocusedSlug(resolveSlug(e.target))}
        onBlur={() => setFocusedSlug(undefined)}
      >
        <g transform={SVG_MAP_TRANSFORM}>
          <g
            transform={PREFECTURES_TRANSFORM}
            strokeLinejoin="round"
            fillRule="nonzero"
            stroke="#334155"
            strokeOpacity={0.3}
            strokeWidth={0.75}
          >
            {JAPAN_MAP_PATHS.map((pref) => {
              const def = PREFECTURES[pref.slug];
              return (
                <g
                  key={pref.slug}
                  data-slug={pref.slug}
                  transform={pref.transform}
                  tabIndex={0}
                  role="button"
                  aria-label={
                    def
                      ? `${def.name} (${def.kanji}) — región ${REGIONS[def.region].label}`
                      : pref.slug
                  }
                  aria-pressed={pref.slug === selectedSlug}
                  style={getGroupStyle(pref.slug)}
                >
                  {pref.shapes.map((shape, i) =>
                    shape.kind === "polygon" ? (
                      <polygon key={i} points={shape.points} />
                    ) : (
                      <path key={i} d={shape.d} />
                    ),
                  )}
                </g>
              );
            })}
          </g>
        </g>
      </svg>
    </div>
  );
}
