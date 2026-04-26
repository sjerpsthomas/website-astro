import { COLORS } from "@lib/color";
import { SECTION_TYPES } from "@lib/section.ts";
import { defineCollection, z } from "astro:content";
import type {SchemaContext} from "astro/content/config";

const sections = defineCollection({
  type: "content",

  schema: ({ image }: SchemaContext) => z.object({
    title: z.string(),

    type: z.enum(SECTION_TYPES).default("tekst"),

    title_navbar: z.optional(z.string()),

    achtergrond: z.union([z.enum(COLORS), image()]).default("zwart"),
    tekstkleur: z.enum(COLORS).default("wit"),
    tekstkleur_achtergrond: z.enum(COLORS).default("zwart"),

    polaroid_links: z.object({ image: image(), description: z.string() }).optional(),
    polaroid_rechts: z.object({ image: image(), description: z.string() }).optional(),

    aantal_stickers: z.number().default(4),

    socials: z.optional(z.array(z.object({
      social: z.string(),
      name: z.string(),
      url: z.string(),
    })))
  }),
});

const portfolio = defineCollection({
  type: "content",

  schema: ({ image }: SchemaContext) => z.object({
    title: z.string(),
    subtitle: z.string(),

    image: image(),

    tags: z.array(z.string()),

    links: z.array(z.object({ text: z.string(), href: z.string() })),

    date: z.date(),
  }),
});

export const collections = { portfolio, sections };
