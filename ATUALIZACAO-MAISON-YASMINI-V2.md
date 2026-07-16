# ATUALIZAÇÃO MAISON YASMINI — V2 (Novas referências da cliente)

> **Guia de execução para Claude Code.** Repositório: `github.com/Guiandrade10/maison-yasmin-site` (Vite + React 18 + TypeScript + Tailwind 3 + react-router-dom 7, SPA com prerender via `scripts/prerender.mjs`).
>
> Este documento consolida três referências enviadas pela cliente:
> 1. **Documento Word "CRIACAO DO SITE"** — copy completo e definitivo (versão inglesa) para todas as páginas.
> 2. **Conversa ChatGPT "Fotos para site de casamento"** — fotos e diretrizes visuais, já exportadas para a pasta `images-reference/` na raiz do repo (5 subpastas, 34 fotos) + texto da consultora integrado na secção 7.
> 3. **Site de referência estrutural:** `algarveweddingsatelier.com/venues` — modelo para a nova secção Venues (hub com categorias → páginas de categoria com galeria).

---

## 0. REGRAS GLOBAIS (aplicar em TODAS as fases)

1. **Idioma do site: inglês** (a cliente marcou "SITE INGLES" no documento). Todo o copy novo abaixo já está na versão inglesa final aprovada por ela. Não traduzir de volta para português.
2. **Sem em dashes (—)** no copy renderizado. Substituir por ponto final, vírgula ou reescrita. (Padrão já usado nos projetos anteriores do Guilherme.)
3. **Não inventar conteúdo.** Onde faltar asset ou informação, usar `TODO(client)` no código e registar em `PENDENCIAS-CLIENTE.md`.
4. **Preservar o design system existente** (paleta azul-safira + dourado/champanhe, Cinzel/Playfair, componentes `Container`, `SectionHeading`, `Button`, monograma MY). A atualização é de conteúdo e arquitetura de informação, não redesign.
5. **Manter qualidade técnica atual:** `npm run check`, `npm run lint`, `npm run test` e `npm run build:prerender` devem passar no fim de cada fase.
6. **Copy é sagrado:** os textos nas secções de conteúdo abaixo vêm do documento da cliente e devem ser usados verbatim (apenas correções de pontuação/em dash permitidas). Não parafrasear.
7. **Numeração de convidados: máximo 75 guests.** Este número aparece várias vezes no copy e é o novo posicionamento oficial da marca. Eliminar qualquer menção a "100 guests" ou faixas acima de 75.

---

## 1. DECISÕES OBRIGATÓRIAS ANTES DE EXECUTAR (Guilherme + cliente)

⚠️ O conteúdo novo **contradiz** partes do site atual. Resolver antes da Fase 2:

### D1 — Pacotes com preço vs. novo posicionamento
- **Site atual:** 3 pacotes (Small 2–20 / Medium 21–60 / Large 61–100) com preços "From 3,000€ / 5,500€ / 8,500€" em `src/data/content.ts` (`weddingPackages`), página `/services` e FAQ.
- **Novo copy:** casamentos intimistas **até 75 convidados**, filosofia "Quality over quantity", sem qualquer menção a pacotes ou preços.
- **Recomendação:** remover os pacotes com preço da página Services (o novo copy substitui-os por 3 verticais de serviço). Se a cliente quiser manter preços, mover para o FAQ apenas ("Planning fees start at 3,000€") e nunca acima da dobra.
- **Ação default se não houver resposta:** remover pacotes e preços do Services; manter uma única linha de preço no FAQ.

### D2 — Journal
- O post "How much does a destination wedding in the Algarve cost?" cita os 3 pacotes, preços e "up to a hundred guests". O menu novo da cliente **não inclui Journal**.
- **Recomendação:** manter o Journal acessível apenas via footer (bom para SEO) e **editar o post de custos** para alinhar com 75 guests e a decisão D1. O post de venues ("Best intimate wedding venues") está alinhado e pode ficar.
- **Ação default:** Journal sai do menu principal, permanece no footer; post de custos editado (instruções na Fase 5).

### D3 — FAQ e Process
- Também não constam no menu novo. **Recomendação:** FAQ vai para o footer; a página Process (`/process`) tem conteúdo bom e pode ser mantida no footer ou fundida na página Services. **Ação default:** ambas permanecem como páginas, linkadas só no footer.

### D4 — Testemunhos ("Kind Words")
- O menu novo tem "Kind Words", mas `SHOW_TESTIMONIALS = false` porque os 2 depoimentos são fictícios. **Não publicar depoimentos fictícios.**
- **Ação default:** criar a rota/página `/kind-words` já com layout pronto, mas com um estado vazio elegante ("Kind words from our couples are on their way.") + CTA, controlado pela mesma flag. Registar em PENDENCIAS-CLIENTE.md que faltam ≥2 depoimentos reais autorizados.

### D5 — Portfolio
- As fotos vêm da conversa ChatGPT da cliente (inacessível via link). **Ação default:** criar a página `/portfolio` com grid preparado, consumindo um array `portfolioImages` em `content.ts`, populado inicialmente com os placeholders existentes + `TODO(client)`. Trocar quando a cliente enviar os ficheiros.

---

## 2. NOVA ARQUITETURA DE INFORMAÇÃO

### 2.1 Menu principal (header) — ordem exata da cliente

```
Home | Services | Venues | Portfolio | Kind Words | Our Story | Get in Touch
```

Mapeamento de rotas:

| Label | Rota | Estado |
| --- | --- | --- |
| Home | `/` | existente (atualizar conteúdo) |
| Services | `/services` | existente (reescrever por completo) |
| Venues | `/venues` | **nova** (hub) |
| — Luxury Resorts & Boutique Hotels | `/venues/luxury-resorts` | **nova** |
| — Private Villas | `/venues/private-villas` | **nova** |
| — Exclusive Restaurants | `/venues/exclusive-restaurants` | **nova** |
| — Country Estates & Vineyards | `/venues/country-estates` | **nova** |
| Portfolio | `/portfolio` | **nova** |
| Kind Words | `/kind-words` | **nova** (renomeia conceito de testimonials) |
| Our Story | `/about` (label muda para "Our Story") | existente (reescrever) |
| Get in Touch | `/contact` (label muda) | existente |
| Why Maison Yasmini | `/why-maison-yasmini` | **nova** (não vai ao menu; linkada da Home e footer) |

Notas de UX do documento da cliente (verbatim da consultora):
- "Kind Words" é mais calorosa e elegante do que "Testimonials"; "Our Story" cria maior proximidade emocional do que "About Us".
- CTA principal do site: **"Begin Your Wedding Journey"** (substituir CTAs genéricos "Contact us"). Alternativa aprovada para botões secundários: "Let's Create Something Beautiful".

