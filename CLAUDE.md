# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # astro check (TypeScript) + astro build
pnpm preview      # Preview production build locally
```

No test or lint scripts are configured.

## Architecture

**Stack**: Astro 4 (SSG) + React 18 + Tailwind CSS 3 + TypeScript (strict)

**Routing**: File-based via `src/pages/`. English is the default locale (no `/en/` prefix). Spanish lives under `src/pages/es/`. Both pages render the same component tree with different locale context.

**i18n**: Translation strings are in `src/i18n/en.json` and `src/i18n/es.json`. The helpers in `src/i18n/utils.ts` resolve the current locale from the URL pathname and expose a `useTranslations(lang)` factory. Translated anchor IDs (e.g. `#experience` vs `#experiencia`) are mapped there too.

**Layout**: `src/layouts/Layout.astro` is the root HTML shell (ViewTransitions, Onest variable font, gradient backgrounds). Every page uses this layout.

**Components**: `src/components/` holds all Astro components. Page-level sections (Hero, Experience, Projects, AboutMe) are composed inside `src/components/pages/App.astro`, which is the single entry point rendered by both locale pages.

**Theme**: `ThemeToggle.astro` manages light/dark/system switching via `localStorage`. Tailwind dark mode uses the `class` strategy.

**Path alias**: `@/*` maps to `src/*` (defined in `tsconfig.json`).

**Deployment**: Static site deployed to Vercel at `https://juanfuentealba.vercel.app`.
