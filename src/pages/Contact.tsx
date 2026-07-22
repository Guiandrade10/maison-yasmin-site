import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { SectionHeading } from '@/components/SectionHeading'
import { siteConfig, getWhatsappUrl } from '@/config/site'
import { useSeo } from '@/hooks/useSeo'
import { useLang } from '@/i18n/LangContext'

export default function Contact() {
  const { content, lang } = useLang()
  useSeo({
    title: content.seo.contact.title,
    path: '/contact',
    description: content.seo.contact.description,
  })

  const t = content.contact
  const w = t.whatsapp
  const whatsappHref = getWhatsappUrl(lang)

  return (
    <div>
      <section className="pt-14 md:pt-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <SectionHeading
              className="md:col-span-5"
              eyebrow={t.eyebrow}
              title={t.title}
              description={t.description}
            />

            <div className="md:col-span-7">
              <div className="rounded-[34px] bg-[rgba(var(--marfim),0.65)] p-8 ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)] md:p-10">
                <p className="text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
                  {w.invitation}
                </p>

                <div className="mt-8">
                  <Button
                    href={whatsappHref}
                    variant="gold"
                    size="lg"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {w.buttonLabel}
                  </Button>
                </div>

                <div className="mt-6 space-y-2 text-xs leading-relaxed text-[rgb(var(--azul-safira))] opacity-80">
                  <div>{w.responseTime}</div>
                  <div>
                    {w.emailAlt.lead}{' '}
                    <a
                      className="underline underline-offset-4"
                      href={`mailto:${siteConfig.contactEmail}`}
                      aria-label={w.emailAlt.linkAriaLabel}
                    >
                      {siteConfig.contactEmail}
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
