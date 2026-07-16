# Maison Yasmini — Guia v3: Versão Portuguesa + Correções de Go-Live

> **Documento de execução para Claude Code.** Executar as fases em ordem. Cada fase tem critérios de aceitação que devem passar antes de avançar. Stack: Vite + React 18 + TypeScript + Tailwind 3 + react-router-dom 7. Deploy: Vercel.

---

## Contexto

Auditoria de 2026-07-16 identificou: (1) o deploy na Vercel **não executa o prerender**, servindo SPA vazia para crawlers e quebrando OG tags por rota; (2) o site é EN-only e a cliente precisa de versão em **português europeu (PT-PT)**; (3) pequenas pendências técnicas (redirects órfãos, JSON-LD limitado, fontes render-blocking, headers de segurança).

**Regra editorial vigente (não violar):** preços fora de Services (uma linha no FAQ apenas), Journal só no footer, capacidade padronizada em 75 convidados, copy EN aprovada é verbatim — não alterar.

---

## Fase 0 — Ativar prerender no deploy (crítico, fazer primeiro)

1. Em `vercel.json`, adicionar:
   ```json
   "buildCommand": "npm run build:prerender"
   ```
2. Remover `public/_redirects` (resquício de Netlify; a Vercel usa `rewrites` do `vercel.json`).
3. Adicionar headers de segurança ao `vercel.json`:
   ```json
   {
     "source": "/(.*)",
     "headers": [
       { "key": "X-Content-Type-Options", "value": "nosniff" },
       { "key": "X-Frame-Options", "value": "DENY" },
       { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
     ]
   }
   ```

**Aceitação:** após deploy de preview, `curl` da homepage e de `/services` retorna HTML com `<h1>` e conteúdo completo (não apenas o splash). Se o Puppeteer falhar no build da Vercel por cache do Chrome, definir env var `PUPPETEER_CACHE_DIR=/vercel/.cache/puppeteer` e re-testar.

---

## Fase 1 — Arquitetura i18n

**Decisões de arquitetura (fixas):**

- EN permanece na raiz (`/`) — mercado principal é internacional. PT vive sob prefixo `/pt`.
- **Slugs traduzidos** para SEO em português (mapa abaixo). Manter slugs EN sob `/pt/...` está proibido.
- `x-default` → versão EN.
- Nenhuma biblioteca de i18n externa. Criar camada própria e leve:
  - `src/i18n/routes.ts` — mapa bidirecional de slugs EN↔PT (fonte única de verdade).
  - `src/content/en.ts` e `src/content/pt.ts` — todo o copy por página, mesma interface TypeScript (`SiteContent`).
  - `src/i18n/LangContext.tsx` — provider que deriva o idioma do pathname e expõe `lang`, `content` e `localizePath()`.

**Mapa de rotas:**

| EN | PT |
| --- | --- |
| `/` | `/pt` |
| `/services` | `/pt/servicos` |
| `/venues` | `/pt/espacos` |
| `/venues/luxury-resorts` | `/pt/espacos/resorts-de-luxo` |
| `/venues/private-villas` | `/pt/espacos/villas-privadas` |
| `/venues/exclusive-restaurants` | `/pt/espacos/restaurantes-exclusivos` |
| `/venues/country-estates` | `/pt/espacos/quintas` |
| `/portfolio` | `/pt/portfolio` |
| `/kind-words` | `/pt/testemunhos` |
| `/about` | `/pt/sobre` |
| `/why-maison-yasmini` | `/pt/porque-maison-yasmini` |
| `/process` | `/pt/processo` |
| `/faq` | `/pt/faq` |
| `/journal` | `/pt/journal` |
| `/journal/:slug` | `/pt/journal/:slug` (slugs dos posts permanecem EN na v3) |
| `/contact` | `/pt/contacto` |
| `/privacy` | `/pt/privacidade` |

**Passos:**

