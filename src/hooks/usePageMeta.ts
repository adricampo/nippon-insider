import { useEffect } from "react";

// Actualiza <title> y <meta name="description"> al navegar entre páginas
// dentro de la SPA (React Router no recarga el documento, así que sin esto
// el título se queda congelado en el de la primera página cargada).
// El servidor ya inyecta los valores correctos en la carga inicial para
// crawlers y previsualizaciones sociales — ver api/lib/seo-routes.ts.
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title;
    if (!description) return;
    let meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, [title, description]);
}
