# Maison Yasmini — Relatório SEO (v3, 2026-07-16)

Este documento consolida o estado técnico de SEO após a v3. Serve para acompanhar o que já está feito, o que depende de decisões da cliente e o que ficou fora de escopo (v3.1).

---

## 1. Cobertura de idiomas

- **EN** (mercado principal) na raiz: `/`, `/services`, `/venues/...`, etc.
- **PT-PT** sob prefixo `/pt`, com slugs traduzidos (ex.: `/pt/servicos`, `/pt/espacos/resorts-de-luxo`).
- `x-default` → EN.

## 2. Prerender

- `vercel.json` define `buildCommand: "npm run build:prerender"` → a Vercel executa o build + Puppeteer.
- 36 rotas prerenderizadas (18 EN + 18 PT). Cada rota gera `dist/<rota>/index.html` com HTML completo, `<h1>`, copy visível e metadados por rota.
- Crawlers e partilhas sociais (WhatsApp, LinkedIn, Twitter/X) recebem HTML completo sem depender de JavaScript.

## 3. Metadados por rota

Injetados por `useSeo` em runtime e "cristalizados" pelo prerender:

- `<html lang>` — `en` ou `pt-PT`
- `<title>` bilíngue
- `<meta name="description">` bilíngue
- `<link rel="canonical">` com o path localizado
- `og:locale` (`en_GB` / `pt_PT`) + `og:locale:alternate`
- `og:title`, `og:description`, `og:url`, `og:image`
- Twitter card equivalente
- `<link rel="alternate" hreflang="en-GB|pt-PT|x-default">`

## 4. Sitemap

`public/sitemap.xml` regenerado com:

- Todas as 36 URLs (EN + PT)
- `<lastmod>` por URL (data do release ou do post)
- `<xhtml:link rel="alternate" hreflang>` para cada URL, apontando ao par EN/PT + `x-default`
- Prioridades e `changefreq` conservadas do plano anterior

## 5. Dados estruturados (JSON-LD)

- `index.html` — `ProfessionalService` (base sitewide)
- `/faq`, `/pt/faq` — `FAQPage` gerado a partir do content (perguntas/respostas por idioma)
- `/journal/:slug`, `/pt/journal/:slug` — `Article` com `headline`, `datePublished`, `image`, `author`/`publisher` (Organization), `mainEntityOfPage`, `inLanguage`

## 6. Performance (Fase 3)

- Fontes self-hosted via `@fontsource/cinzel` e `@fontsource/montserrat`, importadas no `index.css` com `font-display: swap` embutido — remove render-blocking do Google Fonts.
- Imagens têm `loading="lazy"` + `width`/`height` (via `image-dimensions.json`) para evitar CLS.
- Hero da Home mantém `loading="eager"` + `fetchpriority="high"` para LCP.

## 7. Segurança e cache

`vercel.json` adiciona headers para todas as respostas:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`

E preserva cache long-term para `/images/*` e `/assets/*` (imutáveis com hash).

## 8. Pendências para v3.1

- **Tradução dos posts do Journal** (hoje em EN sob `/pt/journal/*`). A infraestrutura hreflang já anuncia o par, mas os posts ainda são EN.
- **Copy PT dedicado** para Sobre Nós, Porque Maison Yasmini, Processo, FAQ, Contacto e Privacidade (ver `PENDENCIAS-CLIENTE.md`).
- **Revisão jurídica da Política de Privacidade** (EN e PT) antes de considerar oficial.
- **Google Search Console e Rich Results Test** manuais assim que o domínio final estiver ligado à Vercel.

## 9. Como validar após deploy

1. `curl -s https://maisonyasmini.com/pt/servicos | grep -E '(<h1|hreflang|canonical|og:locale)'` — devem aparecer H1, canonical `/pt/servicos`, `pt_PT` e hreflang para o par.
2. Rich Results Test do Google: colar 3 URLs (`/`, `/pt`, `/journal/how-much-...`) e confirmar `ProfessionalService`, `FAQPage`, `Article`.
3. Lighthouse local do build prerenderizado (`npx vite preview`): alvo ≥ 90 em Performance/SEO/Accessibility/Best Practices para as homepages EN e PT.
