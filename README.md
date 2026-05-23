# mara · a venode product

A single-page premium product site for **Mara**, venode's cybersecurity
threat-intelligence language model.

## Master prompt (the spec)

```
GOAL: A single-page premium product site for Mara, venode's
cybersecurity threat-intelligence language model. Anthropic-grade
restraint, venode-grade brand discipline, cinematic dark execution.

PRINCIPLES
- One page. No nav, no sub-routes (legal pages aside).
- Dark / mysterious. No italics, no serif, no cursive — ever.
- Motion as substance, not decoration. Every animation must read.
- Static-render where possible, CSS-driven where possible. JS only
  for: typewriter, intersection-triggered reveal, marquee pause-on-
  hover, cycling tagline, parallax glow.
- Zero dependencies beyond next + react + tailwind + next/font.

SECTIONS (top → bottom, single scroll)
01  HERO        — letter-rise reveal of "mara", cycling tagline,
                  parallax glow, CTAs, marquee band.
02  POSITION    — Anthropic dual-use framing for defenders.
03  DEMO        — auto-typing chat transcript triggered on scroll.
04  CAPABILITY  — 4 capability blocks with hover micro-interactions.
05  TIERS       — One Mara: Free / Pro / Custom.
06  SAFETY      — Mara will not / Mara will help with.
07  CLOSING     — Big CTA + venode wordmark for parent context.

BRAND
- mara wordmark: m + a (accent) + r + a (accent) + blinking cursor.
- Palette: bg #08070a · ink #F4F1EA · accent #C8334B (oxblood-lift).
- Type: Inter (400–900), Geist Mono for labels & code.
```

## The motion craft (what the page actually does)

| Section | Motion |
|---|---|
| Hero entry | Each letter of `mara` rises in with a 110ms stagger and a blur-to-clear, then a cursor blinks at the end |
| Hero tagline | Three positioning lines cycle in place with a 700ms crossfade + translate every 4.2s |
| Hero glow | A radial accent gradient tracks the cursor with parallax |
| Marquee | Doubled-content seamless infinite scroll, pauses on hover |
| Demo transcript | Typewriter at ~16ms/char, "thinking…" dots between turns, IntersectionObserver triggers it once on first scroll into view, replay button when finished |
| Section reveals | Every block fades up 14px on scroll-in via a shared `<Reveal>` IntersectionObserver wrapper |
| Capability cards | Accent vertical bar scales in on hover; background tints; corner ticks |
| Buttons | Cream-slab CTAs transition to an oxblood wipe-up on hover |
| Live indicator | Pulsing oxblood dot in the hero status line |

All animations respect `prefers-reduced-motion`.

## Stack

- **Next.js 15** App Router · React 19 · TypeScript · static export
- **Tailwind CSS** with hand-tuned token variables in `globals.css`
- **`next/font/google`** — Inter (heavy weights 700–900) + Geist Mono
- No external state, no DB, no env vars, no extra dependencies

## Files

- `app/page.tsx` — single-page composition
- `app/privacy/page.tsx` — legal companion
- `components/Hero.tsx` — letter-rise hero
- `components/Marquee.tsx` — infinite scroll band
- `components/DemoTranscript.tsx` — typewriter chat
- `components/Capabilities.tsx` · `Tiers.tsx` · `Safety.tsx` — body sections
- `components/Reveal.tsx` — scroll-triggered fade-up wrapper
- `components/Icons.tsx` — `MaraWordmark`, `VenodeMark`, arrows
- `site.config.ts` — all brand, URL and pricing in one place

## Deploy

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static production build
```

Import on Vercel → Deploy. Set `site.config.ts → url` to your domain.
