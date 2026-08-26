// Script puntual: corrige entradas concretas de
// contracts/cityGuideImages.generated.ts detectadas como incorrectas en
// una revisión visual manual (p. ej. una foto de Kioto para
// "kakunodate", o de Tsukiji/Tokio para "tsu"). Reutiliza
// findCoverImage() con queries más específicas para esas ciudades
// únicamente, excluyendo todas las URLs ya usadas en el resto del
// registro para no introducir un duplicado.
//
//   npx tsx scripts/fix-city-guide-images.ts

import "dotenv/config";
import { readFileSync, writeFileSync } from "node:fs";
import { findCoverImage } from "../server/lib/pexels";

const PATH = "contracts/cityGuideImages.generated.ts";

const FIXES: Record<string, string[]> = {
  tono: ["Tono Iwate rural Japan", "Iwate Japan countryside mountains"],
  kakunodate: ["Kakunodate samurai district Japan", "Akita Japan samurai town"],
  aizuwakamatsu: ["Tsurugajo castle Japan", "Aizuwakamatsu Japan"],
  tsuruga: ["Tsuruga port Fukui Japan", "Fukui Japan coast"],
  tsu: ["Tsu Mie Japan", "Mie Japan countryside"],
  asuka: ["Asuka Nara ancient tombs Japan", "Nara Japan rural countryside"],
  gifu: ["Nagara river cormorant fishing Gifu", "Gifu castle Japan"],
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

  const usedUrls = new Set(Object.values(current));

  for (const [slug, queries] of Object.entries(FIXES)) {
    usedUrls.delete(current[slug]); // permite reencontrar todo menos su propia foto errónea
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

  const out = `// Generado automáticamente por scripts/fetch-city-guide-images.ts
// a partir de la API de Pexels. No editar a mano — volver a ejecutar el
// script si hace falta regenerarlo (por ejemplo, tras añadir más guías).

export const CITY_GUIDE_IMAGES: Record<string, string> = ${JSON.stringify(current, null, 2)};
`;

  writeFileSync(PATH, out);
  console.log(`\nActualizado ${PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
