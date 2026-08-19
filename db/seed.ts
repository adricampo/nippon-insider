import { getDb } from "../server/queries/connection";
import { posts } from "./schema";

function daysAgo(n: number): Date {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d;
}

const seedPosts = [
  {
    slug: "guia-jr-pass-2026",
    title: "¿Merece la pena el JR Pass en 2026? La cuenta real",
    excerpt:
      "Desde la subida de precios, el JR Pass ya no es la ganga automática que era. Hicimos los números con tres itinerarios reales.",
    content:
      "El JR Pass subió de precio en 2023 y desde entonces la pregunta ya no tiene una respuesta obvia...",
    category: "turismo" as const,
    coverImage: null,
    isPremium: false,
    status: "publicado" as const,
    readingMinutes: 6,
    publishedAt: daysAgo(1),
  },
  {
    slug: "mejor-epoca-visitar-kioto",
    title: "Cuándo visitar Kioto sin morir de calor ni de turistas",
    excerpt:
      "Primavera y otoño acaparan toda la fama, pero hay ventanas de tres semanas que casi nadie aprovecha.",
    content: "Kioto en abril es una postal, pero también una multitud...",
    category: "turismo" as const,
    coverImage: null,
    isPremium: false,
    status: "publicado" as const,
    readingMinutes: 5,
    publishedAt: daysAgo(6),
  },
  {
    slug: "yen-debil-que-significa",
    title: "El yen débil explicado sin jerga de economista",
    excerpt:
      "Llevamos dos años con un yen históricamente barato. Qué lo causa, a quién beneficia y hasta cuándo puede durar.",
    content: "Un dólar costaba 100 yenes hace una década. Hoy cuesta bastante más...",
    category: "economia" as const,
    coverImage: null,
    isPremium: false,
    status: "publicado" as const,
    readingMinutes: 8,
    publishedAt: daysAgo(2),
  },
  {
    slug: "salarios-japon-2026",
    title: "Por qué los salarios japoneses llevan 30 años casi congelados",
    excerpt:
      "No es pereza ni falta de productividad: es un sistema entero diseñado para priorizar el empleo sobre el sueldo.",
    content: "La deflación de los 90 dejó una cicatriz que todavía se nota en cada nómina...",
    category: "economia" as const,
    coverImage: null,
    isPremium: false,
    status: "publicado" as const,
    readingMinutes: 7,
    publishedAt: daysAgo(9),
  },
  {
    slug: "onsen-etiqueta-basica",
    title: "Onsen para principiantes: lo que nadie te explica antes de ir",
    excerpt:
      "Tatuajes, toallas pequeñas y el orden correcto para lavarse. La etiqueta del baño termal japonés, sin sorpresas.",
    content: "La primera vez que fui a un onsen hice al menos tres cosas mal...",
    category: "cultura" as const,
    coverImage: null,
    isPremium: false,
    status: "publicado" as const,
    readingMinutes: 4,
    publishedAt: daysAgo(3),
  },
  {
    slug: "honne-tatemae-explicado",
    title: "Honne y tatemae: la clave para entender a la gente en Japón",
    excerpt:
      "La distancia entre lo que un japonés piensa y lo que dice en voz alta tiene nombre propio, y reglas propias.",
    content: "Después de diez años aquí, todavía calibro cada conversación con esta distinción...",
    category: "cultura" as const,
    coverImage: null,
    isPremium: false,
    status: "publicado" as const,
    readingMinutes: 6,
    publishedAt: daysAgo(12),
  },
  {
    slug: "comprar-piso-tokio-extranjero",
    title: "Comprar un piso en Tokio siendo extranjero: la guía real",
    excerpt:
      "No necesitas residencia permanente ni un aval japonés en todos los casos. Lo que sí necesitas es paciencia y este mapa del proceso.",
    content: "Compré mi primer piso en Tokio sin tener la residencia permanente...",
    category: "inmobiliaria" as const,
    coverImage: null,
    isPremium: false,
    status: "publicado" as const,
    readingMinutes: 9,
    publishedAt: daysAgo(4),
  },
  {
    slug: "alquilar-sin-garante-japon",
    title: "Alquilar en Japón sin garante: las alternativas que funcionan",
    excerpt:
      "Las agencias de garantía (hoshou gaisha) cambiaron las reglas del alquiler. Así es como un extranjero consigue piso hoy.",
    content: "El sistema del garante (hoshounin) sigue existiendo, pero cada vez pesa menos...",
    category: "inmobiliaria" as const,
    coverImage: null,
    isPremium: false,
    status: "publicado" as const,
    readingMinutes: 5,
    publishedAt: daysAgo(15),
  },
  // ── Turismo (4 más) ──────────────────────────────────────────
  {
    slug: "shinkansen-rutas-menos-conocidas",
    title: "Cuatro rutas en Shinkansen que casi ningún turista hace",
    excerpt:
      "Más allá del triángulo Tokio-Kioto-Osaka hay trayectos igual de espectaculares y sin las multitudes habituales.",
    content: "El Shinkansen no termina en Kioto, aunque lo parezca por las guías...",
    category: "turismo" as const,
    coverImage: null,
    isPremium: false,
    status: "publicado" as const,
    readingMinutes: 5,
    publishedAt: daysAgo(8),
  },
  {
    slug: "comer-barato-tokio",
    title: "Comer bien en Tokio por menos de 1000 yenes",
    excerpt:
      "Teishoku, konbini de verdad bueno y las cadenas que un local recomienda antes que cualquier restaurante de guía turística.",
    content: "El mito de que comer en Tokio es caro se cae en cuanto sales del circuito turístico...",
    category: "turismo" as const,
    coverImage: null,
    isPremium: false,
    status: "publicado" as const,
    readingMinutes: 4,
    publishedAt: daysAgo(11),
  },
  {
    slug: "temporada-momiji-japon",
    title: "Momiji: la guía para cazar el otoño japonés en su punto exacto",
    excerpt:
      "El follaje rojo se mueve de norte a sur durante semanas. Aquí está el calendario real, no el genérico de los folletos.",
    content: "A diferencia de los cerezos, el momiji tiene una ventana más generosa...",
    category: "turismo" as const,
    coverImage: null,
    isPremium: false,
    status: "publicado" as const,
    readingMinutes: 6,
    publishedAt: daysAgo(14),
  },
  {
    slug: "excursiones-un-dia-desde-tokio",
    title: "Seis excursiones de un día desde Tokio que no son Nikko ni Kamakura",
    excerpt:
      "Kawagoe, Chichibu, Enoshima y otras alternativas a menos de dos horas en tren que casi nadie incluye en el itinerario.",
    content: "Nikko y Kamakura están bien, pero se saturan exactamente porque todo el mundo va...",
    category: "turismo" as const,
    coverImage: null,
    isPremium: false,
    status: "publicado" as const,
    readingMinutes: 7,
    publishedAt: daysAgo(18),
  },
  // ── Economía (4 más) ─────────────────────────────────────────
  {
    slug: "banco-japon-tipos-interes",
    title: "Por qué el Banco de Japón sigue sin subir los tipos como el resto",
    excerpt:
      "Mientras la Fed y el BCE endurecían política monetaria, Japón mantuvo tipos cerca de cero durante años. La razón no es solo inercia.",
    content: "Japón lleva más de dos décadas luchando contra el fantasma de la deflación...",
    category: "economia" as const,
    coverImage: null,
    isPremium: false,
    status: "publicado" as const,
    readingMinutes: 7,
    publishedAt: daysAgo(5),
  },
  {
    slug: "trabajar-remoto-japon-visado",
    title: "Trabajar en remoto desde Japón: qué visado necesitas de verdad",
    excerpt:
      "El visado de nómada digital existe, pero no es la única vía ni siempre la mejor. Repasamos las opciones reales según tu situación.",
    content: "Japón lanzó su visado de nómada digital hace un tiempo, con más letra pequeña de la que parece...",
    category: "economia" as const,
    coverImage: null,
    isPremium: false,
    status: "publicado" as const,
    readingMinutes: 8,
    publishedAt: daysAgo(10),
  },
  {
    slug: "startups-japonesas-en-auge",
    title: "Las startups japonesas que están rompiendo el molde corporativo",
    excerpt:
      "El modelo de empleo de por vida sigue dominando, pero un puñado de empresas está atrayendo talento joven con otras reglas.",
    content: "Durante décadas, unirse a una startup en Japón se veía casi como un fracaso profesional...",
    category: "economia" as const,
    coverImage: null,
    isPremium: false,
    status: "publicado" as const,
    readingMinutes: 6,
    publishedAt: daysAgo(13),
  },
  {
    slug: "impuestos-autonomos-japon",
    title: "Autónomos en Japón: la guía de impuestos que nadie te da en español",
    excerpt:
      "Kakutei shinkoku, seguro nacional de salud y pensión: el mapa fiscal completo para quien factura como freelance en Japón.",
    content: "La declaración de la renta japonesa (kakutei shinkoku) asusta la primera vez, pero tiene lógica propia...",
    category: "economia" as const,
    coverImage: null,
    isPremium: false,
    status: "publicado" as const,
    readingMinutes: 9,
    publishedAt: daysAgo(17),
  },
  // ── Cultura (4 más) ──────────────────────────────────────────
  {
    slug: "sistema-escolar-japones",
    title: "Cómo es de verdad el sistema escolar japonés por dentro",
    excerpt:
      "Uniformes, limpieza del aula por los propios alumnos y una presión académica que empieza mucho antes de lo que se piensa.",
    content: "Llevar a mi hijo a la escuela pública japonesa me enseñó más de la cultura que diez años viviendo aquí...",
    category: "cultura" as const,
    coverImage: null,
    isPremium: false,
    status: "publicado" as const,
    readingMinutes: 6,
    publishedAt: daysAgo(7),
  },
  {
    slug: "festivales-matsuri-guia",
    title: "Matsuri: la guía para disfrutar un festival japonés como un local",
    excerpt:
      "Yukata, puestos de comida y el orden no escrito que sigue todo el mundo salvo los turistas que no lo saben.",
    content: "El primer matsuri al que fui no entendí ni la mitad de lo que pasaba a mi alrededor...",
    category: "cultura" as const,
    coverImage: null,
    isPremium: false,
    status: "publicado" as const,
    readingMinutes: 5,
    publishedAt: daysAgo(10),
  },
  {
    slug: "keigo-niveles-formalidad",
    title: "Keigo: por qué el japonés formal es un idioma dentro del idioma",
    excerpt:
      "Sonkeigo, kenjougo y teineigo no son matices, son sistemas gramaticales completos. Así se navega sin quedar fatal.",
    content: "El japonés formal no es simplemente 'ser educado', es una estructura gramatical distinta...",
    category: "cultura" as const,
    coverImage: null,
    isPremium: false,
    status: "publicado" as const,
    readingMinutes: 7,
    publishedAt: daysAgo(16),
  },
  {
    slug: "trabajo-horas-extra-japon",
    title: "Horas extra en Japón: entre la ley, la costumbre y el karoshi",
    excerpt:
      "La reforma laboral de 2019 puso límites reales por primera vez. Qué cambió, qué no, y cómo se vive desde dentro de una oficina.",
    content: "La palabra karoshi (muerte por exceso de trabajo) existe en japonés porque hizo falta nombrarla...",
    category: "cultura" as const,
    coverImage: null,
    isPremium: false,
    status: "publicado" as const,
    readingMinutes: 8,
    publishedAt: daysAgo(20),
  },
  // ── Inmobiliaria (4 más) ─────────────────────────────────────
  {
    slug: "zonas-tokio-para-vivir-extranjeros",
    title: "Las zonas de Tokio donde mejor vive un extranjero (y por qué)",
    excerpt:
      "Ni todo es Shibuya ni todo es Roppongi. Un repaso barrio a barrio pensado en precio, transporte y vida real, no en postales.",
    content: "Después de haber vivido en cuatro barrios distintos de Tokio, tengo opiniones bastante formadas...",
    category: "inmobiliaria" as const,
    coverImage: null,
    isPremium: false,
    status: "publicado" as const,
    readingMinutes: 7,
    publishedAt: daysAgo(5),
  },
  {
    slug: "reikin-shikikin-explicado",
    title: "Reikin y shikikin: el dinero extra que nadie te explica al alquilar",
    excerpt:
      "El 'dinero de agradecimiento' al casero sigue existiendo en buena parte de Japón. Cuánto cuesta y cómo evitarlo cuando se puede.",
    content: "La primera vez que vi la palabra reikin en un contrato de alquiler pensé que era un error...",
    category: "inmobiliaria" as const,
    coverImage: null,
    isPremium: false,
    status: "publicado" as const,
    readingMinutes: 6,
    publishedAt: daysAgo(11),
  },
  {
    slug: "akiya-casas-abandonadas-japon",
    title: "Akiya: comprar una casa abandonada en Japón por casi nada tiene truco",
    excerpt:
      "Los titulares hablan de casas por 500 euros. La realidad incluye reformas, papeleo y una curva de aprendizaje que pocos cuentan.",
    content: "El fenómeno akiya lleva años generando titulares virales, casi siempre incompletos...",
    category: "inmobiliaria" as const,
    coverImage: null,
    isPremium: false,
    status: "publicado" as const,
    readingMinutes: 8,
    publishedAt: daysAgo(19),
  },
  {
    slug: "hipoteca-japon-no-residente",
    title: "Conseguir una hipoteca en Japón sin ser residente permanente",
    excerpt:
      "Algunos bancos sí prestan a extranjeros con visado de trabajo. Los requisitos reales, no los que circulan de oídas.",
    content: "La creencia extendida es que sin residencia permanente ningún banco japonés te va a prestar dinero...",
    category: "inmobiliaria" as const,
    coverImage: null,
    isPremium: false,
    status: "publicado" as const,
    readingMinutes: 9,
    publishedAt: daysAgo(22),
  },
];

async function seed() {
  const db = getDb();
  console.log("Seeding database...");

  for (const post of seedPosts) {
    // Imagen de ejemplo (Lorem Picsum, foto real libre de derechos) — una
    // distinta y estable por post, hasta que se sustituya por fotografía real.
    const withImage = {
      ...post,
      coverImage: `https://picsum.photos/seed/${post.slug}/800/600`,
    };
    await db.insert(posts).values(withImage).onDuplicateKeyUpdate({ set: withImage });
  }

  console.log(`Done. Inserted/updated ${seedPosts.length} posts.`);
  process.exit(0);
}

seed();
