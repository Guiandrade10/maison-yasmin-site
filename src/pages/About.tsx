import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { imageUrls } from '@/data/content'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export default function About() {
  useDocumentTitle('About')

  return (
    <div>
      <section className="pt-14 md:pt-20">
        <Container>
          <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-6">
              <div className="text-xs font-medium tracking-[0.18em] text-[rgb(var(--my-dark-brown))]">ABOUT</div>
              <h1 className="mt-4 text-4xl font-medium leading-[1.06] md:text-6xl">A refined home where celebrations begin.</h1>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-[rgb(var(--my-dark-brown))] md:text-base">
                Maison Yasmini is not an event factory. It is a boutique studio built around intention, beauty and calm
                structure, led personally by Yasmini.
              </p>
              <div className="mt-10">
                <Button to="/contacto" size="lg">
                  Request your proposal <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="relative overflow-hidden rounded-[32px] ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)]">
                <img
                  src={imageUrls.yasminiPortrait}
                  alt="Portrait of Yasmini"
                  className="h-[420px] w-full object-cover md:h-[520px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <SectionHeading eyebrow="Founder story" title="From law to weddings, with precision and warmth." />
            </div>
            <div className="md:col-span-7">
              <div className="space-y-4 text-sm leading-relaxed text-[rgb(var(--my-dark-brown))] md:text-base">
                <p>
                  Yasmini lives in the Algarve and spent over 20 years in the legal field. That background brings a
                  quiet confidence to every project: structure, clarity and trust.
                </p>
                <p>
                  After decades dedicated to law, she decided to follow her passion and transform her love for details,
                  organization and meaningful experiences into wedding planning.
                </p>
                <p>
                  Maison Yasmini was born from the belief that love deserves beauty, authenticity and unforgettable
                  moments.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-28">
        <Container>
          <div className="rounded-[34px] bg-[rgba(var(--my-warm-white),0.65)] p-10 ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)] md:p-14">
            <div className="grid gap-10 md:grid-cols-12 md:gap-12">
              <SectionHeading
                className="md:col-span-5"
                eyebrow="Values"
                title="Intention, authenticity, calm."
                description="Elegant, intimate celebrations curated with purpose and without exaggeration."
              />
              <div className="md:col-span-7">
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { title: 'Bespoke, always', body: 'No templates. No mass production. Only what feels like you.' },
                    { title: 'Clarity & structure', body: 'Decisions become easier when the process is calm and clear.' },
                    { title: 'Editorial softness', body: 'A film-like aesthetic with natural light and quiet luxury.' },
                    { title: 'Human presence', body: 'Warm, personal, never corporate. You will feel held.' },
                  ].map((v) => (
                    <div
                      key={v.title}
                      className="rounded-[24px] bg-[rgba(var(--my-ivory),0.72)] p-6 ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)]"
                    >
                      <div className="font-[var(--my-font-serif)] text-2xl leading-tight">{v.title}</div>
                      <div className="mt-2 text-sm leading-relaxed text-[rgb(var(--my-dark-brown))]">{v.body}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <SectionHeading
              className="md:col-span-5"
              eyebrow="Why Algarve"
              title="Light, landscapes, and a feeling of ease."
                description="A destination that feels like a gentle exhale and photographs with natural beauty."
            />
            <div className="md:col-span-7">
              <div className="space-y-4 text-sm leading-relaxed text-[rgb(var(--my-dark-brown))] md:text-base">
                <p>
                  The Algarve offers more than a beautiful backdrop. It offers an atmosphere: warm light, open skies,
                  quiet coastlines and intimate venues that feel like home.
                </p>
                <p>
                  For international couples, it is a destination where the logistics can be clear, and the experience
                  can be calm, meaningful and deeply personal.
                </p>
              </div>
              <div className="mt-8">
                <Button to="/servicos" variant="secondary">
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