### 2.2 Footer

Manter estrutura atual (monograma, pilares, contactos) e adicionar coluna de links secundários: Process, FAQ, Journal, Privacy, Why Maison Yasmini. Atualizar labels About→Our Story e Contact→Get in Touch.

### 2.3 Ficheiros a criar/alterar

```
src/App.tsx                       → novas rotas (lazy) + redirects
src/components/SiteHeader.tsx     → novo menu
src/components/SiteFooter.tsx     → novos links
src/data/content.ts               → novos tipos e arrays (services, venues, portfolio)
src/pages/Services.tsx            → reescrita total
src/pages/Venues.tsx              → nova (hub)
src/pages/VenueCategory.tsx       → nova (template por slug, 1 componente para as 4 categorias)
src/pages/Portfolio.tsx           → nova
src/pages/KindWords.tsx           → nova
src/pages/WhyMaisonYasmini.tsx    → nova
src/pages/About.tsx               → reescrita de copy (Our Story)
src/pages/Home.tsx                → hero + secções novas
public/sitemap.xml                → novas rotas
scripts/prerender.mjs             → adicionar novas rotas à lista de prerender
src/pages/pages.test.tsx          → cobrir novas páginas (render + heading)
```

---

## 3. FASE 1 — ESTRUTURA, ROTAS E NAVEGAÇÃO

1. Criar as páginas novas listadas em 2.3 como shells (heading + parágrafo placeholder) e registar rotas em `App.tsx` com `lazy()`. A rota de categoria usa parâmetro: `/venues/:slug` renderizando `VenueCategory.tsx`, com validação do slug contra os 4 válidos (slug inválido → `NotFound`).
2. Atualizar `SiteHeader.tsx` com o menu da secção 2.1. Em mobile, Venues pode listar as 4 categorias como subitens no painel.
3. Atualizar `SiteFooter.tsx` (secção 2.2).
4. Atualizar `useSeo` de cada página nova com title/description (valores na Fase 6).
5. Atualizar `sitemap.xml` e a lista de rotas do `scripts/prerender.mjs`.
6. `npm run check && npm run test` verdes antes de avançar.

---

## 4. FASE 2 — MODELO DE DADOS (`src/data/content.ts`)

Adicionar (sem apagar os tipos existentes que continuam em uso):

```ts
export type ServiceVertical = {
  slug: 'wedding-planning' | 'private-events' | 'design-styling'
  title: string
  subtitle: string
  intro: string[]        // parágrafos
  listTitle: string
  items: string[]        // bullets de serviços
  closing: string[]      // parágrafos finais
  signature: string      // linha assinatura "Maison Yasmini — ..."
  image: ImageAsset      // TODO(client) até chegarem as fotos
}

export type VenueCategory = {
  slug: 'luxury-resorts' | 'private-villas' | 'exclusive-restaurants' | 'country-estates'
  title: string
  tagline: string        // ex.: "Where Luxury Meets the Ocean"
  cardBlurb: string      // 1 frase para o card do hub
  paragraphs: string[]   // copy completo da categoria
  gallery: ImageAsset[]  // TODO(client)
}

export type PortfolioImage = ImageAsset & { alt: string; category?: string }
```

Popular os arrays com o copy da Fase 5. Reutilizar o helper `build()` existente para os assets.

---

## 5. FASE 3 — CONTEÚDO POR PÁGINA (copy final da cliente, usar verbatim)

> Regra: títulos em Title Case como estão; parágrafos completos; onde o copy da cliente usa travessões, substituir por vírgula/ponto.

### 5.1 HOME (`/`)

**Hero:**
- Eyebrow: `MAISON YASMINI`
- H1 (nova tagline): `Destination Weddings & Event Planning in the Algarve`
- Sub: `Luxury intimate destination weddings in Portugal, beautifully curated around your story.`
- CTA primário: `Begin Your Wedding Journey` → `/contact`
- CTA secundário: `Explore Our Venues` → `/venues`

**Secção "Intimate Weddings. Extraordinary Experiences."** (substitui a intro atual):

> At Maison Yasmini, we believe the most unforgettable weddings are not defined by the number of guests, but by the emotions they create and the memories they leave behind.
>
> We specialise in designing and coordinating exclusive intimate weddings and destination weddings in Portugal, thoughtfully created for celebrations of up to **75 guests**. This allows us to provide a highly personalised experience, where every detail receives the care, creativity and attention it deserves.
>
> Luxury, to us, is not about extravagance. It is about exclusivity, authenticity and the freedom to celebrate surrounded only by the people who matter most.

**Secção de serviços (3 cards com imagem, "FOTO COM ABAS QUE ABRE"):** cards de Wedding & Events Planning / Private Events / Styling & Design, cada um com imagem, 1 frase e link para a âncora ou secção correspondente em `/services`. Implementar como cards expansíveis ou cards com hover elegante (desktop) e acordeão (mobile).

**Secção "Explore Our Signature Wedding Venues"** (recomendação estratégica da consultora, aprovada no documento). Título exato: `Explore Our Signature Wedding Venues`. Quatro cards com foto de impacto, blurb e botão **"Discover More"** → página da categoria:

- **Luxury Resorts & Boutique Hotels** — `World-class hospitality with breathtaking coastal views.`
- **Private Villas** — `Exclusive celebrations in complete privacy.`
- **Exclusive Fine Dining Restaurants** — `Exceptional cuisine in unforgettable settings.`
- **Charming Country Estates & Vineyards** — `Authentic Portuguese elegance surrounded by nature.`

**Secção Why Maison Yasmini (teaser):** 3–4 bullets de "Our Promise" (ver 5.7) + link `Discover the Maison Yasmini experience` → `/why-maison-yasmini`.

**CTA final (secção azul-safira existente):** trocar copy do botão para `Begin Your Wedding Journey`.

**Remover da Home:** card de preço "From 3,000€" acima da dobra (decisão D1/P2.1 já pendente).

### 5.2 SERVICES (`/services`) — reescrita total

**Header da página:**
- Eyebrow: `SERVICES`
- H1: `Luxury Intimate Weddings in Portugal`
- Sub (H2 visual): `Intimate Weddings. Extraordinary Experiences.`

**Intro (parágrafos, verbatim):**

