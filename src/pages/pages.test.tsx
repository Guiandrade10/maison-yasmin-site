import { render } from '@testing-library/react'
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

const renderRoute = (path: string, node: React.ReactElement, routePath = '*') =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path={routePath} element={node} />
      </Routes>
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

  it('Contact (Get in Touch) renders without crashing', () => {
    const { container } = renderRoute('/contact', <Contact />)
    expect(container.firstChild).toBeTruthy()
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
