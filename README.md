# mara · a venode product

A single-page premium product site for **Mara**, venode's cybersecurity
threat-intelligence language model.

## Master prompt (the spec this iteration was built against)

```
ROLE: You are simultaneously
  • a senior brand designer (Linear / Apple sensibility)
  • a motion designer (Anthropic / Stripe sensibility)
  • a Vignelli-restraint typographer
  • a senior Next.js / Tailwind engineer
  • a cybersecurity product marketer with real SOC experience

TASTE BAR
  linear.app, anthropic.com, mistral.ai, stripe.com — earned
  restraint, premium motion, considered density. Not a generic
  dark-mode template.

NON-NEGOTIABLES
- Dark. Cream. Oxblood. No italics. No serif. No rounded corners.
- Static-render. Zero deps beyond next / react / tailwind / next-font.
- Respects reduced-motion. WCAG-acceptable contrast.
- Every line of copy passes a senior analyst's smell test.

THIS PASS
1. A real Mara mark — a constellation glyph. Three nodes (two cream,
   one accent), thin connecting strokes, animatable. Used at favicon,
   header, hero panel, and as the closing-section background motif.
2. Hero v2 — split composition. Wordmark + tagline + CTAs on the
   left; a framed "intelligence panel" with the live constellation
   and a row of telemetry readouts on the right. Parallax glow
   tracks the cursor.
3. New section: MODEL CARD — a dense, mono-styled spec sheet with
   identity, capacity, training corpus, eval scores, refusal rates,
   build metadata.
4. Subtle CRT scanline overlay across the whole page for depth.
5. Sharper section rhythm, tighter copy throughout.
```

## The Mara mark

A constellation glyph drawn at three scales:

- `MaraGlyph` — 24×24 viewBox, used at favicon and inline with the
  wordmark. Three filled circles forming an irregular triangle,
  connected by thin half-opacity strokes, the bottom-right circle
  rendered in the accent oxblood (the "anomaly").
- The mark also appears as a faint background motif behind the
  closing wordmark.
- `MaraConstellation` — 200×200 viewBox, nine nodes and nine edges,
  used in the hero "intelligence panel" and the closing section.
  Lines draw themselves in via stroke-dashoffset; nodes pop in with
  stagger; the accent node has a pulsing ring.

The glyph is the same construction at every size — designed once,
reused everywhere.

## The motion craft

| Section | Motion |
|---|---|
| Hero entry | Letters of `mara` rise in with 110ms stagger and a blur-to-clear |
| Hero tagline | Three lines crossfade in place every 4.2s |
| Hero glow | Radial accent gradient tracks the cursor |
| Hero panel | Constellation lines draw in (stroke-dashoffset), nodes pop with stagger, accent node pulses, telemetry readouts drift on a 2.2s tick |
| Marquee | Doubled-content seamless infinite scroll, pauses on hover |
| Demo | Typewriter at 16ms/char, "thinking…" dots between turns, IntersectionObserver triggers on first scroll into view |
| Section reveals | Every block fades up 14px on scroll-in via `<Reveal>` |
| Cards | Vertical accent bar scales in on hover, subtle background tint |
| Buttons | Cream-slab CTAs wipe to oxblood on hover via ::after |
| Background | CRT scanlines + grain overlay across the whole page |
| Closing | Constellation glyph at 70vw behind the wordmark, mark lines redraw |

All motion respects `prefers-reduced-motion`.

## Stack

- **Next.js 15** App Router · React 19 · TypeScript
- **Tailwind CSS** with tokens lifted into `globals.css` as `:root`
- **next/font/google** — Inter (400–900) + Geist Mono
- No external state, no DB, no env vars, no extra dependencies

## File map

| File | What it does |
|---|---|
| `app/page.tsx` | Section composition (master prompt at top) |
| `app/icon.svg` | Favicon — constellation glyph |
| `app/globals.css` | Tokens, marks, motion keyframes |
| `components/Hero.tsx` | Split-composition hero v2 |
| `components/Icons.tsx` | `MaraGlyph`, `MaraConstellation`, `MaraWordmark`, `VenodeMark`, arrows |
| `components/Marquee.tsx` | Infinite scroll band |
| `components/DemoTranscript.tsx` | Typewriter chat session |
| `components/Capabilities.tsx` | 4 cards with hover micro-interactions |
| `components/Tiers.tsx` | Free / Pro / Custom |
| `components/ModelCard.tsx` | Spec-sheet panel |
| `components/Safety.tsx` | Refusal-first dual-use page |
| `components/Reveal.tsx` | Scroll-triggered fade-up wrapper |
| `components/Footer.tsx` | Black slab + venode mark |
| `site.config.ts` | All brand, URL and contact config |

## Deploy

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static production build
```

Import on Vercel → Deploy. Set `site.config.ts → url` to your domain.
