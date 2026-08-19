import { useState, useEffect } from "react";
import { loadAnalytics } from "@/lib/analytics";

const STORAGE_KEY = "cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(
    () => !localStorage.getItem(STORAGE_KEY),
  );

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "accepted") {
      loadAnalytics();
    }
  }, []);

  function acceptAll() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    loadAnalytics();
    setVisible(false);
  }

  function onlyNecessary() {
    localStorage.setItem(STORAGE_KEY, "necessary-only");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-sumi/10 bg-sumi text-washi shadow-lg">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-4 sm:flex-row sm:justify-between">
        <p className="text-sm leading-relaxed text-washi/80">
          Usamos cookies propias necesarias para el funcionamiento de la web.
          Con tu permiso, nos gustaría usar también cookies de analítica
          (Google Analytics) para saber cuánta gente nos lee — puedes
          rechazarlas sin que afecte a tu navegación.
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={onlyNecessary}
            className="rounded-md border border-washi/25 px-4 py-2 text-sm font-medium text-washi/80 transition-colors hover:bg-washi/10"
          >
            Solo necesarias
          </button>
          <button
            onClick={acceptAll}
            className="rounded-md bg-aka px-5 py-2 text-sm font-semibold text-washi transition-colors hover:bg-aka-dark"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}
