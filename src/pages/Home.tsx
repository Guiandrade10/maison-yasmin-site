import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { imageUrls, weddingPackages, pilares, testimonials } from '@/data/content'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

/* ─── Ornamentos ─────────────────────────────────────────── */

function MYMonogram() {
  return (
    <svg
      width="160"
      height="160"
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer circle */}
      <circle cx="80" cy="80" r="76" stroke="#DCC7A1" strokeWidth="1.2" />
      {/* Inner circle */}
      <circle cx="80" cy="80" r="68" stroke="#DCC7A1" strokeWidth="0.5" />
      {/* Top ornament */}
      <path d="M80 4 L83 10 L80 7 L77 10 Z" fill="#DCC7A1" />
      {/* Bottom ornament */}
      <path d="M80 156 L83 150 L80 153 L77 150 Z" fill="#DCC7A1" />
      {/* Left ornament */}
      <path d="M4 80 L10 77 L7 80 L10 83 Z" fill="#DCC7A1" />
      {/* Right ornament */}
      <path d="M156 80 L150 77 L153 80 L150 83 Z" fill="#DCC7A1" />
      {/* Monogram text */}
      <text
        x="80"
        y="80"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Cinzel, Georgia, serif"
        fontSize="40"
        fontWeight="600"
        fill="#DCC7A1"
        letterSpacing="6"
      >
        MY
      </text>
    </svg>
  )
}

function Filete({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="h-px flex-1 bg-[#DCC7A1]" />
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
        <path d="M5 0L6.25 3.75L10 5L6.25 6.25L5 10L3.75 6.25L0 5L3.75 3.75Z" fill="#DCC7A1" />
      </svg>
      <div className="h-px flex-1 bg-[#DCC7A1]" />
    </div>
  )
}

/* ─── Ícones lineares dos pilares (SVG simples) ──────────── */

const pilarIcons: Record<string, JSX.Element> = {
  excelencia: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  proposito: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  elegancia: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  ),
  confianca: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  memorias: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
}

/* ─── Página ─────────────────────────────────────────────── */

