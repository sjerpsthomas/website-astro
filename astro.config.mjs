import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
// noinspection ES6PreferShortImport
import { DEFAULT_LOCALE, LOCALES } from './src/lib/locale.js';

import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://astro-nano-demo.vercel.app",
  integrations: [mdx(), sitemap(), icon()],

  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: LOCALES,
    routing: {
      prefixDefaultLocale: false,
      strategy: 'manual',
    },
  },

  vite: {
    plugins: [tailwindcss()]
  }
});