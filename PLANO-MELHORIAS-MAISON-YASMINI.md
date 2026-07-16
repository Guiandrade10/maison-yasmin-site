# Maison Yasmini — Guia de Melhorias Pré-Entrega

> **Ferramenta recomendada:** Claude Code, rodando na raiz do repositório `maison-yasmin-site`.
> **Como usar:** peça ao Claude Code para executar este plano em ordem de prioridade (P0 → P3), validando cada fase com `npm run check && npm run lint && npm run test && npm run build` antes de commitar. Cada tarefa tem arquivos-alvo e critério de aceite.

---

## Contexto do projeto

- Site institucional de wedding planner boutique no Algarve, Portugal. Público: casais internacionais (idioma do site: inglês).
- Stack: Vite 6 + React 18 + TypeScript + Tailwind 3 + react-router-dom 7. SPA client-side, sem SSR.
- Conteúdo centralizado em `src/data/content.ts`; config da marca em `src/config/site.ts`.
- Identidade visual: paleta safira/champanhe definida como CSS variables em `src/index.css` e mapeada em `tailwind.config.js`.
- O repositório contém `guide.md` (brand guide oficial — **fonte de verdade para copy e posicionamento**) e `copy-review.md`. Consultar ambos antes de alterar textos.
- Regras gerais: não mudar a identidade visual (cores/tipografia serif+sans), não adicionar frameworks novos (nada de Next.js), manter o site estático e leve.

---

## P0 — Bloqueadores (o site não pode ir à cliente sem isto)

### P0.1 Substituir todas as imagens geradas por API externa (QUEBRADAS)
**Problema:** `src/data/content.ts` → objeto `imageUrls` aponta para `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?...`. Essa API retorna **HTTP 403**; nenhuma imagem do site carrega. Mesmo quando funcionava, gerava imagem diferente a cada request (retrato da "fundadora" era uma pessoa fictícia diferente a cada visita).
**Arquivos:** `src/data/content.ts`, novo diretório `src/assets/` ou `public/images/`.
**Ações:**
1. Criar `public/images/` e mover as 4 referências (`hero`, `yasminiPortrait`, `algarveLandscape`, `detail`) para arquivos locais.
2. Como placeholder temporário até a cliente enviar fotos reais, usar imagens locais de banco livre (baixadas e commitadas, nunca hotlink) e inserir um `TODO:` comentado em `content.ts` listando quais fotos a cliente precisa fornecer (retrato profissional, 3+ fotos de casamentos reais, paisagem do Algarve).
3. Otimizar: converter para WebP/AVIF, gerar 2 tamanhos (mobile ~800px, desktop ~1600px) e usar `srcSet`/`sizes` nos `<img>`.
4. A imagem do topo da Home (quando adicionada, ver P2.1) deve usar `loading="eager"` e `fetchpriority="high"`; as demais mantêm `loading="lazy"`.
**Aceite:** `grep -r "trae.ai" src/` retorna vazio; todas as imagens carregam offline; build passa.

### P0.2 Formulário de contato funcional
**Problema:** `src/pages/Contact.tsx` usa `mailto:` e exibe "Thank you." antes de qualquer envio real. O upload de "vision board" não envia arquivo (só captura o nome). Para um site cujo objetivo é gerar leads, isso é falha de conversão e induz o usuário ao erro.
**Arquivos:** `src/pages/Contact.tsx`, `src/config/site.ts`.
**Ações:**
1. Integrar um backend de formulário estático — **Formspree** (plano gratuito serve) ou **Web3Forms**. Endpoint configurável via `src/config/site.ts` (ex.: `formEndpoint`).
2. Estados reais: `idle → sending → success | error`, com mensagem de erro amigável e botão desabilitado durante envio.
3. Remover o campo de upload de arquivo (o mailto não anexava nada) OU trocar por campo de link ("Link to your vision board — Pinterest, Google Drive…"). Manter o campo Pinterest já existente e unificar.
4. Validação: e-mail válido, nomes obrigatórios; mensagens de erro visíveis e associadas via `aria-describedby`.
5. Manter fallback discreto no rodapé do formulário: "Prefer email? Write to hello@maisonyasmini.com".
6. Adicionar honeypot anti-spam (campo oculto).
**Aceite:** submit real retorna sucesso do endpoint; nenhum `mailto:` restante no fluxo principal; teste manual de erro (endpoint inválido) mostra estado de erro.

