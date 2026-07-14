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

## 3. Fotografia

**Actualização 2026-07-14:** as 34 fotos entregues em `Images-reference/` (5 subpastas) foram processadas via `npm run process:images` e integradas nos slots do site. O `.gitignore` exclui `Images-reference/` do build.

Ainda em aberto:

| Slot | Onde aparece | Precisa da cliente |
| --- | --- | --- |
| `portrait` | Página `/about` (Our Story) | **Retrato profissional de Yasmini.** Não veio nas 5 pastas. Enquanto não chega, o slot usa uma foto editorial vertical de casal como imagem institucional temporária (`Cerimónias e Momentos/3.jpg`, 1706×2560). Substituir com foto real assim que existir. |
| `hero` full-bleed | Home (`/`) | **Export do hero em alta resolução.** A foto atual (`Hero Banner/2.jpg`, 1360×913 — casal ao pôr do sol com vista para o mar) ficou abaixo do ideal para uma imagem full-bleed (recomenda-se ≥1920 px de largura). Pedir à cliente o mesmo enquadramento em resolução original ou ≥1920×1280. |
| Portfólio expandido | `/portfolio` | Selecção premium de 20–30 imagens autorizadas para ampliar o grid. Actualmente 5 slots preenchidos como amostra. |
| Autorizações | Portfolio (`/portfolio`) | **Autorização escrita** dos casais fotografados para uso online. |

### 3.1 Nota de transparência — imagens IA no portfólio

Se parte das fotos das 5 pastas for gerada por IA (origem: conversa ChatGPT), recomenda-se **não apresentá-las no Portfolio como casamentos reais realizados pela Maison Yasmini**. Uso seguro: heros, secções de venues e fundos editoriais. Para o Portfolio, priorizar fotos reais autorizadas assim que existirem. **Aguarda decisão da cliente.**

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

## 6. Decisões D1–D5 (Atualização V2)

Aplicados os defaults do documento `ATUALIZACAO-MAISON-YASMINI-V2.md` na ausência de resposta da cliente. Confirmar cada uma:

- [ ] **D1** Pacotes e preços removidos do Services e Home. Preço só aparece no FAQ ("planning fees start at 3,000€").
- [ ] **D2** Journal fora do menu principal, acessível pelo footer. Post "how-much-does-a-destination-wedding-cost" editado para alinhar com posicionamento de até 75 guests.
- [ ] **D3** FAQ e Process fora do menu principal, acessíveis pelo footer.
- [ ] **D4** Rota `/kind-words` criada com estado vazio elegante enquanto não houver testemunhos reais.
- [ ] **D5** Página `/portfolio` criada com 5 slots de amostra; expandir com 20–30 imagens autorizadas.

## 7. Política de privacidade (P3.4)

- Rota `/privacy` publicada com texto genérico de GDPR.
- Deve ser **revista por advogada/consultor jurídico** antes de considerar oficial.
- Confirmar: entidade responsável, prazo de retenção de dados, terceiros com quem se partilha (Formspree, hosting…).

## 8. Miscelânea

- Confirmar copy oficial da fundadora e da mission em `guide.md` — já usado no site.
- Confirmar plano de deploy (Vercel? Netlify?). Ambos os configs estão prontos.
- Confirmar se querem GA4/Plausible ou nenhum analytics no lançamento.
