// List the supported language codes.
export const locales = ['de', 'en', 'es'] as const;

// Restrict language values to 'de', 'en', or 'es'.
export type Locale = (typeof locales)[number];

// Choose the language visitors receive by default.
export const defaultLocale: Locale = 'de';

// Provide a readable name for every supported language.
export const languageNames: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
  es: 'Español',
};