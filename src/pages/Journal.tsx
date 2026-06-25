import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { journalPosts } from '@/data/content'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export default function Journal() {
  useDocumentTitle('Journal')

  return (
    <div>
      <section className="pt-14 md:pt-20">
        <Container>
          <SectionHeading
            eyebrow="Journal"
            title="Guides for international couples planning in Algarve."
            description="SEO-first topics written with calm clarity about budgets, venues, timelines and legal basics."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-12">
            {journalPosts.map((post, idx) => (
              <Link
                key={post.slug}
                to={`/journal/${post.slug}`}
                className={`group overflow-hidden rounded-[30px] bg-[rgba(var(--my-warm-white),0.65)] ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)] no-underline transition hover:bg-[rgba(var(--my-ivory),0.85)] ${
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
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(var(--my-black),0.55),transparent_60%)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-xs tracking-[0.18em] text-[rgba(var(--my-warm-white),0.85)]">
                      {post.category.toUpperCase()} · {post.publishedAt}
                    </div>
                    <div className="mt-2 font-[var(--my-font-serif)] text-2xl text-[rgb(var(--my-warm-white))] md:text-3xl">
                      {post.title}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-[rgb(var(--my-dark-brown))]">{post.excerpt}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-[rgb(var(--my-dark-brown))]">
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

