export const LOCALES = ['nl', 'en'] as const;
export type Locale = typeof LOCALES[number];

export const DEFAULT_LOCALE: Locale = "nl";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');

  if (isLocale(lang)) return lang;

  return DEFAULT_LOCALE;
}
