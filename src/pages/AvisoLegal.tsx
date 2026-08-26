export default function AvisoLegal() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-aka">
        Legal
      </p>
      <h1 className="mt-2 font-serif text-4xl font-semibold text-sumi">
        Aviso legal
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-sumi/60">
        Información general del sitio conforme a la Ley 34/2002, de Servicios
        de la Sociedad de la Información y Comercio Electrónico (LSSICE).
      </p>

      <div className="mt-10 space-y-8 text-[1.02rem] leading-8 text-sumi/85">
        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-sumi">
            1. Titular del sitio
          </h2>
          <p>
            En cumplimiento del deber de información recogido en el artículo
            10 de la LSSICE, se indican los siguientes datos: el presente
            sitio web, <strong>Nippon Insider</strong>, es operado por{" "}
            <strong>Adrián Campo</strong>, con DNI 47331903L, domicilio en
            C/ Saragossa 5, 08912 Badalona (Barcelona), y correo electrónico
            de contacto{" "}
            <a href="mailto:info@nipponinsider.site" className="text-aka">
              info@nipponinsider.site
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-sumi">
            2. Objeto
          </h2>
          <p>
            Nippon Insider es un blog editorial en español sobre Japón
            (turismo, economía, cultura y mercado inmobiliario). El acceso y
            uso del sitio atribuye la condición de usuario y supone la
            aceptación de este aviso legal.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-sumi">
            3. Propiedad intelectual
          </h2>
          <p>
            Los textos, imágenes y diseño de este sitio son propiedad de su
            titular o se usan bajo licencia, salvo que se indique lo
            contrario en el propio contenido. Queda prohibida su reproducción
            total o parcial sin autorización expresa, excepto cita con enlace
            al artículo original.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-sumi">
            4. Enlaces de afiliados
          </h2>
          <p>
            Algunos artículos incluyen enlaces de afiliado a servicios de
            terceros (reservas de alojamiento, transporte, conectividad,
            etc.). Si realizas una compra a través de ellos, Nippon Insider
            puede recibir una comisión, sin coste adicional para ti. Consulta
            también nuestra{" "}
            <a href="/privacidad" className="text-aka underline">
              política de privacidad
            </a>{" "}
            para saber cómo tratan tus datos los sitios de destino.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-sumi">
            5. Legislación aplicable
          </h2>
          <p>
            Este aviso legal se rige por la legislación española. Para
            cualquier controversia derivada del acceso o uso del sitio, las
            partes se someten a los juzgados y tribunales que correspondan
            conforme a la normativa vigente de protección de consumidores.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-sumi">
            6. Modificaciones
          </h2>
          <p>
            Este aviso legal puede actualizarse para reflejar cambios en el
            sitio o en la normativa aplicable. La fecha de última revisión se
            indica al pie de esta página.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-sumi">
            7. Créditos de terceros
          </h2>
          <p>
            El mapa interactivo de la sección{" "}
            <a href="/destinos" className="text-aka underline">
              Destinos
            </a>{" "}
            está basado en el mapa de prefecturas de{" "}
            <a
              href="https://github.com/geolonia/japanese-prefectures"
              target="_blank"
              rel="noopener noreferrer"
              className="text-aka underline"
            >
              Geolonia
            </a>
            , a su vez basado en el mapa de Japón de Wikipedia, ambos bajo
            licencia GFDL.
          </p>
        </section>
      </div>

      <p className="mt-10 text-xs text-sumi/40">
        Última revisión: {new Date().toLocaleDateString("es-ES")}
      </p>
    </div>
  );
}
