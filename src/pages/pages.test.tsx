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
import NotFound from '@/pages/NotFound'
import Privacy from '@/pages/Privacy'
import Services from '@/pages/Services'

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

  it('About renders without crashing', () => {
    const { container } = renderRoute('/about', <About />)
    expect(container.firstChild).toBeTruthy()
  })

  it('Services renders without crashing', () => {
    const { container } = renderRoute('/services', <Services />)
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

  it('Contact renders without crashing', () => {
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
