import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { cn } from '@/lib/utils'
import { journalPosts } from '@/data/content'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export default function JournalPost() {
  const params = useParams()
  const post = journalPosts.find((p) => p.slug === params.slug)

  useDocumentTitle(post?.title ?? 'Journal')

  if (!post) {
    return (
      <div className="pt-14 md:pt-20">
        <Container>
          <div className="rounded-[32px] bg-[rgba(var(--my-warm-white),0.65)] p-10 ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)]">
            <div className="font-[var(--my-font-serif)] text-3xl">Article not found</div>
            <div className="mt-4 text-sm text-[rgb(var(--my-dark-brown))]">Please return to the Journal.</div>
            <div className="mt-8">
              <Button to="/journal" variant="secondary">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Journal
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
            to="/journal"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-[rgb(var(--my-dark-brown))] no-underline hover:text-[rgb(var(--my-black))]"
          >
            <ArrowLeft className="h-4 w-4" /> BACK TO JOURNAL
          </Link>

          <div className="mt-8 grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <div className="text-xs tracking-[0.18em] text-[rgb(var(--my-dark-brown))]">
                {post.category.toUpperCase()} · {post.publishedAt}
              </div>
              <h1 className="mt-4 text-4xl font-medium leading-[1.06] md:text-6xl">{post.title}</h1>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[rgb(var(--my-dark-brown))] md:text-base">
                {post.excerpt}
              </p>
              <div className="mt-10">
                <Button to="/contact" size="lg">
                  Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative overflow-hidden rounded-[32px] ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)]">
                <img
                  src={post.coverImageUrl}
                  alt={post.title}
                  className="h-[360px] w-full object-cover md:h-[520px]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(var(--my-black),0.32),transparent_65%)]" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-16 md:mt-20">
        <Container>
          <article className="mx-auto max-w-[760px]">
            <div className="rounded-[34px] bg-[rgba(var(--my-warm-white),0.65)] p-9 ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)] md:p-12">
              <div className="space-y-5">
                {post.content.map((p) => (
                  <p
                    key={p}
                    className={cn(
                      'text-sm leading-relaxed text-[rgb(var(--my-dark-brown))] md:text-base',
                    )}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </article>
        </Container>
      </section>
    </div>
  )
}

