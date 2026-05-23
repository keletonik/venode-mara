# Hugo — a Venode Labs marketing site

A research-lab style marketing site for **Hugo**, a cybersecurity
intelligence language model from **Venode Labs**. Built in the
typographic, restrained aesthetic of `venode.ai`.

## What it is

A static Next.js site presenting Hugo the way a serious AI lab presents a
model: hero, product tiers, research areas, custom builds for teams,
research notes, safety page, about, contact. No tools, no affiliate
links — this is product positioning.

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript
- Tailwind CSS 3
- `next/font/google` — Geist Sans + Geist Mono
- No backend, no database, deployable to Vercel free tier

## Edit

All copy and product configuration lives in **two places**:

1. `site.config.ts` — brand, tagline, URLs, contact email, product tiers.
2. `lib/research.ts` — the research notes, written as structured data.

To add a research note, push a new entry to the `notes` array.

To swap the model name (e.g. for a second product alongside Hugo),
update `siteConfig.name` and `siteConfig.displayName`.

## Pages

- `/` — Hero, "One Hugo" tiers, research areas, custom builds, latest notes.
- `/hugo` — Product detail with capability breakdown, transcripts and Pro.
- `/research` — All research notes.
- `/research/[slug]` — Individual notes.
- `/safety` — What Hugo will and will not do.
- `/about` — About Venode Labs.
- `/contact` — Channels in / contact addresses.
- `/privacy` — Plain privacy statement.

## Deploy

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Import the repo on Vercel → Deploy. Point a domain at the project, set
`siteConfig.url` to that domain, and the site is live.

## Identity

- Cream paper background (`#faf8f3`) · charcoal ink (`#1a1a18`)
- No accent colour — emphasis through weight, italics and whitespace
- Lowercase wordmark with a dot separator: `venode · hugo`
- Numbered sections (`01`, `02`, `03`, `04`)
- Text CTAs with arrows (`Open Hugo →`); no buttons
- Geist Sans for everything, Geist Mono for labels and code
