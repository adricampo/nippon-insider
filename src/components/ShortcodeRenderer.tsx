import { Fragment, type ReactNode } from "react";
import { AFFILIATES } from "@contracts/affiliates";
import AffiliateBanner from "@/components/affiliates/AffiliateBanner";
import ProductCard from "@/components/affiliates/ProductCard";
import InlineAffiliate from "@/components/affiliates/InlineAffiliate";
import ResourceBox from "@/components/affiliates/ResourceBox";

// ─────────────────────────────────────────────────────────────
// Parser de contenido: convierte el texto del post (párrafos,
// encabezados "## " y shortcodes [CODIGO]) en React.
// El generador de contenido inserta los shortcodes; aquí se
// transforman en componentes de afiliado visualmente integrados.
// ─────────────────────────────────────────────────────────────

const SHORTCODE_RE = /^\[([A-Z_]+)\]$/;

// El generador debería dejar siempre los shortcodes en su propio párrafo,
// pero a veces el modelo los pega al final de una frase en la misma línea
// (ej. "...tu aventura. [PRODUCT_SEGURO_VIAJE]"). Sin esto, ese shortcode
// no se reconoce y se ve el texto [CODIGO] tal cual en el artículo
// publicado. Aísla cualquier shortcode en su propio bloque antes de
// parsear, para que siempre se renderice como componente.
function isolateInlineShortcodes(content: string): string {
  return content
    .replace(/([^\n])(\[[A-Z_]+\])/g, "$1\n\n$2")
    .replace(/(\[[A-Z_]+\])([^\n])/g, "$1\n\n$2");
}

function renderShortcode(code: string, key: number): ReactNode {
  // Caso especial: no es un afiliado individual, agrupa varios por categoría.
  if (code === "RECURSOS_VIAJE") return <ResourceBox key={key} />;

  const def = AFFILIATES[code];
  if (!def) return null;
  switch (def.kind) {
    case "banner":
      return <AffiliateBanner key={key} code={code} />;
    case "product":
      return <ProductCard key={key} code={code} />;
    case "inline":
      return <InlineAffiliate key={key} code={code} />;
    default:
      return null;
  }
}

export default function ShortcodeRenderer({ content }: { content: string }) {
  const blocks = isolateInlineShortcodes(content).split(/\n\s*\n/);

  return (
    <div className="article-body">
      {blocks.map((block, i) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        const shortcodeMatch = trimmed.match(SHORTCODE_RE);
        if (shortcodeMatch) {
          return (
            <Fragment key={i}>
              {renderShortcode(shortcodeMatch[1], i)}
            </Fragment>
          );
        }

        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="mb-4 mt-10 flex items-center gap-3 font-serif text-2xl font-semibold text-sumi"
            >
              <span className="inline-block h-5 w-1 rounded-full bg-aka" />
              {trimmed.slice(3)}
            </h2>
          );
        }

        return (
          <p key={i} className="mb-5 text-[1.05rem] leading-8 text-sumi/90">
            {trimmed}
          </p>
        );
      })}
    </div>
  );
}
