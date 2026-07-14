import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import {
  imageAssets,
  pilares,
  serviceVerticals,
  venueCategories,
  testimonials,
  SHOW_TESTIMONIALS,
} from '@/data/content'
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
      className="text-dourado"
    >
      <circle cx="80" cy="80" r="76" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="80" cy="80" r="68" stroke="currentColor" strokeWidth="0.5" />
      <path d="M80 4 L83 10 L80 7 L77 10 Z" fill="currentColor" />
      <path d="M80 156 L83 150 L80 153 L77 150 Z" fill="currentColor" />
      <path d="M4 80 L10 77 L7 80 L10 83 Z" fill="currentColor" />
      <path d="M156 80 L150 77 L153 80 L150 83 Z" fill="currentColor" />
      <text
        x="80"
        y="80"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Cinzel, Georgia, serif"
        fontSize="40"
        fontWeight="600"
        fill="currentColor"
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
      <div className="h-px flex-1 bg-dourado" />
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="text-dourado">
        <path d="M5 0L6.25 3.75L10 5L6.25 6.25L5 10L3.75 6.25L0 5L3.75 3.75Z" fill="currentColor" />
      </svg>
      <div className="h-px flex-1 bg-dourado" />
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

const promiseBullets = [
  'Personalised planning with complete dedication.',
  'Exclusive intimate weddings for up to 75 guests.',
  'Elegant and timeless design.',
  'A calm, discreet and highly professional presence.',
]

/* ─── Página ─────────────────────────────────────────────── */

