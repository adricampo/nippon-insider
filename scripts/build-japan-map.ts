// Script puntual: descarga el mapa SVG de las 47 prefecturas de Japón de
// github.com/geolonia/japanese-prefectures (GFDL, basado en el mapa de
// Wikipedia) y lo convierte en datos estáticos que JapanMap.tsx renderiza.
//
// No se ejecuta en build ni en runtime — solo se vuelve a correr a mano
// si algún día hace falta regenerar src/components/destinos/japanMapData.generated.ts
//
//   npx tsx scripts/build-japan-map.ts

import { writeFileSync } from "node:fs";
import { PREFECTURES } from "../contracts/prefectures";

const SOURCE_URL =
  "https://raw.githubusercontent.com/geolonia/japanese-prefectures/master/map-full.svg";
const OUTPUT_PATH =
  "src/components/destinos/japanMapData.generated.ts";

type RawShape = { kind: "polygon"; points: string } | { kind: "path"; d: string };

interface RawPrefecturePath {
  slug: string;
  code: string;
  transform: string;
  shapes: RawShape[];
}

async function main() {
  const res = await fetch(SOURCE_URL);
  if (!res.ok) {
    throw new Error(`No se pudo descargar el SVG fuente (HTTP ${res.status})`);
  }
  const svg = await res.text();

  const groupRe =
    /<g class="([a-z0-9 -]+) prefecture" data-code="(\d+)"[^>]*transform="([^"]+)">([\s\S]*?)<\/g>/g;
  // La mayoría de prefecturas son <polygon points="...">, pero algunas
  // (ej. Kumamoto) usan <path d="..."> para su contorno — hay que
  // soportar ambos tipos de forma dentro de un mismo grupo.
  const shapeRe = /<polygon points="([^"]+)"\/>|<path d="([^"]+)"\/>/g;

  const entries: RawPrefecturePath[] = [];
  let m: RegExpExecArray | null;
  while ((m = groupRe.exec(svg))) {
    const classes = m[1].trim().split(/\s+/);
    const slug = classes[0];
    const code = m[2];
    const transform = m[3];
    const body = m[4];

    const shapes: RawShape[] = [];
    let sm: RegExpExecArray | null;
    shapeRe.lastIndex = 0;
    while ((sm = shapeRe.exec(body))) {
      if (sm[1] !== undefined) shapes.push({ kind: "polygon", points: sm[1] });
      else shapes.push({ kind: "path", d: sm[2] });
    }
    if (shapes.length === 0) {
      throw new Error(`Prefectura sin formas extraídas: ${slug}`);
    }

    entries.push({ slug, code, transform, shapes });
  }

  if (entries.length !== 47) {
    throw new Error(
      `Se esperaban 47 prefecturas, se han extraído ${entries.length}. ¿Cambió la estructura del SVG fuente?`,
    );
  }

  // Verificación cruzada contra el registro: slug y code deben coincidir
  // exactamente con contracts/prefectures.ts, o el mapa quedaría con
  // prefecturas huérfanas o mal etiquetadas.
  for (const e of entries) {
    const pref = PREFECTURES[e.slug];
    if (!pref) {
      throw new Error(
        `Prefectura "${e.slug}" no existe en contracts/prefectures.ts`,
      );
    }
    if (pref.code !== e.code) {
      throw new Error(
        `data-code no coincide para ${e.slug}: SVG=${e.code} registro=${pref.code}`,
      );
    }
  }

  const out = `// Generado automáticamente por scripts/build-japan-map.ts a partir de
// https://github.com/geolonia/japanese-prefectures (GFDL, basado en el
// mapa de Japón de Wikipedia). No editar a mano.

export type JapanMapShape =
  | { kind: "polygon"; points: string }
  | { kind: "path"; d: string };

export interface JapanMapPrefecturePath {
  slug: string;
  transform: string;
  shapes: JapanMapShape[];
}

export const JAPAN_MAP_PATHS: JapanMapPrefecturePath[] = ${JSON.stringify(
    entries.map(({ slug, transform, shapes }) => ({
      slug,
      transform,
      shapes,
    })),
    null,
    2,
  )};
`;

  writeFileSync(OUTPUT_PATH, out);
  console.log(`Escritas ${entries.length} prefecturas en ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
