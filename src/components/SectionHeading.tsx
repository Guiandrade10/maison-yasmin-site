import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type Props = {
  eyebrow?: string
  title: string
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({ eyebrow, title, description, align = 'left', className }: Props) {
  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left', className)}>
      {eyebrow ? (
        <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-azul-real md:text-xs md:tracking-[0.28em]">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-3 font-serif text-3xl font-normal leading-snug tracking-wide text-[rgb(var(--azul-safira))] md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className={cn('mt-4 max-w-2xl text-sm leading-relaxed text-[rgb(var(--azul-safira))] opacity-70', align === 'center' && 'mx-auto')}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
