# Copy Review — Maison Yasmini Site

**Status:** Awaiting approval. No text changes applied yet.
Layout bugs are being fixed separately and do not need approval.

---

## ROUTES (structural change)

| Current (PT) | Proposed (EN) |
|---|---|
| `/sobre` | `/about` |
| `/servicos` | `/services` |
| `/experiencia` | `/process` |
| `/contacto` | `/contact` |
| `/faq` | `/faq` (unchanged) |
| `/journal` | `/journal` (unchanged) |
| `/journal/:slug` | `/journal/:slug` (unchanged) |

Affects: `App.tsx`, `SiteHeader.tsx`, `SiteFooter.tsx`, and every `Button to=` reference across all pages.

---

## index.html

| Field | Old | New |
|---|---|---|
| `lang` | `pt-BR` | `en` |
| `<title>` | Maison Yasmini \| Wedding Planner — Algarve, Portugal | _unchanged_ |
| `meta description` | "Maison Yasmini é uma consultoria de casamentos de alto padrão no Algarve. Planejamos celebrações elegantes, intencionais e inesquecíveis." | "Maison Yasmini is a boutique wedding planning studio in the Algarve. We plan elegant, intentional celebrations that couples and guests remember for years." |
| `og:description` | "Onde cada detalhe conta uma história de amor. Casamentos de alto padrão no Algarve, Portugal." | "Where every detail tells a love story. Boutique wedding planning in the Algarve, Portugal." |

---

## src/config/site.ts

| Field | Old | New |
|---|---|---|
| `tagline` | "Onde cada detalhe conta uma história de amor." | "Where every detail tells a love story." |

---

## src/data/content.ts — pilares

### Excellence (excelencia)
- **Old title:** Excelência
- **New title:** Excellence
- **Old desc:** "Busca constante pela perfeição em cada detalhe, do primeiro contato ao último momento."
- **New desc:** "A constant pursuit of precision in every detail, from the first conversation to the final moment."

### Purpose (proposito)
- **Old title:** Propósito
- **New title:** Purpose
- **Old desc:** "Transformamos sonhos em histórias reais, com intenção e cuidado em cada escolha."
- **New desc:** "We turn visions into real stories, with intention and care in every decision we make together."

### Elegance (elegancia)
- **Old title:** Elegância
- **New title:** Elegance
- **Old desc:** "Sofisticação que se revela na simplicidade — o refinamento está no que não se exagera."
- **New desc:** "Sophistication that reveals itself through restraint. Refinement is knowing what to leave out."
- _(Note: em dash removed, rewritten as two sentences.)_

### Trust (confianca)
- **Old title:** Confiança
- **New title:** Trust
- **Old desc:** "Relações verdadeiras, baseadas em transparência, clareza e presença ao longo de todo o processo."
- **New desc:** "Real relationships built on transparency, clarity and consistent presence throughout the entire process."

### Memories (memorias)
- **Old title:** Memórias
- **New title:** Memories
- **Old desc:** "Transformamos momentos em lembranças eternas, celebrações que ficam para sempre."
- **New desc:** "We turn moments into lasting memories. Celebrations that stay with the people who were there."

---

## src/data/content.ts — testimonials

### Testimonial 1
- **Old name/location:** Ana e Ricardo · Lisboa, Portugal
- **New name/location:** Ana and Ricardo · Lisbon, Portugal
- **Old text:** "A Yasmini transformou cada detalhe do nosso casamento numa memória que vamos guardar para sempre. Uma experiência de elegância e cuidado únicos."
- **New text:** "Yasmini turned every detail of our wedding into a memory we will carry forever. The care, the taste, the calm — nothing felt accidental."
- _(Note: dash kept here as part of a parenthetical pause in a quote — acceptable in quoted speech. Or remove: "The care, the taste, the calm. Nothing felt accidental.")_

### Testimonial 2
- **Old name/location:** Sofia e Miguel · Porto, Portugal
- **New name/location:** Sofia and Miguel · Porto, Portugal
- **Old text:** "Profissionalismo e sensibilidade em cada etapa. O nosso dia foi exatamente como sempre sonhámos — leve, elegante e cheio de significado."
- **New text:** "Professionalism and real presence at every step. Our day was exactly what we had hoped for: light, elegant and full of meaning."
- _(Note: em dash replaced with colon.)_

