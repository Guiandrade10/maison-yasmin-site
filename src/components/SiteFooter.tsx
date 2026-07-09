import { NavLink } from 'react-router-dom'

import { siteConfig } from '@/config/site'
import { Container } from '@/components/Container'

function MYMonogramSmall() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" stroke="#DCC7A1" strokeWidth="1"/>
      <circle cx="32" cy="32" r="26" stroke="#DCC7A1" strokeWidth="0.5"/>
      <text
        x="32" y="32"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Cinzel, Georgia, serif"
        fontSize="16"
        fontWeight="600"
        fill="#DCC7A1"
        letterSpacing="2"
      >
        MY
      </text>
    </svg>
  )
}

function Filete() {
  return (
    <div className="my-8 flex items-center gap-4">
      <div className="h-px flex-1 bg-[rgba(220,199,161,0.3)]" />
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path d="M4 0L5 3L8 4L5 5L4 8L3 5L0 4L3 3Z" fill="#DCC7A1" opacity="0.6"/>
      </svg>
      <div className="h-px flex-1 bg-[rgba(220,199,161,0.3)]" />
    </div>
  )
}

const navLinks = [
  { to: '/sobre', label: 'Sobre' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/experiencia', label: 'Processo' },
  { to: '/faq', label: 'FAQ' },
  { to: '/journal', label: 'Blog' },
  { to: '/contacto', label: 'Contacto' },
]

const pilares = ['Excelência', 'Propósito', 'Elegância', 'Confiança', 'Memórias']

export function SiteFooter() {
  return (
    <footer className="bg-[rgb(var(--azul-safira))]">
      <Container className="py-16">
        {/* Monogram + brand name */}
        <div className="flex flex-col items-center gap-3 text-center">
          <MYMonogramSmall />
          <div className="font-serif text-xl font-normal tracking-[0.26em] text-[#DCC7A1]">
            MAISON YASMINI
          </div>
          <div className="text-[10px] font-medium tracking-[0.38em] text-[rgb(var(--azul-claro))]">
            WEDDING PLANNER
          </div>
        </div>

        <Filete />

        {/* Tagline */}
        <p className="mx-auto max-w-sm text-center font-serif text-sm italic font-normal text-[rgb(var(--marfim))] opacity-80">
          "{siteConfig.tagline}"
        </p>

        {/* Nav links */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="text-xs font-medium tracking-[0.14em] text-[rgb(var(--azul-claro))] no-underline transition-opacity hover:opacity-70"
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Pilares */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {pilares.map((p, i) => (
            <span key={p} className="text-[10px] tracking-[0.2em] text-[rgba(167,183,209,0.5)]">
              {p}{i < pilares.length - 1 && <span className="ml-6 text-[rgba(220,199,161,0.3)]">·</span>}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-10 h-px bg-[rgba(167,183,209,0.15)]" />

        {/* Bottom row */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-[10px] text-[rgba(167,183,209,0.45)] md:flex-row">
          <span>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</span>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="text-[rgba(167,183,209,0.6)] no-underline transition-opacity hover:opacity-80"
          >
            {siteConfig.contactEmail}
          </a>
        </div>
      </Container>
    </footer>
  )
}
