// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';
import tsconfigPaths from 'vite-tsconfig-paths';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
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

  output: "server",
  adapter: vercel(),

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});