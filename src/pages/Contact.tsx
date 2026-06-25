import { useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

type FormState = {
  names: string
  email: string
  country: string
  weddingDate: string
  guests: string
  packageInterest: string
  venueSelected: string
  pinterestLink: string
  message: string
}

const packageOptions = ['Small wedding package from 3.000€', 'Medium wedding package from 5.500€', 'Large wedding package from 8.500€', 'Custom proposal for 100+ guests'] as const

function buildMailtoUrl(to: string, subject: string, body: string) {
  const params = new URLSearchParams({
    subject,
    body,
  })
  return `mailto:${to}?${params.toString()}`
}

export default function Contact() {
  useDocumentTitle('Contact')

  const [fileName, setFileName] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<FormState>({
    names: '',
    email: '',
    country: '',
    weddingDate: '',
    guests: '',
    packageInterest: packageOptions[0],
    venueSelected: 'Not yet',
    pinterestLink: '',
    message: '',
  })

  const mailto = useMemo(() => {
    const lines = [
      `Names: ${form.names}`,
      `Email: ${form.email}`,
      `Country: ${form.country}`,
      `Wedding date: ${form.weddingDate}`,
      `Estimated guests: ${form.guests}`,
      `Package interest: ${form.packageInterest}`,
      `Venue selected: ${form.venueSelected}`,
      `Pinterest link: ${form.pinterestLink}`,
      fileName ? `Vision board file: ${fileName} (please attach to this email)` : `Vision board file: (not provided)`,
      '',
      'Message:',
      form.message,
    ]
    return buildMailtoUrl(siteConfig.contactEmail, 'Maison Yasmini Inquiry', lines.join('\n'))
  }, [fileName, form])

  return (
    <div>
      <section className="pt-14 md:pt-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <SectionHeading
              className="md:col-span-5"
              eyebrow="Contact"
              title="A calm first step."
              description="Share your date, guest count and preferred package. We will respond with clarity and the next steps."
            />

            <div className="md:col-span-7">
              <div className="rounded-[34px] bg-[rgba(var(--my-warm-white),0.65)] p-8 ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)] md:p-10">
                {submitted ? (
                  <div>
                    <div className="font-[var(--my-font-serif)] text-3xl leading-tight">Thank you.</div>
                    <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--my-dark-brown))] md:text-base">
                      Your inquiry is ready to send. If you uploaded a vision board, please attach it to the email
                      before sending.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Button href={mailto} size="lg">
                        Open email <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button to="/" variant="secondary" size="lg">
                        Back to Home
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form
                    className="grid gap-5"
                    onSubmit={(e) => {
                      e.preventDefault()
                      setSubmitted(true)
                    }}
                  >
                    <div className="grid gap-5 md:grid-cols-2">
                      <label className="grid gap-2">
                        <span className="text-xs font-medium tracking-[0.14em] text-[rgb(var(--my-dark-brown))]">
                          NAMES
                        </span>
                        <input
                          value={form.names}
                          onChange={(e) => setForm((v) => ({ ...v, names: e.target.value }))}
                          required
                          className="h-11 rounded-2xl bg-[rgba(var(--my-ivory),0.75)] px-4 text-sm outline-none ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)] focus:ring-[rgb(var(--my-taupe))]"
                        />
                      </label>
                      <label className="grid gap-2">
                        <span className="text-xs font-medium tracking-[0.14em] text-[rgb(var(--my-dark-brown))]">
                          EMAIL
                        </span>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))}
                          required
                          className="h-11 rounded-2xl bg-[rgba(var(--my-ivory),0.75)] px-4 text-sm outline-none ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)] focus:ring-[rgb(var(--my-taupe))]"
                        />
                      </label>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <label className="grid gap-2">
                        <span className="text-xs font-medium tracking-[0.14em] text-[rgb(var(--my-dark-brown))]">
                          COUNTRY
                        </span>
                        <input
                          value={form.country}
                          onChange={(e) => setForm((v) => ({ ...v, country: e.target.value }))}
                          className="h-11 rounded-2xl bg-[rgba(var(--my-ivory),0.75)] px-4 text-sm outline-none ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)] focus:ring-[rgb(var(--my-taupe))]"
                        />
                      </label>
                      <label className="grid gap-2">
                        <span className="text-xs font-medium tracking-[0.14em] text-[rgb(var(--my-dark-brown))]">
                          WEDDING DATE
                        </span>
                        <input
                          type="date"
                          value={form.weddingDate}
                          onChange={(e) => setForm((v) => ({ ...v, weddingDate: e.target.value }))}
                          className="h-11 rounded-2xl bg-[rgba(var(--my-ivory),0.75)] px-4 text-sm outline-none ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)] focus:ring-[rgb(var(--my-taupe))]"
                        />
                      </label>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <label className="grid gap-2">
                        <span className="text-xs font-medium tracking-[0.14em] text-[rgb(var(--my-dark-brown))]">
                          ESTIMATED GUESTS
                        </span>
                        <input
                          value={form.guests}
                          onChange={(e) => setForm((v) => ({ ...v, guests: e.target.value }))}
                          placeholder="e.g. 40"
                          className="h-11 rounded-2xl bg-[rgba(var(--my-ivory),0.75)] px-4 text-sm outline-none ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)] focus:ring-[rgb(var(--my-taupe))]"
                        />
                      </label>
                      <label className="grid gap-2">
                        <span className="text-xs font-medium tracking-[0.14em] text-[rgb(var(--my-dark-brown))]">
                          PACKAGE INTEREST
                        </span>
                        <select
                          value={form.packageInterest}
                          onChange={(e) => setForm((v) => ({ ...v, packageInterest: e.target.value }))}
                          className="h-11 rounded-2xl bg-[rgba(var(--my-ivory),0.75)] px-4 text-sm outline-none ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)] focus:ring-[rgb(var(--my-taupe))]"
                        >
                          {packageOptions.map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <label className="grid gap-2">
                        <span className="text-xs font-medium tracking-[0.14em] text-[rgb(var(--my-dark-brown))]">
                          VENUE ALREADY SELECTED?
                        </span>
                        <select
                          value={form.venueSelected}
                          onChange={(e) => setForm((v) => ({ ...v, venueSelected: e.target.value }))}
                          className="h-11 rounded-2xl bg-[rgba(var(--my-ivory),0.75)] px-4 text-sm outline-none ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)] focus:ring-[rgb(var(--my-taupe))]"
                        >
                          {['Yes', 'Not yet'].map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                      </label>

                      <label className="grid gap-2">
                        <span className="text-xs font-medium tracking-[0.14em] text-[rgb(var(--my-dark-brown))]">
                          PINTEREST LINK
                        </span>
                        <input
                          value={form.pinterestLink}
                          onChange={(e) => setForm((v) => ({ ...v, pinterestLink: e.target.value }))}
                          placeholder="https://"
                          className="h-11 rounded-2xl bg-[rgba(var(--my-ivory),0.75)] px-4 text-sm outline-none ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)] focus:ring-[rgb(var(--my-taupe))]"
                        />
                      </label>
                    </div>

                    <label className="grid gap-2">
                      <span className="text-xs font-medium tracking-[0.14em] text-[rgb(var(--my-dark-brown))]">
                        MESSAGE
                      </span>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm((v) => ({ ...v, message: e.target.value }))}
                        rows={6}
                        className="resize-none rounded-3xl bg-[rgba(var(--my-ivory),0.75)] px-4 py-3 text-sm outline-none ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)] focus:ring-[rgb(var(--my-taupe))]"
                      />
                    </label>

                    <label className="grid gap-2">
                      <span className="text-xs font-medium tracking-[0.14em] text-[rgb(var(--my-dark-brown))]">
                        VISION BOARD UPLOAD
                      </span>
                      <input
                        type="file"
                        onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                        className="h-11 rounded-2xl bg-[rgba(var(--my-ivory),0.75)] px-4 py-2 text-sm outline-none ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)] file:mr-4 file:rounded-full file:border-0 file:bg-[rgb(var(--my-black))] file:px-4 file:py-2 file:text-xs file:font-medium file:tracking-[0.16em] file:text-[rgb(var(--my-warm-white))] hover:file:bg-[rgb(var(--my-dark-brown))]"
                      />
                      <div className={cn('text-xs text-[rgb(var(--my-dark-brown))] opacity-80', !fileName && 'hidden')}>
                        Selected: {fileName}
                      </div>
                    </label>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-full bg-[rgb(var(--my-black))] px-6 py-3 text-sm font-medium tracking-wide text-[rgb(var(--my-warm-white))] transition hover:bg-[rgb(var(--my-dark-brown))] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--my-taupe))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--my-warm-white))]"
                      >
                        Prepare email <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                      <div className="mt-3 text-xs leading-relaxed text-[rgb(var(--my-dark-brown))] opacity-80">
                        This form prepares a message to send to {siteConfig.contactEmail} via your email client.
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

