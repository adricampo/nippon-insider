import { AFFILIATES } from "@contracts/affiliates";
import { ArrowRight } from "lucide-react";
import { trackAffiliateClick } from "@/lib/affiliateTracking";
import { affiliateIcon } from "@/lib/affiliateIcons";

// Banner grande de afiliado, integrado en el flujo de lectura. Se
// renderiza desde shortcodes tipo [BANNER_JRPASS]. Mismo motivo de
// billete que ProductCard, a mayor escala: toda la tarjeta es clicable
// y el precio/CTA viven en el talón recortado.
//
// `compact`: variante apilada para columnas estrechas (sidebar de
// PostPage) — ver ProductCard para el porqué.
export default function AffiliateBanner({
  code,
  compact = false,
}: {
  code: string;
  compact?: boolean;
}) {
  const def = AFFILIATES[code];
  if (!def) return null;

  const isInternal = def.url.startsWith("/");
  const Icon = affiliateIcon(code);
  const linkProps = {
    target: isInternal ? undefined : "_blank",
    rel: isInternal ? undefined : "noopener noreferrer sponsored",
  };

  if (compact) {
    return (
      <a
        href={def.url}
        {...linkProps}
        onClick={() => trackAffiliateClick(code, "banner")}
        className="not-prose group relative my-6 flex flex-col overflow-hidden rounded-xl bg-card no-underline shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
      >
        <div className="flex items-start gap-3 p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-aka/10">
            <Icon className="h-5 w-5 text-aka" />
          </div>
          <div className="min-w-0">
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
          {def.priceHint && (
            <span className="font-serif text-sm font-bold leading-tight">
              {def.priceHint}
            </span>
          )}
          <span className="ml-auto inline-flex shrink-0 items-center gap-1 text-xs font-bold">
            {def.cta}
            <ArrowRight className="h-3 w-3 shrink-0 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </a>
    );
  }

  return (
    <a
      href={def.url}
      {...linkProps}
      onClick={() => trackAffiliateClick(code, "banner")}
      className="not-prose group relative my-8 grid grid-cols-[1fr_auto] overflow-hidden rounded-xl bg-card no-underline shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="flex items-start gap-4 p-6 sm:p-7">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-aka/10">
          <Icon className="h-7 w-7 text-aka" />
        </div>
        <div className="min-w-0">
          <h4 className="font-serif text-2xl font-semibold text-sumi">
            {def.title}
          </h4>
          <p className="mt-1.5 text-sm leading-relaxed text-sumi/70">
            {def.description}
          </p>
          <p className="mt-3 text-[11px] text-sumi/45">
            Enlace de afiliado — apoyas este blog sin coste adicional.
          </p>
        </div>
      </div>
      <div className="relative flex w-32 shrink-0 flex-col items-center justify-center gap-2 border-l-2 border-dashed border-washi/40 bg-aka px-3 py-4 text-center text-washi transition-colors group-hover:bg-aka-dark sm:w-44">
        <span
          aria-hidden
          className="absolute -left-[9px] -top-[9px] h-[18px] w-[18px] rounded-full bg-washi"
        />
        <span
          aria-hidden
          className="absolute -bottom-[9px] -left-[9px] h-[18px] w-[18px] rounded-full bg-washi"
        />
        {def.priceHint && (
          <span className="font-serif text-lg font-bold leading-tight sm:text-xl">
            {def.priceHint}
          </span>
        )}
        <span className="inline-flex items-center gap-1.5 text-sm font-bold">
          {def.cta}
          <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  );
}
