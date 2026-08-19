export const CATEGORIES = [
  { slug: "turismo", label: "Turismo", kanji: "旅" },
  { slug: "economia", label: "Economía", kanji: "経" },
  { slug: "cultura", label: "Cultura", kanji: "文" },
  { slug: "inmobiliaria", label: "Inmobiliaria", kanji: "宅" },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];

export function categoryLabel(slug: string): string {
  return CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}

export function categoryKanji(slug: string): string {
  return CATEGORIES.find((c) => c.slug === slug)?.kanji ?? "日";
}
