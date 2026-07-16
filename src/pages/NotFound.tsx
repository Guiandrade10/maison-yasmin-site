import { ArrowLeft } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { useSeo } from '@/hooks/useSeo'
import { useLang } from '@/i18n/LangContext'

export default function NotFound() {
  const { content, localizePath } = useLang()
  useSeo({
    title: content.seo.notFound.title,
    description: content.seo.notFound.description,
  })

  const t = content.notFound

  return (
    <div className="pt-14 md:pt-20">
      <Container>
        <div className="rounded-[34px] bg-[rgba(var(--marfim),0.65)] p-10 ring-1 ring-inset ring-[rgba(var(--dourado-champanhe),0.85)] md:p-14">
          <div className="font-serif text-4xl leading-tight">{t.title}</div>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-[rgb(var(--azul-safira))] md:text-base">
            {t.description}
          </p>
          <div className="mt-8">
            <Button to={localizePath('/')} variant="secondary" size="lg">
              <ArrowLeft className="mr-2 h-4 w-4" /> {t.ctaBack}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
