# RESEARCH.md — MARA Redesign Pre-Flight

Live research conducted before any code was written.

## blackbox.au — visual reference

A B2B construction & security monitoring site. Premium and confident.
Key elements harvestable for Mara:

- **Generous whitespace** between sections; deliberate vertical rhythm.
- **Full-bleed alternating sections** — image-left/text-right, then
  reversed. Strong cinematic progression.
- **Dashboard/UI screenshot prominence** ("Watch What Matters" section).
- **Bento-grid-influenced** services section with alternating
  image/text blocks.
- **Single saturated accent** (cyan/electric blue) used sparingly on
  CTAs only — the rest of the page is neutral.
- **Dark footer** with multi-column sitemap, logos, certifications.
- **Sticky nav** with logo + dual CTAs (one primary, one secondary).
- **All-caps section labels** (e.g. "ADVANCED CAMERA TECHNOLOGY") with
  increased tracking — sets section identity.

Note: blackbox.au is predominantly light (white background, dark
text). Brief instructed "dark, premium, technical, confident" — we
keep dark but adopt the **structural** patterns (alternation,
bento, sticky nav with dual CTAs, all-caps section labels, single
saturated accent).

## SaaS UI 2026 — synthesised trends

- **Dark mode is the default**, not a setting. 720/mo searches before
  signup according to one source. We keep dark.
- **Strategic minimalism** — every element earns its place. Cut
  decoration that does not serve clarity.
- **Oversized assertive fonts** combined with dark = signature 2026.
- **Calm neutral palettes** with one strategic accent (matches Mara).
- **Micro-interactions** that serve clarity (not delight) — kept.

## Corporate AI wordmark — synthesised trends

- **Simple wordmarks** that scale from favicon to billboard.
- **Custom sans-serif typefaces** with subtle geometric character.
- **Avoid AI clichés** — no circuit boards, no brain outlines, no
  generic blue-purple gradient.
- **Anthropic-grade restraint** — type carries the brand, not symbolism.
- **One distinctive feature** is enough — Vercel's triangle, Notion's
  N, Anthropic's warm earth tone.

Mara wordmark: lowercase "mara" set in a distinctive trending grotesque
(Bricolage Grotesque), single cream tone, tight tracking. The
constellation glyph remains as the standalone mark for icon-only
contexts (favicon, app icon).

## Bento grids / glassmorphism / fluid type — synthesised

- **Bento grid** = now default for SaaS landing pages, modular cards
  of varying sizes. Drives 23% more scroll depth (per one source).
  We adopt: a "capabilities" or "what's inside Mara" bento section.
- **Glassmorphism** = navigation and modals only. Backdrop-blur with
  subtle translucent background.
- **Fluid typography** via `clamp()` — already in place.
- **Scroll storytelling** with progressive reveals — already in place
  via Reveal component.

## Google Fonts — corporate AI pairings 2026

- **Inter** dominates (already in use).
- **Bricolage Grotesque** = trending 2025/2026 for distinctive but
  professional display typography. Has width and weight axes.
- **Geist Mono** = de-facto mono for technical AI products (already
  in use).
- **Pattern**: most successful SaaS products use a single family with
  weight variation, OR a display + body pair.

**Decision for Mara:**
- Display + wordmark: **Bricolage Grotesque** (variable, weights 200–800)
- Body: **Inter** (already loaded)
- Mono: **Geist Mono** (already loaded)
