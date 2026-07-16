import { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useScrolled } from '@/hooks/useScrolled'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { useLang } from '@/i18n/LangContext'

export function SiteHeader() {
  const scrolled = useScrolled(8)
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const { lang, content, localizePath, alternate } = useLang()
  const navigate = useNavigate()

  const items = content.header.navItems.map((item) => ({
    to: localizePath(item.toEn),
    label: item.label,
    children: item.children?.map((c) => ({ to: localizePath(c.toEn), label: c.label })),
  }))

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onClick = (event: MouseEvent) => {
      const target = event.target as Node
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        toggleRef.current &&
        !toggleRef.current.contains(target)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)

    return () => {
      document.documentElement.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open])

  const desktopItems = items.slice(0, items.length - 1) // reserve last for CTA
  const contactPath = localizePath('/contact')
  const homePath = localizePath('/')

  const switchTo = (target: 'en' | 'pt') => {
    if (target === lang) return
    setOpen(false)
    navigate(target === 'en' ? alternate.en : alternate.pt)
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-200',
        scrolled
          ? 'bg-[rgba(250,247,240,0.92)] backdrop-blur-md ring-1 ring-inset ring-[rgba(220,199,161,0.5)]'
          : 'bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <NavLink
          to={homePath}
          className="font-serif text-sm tracking-[0.22em] text-[rgb(var(--azul-safira))] no-underline hover:text-[rgb(var(--azul-noite))]"
          onClick={() => setOpen(false)}
        >
          {content.header.brand.toUpperCase()}
        </NavLink>

        <nav className="hidden items-center gap-6 lg:flex">
          {desktopItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'text-xs font-medium tracking-[0.1em] text-[rgb(var(--azul-safira))] no-underline transition-opacity duration-200 hover:opacity-70',
                  isActive && 'opacity-100 underline underline-offset-4 decoration-[rgb(var(--dourado-champanhe))]',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div
            role="group"
            aria-label={content.header.langSwitcher.ariaLabel}
            className="flex items-center gap-1 text-[11px] tracking-[0.18em] text-[rgb(var(--azul-safira))]"
          >
            <button
              type="button"
              onClick={() => switchTo('en')}
              aria-current={lang === 'en' ? 'true' : undefined}
              className={cn(
                'px-1 py-1 transition-opacity hover:opacity-70',
                lang === 'en' && 'underline underline-offset-4 decoration-[rgb(var(--dourado-champanhe))]',
              )}
            >
              {content.header.langSwitcher.en}
            </button>
            <span aria-hidden="true" className="text-[rgba(220,199,161,0.6)]">
              ·
            </span>
            <button
              type="button"
              onClick={() => switchTo('pt')}
              aria-current={lang === 'pt' ? 'true' : undefined}
              className={cn(
                'px-1 py-1 transition-opacity hover:opacity-70',
                lang === 'pt' && 'underline underline-offset-4 decoration-[rgb(var(--dourado-champanhe))]',
              )}
            >
              {content.header.langSwitcher.pt}
            </button>
          </div>
          <Button to={contactPath} size="sm">
            {content.header.ctaLabel}
          </Button>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(241,230,200,0.7)] text-[rgb(var(--azul-safira))] ring-1 ring-inset ring-[rgba(220,199,161,0.8)] transition hover:bg-[rgb(var(--ouro-rose))] lg:hidden"
          aria-label={open ? content.header.menuClose : content.header.menuOpen}
          aria-expanded={open}
          aria-controls="site-mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </Container>

      <div
        id="site-mobile-nav"
        ref={panelRef}
        className={cn('lg:hidden', open ? 'block' : 'hidden')}
      >
        <div className="bg-[rgb(var(--marfim))] px-5 pb-6 pt-2 ring-1 ring-inset ring-[rgba(220,199,161,0.5)]">
          <div className="flex flex-col gap-1">
            {items.map((item) => (
              <div key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'flex min-h-[44px] items-center rounded-xl px-3 py-3 text-sm text-[rgb(var(--azul-safira))] no-underline transition hover:bg-[rgb(var(--ouro-rose))]',
                      isActive && 'bg-[rgb(var(--ouro-rose))] font-medium',
                    )
                  }
                  end
                >
                  {item.label}
                </NavLink>
                {item.children && (
                  <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-[rgba(220,199,161,0.5)] pl-3">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          cn(
                            'flex min-h-[40px] items-center rounded-xl px-3 py-2 text-xs text-[rgb(var(--azul-safira))] no-underline transition hover:bg-[rgb(var(--ouro-rose))]',
                            isActive && 'bg-[rgb(var(--ouro-rose))] font-medium',
                          )
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div
            role="group"
            aria-label={content.header.langSwitcher.ariaLabel}
            className="mt-4 flex items-center justify-center gap-3 text-xs tracking-[0.18em] text-[rgb(var(--azul-safira))]"
          >
            <button
              type="button"
              onClick={() => switchTo('en')}
              aria-current={lang === 'en' ? 'true' : undefined}
              className={cn(
                'px-2 py-1 transition-opacity hover:opacity-70',
                lang === 'en' && 'underline underline-offset-4 decoration-[rgb(var(--dourado-champanhe))]',
              )}
            >
              {content.header.langSwitcher.en}
            </button>
            <span aria-hidden="true" className="text-[rgba(220,199,161,0.6)]">
              ·
            </span>
            <button
              type="button"
              onClick={() => switchTo('pt')}
              aria-current={lang === 'pt' ? 'true' : undefined}
              className={cn(
                'px-2 py-1 transition-opacity hover:opacity-70',
                lang === 'pt' && 'underline underline-offset-4 decoration-[rgb(var(--dourado-champanhe))]',
              )}
            >
              {content.header.langSwitcher.pt}
            </button>
          </div>

          <div className="mt-4">
            <Button to={contactPath} className="w-full" size="lg">
              {content.header.ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
