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
      { to: '/sobre', label: 'About' },
      { to: '/servicos', label: 'Packages' },
      { to: '/experiencia', label: 'Process' },
      { to: '/faq', label: 'FAQ' },
      { to: '/journal', label: 'Journal' },
      { to: '/contacto', label: 'Contact' },
    ],
    [],
  )

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition',
        scrolled
          ? 'bg-[rgba(var(--my-warm-white),0.78)] backdrop-blur-md ring-1 ring-inset ring-[rgba(var(--my-sand),0.7)]'
          : 'bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <NavLink
          to="/"
          className="font-[var(--my-font-serif)] text-lg tracking-[0.08em] no-underline"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name.toUpperCase()}
        </NavLink>

        <nav className="hidden items-center gap-6 md:flex">
          {items.slice(0, 5).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'text-sm text-[rgb(var(--my-dark-brown))] no-underline transition hover:text-[rgb(var(--my-black))]',
                  isActive && 'text-[rgb(var(--my-black))]',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button to="/contacto" size="sm">
            Request Proposal
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(var(--my-ivory),0.7)] text-[rgb(var(--my-black))] ring-1 ring-inset ring-[rgba(var(--my-sand),0.8)] transition hover:bg-[rgb(var(--my-ivory))] md:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </Container>

      <div
        className={cn(
          'md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div className="bg-[rgb(var(--my-warm-white))] px-5 pb-6 pt-2 ring-1 ring-inset ring-[rgba(var(--my-sand),0.7)]">
          <div className="flex flex-col gap-1">
            {items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'rounded-xl px-3 py-2 text-sm text-[rgb(var(--my-dark-brown))] no-underline transition hover:bg-[rgb(var(--my-ivory))] hover:text-[rgb(var(--my-black))]',
                    isActive && 'bg-[rgb(var(--my-ivory))] text-[rgb(var(--my-black))]',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="mt-4">
            <Button to="/contacto" className="w-full" size="lg">
              Request Proposal
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

