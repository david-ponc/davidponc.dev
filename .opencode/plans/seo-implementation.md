# SEO Implementation Plan

## 1. Update `src/core/components/layouts/root.astro`

Replace the entire file with:

```astro
---
import "~/core/styles/global.css";

import { Font } from "astro:assets";
import type { Locale } from "~/i18n";
import { DEFAULT_LOCALE, getTranslations } from "~/i18n";
import { ClientRouter } from "astro:transitions";

interface Props {
  lang?: Locale;
  title?: string;
  description?: string;
}

const {
  lang = DEFAULT_LOCALE,
  title = "David Ponce Vargas",
  description,
} = Astro.props;

const t = getTranslations(lang);
const pageDescription = description ?? t.hero.bio;

const SITE_URL = "https://davidponc.dev";
const currentPath = Astro.url.pathname;
const canonicalUrl = `${SITE_URL}${currentPath}`;

const themeCookie = Astro.cookies.get("theme")?.value ?? "system";
const isDark = themeCookie === "dark";
---

<html
  lang={lang}
  class:list={["scroll-smooth antialiased", { dark: isDark }]}
  transition:animate="none"
>
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="generator" content={Astro.generator} />
    <meta name="description" content={pageDescription} />
    <meta name="robots" content="index, follow" />

    <!-- Canonical URL -->
    <link rel="canonical" href={canonicalUrl} />

    <!-- Hreflang alternate links -->
    <link
      rel="alternate"
      hreflang="es"
      href={`${SITE_URL}${currentPath}`}
    />
    <link
      rel="alternate"
      hreflang="en"
      href={`${SITE_URL}/en${currentPath === "/" ? "" : currentPath}`}
    />
    <link
      rel="alternate"
      hreflang="x-default"
      href={`${SITE_URL}${currentPath}`}
    />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:locale" content={lang === "es" ? "es_MX" : "en_US"} />
    <meta property="og:site_name" content="David Ponce Vargas" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={pageDescription} />
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="David Ponce Vargas - Web Developer Portfolio" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={pageDescription} />
    <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />

    <title>{title}</title>
    <Font cssVariable="--font-app-sans" preload />
    <Font cssVariable="--font-app-mono" />
    <ClientRouter />

    <!-- JSON-LD Structured Data: Person -->
    <script
      type="application/ld+json"
      set:html={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "David Ponce Vargas",
        "url": SITE_URL,
        "jobTitle": lang === "es" ? "Desarrollador Web" : "Web Developer",
        "description": pageDescription,
        "sameAs": [
          "https://github.com/david-ponc",
          "https://www.linkedin.com/in/david-ponc/",
        ],
      })}
    />

    <script is:inline>
      (function () {
        const DARK_CLASS = "dark";
        const systemMq = window.matchMedia("(prefers-color-scheme: dark)");

        function getStoredTheme() {
          const match = document.cookie.match(/(?:^|; )theme=([^;]*)/);
          return match ? decodeURIComponent(match[1]) : "system";
        }

        function applyTheme() {
          const theme = getStoredTheme();
          const prefersDark =
            theme === "system" ? systemMq.matches : theme === "dark";
          document.documentElement.classList.toggle(DARK_CLASS, prefersDark);
        }

        applyTheme();

        document.addEventListener("astro:after-swap", applyTheme);

        systemMq.addEventListener("change", applyTheme);
      })();
    </script>
  </head>
  <body
    class="flex min-h-full flex-col bg-background text-foreground tracking-[-1.5%] overflow-x-hidden"
  >
    <slot />
  </body>
</html>
```

### Changes:
- Added `description` prop with fallback to translated hero bio
- Fixed viewport: `width=device-width, initial-scale=1`
- Added `<meta name="description">`
- Added `<meta name="robots" content="index, follow">`
- Added `<link rel="canonical">`
- Added hreflang alternate links (es, en, x-default)
- Added Open Graph tags (type, locale, site_name, title, description, url, image with dimensions)
- Added Twitter Card tags (summary_large_image)
- Added JSON-LD Person structured data with GitHub and LinkedIn

---

## 2. Create `public/robots.txt`

```text
# /robots.txt
User-agent: *
Allow: /

Sitemap: https://davidponc.dev/sitemap-index.xml
```

---

## 3. Add `@astrojs/sitemap` integration

### Install:
```bash
pnpm add @astrojs/sitemap
```

### Update `astro.config.mjs`:
Add to imports and integrations:

```diff
+ import sitemap from '@astrojs/sitemap';

  export default defineConfig({
-   integrations: [react()],
+   integrations: [react(), sitemap()],
    // ...
+   site: 'https://davidponc.dev',
  });
```

---

## 4. Add security headers to `vercel.json`

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "astro",
  "buildCommand": "astro build",
  "outputDirectory": "dist",
  "devCommand": "astro dev",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

---

## 5. Create OG Image

Create `public/og-image.jpg` (1200x630px) with:
- Your name: "David Ponce Vargas"
- Title: "Web Developer"
- Clean, professional design matching your site's aesthetic

---

## SEO Checklist After Implementation

- [ ] Verify meta description renders correctly on both / and /en
- [ ] Validate structured data at https://search.google.com/test/rich-results
- [ ] Run Lighthouse SEO audit
- [ ] Submit sitemap to Google Search Console
- [ ] Verify hreflang tags with https://technicalseo.com/tools/hreflang-tags/
- [ ] Test Open Graph preview with https://www.opengraph.xyz/
