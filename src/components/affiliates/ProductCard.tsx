import { AFFILIATES, type AffiliateCategory } from "@contracts/affiliates";
import { ExternalLink } from "lucide-react";
import { trackAffiliateClick } from "@/lib/affiliateTracking";
import { affiliateIcon } from "@/lib/affiliateIcons";

const CATEGORY_LABEL: Record<AffiliateCategory, string> = {
  vuelos: "Vuelos",
  alojamiento: "Alojamiento",
  transporte: "Transporte",
  seguro: "Seguro de viaje",
  conectividad: "Conectividad",
  dinero: "Dinero y tarjetas",
  tours: "Tours y experiencias",
};

// Tarjeta de producto (CPL/CPS) para shortcodes tipo [PRODUCT_POCKET_WIFI].
// Forma de billete: la tarjeta entera es el área de clic (no solo el
// botón), y el precio/CTA viven en el "talón" recortado — mismo molde
// para cualquier afiliado, solo cambian icono, texto y link.
//
// `compact`: variante apilada (talón como franja horizontal abajo) para
// columnas estrechas como el sidebar de PostPage — la versión lado a
// lado no cabe en 300px sin aplastar el título a una palabra por línea.
export default function ProductCard({
  code,
  compact = false,
}: {
  code: string;
  compact?: boolean;
}) {
  const def = AFFILIATES[code];
  if (!def) return null;

  const Icon = affiliateIcon(code);
  const price = def.priceHint ?? "Ver precio";

  if (compact) {
    return (
      <a
        href={def.url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        onClick={() => trackAffiliateClick(code, "product")}
        className="not-prose group relative my-6 flex flex-col overflow-hidden rounded-xl bg-card no-underline shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
      >
        <div className="flex items-start gap-3 p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-aka/10">
            <Icon className="h-5 w-5 text-aka" />
          </div>
          <div className="min-w-0">
            {def.category && (
              <p className="text-[10px] font-semibold uppercase tracking-wider text-kin">
                {CATEGORY_LABEL[def.category]}
              </p>
            )}
            <h4 className="font-serif text-base font-semibold leading-snug text-sumi">
              {def.title}
            </h4>
            <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-sumi/65">
              {def.description}
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-between gap-2 border-t-2 border-dashed border-washi/40 bg-aka px-4 py-2.5 text-washi transition-colors group-hover:bg-aka-dark">
          <span
            aria-hidden
            className="absolute -left-[9px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 rounded-full bg-washi"
          />
          <span
            aria-hidden
            className="absolute -right-[9px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 rounded-full bg-washi"
          />
          <span className="font-serif text-sm font-bold leading-tight">
            {price}
          </span>
          <span className="inline-flex shrink-0 items-center gap-1 text-xs font-bold">
            {def.cta}
            <ExternalLink className="h-3 w-3 shrink-0 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </a>
    );
  }

  return (
    <a
      href={def.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={() => trackAffiliateClick(code, "product")}
      className="not-prose group relative my-8 grid grid-cols-[1fr_auto] overflow-hidden rounded-xl bg-card no-underline shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="flex items-start gap-4 p-5 sm:p-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-aka/10">
          <Icon className="h-6 w-6 text-aka" />
        </div>
        <div className="min-w-0">
          {def.category && (
            <p className="text-[11px] font-semibold uppercase tracking-wider text-kin">
              {CATEGORY_LABEL[def.category]}
            </p>
          )}
          <h4 className="font-serif text-lg font-semibold text-sumi">
            {def.title}
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-sumi/70">
            {def.description}
          </p>
        </div>
      </div>
      <div className="relative flex w-28 shrink-0 flex-col items-center justify-center gap-1.5 border-l-2 border-dashed border-washi/40 bg-aka px-2.5 py-4 text-center text-washi transition-colors group-hover:bg-aka-dark sm:w-36">
        <span
          aria-hidden
          className="absolute -left-[9px] -top-[9px] h-[18px] w-[18px] rounded-full bg-washi"
        />
        <span
          aria-hidden
          className="absolute -bottom-[9px] -left-[9px] h-[18px] w-[18px] rounded-full bg-washi"
        />
        <span className="font-serif text-base font-bold leading-tight sm:text-lg">
          {price}
        </span>
        <span className="inline-flex items-center gap-1 text-xs font-bold">
          {def.cta}
          <ExternalLink className="h-3 w-3 shrink-0 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  );
}
