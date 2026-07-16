import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { useSeo } from '@/hooks/useSeo'
import { useLang } from '@/i18n/LangContext'

export default function WhyMaisonYasmini() {
  const { content, localizePath } = useLang()
  useSeo({
    title: content.seo.whyMaisonYasmini.title,
    path: '/why-maison-yasmini',
    description: content.seo.whyMaisonYasmini.description,
  })

  const t = content.whyMaisonYasmini

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
          <div className="mt-10 max-w-3xl space-y-5 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
            {t.intro.map((p, i) => (
              <p key={`in-${i}`}>{p}</p>
            ))}
          </div>
        </Container>
      </section>

      {t.sections.map((section, idx) => (
        <section key={`s-${idx}`} className="mt-16 md:mt-20">
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

      <section className="mt-20 md:mt-24">
        <Container>
          <div className="mx-auto max-w-3xl rounded-[34px] bg-[rgba(var(--marfim),0.65)] p-9 ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)] md:p-12">
            <SectionHeading eyebrow={t.promiseEyebrow} title={t.promiseTitle} />
            <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
              {t.promise.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--dourado-champanhe))]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl font-normal leading-snug tracking-wide text-[rgb(var(--azul-safira))] md:text-3xl">
              {t.finalSectionTitle}
            </h2>
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
              {t.finalSectionParagraphs.map((p, i) => (
                <p key={`fp-${i}`}>{p}</p>
              ))}
              <p className="pt-4 font-serif text-lg italic text-[rgb(var(--azul-safira))]">
                {t.finalSectionSignature}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-24 bg-[rgb(var(--azul-safira))] py-20 md:py-24">
        <Container className="text-center">
          <h2 className="mx-auto max-w-xl font-serif text-3xl font-normal text-[rgb(var(--marfim))] md:text-4xl">
            {t.finalCtaTitle}
          </h2>
          <div className="mt-10 flex justify-center">
            <Button to={localizePath('/contact')} variant="gold" size="lg">
              {t.finalCtaButton} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
