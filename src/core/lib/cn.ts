import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...classes: Array<ClassValue>): string {
	return twMerge(clsx(classes));
}
