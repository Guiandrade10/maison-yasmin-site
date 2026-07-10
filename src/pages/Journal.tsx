import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { journalPosts } from '@/data/content'
import { useSeo } from '@/hooks/useSeo'

function formatDate(isoDate: string) {
  const [year, month] = isoDate.split('-')
  const monthName = new Date(Number(year), Number(month) - 1).toLocaleString('en-GB', {
    month: 'long',
  })
  return `${monthName} ${year}`
}

export default function Journal() {
  useSeo({
    title: 'Journal',
    path: '/journal',
    description:
      'Editorial notes on intimate weddings, Algarve venues and destination planning, from the Maison Yasmini journal.',
  })

  return (
    <div>
      <section className="pt-14 md:pt-20">
        <Container>
          <SectionHeading
            eyebrow="Journal"
            title="Guides for international couples planning a wedding in the Algarve."
            description="Practical reads on budgets, venues, timelines and what to know before planning a wedding in Portugal."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-12">
            {journalPosts.map((post, idx) => (
              <Link
                key={post.slug}
                to={`/journal/${post.slug}`}
                className={`group overflow-hidden rounded-[30px] bg-[rgba(var(--marfim),0.65)] ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)] no-underline transition hover:bg-[rgba(var(--ouro-rose),0.85)] ${
                  idx === 0 ? 'md:col-span-7' : 'md:col-span-5'
                }`}
              >
                <div className="relative">
                  <img
                    src={post.coverImageUrl}
                    alt={post.title}
                    className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(var(--azul-noite),0.55),transparent_60%)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-xs tracking-[0.18em] text-[rgba(var(--marfim),0.85)]">
                      {post.category.toUpperCase()} ·{' '}
                      <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                    </div>
                    <div className="mt-2 font-serif text-2xl text-[rgb(var(--marfim))] md:text-3xl">
                      {post.title}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-[rgb(var(--azul-safira))]">{post.excerpt}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-[rgb(var(--azul-safira))]">
                    READ <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}

