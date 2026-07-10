import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { siteConfig } from '@/config/site'
import { useSeo } from '@/hooks/useSeo'

// TODO(client): this text is a starting draft, not a legal document.
// It must be reviewed by a lawyer familiar with Portuguese and EU (GDPR)
// data protection law before publication. See PENDENCIAS-CLIENTE.md.
export default function Privacy() {
  useSeo({
    title: 'Privacy Policy',
    path: '/privacy',
    description:
      'How Maison Yasmini collects, uses and protects the personal data you share through this website.',
  })

  return (
    <div>
      <section className="pt-14 md:pt-20">
        <Container>
          <SectionHeading
            eyebrow="Legal"
            title="Privacy Policy"
            description={`Last reviewed on ${new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}. This policy explains how ${siteConfig.name} handles personal data submitted through this website.`}
          />

          <article className="mt-10 max-w-[760px] space-y-8 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
            <section>
              <h2 className="font-serif text-2xl font-normal leading-snug tracking-wide md:text-3xl">
                Who we are
              </h2>
              <p className="mt-3">
                {siteConfig.name} is a boutique wedding planning studio based in the Algarve, Portugal.
                We can be reached by email at{' '}
                <a className="underline underline-offset-4" href={`mailto:${siteConfig.contactEmail}`}>
                  {siteConfig.contactEmail}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-normal leading-snug tracking-wide md:text-3xl">
                What we collect
              </h2>
              <p className="mt-3">
                When you send us an inquiry through the contact form, you may share your names, email
                address, country, wedding date, guest count, package interest, venue status, an
                inspiration link and any message you choose to write. We only collect what you enter.
              </p>
              <p className="mt-3">
                We do not use analytics cookies or third-party tracking on this site.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-normal leading-snug tracking-wide md:text-3xl">
                Why we collect it
              </h2>
              <p className="mt-3">
                We use this information solely to respond to your inquiry and, if you decide to work
                with us, to plan and coordinate your wedding. The legal basis under GDPR is the
                performance of a contract at your request, or our legitimate interest in replying to
                enquiries about our services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-normal leading-snug tracking-wide md:text-3xl">
                Who handles the data
              </h2>
              <p className="mt-3">
                The contact form is delivered by a third-party form provider. Your submission travels
                through their servers before reaching our inbox. We rely on providers with GDPR-compliant
                processing agreements. Beyond that, we do not share your data with anyone else unless
                you ask us to introduce you to a specific supplier.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-normal leading-snug tracking-wide md:text-3xl">
                How long we keep it
              </h2>
              <p className="mt-3">
                Enquiries that do not lead to an active project are deleted within twelve months. Data
                related to weddings we plan is kept for the duration of the project and, afterwards,
                for the period required by Portuguese accounting and tax law.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-normal leading-snug tracking-wide md:text-3xl">
                Your rights
              </h2>
              <p className="mt-3">
                Under GDPR, you can ask to access, correct or delete your personal data at any time, or
                to restrict or object to its processing. Write to{' '}
                <a className="underline underline-offset-4" href={`mailto:${siteConfig.contactEmail}`}>
                  {siteConfig.contactEmail}
                </a>{' '}
                and we will respond within thirty days. If you feel we have not handled a request well,
                you can also complain to the Portuguese data protection authority (CNPD).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-normal leading-snug tracking-wide md:text-3xl">
                Changes to this policy
              </h2>
              <p className="mt-3">
                We may update this policy from time to time. The date at the top reflects the most
                recent review.
              </p>
            </section>
          </article>
        </Container>
      </section>
    </div>
  )
}