export default function Home() {
  useSeo({
    path: '/',
    description:
      'Luxury intimate weddings and destination weddings in Portugal for up to 75 guests, beautifully curated around your story.',
  })

  return (
    <div>
      {/* ── 1. Hero (editorial full-bleed) ─────────────────── */}
      <section className="relative isolate min-h-[85svh] w-full overflow-hidden md:min-h-[92svh]">
        <img
          src={imageAssets.hero.src}
          srcSet={imageAssets.hero.srcSet}
          sizes="100vw"
          alt="Couple at sunset overlooking the Atlantic on the Algarve coast, the setting for an intimate destination wedding"
          width={imageAssets.hero.width}
          height={imageAssets.hero.height}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(15,26,54,0.55) 0%, rgba(15,26,54,0.25) 45%, rgba(15,26,54,0.55) 100%)',
          }}
        />

        <div className="relative z-10 flex min-h-[85svh] items-center justify-center px-6 py-24 text-center md:min-h-[92svh] md:py-28">
          <div className="mx-auto max-w-3xl text-[rgb(var(--marfim))]">
            <div className="flex justify-center text-[rgb(var(--dourado-champanhe))]">
              <div className="scale-75 md:scale-90">
                <MYMonogram />
              </div>
            </div>

            <p className="mt-4 text-[11px] font-medium tracking-[0.32em] text-[rgb(var(--marfim))]/85 md:mt-6 md:text-xs">
              MAISON YASMINI · WEDDING PLANNER
            </p>

            <h1 className="mt-5 font-serif text-3xl font-normal leading-[1.08] tracking-[0.08em] text-[rgb(var(--marfim))] sm:text-4xl md:mt-6 md:text-6xl md:tracking-[0.14em]">
              Destination Weddings & Event Planning in the Algarve
            </h1>

            <Filete className="mx-auto mt-8 max-w-xs text-[rgb(var(--dourado-champanhe))]" />

            <p className="mx-auto mt-8 max-w-md font-serif text-base font-normal italic text-[rgb(var(--marfim))]/90 md:text-lg">
              Luxury intimate destination weddings in Portugal, beautifully curated around your story.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button to="/contact" variant="gold" size="lg">
                Begin Your Wedding Journey
              </Button>
              <Button
                to="/venues"
                variant="ghost"
                size="lg"
                className="border border-[rgba(250,247,240,0.55)] text-[rgb(var(--marfim))] hover:bg-[rgba(250,247,240,0.12)]"
              >
                Explore Our Venues
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <a
          href="#intimate-weddings-intro"
          aria-label="Scroll to next section"
          className="absolute inset-x-0 bottom-6 z-10 mx-auto flex h-10 w-10 items-center justify-center text-[rgb(var(--dourado-champanhe))] opacity-80 transition hover:opacity-100 motion-safe:animate-[pulse_2.4s_ease-in-out_infinite]"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>

      {/* ── 2. Intimate Weddings intro ─────────────────────── */}
      <section id="intimate-weddings-intro" className="bg-[rgb(var(--ouro-claro))] py-16 md:py-20">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="MAISON YASMINI"
            title="Intimate Weddings. Extraordinary Experiences."
            className="mx-auto max-w-3xl"
          />
          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
            <p>
              At Maison Yasmini, we believe the most unforgettable weddings are not defined by the
              number of guests, but by the emotions they create and the memories they leave behind.
            </p>
            <p>
              We specialise in designing and coordinating exclusive intimate weddings and destination
              weddings in Portugal, thoughtfully created for celebrations of{' '}
              <span className="font-medium">up to 75 guests</span>. This allows us to provide a highly
              personalised experience, where every detail receives the care, creativity and attention
              it deserves.
            </p>
            <p>
              Luxury, to us, is not about extravagance. It is about exclusivity, authenticity and the
              freedom to celebrate surrounded only by the people who matter most.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 3. Services cards ──────────────────────────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Services"
            title="Three ways we shape your celebration."
            description="From full wedding planning to bespoke design, every service is delivered with the same care and attention."
            className="mx-auto max-w-2xl"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {serviceVerticals.map((v) => (
              <Link
                key={v.slug}
                to={`/services#${v.slug}`}
                className="group flex flex-col overflow-hidden rounded-[28px] bg-[rgb(var(--marfim))] ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.75)] no-underline transition hover:-translate-y-0.5 hover:ring-[rgb(var(--dourado-champanhe))]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={v.image.src}
                    srcSet={v.image.srcSet}
                    sizes={v.image.sizes}
                    alt={v.title}
                    className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="font-serif text-xl leading-tight text-[rgb(var(--azul-safira))]">
                    {v.title}
                  </div>
                  <div className="mt-2 text-[11px] tracking-[0.18em] text-azul-real md:text-xs">
                    {v.subtitle.toUpperCase()}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--azul-safira))] opacity-75">
                    {v.intro[0]}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-[rgb(var(--azul-safira))]">
                    DISCOVER MORE <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 4. Signature Venues ────────────────────────────── */}
      <section className="bg-[rgb(var(--ouro-claro))] py-20 md:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Wedding Venues in Portugal"
            title="Explore Our Signature Wedding Venues"
            className="mx-auto max-w-2xl"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {venueCategories.map((cat) => (
              <div
                key={cat.slug}
                className="group overflow-hidden rounded-[28px] bg-[rgb(var(--marfim))] ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.75)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={cat.hero.src}
                    srcSet={cat.hero.srcSet}
                    sizes={cat.hero.sizes}
                    alt={cat.title}
                    className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-7">
                  <div className="font-serif text-xl leading-tight text-[rgb(var(--azul-safira))]">
                    {cat.title}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--azul-safira))] opacity-75">
                    {cat.cardBlurb}
                  </p>
                  <div className="mt-5">
                    <Button to={`/venues/${cat.slug}`} variant="ghost" size="sm">
                      Discover More <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 5. Why Maison Yasmini teaser ───────────────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-6">
              <SectionHeading
                eyebrow="The Maison Yasmini way"
                title="Because your wedding deserves more than planning."
                description="A boutique studio that intentionally works with a limited number of couples each year, so every celebration receives our full attention."
              />
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
                {promiseBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--dourado-champanhe))]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button to="/why-maison-yasmini" variant="secondary">
                  Discover the Maison Yasmini experience <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="relative overflow-hidden rounded-[28px] ring-1 ring-inset ring-[rgba(220,199,161,0.6)]">
                <img
                  src={imageAssets.detail.src}
                  srcSet={imageAssets.detail.srcSet}
                  sizes={imageAssets.detail.sizes}
                  alt="Details of an elegant wedding table set for an intimate celebration"
                  className="h-[420px] w-full object-cover md:h-[520px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 6. Pillars ─────────────────────────────────────── */}
      <section className="bg-[rgb(var(--ouro-claro))] py-20 md:py-28">
        <Container>
          <div className="text-center">
            <p className="text-[11px] font-medium tracking-[0.24em] text-azul-real md:text-xs md:tracking-[0.3em]">
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

      {/* ── 7. Testimonials (gated) ────────────────────────── */}
      {SHOW_TESTIMONIALS && (
        <section className="bg-[rgb(var(--marfim))] py-20 md:py-28">
          <Container>
            <SectionHeading
              align="center"
              eyebrow="Kind Words"
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
                      <div className="text-[11px] tracking-[0.14em] text-azul-real md:text-xs">{t.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ── 8. CTA ─────────────────────────────────────────── */}
      <section className="bg-[rgb(var(--azul-safira))] py-24 md:py-32">
        <Container className="text-center">
          <p className="text-[11px] font-medium tracking-[0.24em] text-[rgb(var(--azul-claro))] md:text-xs md:tracking-[0.3em]">
            BEGIN YOUR STORY
          </p>
          <h2 className="mx-auto mt-5 max-w-xl font-serif text-3xl font-normal tracking-wide text-[rgb(var(--marfim))] md:text-4xl">
            Every celebration deserves to be one of a kind.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-[rgb(var(--azul-claro))]">
            Share your date, guest count and the vision you have in mind. We will come back with a
            clear proposal built around you.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button to="/contact" variant="gold" size="lg">
              Begin Your Wedding Journey
            </Button>
            <Button to="/venues" variant="ghost" size="lg" className="text-[rgb(var(--azul-claro))] hover:bg-[rgba(167,183,209,0.1)]">
              Explore our venues <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
