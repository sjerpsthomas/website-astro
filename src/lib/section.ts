import { getCollection } from "astro:content";
import type { Locale } from "@lib/locale.ts";

export const SECTION_TYPES = ["tekst", "videos", "contact"] as const;
export type Section = (typeof SECTION_TYPES)[number];

export async function getSections(locale: Locale) {
  const collection = await getCollection("sections", ({ id }) => {
    return id.startsWith(`${locale}/`);
  });
  collection.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

  return await Promise.all(
    collection.map(async (item) => {
      const { Content } = await item.render();

      return { ...item, Content };
    }),
  );
}

export function toAnchorName(section: {
  data: { title_navbar?: string; title: string };
}): string {
  return (section.data.title_navbar ?? section.data.title)
    .trim()
    .toLowerCase()
    .replaceAll(" ", "-");
}