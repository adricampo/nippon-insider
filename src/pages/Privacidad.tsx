export default function Privacidad() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-aka">
        Legal
      </p>
      <h1 className="mt-2 font-serif text-4xl font-semibold text-sumi">
        Política de privacidad
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-sumi/60">
        Cómo tratamos tus datos al navegar por Nippon Insider. Este documento
        se actualizará si el sitio incorpora cuentas de usuario o
        suscripciones de pago.
      </p>

      <div className="mt-10 space-y-8 text-[1.02rem] leading-8 text-sumi/85">
        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-sumi">
            1. Responsable del tratamiento
          </h2>
          <p>
            <strong>Adrián Campo</strong>, con DNI 47331903L y domicilio en
            C/ Saragossa 5, 08912 Badalona (Barcelona), con contacto en{" "}
            <a href="mailto:info@nipponinsider.site" className="text-aka">
              info@nipponinsider.site
            </a>
            , es responsable de los datos tratados a través de este sitio.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-sumi">
            2. Qué datos recogemos
          </h2>
          <p>
            El sitio usa cookies propias necesarias para su funcionamiento.
            Con tu consentimiento, previa elección en el aviso de cookies de tu
            primera visita, también usamos <strong>Google Analytics 4</strong>{" "}
            para medir páginas vistas y origen del tráfico, con la IP
            anonimizada. Puedes rechazarlo eligiendo "Solo necesarias" en ese
            aviso, o retirarlo más adelante borrando las cookies del sitio en
            tu navegador. No usamos cookies de publicidad propias.
          </p>
          <p className="mt-2">
            No recogemos datos de pago ni datos sensibles: el sitio no
            procesa compras directamente.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-sumi">
            3. Enlaces de afiliados y terceros
          </h2>
          <p>
            Algunos artículos contienen enlaces a servicios de terceros
            (reservas de tren, alojamiento, conectividad móvil, etc.) a
            través de programas de afiliados. Al hacer clic y salir de Nippon
            Insider, entras en el sitio del proveedor correspondiente, sujeto
            a su propia política de privacidad y sus propias cookies, que
            Nippon Insider no controla ni recibe. Te recomendamos revisar la
            política de privacidad de cada proveedor antes de facilitarle
            datos personales o de pago.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-sumi">
            4. Finalidad y base legal
          </h2>
          <p>
            Las cookies necesarias se usan sobre la base del interés
            legítimo previsto en la normativa de cookies (no requieren
            consentimiento por no ser de analítica ni publicitarias). Google
            Analytics 4 solo se activa con tu consentimiento expreso, dado en
            el aviso de cookies; los datos que procesa (páginas vistas, país
            aproximado, dispositivo) los trata Google como encargado del
            tratamiento, conforme a sus propias cláusulas contractuales de
            transferencia internacional.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-sumi">
            5. Tus derechos
          </h2>
          <p>
            Puedes ejercer tus derechos de acceso, rectificación, supresión,
            oposición, limitación y portabilidad escribiendo a{" "}
            <a href="mailto:info@nipponinsider.site" className="text-aka">
              info@nipponinsider.site
            </a>
            . Responderemos en el plazo legal establecido por el RGPD.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-sumi">
            6. Conservación de datos
          </h2>
          <p>
            Las cookies necesarias se conservan el tiempo mínimo imprescindible
            para su función técnica. No almacenamos datos personales
            adicionales al margen de lo indicado en esta política.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-sumi">
            7. Cambios en esta política
          </h2>
          <p>
            Esta política puede actualizarse para reflejar cambios en el
            sitio (por ejemplo, al activar analítica o suscripciones de
            pago) o en la normativa aplicable. La fecha de última revisión se
            indica al pie de esta página.
          </p>
        </section>
      </div>

      <p className="mt-10 text-xs text-sumi/40">
        Última revisión: {new Date().toLocaleDateString("es-ES")}
      </p>
    </div>
  );
}
