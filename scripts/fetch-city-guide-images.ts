// Script puntual: descarga una foto de portada real por cada guía de
// ciudad de contracts/cityGuides.ts, reutilizando la misma integración
// de Pexels que ya usa el motor de contenido para los posts
// (server/lib/pexels.ts) — no se añade ninguna dependencia nueva.
//
// Prueba primero el nombre de la ciudad, luego el de la prefectura, y
// por último una búsqueda genérica de Japón, para que ninguna guía se
// quede sin imagen aunque el pueblo en concreto no tenga fotos propias
// en Pexels. Deduplica entre las 142 entradas.
//
//   npx tsx scripts/fetch-city-guide-images.ts

import "dotenv/config";
import { writeFileSync } from "node:fs";
import { findCoverImage } from "../server/lib/pexels";
import { CITY_GUIDES } from "../contracts/cityGuides";
import { PREFECTURES, citySlug } from "../contracts/prefectures";

const OUTPUT_PATH = "contracts/cityGuideImages.generated.ts";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  if (!process.env.PEXELS_API_KEY) {
    throw new Error("Falta PEXELS_API_KEY en el entorno — no se puede continuar.");
  }

  const usedUrls = new Set<string>();
  const results: Record<string, string> = {};
  const entries = Object.entries(CITY_GUIDES);

  for (let i = 0; i < entries.length; i++) {
    const [slug, guide] = entries[i];
    const prefecture = PREFECTURES[guide.prefectureSlug];
    const cityName = prefecture?.cities.find((c) => citySlug(c) === slug);
    const label = cityName ?? slug;

    const queries = [
      `${label} Japan`,
      prefecture ? `${prefecture.name} Japan` : "",
      "Japan travel landscape",
    ].filter(Boolean);

    const url = await findCoverImage(queries, usedUrls, 6);
    if (url) {
      results[slug] = url;
      usedUrls.add(url);
      console.log(`[${i + 1}/${entries.length}] ${slug} -> ok`);
    } else {
      console.warn(`[${i + 1}/${entries.length}] ${slug} -> SIN IMAGEN`);
    }

    await sleep(250);
  }

  const missing = entries.filter(([slug]) => !results[slug]);
  if (missing.length) {
    console.warn(
      `\n${missing.length} guías sin imagen: ${missing.map(([s]) => s).join(", ")}`,
    );
  }

  const out = `// Generado automáticamente por scripts/fetch-city-guide-images.ts
// a partir de la API de Pexels. No editar a mano — volver a ejecutar el
// script si hace falta regenerarlo (por ejemplo, tras añadir más guías).

export const CITY_GUIDE_IMAGES: Record<string, string> = ${JSON.stringify(results, null, 2)};
`;

  writeFileSync(OUTPUT_PATH, out);
  console.log(`\nEscritas ${Object.keys(results).length}/${entries.length} imágenes en ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
