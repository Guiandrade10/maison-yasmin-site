import { useId, useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { siteConfig } from '@/config/site'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

type FormState = {
  names: string
  email: string
  country: string
  weddingDate: string
  guests: string
  packageInterest: string
  venueSelected: string
  inspirationLink: string
  message: string
}

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

const packageOptions = [
  'Small wedding package from 3,000€',
  'Medium wedding package from 5,500€',
  'Large wedding package from 8,500€',
  'Custom proposal for 100+ guests',
] as const

const initialForm: FormState = {
  names: '',
  email: '',
  country: '',
  weddingDate: '',
  guests: '',
  packageInterest: packageOptions[0],
  venueSelected: 'Not yet',
  inspirationLink: '',
  message: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  useDocumentTitle('Contact')

  const [form, setForm] = useState<FormState>(initialForm)
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const namesErrorId = useId()
  const emailErrorId = useId()

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (fieldErrors[key]) {
      setFieldErrors((prev) => {
        const next = { ...prev }
        delete next[key]
        return next
      })
    }
  }

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.names.trim()) next.names = 'Please share the names of the couple.'
    if (!form.email.trim()) next.email = 'Please add an email so we can reply.'
    else if (!emailPattern.test(form.email.trim())) next.email = 'That email address does not look right.'
    setFieldErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'sending') return

    const formEl = event.currentTarget
    const honeypot = (formEl.elements.namedItem('company') as HTMLInputElement | null)?.value
    if (honeypot) return

    if (!validate()) return

    setStatus('sending')
    setErrorMessage(null)

    try {
      const response = await fetch(siteConfig.formEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          names: form.names,
          email: form.email,
          country: form.country,
          weddingDate: form.weddingDate,
          guests: form.guests,
          packageInterest: form.packageInterest,
          venueSelected: form.venueSelected,
          inspirationLink: form.inspirationLink,
          message: form.message,
          _subject: `Maison Yasmini — inquiry from ${form.names || form.email}`,
        }),
      })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      setStatus('success')
      setForm(initialForm)
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error && error.message
          ? 'We could not send your inquiry right now. Please try again in a moment, or write to us directly.'
          : 'Something went wrong on our side. Please write to us directly for now.',
      )
    }
  }

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
                {status === 'success' ? (
                  <div>
                    <div className="font-[var(--my-font-serif)] text-3xl leading-tight">Thank you.</div>
                    <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--my-dark-brown))] md:text-base">
                      Your inquiry is with us. We reply within two working days from the Algarve.
                    </p>
                    <div className="mt-8 text-xs text-[rgb(var(--my-dark-brown))] opacity-80">
                      Prefer email? Write to{' '}
                      <a
                        className="underline underline-offset-4"
                        href={`mailto:${siteConfig.contactEmail}`}
                      >
                        {siteConfig.contactEmail}
                      </a>
                      .
                    </div>
                  </div>
                ) : (
                  <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
                    <div className="grid gap-5 md:grid-cols-2">
                      <label className="grid gap-2">
                        <span className="text-xs font-medium tracking-[0.14em] text-[rgb(var(--my-dark-brown))]">
                          NAMES
                        </span>
                        <input
                          value={form.names}
                          onChange={(e) => update('names', e.target.value)}
                          required
                          aria-invalid={Boolean(fieldErrors.names)}
                          aria-describedby={fieldErrors.names ? namesErrorId : undefined}
                          className="h-11 rounded-2xl bg-[rgba(var(--my-ivory),0.75)] px-4 text-sm outline-none ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)] focus:ring-[rgb(var(--my-taupe))]"
                        />
                        {fieldErrors.names && (
                          <span id={namesErrorId} className="text-xs text-[rgb(var(--my-dark-brown))]">
                            {fieldErrors.names}
                          </span>
                        )}
                      </label>
                      <label className="grid gap-2">
                        <span className="text-xs font-medium tracking-[0.14em] text-[rgb(var(--my-dark-brown))]">
                          EMAIL
                        </span>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => update('email', e.target.value)}
                          required
                          aria-invalid={Boolean(fieldErrors.email)}
                          aria-describedby={fieldErrors.email ? emailErrorId : undefined}
                          className="h-11 rounded-2xl bg-[rgba(var(--my-ivory),0.75)] px-4 text-sm outline-none ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)] focus:ring-[rgb(var(--my-taupe))]"
                        />
                        {fieldErrors.email && (
                          <span id={emailErrorId} className="text-xs text-[rgb(var(--my-dark-brown))]">
                            {fieldErrors.email}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <label className="grid gap-2">
                        <span className="text-xs font-medium tracking-[0.14em] text-[rgb(var(--my-dark-brown))]">
                          COUNTRY
                        </span>
                        <input
                          value={form.country}
                          onChange={(e) => update('country', e.target.value)}
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
                          onChange={(e) => update('weddingDate', e.target.value)}
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
                          onChange={(e) => update('guests', e.target.value)}
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
                          onChange={(e) => update('packageInterest', e.target.value)}
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
                          onChange={(e) => update('venueSelected', e.target.value)}
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
                          INSPIRATION LINK
                        </span>
                        <input
                          value={form.inspirationLink}
                          onChange={(e) => update('inspirationLink', e.target.value)}
                          placeholder="Pinterest, Google Drive, Instagram…"
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
                        onChange={(e) => update('message', e.target.value)}
                        rows={6}
                        className="resize-none rounded-3xl bg-[rgba(var(--my-ivory),0.75)] px-4 py-3 text-sm outline-none ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)] focus:ring-[rgb(var(--my-taupe))]"
                      />
                    </label>

                    <div className="hidden" aria-hidden="true">
                      <label>
                        Do not fill this field
                        <input type="text" name="company" tabIndex={-1} autoComplete="off" />
                      </label>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="flex w-full max-w-full items-center justify-center rounded-full bg-[rgb(var(--my-black))] px-6 py-3 text-sm font-medium tracking-wide text-[rgb(var(--my-warm-white))] transition hover:bg-[rgb(var(--my-dark-brown))] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--my-taupe))] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {status === 'sending' ? 'Sending…' : 'Send inquiry'}
                        {status !== 'sending' && <ArrowRight className="ml-2 h-4 w-4 shrink-0" />}
                      </button>

                      {status === 'error' && errorMessage && (
                        <div
                          role="alert"
                          className="mt-4 rounded-2xl bg-[rgba(var(--my-sand),0.35)] px-4 py-3 text-xs leading-relaxed text-[rgb(var(--my-dark-brown))]"
                        >
                          {errorMessage}
                        </div>
                      )}

                      <div className="mt-3 text-xs leading-relaxed text-[rgb(var(--my-dark-brown))] opacity-80">
                        Prefer email? Write to{' '}
                        <a
                          className="underline underline-offset-4"
                          href={`mailto:${siteConfig.contactEmail}`}
                        >
                          {siteConfig.contactEmail}
                        </a>
                        .
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
