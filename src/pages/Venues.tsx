import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { venueCategories } from '@/data/content'
import { useSeo } from '@/hooks/useSeo'

export default function Venues() {
  useSeo({
    title: 'Wedding Venues in the Algarve',
    path: '/venues',
    description:
      'Luxury resorts, private villas, exclusive restaurants and country estates for intimate weddings in Portugal.',
  })

  return (
    <div>
      <section className="pt-14 md:pt-20">
        <Container>
          <div className="text-xs font-medium tracking-[0.22em] text-azul-real md:text-sm">VENUES</div>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.06] tracking-wide text-[rgb(var(--azul-safira))] md:text-6xl">
            Discover the Perfect Setting for Your Love Story
          </h1>
          <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-10">
            <div className="space-y-4 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
              <p>Every unforgettable wedding begins with the perfect setting.</p>
              <p>
                The venue is far more than a beautiful location. It is the place where your memories will
                be created, your story will unfold and one of the most meaningful days of your life will
                come to life.
              </p>
              <p>
                At Maison Yasmini, we believe that choosing the right venue is one of the most important
                decisions in the entire planning journey. It sets the atmosphere, defines the experience
                and becomes the backdrop to every emotion, every photograph and every unforgettable
                moment.
              </p>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
              <p>
                As specialists in luxury intimate weddings and destination weddings in Portugal, we help
                couples discover exceptional venues that perfectly reflect their style, personality and
                vision.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-28">
        <Container>
          <SectionHeading
            eyebrow="The Algarve"
            title="Europe’s Hidden Gem for Luxury Weddings"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-10">
            <div className="space-y-4 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
              <p>
                With its dramatic cliffs, golden beaches, crystal-clear waters, world-class hospitality
                and over 300 days of sunshine each year, the Algarve has become one of Europe’s most
                sought-after wedding destinations.
              </p>
              <p>
                From breathtaking coastal settings to elegant country estates, exclusive private villas
                and award-winning luxury resorts, the region offers an extraordinary variety of venues
                for couples seeking an unforgettable celebration.
              </p>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
              <p>
                Whether you are travelling from the United Kingdom, Ireland, the United States, Canada,
                Australia or anywhere else in the world, the Algarve offers the perfect balance of
                natural beauty, accessibility and refined luxury.
              </p>
              <p className="font-serif text-lg italic text-[rgb(var(--azul-safira))]">
                It is where unforgettable weddings begin.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-28">
        <Container>
          <SectionHeading eyebrow="Our approach" title="Carefully Curated Venues" />
          <div className="mt-8 space-y-4 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
            <p>Every couple is unique. Your wedding venue should be too.</p>
            <p>
              Rather than overwhelming you with endless options, we carefully select venues that
              genuinely match your vision, guest numbers, budget and wedding style.
            </p>
            <p className="pt-2">Whether you imagine:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>exchanging vows on dramatic cliffs overlooking the Atlantic Ocean;</li>
              <li>celebrating in an elegant five-star resort;</li>
              <li>hosting an intimate dinner in a private luxury villa;</li>
              <li>embracing the charm of a boutique hotel;</li>
              <li>dining beneath the stars at an exclusive restaurant;</li>
              <li>
                or saying "I do" in a romantic Portuguese country estate surrounded by vineyards,
              </li>
            </ul>
            <p>
              we will help you find the setting that feels as though it was made especially for your
              story.
            </p>
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Wedding Venues in Portugal"
            title="Explore Our Signature Wedding Venues"
            className="mx-auto max-w-2xl"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {venueCategories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/venues/${cat.slug}`}
                className="group overflow-hidden rounded-[32px] bg-[rgb(var(--marfim))] ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)] no-underline transition hover:-translate-y-0.5 hover:ring-[rgb(var(--dourado-champanhe))]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={cat.hero.src}
                    srcSet={cat.hero.srcSet}
                    sizes={cat.hero.sizes}
                    alt={`${cat.title} in the Algarve`}
                    className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-105 md:h-[320px]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-7">
                  <div className="font-serif text-2xl leading-tight text-[rgb(var(--azul-safira))]">
                    {cat.title}
                  </div>
                  <div className="mt-2 text-xs tracking-[0.16em] text-azul-real md:text-sm">
                    {cat.tagline.toUpperCase()}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--azul-safira))] opacity-75">
                    {cat.cardBlurb}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-[rgb(var(--azul-safira))]">
                    DISCOVER MORE <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <SectionHeading
              className="md:col-span-5"
              eyebrow="Our role"
              title="More Than Venue Sourcing"
            />
            <div className="md:col-span-7 space-y-4 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
              <p>
                Finding a beautiful venue is only the beginning. Our role extends far beyond presenting
                beautiful locations.
              </p>
              <p>
                We personally guide you through the selection process, arranging site visits, coordinating
                meetings with venue managers, reviewing supplier requirements, assessing logistical
                details and ensuring that every decision supports your overall vision.
              </p>
              <p>
                We carefully evaluate accessibility, guest comfort, accommodation, ceremony flow,
                photography opportunities, entertainment logistics and countless other details that are
                often overlooked.
              </p>
              <p>
                Every recommendation is made with one goal in mind: to ensure your wedding feels
                effortless from beginning to end.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <SectionHeading
              className="md:col-span-5"
              eyebrow="Partners"
              title="Trusted Relationships. Exceptional Locations."
            />
            <div className="md:col-span-7 space-y-4 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
              <p>
                Over time, we have built valuable relationships with some of Portugal’s most exclusive
                wedding venues and hospitality partners.
              </p>
              <p>
                This allows us to recommend locations recognised not only for their beauty, but also for
                their outstanding service, exceptional cuisine and commitment to delivering unforgettable
                guest experiences.
              </p>
              <p>
                Each venue we recommend has been selected for its quality, elegance and ability to host
                extraordinary celebrations.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <SectionHeading
              className="md:col-span-5"
              eyebrow="Beyond weddings"
              title="Creating Experiences, Not Simply Weddings"
            />
            <div className="md:col-span-7 space-y-4 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
              <p>
                The right venue transforms a celebration into an experience. It becomes the place where
                emotions are shared, families come together, friendships are celebrated and memories are
                created for generations.
              </p>
              <p>
                At Maison Yasmini, we don’t simply help you choose a venue. We help you discover the
                place where your love story truly belongs.
              </p>
              <p className="pt-4 font-serif text-lg italic text-[rgb(var(--azul-safira))]">
                Maison Yasmini. Extraordinary Venues. Timeless Celebrations. Beautiful Memories.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-28 bg-[rgb(var(--azul-safira))] py-20 md:py-28">
        <Container className="text-center">
          <h2 className="mx-auto max-w-xl font-serif text-3xl font-normal text-[rgb(var(--marfim))] md:text-4xl">
            Ready to discover your venue?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[rgb(var(--azul-claro))]">
            Tell us your date, guest count and the atmosphere you are dreaming of. We will guide you
            from there.
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
