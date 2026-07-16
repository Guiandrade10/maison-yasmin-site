import { useEffect } from 'react'

import { siteConfig } from '@/config/site'
import { useLang } from '@/i18n/LangContext'
import { localizePath, type Lang } from '@/i18n/routes'

type SeoOptions = {
  title?: string
  description?: string
  /** Canonical EN path for this route. Used for the alternate/hreflang mapping. */
  path?: string
  ogImage?: string
}

const DEFAULT_OG_IMAGE = '/og-image.jpg'
const OG_LOCALE: Record<Lang, string> = { en: 'en_GB', pt: 'pt_PT' }

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
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]:not([hreflang])`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function ensureAlternate(hreflang: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(
    `link[rel="alternate"][hreflang="${hreflang}"]`,
  )
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'alternate')
    el.setAttribute('hreflang', hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function useSeo({ title, description, path, ogImage }: SeoOptions) {
  const { lang, content } = useLang()
  const fallbackDescription = content.seo.home.description

  useEffect(() => {
    const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | ${siteConfig.tagline}`
    const desc = description ?? fallbackDescription
    const enPath = path ?? '/'
    const localPath = localizePath(enPath, lang)
    const canonical = new URL(localPath, siteConfig.siteUrl).toString()
    const enUrl = new URL(enPath, siteConfig.siteUrl).toString()
    const ptUrl = new URL(localizePath(enPath, 'pt'), siteConfig.siteUrl).toString()
    const image = new URL(ogImage ?? DEFAULT_OG_IMAGE, siteConfig.siteUrl).toString()

    document.title = fullTitle
    document.documentElement.lang = content.htmlLang

    ensureMeta('meta[name="description"]', { name: 'description', content: desc })
    ensureLink('canonical', canonical)

    ensureMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle })
    ensureMeta('meta[property="og:description"]', { property: 'og:description', content: desc })
    ensureMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
    ensureMeta('meta[property="og:image"]', { property: 'og:image', content: image })
    ensureMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: OG_LOCALE[lang],
    })
    ensureMeta('meta[property="og:locale:alternate"]', {
      property: 'og:locale:alternate',
      content: lang === 'en' ? OG_LOCALE.pt : OG_LOCALE.en,
    })

    ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: fullTitle })
    ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: desc })
    ensureMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })

    ensureAlternate('en-GB', enUrl)
    ensureAlternate('pt-PT', ptUrl)
    ensureAlternate('x-default', enUrl)
  }, [title, description, path, ogImage, lang, content.htmlLang, fallbackDescription])
}