---

## src/data/content.ts — weddingPackages

Titles and descriptions are already in English. Two formatting changes needed:

| Field | Old | New |
|---|---|---|
| Small priceFrom | "From 3.000€" | "From 3,000€" |
| Medium priceFrom | "From 5.500€" | "From 5,500€" |
| Large priceFrom | "From 8.500€" | "From 8,500€" |

_(European decimal point → American comma for currency formatting.)_

Package descriptions (light rewrite for tone):

**Small:**
- Old: "For elopements, intimate ceremonies and small destination celebrations with close family and friends."
- New: _unchanged — clear and accurate_

**Medium:**
- Old: "Designed for couples who want a fuller wedding experience in the Algarve with structure, style and calm execution."
- New: "For couples who want a complete wedding experience in the Algarve, with structure, style and calm execution from start to finish."

**Large:**
- Old: "For larger celebrations that need more production, more coordination and a stronger planning structure from the start."
- New: _unchanged — clear and direct_

---

## src/data/content.ts — processSteps

Already in English. Light quality pass:

**Step 01 — Conversation:**
- Old: "We understand your date, guest count, priorities and the atmosphere you want to create in the Algarve."
- New: _unchanged_

**Step 02 — Direction:**
- Old: "We shape the concept, shortlist venues and build a planning direction that fits your celebration size."
- New: _unchanged_

**Step 03 — Planning:**
- Old: "Suppliers, logistics, schedule and decisions are organized with clarity so the process feels steady."
- New: _unchanged_

**Step 04 — Coordination:**
- Old: "We manage confirmations, timings and the full event flow so every part of the day runs with confidence."
- New: _unchanged_

**Step 05 — Celebration:**
- Old: "You enjoy the day with your guests while we take care of what is happening behind the scenes."
- New: _unchanged_

---

## src/data/content.ts — faqs

Already in English. One phrasing fix:

**FAQ 6 — Why choose the Algarve:**
- Old answer end: "It is a beautiful place for couples who want nature, intimacy and destination convenience in one setting."
- New answer end: "It is a beautiful setting for couples who want nature, intimacy and the ease of a well-connected destination."

---

## src/data/content.ts — journalPosts

| Field | Old | New |
|---|---|---|
| Post 1 title | "How much does a destination wedding in Algarve cost?" | "How much does a destination wedding in the Algarve cost?" |
| Post 2 title | "Best intimate wedding venues in Algarve" | "Best intimate wedding venues in the Algarve" |
| Excerpts | _unchanged_ | _unchanged_ |

---

## src/pages/Home.tsx

### Hero
| Element | Old | New |
|---|---|---|
| Tagline | "Onde cada detalhe conta uma história de amor." | "Where every detail tells a love story." |
| CTA 1 | "Solicitar Proposta" | "Request a Proposal" |
| CTA 2 | "Ver Serviços" | "View Services" |
| Stat label 1 | "A partir de" | "Starting from" |
| Stat value 1 | "3.000€" | "3,000€" |
| Stat label 2 | "Convidados" | "Guests" |
| Stat value 2 | "2 a 100+" | "2 to 100+" |
| Stat label 3 | "Proposta" | "Proposal" |
| Stat value 3 | "Personalizada" | "Custom" |

### Manifesto section
| Element | Old | New |
|---|---|---|
| Blockquote | "Cada história merece ser planejada com excelência e lembrada para sempre." | "Every story deserves to be planned with excellence and remembered forever." |
| Cite | "MAISON YASMINI — WEDDING PLANNER" | "MAISON YASMINI · WEDDING PLANNER" _(dash → middot)_ |