> At Maison Yasmini, we believe the most unforgettable weddings are not defined by the number of guests, but by the emotions they create and the memories they leave behind.
>
> We specialise in designing and coordinating exclusive intimate weddings and destination weddings in Portugal, thoughtfully created for celebrations of up to 75 guests. This allows us to provide a highly personalised experience, where every detail receives the care, creativity and attention it deserves.
>
> Luxury, to us, is not about extravagance. It is about exclusivity, authenticity and the freedom to celebrate surrounded only by the people who matter most.
>
> Every wedding begins with your story.
>
> We take the time to understand your personalities, your vision, your lifestyle and everything that makes your relationship unique. From there, we create a celebration that feels effortless, elegant and genuinely yours.
>
> Whether you dream of exchanging vows on dramatic ocean cliffs, celebrating in a private villa, hosting an elegant dinner at a luxury resort or saying "I do" in a charming Portuguese estate, every element is thoughtfully curated to reflect your style and create an unforgettable experience.
>
> Our philosophy is simple: **Quality over quantity.**
>
> We intentionally focus on a limited number of weddings each year, allowing us to dedicate our full attention to every couple and deliver an exceptional level of service from beginning to end.
>
> The result is a celebration where every guest feels welcomed, every detail feels intentional and every moment becomes a lifelong memory.
>
> Because the greatest luxury is celebrating your love in a way that feels deeply personal, beautifully effortless and truly unforgettable.

**Vertical 1 — Wedding Planning & Coordination:**

> From the very first conversation to the final farewell, we manage every stage of your wedding with precision, creativity and genuine care.
>
> Planning a destination wedding involves countless decisions, trusted suppliers, detailed logistics and seamless coordination. Our role is to simplify the entire process, giving you complete peace of mind while transforming your vision into an extraordinary celebration.

Lista `Our Full Wedding Planning Service Includes`:
- Complete wedding planning and project management
- Destination Weddings throughout Portugal
- Venue sourcing and selection
- Budget planning and financial management
- Creative concept development
- Wedding design and styling
- Floral design coordination
- Supplier sourcing and contract negotiation
- Ceremony planning
- Guest logistics and timeline management
- Wedding day coordination
- Unlimited planning support throughout the entire journey

Fecho:

> While you celebrate with your family and friends, we discreetly coordinate every detail behind the scenes, ensuring everything unfolds flawlessly.
>
> Our commitment is simple: to allow you to be fully present on one of the most meaningful days of your life, knowing that every detail has been planned with care, elegance and professionalism.
>
> Because your only responsibility should be creating unforgettable memories.

Assinatura: `Maison Yasmini. Luxury Destination Weddings Crafted with Elegance, Precision and Heart.`

**Vertical 2 — Private Events:**

Título: `Private Events` · Sub: `Every Celebration Deserves to Be Extraordinary`

Frase de impacto logo abaixo do título (sugestão de melhoria aprovada no documento):

> From intimate family gatherings to once-in-a-lifetime celebrations, we create beautifully curated experiences designed to be remembered forever.

Parágrafos:

> Life is filled with moments worth celebrating.
>
> Whether intimate or grand, every milestone deserves to be experienced with elegance, authenticity and impeccable attention to detail.
>
> At Maison Yasmini, we create bespoke private events that reflect your personality, your vision and the emotions you wish to share with those closest to you. Our goal is not simply to organise an event, but to design meaningful experiences that leave lasting memories long after the celebration has ended.
>
> From the initial concept to the final farewell, every element is thoughtfully planned, allowing you to relax, enjoy the occasion and be fully present with your guests.
>
> Whether you are celebrating a birthday, engagement, wedding anniversary, proposal, vow renewal, baby shower, bridal shower, private brunch, luxury dinner, housewarming, family gathering or any other special occasion, we transform your ideas into beautifully curated celebrations with elegance and sophistication.

Sub-secção `Tailored Planning, Thoughtfully Delivered`:

> Every event is unique.
>
> That is why we begin by understanding your vision, your style and the atmosphere you wish to create. From there, we design a bespoke experience where every detail works together seamlessly, ensuring a celebration that feels effortless, refined and truly personal.

Lista `Our Private Event Planning Services Include`:
- Complete event planning and project management
- Venue sourcing or planning at your private residence or estate
- Creative concept development
- Event styling and bespoke decoration
- Floral design coordination
- Luxury table styling and tablescapes
- Catering selection and fine dining experiences
- Entertainment and live performances
- Photography and cinematography
- Guest experience planning
- Budget management
- Supplier sourcing and coordination
- Full event coordination on the day

Fecho (`Your Only Responsibility Is to Enjoy the Moment`):

> While you celebrate with your family and friends, we work discreetly behind the scenes, ensuring every detail unfolds flawlessly.
>
> From welcoming your guests to coordinating suppliers, managing timelines and overseeing every element of the event, we anticipate every detail before it happens, allowing you to experience each moment with complete confidence and peace of mind.
>
> Because true luxury is not simply about creating beautiful events. It is about creating moments where every guest feels genuinely welcomed, every detail has purpose and every memory becomes part of your family's story.
>
> At Maison Yasmini, we believe the most unforgettable celebrations are those that feel effortless, meaningful and deeply personal.

Assinatura: `Maison Yasmini. Elegant Private Celebrations Designed Around You.`

**Vertical 3 — Wedding Design & Styling:**

Título: `Wedding Design & Styling` · Sub: `Every Detail Tells Your Story`

Sugestão de melhoria aprovada: antes do texto, imagem em grande formato (casamento elegante no Algarve) com frase sobreposta:

> "Your story deserves more than a beautiful wedding. It deserves an unforgettable experience."

Parágrafos:

> A truly unforgettable wedding begins long before the wedding day. It begins with a vision, an emotion and a story waiting to be beautifully told.
>
> At Maison Yasmini, we believe that exceptional wedding design goes far beyond decoration. It is about creating an atmosphere that captures emotions, reflects your personalities and leaves every guest inspired from the moment they arrive.
>
> Every celebration we design is unique. From the colour palette to the floral arrangements, from the lighting to the textures, from bespoke stationery to the perfectly styled table settings, every detail is thoughtfully curated to create an elegant, harmonious and timeless experience.
>
> Nothing is chosen by chance. Every element has a purpose. Every detail contributes to telling your story.

Sub-secção `A Wedding Designed Exclusively for You`:

> No two love stories are alike. Your wedding should never look like anyone else's.
>
> We take the time to understand your personalities, your lifestyle, your inspirations and the atmosphere you wish to create. This allows us to develop a bespoke design concept that is entirely personal and unmistakably yours.
>
> Whether your style is timeless and elegant, modern and minimalist, romantic and refined or effortlessly luxurious, we transform your vision into a cohesive celebration where every element feels naturally connected.
>
> The result is a wedding that is not only beautiful, but deeply meaningful. One that feels authentic to who you are.

Lista `Our Wedding Design Services Include`:
- Creative concept development
- Bespoke wedding styling
- Mood board creation
- Colour palette development
- Floral design concept
- Ceremony styling
- Reception styling
- Luxury tablescape design
- Lighting design and ambience
- Furniture and décor selection
- Decorative accessories and finishing touches
- Coordination of all styling suppliers
- Complete aesthetic direction for the entire celebration

