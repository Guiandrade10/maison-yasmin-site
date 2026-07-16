import { useId, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { siteConfig } from '@/config/site'
import { useSeo } from '@/hooks/useSeo'
import { useLang } from '@/i18n/LangContext'

type FormState = {
  names: string
  email: string
  country: string
  weddingDate: string
  guests: string
  serviceInterest: string
  venueSelected: string
  inspirationLink: string
  message: string
}

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const { content, localizePath } = useLang()
  useSeo({
    title: content.seo.contact.title,
    path: '/contact',
    description: content.seo.contact.description,
  })

  const t = content.contact
  const f = t.form
  const serviceOptions = f.serviceOptions
  const initialForm: FormState = {
    names: '',
    email: '',
    country: '',
    weddingDate: '',
    guests: '',
    serviceInterest: serviceOptions[0],
    venueSelected: f.venueSelectedOptions.notYet,
    inspirationLink: '',
    message: '',
  }

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
    if (!form.names.trim()) next.names = f.errorNames
    if (!form.email.trim()) next.email = f.errorEmailRequired
    else if (!emailPattern.test(form.email.trim())) next.email = f.errorEmailInvalid
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
          serviceInterest: form.serviceInterest,
          venueSelected: form.venueSelected,
          inspirationLink: form.inspirationLink,
          message: form.message,
          _subject: `Maison Yasmini, inquiry from ${form.names || form.email}`,
        }),
      })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      setStatus('success')
      setForm(initialForm)
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error && error.message ? f.errorRetry : f.errorGeneric)
    }
  }

  return (
    <div>
      <section className="pt-14 md:pt-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <SectionHeading
              className="md:col-span-5"
              eyebrow={t.eyebrow}
              title={t.title}
              description={t.description}
            />

            <div className="md:col-span-7">
              <div className="rounded-[34px] bg-[rgba(var(--marfim),0.65)] p-8 ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)] md:p-10">
                {status === 'success' ? (
                  <div>
                    <div className="font-serif text-3xl leading-tight">{f.thankYouTitle}</div>
                    <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
                      {f.thankYouBody}
                    </p>
                    <div className="mt-8 text-xs text-[rgb(var(--azul-safira))] opacity-80">
                      {f.preferEmail}{' '}
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
                        <span className="text-xs font-medium tracking-[0.14em] text-[rgb(var(--azul-safira))]">
                          {f.labelNames}
                        </span>
                        <input
                          value={form.names}
                          onChange={(e) => update('names', e.target.value)}
                          required
                          aria-invalid={Boolean(fieldErrors.names)}
                          aria-describedby={fieldErrors.names ? namesErrorId : undefined}
                          className="h-11 rounded-2xl bg-[rgba(var(--ouro-rose),0.75)] px-4 text-sm outline-none ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)] focus:ring-[rgb(var(--azul-claro))]"
                        />
                        {fieldErrors.names && (
                          <span id={namesErrorId} className="text-xs text-[rgb(var(--azul-safira))]">
                            {fieldErrors.names}
                          </span>
                        )}
                      </label>
                      <label className="grid gap-2">
                        <span className="text-xs font-medium tracking-[0.14em] text-[rgb(var(--azul-safira))]">
                          {f.labelEmail}
                        </span>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => update('email', e.target.value)}
                          required
                          aria-invalid={Boolean(fieldErrors.email)}
                          aria-describedby={fieldErrors.email ? emailErrorId : undefined}
                          className="h-11 rounded-2xl bg-[rgba(var(--ouro-rose),0.75)] px-4 text-sm outline-none ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)] focus:ring-[rgb(var(--azul-claro))]"
                        />
                        {fieldErrors.email && (
                          <span id={emailErrorId} className="text-xs text-[rgb(var(--azul-safira))]">
                            {fieldErrors.email}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <label className="grid gap-2">
                        <span className="text-xs font-medium tracking-[0.14em] text-[rgb(var(--azul-safira))]">
                          {f.labelCountry}
                        </span>
                        <input
                          value={form.country}
                          onChange={(e) => update('country', e.target.value)}
                          className="h-11 rounded-2xl bg-[rgba(var(--ouro-rose),0.75)] px-4 text-sm outline-none ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)] focus:ring-[rgb(var(--azul-claro))]"
                        />
                      </label>
                      <label className="grid gap-2">
                        <span className="text-xs font-medium tracking-[0.14em] text-[rgb(var(--azul-safira))]">
                          {f.labelWeddingDate}
                        </span>
                        <input
                          type="date"
                          value={form.weddingDate}
                          onChange={(e) => update('weddingDate', e.target.value)}
                          className="h-11 rounded-2xl bg-[rgba(var(--ouro-rose),0.75)] px-4 text-sm outline-none ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)] focus:ring-[rgb(var(--azul-claro))]"
                        />
                      </label>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <label className="grid gap-2">
                        <span className="text-xs font-medium tracking-[0.14em] text-[rgb(var(--azul-safira))]">
                          {f.labelGuests}
                        </span>
                        <input
                          value={form.guests}
                          onChange={(e) => update('guests', e.target.value)}
                          placeholder={f.guestsPlaceholder}
                          className="h-11 rounded-2xl bg-[rgba(var(--ouro-rose),0.75)] px-4 text-sm outline-none ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)] focus:ring-[rgb(var(--azul-claro))]"
                        />
                      </label>
                      <label className="grid gap-2">
                        <span className="text-xs font-medium tracking-[0.14em] text-[rgb(var(--azul-safira))]">
                          {f.labelService}
                        </span>
                        <select
                          value={form.serviceInterest}
                          onChange={(e) => update('serviceInterest', e.target.value)}
                          className="h-11 rounded-2xl bg-[rgba(var(--ouro-rose),0.75)] px-4 text-sm outline-none ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)] focus:ring-[rgb(var(--azul-claro))]"
                        >
                          {serviceOptions.map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <label className="grid gap-2">
                        <span className="text-xs font-medium tracking-[0.14em] text-[rgb(var(--azul-safira))]">
                          {f.labelVenueSelected}
                        </span>
                        <select
                          value={form.venueSelected}
                          onChange={(e) => update('venueSelected', e.target.value)}
                          className="h-11 rounded-2xl bg-[rgba(var(--ouro-rose),0.75)] px-4 text-sm outline-none ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)] focus:ring-[rgb(var(--azul-claro))]"
                        >
                          {[f.venueSelectedOptions.yes, f.venueSelectedOptions.notYet].map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                      </label>

                      <label className="grid gap-2">
                        <span className="text-xs font-medium tracking-[0.14em] text-[rgb(var(--azul-safira))]">
                          {f.labelInspiration}
                        </span>
                        <input
                          value={form.inspirationLink}
                          onChange={(e) => update('inspirationLink', e.target.value)}
                          placeholder={f.inspirationPlaceholder}
                          className="h-11 rounded-2xl bg-[rgba(var(--ouro-rose),0.75)] px-4 text-sm outline-none ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)] focus:ring-[rgb(var(--azul-claro))]"
                        />
                      </label>
                    </div>

                    <label className="grid gap-2">
                      <span className="text-xs font-medium tracking-[0.14em] text-[rgb(var(--azul-safira))]">
                        {f.labelMessage}
                      </span>
                      <textarea
                        value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                        rows={6}
                        className="resize-none rounded-3xl bg-[rgba(var(--ouro-rose),0.75)] px-4 py-3 text-sm outline-none ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)] focus:ring-[rgb(var(--azul-claro))]"
                      />
                    </label>

                    <div className="hidden" aria-hidden="true">
                      <label>
                        {f.honeypotLabel}
                        <input type="text" name="company" tabIndex={-1} autoComplete="off" />
                      </label>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="flex w-full max-w-full items-center justify-center rounded-full bg-[rgb(var(--azul-noite))] px-6 py-3 text-sm font-medium tracking-wide text-[rgb(var(--marfim))] transition hover:bg-[rgb(var(--azul-safira))] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--azul-claro))] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {status === 'sending' ? f.submitSending : f.submitIdle}
                        {status !== 'sending' && <ArrowRight className="ml-2 h-4 w-4 shrink-0" />}
                      </button>

                      {status === 'error' && errorMessage && (
                        <div
                          role="alert"
                          className="mt-4 rounded-2xl bg-[rgba(var(--dourado-champanhe),0.35)] px-4 py-3 text-xs leading-relaxed text-[rgb(var(--azul-safira))]"
                        >
                          {errorMessage}
                        </div>
                      )}

                      <div className="mt-3 space-y-1 text-xs leading-relaxed text-[rgb(var(--azul-safira))] opacity-80">
                        <div>
                          {f.privacyLine.lead}
                          <Link className="underline underline-offset-4" to={localizePath('/privacy')}>
                            {f.privacyLine.linkLabel}
                          </Link>
                          {f.privacyLine.tail}
                        </div>
                        <div>
                          {f.preferEmail}{' '}
                          <a
                            className="underline underline-offset-4"
                            href={`mailto:${siteConfig.contactEmail}`}
                          >
                            {siteConfig.contactEmail}
                          </a>
                          .
                        </div>
                        <div>
                          {f.preferWhatsAppQuestion}{' '}
                          <a
                            className="underline underline-offset-4"
                            href={siteConfig.whatsappUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            {f.preferWhatsAppLink}
                          </a>
                          .
                        </div>
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
