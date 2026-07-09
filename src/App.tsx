import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import { SiteLayout } from '@/components/SiteLayout'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Experience from '@/pages/Experience'
import Faq from '@/pages/Faq'
import Home from '@/pages/Home'
import Journal from '@/pages/Journal'
import JournalPost from '@/pages/JournalPost'
import NotFound from '@/pages/NotFound'
import Services from '@/pages/Services'

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
          <Route path="/process" element={<Experience />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<JournalPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}