Fecho (`Luxury Lives in the Details`):

> The smallest details often create the most lasting memories. The gentle glow of candlelight. The fragrance of fresh flowers. The elegance of beautifully dressed tables. The music that welcomes your guests. The soft textures, carefully selected colours and perfectly balanced atmosphere.
>
> Together, these details create far more than a beautiful wedding. They create an experience. An experience that your guests will remember long after the last dance.
>
> At Maison Yasmini, we design celebrations that are sophisticated without feeling excessive, luxurious without losing authenticity and timeless without ever following trends.
>
> Our philosophy is simple. Beauty should never compete for attention. It should feel effortless.
>
> Because when thoughtful design meets genuine emotion, something extraordinary happens. Your wedding becomes more than a celebration. It becomes a memory that will stay with you for a lifetime.

Assinatura: `Maison Yasmini. Timeless Design. Meaningful Details. Unforgettable Celebrations.`

**Layout sugerido:** navegação por tabs/âncoras no topo da página (Wedding Planning | Private Events | Design & Styling) + as 3 verticais em sequência. Os pacotes `weddingPackages` e a grelha de preços atual são REMOVIDOS desta página (decisão D1).

### 5.3 VENUES — hub (`/venues`)

Estrutura inspirada em `algarveweddingsatelier.com/venues`: intro editorial + grelha de 4 categorias com foto, título, tagline curta e link. Cada card leva à página da categoria.

**Header:**
- Eyebrow: `VENUES`
- H1: `Discover the Perfect Setting for Your Love Story`

**Intro (verbatim):**

> Every unforgettable wedding begins with the perfect setting.
>
> The venue is far more than a beautiful location. It is the place where your memories will be created, your story will unfold and one of the most meaningful days of your life will come to life.
>
> At Maison Yasmini, we believe that choosing the right venue is one of the most important decisions in the entire planning journey. It sets the atmosphere, defines the experience and becomes the backdrop to every emotion, every photograph and every unforgettable moment.
>
> As specialists in luxury intimate weddings and destination weddings in Portugal, we help couples discover exceptional venues that perfectly reflect their style, personality and vision.

**Secção `The Algarve. Europe's Hidden Gem for Luxury Weddings`:**

> With its dramatic cliffs, golden beaches, crystal-clear waters, world-class hospitality and over 300 days of sunshine each year, the Algarve has become one of Europe's most sought-after wedding destinations.
>
> From breathtaking coastal settings to elegant country estates, exclusive private villas and award-winning luxury resorts, the region offers an extraordinary variety of venues for couples seeking an unforgettable celebration.
>
> Whether you are travelling from the United Kingdom, Ireland, the United States, Canada, Australia or anywhere else in the world, the Algarve offers the perfect balance of natural beauty, accessibility and refined luxury.
>
> It is where unforgettable weddings begin.

**Secção `Carefully Curated Venues`:**

> Every couple is unique. Your wedding venue should be too.
>
> Rather than overwhelming you with endless options, we carefully select venues that genuinely match your vision, guest numbers, budget and wedding style.

Lista "Whether you imagine:" (bullets):
- exchanging vows on dramatic cliffs overlooking the Atlantic Ocean;
- celebrating in an elegant five-star resort;
- hosting an intimate dinner in a private luxury villa;
- embracing the charm of a boutique hotel;
- dining beneath the stars at an exclusive restaurant;
- or saying "I do" in a romantic Portuguese country estate surrounded by vineyards,

> we will help you find the setting that feels as though it was made especially for your story.

**Grelha `Wedding Venues in Portugal`** (4 cards, foto + título + tagline + botão "Discover More"):

| Card | Rota | Tagline |
| --- | --- | --- |
| Luxury Resorts & Boutique Hotels | `/venues/luxury-resorts` | Where Luxury Meets the Ocean |
| Private Villas | `/venues/private-villas` | Exclusive Privacy. Timeless Elegance. |
| Exclusive Restaurants | `/venues/exclusive-restaurants` | Fine Dining. Exceptional Celebrations. |
| Charming Country Estates & Vineyards | `/venues/country-estates` | Authentic Elegance. Timeless Romance. |

**Secções finais do hub** (`More Than Venue Sourcing`, `Trusted Relationships. Exceptional Locations.`, `Creating Experiences, Not Simply Weddings`), verbatim:

> Finding a beautiful venue is only the beginning. Our role extends far beyond presenting beautiful locations.
>
> We personally guide you through the selection process, arranging site visits, coordinating meetings with venue managers, reviewing supplier requirements, assessing logistical details and ensuring that every decision supports your overall vision.
>
> We carefully evaluate accessibility, guest comfort, accommodation, ceremony flow, photography opportunities, entertainment logistics and countless other details that are often overlooked.
>
> Every recommendation is made with one goal in mind: to ensure your wedding feels effortless from beginning to end.

> Over time, we have built valuable relationships with some of Portugal's most exclusive wedding venues and hospitality partners.
>
> This allows us to recommend locations recognised not only for their beauty, but also for their outstanding service, exceptional cuisine and commitment to delivering unforgettable guest experiences.
>
> Each venue we recommend has been selected for its quality, elegance and ability to host extraordinary celebrations.

> The right venue transforms a celebration into an experience. It becomes the place where emotions are shared, families come together, friendships are celebrated and memories are created for generations.
>
> At Maison Yasmini, we don't simply help you choose a venue. We help you discover the place where your love story truly belongs.

Assinatura: `Maison Yasmini. Extraordinary Venues. Timeless Celebrations. Beautiful Memories.`

CTA final: `Begin Your Wedding Journey` → `/contact`.

### 5.4 VENUES — páginas de categoria (`/venues/:slug`)

Template único (`VenueCategory.tsx`), seguindo o modelo do site de referência: link "back to Venues", eyebrow `VENUE`, H1 da categoria, tagline, parágrafos, galeria de fotos (grid com lightbox simples ou apenas grid responsivo), CTA final e cross-links para as outras 3 categorias.

**5.4.1 Luxury Resorts & Boutique Hotels** — tagline `Where Luxury Meets the Ocean`:

> Imagine exchanging your vows overlooking the Atlantic Ocean, celebrating with breathtaking sunset views and ending the evening beneath a sky filled with stars.
>
> The Algarve is home to some of Europe's most prestigious luxury resorts and boutique hotels, where exceptional hospitality, sophisticated architecture and world-class cuisine come together to create unforgettable celebrations.
>
> At Maison Yasmini, we carefully select venues renowned not only for their beauty, but also for their impeccable service, elegant surroundings and outstanding guest experience.
>
> Whether you envision an intimate ceremony by the sea, a stylish cocktail reception overlooking dramatic cliffs or an elegant ballroom celebration, we will help you discover the perfect venue to bring your vision to life.
>
> Every recommendation is tailored to your style, guest experience and wedding aspirations, ensuring a celebration that feels both effortless and extraordinary.
>
> Because extraordinary love deserves an extraordinary setting.

