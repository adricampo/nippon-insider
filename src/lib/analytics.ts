// Carga Google Analytics 4 (gtag.js) solo cuando: (a) el usuario ha dado
// su consentimiento en CookieConsent.tsx, y (b) hay una propiedad GA4
// configurada vía VITE_GA_MEASUREMENT_ID. Sin ID, no se inyecta ningún
// script — así el sitio en desarrollo/piloto se queda tal cual hasta que
// creéis la propiedad real en Google Analytics.
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let loaded = false;

export function loadAnalytics() {
  if (loaded) return;
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID as
    | string
    | undefined;
  if (!measurementId) return;

  loaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  // IP anonimizada: menos datos personales procesados, coherente con
  // el aviso de privacidad.
  window.gtag("config", measurementId, { anonymize_ip: true });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
}
