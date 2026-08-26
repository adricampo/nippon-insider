import { useRef } from "react";
import { useSearchParams } from "react-router";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useIsMobile } from "@/hooks/use-mobile";
import { PREFECTURES } from "@contracts/prefectures";
import JapanMap from "@/components/destinos/JapanMap";
import PrefectureDetailPanel from "@/components/destinos/PrefectureDetailPanel";
import PrefectureListFallback from "@/components/destinos/PrefectureListFallback";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
} from "@/components/ui/drawer";

export default function Destinos() {
  usePageMeta(
    "Destinos — Nippon Insider",
    "Explora las 47 prefecturas de Japón agrupadas en sus 8 regiones tradicionales, con un mapa interactivo.",
  );

  const [params, setParams] = useSearchParams();
  const prefParam = params.get("pref") ?? undefined;
  const selectedSlug = prefParam && PREFECTURES[prefParam] ? prefParam : undefined;
  const isMobile = useIsMobile();
  const mapSectionRef = useRef<HTMLDivElement>(null);

  function handleSelect(slug: string) {
    setParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("pref", slug);
      return next;
    });
    // Seleccionar desde la lista de abajo no cambia la ruta, así que
    // ScrollToTop (que solo reacciona a cambios de pathname) no actúa —
    // subimos a mano hasta el mapa/panel para que se vea el resultado.
    mapSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleClose() {
    setParams((prev) => {
      const next = new URLSearchParams(prev);
      next.delete("pref");
      return next;
    });
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-serif text-4xl font-semibold text-sumi">
        Destinos
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-sumi/60">
        Japón se divide en 47 prefecturas agrupadas en 8 regiones
        tradicionales. Explora el mapa o la lista, elige una y descubre sus
        ciudades y pueblos: qué ver, cómo moverte y qué tener en cuenta en
        cada uno.
      </p>

      <div ref={mapSectionRef} className="mt-10 scroll-mt-24 grid gap-8 lg:grid-cols-[3fr_2fr]">
        <JapanMap selectedSlug={selectedSlug} onSelect={handleSelect} />

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <PrefectureDetailPanel slug={selectedSlug} onClose={handleClose} />
          </div>
        </aside>
      </div>

      {isMobile && (
        <Drawer
          open={!!selectedSlug}
          onOpenChange={(open) => !open && handleClose()}
        >
          <DrawerContent>
            <DrawerTitle className="sr-only">
              Detalle de la prefectura seleccionada
            </DrawerTitle>
            <div className="px-4 pb-6">
              <PrefectureDetailPanel slug={selectedSlug} onClose={handleClose} />
            </div>
          </DrawerContent>
        </Drawer>
      )}

      <div className="mt-14 border-t border-sumi/10 pt-10">
        <h2 className="font-serif text-xl font-semibold text-sumi">
          Todas las prefecturas
        </h2>
        <div className="mt-6">
          <PrefectureListFallback
            selectedSlug={selectedSlug}
            onSelect={handleSelect}
          />
        </div>
      </div>
    </div>
  );
}
