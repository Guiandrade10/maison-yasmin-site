import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'

type Props = {
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'gold'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: ReactNode
}

const base =
  'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium tracking-[0.08em] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--azul-claro))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--marfim))]'

const variants: Record<NonNullable<Props['variant']>, string> = {
  primary:
    'bg-[rgb(var(--azul-safira))] text-[rgb(var(--marfim))] hover:bg-[rgb(var(--azul-noite))]',
  secondary:
    'bg-[rgb(var(--ouro-rose))] text-[rgb(var(--azul-safira))] ring-1 ring-inset ring-[rgb(var(--dourado-champanhe))] hover:bg-[rgb(var(--ouro-claro))]',
  ghost:
    'bg-transparent text-[rgb(var(--azul-safira))] hover:bg-[rgb(var(--ouro-rose))]',
  gold:
    'border border-[rgb(var(--dourado-champanhe))] bg-transparent text-[rgb(var(--dourado-champanhe))] hover:bg-[rgba(220,199,161,0.12)]',
}

const sizes: Record<NonNullable<Props['size']>, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3 text-sm',
}

export function Button({ to, href, variant = 'primary', size = 'md', className, children }: Props) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href ?? '#'} className={classes}>
      {children}
    </a>
  )
}
