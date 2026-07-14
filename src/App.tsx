import { lazy, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import { SiteLayout } from '@/components/SiteLayout'

const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const Services = lazy(() => import('@/pages/Services'))
const Venues = lazy(() => import('@/pages/Venues'))
const VenueCategory = lazy(() => import('@/pages/VenueCategory'))
const Portfolio = lazy(() => import('@/pages/Portfolio'))
const KindWords = lazy(() => import('@/pages/KindWords'))
const WhyMaisonYasmini = lazy(() => import('@/pages/WhyMaisonYasmini'))
const Experience = lazy(() => import('@/pages/Experience'))
const Faq = lazy(() => import('@/pages/Faq'))
const Journal = lazy(() => import('@/pages/Journal'))
const JournalPost = lazy(() => import('@/pages/JournalPost'))
const Contact = lazy(() => import('@/pages/Contact'))
const Privacy = lazy(() => import('@/pages/Privacy'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/venues/:slug" element={<VenueCategory />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/kind-words" element={<KindWords />} />
          <Route path="/why-maison-yasmini" element={<WhyMaisonYasmini />} />
          <Route path="/process" element={<Experience />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<JournalPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}
