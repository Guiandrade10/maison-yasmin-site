import { useEffect } from 'react'

import { siteConfig } from '@/config/site'

type SeoOptions = {
  title?: string
  description?: string
  path?: string
  ogImage?: string
}

const DEFAULT_DESCRIPTION =
  'Maison Yasmini is a boutique wedding planning studio in the Algarve, planning intimate destination weddings with quiet elegance and structure.'

const DEFAULT_OG_IMAGE = '/og-image.jpg'

function ensureMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    for (const [key, value] of Object.entries(attrs)) {
      if (key !== 'content') el.setAttribute(key, value)
    }
    document.head.appendChild(el)
  }
  if (attrs.content !== undefined) el.setAttribute('content', attrs.content)
}

function ensureLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function useSeo({ title, description, path, ogImage }: SeoOptions) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | ${siteConfig.tagline}`
    const desc = description ?? DEFAULT_DESCRIPTION
    const canonical = new URL(path ?? (typeof window !== 'undefined' ? window.location.pathname : '/'), siteConfig.siteUrl).toString()
    const image = new URL(ogImage ?? DEFAULT_OG_IMAGE, siteConfig.siteUrl).toString()

    document.title = fullTitle
    ensureMeta('meta[name="description"]', { name: 'description', content: desc })
    ensureLink('canonical', canonical)
    ensureMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle })
    ensureMeta('meta[property="og:description"]', { property: 'og:description', content: desc })
    ensureMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
    ensureMeta('meta[property="og:image"]', { property: 'og:image', content: image })
    ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: fullTitle })
    ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: desc })
    ensureMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })
  }, [title, description, path, ogImage])
}
