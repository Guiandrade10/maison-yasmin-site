# Maison Yasmini — Website

Institutional website for Maison Yasmini, a boutique wedding planning studio in
the Algarve, Portugal. Single-page React application served as static files.

## Stack

- **Vite 6** — build and dev server
- **React 18 + TypeScript**
- **Tailwind CSS 3** with the brand tokens declared in `src/index.css`
- **react-router-dom 7** — client-side routing
- **Vitest + Testing Library** — unit tests

## Getting started

```bash
npm install
npm run dev              # http://localhost:5173
npm run check            # tsc --noEmit
npm run lint
npm run test
npm run build            # emits static SPA into dist/
npm run build:prerender  # SPA build + puppeteer prerender (see below)
npm run preview          # preview the production build locally
```

### Prerendering

`npm run build:prerender` boots `vite preview`, drives Puppeteer over every
route in `scripts/prerender.mjs`, and writes `dist/<route>/index.html` files
with the fully rendered HTML — social crawlers and search engines then get
the real page content instead of the SPA shell.

Puppeteer downloads Chromium during `npm install`, but the browser still needs
NSS/NSPR system libraries at runtime. On Debian/Ubuntu:

```bash
sudo apt-get install -y libnss3 libnspr4
```

In sandboxed environments where you cannot install system packages, download
`libnss3.deb` / `libnspr4.deb`, extract them, and point `CHROME_DEPS_DIR` at
the directory that contains the `.so` files before running the script:

```bash
CHROME_DEPS_DIR=/path/to/extracted/lib npm run build:prerender
```

## Project structure

```
src/
├── components/    # Reusable UI (Header, Footer, Button, Accordion…)
├── config/        # siteConfig — brand metadata, socials, contact
├── data/          # content.ts — all page copy and image references
├── hooks/         # useDocumentTitle, useSeo (per-page meta)
├── pages/         # Route components (Home, About, Services, …)
├── lib/           # Utilities (e.g. cn)
└── index.css      # Tailwind directives + brand CSS variables
```

## Editing content

- **Copy** — `src/data/content.ts` centralizes packages, testimonials, FAQ,
  journal posts and image references.
- **Brand config** — `src/config/site.ts` holds the studio name, contact email,
  Instagram and WhatsApp URLs.
- **Images** — placeholder assets live in `public/images/` (WebP, 800 and 1600
  variants). Replace them with real photos before publishing; see the TODO in
  `src/data/content.ts` and `PENDENCIAS-CLIENTE.md`.

## Deployment

The site is a plain SPA. `vercel.json` and `public/_redirects` provide the
catch-all rewrite required so direct navigation to `/services`, `/faq`, etc.
does not 404 on Vercel or Netlify.
