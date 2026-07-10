import { Outlet } from 'react-router-dom'

import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'

export function SiteLayout() {
  return (
    <div className="min-h-dvh">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_15%_10%,rgba(var(--dourado-champanhe),0.35),transparent_55%),radial-gradient(900px_circle_at_85%_15%,rgba(var(--ouro-rose),0.9),transparent_60%),radial-gradient(900px_circle_at_50%_120%,rgba(var(--azul-claro),0.25),transparent_55%)]" />
      </div>
      <SiteHeader />
      <main className="overflow-x-hidden pb-16">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

