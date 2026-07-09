import { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { useScrolled } from '@/hooks/useScrolled'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

type NavItem = { to: string; label: string }

export function SiteHeader() {
  const scrolled = useScrolled(8)
  const [open, setOpen] = useState(false)

  const items = useMemo<NavItem[]>(
    () => [
      { to: '/sobre', label: 'Sobre' },
      { to: '/servicos', label: 'Serviços' },
      { to: '/experiencia', label: 'Processo' },
      { to: '/faq', label: 'FAQ' },
      { to: '/journal', label: 'Blog' },
      { to: '/contacto', label: 'Contacto' },
    ],
    [],
  )

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
          to="/"
          className="font-serif text-sm tracking-[0.22em] text-[rgb(var(--azul-safira))] no-underline hover:text-[rgb(var(--azul-noite))]"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name.toUpperCase()}
        </NavLink>

        <nav className="hidden items-center gap-7 md:flex">
          {items.slice(0, 5).map((item) => (
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
          <Button to="/contacto" size="sm">
            Solicitar Proposta
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(241,230,200,0.7)] text-[rgb(var(--azul-safira))] ring-1 ring-inset ring-[rgba(220,199,161,0.8)] transition hover:bg-[rgb(var(--ouro-rose))] md:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </Container>

      <div className={cn('md:hidden', open ? 'block' : 'hidden')}>
        <div className="bg-[rgb(var(--marfim))] px-5 pb-6 pt-2 ring-1 ring-inset ring-[rgba(220,199,161,0.5)]">
          <div className="flex flex-col gap-1">
            {items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'rounded-xl px-3 py-2 text-sm text-[rgb(var(--azul-safira))] no-underline transition hover:bg-[rgb(var(--ouro-rose))]',
                    isActive && 'bg-[rgb(var(--ouro-rose))] font-medium',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="mt-4">
            <Button to="/contacto" className="w-full" size="lg">
              Solicitar Proposta
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
