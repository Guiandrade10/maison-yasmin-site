import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Experience from '@/pages/Experience'
import Faq from '@/pages/Faq'
import Home from '@/pages/Home'
import Journal from '@/pages/Journal'
import JournalPost from '@/pages/JournalPost'
import KindWords from '@/pages/KindWords'
import NotFound from '@/pages/NotFound'
import Portfolio from '@/pages/Portfolio'
import Privacy from '@/pages/Privacy'
import Services from '@/pages/Services'
import Venues from '@/pages/Venues'
import VenueCategory from '@/pages/VenueCategory'
import WhyMaisonYasmini from '@/pages/WhyMaisonYasmini'
import { enContent } from '@/content/en'
import { ptContent } from '@/content/pt'
import { LangProvider } from '@/i18n/LangContext'

const renderRoute = (path: string, node: React.ReactElement, routePath = '*') =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path={routePath} element={node} />
      </Routes>
    </MemoryRouter>,
  )

const renderLocalizedRoute = (path: string, node: React.ReactElement, routePath = '*') =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <LangProvider>
        <Routes>
          <Route path={routePath} element={node} />
        </Routes>
      </LangProvider>
    </MemoryRouter>,
  )

describe('Page smoke tests', () => {
  it('Home renders without crashing', () => {
    const { container } = renderRoute('/', <Home />)
    expect(container.firstChild).toBeTruthy()
  })

  it('Our Story (About) renders without crashing', () => {
    const { container } = renderRoute('/about', <About />)
    expect(container.firstChild).toBeTruthy()
  })

  it('Services renders without crashing', () => {
    const { container } = renderRoute('/services', <Services />)
    expect(container.firstChild).toBeTruthy()
  })

  it('Venues hub renders without crashing', () => {
    const { container } = renderRoute('/venues', <Venues />)
    expect(container.firstChild).toBeTruthy()
  })

  it('Venue category renders a known slug', () => {
    const { container, getByText } = renderRoute(
      '/venues/luxury-resorts',
      <VenueCategory />,
      '/venues/:slug',
    )
    expect(container.firstChild).toBeTruthy()
    expect(getByText('Luxury Resorts & Boutique Hotels')).toBeInTheDocument()
  })

  it('Venue category falls back to NotFound for unknown slug', () => {
    const { getByText } = renderRoute(
      '/venues/does-not-exist',
      <VenueCategory />,
      '/venues/:slug',
    )
    expect(getByText('Page not found')).toBeInTheDocument()
  })

  it('Portfolio renders without crashing', () => {
    const { container } = renderRoute('/portfolio', <Portfolio />)
    expect(container.firstChild).toBeTruthy()
  })

  it('Kind Words renders without crashing', () => {
    const { container } = renderRoute('/kind-words', <KindWords />)
    expect(container.firstChild).toBeTruthy()
  })

  it('Why Maison Yasmini renders without crashing', () => {
    const { container } = renderRoute('/why-maison-yasmini', <WhyMaisonYasmini />)
    expect(container.firstChild).toBeTruthy()
  })

  it('Experience (Process) renders without crashing', () => {
    const { container } = renderRoute('/process', <Experience />)
    expect(container.firstChild).toBeTruthy()
  })

  it('Faq renders without crashing', () => {
    const { container } = renderRoute('/faq', <Faq />)
    expect(container.firstChild).toBeTruthy()
  })

  it('Journal list renders without crashing', () => {
    const { container } = renderRoute('/journal', <Journal />)
    expect(container.firstChild).toBeTruthy()
  })

  it('JournalPost renders a known slug', () => {
    const { container } = renderRoute(
      '/journal/how-much-does-a-destination-wedding-in-algarve-cost',
      <JournalPost />,
      '/journal/:slug',
    )
    expect(container.firstChild).toBeTruthy()
  })

  it('JournalPost renders the fallback for an unknown slug', () => {
    const { getByText } = renderRoute(
      '/journal/does-not-exist',
      <JournalPost />,
      '/journal/:slug',
    )
    expect(getByText('Article not found')).toBeInTheDocument()
  })

  it('Contact (EN) shows a WhatsApp CTA with the English pre-filled message', () => {
    renderLocalizedRoute('/contact', <Contact />)
    const link = screen.getByRole('link', {
      name: enContent.contact.whatsapp.buttonLabel,
    })
    expect(link).toHaveAttribute(
      'href',
      "https://wa.me/351967870651?text=Hello!%20I'd%20love%20to%20know%20more%20about%20planning%20my%20wedding%20in%20the%20Algarve%20with%20Maison%20Yasmini.",
    )
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer noopener')
  })

  it('Contact (PT) shows a WhatsApp CTA with the Portuguese pre-filled message', () => {
    renderLocalizedRoute('/pt/contacto', <Contact />)
    const link = screen.getByRole('link', {
      name: ptContent.contact.whatsapp.buttonLabel,
    })
    expect(link).toHaveAttribute(
      'href',
      'https://wa.me/351967870651?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20organiza%C3%A7%C3%A3o%20do%20meu%20casamento%20no%20Algarve%20com%20a%20Maison%20Yasmini.',
    )
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer noopener')
  })

  it('Privacy renders without crashing', () => {
    const { container } = renderRoute('/privacy', <Privacy />)
    expect(container.firstChild).toBeTruthy()
  })

  it('NotFound renders without crashing', () => {
    const { container } = renderRoute('/nope', <NotFound />)
    expect(container.firstChild).toBeTruthy()
  })
})