### P0.3 Configuração de deploy para SPA
**Problema:** sem rewrite, acessar `/services` diretamente ou dar refresh fora da home retorna 404 no host.
**Arquivos:** criar `vercel.json` (ou `public/_redirects` se Netlify — perguntar ao dono qual host; na dúvida, criar ambos).
**Ações:** `vercel.json` com rewrite de `/(.*)` → `/index.html`; `public/_redirects` com `/* /index.html 200`.
**Aceite:** arquivos presentes no build (`dist/`).

### P0.4 Limpeza de resíduos de scaffolding (Trae)
**Problema:** vestígios da ferramenta de geração comprometem a entrega profissional.
**Arquivos:** `package.json`, `vite.config.ts`, `README.md`, `index.html`.
**Ações:**
1. `package.json`: renomear `"name"` para `"maison-yasmini-site"`; remover devDependencies não usadas: `vite-plugin-trae-solo-badge`, `babel-plugin-react-dev-locator`, `zustand` (dependência instalada e nunca importada).
2. `vite.config.ts`: remover o plugin babel `react-dev-locator` (roda no build de produção sem necessidade).
3. `index.html`: remover o `<script type="module">` de tratamento de erro do Vite HMR (dev-only, não pertence ao HTML de produção).
4. `README.md`: substituir o template do Vite por um README do projeto (nome, stack, `npm run dev/build/test`, estrutura de pastas, onde editar conteúdo — `src/data/content.ts` — e onde trocar imagens).
5. Rodar `npm install` para atualizar o lockfile e `npm run build` para validar.
**Aceite:** `grep -ri "trae" package.json vite.config.ts index.html README.md` retorna vazio; build passa.

---

## P1 — SEO e metadados (essencial para o negócio)

