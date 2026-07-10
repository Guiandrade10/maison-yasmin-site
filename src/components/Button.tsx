import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from 'react'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'gold'
type Size = 'sm' | 'md' | 'lg'

type CommonProps = {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type LinkProps = CommonProps & {
  to: string
  href?: never
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

type AnchorProps = CommonProps & {
  href: string
  to?: never
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target']
  rel?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

type NativeButtonProps = CommonProps & {
  to?: never
  href?: never
} & Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  | 'type'
  | 'disabled'
  | 'onClick'
  | 'aria-label'
  | 'aria-describedby'
  | 'aria-controls'
  | 'aria-expanded'
>

type Props = LinkProps | AnchorProps | NativeButtonProps

const base =
  'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium tracking-[0.08em] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--azul-claro))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--marfim))] disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary:
    'bg-[rgb(var(--azul-safira))] text-[rgb(var(--marfim))] hover:bg-[rgb(var(--azul-noite))]',
  secondary:
    'bg-[rgb(var(--ouro-rose))] text-[rgb(var(--azul-safira))] ring-1 ring-inset ring-[rgb(var(--dourado-champanhe))] hover:bg-[rgb(var(--ouro-claro))]',
  ghost:
    'bg-transparent text-[rgb(var(--azul-safira))] hover:bg-[rgb(var(--ouro-rose))]',
  gold:
    'border border-[rgb(var(--dourado-champanhe))] bg-transparent text-[rgb(var(--dourado-champanhe))] hover:bg-[rgba(220,199,161,0.12)]',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3 text-sm',
}

export function Button(props: Props) {
  const { variant = 'primary', size = 'md', className, children } = props
  const classes = cn(base, variants[variant], sizes[size], className)

  if ('to' in props && props.to !== undefined) {
    const linkProps = props as LinkProps
    return (
      <Link to={linkProps.to} className={classes} onClick={linkProps.onClick}>
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href !== undefined) {
    const anchorProps = props as AnchorProps
    return (
      <a
        href={anchorProps.href}
        className={classes}
        target={anchorProps.target}
        rel={anchorProps.rel}
        onClick={anchorProps.onClick}
      >
        {children}
      </a>
    )
  }

  const buttonProps = props as NativeButtonProps
  return (
    <button
      type={buttonProps.type ?? 'button'}
      className={classes}
      disabled={buttonProps.disabled}
      onClick={buttonProps.onClick}
      aria-label={buttonProps['aria-label']}
      aria-describedby={buttonProps['aria-describedby']}
      aria-controls={buttonProps['aria-controls']}
      aria-expanded={buttonProps['aria-expanded']}
    >
      {children}
    </button>
  )
}
