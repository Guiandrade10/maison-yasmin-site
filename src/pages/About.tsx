import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { imageAssets, pilares } from '@/data/content'
import { useSeo } from '@/hooks/useSeo'

const storyParagraphs = [
  'Maison Yasmini was born from a unique combination of precision, refined aesthetics and a genuine passion for creating meaningful and unforgettable celebrations.',
  'With more than 20 years of professional experience in the legal, administrative and management sectors, Yasmini Daudo brings a distinctive and highly structured approach to the world of wedding and event planning. Her background is reflected in every stage of the planning process, through meticulous organisation, thoughtful communication, careful attention to detail and a strong sense of responsibility.',
  'Supported by specialist training in Wedding Planning, Yasmini plans, coordinates and oversees intimate weddings, destination weddings and private events with elegance, professionalism and unwavering dedication.',
  'Our mission is to transform every celebration into a deeply personal, harmonious and beautifully curated experience, one that honours each couple’s story, vision and individuality.',
  'From selecting the right venue and trusted suppliers to managing the budget, logistics and overall event design, every element is carefully considered to create a celebration that feels effortless, sophisticated and entirely your own.',
  'At Maison Yasmini, we believe a wedding should be far more than a beautiful event. It should be an emotional and unforgettable experience, where every detail flows naturally and where couples are free to live each moment with confidence, serenity and joy.',
  'We take the time to understand who you are, what inspires you and how you wish to feel on your wedding day. This allows us to create celebrations that are not only visually elegant, but also deeply meaningful and genuinely reflective of your story.',
  'With a calm, discreet and highly professional approach, we guide you through every decision and coordinate each detail with care, allowing you to enjoy the journey as much as the celebration itself.',
]

export default function About() {
  useSeo({
    title: 'Our Story',
    path: '/about',
    description:
      'Maison Yasmini: destination weddings and event planning in the Algarve, led by Yasmini Daudo with elegance, precision and heart.',
  })

  return (
    <div>
      <section className="pt-14 md:pt-20">
        <Container>
          <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-6">
              <div className="text-xs font-medium tracking-[0.22em] text-azul-real md:text-sm">OUR STORY</div>
              <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.06] tracking-wide text-[rgb(var(--azul-safira))] md:text-6xl">
                Maison Yasmini
              </h1>
              <h2 className="mt-4 font-serif text-xl font-normal italic text-[rgb(var(--azul-safira))] opacity-85 md:text-2xl">
                Destination Weddings & Event Planning in the Algarve
              </h2>
              <div className="mt-10">
                <Button to="/contact" size="lg">
                  Begin Your Wedding Journey <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="md:col-span-6">
              {/* TODO(client): replace placeholder portrait with a professional photo of Yasmini. */}
              <div className="relative overflow-hidden rounded-[32px] ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)]">
                <img
                  src={imageAssets.yasminiPortrait.src}
                  srcSet={imageAssets.yasminiPortrait.srcSet}
                  sizes={imageAssets.yasminiPortrait.sizes}
                  alt="Portrait of Yasmini Daudo, founder of Maison Yasmini"
                  className="h-[420px] w-full object-cover md:h-[560px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-16 md:mt-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-5 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
            {storyParagraphs.map((p, i) => (
              <p key={`s-${i}`}>{p}</p>
            ))}
            <p className="pt-4 font-serif text-lg italic text-[rgb(var(--azul-safira))]">
              Maison Yasmini. Destination Weddings with Soul, Elegance and Exceptional Attention to Detail.
            </p>
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-28 bg-[rgb(var(--ouro-claro))] py-20 md:py-24">
        <Container>
          <div className="text-center">
            <p className="text-[11px] font-medium tracking-[0.24em] text-azul-real md:text-xs md:tracking-[0.3em]">
              OUR VALUES
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-5">
            {pilares.map((p) => (
              <div key={p.id} className="text-center">
                <div className="mt-4 font-serif text-base font-normal tracking-wide text-[rgb(var(--azul-safira))]">
                  {p.title}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[rgb(var(--azul-safira))] opacity-70">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-24 bg-[rgb(var(--azul-safira))] py-20 md:py-24">
        <Container className="text-center">
          <h2 className="mx-auto max-w-xl font-serif text-3xl font-normal text-[rgb(var(--marfim))] md:text-4xl">
            Let’s begin your story together.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[rgb(var(--azul-claro))]">
            Share your date, guest count and the atmosphere you have in mind. We will guide you from
            the first conversation to the last dance.
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
