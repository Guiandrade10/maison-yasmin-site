import { createContext, useContext, useMemo, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

import { enContent } from '@/content/en'
import { ptContent } from '@/content/pt'
import type { SiteContent } from '@/content/types'
import {
  DEFAULT_LANG,
  detectLang,
  localizePath as localize,
  alternatePath as altPath,
  type Lang,
} from '@/i18n/routes'

type LangContextValue = {
  lang: Lang
  content: SiteContent
  /** Given a canonical EN path, return the equivalent path in the current language. */
  localizePath: (enPath: string) => string
  /** The paired EN/PT paths for the current URL. */
  alternate: { en: string; pt: string }
}

const CONTENT_BY_LANG: Record<Lang, SiteContent> = { en: enContent, pt: ptContent }

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const value = useMemo<LangContextValue>(() => {
    const lang = detectLang(pathname)
    return {
      lang,
      content: CONTENT_BY_LANG[lang],
      localizePath: (enPath: string) => localize(enPath, lang),
      alternate: altPath(pathname),
    }
  }, [pathname])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) {
    // Safe default for tests that render pages without wrapping in LangProvider.
    return {
      lang: DEFAULT_LANG,
      content: CONTENT_BY_LANG[DEFAULT_LANG],
      localizePath: (enPath: string) => localize(enPath, DEFAULT_LANG),
      alternate: { en: '/', pt: '/pt' },
    }
  }
  return ctx
}