**5.4.2 Private Villas** — tagline `Exclusive Privacy. Timeless Elegance.`:

> For couples seeking complete privacy and a truly bespoke celebration, nothing compares to the charm of a luxury private villa.
>
> Imagine celebrating your wedding surrounded by lush Mediterranean gardens, infinity pools, panoramic ocean views and the people who matter most.
>
> A private villa offers the freedom to create a wedding that is entirely your own, without compromise and without limitations. Every moment unfolds at your own pace, creating an atmosphere that is intimate, relaxed and deeply personal.
>
> At Maison Yasmini, we work with a carefully curated collection of exceptional villas throughout the Algarve, each selected for its elegance, privacy and breathtaking surroundings.
>
> Whether you dream of an alfresco dinner beneath the stars, a sunset ceremony overlooking the sea or an unforgettable weekend shared with family and friends, we design every detail around your story.
>
> Private villas offer something truly rare: the opportunity to transform your wedding into a private destination experience where every guest feels at home while enjoying the finest standards of luxury and hospitality.
>
> Because the greatest luxury is celebrating in a place that feels exclusively yours.

**5.4.3 Exclusive Restaurants** — tagline `Fine Dining. Exceptional Celebrations.`:

> For couples who appreciate outstanding cuisine, elegant surroundings and impeccable service, an exclusive restaurant provides the perfect setting for an intimate and sophisticated wedding celebration.
>
> Imagine welcoming your guests to an exceptional dining experience where every course has been carefully crafted, every table beautifully styled and every detail thoughtfully considered.
>
> Whether overlooking the ocean, nestled within an elegant marina or hidden inside one of the Algarve's most exclusive locations, these venues combine remarkable gastronomy with unforgettable atmospheres.
>
> At Maison Yasmini, we carefully select restaurants that share our passion for excellence, ensuring that every celebration offers not only beautiful surroundings but also an exceptional culinary journey.
>
> From bespoke menus and curated wine pairings to personalised guest experiences, every element is designed to delight the senses and create memories that will last a lifetime.
>
> Because unforgettable weddings are remembered not only for how they looked, but also for how they made people feel.

**5.4.4 Charming Country Estates & Vineyards** — tagline `Authentic Elegance. Timeless Romance.`:

> Some places possess a rare kind of magic. A quiet elegance that cannot be created, only experienced.
>
> Nestled among rolling vineyards, ancient olive groves and beautifully landscaped gardens, Portugal's charming country estates offer an atmosphere where romance, authenticity and refined luxury exist in perfect harmony.
>
> At Maison Yasmini, we carefully curate a collection of exceptional estates that combine breathtaking natural beauty with impeccable hospitality, creating the perfect setting for intimate destination weddings filled with warmth, sophistication and unforgettable moments.
>
> Imagine exchanging your vows surrounded by endless vineyards, enjoying sunset cocktails beneath centuries-old olive trees and dining under a canopy of lights as the evening sky fills with stars.
>
> Every moment feels effortless. Every photograph becomes timeless. Every memory lasts forever.

Sub-secção `A Celebration Inspired by Nature`:

> Country estates offer something few venues can provide: space, tranquillity and an atmosphere that encourages genuine connection.
>
> Far from the distractions of everyday life, your guests can relax, celebrate and fully immerse themselves in the experience, creating unforgettable moments together.
>
> Whether your vision is inspired by timeless European elegance, contemporary luxury or understated romance, these remarkable venues provide the perfect canvas for a celebration that is both sophisticated and deeply personal.
>
> Nature becomes part of the design. The landscape becomes part of your story.

Sub-secção `Carefully Curated for Your Vision`:

> No two estates are alike. Some are historic manor houses rich in Portuguese heritage and architectural charm. Others are contemporary vineyard estates where modern luxury blends seamlessly with breathtaking scenery.
>
> At Maison Yasmini, we carefully match each venue to your personalities, your guest experience and the atmosphere you wish to create.
>
> Every recommendation is based not only on beauty, but also on comfort, accessibility, service quality and the overall experience your guests will enjoy throughout the celebration.

Sub-secção `A Wedding That Feels Effortlessly Beautiful`:

> From your first venue visit to the final toast, we coordinate every aspect of your celebration with precision, discretion and genuine care.
>
> Working alongside trusted venues and carefully selected suppliers, we ensure that every detail comes together seamlessly, allowing you to embrace every moment with complete confidence.
>
> Our goal is simple: to create a wedding that feels elegant without being excessive, luxurious without losing authenticity and unforgettable for all the right reasons.
>
> Because some love stories deserve to begin surrounded by vineyards, golden sunsets and landscapes that will forever hold a place in your heart.

Assinatura: `Maison Yasmini. Where Timeless Romance Meets the Beauty of Portugal.`

### 5.5 OUR STORY (`/about`, label "Our Story")

**Header:**
- Eyebrow: `OUR STORY`
- H1: `Maison Yasmini`
- Sub: `Destination Weddings & Event Planning in the Algarve`

**Copy (verbatim):**

> Maison Yasmini was born from a unique combination of precision, refined aesthetics and a genuine passion for creating meaningful and unforgettable celebrations.
>
> With more than 20 years of professional experience in the legal, administrative and management sectors, Yasmini Daudo brings a distinctive and highly structured approach to the world of wedding and event planning. Her background is reflected in every stage of the planning process, through meticulous organisation, thoughtful communication, careful attention to detail and a strong sense of responsibility.
>
> Supported by specialist training in Wedding Planning, Yasmini plans, coordinates and oversees intimate weddings, destination weddings and private events with elegance, professionalism and unwavering dedication.
>
> Our mission is to transform every celebration into a deeply personal, harmonious and beautifully curated experience, one that honours each couple's story, vision and individuality.
>
> From selecting the right venue and trusted suppliers to managing the budget, logistics and overall event design, every element is carefully considered to create a celebration that feels effortless, sophisticated and entirely your own.
>
> At Maison Yasmini, we believe a wedding should be far more than a beautiful event. It should be an emotional and unforgettable experience, where every detail flows naturally and where couples are free to live each moment with confidence, serenity and joy.
>
> We take the time to understand who you are, what inspires you and how you wish to feel on your wedding day. This allows us to create celebrations that are not only visually elegant, but also deeply meaningful and genuinely reflective of your story.
>
> With a calm, discreet and highly professional approach, we guide you through every decision and coordinate each detail with care, allowing you to enjoy the journey as much as the celebration itself.

