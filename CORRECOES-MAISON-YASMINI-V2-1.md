# CORREÇÕES MAISON YASMINI — V2.1

> **Guia de execução para Claude Code.** Correções pós-auditoria do commit `feat(v2)` + dois pedidos novos: hero editorial full-bleed e splash screen com o monograma. Executar na ordem. Ao final de cada tarefa: `npm run check && npm run lint && npm run test` verdes. No fim de tudo: `npm run build:prerender` (requer Chromium do puppeteer).

---

## T1 — Dimensões honestas: `content.ts` deve consumir `dimensions.json` (CRÍTICO)

**Problema:** `scripts/process-images.mjs` gera `public/images/dimensions.json` com as medidas reais, mas `content.ts` usa valores fixos errados em ~10 assets. Exemplos confirmados na auditoria:

- `portfolio-ceremony-01`: declarado 1600×1067 (paisagem), real **800×1200 (retrato)**
- `venue-estates-01`: declarado 1600×900, real **700×750** (quase quadrado)
- `styling-hero`, `venue-villas-01`, `venue-restaurants-01`, `contact-sunset`, `algarve`, `detail`, `portfolio-details-01`, `portfolio-algarve-01`: todos com ratio divergente

**Correção:**
1. Mover `dimensions.json` de `public/images/` para `src/data/image-dimensions.json` (não precisa ser servido publicamente) e fazer o script gravá-lo lá.
2. Em `content.ts`, importar o JSON (`import dims from './image-dimensions.json'`) e refatorar `build()` para:

```ts
const build = (name: string): ImageAsset => {
  const { width, height } = dims[name]
  const has1600 = width >= 1600
  return {
    src: `/images/${name}-1600.webp`,
    srcSet: has1600
      ? `/images/${name}-800.webp 800w, /images/${name}-1600.webp 1600w`
      : `/images/${name}-800.webp 800w, /images/${name}-1600.webp ${width}w`,
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 1200px',
    width,
    height,
  }
}
```

3. Remover os argumentos width/height de TODAS as chamadas `build('nome', w, h)` → `build('nome')`.
4. `tsconfig`: garantir `resolveJsonModule: true`.
5. **srcSet honesto:** como no snippet acima, quando a fonte real for menor que 1600px, o descritor `1600w` deve ser substituído pela largura real (o ficheiro `-1600.webp` existe mas contém a imagem no tamanho original, pois o script usa `withoutEnlargement`).

**Aceitação:** script Python/Node de verificação comparando `width/height` de cada asset em `content.ts` com o ficheiro real via sharp — zero divergências de ratio.

---

## T2 — Restaurar o slot do retrato (Our Story)

**Problema:** `portrait-1600.webp` foi sobrescrito por uma foto paisagem 1600×1067 de casamento. O retrato profissional da Yasmini **não existe ainda** (confirmado em `PENDENCIAS-CLIENTE.md`). A página `/about` declara 1200×1600 e vai renderizar a foto deitada espremida.

**Correção:**
1. Remover o mapeamento do slot `portrait` do `process-images.mjs` (adicionar comentário: `// portrait: aguarda retrato profissional da Yasmini — TODO(client)`).
2. Substituir `public/images/portrait-800/1600.webp` por uma foto **vertical** adequada da pasta `Images-reference/` (preferir `Cerimónias e Momentos` — algo discreto/editorial que funcione como imagem institucional temporária) OU restaurar o placeholder still-life anterior do histórico git (`git show 610201e:public/images/portrait-1600.webp > ...`).
3. Manter o `TODO(client)` no `About.tsx` e a linha em `PENDENCIAS-CLIENTE.md`.
4. Após T1, as dimensões vêm do JSON automaticamente — apenas regenerar.

---

## T3 — Expandir o Portfolio para 20–30 imagens

**Problema:** só 5 imagens (1 por categoria). A recomendação da consultora é uma galeria premium de 20 a 30 imagens. A pasta `Images-reference/` tem 34 fotos.

**Correção:**
1. No `process-images.mjs`, mapear TODAS as fotos de cada pasta para o portfólio (não só a primeira): `portfolio-hero-01..07`, `portfolio-ceremony-01..08`, `portfolio-reception-01..08`, `portfolio-details-01..04`, `portfolio-algarve-01..07` (ajustar aos nomes/quantidades reais listados com `ls`).
2. Rodar o script e popular `portfolioImages` em `content.ts` com as ~24 melhores (excluir duplicadas dos slots de hero/venues se ficarem repetitivas), seguindo os critérios visuais da secção 7.1 do guia V2: cores claras, luz natural, enquadramento editorial, sem multidões.
3. **Alt text descritivo e único por imagem** (nunca genérico), em inglês.
4. `category` de cada imagem = Ceremony / Reception / Details / Destination (mapeado da pasta de origem). Se a página Portfolio ainda não tiver filtro por categoria, adicionar filtro simples por chips (All + 4 categorias), estilo editorial discreto.
5. Grid: masonry 2 col mobile / 3 col desktop, respeitando as proporções reais (verticais e quadradas convivem — motivo extra para T1).
6. Lazy loading (`loading="lazy"`) em todas exceto as 3 primeiras.

---

## T4 — Hero editorial full-bleed (referência ChatGPT / Vogue Weddings)

**Problema:** o hero atual é split 50/50 (texto à esquerda, foto em card à direita). A direção aprovada é editorial de luxo: **imagem dominante de casal ao pôr do sol com vista para o mar**, texto sobreposto.

