import type { Locale } from '~/i18n';

export interface FormatDateOptions {
	locale: Locale;
	month?: 'long' | 'short' | 'narrow' | 'numeric' | '2-digit';
	year?: 'numeric' | '2-digit';
}

const DEFAULT_OPTIONS = {
	month: 'long',
	year: 'numeric',
} satisfies Pick<FormatDateOptions, 'month' | 'year'>;

export function formatDate(date: Date, options: FormatDateOptions): string {
	const { locale, month = DEFAULT_OPTIONS.month, year = DEFAULT_OPTIONS.year } = options;

	return new Intl.DateTimeFormat(locale, { month, year }).format(date);
}
