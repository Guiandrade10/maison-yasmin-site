import { NavLink } from 'react-router-dom'

import { siteConfig } from '@/config/site'
import { Container } from '@/components/Container'

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[rgba(var(--my-sand),0.9)] bg-[rgb(var(--my-warm-white))]">
      <Container className="py-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-[var(--my-font-serif)] text-lg tracking-[0.08em]">
              {siteConfig.name.toUpperCase()}
            </div>
            <div className="mt-2 max-w-sm text-sm text-[rgb(var(--my-dark-brown))]">{siteConfig.tagline}</div>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="flex flex-col gap-2">
              <NavLink to="/sobre" className="text-[rgb(var(--my-dark-brown))] no-underline hover:text-[rgb(var(--my-black))]">
                About
              </NavLink>
              <NavLink to="/servicos" className="text-[rgb(var(--my-dark-brown))] no-underline hover:text-[rgb(var(--my-black))]">
                Packages
              </NavLink>
              <NavLink to="/contacto" className="text-[rgb(var(--my-dark-brown))] no-underline hover:text-[rgb(var(--my-black))]">
                Contact
              </NavLink>
            </div>
            <div className="flex flex-col gap-2">
              <NavLink to="/experiencia" className="text-[rgb(var(--my-dark-brown))] no-underline hover:text-[rgb(var(--my-black))]">
                Process
              </NavLink>
              <NavLink to="/faq" className="text-[rgb(var(--my-dark-brown))] no-underline hover:text-[rgb(var(--my-black))]">
                FAQ
              </NavLink>
              <NavLink to="/journal" className="text-[rgb(var(--my-dark-brown))] no-underline hover:text-[rgb(var(--my-black))]">
                Journal
              </NavLink>
              <a
                href={siteConfig.instagramUrl}
                className="text-[rgb(var(--my-dark-brown))] no-underline hover:text-[rgb(var(--my-black))]"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="text-sm text-[rgb(var(--my-dark-brown))]">
            <div>Algarve, Portugal</div>
            <a className="mt-2 block text-[rgb(var(--my-dark-brown))] no-underline hover:text-[rgb(var(--my-black))]" href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
            <div className="mt-4 text-xs opacity-80">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

