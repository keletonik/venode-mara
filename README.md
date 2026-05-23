# Hugo — a venode product

Marketing site for **Hugo**, a cybersecurity intelligence language model
from **venode**. Built as a sibling property to `venode.ai`, sharing the
parent lab's design system: warm-cream paper, oxblood accent, Inter
Display + Lora + Geist Mono typography, the `venode_` wordmark and the
`vo.` footer monogram.

Hugo's positioning draws on the established framework for cyber-defense
AI (defenders, dual-use honesty, calibrated confidence, refusal-first
safety) and applies it to a venode-grown model.

## Identity

Colour tokens are mirrored from `venode.ai`:

| Token | Value |
|---|---|
| `--bg` (page) | `#FAF9F5` |
| `--surface` (warm band) | `#F1EDE2` |
| `--ink` (text) | `#141412` |
| `--ink-2` (subdued) | `#5A5854` |
| `--accent` (oxblood) | `#8E2436` |
| `--oxblood` (Hugo wordmark) | `#5C1A24` |
| `--cream-warm` (footer text) | `#F4F1EA` |

Typography:

- `Inter` at heavy weights stands in for Inter Display on the marque
- `Lora` (serif) for body copy
- `Geist Mono` for labels, eyebrows and CTAs

Marks:

- `<VenodeWordmark/>` — `venode_` with the o in accent + blinking cursor
- `<VoMark/>` — `vo.` monogram for the black footer slab
- `<HugoWordmark/>` — geometric stroke wordmark, the o in deep oxblood

## Pages

- `/` — Hero, `P-01` Hugo feature with the wordmark + `One Hugo. Tiered by plan.`, `Venode Labs.` with research areas, `L-01` custom builds warm band, `Built in the open` final CTA.
- `/hugo` — Product detail. Capabilities, three illustrative transcripts, Pro tier + connectors, custom-build CTA.
- `/research` + `/research/[slug]` — Research notes (R-01 … R-04).
- `/safety` — Dual-use boundaries, refusal behaviour, responsible disclosure.
- `/about` — Venode lab statement.
- `/contact` — Channels.
- `/privacy` — Short, plain.

## Edit

Everything brand- and product-level lives in `site.config.ts`. Notes
live in `lib/research.ts`. To add a note, push a new entry to the
`notes` array — it appears automatically in the research index,
sitemap, and footer "News" column.

## Deploy

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Stack: Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 3
· `next/font/google` for Inter / Lora / Geist Mono.

Deployable to Vercel free tier. No database, no environment variables
required.
