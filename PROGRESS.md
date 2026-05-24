# PROGRESS.md

## Pre-flight
- [x] STEP 1 — Research complete (RESEARCH.md)
- [x] STEP 2 — Codebase audit (AUDIT_PRE.md)
- [x] STEP 3 — Design system (DESIGN_SYSTEM.md)

## Implementation
- [x] Load Bricolage Grotesque via next/font/google
- [x] Update tokens in globals.css + tailwind.config.ts
- [x] Create logo SVG files in /public/logo/
- [x] Rewrite `MaraWordmark` with Bricolage Grotesque + remove cursor underscore
- [x] Glassmorphism header (backdrop-blur, bordered on scroll)
- [x] New `<Bento />` component (modular grid section)
- [x] Wire `<Bento />` into the page composition
- [x] Drop redundant Capabilities section (replaced by Bento)

## QA
- [x] `npm run build` — zero errors (8/8 static pages)
- [x] `npx tsc --noEmit` — zero type errors
- [x] Smoke-test all routes (`/`, `/privacy`, `/sitemap.xml`, `/robots.txt`)
- [x] 404 catches unknown routes
- [x] Link audit — zero dead links
- [x] Design markers verified in rendered HTML

## Delivery
- [x] AUDIT_FINAL.md
- [ ] Commit on the working branch
- [ ] Create + push `main`
