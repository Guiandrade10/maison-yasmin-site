import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { venueCategories, type VenueCategorySlug } from '@/data/content'
import { useSeo } from '@/hooks/useSeo'
import NotFound from '@/pages/NotFound'

const VALID_SLUGS: VenueCategorySlug[] = [
  'luxury-resorts',
  'private-villas',
  'exclusive-restaurants',
  'country-estates',
]

const seoBySlug: Record<VenueCategorySlug, { title: string; description: string }> = {
  'luxury-resorts': {
    title: 'Luxury Resorts & Boutique Hotels',
    description:
      'Where luxury meets the ocean: prestigious Algarve resorts for unforgettable celebrations.',
  },
  'private-villas': {
    title: 'Private Villas',
    description: 'Exclusive privacy and timeless elegance for bespoke Algarve weddings.',
  },
  'exclusive-restaurants': {
    title: 'Exclusive Restaurants',
    description: 'Fine dining and exceptional celebrations in the Algarve’s most remarkable settings.',
  },
  'country-estates': {
    title: 'Country Estates & Vineyards',
    description: 'Authentic Portuguese elegance among vineyards, olive groves and gardens.',
  },
}

export default function VenueCategory() {
  const params = useParams<{ slug: string }>()
  const slug = params.slug as VenueCategorySlug | undefined
  const isValid = slug ? VALID_SLUGS.includes(slug) : false
  const category = isValid ? venueCategories.find((c) => c.slug === slug)! : undefined

  useSeo({
    title: category ? `${seoBySlug[category.slug].title} · Maison Yasmini` : 'Venue',
    path: category ? `/venues/${category.slug}` : '/venues',
    description: category ? seoBySlug[category.slug].description : undefined,
  })

  if (!category) return <NotFound />

  const others = venueCategories.filter((c) => c.slug !== category.slug)

  return (
    <div>
      <section className="pt-14 md:pt-20">
        <Container>
          <Link
            to="/venues"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-[rgb(var(--azul-safira))] no-underline hover:text-[rgb(var(--azul-noite))]"
          >
            <ArrowLeft className="h-4 w-4" /> BACK TO VENUES
          </Link>

          <div className="mt-8 grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-6">
              <div className="text-xs font-medium tracking-[0.22em] text-azul-real md:text-sm">
                VENUE
              </div>
              <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.06] tracking-wide text-[rgb(var(--azul-safira))] md:text-6xl">
                {category.title}
              </h1>
              <div className="mt-4 font-serif text-lg italic text-[rgb(var(--azul-safira))] opacity-80 md:text-xl">
                {category.tagline}
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="relative overflow-hidden rounded-[32px] ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)]">
                <img
                  src={category.hero.src}
                  srcSet={category.hero.srcSet}
                  sizes={category.hero.sizes}
                  alt={`${category.title} venue in the Algarve`}
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
            {category.paragraphs.map((p, i) => (
              <p key={`p-${i}`}>{p}</p>
            ))}
          </div>
        </Container>
      </section>

      {category.subsections?.map((section, sIdx) => (
        <section key={`s-${sIdx}`} className="mt-16 md:mt-20">
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-2xl font-normal leading-snug tracking-wide text-[rgb(var(--azul-safira))] md:text-3xl">
                {section.title}
              </h2>
              <div className="mt-6 space-y-5 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
                {section.paragraphs.map((p, i) => (
                  <p key={`sp-${i}`}>{p}</p>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ))}

      {category.gallery.length > 0 && (
        <section className="mt-20 md:mt-24">
          <Container>
            <div className="grid gap-4 md:grid-cols-2">
              {category.gallery.map((img, i) => (
                <div
                  key={`g-${i}`}
                  className="overflow-hidden rounded-[24px] ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.6)]"
                >
                  <img
                    src={img.src}
                    srcSet={img.srcSet}
                    sizes={img.sizes}
                    alt={`${category.title} inspiration ${i + 1}`}
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

      {category.signature && (
        <section className="mt-20 md:mt-24">
          <Container>
            <p className="mx-auto max-w-3xl text-center font-serif text-lg italic text-[rgb(var(--azul-safira))] md:text-xl">
              {category.signature}
            </p>
          </Container>
        </section>
      )}

      <section className="mt-20 md:mt-24 bg-[rgb(var(--azul-safira))] py-20 md:py-24">
        <Container className="text-center">
          <h2 className="mx-auto max-w-xl font-serif text-3xl font-normal text-[rgb(var(--marfim))] md:text-4xl">
            Begin the conversation
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[rgb(var(--azul-claro))]">
            Share your date, guest count and vision. We will help you discover the venue that fits.
          </p>
          <div className="mt-10 flex justify-center">
            <Button to="/contact" variant="gold" size="lg">
              Begin Your Wedding Journey <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-24">
        <Container>
          <div className="text-center">
            <div className="text-xs font-medium tracking-[0.22em] text-azul-real md:text-sm">
              EXPLORE OTHER VENUES
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((c) => (
              <Link
                key={c.slug}
                to={`/venues/${c.slug}`}
                className="group overflow-hidden rounded-[28px] bg-[rgb(var(--marfim))] ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.75)] no-underline transition hover:ring-[rgb(var(--dourado-champanhe))]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={c.hero.src}
                    srcSet={c.hero.srcSet}
                    sizes={c.hero.sizes}
                    alt={c.title}
                    className="h-[200px] w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6">
                  <div className="font-serif text-lg text-[rgb(var(--azul-safira))]">{c.title}</div>
                  <div className="mt-2 text-[11px] tracking-[0.16em] text-azul-real">
                    {c.tagline.toUpperCase()}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
