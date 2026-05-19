import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://astro.build/config
// @ts-check

export default defineConfig({
	site: 'https://davidponc.dev',
	integrations: [react(), sitemap()],
	vite: {
		plugins: [tsconfigPaths(), tailwindcss()],
	},

	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: 'Geist',
			cssVariable: '--font-app-sans',
			weights: ['100 900'],
			styles: ['normal'],
			fallbacks: ['sans-serif'],
		},
		{
			provider: fontProviders.fontsource(),
			name: 'Geist Mono',
			cssVariable: '--font-app-mono',
			weights: ['100 900'],
			styles: ['normal'],
			fallbacks: ['monospace'],
		},
	],

	output: 'server',
	adapter: vercel({
		imageService: true,
	}),

	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'en'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
