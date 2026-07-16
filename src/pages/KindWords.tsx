import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { SHOW_TESTIMONIALS, testimonials } from '@/data/content'
import { useSeo } from '@/hooks/useSeo'
import { useLang } from '@/i18n/LangContext'

export default function KindWords() {
  const { content, localizePath } = useLang()
  useSeo({
    title: content.seo.kindWords.title,
    path: '/kind-words',
    description: content.seo.kindWords.description,
  })

  const t = content.kindWords

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
        </Container>
      </section>

      <section className="mt-16 md:mt-20">
        <Container>
          {SHOW_TESTIMONIALS ? (
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((tst) => (
                <div
                  key={tst.name}
                  className="relative rounded-[28px] bg-[rgb(var(--ouro-rose))] p-8 ring-1 ring-[rgba(220,199,161,0.7)]"
                >
                  <span
                    className="absolute left-7 top-5 font-serif text-6xl font-normal leading-none text-[rgba(220,199,161,0.8)]"
                    aria-hidden="true"
                  >
                    "
                  </span>
                  <blockquote className="relative mt-6 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
                    {tst.text}
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-[rgba(220,199,161,0.6)]" />
                    <div className="text-right">
                      <div className="font-serif text-sm font-normal text-[rgb(var(--azul-safira))]">
                        {tst.name}
                      </div>
                      <div className="text-[11px] tracking-[0.14em] text-azul-real md:text-xs">
                        {tst.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-2xl rounded-[34px] bg-[rgba(var(--marfim),0.65)] p-10 text-center ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)] md:p-14">
              <SectionHeading
                align="center"
                eyebrow={t.comingSoonEyebrow}
                title={t.comingSoonTitle}
                className="mx-auto"
              />
              <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
                {t.comingSoonBody}
              </p>
              <div className="mt-10 flex justify-center">
                <Button to={localizePath('/contact')} size="lg">
                  {t.comingSoonCta} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </Container>
      </section>
    </div>
  )
}
