import { Link } from "react-router";
import { CATEGORIES } from "@/lib/categories";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-sumi/10 bg-sumi text-washi/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-aka font-serif text-lg text-washi">
              日
            </span>
            <span className="font-serif text-lg font-semibold text-washi">
              Nippon Insider
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-washi/60">
            Turismo, economía, cultura y mercado inmobiliario de Japón,
            contado en español por quien vive allí desde hace una década.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-washi/50">
            Secciones
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/categoria/${c.slug}`}
                  className="transition-colors hover:text-washi"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-washi/50">
            Transparencia
          </h4>
          <p className="mt-4 text-sm leading-relaxed text-washi/60">
            Algunos artículos incluyen enlaces de afiliado, señalados en el
            propio texto. Más detalles abajo.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                to="/aviso-legal"
                className="transition-colors hover:text-washi"
              >
                Aviso legal
              </Link>
            </li>
            <li>
              <Link
                to="/privacidad"
                className="transition-colors hover:text-washi"
              >
                Privacidad
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-washi/10 py-4 text-center text-xs text-washi/40">
        © {new Date().getFullYear()} Nippon Insider — Hecho con matcha en Tokio
      </div>
    </footer>
  );
}
