import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { useSeo } from '@/hooks/useSeo'

const sections: { title: string; paragraphs: string[] }[] = [
  {
    title: 'A Boutique Wedding Planning Experience',
    paragraphs: [
      'Unlike companies that manage dozens of weddings every season, we intentionally accept a limited number of celebrations each year. This allows us to dedicate our complete attention, creativity and expertise to every couple we work with.',
      'We believe true luxury is never rushed. It is thoughtful. Personal. Intentional.',
      'Every wedding we create receives the care, dedication and attention it truly deserves.',
    ],
  },
  {
    title: 'Specialists in Intimate Destination Weddings',
    paragraphs: [
      'Our philosophy is simple. We exclusively specialise in intimate weddings and luxury celebrations for up to 75 guests.',
      'This is not a limitation. It is our greatest strength.',
      'Smaller weddings create deeper emotions. More meaningful conversations. More time with the people you love. Greater attention to every guest. And an atmosphere that simply cannot be recreated in large-scale celebrations.',
      'We believe the most unforgettable weddings are not measured by the number of guests. They are measured by the emotions they create and the memories they leave behind.',
    ],
  },
  {
    title: 'Every Wedding Begins With Your Story',
    paragraphs: [
      'No two couples are alike. Neither should their weddings be.',
      'Before discussing flowers, colours or venues, we take the time to understand who you are. Your personalities. Your journey together. Your dreams. Your traditions. Your families. The atmosphere you want your guests to experience.',
      'Only then do we begin designing a celebration that truly reflects your story. Because your wedding should never look like anyone else’s. It should feel unmistakably yours.',
    ],
  },
  {
    title: 'Meticulous Planning. Seamless Execution.',
    paragraphs: [
      'Behind every elegant wedding is exceptional organisation. Every timeline. Every supplier. Every contract. Every logistical detail. Every contingency plan. Every guest experience. Nothing is left to chance.',
      'Our background in law, administration and project management gives us a unique level of organisation, structure and precision, ensuring every aspect of your celebration is carefully coordinated with professionalism and discretion.',
      'While you enjoy every moment, we quietly manage everything behind the scenes.',
    ],
  },
  {
    title: 'Carefully Curated Venues & Trusted Partners',
    paragraphs: [
      'Luxury is not only about beautiful locations. It is about working with exceptional people.',
      'Over the years, we have built trusted relationships with carefully selected venues and outstanding suppliers across Portugal. From luxury resorts and private villas to celebrated chefs, talented florists, photographers and musicians, every recommendation is chosen for its quality, professionalism and commitment to excellence.',
      'Because every supplier becomes part of your story.',
    ],
  },
  {
    title: 'A Calm Presence Throughout Your Journey',
    paragraphs: [
      'Planning a destination wedding should never feel overwhelming. Our role is to simplify every decision, answer every question and guide you with confidence from your first consultation to your last dance.',
      'You will always know what comes next. You will always feel supported. You will always have someone looking after every detail.',
      'That peace of mind is one of the greatest luxuries we can offer.',
    ],
  },
  {
    title: 'More Than Beautiful Weddings',
    paragraphs: [
      'Anyone can organise a wedding. Our purpose is different.',
      'We create experiences that feel effortless. Celebrations where guests feel genuinely welcomed. Moments filled with emotion, elegance and authenticity.',
      'Weddings that are remembered not only because they were beautiful, but because they felt extraordinary.',
    ],
  },
]

const promise = [
  'Personalised planning with complete dedication.',
  'Exclusive intimate weddings for up to 75 guests.',
  'Elegant and timeless design.',
  'Meticulous organisation and flawless coordination.',
  'Trusted venues and exceptional suppliers.',
  'Honest communication and complete transparency.',
  'A calm, discreet and highly professional presence.',
  'A celebration that reflects your story, and no one else’s.',
]

export default function WhyMaisonYasmini() {
  useSeo({
    title: 'Why Maison Yasmini',
    path: '/why-maison-yasmini',
    description:
      'Because your wedding deserves more than planning. Discover the boutique experience behind Maison Yasmini.',
  })

  return (
    <div>
      <section className="pt-14 md:pt-20">
        <Container>
          <div className="text-xs font-medium tracking-[0.22em] text-azul-real md:text-sm">
            WHY MAISON YASMINI
          </div>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.06] tracking-wide text-[rgb(var(--azul-safira))] md:text-6xl">
            Because Your Wedding Deserves More Than Planning
          </h1>
          <div className="mt-10 max-w-3xl space-y-5 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
            <p>
              Your wedding is not simply another event. It is one of the most meaningful chapters of
              your life. The place where two families become one. The day your closest friends travel
              from around the world to celebrate your love. The beginning of memories that will stay
              with you forever.
            </p>
            <p>
              That is why choosing the right wedding planner is one of the most important decisions you
              will make.
            </p>
            <p>
              At Maison Yasmini, we don’t simply organise weddings. We create experiences that feel
              effortless, deeply personal and beautifully unforgettable.
            </p>
          </div>
        </Container>
      </section>

      {sections.map((section, idx) => (
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
            <SectionHeading eyebrow="Our promise" title="What every couple receives from us." />
            <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
              {promise.map((p) => (
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
              Because Luxury Is Not About Having More.
            </h2>
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
              <p>
                It is about feeling more. More connected. More present. More relaxed. More emotional.
                More unforgettable.
              </p>
              <p>That is the Maison Yasmini experience.</p>
              <p className="pt-4 font-serif text-lg italic text-[rgb(var(--azul-safira))]">
                Maison Yasmini. Luxury Intimate Destination Weddings in Portugal, Beautifully Curated
                Around Your Story.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-24 bg-[rgb(var(--azul-safira))] py-20 md:py-24">
        <Container className="text-center">
          <h2 className="mx-auto max-w-xl font-serif text-3xl font-normal text-[rgb(var(--marfim))] md:text-4xl">
            The Maison Yasmini experience begins here.
          </h2>
          <div className="mt-10 flex justify-center">
            <Button to="/contact" variant="gold" size="lg">
              Begin Your Wedding Journey <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
