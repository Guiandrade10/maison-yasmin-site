import type { ReactNode } from 'react'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { getWhatsappUrl } from '@/config/site'
import { useSeo } from '@/hooks/useSeo'
import { useLang } from '@/i18n/LangContext'
import type { Lang } from '@/i18n/routes'

// GDPR contact channel is provisionally WhatsApp because the client does not
// yet have access to an official mailbox. Revisit and restore an email channel
// (both here and in the copy in en.ts/pt.ts) once an official address exists
// and the policy is validated by legal counsel.
function renderWithContact(text: string, lang: Lang): ReactNode {
  if (!text.includes('__CONTACT__')) return text
  const parts = text.split('__CONTACT__')
  return parts.map((part, index) => (
    <span key={index}>
      {part}
      {index < parts.length - 1 && (
        <a
          className="underline underline-offset-4"
          href={getWhatsappUrl(lang)}
          target="_blank"
          rel="noreferrer noopener"
        >
          WhatsApp
        </a>
      )}
    </span>
  ))
}

// TODO(client): the PT text is a starting draft. It must be reviewed by a lawyer
// familiar with Portuguese and EU (GDPR) data protection law before publication.
export default function Privacy() {
  const { content, lang } = useLang()
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
                    {renderWithContact(p, lang)}
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
