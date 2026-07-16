import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
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

export default function JournalPost() {
  const { content, localizePath, lang } = useLang()
  const params = useParams()
  const post = content.journal.posts.find((p) => p.slug === params.slug)
  const cover = post ? coverBySlug[post.slug] ?? imageUrls.hero : imageUrls.hero
  const dateLocale = lang === 'pt' ? 'pt-PT' : 'en-GB'
  const t = content.journal

  useSeo({
    title: post?.title ?? t.title,
    path: post ? `/journal/${post.slug}` : '/journal',
    description: post?.excerpt,
    ogImage: cover,
  })

  if (!post) {
    return (
      <div className="pt-14 md:pt-20">
        <Container>
          <div className="rounded-[32px] bg-[rgba(var(--marfim),0.65)] p-10 ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)]">
            <div className="font-serif text-3xl">{t.notFoundTitle}</div>
            <div className="mt-4 text-sm text-[rgb(var(--azul-safira))]">{t.notFoundBody}</div>
            <div className="mt-8">
              <Button to={localizePath('/journal')} variant="secondary">
                <ArrowLeft className="mr-2 h-4 w-4" /> {content.common.ctaBackToJournal}
              </Button>
            </div>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div>
      <section className="pt-14 md:pt-20">
        <Container>
          <Link
            to={localizePath('/journal')}
            className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-[rgb(var(--azul-safira))] no-underline hover:text-[rgb(var(--azul-noite))]"
          >
            <ArrowLeft className="h-4 w-4" /> {content.common.ctaBackToJournal}
          </Link>

          <div className="mt-8 grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <div className="text-xs tracking-[0.18em] text-[rgb(var(--azul-safira))]">
                {post.category.toUpperCase()} ·{' '}
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt, dateLocale)}</time>
              </div>
              <h1 className="mt-4 text-4xl font-medium leading-[1.06] md:text-6xl">{post.title}</h1>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
                {post.excerpt}
              </p>
              <div className="mt-10">
                <Button to={localizePath('/contact')} size="lg">
                  {t.postCtaBegin} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative overflow-hidden rounded-[32px] ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)]">
                <img
                  src={cover}
                  alt={post.title}
                  className="h-[360px] w-full object-cover md:h-[520px]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(var(--azul-noite),0.32),transparent_65%)]" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-16 md:mt-20">
        <Container>
          <article className="mx-auto max-w-[760px]">
            <div className="rounded-[34px] bg-[rgba(var(--marfim),0.65)] p-9 ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)] md:p-12">
              <div className="space-y-5">
                {post.content.map((block, index) =>
                  block.type === 'h2' ? (
                    <h2
                      key={`h2-${index}`}
                      className="pt-4 font-serif text-2xl font-normal leading-snug tracking-wide text-[rgb(var(--azul-safira))] md:text-3xl"
                    >
                      {block.text}
                    </h2>
                  ) : (
                    <p
                      key={`p-${index}`}
                      className="text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base"
                    >
                      {block.text}
                    </p>
                  ),
                )}
              </div>
            </div>
          </article>
        </Container>
      </section>
    </div>
  )
}