### P1.1 Meta tags por página + Open Graph completo
**Problema:** SPA client-side: todas as rotas compartilham o `<head>` do `index.html`. Não há `og:image` (prévias de link no WhatsApp/Instagram — canal nº 1 do mercado de casamentos — aparecem sem foto), nem canonical, nem meta description por página. `useDocumentTitle` só altera o título.
**Arquivos:** `index.html`, `src/hooks/useDocumentTitle.ts` → evoluir para `src/hooks/useSeo.ts`, todas as páginas em `src/pages/`.
**Ações:**
1. Criar hook `useSeo({ title, description, path })` que atualiza `document.title`, `<meta name="description">`, `<link rel="canonical">`, `og:title`, `og:description`, `og:url`. Aplicar em todas as 8 páginas com descriptions únicas de 140–160 caracteres orientadas às buscas-alvo ("algarve wedding planner", "destination wedding portugal", "intimate wedding algarve").
2. `index.html`: adicionar `og:image` (criar `public/og-image.jpg`, 1200×630, com foto + monograma), `og:site_name`, `og:locale`, `twitter:card=summary_large_image`, `twitter:image`, e `theme-color` (#FAF7F0).
3. Adicionar `<link rel="apple-touch-icon">` (gerar PNG 180×180 a partir do favicon.svg) e favicon PNG 32×32 de fallback.
**Aceite:** cada rota tem title/description/canonical únicos ao navegar; `index.html` contém og:image apontando para arquivo existente.

### P1.2 Pré-renderização das rotas estáticas
**Problema:** crawlers e prévias sociais recebem HTML vazio. Migrar de framework é desproporcional; pré-renderizar resolve.
**Arquivos:** `vite.config.ts`, `package.json`.
**Ações:** adicionar etapa de prerender pós-build (ex.: script com `puppeteer`/`vite-prerender-plugin` ou pacote `vite-plugin-prerender` equivalente compatível com Vite 6) para as rotas: `/`, `/about`, `/services`, `/process`, `/faq`, `/journal`, `/journal/how-much-does-a-destination-wedding-in-algarve-cost`, `/journal/best-intimate-wedding-venues-in-algarve`, `/contact`. Se a integração com Vite 6 se mostrar frágil, alternativa aceitável: script Node próprio que sobe `vite preview`, renderiza cada rota com puppeteer e grava os HTMLs em `dist/`.
**Aceite:** `dist/about/index.html` (etc.) contém o conteúdo textual da página; meta tags de P1.1 presentes no HTML estático.

### P1.3 Sitemap, robots e dados estruturados
**Arquivos:** `public/robots.txt`, `public/sitemap.xml`, `index.html` (ou componente).
**Ações:**
1. `robots.txt` permitindo tudo + linha `Sitemap:`.
2. `sitemap.xml` com as 9 URLs (usar domínio definitivo — confirmar com a cliente; placeholder `https://maisonyasmini.com`).
3. JSON-LD no `index.html`: tipo `ProfessionalService`/`LocalBusiness` (name, areaServed: Algarve/Portugal, email, priceRange "€€€", sameAs Instagram real). Na página FAQ, injetar JSON-LD `FAQPage` gerado a partir de `faqs` em `content.ts`.
**Aceite:** validação sem erros no https://validator.schema.org (checagem manual); arquivos presentes em `dist/`.

### P1.4 Consistência de marca e links reais
**Problema:** `siteConfig.instagramUrl` aponta para `https://www.instagram.com/` genérico; e-mail `hello@maisonyasmini.com` não confirmado; repo se chama "maison-yasmin" mas a marca é "Maison Yasmini".
**Ações:** marcar com `TODO:` os valores que dependem da cliente (Instagram real, e-mail real, domínio) em `src/config/site.ts` e listar em `PENDENCIAS-CLIENTE.md` na raiz (criar) tudo o que precisa ser fornecido: fotos reais, depoimentos reais autorizados, @ do Instagram, e-mail, domínio, textos jurídicos (privacy policy).
**Aceite:** arquivo `PENDENCIAS-CLIENTE.md` criado e completo.

---

## P2 — Design, hero e mobile

### P2.1 Hero section
**Problema:** hero 100% tipográfica (monograma + nome + tagline). Para wedding planner, fotografia vende; além disso o H1 "MAISON YASMINI" duplica o monograma e não comunica proposta de valor nem palavra-chave. O primeiro stat card mostra "Starting from 3,000€" acima da dobra — ancora a conversa em preço antes de vender a experiência.
**Arquivos:** `src/pages/Home.tsx`.
**Ações:**
1. Reestruturar: manter monograma menor como marca, e transformar o H1 na proposta de valor — usar a tagline oficial do `guide.md`: **"Intimate Destination Weddings in Algarve"** (bom para SEO e posicionamento). "Maison Yasmini" vira o elemento de marca acima (o header já mostra o nome; sem perda).
2. Adicionar imagem hero (a foto principal de P0.1) — sugestão: banda de imagem full-width abaixo do bloco de texto, ou layout 2 colunas no desktop (texto à esquerda, foto à direita) mantendo o centro no mobile. Preservar o clima "quiet luxury": muito respiro, sem overlay pesado.
3. Stat cards: trocar "Starting from 3,000€" por algo de valor não-monetário acima da dobra (ex.: "Based in — Algarve", "Weddings — 2 to 100+ guests", "Approach — Boutique & personal"). O preço continua visível em Services e no FAQ. **Marcar como decisão a validar com a cliente** em `PENDENCIAS-CLIENTE.md`.
4. Manter os dois CTAs (Request a Proposal / View Services).
**Aceite:** H1 contém keyword de posicionamento; hero tem imagem real; preço não aparece acima da dobra (pendente aprovação da cliente).

### P2.2 Contraste e legibilidade (WCAG AA)
**Problema:** `--azul-claro` (#A7B7D1) usado como cor de texto de eyebrows/labels sobre `--marfim` (#FAF7F0) tem contraste ≈ 2,2:1 — mínimo AA é 4,5:1. Rótulos de `text-[10px]` com `tracking-[0.3em]` são ilegíveis em mobile.
**Arquivos:** `src/index.css`, `src/components/SectionHeading.tsx`, `src/pages/Home.tsx`, `src/components/SiteFooter.tsx` e demais usos.
**Ações:**
1. Criar token novo para texto secundário sobre fundos claros com contraste ≥ 4,5:1 dentro da paleta azul (ex.: derivar de `--azul-real` #1E3A8A com opacidade controlada, ou um azul-acinzentado ~#5A6B8C — validar contraste). `--azul-claro` continua permitido para **bordas/divisores** e para texto sobre o fundo `--azul-safira` (onde o contraste é adequado).
2. Elevar micro-rótulos de `text-[10px]` para no mínimo `text-[11px]` mobile / `text-xs` desktop, mantendo o tracking como assinatura visual.
3. Verificar todos os textos com `opacity-65/70/75` sobre marfim: garantir que o resultado final ≥ 4,5:1 (corpo `#0D1E4F` com opacity ≥ 0.75 passa; abaixo disso, ajustar).
**Aceite:** auditoria de contraste (manual ou via `axe`) sem falhas AA nos textos.

### P2.3 Unificação do sistema de cores
**Problema:** três vocabulários convivem: tokens novos (`--azul-safira`…), aliases legados (`--my-dark-brown`…, usados em About/Services/Contact/Experience/Journal) e hex hardcoded (`#DCC7A1` em Home, Footer, Accordion). Manutenção fica frágil.
**Arquivos:** todos em `src/pages/` e `src/components/`, `src/index.css`.
**Ações:** migrar todos os usos para as classes Tailwind já mapeadas (`text-azul-safira`, `bg-marfim`, `ring-dourado/60` etc.), eliminar hex literais em className/SVG props (nos SVGs decorativos, usar `currentColor` ou classe), e por fim remover os aliases `--my-*` de `src/index.css` quando não houver mais referências.
**Aceite:** `grep -rn "my-warm-white\|my-ivory\|my-sand\|my-taupe\|my-dark-brown\|my-black\|#DCC7A1" src/` retorna vazio; visual inalterado (comparar screenshots antes/depois).

### P2.4 Mobile: menu e toques
**Arquivos:** `src/components/SiteHeader.tsx`.
**Ações:**
1. Menu mobile: travar o scroll do body enquanto aberto (`overflow-hidden` no `<html>`), fechar com tecla `Esc`, e fechar ao clicar fora. `aria-label` do botão deve alternar ("Open menu"/"Close menu") e incluir `aria-expanded`.
2. Garantir alvos de toque ≥ 44×44px nos links do menu mobile e do footer.
3. Testar o H1 do hero em viewport 360px — com `tracking-[0.28em]` verificar quebra de linha; se necessário reduzir tracking no mobile (`tracking-[0.18em] md:tracking-[0.28em]`).
**Aceite:** menu acessível por teclado; sem scroll de fundo com menu aberto; sem overflow horizontal em 360px em nenhuma página.

### P2.5 Tipografia e performance de fontes
**Problema:** três famílias no Google Fonts (Cinzel, Playfair Display com 4 variantes, Montserrat com 5 pesos); Playfair é apenas fallback nunca renderizado.
**Arquivos:** `index.html`, `src/index.css`, `tailwind.config.js`.
**Ações:** remover Playfair Display do request; reduzir Montserrat para os pesos realmente usados (auditar: provavelmente 400/500/600); manter `display=swap`. Opcional recomendado: self-host via `@fontsource` para eliminar a dependência do Google Fonts (melhor LCP e privacidade/GDPR — relevante para público europeu).
**Aceite:** request de fontes reduzido; sem mudança visual perceptível.

### P2.6 Componente Button — correção de fallback
**Problema:** `src/components/Button.tsx` renderiza `<a href="#">` quando não recebe `to` nem `href` — âncora inválida e sem suporte a `onClick`/`type=submit`.
**Ações:** adicionar variante `<button type="button|submit">` quando não houver destino; aceitar `onClick`, `disabled`, `aria-*`. Atualizar `Button.test.tsx` cobrindo os três modos (Link, anchor, button).
**Aceite:** `npm run test` verde; nenhum `href="#"` renderizado.

---

## P3 — Conteúdo, conversão e polimento

### P3.1 Depoimentos e prova social
**Problema:** os dois depoimentos em `content.ts` ("Ana and Ricardo", "Sofia and Miguel") aparentam ser fictícios. Publicar depoimento inventado é risco reputacional/legal.
**Ações:** mover para `PENDENCIAS-CLIENTE.md` a solicitação de depoimentos reais autorizados. Enquanto isso, ocultar a seção Testimonials da Home atrás de flag simples (`const SHOW_TESTIMONIALS = false` em `content.ts`) para o site poder ir ao ar sem ela.
**Aceite:** flag implementada; seção some quando `false` sem quebrar layout.

### P3.2 CTA de WhatsApp
**Justificativa:** casais internacionais planejando destination wedding usam WhatsApp como canal primário; o guia da marca posiciona atendimento pessoal.
**Arquivos:** `src/config/site.ts`, `src/components/SiteFooter.tsx`, `src/pages/Contact.tsx`.
**Ações:** adicionar `whatsappUrl` ao config (placeholder + TODO); link discreto no footer e botão secundário na página Contact ("Prefer WhatsApp?"). Sem botão flutuante — destoa da estética.
**Aceite:** links presentes e configuráveis num único lugar.

### P3.3 Journal
**Problema:** 2 posts com 3 frases cada — fino demais para gerar SEO orgânico, mas a estrutura é boa.
**Ações:** expandir cada post para 500–800 palavras seguindo o tom do `guide.md` (calmo, editorial, sem hype), com subtítulos (`h2`) — exigirá evoluir `JournalPost.content` de `string[]` para blocos `{ type: 'p' | 'h2', text }`. Adicionar data legível ("June 2026" em vez de "2026-06-01") e tag `<time dateTime>`. Manter os dois posts (os temas são exatamente as buscas certas: custo e venues).
**Aceite:** posts renderizam com subtítulos; datas formatadas; tipos TS atualizados sem `any`.

### P3.4 Página de privacidade e rodapé legal
**Problema:** o formulário coleta dados pessoais de público europeu (GDPR) sem política de privacidade.
**Ações:** criar rota `/privacy` com texto padrão de política de privacidade (marcar para revisão jurídica em `PENDENCIAS-CLIENTE.md`); linkar no footer; adicionar micro-texto de consentimento abaixo do submit do formulário.
**Aceite:** rota funcional, linkada, incluída no sitemap e prerender.

### P3.5 Qualidade de código e DX
**Ações:**
1. Code-splitting por rota com `React.lazy` + `Suspense` no `App.tsx` (fallback mínimo, sem spinner chamativo).
2. Adicionar `ErrorBoundary` simples envolvendo o `Outlet`.
3. `ScrollToTop`: respeitar `prefers-reduced-motion` (já usa `scrollTo(0,0)` instantâneo — ok; mas `scroll-behavior: smooth` global no CSS deve ser envolvido em `@media (prefers-reduced-motion: no-preference)`).
4. Adicionar skip link ("Skip to content") no `SiteLayout`.
5. Ampliar testes: render smoke test por página + teste do Accordion (abre/fecha, aria).
**Aceite:** `npm run check && npm run lint && npm run test && npm run build` verdes; bundle inicial menor que os atuais 370 KB.

---

## Ordem de execução sugerida (fases de commit)

| Fase | Tarefas | Validação |
|------|---------|-----------|
| 1 | P0.1, P0.3, P0.4 | build + inspeção visual local |
| 2 | P0.2 | teste de envio real do formulário |
| 3 | P1.1 → P1.4 | HTML prerenderizado + validators |
| 4 | P2.1 → P2.6 | screenshots 360px / 768px / 1440px + axe |
| 5 | P3.1 → P3.5 | suíte completa + Lighthouse (metas: Perf ≥ 90, SEO ≥ 95, A11y ≥ 95) |

## Regras para o agente

1. Um commit por tarefa, mensagem no formato `feat(scope): descrição` / `fix(scope): …`.
2. Nunca inventar dados da cliente (Instagram, e-mail, depoimentos, fotos com pessoas identificáveis): usar placeholder + `TODO:` + registrar em `PENDENCIAS-CLIENTE.md`.
3. Preservar a estética existente — mudanças visuais só as especificadas aqui.
4. Todo texto novo em inglês, no tom do `guide.md` (calmo, editorial, sem superlativos).
5. Antes de finalizar, rodar Lighthouse (mobile) e anexar o resumo dos scores no PR/relatório final.
