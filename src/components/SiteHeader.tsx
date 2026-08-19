import { Link, NavLink } from "react-router";
import { CATEGORIES } from "@/lib/categories";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm tracking-wide transition-colors ${
      isActive ? "text-aka font-semibold" : "text-sumi/70 hover:text-aka"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-sumi/10 bg-washi/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3">
          {/* Hanko: sello rojo japonés */}
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-aka font-serif text-lg text-washi shadow-sm">
            日
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-lg font-semibold tracking-wide text-sumi">
              Nippon Insider
            </span>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-sumi/50">
              Japón, desde dentro
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {CATEGORIES.map((c) => (
            <NavLink key={c.slug} to={`/categoria/${c.slug}`} className={navClass}>
              {c.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-sumi/10 bg-washi px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                to={`/categoria/${c.slug}`}
                onClick={() => setOpen(false)}
                className="text-sm text-sumi/80"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
