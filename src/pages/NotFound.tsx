import { ArrowLeft } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export default function NotFound() {
  useDocumentTitle('Not Found')

  return (
    <div className="pt-14 md:pt-20">
      <Container>
        <div className="rounded-[34px] bg-[rgba(var(--my-warm-white),0.65)] p-10 ring-1 ring-inset ring-[rgba(var(--my-sand),0.85)] md:p-14">
          <div className="font-[var(--my-font-serif)] text-4xl leading-tight">Page not found</div>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-[rgb(var(--my-dark-brown))] md:text-base">
            The page you are looking for doesn’t exist. Return to the homepage or explore the main sections.
          </p>
          <div className="mt-8">
            <Button to="/" variant="secondary" size="lg">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

