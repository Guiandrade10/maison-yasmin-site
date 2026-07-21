import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { venueCategories, type VenueCategorySlug } from '@/data/content'
import { useSeo } from '@/hooks/useSeo'
import { useLang } from '@/i18n/LangContext'
import { VENUE_SLUG_PT_TO_EN } from '@/i18n/routes'
import NotFound from '@/pages/NotFound'

const VALID_SLUGS: VenueCategorySlug[] = [
  'luxury-resorts',
  'private-villas',
  'exclusive-restaurants',
  'country-estates',
]

export default function VenueCategory() {
  const { content, localizePath, lang } = useLang()
  const params = useParams<{ slug: string }>()

  // Translate PT slug to canonical EN slug when needed.
  const rawSlug = params.slug
  const canonicalSlug =
    lang === 'pt' && rawSlug && VENUE_SLUG_PT_TO_EN[rawSlug]
      ? (VENUE_SLUG_PT_TO_EN[rawSlug] as VenueCategorySlug)
      : (rawSlug as VenueCategorySlug | undefined)

  const isValid = canonicalSlug ? VALID_SLUGS.includes(canonicalSlug) : false
  const legacy = isValid ? venueCategories.find((c) => c.slug === canonicalSlug)! : undefined
  const copy = isValid && canonicalSlug ? content.venues.categories[canonicalSlug] : undefined
  const t = content.venues.categoryPage

  useSeo({
    title: copy ? `${copy.seoTitle} · Maison Yasmini` : content.seo.venues.title,
    path: copy ? `/venues/${copy.slug}` : '/venues',
    description: copy ? copy.seoDescription : content.seo.venues.description,
  })

  if (!legacy || !copy || !canonicalSlug) return <NotFound />

  const others = venueCategories.filter((c) => c.slug !== canonicalSlug)
  const venuesPath = localizePath('/venues')
  const contactPath = localizePath('/contact')

  return (
    <div>
      <section className="pt-14 md:pt-20">
        <Container>
          <Link
            to={venuesPath}
            className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-[rgb(var(--azul-safira))] no-underline hover:text-[rgb(var(--azul-noite))]"
          >
            <ArrowLeft className="h-4 w-4" /> {t.backToVenues}
          </Link>

          <div className="mt-8 grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-6">
              <div className="text-xs font-medium tracking-[0.22em] text-azul-real md:text-sm">
                {t.venueEyebrow}
              </div>
              <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.06] tracking-wide text-[rgb(var(--azul-safira))] md:text-6xl">
                {copy.title}
              </h1>
              <div className="mt-4 font-serif text-lg italic text-[rgb(var(--azul-safira))] opacity-80 md:text-xl">
                {copy.tagline}
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="relative overflow-hidden rounded-[32px] ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)]">
                <img
                  src={legacy.hero.src}
                  srcSet={legacy.hero.srcSet}
                  sizes={legacy.hero.sizes}
                  alt={`${copy.title} ${t.heroAltSuffix}`}
                  className="h-[360px] w-full object-cover md:h-[480px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-16 md:mt-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-5 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
            {copy.paragraphs.map((p, i) => (
              <p key={`p-${i}`} className="text-left md:text-justify-hyphen">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {copy.subsections?.map((section, sIdx) => (
        <section key={`s-${sIdx}`} className="mt-16 md:mt-20">
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-2xl font-normal leading-snug tracking-wide text-[rgb(var(--azul-safira))] md:text-3xl">
                {section.title}
              </h2>
              <div className="mt-6 space-y-5 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
                {section.paragraphs.map((p, i) => (
                  <p key={`sp-${i}`} className="text-left md:text-justify-hyphen">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ))}

      {legacy.gallery.length > 0 && (
        <section className="mt-20 md:mt-24">
          <Container>
            <div className="grid gap-4 md:grid-cols-2">
              {legacy.gallery.map((img, i) => (
                <div
                  key={`g-${i}`}
                  className="overflow-hidden rounded-[24px] ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.6)]"
                >
                  <img
                    src={img.src}
                    srcSet={img.srcSet}
                    sizes={img.sizes}
                    alt={`${copy.title} ${t.galleryAltSuffix} ${i + 1}`}
                    className="h-[280px] w-full object-cover md:h-[360px]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {copy.signature && (
        <section className="mt-20 md:mt-24">
          <Container>
            <p className="mx-auto max-w-3xl text-center font-serif text-lg italic text-[rgb(var(--azul-safira))] md:text-xl">
              {copy.signature}
            </p>
          </Container>
        </section>
      )}

      <section className="mt-20 md:mt-24 bg-[rgb(var(--azul-safira))] py-20 md:py-24">
        <Container className="text-center">
          <h2 className="mx-auto max-w-xl font-serif text-3xl font-normal text-[rgb(var(--marfim))] md:text-4xl">
            {t.finalCtaTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[rgb(var(--azul-claro))]">
            {t.finalCtaDescription}
          </p>
          <div className="mt-10 flex justify-center">
            <Button to={contactPath} variant="gold" size="lg">
              {t.finalCtaButton} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-24">
        <Container>
          <div className="text-center">
            <div className="text-xs font-medium tracking-[0.22em] text-azul-real md:text-sm">
              {t.exploreOtherVenues}
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((c) => {
              const otherCopy = content.venues.categories[c.slug]
              return (
                <Link
                  key={c.slug}
                  to={localizePath(`/venues/${c.slug}`)}
                  className="group overflow-hidden rounded-[28px] bg-[rgb(var(--marfim))] ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.75)] no-underline transition hover:ring-[rgb(var(--dourado-champanhe))]"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={c.hero.src}
                      srcSet={c.hero.srcSet}
                      sizes={c.hero.sizes}
                      alt={otherCopy.title}
                      className="h-[200px] w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6">
                    <div className="font-serif text-lg text-[rgb(var(--azul-safira))]">{otherCopy.title}</div>
                    <div className="mt-2 text-[11px] tracking-[0.16em] text-azul-real">
                      {otherCopy.tagline.toUpperCase()}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </Container>
      </section>
    </div>
  )
}
