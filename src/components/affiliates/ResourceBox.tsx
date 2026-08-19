import {
  AFFILIATES,
  type AffiliateCategory,
  type AffiliateDef,
} from "@contracts/affiliates";
import {
  Plane,
  BedDouble,
  TrainFront,
  ShieldCheck,
  Wifi,
  CreditCard,
  Ticket,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { trackAffiliateClick } from "@/lib/affiliateTracking";

// Cuadro de "recursos básicos del viaje": una fila compacta por categoría,
// agrupando el registro central de afiliados en vez de duplicar datos.
// Pensado para colocarse una vez cerca del inicio (y opcionalmente otra
// al cierre) de artículos que sean guías de viaje completas, vía el
// shortcode [RECURSOS_VIAJE].

const CATEGORY_META: Record<
  AffiliateCategory,
  { label: string; icon: LucideIcon }
> = {
  vuelos: { label: "Vuelos", icon: Plane },
  alojamiento: { label: "Alojamiento", icon: BedDouble },
  transporte: { label: "Transporte", icon: TrainFront },
  seguro: { label: "Seguro de viaje", icon: ShieldCheck },
  conectividad: { label: "Conectividad", icon: Wifi },
  dinero: { label: "Dinero y tarjetas", icon: CreditCard },
  tours: { label: "Tours y experiencias", icon: Ticket },
};

const CATEGORY_ORDER: AffiliateCategory[] = [
  "vuelos",
  "alojamiento",
  "transporte",
  "seguro",
  "conectividad",
  "dinero",
  "tours",
];

function pickByCategory(): Partial<Record<AffiliateCategory, AffiliateDef>> {
  const picks: Partial<Record<AffiliateCategory, AffiliateDef>> = {};
  for (const def of Object.values(AFFILIATES)) {
    if (def.category && !picks[def.category]) picks[def.category] = def;
  }
  return picks;
}

export default function ResourceBox() {
  const picks = pickByCategory();
  const rows = CATEGORY_ORDER.filter((cat) => picks[cat]);
  if (rows.length === 0) return null;

  return (
    <aside className="not-prose my-10 overflow-hidden rounded-lg border border-sumi/15 bg-card">
      <div className="border-b border-sumi/10 bg-accent/50 px-5 py-3.5">
        <p className="font-serif text-lg font-semibold text-sumi">
          Lo básico para tu viaje a Japón
        </p>
        <p className="mt-0.5 text-xs text-sumi/55">
          Lo esencial para organizar el viaje, resumido en una lista.
        </p>
      </div>
      <ul className="grid divide-y divide-sumi/8 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        {rows.map((cat) => {
          const def = picks[cat]!;
          const { label, icon: Icon } = CATEGORY_META[cat];
          return (
            <li key={cat}>
              <a
                href={def.url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                onClick={() => trackAffiliateClick(def.code, "resource-box")}
                className="group flex items-start gap-3 px-5 py-3.5 no-underline transition-colors hover:bg-accent/40"
              >
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-aka" />
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-sumi/45">
                    {label}
                  </span>
                  <span className="mt-0.5 flex items-center gap-1 text-sm font-medium text-sumi group-hover:text-aka">
                    {def.cta}
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