Assinatura: `Maison Yasmini. Destination Weddings with Soul, Elegance and Exceptional Attention to Detail.`

Manter na página: retrato da Yasmini (`imageAssets.yasminiPortrait`, ainda placeholder → TODO(client)) e a secção de pilares existente se couber no fim. CTA final: `Begin Your Wedding Journey`.

### 5.6 WHY MAISON YASMINI (`/why-maison-yasmini`)

Página nova. Eyebrow `WHY MAISON YASMINI`, H1 `Because Your Wedding Deserves More Than Planning`. Estrutura de secções, verbatim (o copy usa frases curtas em linhas separadas; renderizar como parágrafos curtos com espaçamento generoso, estilo editorial):

**Abertura:**

> Your wedding is not simply another event. It is one of the most meaningful chapters of your life. The place where two families become one. The day your closest friends travel from around the world to celebrate your love. The beginning of memories that will stay with you forever.
>
> That is why choosing the right wedding planner is one of the most important decisions you will make.
>
> At Maison Yasmini, we don't simply organise weddings. We create experiences that feel effortless, deeply personal and beautifully unforgettable.

**A Boutique Wedding Planning Experience:**

> Unlike companies that manage dozens of weddings every season, we intentionally accept a limited number of celebrations each year. This allows us to dedicate our complete attention, creativity and expertise to every couple we work with.
>
> We believe true luxury is never rushed. It is thoughtful. Personal. Intentional.
>
> Every wedding we create receives the care, dedication and attention it truly deserves.

**Specialists in Intimate Destination Weddings:**

> Our philosophy is simple. We exclusively specialise in intimate weddings and luxury celebrations for up to 75 guests.
>
> This is not a limitation. It is our greatest strength.
>
> Smaller weddings create deeper emotions. More meaningful conversations. More time with the people you love. Greater attention to every guest. And an atmosphere that simply cannot be recreated in large-scale celebrations.
>
> We believe the most unforgettable weddings are not measured by the number of guests. They are measured by the emotions they create and the memories they leave behind.

**Every Wedding Begins With Your Story:**

> No two couples are alike. Neither should their weddings be.
>
> Before discussing flowers, colours or venues, we take the time to understand who you are. Your personalities. Your journey together. Your dreams. Your traditions. Your families. The atmosphere you want your guests to experience.
>
> Only then do we begin designing a celebration that truly reflects your story. Because your wedding should never look like anyone else's. It should feel unmistakably yours.

**Meticulous Planning. Seamless Execution.:**

> Behind every elegant wedding is exceptional organisation. Every timeline. Every supplier. Every contract. Every logistical detail. Every contingency plan. Every guest experience. Nothing is left to chance.
>
> Our background in law, administration and project management gives us a unique level of organisation, structure and precision, ensuring every aspect of your celebration is carefully coordinated with professionalism and discretion.
>
> While you enjoy every moment, we quietly manage everything behind the scenes.

**Carefully Curated Venues & Trusted Partners:**

> Luxury is not only about beautiful locations. It is about working with exceptional people.
>
> Over the years, we have built trusted relationships with carefully selected venues and outstanding suppliers across Portugal. From luxury resorts and private villas to celebrated chefs, talented florists, photographers and musicians, every recommendation is chosen for its quality, professionalism and commitment to excellence.
>
> Because every supplier becomes part of your story.

**A Calm Presence Throughout Your Journey:**

> Planning a destination wedding should never feel overwhelming. Our role is to simplify every decision, answer every question and guide you with confidence from your first consultation to your last dance.
>
> You will always know what comes next. You will always feel supported. You will always have someone looking after every detail.
>
> That peace of mind is one of the greatest luxuries we can offer.

**More Than Beautiful Weddings:**

> Anyone can organise a wedding. Our purpose is different.
>
> We create experiences that feel effortless. Celebrations where guests feel genuinely welcomed. Moments filled with emotion, elegance and authenticity.
>
> Weddings that are remembered not only because they were beautiful... but because they felt extraordinary.

**Our Promise** (bullets):
- Personalised planning with complete dedication.
- Exclusive intimate weddings for up to 75 guests.
- Elegant and timeless design.
- Meticulous organisation and flawless coordination.
- Trusted venues and exceptional suppliers.
- Honest communication and complete transparency.
- A calm, discreet and highly professional presence.
- A celebration that reflects your story, and no one else's.

**Fecho (`Because Luxury Is Not About Having More.`):**

> It is about feeling more. More connected. More present. More relaxed. More emotional. More unforgettable.
>
> That is the Maison Yasmini experience.

Assinatura: `Maison Yasmini. Luxury Intimate Destination Weddings in Portugal, Beautifully Curated Around Your Story.`

CTA final da página (escolha aprovada pela consultora): botão único **"Begin Your Wedding Journey"** → `/contact`.

### 5.7 PORTFOLIO (`/portfolio`)

- Eyebrow `PORTFOLIO`, H1 sugerida: `Moments We Have Had the Honour to Create` (título não fornecido pela cliente; marcar como `TODO(client): confirmar título`).
- Grid responsivo (masonry ou 2/3 colunas) consumindo `portfolioImages` de `content.ts`.
- **Assets:** a cliente indicou "fotos enviadas e tiradas do ChatGPT". As imagens da conversa ChatGPT não são acessíveis via link; Guilherme deve exportá-las manualmente e colocá-las em `public/images/portfolio/` nos tamanhos `nome-800.webp` e `nome-1600.webp`. Até lá, usar os 4 placeholders existentes com `TODO(client)`.
- ⚠️ Atenção legal (já mapeada em PENDENCIAS-CLIENTE.md): fotos de casamentos reais requerem autorização escrita dos casais; imagens geradas por IA no portfólio de uma wedding planner podem criar expectativa enganosa — recomendar à cliente rotular ou preferir fotos reais. Registar a recomendação, decisão é dela.

### 5.8 KIND WORDS (`/kind-words`)

- Eyebrow `KIND WORDS`, H1: `Kind Words From Our Couples`.
- Renderiza `testimonials` quando `SHOW_TESTIMONIALS = true`; enquanto false, estado vazio elegante: parágrafo `Our couples' stories are being gathered with the same care we give their celebrations.` + CTA `Begin Your Wedding Journey`.
- Atualizar label em toda a navegação de "Testimonials" para "Kind Words".

### 5.9 GET IN TOUCH (`/contact`)

- Renomear label do menu para `Get in Touch`. H1 sugerida: `Begin Your Wedding Journey`.
- Manter formulário e blocos existentes. Sem alterações estruturais além do copy do header.

---

## 6. FASE 4 — CONSISTÊNCIA, SEO E LIMPEZA

