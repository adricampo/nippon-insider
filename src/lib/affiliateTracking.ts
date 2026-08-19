// Registro de clics en enlaces de afiliado. Sin Google Analytics activo
// (ver analytics.ts) solo lo deja en consola en desarrollo; en cuanto
// window.gtag exista, empieza a mandar el evento "affiliate_click" a GA4
// sin tocar los componentes de afiliado.
export function trackAffiliateClick(code: string, kind: string) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", "affiliate_click", {
      affiliate_code: code,
      affiliate_kind: kind,
    });
  } else if (import.meta.env.DEV) {
    console.debug("[affiliate_click]", { code, kind });
  }
}
