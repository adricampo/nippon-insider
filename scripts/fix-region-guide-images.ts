// Script puntual: corrige regiones concretas de
// contracts/regionGuideImages.generated.ts detectadas como poco
// representativas en una revisión visual manual.
//
//   npx tsx scripts/fix-region-guide-images.ts

import "dotenv/config";
import { readFileSync, writeFileSync } from "node:fs";
import { findCoverImage } from "../server/lib/pexels";
import { CITY_GUIDE_IMAGES } from "../contracts/cityGuideImages.generated";

const PATH = "contracts/regionGuideImages.generated.ts";

const FIXES: Record<string, string[]> = {
  chubu: ["Shirakawa-go Japan village", "Japanese Alps mountains snow"],
  shikoku: ["Iya valley Shikoku Japan", "Ritsurin garden Takamatsu Japan"],
  "kyushu-okinawa": ["Sakurajima volcano Kagoshima Japan", "Okinawa Japan tropical beach"],
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  if (!process.env.PEXELS_API_KEY) {
    throw new Error("Falta PEXELS_API_KEY en el entorno — no se puede continuar.");
  }

  const raw = readFileSync(PATH, "utf8");
  const m = raw.match(/\{[\s\S]*\}/);
  if (!m) throw new Error("No se pudo parsear el registro actual de imágenes.");
  const current: Record<string, string> = JSON.parse(m[0]);

  const usedUrls = new Set<string>([
    ...Object.values(current),
    ...Object.values(CITY_GUIDE_IMAGES),
  ]);

  for (const [slug, queries] of Object.entries(FIXES)) {
    usedUrls.delete(current[slug]);
    const url = await findCoverImage(queries, usedUrls, 8);
    if (url) {
      console.log(`${slug}: ${current[slug]} -> ${url}`);
      current[slug] = url;
      usedUrls.add(url);
    } else {
      console.warn(`${slug}: sin resultado nuevo, se mantiene la foto anterior`);
      usedUrls.add(current[slug]);
    }
    await sleep(250);
  }

  const out = `// Generado automáticamente por scripts/fetch-region-guide-images.ts
// a partir de la API de Pexels. No editar a mano — volver a ejecutar el
// script si hace falta regenerarlo.

export const REGION_GUIDE_IMAGES: Record<string, string> = ${JSON.stringify(current, null, 2)};
`;

  writeFileSync(PATH, out);
  console.log(`\nActualizado ${PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
