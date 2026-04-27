import { defineCollection, z } from "astro:content";
import type {SchemaContext} from "astro/content/config";

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

export const collections = { portfolio };
