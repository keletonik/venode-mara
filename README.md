# ThreatPeek — a free cybersecurity tools website built to earn

This repository is a **complete, deploy-ready revenue website**. It is a suite
of genuinely useful, privacy-first security tools (breach checker, password
generator, link scanner and more) plus SEO-optimised guides. The tools attract
free organic search traffic; the traffic is monetised through affiliate links
and, later, display ads.

It is built so that getting it live costs **nothing but a domain**:

- **Hosting:** Vercel free tier (no credit card needed).
- **Backend:** none. Every tool runs in the visitor's browser, so there are no
  servers, no database and no running costs.
- **Total spend to launch:** one domain (~AUD 10–25/year). Everything else —
  hosting, SSL, the breach-data API — is free.

---

## 1. Deploy it in 10 minutes

1. Push this repo to GitHub (the branch is already set up).
2. Go to **vercel.com**, sign up, click **Add New → Project**, import the repo.
   Vercel auto-detects Next.js — just click **Deploy**.
3. Buy a domain (Cloudflare, Namecheap or Porkbun are cheap). In Vercel:
   **Project → Settings → Domains → Add**, then point the domain's nameservers
   or DNS as Vercel instructs.
4. Open **`site.config.ts`** and set `url` to your real domain. Commit & push;
   Vercel redeploys automatically.

The site is now live, fast, on HTTPS, and indexable by Google.

## 2. Switch on the revenue

All monetisation lives in **one file: `site.config.ts`**. Nothing else needs
editing.

### Affiliate links (your first income — free to set up)

The site already links to reputable security products. To get paid, join their
affiliate programs (free) and paste **your** tracking links into
`site.config.ts → affiliates`:

| Program | Where to apply | Typical payout |
|---|---|---|
| NordVPN | nordvpn.com → Affiliates | up to ~100% of first sale |
| Proton | proton.me → Partners | ~20–30% recurring |
| Bitdefender | bitdefender.com → Affiliates | up to ~30% per sale |
| 1Password | 1password.com → Affiliate | bounty per signup |
| Dashlane | partner networks (Impact/CJ) | bounty per paid signup |

Until you are approved, the links point to each product's homepage, so the
site never looks broken. New programs can be added in minutes — each is just an
entry in the `affiliates` object.

### Display ads (once you have traffic)

When the site has steady visitors (~30+ pages of content and a few hundred
visits/day is a realistic AdSense bar), apply to **Google AdSense** or
**Ezoic**. Then in `site.config.ts` set `ads.enabled = true` and your
`adsenseClient` ID. Ad slots are already placed on every tool and guide page —
they render automatically once enabled.

### Digital product (fastest path to day-one money)

Affiliate and ad income depend on traffic, which takes time. Selling a
**digital product** does not. The guide *"The 12-Point Personal Cybersecurity
Checklist"* (in `lib/guides.ts`) is ready-made source material for a paid PDF.

1. Expand it into a polished PDF (any document tool exports one).
2. Create a free **Gumroad** account and upload it — Gumroad handles payment,
   delivery and tax; it only takes a small cut, no upfront cost.
3. In `site.config.ts` set `product.enabled = true` and paste the Gumroad URL.

A product CTA then appears on every tool page.

## 3. The honest part: a website is necessary, not sufficient

This codebase is a high-quality, conversion-ready asset. But **no website earns
money without visitors.** Be realistic:

- **Months 0–3:** Google has to discover and trust a new site. Expect little
  traffic. This is normal — do not give up here.
- **Months 3–6:** long-tail tool searches (e.g. *"is this link safe"*,
  *"check if password leaked"*) start ranking. First affiliate commissions.
- **Months 6–12+:** if you keep publishing, traffic compounds. This is when a
  tools site can realistically reach a few hundred to a few thousand
  AUD/month.

These are ranges, not promises. Outcomes depend almost entirely on the work in
the next section.

## 4. Your weekly playbook (the actual job)

The code is done. Revenue now comes from **traffic**, and traffic comes from:

1. **Publish content.** Add one new guide to `lib/guides.ts` every week —
   answer real questions people search. More indexed pages = more chances to
   rank. Aim for 30+ guides.
2. **Submit to search engines.** Add the site to **Google Search Console** and
   **Bing Webmaster Tools** and submit `/sitemap.xml` (already generated).
3. **Get traffic now, not just later.** Answer relevant questions on Reddit,
   Quora and forums and link a tool where it genuinely helps. Share tools in
   communities. This seeds traffic while SEO matures.
4. **Earn backlinks.** Free, genuinely useful tools are linkable — reach out to
   bloggers and resource pages in the security/privacy niche.
5. **Track and double down.** In Search Console, see which pages get
   impressions, then write more around those topics.

Treat this as a part-time business, not a lottery ticket. The site is the
shopfront; content and promotion are the work that fills it.

## 5. What's in the box

- **6 working tools** — breach checker (real Have I Been Pwned k-anonymity
  API), password generator, strength analyzer, phishing link scanner, hash
  generator, UUID/token generator. All client-side, all private.
- **5 SEO guides** with structured data, internal links and affiliate
  placements that read as genuine recommendations.
- **SEO built in** — per-page metadata, canonical URLs, Open Graph,
  `sitemap.xml`, `robots.txt`, JSON-LD (Organization, SoftwareApplication,
  FAQ, Article).
- **Compliance pages** — Privacy and an FTC-style Affiliate Disclosure.
- **Monetisation wired in** — affiliate cards, ad slots and a digital-product
  slot, all driven by `site.config.ts`.

## 6. Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

**Tech:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS. No
database, no environment variables, no paid services required.

---

*The tools are educational and provided without warranty. Revenue figures are
illustrative ranges, not guarantees — results depend on the effort you put
into content and promotion.*