### 6.1 Varredura de consistência (obrigatória)

Fazer `grep` no projeto e corrigir todas as ocorrências:

| Procurar | Ação |
| --- | --- |
| `100 guests`, `61 to 100`, `more than 100` | substituir pela lógica de 75 guests (FAQ: "What happens if we have more than 75 guests?" → resposta: celebrações maiores requerem proposta personalizada, avaliada caso a caso) |
| `weddingPackages`, `From 3,000€`, `5,500€`, `8,500€` | remover de Services e Home conforme D1; se preço ficar, apenas 1 linha no FAQ |
| `Testimonials` (labels UI) | `Kind Words` |
| `About` (label nav) | `Our Story` |
| `Contact` (label nav/CTA genérico) | `Get in Touch` / `Begin Your Wedding Journey` |
| `—` (em dash) em strings de UI | reescrever |
| Post do Journal de custos | reescrever a secção "Our packages, as a starting point" conforme D1/D2; ajustar "up to a hundred" → "up to 75" |

### 6.2 SEO por página (useSeo + prerender)

| Rota | Title | Description (base) |
| --- | --- | --- |
| `/` | Maison Yasmini · Destination Weddings & Event Planning in the Algarve | Luxury intimate weddings and destination weddings in Portugal for up to 75 guests, beautifully curated around your story. |
| `/services` | Services · Maison Yasmini | Wedding planning, private events and wedding design & styling in the Algarve. |
| `/venues` | Wedding Venues in the Algarve · Maison Yasmini | Luxury resorts, private villas, exclusive restaurants and country estates for intimate weddings in Portugal. |
| `/venues/luxury-resorts` | Luxury Resorts & Boutique Hotels · Maison Yasmini | Where luxury meets the ocean: prestigious Algarve resorts for unforgettable celebrations. |
| `/venues/private-villas` | Private Villas · Maison Yasmini | Exclusive privacy and timeless elegance for bespoke Algarve weddings. |
| `/venues/exclusive-restaurants` | Exclusive Restaurants · Maison Yasmini | Fine dining and exceptional celebrations in the Algarve's most remarkable settings. |
| `/venues/country-estates` | Country Estates & Vineyards · Maison Yasmini | Authentic Portuguese elegance among vineyards, olive groves and gardens. |
| `/portfolio` | Portfolio · Maison Yasmini | — |
| `/kind-words` | Kind Words · Maison Yasmini | — |
| `/why-maison-yasmini` | Why Maison Yasmini | — |
| `/about` | Our Story · Maison Yasmini | — |
| `/contact` | Get in Touch · Maison Yasmini | — |

Atualizar `public/sitemap.xml`, JSON-LD do `index.html` (manter dados da organização; adicionar `knowsAbout`/`areaServed` se simples) e lista de rotas em `scripts/prerender.mjs`.

### 6.3 Redirects

Sem URLs a quebrar (rotas antigas mantêm-se). Garantir que `vercel.json` / `_redirects` continuam cobrindo SPA fallback para as novas rotas.

---

## 7. FASE 5 — IDENTIDADE VISUAL E INTEGRAÇÃO DAS FOTOS (`images-reference/`)

> As fotos da conversa ChatGPT "Fotos para site de casamento" foram entregues pelo Guilherme na pasta **`images-reference/`** na raiz do repositório, organizadas em 5 subpastas temáticas. Esta fase substitui os placeholders da Unsplash pelo material real.

### 7.0 Pré-requisito

⚠️ Verificar que `images-reference/` está de facto versionada no remoto (à data desta revisão, a pasta ainda não constava no `origin/main`). Confirmar que o `.gitignore` não a exclui e fazer commit/push antes de executar esta fase. Se a pasta não existir localmente, PARAR e avisar.

### 7.1 Direção de identidade visual (da consultora, aplicar como critério de seleção)

Identidade visual consistente, elegante e intemporal, inspirada em editoriais de luxo (referências citadas: Vogue Weddings, Brides, Style Me Pretty). Ao escolher entre fotos da mesma pasta, privilegiar sempre as que tenham:

- cores claras e luminosas;
- paleta **branco, verde, bege e dourado** (nota: harmoniza com o design system safira + champanhe do site — usar o dourado/bege das fotos como ponte);
- arranjos florais sofisticados;
- iluminação natural e ao pôr do sol;
- enquadramentos editoriais e minimalistas;
- casamentos intimistas, sem grandes multidões.

⚠️ **Conflito a ignorar:** o texto do ChatGPT menciona "casamentos intimistas (50–120 convidados)". O posicionamento oficial aprovado no documento Word da cliente é **até 75 convidados** e prevalece em todo o copy. Não usar fotos que aparentem multidões grandes.

### 7.2 Inventário entregue (34 fotos)

| Pasta em `images-reference/` | Qtd | Tema |
| --- | --- | --- |
| `Hero Banner (imagem principal)` | 7 | Casal ao pôr do sol com vista para o mar |
| `Cerimónias e Momentos` | 8 | Cerimónias, votos, momentos do casal |
| `Decoração e Receção` | 8 | Mesas, flores, styling de receção |
| `Detalhes que transmitem requinte` | 4 | Close-ups: papelaria, arranjos, requinte |
| `Destination Wedding no Algarve` | 7 | Falésias, praias, vinhas, resorts |

> Os nomes reais das subpastas podem ter pequenas variações (acentos, maiúsculas). Listar com `ls images-reference/` antes de mapear e adaptar os paths no script de conversão.

### 7.3 Mapeamento pasta → slot do site

A estrutura sugerida no ChatGPT (Hero / Sobre Nós / Destination Weddings / Wedding Design / Experiências / Galeria / Contacto) é adaptada à nossa arquitetura assim:

