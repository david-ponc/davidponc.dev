import { en } from './en';
import { es } from './es';
import type { Translations } from './types';

export type { Hero, Navbar, Translations } from './types';

export type Locale = 'es' | 'en';

export const DEFAULT_LOCALE: Locale = 'es';

const translations: Record<Locale, Translations> = { es, en };

export function getTranslations(locale: Locale): Translations {
	return translations[locale];
}

export function getLocale(locale: string | undefined): Locale {
	if (locale === 'en' || locale === 'es') return locale;
	return DEFAULT_LOCALE;
}