### About Yasmini section
| Element | Old | New |
|---|---|---|
| Eyebrow | "Sobre Yasmini" | "About Yasmini" |
| H2 | "Mais de 20 anos de precisão ao serviço dos momentos mais importantes da sua vida." | "Over twenty years of precision, now dedicated to the most important day of your life." |
| P1 | "Yasmini vive no Algarve e traz para o planejamento de casamentos a mesma estrutura, clareza e confiança que construiu ao longo de duas décadas no universo jurídico." | "Yasmini lives in the Algarve. She brings to wedding planning the same structure, clarity and reliability she built over two decades in the legal field." |
| P2 | "A Maison Yasmini nasceu da crença de que o amor merece beleza, autenticidade e momentos inesquecíveis — planejados com elegância e vividos com plenitude." | "Maison Yasmini was born from one belief: love deserves beauty, authenticity and moments worth remembering. Planned with elegance, lived fully." _(em dash → colon)_ |
| Card 1 title | "Perspetiva local" | "Local Knowledge" |
| Card 1 body | "Conhecimento profundo do Algarve, dos melhores espaços e dos fornecedores certos." | "Deep knowledge of the Algarve: the right venues, the right suppliers and the timing that makes it all work." |
| Card 2 title | "Processo claro" | "A Clear Process" |
| Card 2 body | "Um planeamento calmo para casais que precisam de decisões simples e informadas." | "Calm, structured planning for couples who need decisions to feel simple and well-supported." |
| Card 3 title | "Atenção pessoal" | "Personal Attention" |
| Card 3 body | "Uma abordagem boutique que prioriza o ajuste, o detalhe e a autenticidade." | "A boutique approach that prioritizes fit, detail and a wedding that feels like you." |
| Button | "Conhecer a história" | "Read the story" |

### Services section
| Element | Old | New |
|---|---|---|
| Eyebrow | "Serviços" | "Services" |
| H2 | "Pacotes pensados para cada dimensão de celebração." | "Packages designed around the size and feeling of your celebration." |
| Description | "Pequenos, médios e grandes casamentos têm ritmos de planeamento diferentes. A nossa oferta reflete isso com clareza." | "Small, medium and large weddings need different planning rhythms. Our packages reflect that, clearly." |
| Button | "Explorar pacotes" | "Explore packages" |
| 100+ note | "Para casamentos com mais de 100 convidados, a Maison Yasmini prepara uma proposta personalizada com base no espaço, logística, equipa e necessidades de produção." | "Weddings with more than 100 guests need a custom proposal. We build it around the venue, logistics, team size and production needs." |

### Portfolio/Gallery section
| Element | Old | New |
|---|---|---|
| Eyebrow | "Portfólio" | "Portfolio" |
| H2 | "Cada casamento, uma história única." | "Each wedding, a story of its own." |
| Description | "Momentos captados com naturalidade, elegância e atenção ao que realmente importa." | "Moments captured with natural light, restraint and attention to what truly matters." |
| Alt 1 | "Casamento no Algarve" | "Wedding ceremony in the Algarve" |
| Alt 2 | "Paisagem do Algarve" | "Algarve coastline at golden hour" |
| Alt 3 | "Detalhe de casamento" | "Wedding detail shot" |

### Pillars section
| Element | Old | New |
|---|---|---|
| Eyebrow | "OS NOSSOS VALORES" | "OUR VALUES" |
| Pilar titles/descs | _(see content.ts section above)_ | _(see content.ts section above)_ |

### Testimonials section
| Element | Old | New |
|---|---|---|
| Eyebrow | "Depoimentos" | "Testimonials" |
| H2 | "O que os nossos casais dizem." | "What our couples say." |
| Testimonial content | _(see content.ts section above)_ | _(see content.ts section above)_ |

### CTA section
| Element | Old | New |
|---|---|---|
| Eyebrow | "COMECE SUA HISTÓRIA" | "BEGIN YOUR STORY" |
| H2 | "Cada celebração merece ser única e planejada com excelência." | "Every celebration deserves to be one of a kind." |
| Paragraph | "Partilhe a sua data, o número de convidados e a celebração que imagina. Preparamos uma proposta à sua medida." | "Share your date, guest count and the vision you have in mind. We will come back with a clear proposal built around you." |
| Button 1 | "Solicitar Proposta" | "Request a Proposal" |
| Button 2 | "Ver pacotes" | "View packages" |

---

## src/pages/About.tsx

Already in English. Quality rewrites:

