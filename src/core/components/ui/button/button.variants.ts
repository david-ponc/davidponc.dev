import { createTV, type VariantProps } from 'tailwind-variants';

const tv = createTV({
	twMergeConfig: {
		extend: {
			theme: {
				'inset-shadow': ['t-px'],
			},
		},
	},
});

export const buttonVariants = tv({
	base: [
		'relative inline-flex items-center justify-center gap-2 rounded-lg ring',
		'select-none whitespace-nowrap',
		'transition-colors duration-75 ease-in-out',
		'focus-visible:outline-2 focus-visible:outline-offset-2',
	],
	variants: {
		variant: {
			default: [
				'ring-primary bg-primary text-primary-foreground inset-shadow-t-px inset-shadow-white/32',
				'hover:bg-primary/90',
				'active:after:absolute active:after:rounded-[inherit] active:after:inset-0 active:after:bg-default-active',
			],
			secondary: [
				'ring-border bg-secondary text-secondary-foreground inset-shadow-t-px inset-shadow-white/56 dark:inset-shadow-white/16',
				'hover:text-foreground hover:bg-secondary/80',
				'active:after:absolute active:after:rounded-[inherit] active:after:inset-0 active:after:bg-secondary-active',
			],
			'glow-outline': [
				'ring-transparent contact-me text-muted-foreground hover:text-foreground',
			],
			ghost: [
				'ring-transparent bg-transparent text-secondary-foreground hover:bg-muted hover:text-foreground',
				'active:after:absolute active:after:rounded-[inherit] active:after:inset-0 active:after:bg-accent/50',
			],
		},
		size: {
			default: [
				'h-10 px-4 py-2',
				'active:pt-[calc(--spacing(2)+1px)] active:pb-[calc(--spacing(2)-1px)]',
			],
			sm: [
				'h-9 px-3 py-1.5',
				'active:pt-[calc(--spacing(1.5)+1px)] active:pb-[calc(--spacing(1.5)-1px)]',
			],
			xs: [
				'h-8 px-2.5 py-1 text-sm',
				'active:pt-[calc(--spacing(1)+1px)] active:pb-[calc(--spacing(1)-1px)]',
			],
			icon: [
				"size-10 py-2.5 [&_svg:not([class*='size-'])]:size-4",
				'active:pt-[calc(--spacing(2.5)+1px)] active:pb-[calc(--spacing(2.5)-1px)]',
			],
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
});

export type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>['variant']>;
export type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>['size']>;
