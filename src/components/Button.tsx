import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'

type Props = {
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: ReactNode
}

const base =
  'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--my-taupe))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--my-warm-white))]'

const variants: Record<NonNullable<Props['variant']>, string> = {
  primary:
    'bg-[rgb(var(--my-black))] text-[rgb(var(--my-warm-white))] hover:bg-[rgb(var(--my-dark-brown))]',
  secondary:
    'bg-[rgb(var(--my-ivory))] text-[rgb(var(--my-black))] ring-1 ring-inset ring-[rgb(var(--my-sand))] hover:bg-[rgb(var(--my-sand))]',
  ghost: 'bg-transparent text-[rgb(var(--my-black))] hover:bg-[rgb(var(--my-ivory))]',
}

const sizes: Record<NonNullable<Props['size']>, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-sm',
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