| Element | Old | New |
|---|---|---|
| H1 | "A refined home where celebrations begin." | _unchanged_ |
| Intro P | "Maison Yasmini is not an event factory. It is a boutique studio built around intention, beauty and calm structure, led personally by Yasmini." | _unchanged_ |
| Story H2 eyebrow | "Founder story" | _unchanged_ |
| Story H2 | "From law to weddings, with precision and warmth." | _unchanged_ |
| Story P2 | "After decades dedicated to law, she decided to follow her passion and transform her love for details, organization and meaningful experiences into wedding planning." | "After decades in law, she chose to direct that same discipline toward something more personal: planning weddings with the same care she gave to every case." |
| Story P3 | "Maison Yasmini was born from the belief that love deserves beauty, authenticity and unforgettable moments." | "Maison Yasmini was born from a belief that love deserves beauty, authenticity and celebrations worth remembering." |
| Values eyebrow | "Values" | _unchanged_ |
| Values H2 | "Intention, authenticity, calm." | _unchanged_ |
| Values desc | "Elegant, intimate celebrations curated with purpose and without exaggeration." | _unchanged_ |
| Value card 3 body | "A film-like aesthetic with natural light and quiet luxury." | "A considered aesthetic: natural light, honest materials and nothing superfluous." _(removes "quiet luxury" cliché)_ |
| Value card 4 body | "Warm, personal, never corporate. You will feel held." | "Warm, personal and never corporate. You will feel looked after, not managed." |
| Why Algarve eyebrow | "Why Algarve" | "Why the Algarve" |
| Why Algarve H2 | "Light, landscapes, and a feeling of ease." | "Light, landscape and a feeling of ease." _(serial comma fix)_ |
| Algarve P2 end | "the experience can be calm, meaningful and deeply personal." | _unchanged_ |
| Button | "Explore Services" | _unchanged_ |

---

## src/pages/Services.tsx

| Element | Old | New |
|---|---|---|
| H1 | "Wedding packages built around guest count, pace and place." | _unchanged_ |
| Intro P | "Maison Yasmini now presents the offer in a clearer way: small, medium and large weddings in the Algarve, each with its own planning structure and starting investment." | "Maison Yasmini offers three clear packages built around guest count. Each comes with its own planning rhythm and starting investment." |
| Additional support eyebrow | "Additional support" | _unchanged_ |
| Section H2 | "Every package can include the support that makes destination planning feel manageable." | "Every package can be extended with the support that makes destination planning feel straightforward." |
| CTA card H3 | "A calm first step" | _unchanged_ |
| CTA card P | "Share your date, approximate guest count and the kind of celebration you want. We will respond with clarity and the next steps." | _unchanged_ |
| CTA button | "Contact" | "Get in touch" |
| Top CTA button | "Request your proposal" | "Request a proposal" _(lowercase 'a')_ |

---

## src/pages/Experience.tsx

| Element | Old | New |
|---|---|---|
| H1 | "How we work." | _unchanged_ |
| Intro P | "A five-step process designed to protect your peace through clear checkpoints, thoughtful pacing and a steady, discreet presence." | "A five-step process built around clear checkpoints, thoughtful pacing and a steady presence from first conversation to wedding day." |
| Repeated step P | "We keep communication clear and warm, never corporate and never sales-driven. Every detail is designed with intention so the day feels effortless." | "We keep communication clear and warm, never corporate and never sales-driven. Every detail is handled with care so you can be fully present on the day." |
| Next step eyebrow | "Next step" | _unchanged_ |
| Next step H2 | "Tell us your date and the feeling you want." | "Tell us your date and what you are hoping for." |
| Next step desc | "We'll respond with clarity: availability, guidance and the most aligned way to work together." | "We will come back with availability, honest guidance and a clear sense of whether we are the right fit." |
| CTA button | "Contact" | "Get in touch" |
| Top CTA button | "Request your proposal" | "Request a proposal" |

---

## src/pages/Faq.tsx

| Element | Old | New |
|---|---|---|
| Eyebrow | "FAQ" | _unchanged_ |
| H2 | "Clear answers, calm decisions." | _unchanged_ |
| Description | "If you do not see your question here, send us a note and we will respond with clarity." | _unchanged_ |

---

