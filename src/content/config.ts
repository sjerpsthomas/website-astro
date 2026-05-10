import { defineCollection, z } from "astro:content";
import type {SchemaContext} from "astro/content/config";

const portfolio = defineCollection({
  type: "content",

  schema: ({ image }: SchemaContext) => z.object({
    title: z.string(),
    subtitle: z.string(),

    image: image(),

    category: z.string(),

    links: z.array(z.object({ text: z.string(), href: z.string() })),

    date: z.date(),
  }),
});

const home = defineCollection({ type: "content" });

export const collections = { portfolio, home };
