import { ArrowLeft } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { useSeo } from '@/hooks/useSeo'

export default function NotFound() {
  useSeo({
    title: 'Page not found',
    description: 'Page not found. Return to Maison Yasmini — boutique wedding planning in the Algarve.',
  })

  return (
    <div className="pt-14 md:pt-20">
      <Container>
        <div className="rounded-[34px] bg-[rgba(var(--marfim),0.65)] p-10 ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)] md:p-14">
          <div className="font-serif text-4xl leading-tight">Page not found</div>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
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

