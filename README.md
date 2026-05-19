# davidponc.dev

[![Astro](https://img.shields.io/badge/Astro-6.2.1-BC52EE?logo=astro)](https://astro.build)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.2-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel)](https://vercel.com)

---

## Visión General

Código fuente de [davidponc.dev](https://davidponc.dev), mi sitio personal. Un portafolio construido con Astro, React y TypeScript. Incluye soporte multilingüe (español e inglés), modo oscuro y despliegue en Vercel.

---

## Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Framework | [Astro](https://astro.build) v6 con renderizado híbrido (SSR) |
| Interactividad | [React](https://react.dev) v19 + [Base UI](https://base-ui.com) |
| Estilos | [Tailwind CSS](https://tailwindcss.com) v4 con configuración Vite |
| Tipografía | Geist Sans & Geist Mono vía Fontsource |
| Lenguaje | TypeScript con paths absolutos |
| Calidad de código | [Biome](https://biomejs.dev) (lint, format, check) |
| Control de versiones | Commitlint + Lefthook |
| Despliegue | [Vercel](https://vercel.com) con Image Service |

---

## Características Destacadas

- **Rendimiento superior** — Astro entrega HTML estático por defecto; JavaScript solo donde se requiere interactividad.
- **View Transitions** — Navegación fluida entre páginas mediante las transiciones nativas de Astro.
- **Multilingüe** — Enrutamiento internacionalizado con español como idioma por defecto.
- **Tema adaptable** — Soporte completo para modo claro, oscuro y preferencia del sistema, gestionado vía cookie.
- **Imágenes optimizadas** — Servicio de imágenes de Vercel con formatos modernos (AVIF, WebP) y carga eager para el contenido crítico.
- **SEO integrado** — Metadatos dinámicos, OpenGraph, sitemap automático y preconnect a dominios externos.
- **Tipografía sistemática** — Familias tipográficas variables con pesos del 100 al 900.

---

## Requisitos

- [Node.js](https://nodejs.org) >= 24.0.0
- [pnpm](https://pnpm.io) (gestor de paquetes preferido)

---

## Scripts Disponibles

| Comando | Acción |
|---------|--------|
| `pnpm install` | Instala las dependencias |
| `pnpm dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Compila el sitio para producción en `./dist/` |
| `pnpm preview` | Previsualiza la build localmente |
| `pnpm format` | Formatea el código con Biome |
| `pnpm lint` | Ejecuta el linter de Biome |
| `pnpm check` | Verifica format y lint en conjunto |
| `pnpm prepare` | Instala los hooks de Git con Lefthook |

---

## Estructura del Proyecto

```
├── public/              # Activos estáticos (favicon, robots, OpenGraph)
├── src/
│   ├── core/
│   │   ├── components/  # Componentes Astro y React (sections, layouts, ui)
│   │   ├── lib/         # Utilidades (cn, format-date)
│   │   └── styles/      # Estilos globales y tema
│   ├── data/            # Fuentes de datos tipadas (experiencia, proyectos, repositorios)
│   ├── i18n/            # Traducciones y utilidades de internacionalización
│   └── pages/           # Rutas del sitio
├── astro.config.mjs     # Configuración de Astro
├── biome.json           # Configuración de calidad de código
├── lefthook.json        # Hooks de Git
└── package.json
```


