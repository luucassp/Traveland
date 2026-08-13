# 🚌 Traveland — Dublin sightseeing tours

> **Concept redesign.** Built as a proposal for a Dublin hop-on hop-off tour operator running
> an ageing WordPress site — a working demonstration of what a modern replacement could look
> like. It led to a real engagement: [Sightseeing Bike Tours](https://github.com/luucassp/City-Sightseeing-Bike-Tours),
> the site for that operator's new bike-tour line.

Booking and marketing site for hop-on hop-off bus tours — with bike tours, night tours and
historical walks. Built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS**,
in **6 languages** and **3 currencies**.

![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js) ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38BDF8?logo=tailwindcss&logoColor=white) ![Leaflet](https://img.shields.io/badge/Leaflet-199900?logo=leaflet&logoColor=white)

🔗 **Live:** [traveland-kappa.vercel.app](https://traveland-kappa.vercel.app)

---

## What it does

A visitor lands on the site, browses the available tours, compares packages, checks where the
buses stop on a live map, and books — in their own language and currency.

- **6 languages** — English, Portuguese, Spanish, French, Italian, German (~1,280 lines of translations)
- **3 currencies** — EUR, USD, GBP, converted from a EUR base price
- **Interactive maps** — Leaflet, loaded lazily so they never block the first paint
- **Content sections** — tours catalogue, pricing table, package comparison, reviews, social proof, FAQ, blog
- **Booking flow** — booking widget, tickets page, and a sticky book bar on mobile

## Pages

| Route | What's there |
|---|---|
| `/` | Home — hero, tour cards, how it works, reviews, stats, newsletter |
| `/tours` · `/tours/[slug]` | Tour catalogue and individual tour pages |
| `/tickets` | Ticket types and pricing |
| `/booking` | Booking flow |
| `/bus-stops` | Route map with all hop-on hop-off stops |
| `/blog` · `/blog/[slug]` | Travel content |
| `/faq` · `/about` · `/contact` | Support pages |

## Where to change what

| I want to change... | Go to... |
|---|---|
| Tours, prices, descriptions | [`src/lib/tours.ts`](src/lib/tours.ts) |
| Ticket packages | [`src/lib/packages.ts`](src/lib/packages.ts) · [`src/lib/plans.ts`](src/lib/plans.ts) |
| Any text on the site, in any language | [`src/lib/i18n/translations.ts`](src/lib/i18n/translations.ts) |
| Exchange rates | [`src/lib/currency/context.tsx`](src/lib/currency/context.tsx) |
| FAQ questions | [`src/lib/faq.ts`](src/lib/faq.ts) |
| Blog posts | [`src/lib/blog.ts`](src/lib/blog.ts) |
| Bus stops on the map | [`src/components/sections/leaflet-map.tsx`](src/components/sections/leaflet-map.tsx) |
| Header, footer, mobile book bar | [`src/components/layout/`](src/components/layout) |

## Stack

- **Next.js App Router** · React · TypeScript
- **Tailwind CSS** + Radix UI primitives (accordion, slot)
- **Framer Motion** for scroll and entrance animations
- **Leaflet / react-leaflet** for the route maps
- Language and currency held in React context, persisted client-side
- Deployed on **Vercel**

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

No environment variables needed — all content is in `src/lib/`.

## Known gaps

- Exchange rates in `src/lib/currency/context.tsx` are hardcoded approximations, not live rates
- The booking flow collects details but is not wired to a payment provider yet
- Content lives in TypeScript files; a CMS would let a non-developer edit it
