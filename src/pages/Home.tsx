import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { imageAssets, weddingPackages, pilares, testimonials } from '@/data/content'
import { useSeo } from '@/hooks/useSeo'

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
      <circle cx="80" cy="80" r="76" stroke="#DCC7A1" strokeWidth="1.2" />
      <circle cx="80" cy="80" r="68" stroke="#DCC7A1" strokeWidth="0.5" />
      <path d="M80 4 L83 10 L80 7 L77 10 Z" fill="#DCC7A1" />
      <path d="M80 156 L83 150 L80 153 L77 150 Z" fill="#DCC7A1" />
      <path d="M4 80 L10 77 L7 80 L10 83 Z" fill="#DCC7A1" />
      <path d="M156 80 L150 77 L153 80 L150 83 Z" fill="#DCC7A1" />
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

/* ─── Ícones dos pilares ─────────────────────────────────── */

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
  useSeo({
    path: '/',
    description:
      'Boutique wedding planner in the Algarve, Portugal. Intimate destination weddings for 2 to 100+ guests, planned with calm elegance and structure.',
  })

  return (
    <div>
      {/* ── 1. Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[rgb(var(--marfim))] pb-20 pt-16 md:pb-28 md:pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(220,199,161,0.22) 0%, transparent 72%)',
          }}
        />

        <Container className="relative">
          <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
            <div className="text-center md:col-span-6 md:text-left">
              <div className="flex justify-center md:justify-start">
                <div className="scale-75 md:scale-90">
                  <MYMonogram />
                </div>
              </div>

              <p className="mt-4 text-[11px] font-medium tracking-[0.32em] text-azul-real md:mt-6 md:text-xs">
                MAISON YASMINI · WEDDING PLANNER
              </p>

              <h1 className="mt-5 font-serif text-4xl font-normal leading-[1.06] tracking-[0.18em] text-[rgb(var(--azul-safira))] md:text-6xl md:tracking-[0.24em]">
                Intimate Destination Weddings in Algarve
              </h1>

              <Filete className="mx-auto mt-8 max-w-xs md:mx-0" />

              <p className="mx-auto mt-8 max-w-md font-serif text-lg font-normal italic text-[rgb(var(--azul-safira))] opacity-80 md:mx-0 md:text-xl">
                "Where every detail tells a love story."
              </p>

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
                <Button to="/contact" size="lg">
                  Request a Proposal
                </Button>
                <Button to="/services" variant="secondary" size="lg">
                  View Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="mx-auto mt-12 grid max-w-xl gap-4 sm:grid-cols-3 md:mx-0">
                {[
                  { label: 'Based in', value: 'Algarve' },
                  { label: 'Weddings', value: '2 to 100+' },
                  { label: 'Approach', value: 'Boutique & personal' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="min-w-0 overflow-hidden rounded-2xl bg-[rgba(241,230,200,0.6)] px-5 py-4 ring-1 ring-inset ring-[rgba(220,199,161,0.7)]"
                  >
                    <div className="text-[11px] tracking-[0.22em] text-azul-real md:text-xs">
                      {item.label.toUpperCase()}
                    </div>
                    <div className="mt-2 break-words font-serif text-lg font-normal leading-tight text-[rgb(var(--azul-safira))] md:text-xl">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="relative overflow-hidden rounded-[28px] ring-1 ring-inset ring-[rgba(220,199,161,0.6)]">
                <img
                  src={imageAssets.hero.src}
                  srcSet={imageAssets.hero.srcSet}
                  sizes={imageAssets.hero.sizes}
                  alt="Wedding table set for an intimate celebration in the Algarve"
                  width={imageAssets.hero.width}
                  height={imageAssets.hero.height}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-[360px] w-full object-cover md:h-[560px]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Manifesto ────────────────────────────────────── */}
      <section className="bg-[rgb(var(--ouro-claro))] py-16 md:py-20">
        <Container className="text-center">
          <Filete className="mx-auto max-w-sm" />
          <blockquote className="mx-auto mt-8 max-w-2xl font-serif text-xl font-normal italic leading-relaxed text-[rgb(var(--azul-safira))] md:text-2xl">
            "Every story deserves to be planned with excellence and remembered forever."
          </blockquote>
          <cite className="mt-6 block text-[10px] not-italic tracking-[0.28em] text-[rgb(var(--azul-claro))]">
            MAISON YASMINI · WEDDING PLANNER
          </cite>
          <Filete className="mx-auto mt-8 max-w-sm" />
        </Container>
      </section>

      {/* ── 3. About Yasmini ────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="relative overflow-hidden rounded-[28px] ring-1 ring-inset ring-[rgba(220,199,161,0.6)]">
                <img
                  src={imageAssets.yasminiPortrait.src}
                  srcSet={imageAssets.yasminiPortrait.srcSet}
                  sizes={imageAssets.yasminiPortrait.sizes}
                  alt="Portrait of Yasmini, founder of Maison Yasmini"
                  className="h-[420px] w-full object-cover md:h-[520px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="md:col-span-7">
              <SectionHeading
                eyebrow="About Yasmini"
                title="Over twenty years of precision, now dedicated to the most important day of your life."
              />
              <div className="mt-6 max-w-xl space-y-4 text-sm leading-relaxed text-[rgb(var(--azul-safira))] opacity-75">
                <p>
                  Yasmini lives in the Algarve. She brings to wedding planning the same structure,
                  clarity and reliability she built over two decades in the legal field.
                </p>
                <p>
                  Maison Yasmini was born from one belief: love deserves beauty, authenticity and
                  moments worth remembering. Planned with elegance, lived fully.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { title: 'Local Knowledge', body: 'Deep knowledge of the Algarve: the right venues, the right suppliers and the timing that makes it all work.' },
                  { title: 'A Clear Process', body: 'Calm, structured planning for couples who need decisions to feel simple and well-supported.' },
                  { title: 'Personal Attention', body: 'A boutique approach that prioritizes fit, detail and a wedding that feels like you.' },
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
                <Button to="/about" variant="ghost">
                  Read the story <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. Services ─────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid items-end gap-8 md:grid-cols-12">
            <SectionHeading
              className="md:col-span-7"
              eyebrow="Services"
              title="Packages designed around the size and feeling of your celebration."
              description="Small, medium and large weddings need different planning rhythms. Our packages reflect that, clearly."
            />
            <div className="md:col-span-5 md:justify-self-end">
              <Button to="/services" variant="secondary">
                Explore packages <ArrowRight className="ml-2 h-4 w-4" />
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
            Weddings with more than 100 guests need a custom proposal. We build it around the venue,
            logistics, team size and production needs.
          </div>
        </Container>
      </section>

      {/* ── 5. Gallery ──────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Portfolio"
            title="Each wedding, a story of its own."
            description="Moments captured with natural light, restraint and attention to what truly matters."
            className="mx-auto max-w-xl"
          />

          <div className="mt-12 grid gap-4 md:grid-cols-12">
            <div className="group relative overflow-hidden rounded-[24px] md:col-span-7">
              <img
                src={imageAssets.hero.src}
                srcSet={imageAssets.hero.srcSet}
                sizes={imageAssets.hero.sizes}
                alt="Wedding ceremony in the Algarve"
                className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-[420px]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-[rgba(13,30,79,0)] transition-colors duration-300 group-hover:bg-[rgba(13,30,79,0.25)]" />
            </div>
            <div className="grid gap-4 md:col-span-5">
              <div className="group relative overflow-hidden rounded-[24px]">
                <img
                  src={imageAssets.algarveLandscape.src}
                  srcSet={imageAssets.algarveLandscape.srcSet}
                  sizes={imageAssets.algarveLandscape.sizes}
                  alt="Algarve coastline at golden hour"
                  className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-[rgba(13,30,79,0)] transition-colors duration-300 group-hover:bg-[rgba(13,30,79,0.25)]" />
              </div>
              <div className="group relative overflow-hidden rounded-[24px]">
                <img
                  src={imageAssets.detail.src}
                  srcSet={imageAssets.detail.srcSet}
                  sizes={imageAssets.detail.sizes}
                  alt="Wedding detail shot"
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

      {/* ── 6. Pillars ──────────────────────────────────────── */}
      <section className="bg-[rgb(var(--ouro-claro))] py-20 md:py-28">
        <Container>
          <div className="text-center">
            <p className="text-[10px] font-medium tracking-[0.3em] text-[rgb(var(--azul-claro))]">
              OUR VALUES
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

      {/* ── 7. Testimonials ─────────────────────────────────── */}
      <section className="bg-[rgb(var(--marfim))] py-20 md:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Testimonials"
            title="What our couples say."
            className="mx-auto max-w-lg"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="relative rounded-[28px] bg-[rgb(var(--ouro-rose))] p-8 ring-1 ring-[rgba(220,199,161,0.7)]"
              >
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
            BEGIN YOUR STORY
          </p>
          <h2 className="mx-auto mt-5 max-w-xl font-serif text-3xl font-normal tracking-wide text-[rgb(var(--marfim))] md:text-4xl">
            Every celebration deserves to be one of a kind.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-[rgb(var(--azul-claro))]">
            Share your date, guest count and the vision you have in mind. We will come back with
            a clear proposal built around you.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button to="/contact" variant="gold" size="lg">
              Request a Proposal
            </Button>
            <Button to="/services" variant="ghost" size="lg" className="text-[rgb(var(--azul-claro))] hover:bg-[rgba(167,183,209,0.1)]">
              View packages <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
