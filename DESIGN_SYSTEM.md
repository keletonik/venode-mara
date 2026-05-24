# DESIGN_SYSTEM.md — MARA

## Palette

| Token            | Value                            | Use                                       |
|------------------|----------------------------------|-------------------------------------------|
| `--bg`           | `#08070a`                        | page background                           |
| `--bg-2`         | `#0d0d10`                        | raised surface (bento cells, model card)  |
| `--surface`      | `#14141a`                        | nav glass tint underlay                   |
| `--ink`          | `#F2EFE7`                        | primary text, wordmark, headlines         |
| `--ink-2`        | `#9C968B`                        | secondary text                            |
| `--ink-3`        | `#5d574e`                        | tertiary text, mono labels                |
| `--ink-4`        | `#38332d`                        | borders on tertiary surfaces              |
| `--accent`       | `#B33347`                        | single saturated accent; used sparingly   |
| `--accent-quiet` | `#6E2330`                        | accent at-rest hover destination          |
| `--hairline`     | `rgba(242,239,231,0.08)`         | section dividers                          |
| `--hair-2`       | `rgba(242,239,231,0.14)`         | stronger dividers, focus rings            |

**Accent policy:** the oxblood is used at most 3–4 places per
viewport — wordmark? no (single tone), but: one anomaly node in the
hero atmosphere, hovered button states, model-card highlights, accent
hairlines on bento card borders. No accent decoration anywhere else.

## Typography

| Role        | Family               | Weight    | Notes                          |
|-------------|----------------------|-----------|--------------------------------|
| Wordmark    | Bricolage Grotesque  | 700       | `letter-spacing: -0.045em`     |
| Display     | Bricolage Grotesque  | 500–600   | `letter-spacing: -0.025em`     |
| Body        | Inter                | 400       | `1.6` line-height              |
| Mono / label| Geist Mono           | 500       | `letter-spacing: 0.18em` upper |

**Fluid scale (display headings):**

```
h1 hero    clamp(3rem,  8vw,    7rem)
h2 section clamp(2.25rem, 5vw,  3.75rem)
h3 sub     clamp(1.5rem,  3vw,  2.25rem)
```

Body 17px / 1.6. Eyebrows 11px uppercase / `0.18em` tracking.

## Spacing scale

8-point grid: `8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 192`.
Section padding: `py-32 sm:py-40` consistently.

## Layout system

- Container: `max-width: 1280px; padding: 0 32px;` (`container-page`).
- Narrow column for editorial blocks: `max-width: 720px;`
  (`container-narrow`).
- Grid: 12-col where appropriate, otherwise modular bento sub-grids.
- Bento section: 3-row mixed grid with 6 cells — primary cell spans
  2/3, secondary cells alternate.

## Components

- `<Header />` — sticky, glassmorphism (`backdrop-blur` + `bg/85`),
  wordmark left, CTA right.
- `<Hero />` — full-bleed atmosphere (floating constellation nodes,
  no panel), cursor-following glow, oversized headline, cycling
  tagline.
- `<Argument />` — narrow editorial column.
- `<DemoTranscript />` — typewriter conversation, no terminal chrome.
- `<Capabilities />` — full-width rows on hairlines (kept).
- **`<Bento />` (NEW)** — modular grid showcasing model surface.
- `<Tiers />` — three-column comparison, pre-launch CTAs.
- `<ModelCard />` — calm two-column commitment sheet.
- `<Safety />` — single-column manifesto.
- `<Footer />` — minimal signature row.

## Motion

- **Entry**: `fade-up` 900ms `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Scroll reveals**: IntersectionObserver triggers `.in` class on
  `<Reveal>`-wrapped blocks.
- **Anomaly pulse**: oxblood halo expands and fades every 2.8s.
- **Cursor glow**: radial gradient tracks pointer (hero only,
  transition 500ms).
- **Header glass**: opacity ramps from transparent → hairline border
  when scrollY > 8.
- **Cursor dot (optional)**: a tiny accent dot follows the pointer on
  fine-pointer devices only. Disabled below 768px and under reduced
  motion.

All motion respects `prefers-reduced-motion: reduce`.

## Logo / wordmark concept

- **Primary mark** = the word "mara" set in Bricolage Grotesque 700,
  tight tracking, single cream tone.
- **Symbol mark** = the constellation glyph (three filled circles
  forming a triangle, bottom-right in accent, with faint connecting
  strokes). Used at favicon, app icon, and standalone iconic
  contexts.
- Two SVG variants ship in `/public/logo/`:
  - `mara-logo-dark.svg`  — cream on transparent (use on dark)
  - `mara-logo-light.svg` — black on transparent (use on light)
  - `mara-logo.svg`       — alias to dark variant
- No decorative ornaments on the wordmark. The typeface choice IS
  the distinction. The constellation glyph is the secondary visual.