export default function Home() {
  useDocumentTitle()

  return (
    <div>
      {/* ── 1. Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[rgb(var(--marfim))] pb-24 pt-16 text-center md:pb-32 md:pt-24">
        {/* Gradiente champanhe suave */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(220,199,161,0.22) 0%, transparent 72%)',
          }}
        />

        <Container className="relative">
          {/* Monograma */}
          <div className="flex justify-center">
            <MYMonogram />
          </div>

          {/* Nome */}
          <h1 className="mt-6 font-serif text-4xl font-normal tracking-[0.28em] text-[rgb(var(--azul-safira))] md:text-6xl">
            MAISON YASMINI
          </h1>
          <p className="mt-2 text-[10px] font-medium tracking-[0.42em] text-[rgb(var(--azul-claro))] md:text-xs">
            WEDDING PLANNER
          </p>

          {/* Filete */}
          <Filete className="mx-auto mt-8 max-w-xs" />

          {/* Tagline */}
          <p className="mx-auto mt-8 max-w-md font-serif text-lg font-normal italic text-[rgb(var(--azul-safira))] opacity-80 md:text-xl">
            "Onde cada detalhe conta uma história de amor."
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button to="/contacto" size="lg">
              Solicitar Proposta
            </Button>
            <Button to="/servicos" variant="secondary" size="lg">
              Ver Serviços
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-14 grid max-w-xl gap-4 sm:grid-cols-3">
            {[
              { label: 'A partir de', value: '3.000€' },
              { label: 'Convidados', value: '2 a 100+' },
              { label: 'Proposta', value: 'Personalizada' },
            ].map((item) => (
              <div
                key={item.label}
                className="min-w-0 overflow-hidden rounded-2xl bg-[rgba(241,230,200,0.6)] px-5 py-4 ring-1 ring-inset ring-[rgba(220,199,161,0.7)]"
              >
                <div className="text-[10px] tracking-[0.2em] text-[rgb(var(--azul-claro))]">
                  {item.label.toUpperCase()}
                </div>
                <div className="mt-2 break-words font-serif text-xl font-normal leading-tight text-[rgb(var(--azul-safira))]">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 2. Manifesto ────────────────────────────────────── */}
      <section className="bg-[rgb(var(--ouro-claro))] py-16 md:py-20">
        <Container className="text-center">
          <Filete className="mx-auto max-w-sm" />
          <blockquote className="mx-auto mt-8 max-w-2xl font-serif text-xl font-normal italic leading-relaxed text-[rgb(var(--azul-safira))] md:text-2xl">
            "Cada história merece ser planejada com excelência e lembrada para sempre."
          </blockquote>
          <cite className="mt-6 block text-[10px] not-italic tracking-[0.28em] text-[rgb(var(--azul-claro))]">
            MAISON YASMINI — WEDDING PLANNER
          </cite>
          <Filete className="mx-auto mt-8 max-w-sm" />
        </Container>
      </section>

      {/* ── 3. Sobre Yasmini ────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-12">
            {/* Imagem */}
            <div className="md:col-span-5">
              <div className="relative overflow-hidden rounded-[28px] ring-1 ring-inset ring-[rgba(220,199,161,0.6)]">
                <img
                  src={imageUrls.yasminiPortrait}
                  alt="Retrato de Yasmini"
                  className="h-[420px] w-full object-cover md:h-[520px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Texto */}
            <div className="md:col-span-7">
              <SectionHeading
                eyebrow="Sobre Yasmini"
                title="Mais de 20 anos de precisão ao serviço dos momentos mais importantes da sua vida."
              />
              <div className="mt-6 max-w-xl space-y-4 text-sm leading-relaxed text-[rgb(var(--azul-safira))] opacity-75">
                <p>
                  Yasmini vive no Algarve e traz para o planejamento de casamentos a mesma estrutura,
                  clareza e confiança que construiu ao longo de duas décadas no universo jurídico.
                </p>
                <p>
                  A Maison Yasmini nasceu da crença de que o amor merece beleza, autenticidade e momentos
                  inesquecíveis — planejados com elegância e vividos com plenitude.
                </p>
              </div>

              {/* Valores preview */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { title: 'Perspetiva local', body: 'Conhecimento profundo do Algarve, dos melhores espaços e dos fornecedores certos.' },
                  { title: 'Processo claro', body: 'Um planeamento calmo para casais que precisam de decisões simples e informadas.' },
                  { title: 'Atenção pessoal', body: 'Uma abordagem boutique que prioriza o ajuste, o detalhe e a autenticidade.' },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-[rgba(241,230,200,0.5)] p-5 ring-1 ring-inset ring-[rgba(220,199,161,0.6)]"
                  >
                    <div className="font-serif text-lg font-normal leading-snug text-[rgb(var(--azul-safira))]">
                      {item.title}
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-[rgb(var(--azul-safira))] opacity-70">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button to="/sobre" variant="ghost">
                  Conhecer a história <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. Serviços ─────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid items-end gap-8 md:grid-cols-12">
            <SectionHeading
              className="md:col-span-7"
              eyebrow="Serviços"
              title="Pacotes pensados para cada dimensão de celebração."
              description="Pequenos, médios e grandes casamentos têm ritmos de planeamento diferentes. A nossa oferta reflete isso com clareza."
            />
            <div className="md:col-span-5 md:justify-self-end">
              <Button to="/servicos" variant="secondary">
                Explorar pacotes <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {weddingPackages.map((pkg) => (
              <div
                key={pkg.slug}
                className="group rounded-[28px] bg-[rgb(var(--marfim))] p-7 ring-1 ring-[rgba(220,199,161,0.8)] transition-all duration-200 hover:-translate-y-0.5 hover:ring-[rgb(var(--dourado-champanhe))]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[10px] tracking-[0.24em] text-[rgb(var(--azul-claro))]">
                      {pkg.guestRange.toUpperCase()}
                    </div>
                    <div className="mt-3 font-serif text-xl font-normal leading-snug text-[rgb(var(--azul-safira))]">
                      {pkg.title}
                    </div>
                  </div>
                  <div className="shrink-0 rounded-full bg-[rgba(241,230,200,0.8)] px-3 py-1.5 text-[10px] font-medium tracking-wider text-[rgb(var(--azul-safira))]">
                    {pkg.priceFrom}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--azul-safira))] opacity-70">
                  {pkg.description}
                </p>
                <div className="mt-6 space-y-2.5">
                  {pkg.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-[rgb(var(--azul-safira))] opacity-75">
                      <span className="mt-1.5 h-1 w-4 shrink-0 border-t border-[#DCC7A1]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-[rgba(241,230,200,0.5)] px-6 py-5 text-sm leading-relaxed text-[rgb(var(--azul-safira))] opacity-80 ring-1 ring-inset ring-[rgba(220,199,161,0.6)]">
            Para casamentos com mais de 100 convidados, a Maison Yasmini prepara uma proposta personalizada
            com base no espaço, logística, equipa e necessidades de produção.
          </div>
        </Container>
      </section>

      {/* ── 5. Galeria ──────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Portfólio"
            title="Cada casamento, uma história única."
            description="Momentos captados com naturalidade, elegância e atenção ao que realmente importa."
            className="mx-auto max-w-xl"
          />

          <div className="mt-12 grid gap-4 md:grid-cols-12">
            <div className="group relative overflow-hidden rounded-[24px] md:col-span-7">
              <img
                src={imageUrls.hero}
                alt="Casamento no Algarve"
                className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-[420px]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-[rgba(13,30,79,0)] transition-colors duration-300 group-hover:bg-[rgba(13,30,79,0.25)]" />
            </div>
            <div className="grid gap-4 md:col-span-5">
              <div className="group relative overflow-hidden rounded-[24px]">
                <img
                  src={imageUrls.algarveLandscape}
                  alt="Paisagem do Algarve"
                  className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-[rgba(13,30,79,0)] transition-colors duration-300 group-hover:bg-[rgba(13,30,79,0.25)]" />
              </div>
              <div className="group relative overflow-hidden rounded-[24px]">
                <img
                  src={imageUrls.detail}
                  alt="Detalhe de casamento"
                  className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-[rgba(13,30,79,0)] transition-colors duration-300 group-hover:bg-[rgba(13,30,79,0.25)]" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 6. Pilares ──────────────────────────────────────── */}
      <section className="bg-[rgb(var(--ouro-claro))] py-20 md:py-28">
        <Container>
          <div className="text-center">
            <p className="text-[10px] font-medium tracking-[0.3em] text-[rgb(var(--azul-claro))]">
              OS NOSSOS VALORES
            </p>
            <Filete className="mx-auto mt-6 max-w-xs" />
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-5">
            {pilares.map((p) => (
              <div key={p.id} className="text-center">
                <div className="flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(13,30,79,0.06)] text-[rgb(var(--azul-safira))]">
                    {pilarIcons[p.id]}
                  </div>
                </div>
                <div className="mt-4 font-serif text-base font-normal tracking-wide text-[rgb(var(--azul-safira))]">
                  {p.title}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[rgb(var(--azul-safira))] opacity-65">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 7. Depoimentos ──────────────────────────────────── */}
      <section className="bg-[rgb(var(--marfim))] py-20 md:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Depoimentos"
            title="O que os nossos casais dizem."
            className="mx-auto max-w-lg"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="relative rounded-[28px] bg-[rgb(var(--ouro-rose))] p-8 ring-1 ring-[rgba(220,199,161,0.7)]"
              >
                {/* Aspas ornamentais */}
                <span
                  className="absolute left-7 top-5 font-serif text-6xl font-normal leading-none text-[rgba(220,199,161,0.8)]"
                  aria-hidden="true"
                >
                  "
                </span>
                <blockquote className="relative mt-6 text-sm leading-relaxed text-[rgb(var(--azul-safira))]">
                  {t.text}
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-[rgba(220,199,161,0.6)]" />
                  <div className="text-right">
                    <div className="font-serif text-sm font-normal text-[rgb(var(--azul-safira))]">{t.name}</div>
                    <div className="text-[10px] tracking-[0.14em] text-[rgb(var(--azul-claro))]">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 8. CTA ──────────────────────────────────────────── */}
      <section className="bg-[rgb(var(--azul-safira))] py-24 md:py-32">
        <Container className="text-center">
          <p className="text-[10px] font-medium tracking-[0.3em] text-[rgb(var(--azul-claro))]">
            COMECE SUA HISTÓRIA
          </p>
          <h2 className="mx-auto mt-5 max-w-xl font-serif text-3xl font-normal tracking-wide text-[rgb(var(--marfim))] md:text-4xl">
            Cada celebração merece ser única e planejada com excelência.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-[rgb(var(--azul-claro))]">
            Partilhe a sua data, o número de convidados e a celebração que imagina.
            Preparamos uma proposta à sua medida.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button to="/contacto" variant="gold" size="lg">
              Solicitar Proposta
            </Button>
            <Button to="/servicos" variant="ghost" size="lg" className="text-[rgb(var(--azul-claro))] hover:bg-[rgba(167,183,209,0.1)]">
              Ver pacotes <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
