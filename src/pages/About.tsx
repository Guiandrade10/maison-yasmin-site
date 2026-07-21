import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { imageAssets } from '@/data/content'
import { useSeo } from '@/hooks/useSeo'
import { useLang } from '@/i18n/LangContext'

export default function About() {
  const { content, localizePath } = useLang()
  useSeo({
    title: content.seo.about.title,
    path: '/about',
    description: content.seo.about.description,
  })

  const t = content.about
  const contactPath = localizePath('/contact')

  return (
    <div>
      <section className="pt-14 md:pt-20">
        <Container>
          <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-6">
              <div className="text-xs font-medium tracking-[0.22em] text-azul-real md:text-sm">
                {t.eyebrow}
              </div>
              <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.06] tracking-wide text-[rgb(var(--azul-safira))] md:text-6xl">
                {t.title}
              </h1>
              <h2 className="mt-4 font-serif text-xl font-normal italic text-[rgb(var(--azul-safira))] opacity-85 md:text-2xl">
                {t.subtitle}
              </h2>
              <div className="mt-10">
                <Button to={contactPath} size="lg">
                  {t.ctaBegin} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="relative overflow-hidden rounded-[32px] ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)]">
                <img
                  src={imageAssets.yasminiPortrait.src}
                  srcSet={imageAssets.yasminiPortrait.srcSet}
                  sizes={imageAssets.yasminiPortrait.sizes}
                  alt={t.portraitAlt}
                  className="h-[420px] w-full object-cover md:h-[560px]"
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
            {t.paragraphs.map((p, i) => (
              <p key={`s-${i}`}>{p}</p>
            ))}
            <p className="pt-4 font-serif text-lg italic text-[rgb(var(--azul-safira))]">
              {t.signature}
            </p>
          </div>
        </Container>
      </section>

      <section className="mt-16 md:mt-20">
        <Container>
          <div className="relative overflow-hidden rounded-[32px] ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)] aspect-[3/2]">
            <img
              src={imageAssets.portraitEditorial.src}
              srcSet={imageAssets.portraitEditorial.srcSet}
              sizes={imageAssets.portraitEditorial.sizes}
              alt={t.portraitEditorialAlt}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-28 bg-[rgb(var(--ouro-claro))] py-20 md:py-24">
        <Container>
          <div className="text-center">
            <p className="text-[11px] font-medium tracking-[0.24em] text-azul-real md:text-xs md:tracking-[0.3em]">
              {t.valuesEyebrow}
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-5">
            {content.pilares.map((p) => (
              <div key={p.id} className="text-center">
                <div className="mt-4 font-serif text-base font-normal tracking-wide text-[rgb(var(--azul-safira))]">
                  {p.title}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[rgb(var(--azul-safira))] opacity-70">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

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
    </div>
  )
}
