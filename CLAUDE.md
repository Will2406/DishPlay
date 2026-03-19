# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Dishplay** — A Next.js landing page for a digital menu product targeting Spanish-speaking restaurant markets (Peru). Single-page marketing site with premium animations, smooth scrolling, and responsive design.

## Commands

```bash
npm run dev      # Dev server (default port 3000)
npm run build    # Production build
npm start        # Run production build
npm run lint     # ESLint
```

No test framework is configured.

## Tech Stack

- **Next.js 16** (App Router, TypeScript, strict mode)
- **React 19** with all components marked `"use client"` (animation-heavy SPA)
- **Tailwind CSS 4** via `@tailwindcss/postcss`
- **Framer Motion** — primary animation library (useScroll, useInView, useReducedMotion)
- **Lenis** — smooth scrolling (wrapped in `SmoothScroll` component)
- **GSAP** — timeline animations (available but lightly used)
- **clsx** — conditional className composition

## Architecture

All UI lives in `src/components/` as client components. The single page (`src/app/page.tsx`) composes 8 sections in order: Navbar → Hero → Problem → WhatIsDishplay → HowItWorks → Plans → FAQ → Footer. `ScrollProgress` provides a top progress bar. `SmoothScroll` wraps the app in `layout.tsx`.

Path alias: `@/*` → `src/*`

## Design System

CSS variables defined in `src/app/globals.css`:
- **Colors**: `--color-cream`, `--color-dark`, `--color-brand-red`, `--color-teal`, `--color-orange` (plus variants)
- **Fonts**: Fraunces (headings, variable axes SOFT/WONK), Plus Jakarta Sans (body), Instrument Serif (accent italic), Caveat (handwritten decorative)
- **Utility classes**: `.heading`, `.accent-serif`, `.handwritten`, `.card-soft`, `.glass-dark`

Fonts are loaded via `next/font/google` in `layout.tsx` and exposed as CSS variables.

## Conventions

- All animation components use `useReducedMotion()` for accessibility
- Mobile-first responsive design (base → `md:` → `lg:` breakpoints)
- Fluid typography via CSS `clamp()` functions
- Images use Next.js `<Image>` component; remote patterns configured for Unsplash domains
- Spanish UI copy throughout
- No API routes or backend — static marketing site only
