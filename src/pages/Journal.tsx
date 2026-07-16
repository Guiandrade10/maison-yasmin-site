import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { imageUrls } from '@/data/content'
import { useSeo } from '@/hooks/useSeo'
import { useLang } from '@/i18n/LangContext'

const coverBySlug: Record<string, string> = {
  'how-much-does-a-destination-wedding-in-algarve-cost': imageUrls.detail,
  'best-intimate-wedding-venues-in-algarve': imageUrls.hero,
}

function formatDate(isoDate: string, locale: string) {
  const [year, month] = isoDate.split('-')
  const monthName = new Date(Number(year), Number(month) - 1).toLocaleString(locale, {
    month: 'long',
  })
  return `${monthName} ${year}`
}

export default function Journal() {
  const { content, localizePath, lang } = useLang()
  useSeo({
    title: content.seo.journal.title,
    path: '/journal',
    description: content.seo.journal.description,
  })

  const t = content.journal
  const dateLocale = lang === 'pt' ? 'pt-PT' : 'en-GB'

  return (
    <div>
      <section className="pt-14 md:pt-20">
        <Container>
          <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

          {t.provisionalNote && (
            <p className="mt-6 max-w-2xl text-xs italic text-[rgb(var(--azul-safira))] opacity-75 md:text-sm">
              {t.provisionalNote}
            </p>
          )}

          <div className="mt-10 grid gap-5 md:grid-cols-12">
            {t.posts.map((post, idx) => {
              const cover = coverBySlug[post.slug] ?? imageUrls.hero
              return (
                <Link
                  key={post.slug}
                  to={localizePath(`/journal/${post.slug}`)}
                  className={`group overflow-hidden rounded-[30px] bg-[rgba(var(--marfim),0.65)] ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)] no-underline transition hover:bg-[rgba(var(--ouro-rose),0.85)] ${
                    idx === 0 ? 'md:col-span-7' : 'md:col-span-5'
                  }`}
                >
                  <div className="relative">
                    <img
                      src={cover}
                      alt={post.title}
                      className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(var(--azul-noite),0.55),transparent_60%)]" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-xs tracking-[0.18em] text-[rgba(var(--marfim),0.85)]">
                        {post.category.toUpperCase()} ·{' '}
                        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt, dateLocale)}</time>
                      </div>
                      <div className="mt-2 font-serif text-2xl text-[rgb(var(--marfim))] md:text-3xl">
                        {post.title}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-[rgb(var(--azul-safira))]">{post.excerpt}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-[rgb(var(--azul-safira))]">
                      {t.readCta}{' '}
                      <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </Container>
      </section>
    </div>
  )
}
