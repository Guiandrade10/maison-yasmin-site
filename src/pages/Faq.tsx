import { Container } from '@/components/Container'
import { Accordion } from '@/components/Accordion'
import { SectionHeading } from '@/components/SectionHeading'
import { faqs } from '@/data/content'
import { useSeo } from '@/hooks/useSeo'

export default function Faq() {
  useSeo({
    title: 'FAQ',
    path: '/faq',
    description:
      'Answers to common questions about planning a destination wedding in the Algarve: pricing, timelines, guest counts and legal support in Portugal.',
  })

  return (
    <div>
      <section className="pt-14 md:pt-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <SectionHeading
              className="md:col-span-5"
              eyebrow="FAQ"
              title="Clear answers, calm decisions."
              description="If you do not see your question here, send us a note and we will respond with clarity."
            />
            <Accordion className="md:col-span-7" items={faqs.map((f) => ({ title: f.question, content: f.answer }))} />
          </div>
        </Container>
      </section>
    </div>
  )
}

