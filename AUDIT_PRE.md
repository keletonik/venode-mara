# AUDIT_PRE.md — Mara codebase state before redesign

## File map

```
app/
├── globals.css         design tokens + motion keyframes
├── icon.svg            favicon (constellation glyph)
├── layout.tsx          loads fonts, wraps Header/Footer, JSON-LD
├── not-found.tsx       404
├── page.tsx            single-page composition
├── privacy/page.tsx    legal companion
├── robots.ts           robots.txt
└── sitemap.ts          sitemap.xml

components/
├── Argument.tsx        "Why Mara" manifesto
├── Capabilities.tsx    Four habits, hairline rows
├── DemoTranscript.tsx  Typewriter conversation
├── Footer.tsx          Minimal signature row
├── Header.tsx          Sticky, wordmark + CTA
├── Hero.tsx            Letter-rise + cycling tagline + floating nodes
├── Icons.tsx           MaraWordmark, MaraGlyph, VenodeMark, arrows
├── JsonLd.tsx          Structured-data tag
├── ModelCard.tsx       Pre-launch honest spec sheet
├── Reveal.tsx          IntersectionObserver fade-up
├── Safety.tsx          Refusal-first manifesto
└── Tiers.tsx           Free / Pro / Custom

lib/
└── seo.ts              pageMetadata + canonical helper
```

## Routes

| Route          | File                       | Status   |
|----------------|----------------------------|----------|
| `/`            | `app/page.tsx`             | ✅ exists |
| `/privacy`     | `app/privacy/page.tsx`     | ✅ exists |
| `/sitemap.xml` | `app/sitemap.ts`           | ✅ exists |
| `/robots.txt`  | `app/robots.ts`            | ✅ exists |
| `/icon.svg`    | `app/icon.svg`             | ✅ exists |
| `*` (404)      | `app/not-found.tsx`        | ✅ exists |

## Link inventory

All links currently rendered on the page:

| Link source                | Target              | Status              |
|----------------------------|---------------------|---------------------|
| Header logo                | `/`                 | ✅ resolves          |
| Header CTA                 | `siteConfig.appUrl` | external placeholder |
| Hero CTA "Request access"  | `siteConfig.appUrl` | external placeholder |
| Hero "Read the argument"   | `#why`              | ✅ in-page anchor    |
| Argument signature         | text only           | n/a                  |
| Demo replay button         | client state        | n/a                  |
| Capabilities entries       | text only           | n/a                  |
| Tiers "Join the preview"   | `siteConfig.appUrl` | external placeholder |
| Tiers "Tell us you want it"| `mailto:…`          | mail link            |
| Tiers "Talk to venode"     | `mailto:…`          | mail link            |
| Safety paragraph           | text only           | n/a                  |
| Closing "Join the preview" | `siteConfig.appUrl` | external placeholder |
| Closing "Talk to venode"   | `mailto:…`          | mail link            |
| Footer `/privacy`          | `/privacy`          | ✅ resolves          |
| Footer mailto              | `mailto:…`          | mail link            |
| Footer venode.ai           | `siteConfig.labUrl` | external             |

**Zero dead links.** No links point to non-existent local routes.

## What this redesign keeps

- IntersectionObserver-based `<Reveal>` wrapper.
- `JsonLd` schema tag, sitemap, robots.
- Privacy companion page.
- Pre-launch-honest copy in ModelCard, Tiers, Hero CTAs.

## What this redesign upgrades

- Logo / wordmark — proper SVG asset files, distinctive typeface
  (Bricolage Grotesque), corporate-grade treatment.
- Typography — add Bricolage Grotesque as display, Inter stays body.
- One bento-grid section to land the 2026 layout signal cleanly.
- Glassmorphism on the header nav only (subtle backdrop-blur).
- Custom cursor accent dot following pointer (where supported).
- More confident section labels (small-caps tracked).
