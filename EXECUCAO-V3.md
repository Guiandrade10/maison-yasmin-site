# Maison Yasmini — Execução da v3 (2026-07-16)

Resumo do que foi entregue por cada fase do `MAISON-GUIA-V3.md`, com decisões tomadas e desvios (justificados) do guia.

---

## Fase 0 — Ativar prerender no deploy (crítico)

**O que foi feito**

- `vercel.json`
  - `buildCommand: "npm run build:prerender"` — a Vercel passa a executar o build + Puppeteer, em vez de servir só a SPA vazia.
  - Headers de segurança sitewide (`X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`).
  - Preservados os headers de cache imutável para `/images/*` e `/assets/*`.
- Removido `public/_redirects` (resquício Netlify; a Vercel usa `rewrites` do `vercel.json`).

**Aceitação**

- `npm run build:prerender` local passa em 36 rotas (após Fase 2).
- Se o Puppeteer falhar no deploy da Vercel por cache de Chrome, aplicar `PUPPETEER_CACHE_DIR=/vercel/.cache/puppeteer` conforme documentado no `README.md`.

**Commit**: `fase 0: ativar prerender no deploy da vercel`.

---

## Fase 1 — Arquitetura i18n + copy PT verbatim

**Arquitetura fixa (conforme o guia)**

- EN permanece na raiz. PT vive sob `/pt` com slugs traduzidos.
- Sem biblioteca de i18n: camada própria e leve.
- Fonte única de verdade para o par EN↔PT: `src/i18n/routes.ts`.
- Provider derivado do pathname: `src/i18n/LangContext.tsx`.
- Todo o copy hardcoded extraído para `src/content/en.ts` e `src/content/pt.ts`, tipados por `SiteContent` em `src/content/types.ts`.

**Rotas**

Adicionadas 14 rotas PT em `App.tsx` (Home, Sobre, Serviços, Espaços, 4 categorias de venue, Portefólio, Testemunhos, Porquê Maison Yasmini, Processo, FAQ, Journal, Contacto, Privacidade) + rota dinâmica `/pt/journal/:slug`. O componente `VenueCategory` traduz o slug PT → EN via `VENUE_SLUG_PT_TO_EN` em `routes.ts` antes de olhar para os dados.

**Copy**

- **EN** foi extraído verbatim (byte a byte) das páginas atuais. Nenhuma alteração de wording.
- **PT** — 8 rotas com copy verbatim da cliente (Home, Serviços + 3 verticais, Espaços + 4 categorias). Rotas restantes usam tradução provisória do EN aprovado, sinalizada com `isProvisional: true` no content object e comentários `// PROVISÓRIO — aguarda aprovação da cliente` no código-fonte.

**Componentes**

- `SiteHeader`: switcher EN/PT em texto (sem bandeiras — padrão de marca de luxo). Usa `alternatePath()` para trocar para a rota equivalente no outro idioma, não para a home.
- `SiteFooter`: nav primária e secundária localizadas por `localizePath()`.
- `useSeo`: passa a receber `lang` do contexto e injeta `og:locale`, `og:locale:alternate`, `<html lang>` e um par `<link rel="alternate" hreflang>` por rota (base já pronta para a Fase 2).

**Aceitação**

- `npm run check` e `npm test` verdes (24/24 testes).
- 8 rotas com copy da cliente conferidas parágrafo a parágrafo contra `MAISON-COPY-PT-VERBATIM.md`.
- Switcher preserva a página atual (não redireciona para a home).
- `isProvisional` só presente nas rotas sem copy oficial (não nas 8 rotas oficiais).

**Decisões / desvios**

- **H2s inline em `intro`/`closing` de serviços.** O copy PT inclui H2s ("Um acompanhamento personalizado do início ao fim.", "O seu único compromisso será viver o momento.", etc.) no meio ou início de blocos que na EN não têm H2s. Em vez de duplicar tipos por idioma, adicionei o tipo `ProseBlock = string | { h2: string }` e o renderer decide como mostrar cada bloco. Preserva a estrutura editorial da cliente sem mexer no copy EN.
- **`philosophyLead` PT sem itálico no fecho.** A cliente escreveu "Porque acreditamos que o verdadeiro luxo reside na exclusividade..." como uma frase única, sem ênfase visual. Em vez de italicizar meia frase, o `philosophyLead.italic` fica vazio em PT e o texto todo entra em `prefix`.
- **Verticals na página de Serviços PT.** O `subtitle` da página `/pt/servicos` não foi fornecido separadamente pela cliente. Fica com a tagline aprovada da vertical 1 ("Intimate Weddings. Timeless Memories.") — coerente com a decisão editorial de manter headlines EN em PT.
- **Secções `role`/`partners`/`beyond` do Venues hub em PT.** Não vêm no documento da cliente; ficam como tradução provisória (comentário `// PROVISÓRIO` no `pt.ts`) até a cliente enviar copy dedicado ou pedir remoção. As 3 secções continuam a renderizar para não deixar a página PT vazia em relação à EN.

