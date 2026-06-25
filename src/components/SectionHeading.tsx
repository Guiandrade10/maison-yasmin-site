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
        <div className="text-xs font-medium tracking-[0.18em] text-[rgb(var(--my-dark-brown))]">{eyebrow.toUpperCase()}</div>
      ) : null}
      <h2 className="mt-3 text-3xl font-medium leading-tight md:text-4xl">{title}</h2>
      {description ? (
        <p className={cn('mt-4 max-w-2xl text-sm leading-relaxed text-[rgb(var(--my-dark-brown))]', align === 'center' && 'mx-auto')}>
          {description}
        </p>
      ) : null}
    </div>
  )
}

