import { useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { portfolioCategories, portfolioImages, type PortfolioCategory } from '@/data/content'
import { useSeo } from '@/hooks/useSeo'

type Filter = 'All' | PortfolioCategory

const FILTERS: Filter[] = ['All', ...portfolioCategories]

export default function Portfolio() {
  useSeo({
    title: 'Portfolio',
    path: '/portfolio',
    description:
      'A selection of moments we have had the honour to create. Intimate destination weddings and private events in the Algarve.',
  })

  const [filter, setFilter] = useState<Filter>('All')

  const visible = useMemo(
    () => (filter === 'All' ? portfolioImages : portfolioImages.filter((i) => i.category === filter)),
    [filter],
  )

  return (
    <div>
      <section className="pt-14 md:pt-20">
        <Container>
          <div className="text-xs font-medium tracking-[0.22em] text-azul-real md:text-sm">PORTFOLIO</div>
          {/* TODO(client): confirm final title for the Portfolio page. */}
          <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.06] tracking-wide text-[rgb(var(--azul-safira))] md:text-6xl">
            Moments We Have Had the Honour to Create
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
            A selection of intimate weddings and private events, curated with restraint, natural light
            and attention to what truly matters.
          </p>
        </Container>
      </section>

      <section className="mt-10 md:mt-12">
        <Container>
          <div
            role="tablist"
            aria-label="Filter portfolio by category"
            className="flex flex-wrap items-center gap-2 md:gap-3"
          >
            {FILTERS.map((f) => {
              const active = f === filter
              return (
                <button
                  key={f}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f)}
                  className={
                    'rounded-full border px-4 py-1.5 text-[11px] tracking-[0.18em] transition md:text-xs ' +
                    (active
                      ? 'border-transparent bg-[rgb(var(--azul-safira))] text-[rgb(var(--marfim))]'
                      : 'border-[rgba(var(--dourado-champanhe),0.9)] text-[rgb(var(--azul-safira))] hover:bg-[rgba(var(--dourado-champanhe),0.25)]')
                  }
                >
                  {f.toUpperCase()}
                </button>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="mt-8 md:mt-10">
        <Container>
          <div className="columns-1 gap-4 sm:columns-2 md:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
            {visible.map((img, i) => (
              <figure
                key={img.src}
                className="overflow-hidden rounded-[24px] ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.6)]"
              >
                <img
                  src={img.src}
                  srcSet={img.srcSet}
                  sizes={img.sizes}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="w-full object-cover"
                  loading={i < 3 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <figcaption className="bg-[rgb(var(--marfim))] px-5 py-3 text-[11px] tracking-[0.18em] text-azul-real md:text-xs">
                  {img.category.toUpperCase()}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-24 bg-[rgb(var(--azul-safira))] py-20 md:py-24">
        <Container className="text-center">
          <h2 className="mx-auto max-w-xl font-serif text-3xl font-normal text-[rgb(var(--marfim))] md:text-4xl">
            Ready to write your own story?
          </h2>
          <div className="mt-8 flex justify-center">
            <Button to="/contact" variant="gold" size="lg">
              Begin Your Wedding Journey <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