**Correção em `Home.tsx`:**
1. **Seleção da foto:** listar as fotos da pasta `Images-reference/Hero Banner*/` com dimensões reais (sharp) e escolher a de MAIOR resolução que retrate casal ao pôr do sol com mar. Atualizar o mapeamento do slot `hero` no script e regenerar. ⚠️ Se nenhuma fonte tiver ≥1400px de largura, implementar mesmo assim mas registar em `PENDENCIAS-CLIENTE.md`: "Hero full-bleed precisa de export em alta resolução (≥1920px) — atual: {W}×{H}".
2. **Layout novo:**
   - `<section>` full-bleed: `relative min-h-[85svh] md:min-h-[92svh]`, imagem com `absolute inset-0 h-full w-full object-cover` (`loading="eager"`, `fetchPriority="high"`).
   - Overlay para legibilidade: gradiente `from-[rgba(15,26,54,0.55)] via-[rgba(15,26,54,0.25)] to-[rgba(15,26,54,0.45)]` (azul-noite, não preto puro — manter a paleta).
   - Conteúdo centrado vertical/horizontalmente: monograma MY (versão clara/dourada), eyebrow `MAISON YASMINI · WEDDING PLANNER`, H1 `Destination Weddings & Event Planning in the Algarve` em marfim, filete dourado, tagline itálica, e os dois CTAs (Begin Your Wedding Journey primário; Explore Our Venues em variante ghost/outline clara — criar variante do `Button` se necessário).
   - Indicador de scroll discreto (chevron ou linha vertical dourada animada) no fundo.
3. **Contraste/A11y:** texto marfim sobre o overlay deve passar WCAG AA (ajustar opacidade do gradiente se preciso). Testar em mobile 360px: H1 não pode quebrar feio; reduzir tracking no mobile se necessário.
4. **CLS:** com T1 aplicado, `width/height` reais na imagem; o `min-h` da secção evita shift.
5. Atualizar o teste da Home em `pages.test.tsx` se ele assertar estrutura do hero antigo.

---

## T5 — Splash screen de carregamento com o monograma

**Objetivo:** animação de loading com a logo da cliente visível instantaneamente no primeiro carregamento, antes do bundle React.

**Implementação (sem dependências novas):**
1. **`index.html`:** adicionar, logo após `<body>`, um `<div id="splash">` com:
   - o SVG inline do monograma MY (copiar o do `SiteFooter`/`Home` — círculos duplos + "MY" em Cinzel; usar `fill`/`stroke` dourado `#DCC7A1` sobre fundo marfim `#FAF7F0`);
   - a wordmark `MAISON YASMINI` em tracking largo por baixo (opcional, texto pequeno).
2. **CSS inline no `<head>`** (crítico, não pode depender do bundle):
   - `#splash { position: fixed; inset: 0; z-index: 9999; display: grid; place-items: center; background: #FAF7F0; transition: opacity .45s ease; }`
   - Animação sutil e elegante: monograma com `opacity 0→1` + `scale(.94)→1` em ~700ms, e os círculos do SVG com `stroke-dasharray`/`stroke-dashoffset` desenhando-se (efeito "traçado a caneta", muito alinhado com marca de luxo). Nada de spinners.
   - `@media (prefers-reduced-motion: reduce) { animações desativadas, apenas fade rápido }`.
   - `#splash.done { opacity: 0; pointer-events: none; }`
3. **Remoção no `main.tsx`:** após o `createRoot(...).render(...)`, em `requestAnimationFrame` duplo (garante primeiro paint do app):
   ```ts
   const splash = document.getElementById('splash')
   if (splash) {
     const MIN_VISIBLE = 600 // ms — evita flash em conexões rápidas
     const elapsed = performance.now()
     window.setTimeout(() => {
       splash.classList.add('done')
       window.setTimeout(() => splash.remove(), 500)
     }, Math.max(0, MIN_VISIBLE - elapsed))
   }
   ```
4. **Prerender/SEO:** o overlay é um `div` fixo por cima do HTML prerenderizado — o conteúdo continua no DOM para crawlers. Verificar que `scripts/prerender.mjs` NÃO captura o splash em estado visível de forma permanente: se o snapshot incluir o `#splash`, tudo bem (o JS remove no cliente), mas garantir que o CSS do splash está inline no head para não haver flash sem estilo.
5. **Só no primeiro load:** navegações SPA não re-executam o `index.html`, então o splash aparece apenas no carregamento inicial (comportamento desejado, nada a fazer).
6. **Lighthouse:** rodar após implementar; o splash não deve degradar LCP significativamente (o LCP passa a ser o próprio splash ou o hero — aceitável; se o score cair muito, reduzir `MIN_VISIBLE` para 300ms).

---

## T6 — QA final

- [ ] Script de verificação de dimensões: zero ratio mismatches
- [ ] `/about` com imagem vertical correta e TODO(client) mantido
- [ ] Portfolio com 20–30 imagens, filtro por categoria, alts únicos, lazy loading
- [ ] Hero full-bleed: contraste AA, sem CLS, mobile 360px ok; pendência de resolução registada se aplicável
- [ ] Splash: aparece no primeiro load, some com fade após o mount, respeita reduced-motion, não aparece em navegação SPA
- [ ] `npm run check && npm run lint && npm run test` verdes; `npm run build:prerender` executado com sucesso
- [ ] Teste manual: mobile 360px, tablet 768px, desktop 1280px+ nas páginas Home, Portfolio e Our Story
- [ ] Commit por tarefa (T1..T5) com mensagens descritivas

---

*Baseado na auditoria de 14/07/2026 do commit `3330f98` e nas referências: estrutura visual da conversa ChatGPT "Fotos para site de casamento" (hero = casal ao pôr do sol com vista para o mar, estética editorial Vogue Weddings) e guia ATUALIZACAO-MAISON-YASMINI-V2.md.*
