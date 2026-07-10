import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { processSteps } from '@/data/content'
import { useSeo } from '@/hooks/useSeo'

export default function Experience() {
  useSeo({
    title: 'Process',
    path: '/process',
    description:
      'Our five-step planning process: conversation, direction, planning, coordination, celebration. Calm structure for destination weddings in the Algarve.',
  })

  return (
    <div>
      <section className="pt-14 md:pt-20">
        <Container>
          <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <h1 className="text-4xl font-medium leading-[1.06] md:text-6xl">How we work.</h1>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[rgb(var(--my-dark-brown))] md:text-base">
                A five-step process built around clear checkpoints, thoughtful pacing and a steady
                presence from first conversation to wedding day.
              </p>
            </div>
            <div className="md:col-span-5 md:justify-self-end">
              <Button to="/contact" size="lg">
                Request a proposal <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-16 md:mt-24">
        <Container>
          <div className="grid gap-5">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-[34px] bg-[rgba(var(--my-warm-white),0.65)] p-8 ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)] md:p-10"
              >
                <div className="grid gap-6 md:grid-cols-12 md:items-start">
                  <div className="md:col-span-2">
                    <div className="font-[var(--my-font-serif)] text-4xl leading-none md:text-5xl">{step.number}</div>
                  </div>
                  <div className="md:col-span-10">
                    <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
                      <div className="font-[var(--my-font-serif)] text-3xl leading-tight md:text-4xl">{step.title}</div>
                      <div className="text-xs font-medium tracking-[0.18em] text-[rgb(var(--my-dark-brown))]">
                        STEP {step.number}
                      </div>
                    </div>
                    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[rgb(var(--my-dark-brown))] md:text-base">
                      {step.description}
                    </p>
                    <div className="mt-6 h-px w-full bg-[rgba(var(--my-sand),0.9)]" />
                    <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[rgb(var(--my-dark-brown))]">
                      We keep communication clear and warm, never corporate and never sales-driven.
                      Every detail is handled with care so you can be fully present on the day.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-28">
        <Container>
          <div className="rounded-[34px] bg-[rgba(var(--my-ivory),0.78)] p-10 ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)] md:p-14">
            <div className="grid items-center gap-10 md:grid-cols-12">
              <SectionHeading
                className="md:col-span-7"
                eyebrow="Next step"
                title="Tell us your date and what you are hoping for."
                description="We will come back with availability, honest guidance and a clear sense of whether we are the right fit."
              />
              <div className="md:col-span-5 md:justify-self-end">
                <Button to="/contact" size="lg" className="w-full md:w-auto">
                  Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
