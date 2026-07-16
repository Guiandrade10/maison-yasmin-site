# Maison Yasmini — Pendências da Cliente (consolidado go-live)

> Documento para enviar à cliente. Enquanto os itens 🔴 não chegarem, o site pode ir ao ar, **mas nenhum canal de contacto funciona** — ou seja, não gera clientes.

**Legenda:** 🔴 bloqueia conversão/publicação · 🟠 recomendado antes do lançamento · 🟡 primeiros 30 dias

---

## 🔴 Canais de contacto (o site não converte sem isto)

| # | Item | O que precisamos | Onde entra |
| --- | --- | --- | --- |
| 1 | **Número de WhatsApp** | Número em formato internacional, sem + e sem espaços (ex.: `351912345678`) | Botões de contacto, footer, página Contact |
| 2 | **E-mail de contacto** | Confirmar que `hello@maisonyasmini.com` existe e está a ser lido (ou indicar o correto) | Formulário, fallback "Prefer email?", JSON-LD |
| 3 | **Formulário** | Autorização para criarmos conta Formspree (grátis) em nome da Maison Yasmini, ou credenciais de fornecedor preferido | Página Contact — hoje o envio devolve erro |
| 4 | **Instagram real** | O @ da conta | Header, footer e dados estruturados |

## 🔴 Domínio

| # | Item | O que precisamos |
| --- | --- | --- |
| 5 | **Domínio final** | Confirmar `maisonyasmini.com` (ou .pt/.co) e acesso ao registrador para apontar DNS à Vercel. Todo o SEO (canonicals, sitemap, partilhas sociais) referencia este domínio — partilhas em redes sociais só mostram imagem depois de o domínio estar ativo |

## 🟠 Fotografia

| # | Item | O que precisamos |
| --- | --- | --- |
| 6 | **Retrato profissional da Yasmini** | Foto vertical (~1200×1500 px ou maior) para a página About — hoje usa foto temporária |
| 7 | **Hero em alta resolução** | O mesmo enquadramento da foto atual (casal ao pôr do sol) em ≥1920 px de largura — a versão atual (1360 px) fica abaixo do ideal em ecrãs grandes |
| 8 | **Portfólio expandido** | Seleção de 20–30 fotos autorizadas para o grid do Portfolio (hoje: 5 de amostra) |
| 9 | **Autorizações escritas** | Consentimento dos casais fotografados para uso das imagens online |
| 10 | **Decisão sobre imagens IA** | O documento de copy confirma que parte das fotos do portfólio foi gerada por IA (ChatGPT). Recomendação mantida: não apresentar no Portfolio como casamentos reais realizados pela Maison Yasmini — uso seguro em heros, secções de venues e fundos editoriais. Aguarda decisão formal da cliente |

## 🟠 Versão portuguesa

| # | Item | O que precisamos |
| --- | --- | --- |
| 11 | **Copy PT das páginas restantes** | ✅ Recebido (2026-07): Início, Serviços + 3 verticais, Espaços + 4 categorias — será implementado verbatim. Falta copy PT para: Sobre Nós, Porque Maison Yasmini, Processo, FAQ, Contacte-nos e textos legais. Enquanto não chega, publicamos traduções provisórias do EN aprovado, sinalizadas para revisão da cliente |
| 11b | **CTA principal** | A consultora recomendou "Begin Your Wedding Journey" no site EN — confirmar adoção e aprovar o equivalente PT (proposta: "Comecem a Vossa Jornada") |

## 🟡 Pós-lançamento (primeiros 30 dias)

| # | Item | Nota |
| --- | --- | --- |
| 12 | Acesso ao Google Search Console | Criamos e enviamos convite — precisamos apenas de um e-mail Google da cliente para partilhar a propriedade |
| 13 | Google Business Profile | Recomendado para captação local "wedding planner Algarve"; requer morada ou área de serviço |
| 14 | Testemunhos reais | A secção Kind Words está desativada (`SHOW_TESTIMONIALS = false`) até existirem testemunhos autorizados |
