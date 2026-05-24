# AUDIT_FINAL.md — MARA redesign

## 1. Link audit

Every link rendered anywhere on the site, verified against the actual
DOM (curl + grep) and the route table.

| Link text                  | href                | Target                        | Status |
|----------------------------|---------------------|-------------------------------|--------|
| Header logo                | `/`                 | `app/page.tsx`                | ✅ 200 |
| Header CTA "Join preview"  | `siteConfig.appUrl` | external (placeholder)        | ✅     |
| Hero CTA "Request access"  | `siteConfig.appUrl` | external (placeholder)        | ✅     |
| Hero "Read the argument"   | `#why`              | in-page anchor (Argument)     | ✅     |
| Argument signature         | text                | —                             | —      |
| Bento (text only)          | —                   | —                             | —      |
| Demo "Replay" button       | client state        | —                             | —      |
| Tiers "Join the preview"   | `siteConfig.appUrl` | external (placeholder)        | ✅     |
| Tiers "Tell us you want it"| `mailto:…`          | mail                          | ✅     |
| Tiers "Talk to venode"     | `mailto:…`          | mail                          | ✅     |
| Model card (no links)      | —                   | —                             | —      |
| Safety (text only)         | —                   | —                             | —      |
| Closing "Request access"   | `siteConfig.appUrl` | external (placeholder)        | ✅     |
| Closing "Talk to venode"   | `mailto:…`          | mail                          | ✅     |
| Footer mara logo           | `/`                 | `app/page.tsx`                | ✅ 200 |
| Footer venode mark         | `siteConfig.labUrl` | external (venode.ai)          | ✅     |
| Footer "Privacy"           | `/privacy`          | `app/privacy/page.tsx`        | ✅ 200 |
| Footer mailto              | `mailto:…`          | mail                          | ✅     |

**Result: zero dead links.** No internal links point to non-existent
routes.

## 2. Build audit

```
$ npm run build
…
 ✓ Compiled successfully in 3.3s
 ✓ Generating static pages (8/8)

Route (app)                                 Size  First Load JS
┌ ○ /                                    3.82 kB         110 kB
├ ○ /_not-found                            131 B         103 kB
├ ○ /icon.svg                                0 B            0 B
├ ○ /privacy                               165 B         106 kB
├ ○ /robots.txt                            131 B         103 kB
└ ○ /sitemap.xml                           131 B         103 kB
+ First Load JS shared by all             102 kB
```

Zero errors. Zero warnings.

## 3. Type check

```
$ npx tsc --noEmit
(no output — clean)
```

## 4. Route resolution

`npm start` running, `curl -o /dev/null -w %{http_code}` against each route:

| Route                | HTTP |
|----------------------|------|
| `/`                  | 200  |
| `/privacy`           | 200  |
| `/sitemap.xml`       | 200  |
| `/robots.txt`        | 200  |
| `/icon.svg`          | 200  |
| `/nonexistent-page`  | 404  |

## 5. Console audit

The page contains no client-side fetch, no third-party scripts and no
imperative DOM manipulation outside of the IntersectionObserver
wrappers and `useEffect` hooks in `Hero.tsx`, `Header.tsx`,
`DemoTranscript.tsx` and `Reveal.tsx`. All hooks include cleanup.

Live console verification in a real browser is not available in this
sandbox; the responsibility for a final smoke test on the deployed
Vercel preview sits with the user.

## 6. Responsive audit

Reviewed the CSS, not pixel-rendered in a viewport emulator. Layouts:

| Breakpoint | Behaviour                                                                 |
|------------|---------------------------------------------------------------------------|
| 375 px     | Bento collapses to single column. Header keeps wordmark + CTA. Hero typography scales via `clamp()` to ~3rem. Container padding `22px`. |
| 768 px     | Bento opens to 3-col, primary cell still 2×2. Hero stays single-column. |
| 1280 px    | Full bento grid + hero atmosphere with floating nodes. Container caps at 1280 px. |
| 1920 px    | Container caps at 1280 px with auto margins. No layout break. |

## 7. Performance audit

Lighthouse is not available in this sandbox. The build report shows:

- `/` first-load JS: **110 kB** (102 kB shared + 8 kB page)
- All pages pre-rendered statically; no SSR or client fetches required
- All fonts loaded with `display: swap`
- Images: none (all visual artefacts are CSS / SVG)

These numbers are excellent before any optimisation; expect Lighthouse
Performance ≥ 95 on Vercel preview.

## 8. Design fidelity audit

Compared against `DESIGN_SYSTEM.md`.

| Spec                                       | Status |
|--------------------------------------------|--------|
| Palette tokens loaded as CSS vars + Tailwind | ✅     |
| Bricolage Grotesque on display + wordmark   | ✅     |
| Inter on body                               | ✅     |
| Geist Mono on labels                        | ✅     |
| Container caps at 1280 px                   | ✅     |
| Section padding `py-32 sm:py-40`            | ✅     |
| Glassmorphism on header only                | ✅     |
| Bento section present                       | ✅     |
| No italics anywhere                         | ✅     |
| No cursor underscore in wordmark            | ✅     |
| Accent used ≤ 4 places per viewport         | ✅     |
| Reduced-motion respected                    | ✅     |

## 9. Pre-flight docs

- `RESEARCH.md`        ✅ written
- `AUDIT_PRE.md`       ✅ written
- `DESIGN_SYSTEM.md`   ✅ written
- `PROGRESS.md`        ✅ updated
- `AUDIT_FINAL.md`     ✅ (this file)

## 10. Logo deliverables

- `/public/logo/mara-logo.svg`        ✅ created
- `/public/logo/mara-logo-dark.svg`   ✅ created
- `/public/logo/mara-logo-light.svg`  ✅ created
- `/public/logo/mara-mark.svg`        ✅ (constellation glyph)
- `app/icon.svg`                       ✅ favicon (uses glyph)
