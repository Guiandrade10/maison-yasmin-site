import { useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { portfolioCategories, portfolioImages, type PortfolioCategory } from '@/data/content'
import { useSeo } from '@/hooks/useSeo'
import { useLang } from '@/i18n/LangContext'

type Filter = 'All' | PortfolioCategory

const FILTERS: Filter[] = ['All', ...portfolioCategories]

export default function Portfolio() {
  const { content, localizePath } = useLang()
  useSeo({
    title: content.seo.portfolio.title,
    path: '/portfolio',
    description: content.seo.portfolio.description,
  })

  const [filter, setFilter] = useState<Filter>('All')

  const t = content.portfolio

  const visible = useMemo(
    () =>
      filter === 'All'
        ? portfolioImages.map((img, i) => ({ img, altIndex: i }))
        : portfolioImages
            .map((img, i) => ({ img, altIndex: i }))
            .filter(({ img }) => img.category === filter),
    [filter],
  )

  const filterLabel = (f: Filter) => (f === 'All' ? t.filterAllLabel : t.categoryLabels[f])

  return (
    <div>
      <section className="pt-14 md:pt-20">
        <Container>
          <div className="text-xs font-medium tracking-[0.22em] text-azul-real md:text-sm">
            {t.eyebrow}
          </div>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.06] tracking-wide text-[rgb(var(--azul-safira))] md:text-6xl">
            {t.title}
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
            {t.description}
          </p>
        </Container>
      </section>

      <section className="mt-10 md:mt-12">
        <Container>
          <div
            role="tablist"
            aria-label={t.filterAriaLabel}
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
                  {filterLabel(f).toUpperCase()}
                </button>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="mt-8 md:mt-10">
        <Container>
          <div className="columns-1 gap-4 sm:columns-2 md:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
            {visible.map(({ img, altIndex }, i) => (
              <figure
                key={img.src}
                className="overflow-hidden rounded-[24px] ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.6)]"
              >
                <img
                  src={img.src}
                  srcSet={img.srcSet}
                  sizes={img.sizes}
                  alt={t.imageAlts[altIndex] ?? img.alt}
                  width={img.width}
                  height={img.height}
                  className="w-full object-cover"
                  loading={i < 3 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <figcaption className="bg-[rgb(var(--marfim))] px-5 py-3 text-[11px] tracking-[0.18em] text-azul-real md:text-xs">
                  {t.categoryLabels[img.category].toUpperCase()}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-24 bg-[rgb(var(--azul-safira))] py-20 md:py-24">
        <Container className="text-center">
          <h2 className="mx-auto max-w-xl font-serif text-3xl font-normal text-[rgb(var(--marfim))] md:text-4xl">
            {t.finalCtaTitle}
          </h2>
          <div className="mt-8 flex justify-center">
            <Button to={localizePath('/contact')} variant="gold" size="lg">
              {t.finalCtaButton} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
