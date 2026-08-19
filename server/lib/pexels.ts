// Busca una foto de portada real en Pexels (gratis, sin límite práctico
// para un blog). Prueba cada query en orden; para cada una pide varios
// candidatos (no solo el primero) y se queda con el primero que no esté
// ya usado como portada de otro post — dos búsquedas de texto distinto
// pueden coincidir en la misma foto como resultado #1 de Pexels, así que
// pedir un solo resultado producía duplicados en la práctica.
// Sin PEXELS_API_KEY, o si todo falla o ya está usado, devuelve null — el
// frontend ya sabe mostrar el glifo de categoría como respaldo.
export async function findCoverImage(
  queries: string[],
  excludeUrls: Set<string> = new Set(),
  candidatesPerQuery = 6,
): Promise<string | null> {
  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) return null;

  for (const query of queries) {
    if (!query.trim()) continue;
    try {
      const res = await fetch(
        `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${candidatesPerQuery}&orientation=landscape`,
        {
          headers: { Authorization: apiKey },
          signal: AbortSignal.timeout(8000),
        },
      );
      if (!res.ok) continue;
      const data = (await res.json()) as {
        photos: { src: { landscape: string } }[];
      };
      const fresh = data.photos.find((p) => !excludeUrls.has(p.src.landscape));
      if (fresh) return fresh.src.landscape;
    } catch (err) {
      console.error(`[pexels] Búsqueda "${query}" falló:`, err);
    }
  }
  return null;
}