1. Extrair TODO o copy hardcoded das 14 páginas e de `src/data/content.ts` para `src/content/en.ts` (refactor sem mudança visual — a copy EN é verbatim, comparar caractere a caractere).
2. Criar `src/content/pt.ts` a partir de **`COPY-PT-VERBATIM.md`** (copy oficial enviado pela cliente em 2026-07 — mesma regra do EN: texto verbatim, sem correções nem melhorias; headlines em inglês dentro da versão PT são decisão da cliente e ficam). O documento cobre 8 rotas (Início, Serviços + 3 verticais, Espaços + 4 categorias). Para as rotas SEM copy da cliente, seguir a tabela "LACUNAS" no final do `COPY-PT-VERBATIM.md`: traduções provisórias do EN aprovado, cada bloco marcado com `// PROVISÓRIO — aguarda aprovação da cliente`.
3. Duplicar as `<Route>` em `App.tsx` sob `/pt/*` usando o mapa de `routes.ts`. Página 404 bilíngue (detecta prefixo).
4. `SiteHeader`: adicionar switcher EN/PT discreto (texto, sem bandeiras — padrão de marca de luxo) que usa `routes.ts` para trocar para a rota equivalente, não para a home.

**Aceitação:** `npm run check` e `npm test` verdes; as 8 rotas com copy da cliente conferidas parágrafo a parágrafo contra `COPY-PT-VERBATIM.md`; switcher preserva a página atual; nenhum bloco `PROVISÓRIO` nas 8 rotas oficiais.

---

## Fase 2 — SEO bilíngue

1. Estender `useSeo` para aceitar `lang` e injetar:
   - `og:locale` (`en_GB` / `pt_PT`) e `og:locale:alternate`;
   - `<link rel="alternate" hreflang="en-GB|pt-PT|x-default">` para o par de rotas (usar `routes.ts`);
   - `document.documentElement.lang` atualizado por rota.
2. `index.html`: manter meta EN default (o prerender sobrescreve por rota).
3. `scripts/prerender.mjs`: adicionar as 17 rotas PT ao array `ROUTES`.
4. `public/sitemap.xml`: regenerar com os pares EN/PT e anotações `xhtml:link` hreflang em cada `<url>`; adicionar `<lastmod>`.
5. JSON-LD: adicionar schema `Article` nos dois posts do Journal (headline, datePublished, image, author Organization) e `FAQPage` já existente conferido nas duas línguas.

**Aceitação:** no build prerenderizado, `dist/pt/servicos/index.html` contém title/description PT, canonical `https://maisonyasmini.com/pt/servicos` e par hreflang completo. Validar 3 URLs no Rich Results Test manualmente após deploy.

---

## Fase 3 — Performance

1. Substituir Google Fonts (render-blocking) por `@fontsource/cinzel` e `@fontsource/montserrat`, importadas no `index.css` com `font-display: swap`. Remover `<link>` de fonts do `index.html`.
2. Confirmar `loading="lazy"` + `width`/`height` (via `image-dimensions.json`) em todas as imagens abaixo da dobra; hero permanece eager com `fetchpriority="high"`.

**Aceitação:** Lighthouse local (preview do build prerenderizado) ≥ 90 em Performance/SEO/Accessibility/Best Practices nas homepages EN e PT.

---

## Fase 4 — Documentos vivos

1. Atualizar `PENDENCIAS-CLIENTE.md` com a versão consolidada (arquivo fornecido junto a este guia — substituir o atual).
2. Adicionar `RELATORIO-SEO.md` na raiz do repo (arquivo fornecido junto a este guia).
3. Registrar no `README.md` o novo fluxo de build (`build:prerender`) e a estrutura i18n.

---

## Fora de escopo da v3 (registrar, não executar)

- Tradução dos slugs e do corpo dos posts do Journal (v3.1, após aprovação do copy PT das páginas).
- Formulário multilíngue no Formspree (mensagens de erro/sucesso já devem sair do `content.{en,pt}.ts`).
