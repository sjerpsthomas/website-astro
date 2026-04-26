import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
// noinspection ES6PreferShortImport
import { DEFAULT_LOCALE, LOCALES } from './src/lib/locale.js';

import icon from "astro-icon";

export default defineConfig({
  site: "https://astro-nano-demo.vercel.app",
  integrations: [mdx(), sitemap(), tailwind(), icon()],

  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: LOCALES,
    routing: {
      prefixDefaultLocale: false,
      strategy: 'manual',
    },
  }
});