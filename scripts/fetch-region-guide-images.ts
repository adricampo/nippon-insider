// Script puntual: descarga una foto de portada real por cada una de las
// 8 regiones tradicionales de Japón, reutilizando la misma integración
// de Pexels que ya usa fetch-city-guide-images.ts. Excluye las URLs ya
// usadas en las guías de ciudad para no repetir foto entre una guía y
// la portada de su región.
//
//   npx tsx scripts/fetch-region-guide-images.ts

import "dotenv/config";
import { writeFileSync } from "node:fs";
import { findCoverImage } from "../server/lib/pexels";
import { REGION_GUIDES } from "../contracts/regionGuides";
import { REGIONS, REGION_ORDER } from "../contracts/prefectures";
import { CITY_GUIDE_IMAGES } from "../contracts/cityGuideImages.generated";

const OUTPUT_PATH = "contracts/regionGuideImages.generated.ts";

const EXTRA_QUERY: Record<string, string> = {
  hokkaido: "Sapporo Hokkaido snow",
  tohoku: "Tohoku Japan countryside",
  kanto: "Tokyo Japan skyline",
  chubu: "Japanese Alps mountains",
  kinki: "Kyoto Japan temple",
  chugoku: "Hiroshima Miyajima torii",
  shikoku: "Shikoku Japan Naruto",
  "kyushu-okinawa": "Okinawa Japan beach",
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  if (!process.env.PEXELS_API_KEY) {
    throw new Error("Falta PEXELS_API_KEY en el entorno — no se puede continuar.");
  }

  const usedUrls = new Set<string>(Object.values(CITY_GUIDE_IMAGES));
  const results: Record<string, string> = {};

  for (let i = 0; i < REGION_ORDER.length; i++) {
    const slug = REGION_ORDER[i];
    const region = REGIONS[slug];
    const queries = [
      `${region.label} Japan`,
      EXTRA_QUERY[slug],
      "Japan travel landscape",
    ].filter(Boolean);

    const url = await findCoverImage(queries, usedUrls, 6);
    if (url) {
      results[slug] = url;
      usedUrls.add(url);
      console.log(`[${i + 1}/${REGION_ORDER.length}] ${slug} -> ok`);
    } else {
      console.warn(`[${i + 1}/${REGION_ORDER.length}] ${slug} -> SIN IMAGEN`);
    }

    await sleep(250);
  }

  const missing = REGION_ORDER.filter((slug) => !results[slug]);
  if (missing.length) {
    console.warn(`\n${missing.length} regiones sin imagen: ${missing.join(", ")}`);
  }

  const out = `// Generado automáticamente por scripts/fetch-region-guide-images.ts
// a partir de la API de Pexels. No editar a mano — volver a ejecutar el
// script si hace falta regenerarlo.

export const REGION_GUIDE_IMAGES: Record<string, string> = ${JSON.stringify(results, null, 2)};
`;

  writeFileSync(OUTPUT_PATH, out);
  console.log(`\nEscritas ${Object.keys(results).length}/${REGION_ORDER.length} imágenes en ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
