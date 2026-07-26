# BestBritCasinoList

An independent, multi-page **UK online casino comparison & review** affiliate website for the domain **bestbritcasinolist.com**.

Built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS**, using a senior-level, component-driven architecture. All showcased brands live in a single **`src/data/data.json`** file.

> ⚠️ Demo project. All casino brands, bonuses and links are **fictional** and used for demonstration only.

## Palette — Premium Black & Ruby

| Token | Hex |
| ----- | --- |
| Black (`ink`) | `#121212` |
| Ruby (`ruby`) | `#C1121F` |
| White (`cream`) | `#FFFFFF` |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint
```

## Project structure

```
src/
├── app/                     # App Router pages (route = folder)
│   ├── layout.tsx           # Root layout: TopBar, Header, Footer, CookieConsent, SEO
│   ├── page.tsx             # Home
│   ├── casinos/             # Full ranking + comparison table
│   ├── reviews/             # Reviews index + [slug] detail (SSG)
│   ├── bonuses/             # Bonus comparison
│   ├── guides/              # Guides index + [slug] detail (SSG)
│   ├── about/ contact/
│   ├── responsible-gambling/
│   ├── privacy-policy/ terms/ cookie-policy/
│   ├── sitemap.ts robots.ts not-found.tsx icon.svg
│   └── globals.css
├── components/
│   ├── layout/              # Header, Footer, TopBar, PageHero, LegalLayout, CookieConsent
│   ├── casino/              # BrandCard, BrandLogo, ComparisonTable, AffiliateLink
│   ├── sections/            # Hero, Faq, DisclosureBanner, ResponsibleGamblingCTA
│   └── ui/                  # Icons, Rating, SectionHeading
├── data/data.json           # Single source of truth for brands, guides, FAQs, site config
├── lib/                     # Typed data accessors + utilities
└── types/                   # Shared TypeScript types
```

## Design & UX notes

- **Above-the-fold brands:** the home hero and every listing page surface casino brands
  immediately, with no scrolling required.
- **Distinct page styles:** each route has its own layout (row cards, compact grid, bonus cards,
  comparison table, editorial guide, legal prose).
- Fully responsive, keyboard-accessible, dark "Premium Black & Ruby" theme.

## Google Ads / UK compliance considerations

This site is structured to align with Google Ads gambling policy and UK advertising standards:

- Persistent **18+** and responsible-gambling messaging (top bar, footer, every offer).
- Dedicated **Responsible Gambling** page with GAMSTOP, GamCare, BeGambleAware and the National
  Gambling Helpline (0808 8020 133).
- Clear **advertising/affiliate disclosure** on every commercial page.
- Full **legal pages**: Terms of Use, Privacy Policy (UK GDPR) and Cookie Policy.
- **Cookie consent** banner with accept / reject options.
- Outbound affiliate links use `rel="sponsored nofollow noopener noreferrer"`.
- References to **UK Gambling Commission** licensing throughout; no guaranteed-winnings claims.

> Note: passing Google's gambling ad certification also requires holding the relevant local
> gambling advertising certification and a valid landing-page review. This project provides the
> on-site compliance foundations only.
