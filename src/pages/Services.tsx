import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { weddingPackages } from '@/data/content'
import { useSeo } from '@/hooks/useSeo'

export default function Services() {
  useSeo({
    title: 'Services',
    path: '/services',
    description:
      'Wedding planning packages for small, medium and large celebrations in the Algarve, from 3,000€. Boutique planning designed around your guest count.',
  })

  return (
    <div>
      <section className="pt-14 md:pt-20">
        <Container>
          <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <h1 className="text-4xl font-medium leading-[1.06] md:text-6xl">Wedding packages built around guest count, pace and place.</h1>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[rgb(var(--my-dark-brown))] md:text-base">
                Maison Yasmini offers three clear packages built around guest count. Each comes with its
                own planning rhythm and starting investment.
              </p>
            </div>
            <div className="md:col-span-5 md:justify-self-end">
              <Button to="/contact" size="lg">
                Request a proposal <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {weddingPackages.map((pkg) => (
              <div
                key={pkg.slug}
                className="rounded-[32px] bg-[rgba(var(--my-warm-white),0.65)] p-8 ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs tracking-[0.18em] text-[rgb(var(--my-dark-brown))]">{pkg.guestRange.toUpperCase()}</div>
                  <div className="rounded-full bg-[rgba(var(--my-sand),0.28)] px-4 py-2 text-xs font-medium tracking-[0.12em] text-[rgb(var(--my-dark-brown))]">
                    {pkg.priceFrom.toUpperCase()}
                  </div>
                </div>
                <div className="mt-4 font-[var(--my-font-serif)] text-2xl leading-tight">{pkg.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--my-dark-brown))]">{pkg.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-[rgb(var(--my-dark-brown))]">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--my-taupe))]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-[24px] bg-[rgba(var(--my-ivory),0.76)] px-6 py-5 text-sm leading-relaxed text-[rgb(var(--my-dark-brown))] ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)]">
            Weddings with more than 100 guests need a custom proposal. We build it around the venue,
            logistics, team size and production needs.
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <SectionHeading
              className="md:col-span-5"
              eyebrow="Additional support"
              title="Every package can be extended with the support that makes destination planning feel straightforward."
              description="Depending on the wedding size, planning can include:"
            />
            <div className="md:col-span-7">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  'Venue scouting',
                  'Supplier coordination',
                  'Design guidance',
                  'Guest logistics',
                  'Wedding day management',
                  'Legal guidance',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] bg-[rgba(var(--my-ivory),0.72)] px-6 py-5 ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)]"
                  >
                    <div className="text-sm font-medium text-[rgb(var(--my-black))]">{item}</div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-[28px] bg-[rgba(var(--my-warm-white),0.65)] p-8 ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)]">
                <div className="font-[var(--my-font-serif)] text-2xl leading-tight">A calm first step</div>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-[rgb(var(--my-dark-brown))]">
                  Share your date, approximate guest count and the kind of celebration you want.
                  We will respond with clarity and the next steps.
                </p>
                <div className="mt-6">
                  <Button to="/contact" size="lg">
                    Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
