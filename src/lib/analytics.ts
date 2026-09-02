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
  // Consent Mode v2: esta función solo se llama después de que
  // CookieConsent.tsx registre el "Aceptar todas" del usuario, así que
  // el consentimiento ya está dado — hay que decírselo explícitamente a
  // gtag.js con "consent default", si no, Google puede aplicar su propio
  // valor por defecto (denegado) a tráfico de la UE y descartar las
  // visitas en silencio aunque el script cargue sin errores.
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
  });
  // Además del "default", mandamos un "update" explícito: Tag Assistant
  // mostraba los hits en estado "aplazados" esperando una señal de
  // consentimiento pese al default ya concedido — un "update" inmediato
  // fuerza a gtag.js a soltar la cola en vez de quedarse esperando.
  window.gtag("consent", "update", {
    analytics_storage: "granted",
  });
  window.gtag("js", new Date());
  window.gtag("config", measurementId);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
}
