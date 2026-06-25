import { ArrowRight, Compass, MapPin, SunMedium } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Accordion } from '@/components/Accordion'
import { SectionHeading } from '@/components/SectionHeading'
import { faqs, imageUrls, processSteps, weddingPackages } from '@/data/content'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

const algarveHighlights = [
  {
    icon: SunMedium,
    title: 'Natural light all day',
    description: 'Golden cliffs, open skies and soft sunsets give the Algarve a calm atmosphere that feels special without trying too hard.',
  },
  {
    icon: MapPin,
    title: 'Locations with personality',
    description: 'From seaside terraces to private quintas, the region offers venues that feel intimate, warm and memorable.',
  },
  {
    icon: Compass,
    title: 'Easy for destination guests',
    description: 'Good accessibility, strong hospitality and a relaxed rhythm make the experience smoother for couples coming from abroad.',
  },
] as const

export default function Home() {
  useDocumentTitle()

  return (
    <div>
      <section className="relative overflow-hidden bg-[rgb(var(--my-warm-white))]">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[-12%] top-[-12%] h-[300px] w-[300px] rounded-full bg-[rgba(var(--my-sand),0.28)] blur-3xl md:h-[420px] md:w-[420px]" />
          <div className="absolute right-[-10%] top-[8%] h-[260px] w-[260px] rounded-full bg-[rgba(var(--my-taupe),0.12)] blur-3xl md:h-[360px] md:w-[360px]" />
          <div className="absolute bottom-[-18%] left-[18%] h-[260px] w-[260px] rounded-full bg-[rgba(var(--my-ivory),0.85)] blur-3xl md:h-[380px] md:w-[380px]" />
        </div>

        <Container className="pb-18 pt-24 md:pb-24 md:pt-24">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(var(--my-ivory),0.92)] px-4 py-2 text-xs tracking-[0.18em] text-[rgb(var(--my-dark-brown))] ring-1 ring-inset ring-[rgba(var(--my-sand),0.88)]">
                DESTINATION WEDDINGS IN ALGARVE
              </div>
              <h1 className="mt-6 max-w-4xl text-4xl font-medium leading-[0.94] md:text-7xl">
                Not a generic wedding website.
                <span className="block text-[rgb(var(--my-dark-brown))]">A more soulful way to begin a wedding in the Algarve.</span>
              </h1>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-[rgb(var(--my-dark-brown))] md:text-base">
                Maison Yasmini creates weddings with a stronger sense of place, a calmer planning process and a design
                direction that feels personal instead of templated.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button to="/contacto" size="lg">
                  Request your proposal
                </Button>
                <Button to="/servicos" variant="secondary" size="lg">
                  See wedding packages
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { label: 'Starting from', value: '3.000€' },
                  { label: 'Guest range', value: '2 to 100' },
                  { label: 'Format', value: 'Custom above 100' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[22px] bg-[rgba(var(--my-ivory),0.76)] px-4 py-4 ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)]"
                  >
                    <div className="text-[10px] tracking-[0.18em] text-[rgb(var(--my-dark-brown))]">{item.label.toUpperCase()}</div>
                    <div className="mt-2 font-[var(--my-font-serif)] text-2xl leading-none text-[rgb(var(--my-black))]">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="grid gap-4 md:grid-cols-[0.78fr_1fr]">
                <div className="order-2 grid gap-4 md:order-1">
                  <div className="rounded-[28px] bg-[rgba(var(--my-ivory),0.88)] p-5 ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)] shadow-[0_18px_40px_rgba(28,24,20,0.08)]">
                    <div className="text-[10px] tracking-[0.18em] text-[rgb(var(--my-dark-brown))]">ALIGNED DIRECTION</div>
                    <div className="mt-3 font-[var(--my-font-serif)] text-3xl leading-[1.02]">Designed around atmosphere, not formulas.</div>
                    <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--my-dark-brown))]">
                      Sea light, intimate venues and a slower rhythm shape the creative direction from the first conversation.
                    </p>
                  </div>

                  <div className="relative overflow-hidden rounded-[28px] bg-[rgb(var(--my-black))] ring-1 ring-inset ring-[rgba(var(--my-sand),0.2)] shadow-[0_18px_40px_rgba(28,24,20,0.18)]">
                    <img
                      src={imageUrls.hero}
                      alt="Elegant wedding dinner setup in the Algarve"
                      className="h-[220px] w-full object-cover opacity-88"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </div>

                <div className="order-1 grid gap-4 md:order-2">
                  <div className="relative overflow-hidden rounded-[36px] bg-[rgb(var(--my-ivory))] p-3 ring-1 ring-inset ring-[rgba(var(--my-sand),0.9)] shadow-[0_28px_60px_rgba(28,24,20,0.12)]">
                    <img
                      src={imageUrls.algarveLandscape}
                      alt="Algarve coastline with golden cliffs"
                      className="h-[360px] w-full rounded-[28px] object-cover md:h-[470px]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[24px] border border-dashed border-[rgba(var(--my-sand),0.95)] bg-[rgba(var(--my-warm-white),0.72)] p-4">
                      <div className="text-[10px] tracking-[0.18em] text-[rgb(var(--my-dark-brown))]">PLACE FIRST</div>
                      <div className="mt-2 text-sm leading-relaxed text-[rgb(var(--my-dark-brown))]">
                        The region becomes part of the wedding story, not just the backdrop.
                      </div>
                    </div>
                    <div className="rounded-[24px] bg-[rgba(var(--my-sand),0.22)] p-4 ring-1 ring-inset ring-[rgba(var(--my-sand),0.7)]">
                      <div className="text-[10px] tracking-[0.18em] text-[rgb(var(--my-dark-brown))]">CLEAR OFFER</div>
                      <div className="mt-2 text-sm leading-relaxed text-[rgb(var(--my-dark-brown))]">
                        Small, medium and large packages with a custom path for bigger weddings.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-14 md:mt-20">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <div className="relative overflow-hidden rounded-[28px] ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)]">
                <img
                  src={imageUrls.yasminiPortrait}
                  alt="Portrait of Yasmini"
                  className="h-[420px] w-full object-cover md:h-[520px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="md:col-span-7">
              <SectionHeading eyebrow="Meet Yasmini" title="A personal planning studio with structure, warmth and local knowledge." />
              <div className="mt-6 max-w-2xl space-y-4 text-sm leading-relaxed text-[rgb(var(--my-dark-brown))]">
                <p>
                  Yasmini lives in the Algarve and brings over 20 years of experience from the legal field. That
                  background adds structure, trust and clear decision making to every step of the planning process.
                </p>
                <p>
                  Today, that same precision supports a more creative mission: helping couples create meaningful weddings
                  that feel elegant, intimate and grounded in the landscape around them.
                </p>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  { title: 'Local perspective', body: 'A planner who knows the region and can guide venues, timing and logistics with confidence.' },
                  { title: 'Clear communication', body: 'A calm process for couples planning from abroad who need decisions to feel simple and informed.' },
                  { title: 'Personal attention', body: 'A boutique approach that prioritizes fit, detail and a wedding that feels true to the couple.' },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] bg-[rgba(var(--my-warm-white),0.62)] p-5 ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)]"
                  >
                    <div className="font-[var(--my-font-serif)] text-2xl leading-tight">{item.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-[rgb(var(--my-dark-brown))]">{item.body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button to="/sobre" variant="ghost">
                  Discover the story <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-28">
        <Container>
          <div className="grid items-end gap-8 md:grid-cols-12">
            <SectionHeading
              className="md:col-span-6"
              eyebrow="Wedding Packages"
              title="Clear starting prices for celebrations of different sizes."
              description="Small, medium and large weddings all need different planning rhythms. The offer now reflects that clearly."
            />
            <div className="md:col-span-6 md:justify-self-end">
              <Button to="/servicos" variant="secondary">
                Explore packages <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {weddingPackages.map((pkg) => (
              <div
                key={pkg.slug}
                className="rounded-[30px] bg-[rgba(var(--my-warm-white),0.72)] p-7 ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)] transition hover:-translate-y-0.5 hover:bg-[rgba(var(--my-ivory),0.92)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs tracking-[0.18em] text-[rgb(var(--my-dark-brown))]">{pkg.guestRange.toUpperCase()}</div>
                    <div className="mt-3 font-[var(--my-font-serif)] text-2xl leading-tight">{pkg.title}</div>
                  </div>
                  <div className="rounded-full bg-[rgba(var(--my-sand),0.28)] px-4 py-2 text-xs font-medium tracking-[0.12em] text-[rgb(var(--my-dark-brown))]">
                    {pkg.priceFrom.toUpperCase()}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--my-dark-brown))]">{pkg.description}</p>
                <div className="mt-6 space-y-2 text-sm text-[rgb(var(--my-dark-brown))]">
                  {pkg.highlights.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--my-taupe))]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-[24px] bg-[rgba(var(--my-ivory),0.78)] px-6 py-5 text-sm leading-relaxed text-[rgb(var(--my-dark-brown))] ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)]">
            For weddings with more than 100 guests, Maison Yasmini prepares a custom proposal based on venue, logistics,
            team structure and production needs.
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-6">
              <div className="relative overflow-hidden rounded-[34px] ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)]">
                <img
                  src={imageUrls.algarveLandscape}
                  alt="Sunlit cliffs and sea in the Algarve"
                  className="h-[360px] w-full object-cover md:h-[520px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="md:col-span-6">
              <SectionHeading
                eyebrow="Why Algarve"
                title="A natural paradise that gives the celebration its own atmosphere."
                description="The Algarve is not just a backdrop. It changes the rhythm, the light and the feeling of the entire wedding."
              />
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-[rgb(var(--my-dark-brown))]">
                <p>
                  This part of Portugal brings together dramatic coastlines, elegant estates, intimate villas and a pace
                  that feels lighter from the moment guests arrive.
                </p>
                <p>
                  For destination weddings, that matters. Couples get a beautiful setting, and guests enjoy a full travel
                  experience that feels warm, memorable and easy to embrace.
                </p>
              </div>
              <div className="mt-8 grid gap-4">
                {algarveHighlights.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.title}
                      className="rounded-[24px] bg-[rgba(var(--my-warm-white),0.7)] p-5 ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(var(--my-sand),0.24)]">
                          <Icon className="h-4 w-4 text-[rgb(var(--my-dark-brown))]" />
                        </div>
                        <div className="font-[var(--my-font-serif)] text-2xl leading-tight">{item.title}</div>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--my-dark-brown))]">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <SectionHeading
                eyebrow="How we work"
                title="A planning process that keeps the wedding clear and calm."
                description="Every step is designed to reduce noise, support decisions and keep the couple present in what matters."
              />
              <div className="mt-8">
                <Button to="/experiencia" variant="secondary">
                  Explore the process <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="grid gap-4">
                {processSteps.map((step) => (
                  <div
                    key={step.number}
                    className="rounded-[28px] bg-[rgba(var(--my-warm-white),0.65)] p-6 ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)] md:p-7"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="font-[var(--my-font-serif)] text-2xl">{step.title}</div>
                      <div className="text-xs tracking-[0.18em] text-[rgb(var(--my-dark-brown))]">{step.number}</div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--my-dark-brown))]">{step.description}</p>
                  </div>
                ))}
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
              eyebrow="FAQ"
              title="Clear answers, calm decisions."
              description="A few essentials to help couples understand guest count, pricing and the planning process."
            />
            <Accordion className="md:col-span-7" items={faqs.map((f) => ({ title: f.question, content: f.answer }))} />
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-28">
        <Container>
          <div className="rounded-[34px] bg-[rgba(var(--my-ivory),0.78)] p-10 ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)] md:p-14">
            <div className="grid items-center gap-10 md:grid-cols-12">
              <div className="md:col-span-7">
                <div className="text-xs font-medium tracking-[0.18em] text-[rgb(var(--my-dark-brown))]">
                  FINAL CTA
                </div>
                <div className="mt-4 font-[var(--my-font-serif)] text-4xl leading-[1.05] md:text-5xl">
                  Tell us your plans and we will shape the right package around them.
                </div>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-[rgb(var(--my-dark-brown))]">
                  Share your date, guest count and the kind of celebration you imagine. We will come back with clear next
                  steps and the most suitable way to work together.
                </p>
              </div>
              <div className="md:col-span-5 md:justify-self-end">
                <Button to="/contacto" size="lg" className="w-full md:w-auto">
                  Request your proposal
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
