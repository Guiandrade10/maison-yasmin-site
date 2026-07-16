import type { ReactNode } from 'react'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { siteConfig } from '@/config/site'
import { useSeo } from '@/hooks/useSeo'
import { useLang } from '@/i18n/LangContext'

function renderWithEmail(text: string): ReactNode {
  if (!text.includes('__EMAIL__')) return text
  const parts = text.split('__EMAIL__')
  return parts.map((part, index) => (
    <span key={index}>
      {part}
      {index < parts.length - 1 && (
        <a className="underline underline-offset-4" href={`mailto:${siteConfig.contactEmail}`}>
          {siteConfig.contactEmail}
        </a>
      )}
    </span>
  ))
}

// TODO(client): the PT text is a starting draft. It must be reviewed by a lawyer
// familiar with Portuguese and EU (GDPR) data protection law before publication.
export default function Privacy() {
  const { content } = useLang()
  useSeo({
    title: content.seo.privacy.title,
    path: '/privacy',
    description: content.seo.privacy.description,
  })

  const t = content.privacy
  const lastReviewed = new Date().toLocaleDateString(t.dateLocale, { year: 'numeric', month: 'long' })

  return (
    <div>
      <section className="pt-14 md:pt-20">
        <Container>
          <SectionHeading
            eyebrow={t.eyebrow}
            title={t.title}
            description={`${t.lastReviewedPrefix}${lastReviewed}${t.lastReviewedSuffix}`}
          />

          <article className="mt-10 max-w-[760px] space-y-8 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
            {t.sections.map((section, sIdx) => (
              <section key={`s-${sIdx}`}>
                <h2 className="font-serif text-2xl font-normal leading-snug tracking-wide md:text-3xl">
                  {section.title}
                </h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={`p-${pIdx}`} className="mt-3">
                    {renderWithEmail(p)}
                  </p>
                ))}
              </section>
            ))}
          </article>
        </Container>
      </section>
    </div>
  )
}
