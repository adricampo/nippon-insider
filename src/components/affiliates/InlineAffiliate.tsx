import { AFFILIATES } from "@contracts/affiliates";
import { ArrowUpRight } from "lucide-react";
import { trackAffiliateClick } from "@/lib/affiliateTracking";

// Enlace de afiliado discreto en línea (tipo [LINK_AGODA_TOKYO]).
export default function InlineAffiliate({ code }: { code: string }) {
  const def = AFFILIATES[code];
  if (!def) return null;

  return (
    <a
      href={def.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={() => trackAffiliateClick(code, "inline")}
      className="group my-6 flex items-center justify-between gap-3 rounded-md border-l-4 border-aka bg-accent/60 px-4 py-3 no-underline transition-colors hover:bg-accent"
    >
      <span>
        <span className="block text-sm font-semibold text-aka">
          {def.title}
        </span>
        <span className="block text-xs text-sumi/60">{def.description}</span>
      </span>
      <span className="flex shrink-0 items-center gap-1 text-xs font-semibold text-aka">
        {def.cta}
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  );
}
