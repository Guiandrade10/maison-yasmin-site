import { Container } from '@/components/Container'
import { Accordion } from '@/components/Accordion'
import { SectionHeading } from '@/components/SectionHeading'
import { useSeo } from '@/hooks/useSeo'
import { useLang } from '@/i18n/LangContext'

export default function Faq() {
  const { content } = useLang()
  useSeo({
    title: content.seo.faq.title,
    path: '/faq',
    description: content.seo.faq.description,
  })

  const t = content.faq

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <section className="pt-14 md:pt-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <SectionHeading
              className="md:col-span-5"
              eyebrow={t.eyebrow}
              title={t.title}
              description={t.description}
            />
            <Accordion
              className="md:col-span-7"
              items={t.items.map((f) => ({ title: f.question, content: f.answer }))}
            />
          </div>
        </Container>
      </section>
    </div>
  )
}
