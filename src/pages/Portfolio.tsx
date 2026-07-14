import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { portfolioImages } from '@/data/content'
import { useSeo } from '@/hooks/useSeo'

export default function Portfolio() {
  useSeo({
    title: 'Portfolio',
    path: '/portfolio',
    description:
      'A selection of moments we have had the honour to create. Intimate destination weddings and private events in the Algarve.',
  })

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

      <section className="mt-16 md:mt-20">
        <Container>
          <div className="columns-1 gap-4 sm:columns-2 md:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
            {portfolioImages.map((img, i) => (
              <figure
                key={`p-${i}`}
                className="overflow-hidden rounded-[24px] ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.6)]"
              >
                <img
                  src={img.src}
                  srcSet={img.srcSet}
                  sizes={img.sizes}
                  alt={img.alt}
                  className="w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                {img.category && (
                  <figcaption className="bg-[rgb(var(--marfim))] px-5 py-3 text-[11px] tracking-[0.18em] text-azul-real md:text-xs">
                    {img.category.toUpperCase()}
                  </figcaption>
                )}
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
