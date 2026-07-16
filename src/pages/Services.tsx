import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { serviceVerticals } from '@/data/content'
import { useSeo } from '@/hooks/useSeo'
import { useLang } from '@/i18n/LangContext'

export default function Services() {
  const { content, localizePath } = useLang()
  useSeo({
    title: content.seo.services.title,
    path: '/services',
    description: content.seo.services.description,
  })

  const t = content.services
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
          <h2 className="mt-6 font-serif text-2xl font-normal italic text-[rgb(var(--azul-safira))] opacity-85 md:text-3xl">
            {t.subtitle}
          </h2>
        </Container>
      </section>

      <section className="mt-12 md:mt-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-5 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
            {t.introParagraphs.map((p, i) => (
              <p key={`i-${i}`}>{p}</p>
            ))}
            <p className="pt-4 font-serif text-xl text-[rgb(var(--azul-safira))]">
              {t.philosophyLead.prefix}
              <span className="italic">{t.philosophyLead.italic}</span>
            </p>
            {t.philosophyParagraphs.map((p, i) => (
              <p key={`ph-${i}`}>{p}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-16 md:mt-20">
        <Container>
          <nav
            aria-label={t.tabsAriaLabel}
            className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3 rounded-full bg-[rgba(var(--ouro-rose),0.75)] p-2 ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)]"
          >
            {t.verticals.map((v) => (
              <a
                key={v.slug}
                href={`#${v.slug}`}
                className="rounded-full px-4 py-2 text-xs font-medium tracking-[0.12em] text-[rgb(var(--azul-safira))] no-underline transition hover:bg-[rgb(var(--marfim))]"
              >
                {v.title}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      {t.verticals.map((v, idx) => {
        const legacy = serviceVerticals.find((x) => x.slug === v.slug)!
        return (
          <section id={v.slug} key={v.slug} className="mt-20 scroll-mt-24 md:mt-28">
            <Container>
              <div className="grid gap-10 md:grid-cols-12 md:gap-12">
                <div className={idx % 2 === 0 ? 'md:col-span-5' : 'md:order-2 md:col-span-5'}>
                  <div className="overflow-hidden rounded-[32px] ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)]">
                    <img
                      src={legacy.image.src}
                      srcSet={legacy.image.srcSet}
                      sizes={legacy.image.sizes}
                      alt={`${v.title} ${t.heroImageAltSuffix}`}
                      className="h-[380px] w-full object-cover md:h-[520px]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className={idx % 2 === 0 ? 'md:col-span-7' : 'md:order-1 md:col-span-7'}>
                  <div className="text-xs font-medium tracking-[0.22em] text-azul-real md:text-sm">
                    {t.serviceLabel(idx)}
                  </div>
                  <h2 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-wide text-[rgb(var(--azul-safira))] md:text-4xl">
                    {v.title}
                  </h2>
                  <div className="mt-3 font-serif text-lg italic text-[rgb(var(--azul-safira))] opacity-80 md:text-xl">
                    {v.subtitle}
                  </div>
                  <div className="mt-6 space-y-5 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
                    {v.intro.map((p, i) =>
                      typeof p === 'string' ? (
                        <p key={`v-${idx}-i-${i}`}>{p}</p>
                      ) : (
                        <h3
                          key={`v-${idx}-i-${i}`}
                          className="pt-2 font-serif text-xl font-normal leading-snug tracking-wide text-[rgb(var(--azul-safira))] md:text-2xl"
                        >
                          {p.h2}
                        </h3>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-[34px] bg-[rgba(var(--marfim),0.65)] p-9 ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)] md:p-12">
                <div className="font-serif text-2xl text-[rgb(var(--azul-safira))] md:text-3xl">
                  {v.listTitle}
                </div>
                <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:grid-cols-2 md:text-base">
                  {v.items.map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--dourado-champanhe))]" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 mx-auto max-w-3xl space-y-5 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
                {v.closing.map((p, i) =>
                  typeof p === 'string' ? (
                    <p key={`v-${idx}-c-${i}`}>{p}</p>
                  ) : (
                    <h3
                      key={`v-${idx}-c-${i}`}
                      className="pt-2 font-serif text-xl font-normal leading-snug tracking-wide text-[rgb(var(--azul-safira))] md:text-2xl"
                    >
                      {p.h2}
                    </h3>
                  ),
                )}
                <p className="pt-4 font-serif text-lg italic text-[rgb(var(--azul-safira))]">
                  {v.signature}
                </p>
              </div>
            </Container>
          </section>
        )
      })}

      <section className="mt-20 md:mt-28 bg-[rgb(var(--azul-safira))] py-20 md:py-24">
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
