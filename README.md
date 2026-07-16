# Maison Yasmini — Website

Institutional website for Maison Yasmini, a boutique wedding planning studio in
the Algarve, Portugal. Single-page React application prerendered per route and
served bilingually (EN + PT-PT).

## Stack

- **Vite 6** — build and dev server
- **React 18 + TypeScript**
- **Tailwind CSS 3** with brand tokens declared in `src/index.css`
- **react-router-dom 7** — client-side routing
- **@fontsource/cinzel + @fontsource/montserrat** — self-hosted brand fonts
- **Puppeteer** — per-route prerender at build time
- **Vitest + Testing Library** — unit tests

## Getting started

```bash
npm install
npm run dev              # http://localhost:5173
npm run check            # tsc --noEmit
npm run lint
npm run test
npm run build            # emits SPA into dist/
npm run build:prerender  # SPA build + puppeteer prerender (see below)
npm run preview          # preview the production build locally
```

## Deployment

Deployed to Vercel. `vercel.json` sets `buildCommand: npm run build:prerender`,
which builds the SPA and then generates static `dist/<route>/index.html` files
for every route in `scripts/prerender.mjs` (currently 36: 18 EN + 18 PT). The
`rewrites` rule serves `index.html` for any path that has no prerendered file,
so client-side routing continues to work.

`vercel.json` also sets baseline security headers (`X-Content-Type-Options`,
`X-Frame-Options`, `Referrer-Policy`) and long-term cache on `/images/*` +
`/assets/*` (hashed and immutable).

### Prerender

`npm run build:prerender` boots `vite preview`, drives Puppeteer over every
route, waits for the app to hydrate, and writes the rendered HTML — so social
crawlers and search engines get real page content instead of the SPA shell.

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

On Vercel, if the browser fails to launch because the download cache is empty,
set `PUPPETEER_CACHE_DIR=/vercel/.cache/puppeteer` in the project's env.

## Internationalisation (EN + PT-PT)

EN lives at the root (`/`, `/services`, `/venues/luxury-resorts`, …). PT lives
under the `/pt` prefix with translated slugs (`/pt/servicos`,
`/pt/espacos/resorts-de-luxo`, …). See `src/i18n/routes.ts` for the full pair
map — that file is the single source of truth for both the router, the language
switcher and the sitemap.

- `src/i18n/LangContext.tsx` — provider that derives `lang` from the URL and
  exposes the typed content object plus `localizePath()`.
- `src/content/types.ts` — the `SiteContent` interface (one type, two
  implementations).
- `src/content/en.ts` — EN copy, verbatim from the approved wordings.
- `src/content/pt.ts` — PT-PT copy. For the 8 routes covered by the client's
  document (`MAISON-COPY-PT-VERBATIM.md`), the text is verbatim from the
  client. Routes not covered by the client use a provisional translation of
  the EN copy, flagged in the content object with `isProvisional: true`
  and/or a `// PROVISÓRIO — aguarda aprovação da cliente` code comment.
- `src/hooks/useSeo.ts` — injects `<html lang>`, `og:locale`, canonical, and
  `hreflang` alternates (en-GB / pt-PT / x-default) per route.

To add a new page:

1. Register the EN path (and PT slug) in `src/i18n/routes.ts`.
2. Extend `SiteContent` in `src/content/types.ts`.
3. Add the copy in `src/content/en.ts` and `src/content/pt.ts`.
4. Add both routes in `src/App.tsx`.
5. Add both paths to `scripts/prerender.mjs` and `public/sitemap.xml`.

## Project structure

```
src/
├── components/    # Reusable UI (Header, Footer, Button, Accordion…)
├── config/        # siteConfig — brand metadata, socials, contact
├── content/       # SiteContent type + en.ts + pt.ts (all page copy)
├── data/          # Legacy content module (image assets, portfolio,
│                  # journal covers). Copy moved to src/content/.
├── hooks/         # useSeo (per-page meta + hreflang), useScrolled
├── i18n/          # routes.ts + LangContext.tsx (bilingual routing)
├── pages/         # Route components (Home, About, Services, …)
├── lib/           # Utilities (e.g. cn)
└── index.css      # @fontsource imports + Tailwind + brand tokens
```

## Editing content

- **Copy** — edit `src/content/en.ts` and `src/content/pt.ts`. Do not
  hardcode strings in components.
- **Brand config** — `src/config/site.ts` holds the studio name, contact
  email, Instagram and WhatsApp URLs.
- **Images** — WebP variants live in `public/images/` (800 and 1600). See
  the TODO in `src/data/content.ts` and `PENDENCIAS-CLIENTE.md`.

## Related docs

- `PENDENCIAS-CLIENTE.md` — what still needs client input before go-live.
- `RELATORIO-SEO.md` — the SEO/i18n audit and validation checklist.
- `MAISON-GUIA-V3.md` — the v3 execution guide.
- `MAISON-COPY-PT-VERBATIM.md` — the client's verbatim PT copy.
- `EXECUCAO-V3.md` — summary of what was done in each v3 phase.
