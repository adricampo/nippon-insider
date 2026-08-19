import { AFFILIATES } from "@contracts/affiliates";
import { ArrowRight, Train } from "lucide-react";
import { trackAffiliateClick } from "@/lib/affiliateTracking";

// Banner grande de afiliado, integrado en el flujo de lectura.
// Se renderiza desde shortcodes tipo [BANNER_JRPASS].
export default function AffiliateBanner({ code }: { code: string }) {
  const def = AFFILIATES[code];
  if (!def) return null;

  const isInternal = def.url.startsWith("/");
  const Icon = Train;

  return (
    <aside className="not-prose my-8 overflow-hidden rounded-lg border border-aka/20 bg-gradient-to-br from-washi to-accent shadow-sm">
      <div className="flex flex-col gap-4 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-aka/10">
            <Icon className="h-6 w-6 text-aka" />
          </div>
          {def.badge && (
            <span className="inline-block rounded-full bg-aka/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-aka">
              {def.badge}
            </span>
          )}
        </div>
        <div>
          <h4 className="font-serif text-xl font-semibold text-sumi">
            {def.title}
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-sumi/70">
            {def.description}
          </p>
          {def.priceHint && (
            <p className="mt-1 text-xs font-medium text-kin">{def.priceHint}</p>
          )}
        </div>
        <a
          href={def.url}
          target={isInternal ? undefined : "_blank"}
          rel={isInternal ? undefined : "noopener noreferrer sponsored"}
          onClick={() => trackAffiliateClick(code, "banner")}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-aka px-5 py-2.5 text-sm font-semibold text-washi transition-colors hover:bg-aka-dark"
        >
          {def.cta} <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <p className="border-t border-aka/10 bg-aka/5 px-6 py-1.5 text-[10px] text-sumi/50">
        Enlace de afiliado — apoyas este blog sin coste adicional.
      </p>
    </aside>
  );
}
