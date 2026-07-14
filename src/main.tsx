import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const mountedAt = performance.now()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Hide the splash after React has painted at least one frame. Two nested
// requestAnimationFrames guarantee the initial commit hits the screen first,
// so the fade-out reveals content that is already there.
const dismissSplash = () => {
  const splash = document.getElementById('splash')
  if (!splash) return
  const MIN_VISIBLE = 600
  const elapsed = performance.now() - mountedAt
  const delay = Math.max(0, MIN_VISIBLE - elapsed)
  window.setTimeout(() => {
    splash.classList.add('done')
    window.setTimeout(() => splash.remove(), 500)
  }, delay)
}

requestAnimationFrame(() => requestAnimationFrame(dismissSplash))
