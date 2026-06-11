# Veltra — Premium Payments Platform

A modern, production-ready payment platform UI built with **Next.js 15 (App Router)**,
**TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide React**.

Veltra is an original, fintech-grade interface inspired by online bill-payment
services — instant payments, bill top-ups, transfers, and a beautiful wallet
dashboard, with its own branding and design language.

## ✨ Highlights

- **Next.js 15 App Router** with mostly server components and small, focused client islands.
- **Dark mode** via `next-themes` (system-aware, class strategy).
- **Framer Motion** scroll reveals, animated counters, and micro-interactions.
- **Command-palette search** (`⌘K` / `Ctrl+K`) across services and pages.
- **Responsive** across mobile, tablet, and desktop with a sticky, glassy navbar.
- **Accessible**: semantic landmarks, ARIA, focus rings, skip link, reduced-motion support.
- **SEO**: per-page metadata, Open Graph/Twitter cards, `sitemap.xml`, and `robots.txt`.
- **Loading skeletons** via route-level `loading.tsx` files.
- **Static prerendering** of every page for excellent Core Web Vitals.

## 🎨 Design system

| Token        | Value     | Usage                 |
| ------------ | --------- | --------------------- |
| Primary      | `#2563EB` | Actions, links        |
| Secondary    | `#0F172A` | Dark surfaces         |
| Accent       | `#38BDF8` | Gradients, highlights |
| Background   | `#F8FAFC` | App background        |

Theme tokens live in [`src/app/globals.css`](src/app/globals.css) as Tailwind v4
`@theme` variables, with a `.dark` override block.

## 📁 Structure

```
src/
├─ app/                    # Routes (home, services, payments, about, faq, contact, dashboard, 404)
│  ├─ layout.tsx           # Root layout: fonts, metadata, theme provider, nav + footer
│  ├─ globals.css          # Tailwind v4 theme, dark mode, utilities
│  ├─ sitemap.ts / robots.ts
│  └─ <route>/page.tsx + loading.tsx
├─ components/
│  ├─ ui/                  # Button, Card, Container, Section, Badge, Accordion, Skeleton…
│  ├─ layout/              # Navbar, Footer, Logo, ThemeToggle, SearchCommand, ThemeProvider
│  ├─ home/                # Hero, PopularServices, Stats, Features, HowItWorks, Testimonials…
│  ├─ services/            # ServiceCard, ServicesExplorer (search + filter)
│  ├─ contact/             # ContactForm (validated, UI-only)
│  └─ motion/              # Reveal, AnimatedCounter
└─ lib/
   ├─ data.ts              # Single source of content (services, stats, FAQs, nav, …)
   ├─ types.ts             # Shared TypeScript types
   └─ utils.ts             # cn() classname helper
```

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## 🧩 Extending

- **Add a service** → append to `SERVICES` in `src/lib/data.ts`; it appears in
  search, the services explorer, and (if `popular`) the homepage grid.
- **Add a page** → create `src/app/<route>/page.tsx` and add it to `NAV_ITEMS`.
- **Theme** → adjust the `@theme` tokens in `globals.css`; everything inherits.

> The dashboard, contact form, and search are intentionally UI-only — wire them
> to your backend/auth of choice.
