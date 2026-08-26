import { Link, NavLink } from "react-router";
import { CATEGORIES } from "@/lib/categories";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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

        <nav className="hidden items-center gap-1 md:flex">
          <NavLink
            to="/esenciales"
            className={(props) => `px-3 py-2 ${navClass(props)}`}
          >
            Esenciales
          </NavLink>
          <NavLink
            to="/destinos"
            className={(props) => `px-3 py-2 ${navClass(props)}`}
          >
            Destinos
          </NavLink>
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent px-3 text-sm font-normal tracking-wide text-sumi/70 hover:bg-transparent hover:text-aka focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-aka">
                  Blog
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-48 gap-1 p-1">
                    {CATEGORIES.map((c) => (
                      <li key={c.slug}>
                        <NavigationMenuLink
                          asChild
                          className="flex-row items-center gap-2"
                        >
                          <NavLink to={`/categoria/${c.slug}`}>
                            <span className="font-serif text-aka">{c.kanji}</span>
                            {c.label}
                          </NavLink>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
            <Link
              to="/esenciales"
              onClick={() => setOpen(false)}
              className="text-sm text-sumi/80"
            >
              Esenciales
            </Link>
            <Link
              to="/destinos"
              onClick={() => setOpen(false)}
              className="text-sm text-sumi/80"
            >
              Destinos
            </Link>
            <div className="mt-2 flex flex-col gap-3 border-t border-sumi/10 pt-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-sumi/40">
                Blog
              </p>
              {CATEGORIES.map((c) => (
                <Link
                  key={c.slug}
                  to={`/categoria/${c.slug}`}
                  onClick={() => setOpen(false)}
                  className="pl-2 text-sm text-sumi/80"
                >
                  <span className="font-serif text-aka">{c.kanji}</span> {c.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
