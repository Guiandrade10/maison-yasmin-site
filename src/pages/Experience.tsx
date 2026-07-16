import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { useSeo } from '@/hooks/useSeo'
import { useLang } from '@/i18n/LangContext'

export default function Experience() {
  const { content, localizePath } = useLang()
  useSeo({
    title: content.seo.experience.title,
    path: '/process',
    description: content.seo.experience.description,
  })

  const t = content.experience
  const contactPath = localizePath('/contact')

  return (
    <div>
      <section className="pt-14 md:pt-20">
        <Container>
          <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <h1 className="text-4xl font-medium leading-[1.06] md:text-6xl">{t.title}</h1>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
                {t.description}
              </p>
            </div>
            <div className="md:col-span-5 md:justify-self-end">
              <Button to={contactPath} size="lg">
                {t.ctaBegin} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-16 md:mt-24">
        <Container>
          <div className="grid gap-5">
            {t.steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[34px] bg-[rgba(var(--marfim),0.65)] p-8 ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)] md:p-10"
              >
                <div className="grid gap-6 md:grid-cols-12 md:items-start">
                  <div className="md:col-span-2">
                    <div className="font-serif text-4xl leading-none md:text-5xl">{step.number}</div>
                  </div>
                  <div className="md:col-span-10">
                    <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
                      <div className="font-serif text-3xl leading-tight md:text-4xl">{step.title}</div>
                      <div className="text-xs font-medium tracking-[0.18em] text-[rgb(var(--azul-safira))]">
                        {t.stepLabel} {step.number}
                      </div>
                    </div>
                    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
                      {step.description}
                    </p>
                    <div className="mt-6 h-px w-full bg-[rgba(var(--dourado-champanhe),0.9)]" />
                    <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[rgb(var(--azul-safira))]">
                      {t.stepAddendum}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-28">
        <Container>
          <div className="rounded-[34px] bg-[rgba(var(--ouro-rose),0.78)] p-10 ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)] md:p-14">
            <div className="grid items-center gap-10 md:grid-cols-12">
              <SectionHeading
                className="md:col-span-7"
                eyebrow={t.nextEyebrow}
                title={t.nextTitle}
                description={t.nextDescription}
              />
              <div className="md:col-span-5 md:justify-self-end">
                <Button to={contactPath} size="lg" className="w-full md:w-auto">
                  {t.nextCta} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
