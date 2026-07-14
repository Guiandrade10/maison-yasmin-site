import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { serviceVerticals } from '@/data/content'
import { useSeo } from '@/hooks/useSeo'

const introParagraphs = [
  'At Maison Yasmini, we believe the most unforgettable weddings are not defined by the number of guests, but by the emotions they create and the memories they leave behind.',
  'We specialise in designing and coordinating exclusive intimate weddings and destination weddings in Portugal, thoughtfully created for celebrations of up to 75 guests. This allows us to provide a highly personalised experience, where every detail receives the care, creativity and attention it deserves.',
  'Luxury, to us, is not about extravagance. It is about exclusivity, authenticity and the freedom to celebrate surrounded only by the people who matter most.',
  'Every wedding begins with your story.',
  'We take the time to understand your personalities, your vision, your lifestyle and everything that makes your relationship unique. From there, we create a celebration that feels effortless, elegant and genuinely yours.',
  'Whether you dream of exchanging vows on dramatic ocean cliffs, celebrating in a private villa, hosting an elegant dinner at a luxury resort or saying "I do" in a charming Portuguese estate, every element is thoughtfully curated to reflect your style and create an unforgettable experience.',
]

const philosophyParagraphs = [
  'We intentionally focus on a limited number of weddings each year, allowing us to dedicate our full attention to every couple and deliver an exceptional level of service from beginning to end.',
  'The result is a celebration where every guest feels welcomed, every detail feels intentional and every moment becomes a lifelong memory.',
  'Because the greatest luxury is celebrating your love in a way that feels deeply personal, beautifully effortless and truly unforgettable.',
]

export default function Services() {
  useSeo({
    title: 'Services',
    path: '/services',
    description:
      'Wedding planning, private events and wedding design & styling in the Algarve, for intimate celebrations of up to 75 guests.',
  })

  return (
    <div>
      <section className="pt-14 md:pt-20">
        <Container>
          <div className="text-xs font-medium tracking-[0.22em] text-azul-real md:text-sm">SERVICES</div>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.06] tracking-wide text-[rgb(var(--azul-safira))] md:text-6xl">
            Luxury Intimate Weddings in Portugal
          </h1>
          <h2 className="mt-6 font-serif text-2xl font-normal italic text-[rgb(var(--azul-safira))] opacity-85 md:text-3xl">
            Intimate Weddings. Extraordinary Experiences.
          </h2>
        </Container>
      </section>

      <section className="mt-12 md:mt-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-5 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
            {introParagraphs.map((p, i) => (
              <p key={`i-${i}`}>{p}</p>
            ))}
            <p className="pt-4 font-serif text-xl text-[rgb(var(--azul-safira))]">
              Our philosophy is simple: <span className="italic">Quality over quantity.</span>
            </p>
            {philosophyParagraphs.map((p, i) => (
              <p key={`ph-${i}`}>{p}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-16 md:mt-20">
        <Container>
          <nav
            aria-label="Services on this page"
            className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3 rounded-full bg-[rgba(var(--ouro-rose),0.75)] p-2 ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)]"
          >
            {serviceVerticals.map((v) => (
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

      {serviceVerticals.map((v, idx) => (
        <section id={v.slug} key={v.slug} className="mt-20 scroll-mt-24 md:mt-28">
          <Container>
            <div className="grid gap-10 md:grid-cols-12 md:gap-12">
              <div className={idx % 2 === 0 ? 'md:col-span-5' : 'md:order-2 md:col-span-5'}>
                <div className="overflow-hidden rounded-[32px] ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)]">
                  <img
                    src={v.image.src}
                    srcSet={v.image.srcSet}
                    sizes={v.image.sizes}
                    alt={`${v.title} in the Algarve`}
                    className="h-[380px] w-full object-cover md:h-[520px]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className={idx % 2 === 0 ? 'md:col-span-7' : 'md:order-1 md:col-span-7'}>
                <div className="text-xs font-medium tracking-[0.22em] text-azul-real md:text-sm">
                  {`0${idx + 1} · SERVICE`}
                </div>
                <h2 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-wide text-[rgb(var(--azul-safira))] md:text-4xl">
                  {v.title}
                </h2>
                <div className="mt-3 font-serif text-lg italic text-[rgb(var(--azul-safira))] opacity-80 md:text-xl">
                  {v.subtitle}
                </div>
                <div className="mt-6 space-y-5 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
                  {v.intro.map((p, i) => (
                    <p key={`v-${idx}-i-${i}`}>{p}</p>
                  ))}
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
              {v.closing.map((p, i) => (
                <p key={`v-${idx}-c-${i}`}>{p}</p>
              ))}
              <p className="pt-4 font-serif text-lg italic text-[rgb(var(--azul-safira))]">
                {v.signature}
              </p>
            </div>
          </Container>
        </section>
      ))}

      <section className="mt-20 md:mt-28 bg-[rgb(var(--azul-safira))] py-20 md:py-24">
        <Container className="text-center">
          <h2 className="mx-auto max-w-xl font-serif text-3xl font-normal text-[rgb(var(--marfim))] md:text-4xl">
            Let’s Create Something Beautiful
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[rgb(var(--azul-claro))]">
            Share your date, guest count and the atmosphere you have in mind. We will respond with
            clarity and the next steps.
          </p>
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
