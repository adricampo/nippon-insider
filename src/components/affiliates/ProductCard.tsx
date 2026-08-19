import { AFFILIATES } from "@contracts/affiliates";
import { Wifi, ExternalLink } from "lucide-react";
import { trackAffiliateClick } from "@/lib/affiliateTracking";

// Tarjeta de producto (CPL/CPS) para shortcodes tipo [PRODUCT_POCKET_WIFI].
export default function ProductCard({ code }: { code: string }) {
  const def = AFFILIATES[code];
  if (!def) return null;

  return (
    <aside className="not-prose my-8 rounded-lg border border-sumi/15 bg-card p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-sumi/5">
          <Wifi className="h-6 w-6 text-sumi" />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="font-serif text-lg font-semibold text-sumi">
              {def.title}
            </h4>
            {def.badge && (
              <span className="rounded-full bg-kin/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-kin">
                {def.badge}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm leading-relaxed text-sumi/70">
            {def.description}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <a
              href={def.url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              onClick={() => trackAffiliateClick(code, "product")}
              className="inline-flex items-center gap-1.5 rounded-md border border-aka px-4 py-2 text-sm font-semibold text-aka transition-colors hover:bg-aka hover:text-washi"
            >
              {def.cta} <ExternalLink className="h-3.5 w-3.5" />
            </a>
            {def.priceHint && (
              <span className="text-sm font-medium text-sumi/60">
                {def.priceHint}
              </span>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
