# Maison Yasmini — Pendências da Cliente (consolidado go-live)

> Documento para enviar à cliente. Enquanto os itens 🔴 não chegarem, o site pode ir ao ar, **mas nenhum canal de contacto funciona** — ou seja, não gera clientes.

**Legenda:** 🔴 bloqueia conversão/publicação · 🟠 recomendado antes do lançamento · 🟡 primeiros 30 dias

---

## 🔴 Canais de contacto (o site não converte sem isto)

| # | Item | O que precisamos | Onde entra |
| --- | --- | --- | --- |
| 2 | **E-mail de contacto** | Confirmar que `hello@maisonyasmini.com` existe e está a ser lido (ou indicar o correto) | Página Contact (alternativa), footer, JSON-LD |
| 4 | **Instagram real** | O @ da conta | Header, footer e dados estruturados |

> Itens resolvidos: **WhatsApp** (nº real da cliente `+351 967 870 651` integrado em botões, footer e página Contact) e **formulário** (substituído por captação direta via WhatsApp, com mensagem pré-preenchida por idioma).

## 🔴 Domínio

| # | Item | O que precisamos |
| --- | --- | --- |
| 5 | **Domínio final** | Confirmar `maisonyasmini.com` (ou .pt/.co) e acesso ao registrador para apontar DNS à Vercel. Todo o SEO (canonicals, sitemap, partilhas sociais) referencia este domínio — partilhas em redes sociais só mostram imagem depois de o domínio estar ativo |

## 🟠 Fotografia

| # | Item | O que precisamos |
| --- | --- | --- |
| 7 | **Hero em alta resolução** | O mesmo enquadramento da foto atual (casal ao pôr do sol) em ≥1920 px de largura — a versão atual (1360 px) fica abaixo do ideal em ecrãs grandes |
| 8 | **Portfólio expandido** | Seleção de 20–30 fotos autorizadas para o grid do Portfolio (hoje: 5 de amostra) |
| 9 | **Autorizações escritas** | Consentimento dos casais fotografados para uso das imagens online |
| 10 | **Decisão sobre imagens IA** | O documento de copy confirma que parte das fotos do portfólio foi gerada por IA (ChatGPT). Recomendação mantida: não apresentar no Portfolio como casamentos reais realizados pela Maison Yasmini — uso seguro em heros, secções de venues e fundos editoriais. Aguarda decisão formal da cliente |

## 🟠 Versão portuguesa

| # | Item | O que precisamos |
| --- | --- | --- |
| 11 | **Copy PT das páginas restantes** | ✅ Recebido (2026-07): Início, Serviços + 3 verticais, Espaços + 4 categorias — publicado verbatim em `/pt/*`. Falta copy PT para: Sobre Nós, Porque Maison Yasmini, Processo, FAQ, Contacte-nos e textos legais. Enquanto não chega, publicamos traduções provisórias do EN aprovado, sinalizadas no código com `// PROVISÓRIO — aguarda aprovação da cliente` e na secção do site com o flag `isProvisional` (invisível para o utilizador mas facilmente auditável) |
| 11b | **CTA principal** | A consultora recomendou "Begin Your Wedding Journey" no site EN — confirmar adoção e aprovar o equivalente PT (proposta: "Comecem a Vossa Jornada") |
| 11c | **Tradução dos posts do Journal** | Os dois posts permanecem em EN na v3 (v3.1 fará a tradução). O hub `/pt/journal` mostra uma nota curta em PT a explicar |

## 🟡 Pós-lançamento (primeiros 30 dias)

| # | Item | Nota |
| --- | --- | --- |
| 12 | Acesso ao Google Search Console | Criamos e enviamos convite — precisamos apenas de um e-mail Google da cliente para partilhar a propriedade |
| 13 | Google Business Profile | Recomendado para captação local "wedding planner Algarve"; requer morada ou área de serviço |
| 14 | Testemunhos reais | A secção Kind Words está desativada (`SHOW_TESTIMONIALS = false`) até existirem testemunhos autorizados |
| 15 | Revisão jurídica da Política de Privacidade | O texto EN e PT em `/privacy` (`/pt/privacidade`) é um rascunho técnico que deve ser validado por advogada familiarizada com RGPD antes de considerar oficial |
