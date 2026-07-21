import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { venueCategories } from '@/data/content'
import { useSeo } from '@/hooks/useSeo'
import { useLang } from '@/i18n/LangContext'

export default function Venues() {
  const { content, localizePath } = useLang()
  useSeo({
    title: content.seo.venues.title,
    path: '/venues',
    description: content.seo.venues.description,
  })

  const t = content.venues
  const contactPath = localizePath('/contact')

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
          <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-10">
            <div className="space-y-4 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
              {t.intro.map((p, i) => (
                <p key={`in-${i}`} className="text-left md:text-justify-hyphen">
                  {p}
                </p>
              ))}
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
              {t.intro2.map((p, i) => (
                <p key={`in2-${i}`} className="text-left md:text-justify-hyphen">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-28">
        <Container>
          <SectionHeading eyebrow={t.algarveEyebrow} title={t.algarveTitle} />
          <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-10">
            <div className="space-y-4 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
              {t.algarveP1.map((p, i) => (
                <p key={`ap1-${i}`} className="text-left md:text-justify-hyphen">
                  {p}
                </p>
              ))}
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
              {t.algarveP2.map((p, i) => (
                <p key={`ap2-${i}`} className="text-left md:text-justify-hyphen">
                  {p}
                </p>
              ))}
              <p className="font-serif text-lg italic text-[rgb(var(--azul-safira))]">
                {t.algarveTagline}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-28">
        <Container>
          <SectionHeading eyebrow={t.approachEyebrow} title={t.approachTitle} />
          <div className="mt-8 space-y-4 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
            {t.approachIntro.map((p, i) => (
              <p key={`ai-${i}`} className="text-left md:text-justify-hyphen">
                {p}
              </p>
            ))}
            <p className="pt-2">{t.approachListLead}</p>
            <ul className="ml-5 list-disc space-y-2">
              {t.approachList.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
            <p className="text-left md:text-justify-hyphen">{t.approachClose}</p>
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow={t.signatureEyebrow}
            title={t.signatureTitle}
            className="mx-auto max-w-2xl"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {venueCategories.map((cat) => {
              const copy = t.categories[cat.slug]
              return (
                <Link
                  key={cat.slug}
                  to={localizePath(`/venues/${cat.slug}`)}
                  className="group overflow-hidden rounded-[32px] bg-[rgb(var(--marfim))] ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)] no-underline transition hover:-translate-y-0.5 hover:ring-[rgb(var(--dourado-champanhe))]"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={cat.hero.src}
                      srcSet={cat.hero.srcSet}
                      sizes={cat.hero.sizes}
                      alt={`${copy.title} ${t.cardHeroAltSuffix}`}
                      className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-105 md:h-[320px]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-7">
                    <div className="font-serif text-2xl leading-tight text-[rgb(var(--azul-safira))]">
                      {copy.title}
                    </div>
                    <div className="mt-2 text-xs tracking-[0.16em] text-azul-real md:text-sm">
                      {copy.tagline.toUpperCase()}
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--azul-safira))] opacity-75">
                      {copy.cardBlurb}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-[rgb(var(--azul-safira))]">
                      {content.common.ctaDiscoverMore.toUpperCase()}{' '}
                      <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <SectionHeading
              className="md:col-span-5"
              eyebrow={t.roleEyebrow}
              title={t.roleTitle}
            />
            <div className="md:col-span-7 space-y-4 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
              {t.roleParagraphs.map((p, i) => (
                <p key={`rp-${i}`} className="text-left md:text-justify-hyphen">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <SectionHeading
              className="md:col-span-5"
              eyebrow={t.partnersEyebrow}
              title={t.partnersTitle}
            />
            <div className="md:col-span-7 space-y-4 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
              {t.partnersParagraphs.map((p, i) => (
                <p key={`pp-${i}`} className="text-left md:text-justify-hyphen">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <SectionHeading
              className="md:col-span-5"
              eyebrow={t.beyondEyebrow}
              title={t.beyondTitle}
            />
            <div className="md:col-span-7 space-y-4 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
              {t.beyondParagraphs.map((p, i) => (
                <p key={`bp-${i}`} className="text-left md:text-justify-hyphen">
                  {p}
                </p>
              ))}
              <p className="pt-4 font-serif text-lg italic text-[rgb(var(--azul-safira))]">
                {t.beyondSignature}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-28 bg-[rgb(var(--azul-safira))] py-20 md:py-28">
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
