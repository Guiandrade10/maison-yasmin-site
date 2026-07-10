# Pendências da cliente — Maison Yasmini

Este documento centraliza tudo o que precisa ser fornecido ou confirmado pela cliente antes de o site ir ao ar. Cada item mapeia para um `TODO(client)` no código, para facilitar a substituição depois.

## 1. Identidade e contactos

| Item | Onde entra no site | Placeholder actual | Nota |
| --- | --- | --- | --- |
| **@ do Instagram real** | `src/config/site.ts` → `instagramUrl` e JSON-LD do `index.html` | `https://www.instagram.com/` | O link no header/footer aponta para o feed genérico enquanto não estiver definido. |
| **E-mail de contacto** | `src/config/site.ts` → `contactEmail`; formulário Contact; fallback "Prefer email?" | `hello@maisonyasmini.com` | Confirmar caixa activa antes de publicar. |
| **Número de WhatsApp** | `src/config/site.ts` → `whatsappUrl`; footer + CTA na página Contact | `https://wa.me/351000000000` | Formato internacional sem `+` nem espaços (ex.: `351912345678`). |
| **Domínio final** | `src/config/site.ts` → `siteUrl`; `sitemap.xml`; `robots.txt`; canonicais | `https://maisonyasmini.com` | Confirmar se será `.com`, `.pt`, `.co`, etc. |

## 2. Formulário

- Escolher fornecedor: **Formspree** (plano grátis), **Web3Forms** ou equivalente.
- Colar o endpoint em `src/config/site.ts` → `formEndpoint`.
- Enquanto o placeholder estiver activo, o formulário devolve estado de erro (comportamento esperado, útil para testar o UI).

## 3. Fotografia (crítico — hoje são placeholders)

Substituir tudo o que está em `public/images/`. Sizes esperadas: `nome-800.webp` e `nome-1600.webp`.

| Slot | Onde aparece | Precisa da cliente |
| --- | --- | --- |
| `hero` | Home hero e cover do post "best-intimate-wedding-venues" | Foto principal editorial. Idealmente uma cerimônia/mesa real no Algarve. |
| `portrait` | Home ("About Yasmini") e página `/about` | Retrato profissional de Yasmini. Placeholder é uma still-life com flores — não é a fundadora. |
| `algarve` | Home portfolio | Paisagem panorâmica do Algarve (falésia, praia ou vinha). |
| `detail` | Home portfolio e cover do post "how-much-does-a-destination-wedding-cost" | Close-up: papelaria, mesa posta, arranjo, ourivesaria, etc. |

Adicionalmente:
- **3+ fotos extra** de casamentos reais para expandir o portfólio no futuro.
- **Autorização escrita** dos casais fotografados para uso online.

## 4. OG image e ícones

| Item | Ficheiro | Nota |
| --- | --- | --- |
| `og-image.jpg` | `public/og-image.jpg` (1200×630) | Substituir pelo mesmo hero definitivo ou por um card com monograma + tagline. É a prévia que aparece no WhatsApp/Instagram. |
| `apple-touch-icon.png` | Ainda não existe | Gerar PNG 180×180 a partir do monograma (fundo marfim, monograma safira/dourado). |
| `favicon-32.png` | Ainda não existe | Opcional; o favicon SVG cobre navegadores modernos. |

## 5. Testemunhos (P3.1)

- Os dois testemunhos actuais em `src/data/content.ts` (Ana & Ricardo, Sofia & Miguel) são fictícios e ficaram **escondidos** atrás da flag `SHOW_TESTIMONIALS = false`.
- Antes de reactivar a secção "Testimonials" na Home, a cliente precisa:
  1. Recolher pelo menos 2 depoimentos reais autorizados por escrito.
  2. Confirmar nomes/cidade que podem ser publicados.
  3. Actualizar o array `testimonials` em `content.ts` e ligar `SHOW_TESTIMONIALS = true`.

## 6. Preço acima da dobra (P2.1)

O plano recomenda **remover** o card "Starting from 3,000€" que estava acima da dobra da Home, substituindo por atributos não monetários. A decisão final precisa da cliente:

- [ ] Manter o card "From 3,000€" acima da dobra?
- [ ] Ou aceitar a versão editada (baseada em posicionamento, sem preço no primeiro contacto)?

Preço continua visível em `/services` e no FAQ nos dois cenários.

## 7. Política de privacidade (P3.4)

- Rota `/privacy` publicada com texto genérico de GDPR.
- Deve ser **revista por advogada/consultor jurídico** antes de considerar oficial.
- Confirmar: entidade responsável, prazo de retenção de dados, terceiros com quem se partilha (Formspree, hosting…).

## 8. Miscelânea

- Confirmar copy oficial da fundadora e da mission em `guide.md` — já usado no site.
- Confirmar plano de deploy (Vercel? Netlify?). Ambos os configs estão prontos.
- Confirmar se querem GA4/Plausible ou nenhum analytics no lançamento.