## src/pages/Contact.tsx

| Element | Old | New |
|---|---|---|
| Eyebrow | "Contact" | _unchanged_ |
| H2 | "A calm first step." | _unchanged_ |
| Description | "Share your date, guest count and preferred package. We will respond with clarity and the next steps." | _unchanged_ |
| Package options | "from 3.000€" / "from 5.500€" / "from 8.500€" | "from 3,000€" / "from 5,500€" / "from 8,500€" |
| Submit button | "Prepare email" | "Prepare my email" |
| Success H2 | "Thank you." | _unchanged_ |
| Success P | "Your inquiry is ready to send. If you uploaded a vision board, please attach it to the email before sending." | _unchanged_ |
| Success btn 1 | "Open email" | _unchanged_ |
| Success btn 2 | "Back to Home" | _unchanged_ |
| Footer note | "This form prepares a message to send to [email] via your email client." | _unchanged_ |

---

## src/pages/Journal.tsx

| Element | Old | New |
|---|---|---|
| Eyebrow | "Journal" | _unchanged_ |
| H2 | "Guides for international couples planning in Algarve." | "Guides for international couples planning a wedding in the Algarve." |
| Description | "SEO-first topics written with calm clarity about budgets, venues, timelines and legal basics." | "Practical reads on budgets, venues, timelines and what to know before planning a wedding in Portugal." |
| Post link label | "READ" | _unchanged_ |

---

## src/pages/JournalPost.tsx

| Element | Old | New |
|---|---|---|
| Back link | "BACK TO JOURNAL" | _unchanged_ |
| CTA button | "Inquire" | "Get in touch" |
| 404 title | "Article not found" | _unchanged_ |
| 404 body | "Please return to the Journal." | _unchanged_ |
| 404 button | "Back to Journal" | _unchanged_ |

---

## src/components/SiteHeader.tsx

| Element | Old | New |
|---|---|---|
| Nav: Sobre | "Sobre" | "About" |
| Nav: Serviços | "Serviços" | "Services" |
| Nav: Processo | "Processo" | "Process" |
| Nav: Blog | "Blog" | "Journal" |
| Nav: Contacto | "Contacto" | "Contact" |
| Nav: FAQ | "FAQ" | _unchanged_ |
| CTA button | "Solicitar Proposta" | "Request a Proposal" |
| Mobile aria-label | "Abrir menu" | "Open menu" |

---

## src/components/SiteFooter.tsx

| Element | Old | New |
|---|---|---|
| Tagline | "Onde cada detalhe conta uma história de amor." | "Where every detail tells a love story." |
| Nav: Sobre | "Sobre" | "About" |
| Nav: Serviços | "Serviços" | "Services" |
| Nav: Processo | "Processo" | "Process" |
| Nav: Blog | "Blog" | "Journal" |
| Nav: Contacto | "Contacto" | "Contact" |
| Pilares list | Excelência · Propósito · Elegância · Confiança · Memórias | Excellence · Purpose · Elegance · Trust · Memories |
| Copyright | "Todos os direitos reservados." | "All rights reserved." |

---

## src/pages/NotFound.tsx

Already in English. No changes needed.

---

## SUMMARY OF CHANGES

**Requires code changes across ~12 files:**
- `index.html` (lang, meta)
- `src/config/site.ts` (tagline)
- `src/data/content.ts` (pilares, testimonials, currency format, journal titles, FAQ)
- `src/App.tsx` (route paths)
- `src/components/SiteHeader.tsx` (nav labels, routes, aria-label)
- `src/components/SiteFooter.tsx` (tagline, nav labels, routes, pilares, copyright)
- `src/pages/Home.tsx` (all visible text)
- `src/pages/About.tsx` (2 paragraph rewrites, 1 value card)
- `src/pages/Services.tsx` (intro paragraph, CTA button label)
- `src/pages/Experience.tsx` (2 paragraph rewrites, CTA text)
- `src/pages/Journal.tsx` (section description)
- `src/pages/Contact.tsx` (currency format, submit button label)

**No changes needed:** `JournalPost.tsx`, `Faq.tsx`, `NotFound.tsx`

---

_Please review and approve or adjust before implementation._
