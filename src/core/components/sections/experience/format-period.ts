import { formatDate } from '~/core/lib/format-date';
import type { Locale } from '~/i18n';

interface FormatPeriodOptions {
	locale: Locale;
	present: string;
}

export interface Period {
	range: string;
	duration: string;
}

function calculateDuration(start: Date, end: Date): { years: number; months: number } {
	const totalMonths =
		(end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
}

function formatDurationPart(
	value: number,
	unit: 'year' | 'month',
	locale: Locale,
): string {
	return new Intl.NumberFormat(locale, {
		style: 'unit',
		unit,
		unitDisplay: 'long',
	}).format(value);
}

function formatDuration(years: number, months: number, locale: Locale): string {
	const parts: string[] = [];

	if (years > 0) parts.push(formatDurationPart(years, 'year', locale));
	if (months > 0) parts.push(formatDurationPart(months, 'month', locale));

	return parts.join(' ');
}

export function formatPeriod(
	startDate: Date,
	endDate: Date | null,
	options: FormatPeriodOptions,
): Period {
	const { locale, present } = options;
	const end = endDate ?? new Date();

	const startFormatted = formatDate(startDate, { locale });
	const endFormatted = endDate ? formatDate(endDate, { locale }) : present;

	const { years, months } = calculateDuration(startDate, end);
	const duration = formatDuration(years, months, locale);

	return {
		range: `${startFormatted} - ${endFormatted}`,
		duration,
	};
}
