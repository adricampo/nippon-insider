import { ExternalLink } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { trackAffiliateClick } from "@/lib/affiliateTracking";
import {
  CATEGORY_META,
  CATEGORY_ORDER,
  pickByCategory,
} from "@/lib/affiliateCategories";
import type { AffiliateCategory } from "@contracts/affiliates";

// Versión editorial a página completa de lo que ResourceBox resume en un
// widget compacto dentro de los posts: un párrafo explicativo genérico
// por categoría de logística de viaje (apoyado en lo que ya afirma cada
// AffiliateDef.description, sin inventar datos nuevos), seguido de la
// recomendación elegida por pickByCategory().

const CATEGORY_COPY: Record<AffiliateCategory, string> = {
  vuelos:
    "Desde España no suele haber vuelos directos a Japón: lo habitual es una escala en Oriente Medio, Europa o Asia. Comparar varias fechas y aerolíneas con antelación es la forma más sencilla de encontrar una tarifa razonable.",
  alojamiento:
    "El abanico va de hostales y business hotels muy ajustados de espacio a ryokan tradicionales con onsen incluido. Reservar con cancelación gratuita ayuda a mantener flexibilidad si el itinerario cambia sobre la marcha.",
  transporte:
    "La red de trenes japonesa es extensa y puntual, con el shinkansen como columna vertebral entre ciudades. Para trayectos largos conviene comparar el coste de un pase de tren frente a billetes sueltos; para el día a día en ciudad, una tarjeta IC (Suica, Pasmo) evita colas en las máquinas expendedoras.",
  seguro:
    "La sanidad privada en Japón es de gran calidad pero puede ser cara para quien no tiene cobertura: un seguro de viaje con asistencia médica es una de las partidas que más tranquilidad da por lo poco que suele costar en proporción.",
  conectividad:
    "Tener datos desde que aterrizas evita depender del wifi de cada alojamiento o cafetería. Las dos opciones más habituales son una eSIM (activación instantánea, sin nada que recoger) o un pocket wifi físico (se recoge y devuelve en el aeropuerto, útil si viajas en grupo y queréis compartir conexión).",
  dinero:
    "Japón sigue siendo una sociedad con más peso del efectivo que otros países desarrollados, sobre todo fuera de las grandes ciudades. Merece la pena llevar algo de yenes en metálico y una tarjeta sin comisiones de cambio para sacar dinero en los cajeros de los konbini.",
  tours:
    "Algunas experiencias (exhibiciones de sumo, ceremonias del té, cupos limitados en templos) se agotan con días de antelación. Reservar antes de volar, aunque sea con margen para cambiar de plan, evita quedarte fuera el día que te apetece ir.",
};

export default function Esenciales() {
  usePageMeta(
    "Esenciales — Nippon Insider",
    "Todo lo que conviene organizar antes de viajar a Japón: vuelos, alojamiento, transporte, seguro, conectividad, dinero y tours.",
  );

  const picks = pickByCategory();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-serif text-4xl font-semibold text-sumi">
        Esenciales
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-sumi/60">
        Lo imprescindible para organizar un viaje a Japón, categoría por
        categoría: qué conviene resolver antes de salir y por qué.
      </p>

      <div className="mt-10 divide-y divide-sumi/10">
        {CATEGORY_ORDER.map((cat) => {
          const { label, icon: Icon } = CATEGORY_META[cat];
          const def = picks[cat];

          return (
            <section
              key={cat}
              id={cat}
              className="grid scroll-mt-24 gap-6 py-10 first:pt-0 lg:grid-cols-[1fr_300px] lg:items-start lg:gap-10"
            >
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-aka/10">
                    <Icon className="h-4 w-4 text-aka" />
                  </span>
                  <h2 className="font-serif text-2xl font-semibold text-sumi">
                    {label}
                  </h2>
                </div>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-sumi/70">
                  {CATEGORY_COPY[cat]}
                </p>
              </div>

              {def && (
                <a
                  href={def.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  onClick={() => trackAffiliateClick(def.code, "esenciales-page")}
                  className="group relative flex flex-col overflow-hidden rounded-xl bg-card no-underline shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-semibold text-sumi">
                      {def.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-sumi/70">
                      {def.description}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center justify-between gap-2 border-t-2 border-dashed border-washi/40 bg-aka px-5 py-3 text-washi transition-colors group-hover:bg-aka-dark">
                    {def.priceHint ? (
                      <span className="font-serif text-sm font-bold leading-tight">
                        {def.priceHint}
                      </span>
                    ) : (
                      <span />
                    )}
                    <span className="ml-auto inline-flex items-center gap-1 text-xs font-bold">
                      {def.cta}
                      <ExternalLink className="h-3 w-3 shrink-0 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </a>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