**Commit**: `fase 1: arquitetura i18n + content pt verbatim`.

---

## Fase 2 — SEO bilíngue

**O que foi feito**

- `useSeo` já injetava (Fase 1) `og:locale`, `og:locale:alternate`, `<html lang>` e hreflang. Mantido.
- `scripts/prerender.mjs`: adicionadas as 17 rotas PT ao array `ROUTES` (total 36).
- `public/sitemap.xml`: regenerado com pares EN/PT (36 URLs), `<lastmod>` por URL e `<xhtml:link rel="alternate" hreflang="en-GB|pt-PT|x-default">` em cada `<url>`.
- `JournalPost`: passou a injetar JSON-LD `Article` (headline, datePublished, image absoluta, author/publisher Organization, mainEntityOfPage, inLanguage). O `FAQPage` já existente em `Faq.tsx` foi conferido e passa a gerar entradas PT quando renderizado em `/pt/faq`.
- `index.html`: meta EN default mantida — o prerender por rota sobrescreve idioma, canonical e OG.

**Aceitação**

- Após `npm run build:prerender`, o ficheiro `dist/pt/servicos/index.html` contém:
  - `<title>Serviços | Maison Yasmini</title>`
  - `<link rel="canonical" href="https://maisonyasmini.com/pt/servicos">`
  - `og:locale = pt_PT`, `og:locale:alternate = en_GB`
  - Par `hreflang="en-GB"` + `hreflang="pt-PT"` + `hreflang="x-default"`
  - `<html lang="pt-PT">`
- Os ficheiros `dist/journal/*/index.html` e `dist/pt/journal/*/index.html` contêm o script `<script type="application/ld+json">` com `"@type":"Article"`.
- Validação manual no Rich Results Test (3 URLs) fica pendente até o deploy — instruções no `RELATORIO-SEO.md`.

**Commit**: `fase 2: seo bilíngue (prerender pt, sitemap hreflang, article jsonld)`.

---

## Fase 3 — Performance

**O que foi feito**

- Instaladas as dependências `@fontsource/cinzel` (400/500/600) e `@fontsource/montserrat` (400/500).
- Importadas em `src/index.css` — cada `@import` traz `font-display: swap` embutido, sem render-blocking.
- Removido do `index.html` o preconnect + `<link href="https://fonts.googleapis.com/...">`.
- Confirmado: imagens abaixo da dobra têm `loading="lazy"` e `width`/`height` via `image-dimensions.json`; hero da Home mantém `loading="eager"` + `fetchpriority="high"`.

**Aceitação**

- `grep 'fonts.googleapis' dist/index.html` retorna 0 ocorrências.
- Assets `.woff2` (Cinzel + Montserrat) emitidos em `dist/assets/`.
- Lighthouse local ≥ 90 em Performance/SEO/A11y/BP fica pendente até rodar-se num ambiente com Chrome instalado; o `RELATORIO-SEO.md` documenta o comando.

**Decisões / desvios**

- Apenas os pesos usados foram importados (400/500/600 em Cinzel; 400/500 em Montserrat) para minimizar bytes emitidos.

**Commit**: `fase 3: self-host fontes (remove google fonts render-blocking)`.

---

## Fase 4 — Documentos vivos

**O que foi feito**

- `PENDENCIAS-CLIENTE.md`: substituído pela versão consolidada de go-live (fornecida em `MAISON-PENDENCIAS-CLIENTE.md`) e estendido com item para a revisão jurídica do `/privacy` PT.
- `RELATORIO-SEO.md` criado na raiz: cobre cobertura de idiomas, prerender, metadados por rota, sitemap, JSON-LD, performance, segurança, pendências para v3.1 e como validar após o deploy.
- `README.md` atualizado: novo fluxo `build:prerender` para a Vercel, secção i18n com a estrutura `src/i18n` + `src/content`, como adicionar uma nova página bilíngue, e ponteiros para os documentos relacionados.

**Commit**: `fase 4: documentos vivos (pendencias, relatorio-seo, readme i18n)`.

---

## Fora de escopo da v3 (registado para v3.1)

- Tradução dos posts do Journal — hoje em EN sob `/pt/journal/*`, com nota no hub PT.
- Copy PT dedicado para Sobre Nós, Porque Maison Yasmini, Processo, FAQ, Contacte-nos e Privacidade — enquanto não chega, tradução provisória do EN.
- Revisão jurídica do texto de privacidade (EN e PT).
- CTA principal — proposta `Comecem a Vossa Jornada` para PT já em uso, aguarda confirmação formal da cliente.