| Slot no site | Fonte | Instrução de seleção |
| --- | --- | --- |
| **Home hero** (`imageAssets.hero`) | `Hero Banner` | A melhor foto de casal ao pôr do sol com mar. Formato paisagem 16:9. Substituir `hero-800/1600.webp`. |
| **Home — secção Algarve** (`imageAssets.algarveLandscape`) | `Destination Wedding no Algarve` | Paisagem panorâmica (falésia/vinha) sem pessoas em destaque. |
| **Home — detail** (`imageAssets.detail`) | `Detalhes que transmitem requinte` | Close-up de mesa/papelaria. |
| **Services — card Wedding Planning** | `Cerimónias e Momentos` | Momento de cerimónia elegante. |
| **Services — card Private Events** | `Decoração e Receção` | Mesa de jantar/cocktail. |
| **Services — card Design & Styling** | `Decoração e Receção` ou `Detalhes` | Styling floral/tablescape. |
| **Services — hero Design & Styling** (frase sobreposta) | `Decoração e Receção` | Foto de grande formato, luminosa, com área calma para o texto "Your story deserves more than a beautiful wedding...". |
| **Venues — Luxury Resorts** (hero + galeria) | `Destination Wedding no Algarve` | Fotos de resort/piscina/vista mar. |
| **Venues — Private Villas** | `Destination Wedding no Algarve` + `Decoração e Receção` | Villa/jardim/piscina privada. |
| **Venues — Exclusive Restaurants** | `Decoração e Receção` | Jantar elegante, mesa posta. |
| **Venues — Country Estates & Vineyards** | `Destination Wedding no Algarve` | Vinhas, oliveiras, quintas. |
| **Portfolio** (`portfolioImages`) | TODAS as pastas | Seleção premium de 20–30 imagens (sugestão da consultora), organizada por categoria = nome da pasta. Com 34 fotos disponíveis, incluir as ~24 melhores segundo os critérios de 7.1. |
| **Contact / Get in Touch** | `Hero Banner` | Imagem inspiradora de casal a caminhar ao pôr do sol (indicação explícita da consultora para a página de contacto). |
| **Kind Words** (fundo/apoio opcional) | `Cerimónias e Momentos` | Momento emotivo discreto. |
| **OG image** (`public/og-image.jpg`) | mesma foto do Home hero | Recorte 1200×630. |

**Sem cobertura nas pastas entregues:** retrato profissional da Yasmini ("Sobre Nós — fotografia sua, elegante e profissional" na estrutura do ChatGPT). Continua pendente da cliente; manter placeholder + `TODO(client)` em `/about`.

### 7.4 Pipeline técnico de processamento

1. Criar script `scripts/process-images.mjs` (usar `sharp`, adicionar como devDependency) que lê `images-reference/`, converte cada foto para WebP em 2 larguras (800 e 1600, qualidade ~80) e grava em `public/images/` com nomes kebab-case por slot/categoria:
   - slots fixos: `hero`, `algarve`, `detail`, `portrait` (quando chegar), `contact-sunset`, `service-planning`, `service-events`, `service-styling`, `styling-hero`
   - venues: `venue-resorts-01..n`, `venue-villas-01..n`, `venue-restaurants-01..n`, `venue-estates-01..n`
   - portfolio: `portfolio-ceremony-01..n`, `portfolio-reception-01..n`, `portfolio-details-01..n`, `portfolio-algarve-01..n`, `portfolio-hero-01..n`
2. Atualizar `content.ts`: popular `gallery` das 4 `VenueCategory`, `portfolioImages` (com `alt` descritivo escrito manualmente, nunca genérico) e as imagens das `ServiceVertical`.
3. Definir `width`/`height` reais de cada asset (ler do ficheiro no script e gerar um JSON/const) para evitar layout shift.
4. `images-reference/` NÃO deve ir para o build final: adicionar a pasta ao `.gitignore` do build ou apenas garantir que não está em `public/`. Manter no repo como fonte (decisão do Guilherme; se o repo ficar pesado, mover para Drive e documentar o link em PENDENCIAS-CLIENTE.md).
5. Remover os placeholders Unsplash substituídos e os comentários `TODO(client)` correspondentes.

### 7.5 Nota de transparência (registar, decisão é da cliente)

Se parte das imagens for gerada por IA (origem: conversa ChatGPT), recomenda-se não as apresentar no Portfolio como casamentos reais realizados pela Maison Yasmini. Uso seguro: heros, secções de venues e fundos editoriais. Para o Portfolio, priorizar fotos reais autorizadas assim que existirem. Registar a recomendação em `PENDENCIAS-CLIENTE.md`.

### 7.6 Pendências restantes (atualizar `PENDENCIAS-CLIENTE.md`)

1. ~~Fotos do Portfolio/venues/services~~ → **ENTREGUES** em `images-reference/` (confirmar push, ver 7.0).
2. **Retrato profissional da Yasmini** — continua em aberto (não incluído nas 5 pastas).
3. **≥2 depoimentos reais autorizados** para ativar Kind Words.
4. **Confirmações antigas ainda abertas:** Instagram real, e-mail, WhatsApp, endpoint do formulário, domínio final.
5. **Decisões D1–D5** da secção 1 (registar resposta da cliente).
6. **Confirmação da cliente sobre a nota 7.5** (uso de imagens IA no portfólio).

---

## 8. ORDEM DE EXECUÇÃO E CRITÉRIOS DE ACEITAÇÃO

**Ordem:** Fase 1 (estrutura) → Fase 2 (dados) → Fase 3 (conteúdo, página a página: Services → Venues hub → 4 categorias → Our Story → Why → Home → Portfolio → Kind Words → Contact) → Fase 4 (consistência/SEO) → Fase 5 (pendências). Commit por página/fase com mensagem descritiva.

**Checklist final:**

- [ ] `images-reference/` presente no repo; fotos processadas para WebP 800/1600 via `scripts/process-images.mjs`
- [ ] Home hero, secção Algarve e detail usando fotos reais (placeholders Unsplash removidos)
- [ ] Galerias das 4 categorias de Venues populadas; Portfolio com 20–30 imagens e `alt` descritivos
- [ ] Página Contact com imagem de casal ao pôr do sol; OG image atualizada a partir do hero
- [ ] Seleção de fotos segue os critérios da secção 7.1 (paleta clara, luz natural, enquadramento editorial, sem multidões)

- [ ] Menu = Home | Services | Venues | Portfolio | Kind Words | Our Story | Get in Touch (desktop e mobile)
- [ ] `/venues` + 4 páginas de categoria funcionais com galeria (placeholders ok) e cross-links
- [ ] Services sem pacotes/preços; 3 verticais completas com listas e assinaturas
- [ ] Nenhuma ocorrência de "100 guests" ou dos preços antigos fora do local decidido em D1
- [ ] Zero em dashes no copy renderizado
- [ ] CTA "Begin Your Wedding Journey" na Home, Why, Venues e Contact
- [ ] `SHOW_TESTIMONIALS` continua false; Kind Words com estado vazio elegante
- [ ] `npm run check && npm run lint && npm run test && npm run build:prerender` verdes
- [ ] `sitemap.xml`, prerender e useSeo cobrindo todas as rotas novas
- [ ] `PENDENCIAS-CLIENTE.md` atualizado com a secção 7
- [ ] Teste manual responsivo (360px, 768px, 1280px) nas páginas novas

---

*Documento gerado a partir de: docx "CRIACAO DO SITE" da cliente (copy integral), estrutura de referência de algarveweddingsatelier.com/venues, auditoria do repositório maison-yasmin-site, e diretrizes visuais + inventário de fotos da conversa ChatGPT "Fotos para site de casamento" (pasta images-reference/). Revisto em 14/07/2026.*
