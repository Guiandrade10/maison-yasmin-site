export type Lang = 'en' | 'pt'

export const SUPPORTED_LANGS: readonly Lang[] = ['en', 'pt'] as const
export const DEFAULT_LANG: Lang = 'en'
export const PT_PREFIX = '/pt'

/**
 * Bidirectional map of canonical EN routes to PT-PT translated slugs.
 * Journal post slugs stay in EN on v3 (see LACUNAS in COPY-PT-VERBATIM.md).
 */
/** Map of PT venue category slug → EN venue category slug (used by VenueCategory). */
export const VENUE_SLUG_PT_TO_EN: Record<string, string> = {
  'resorts-de-luxo': 'luxury-resorts',
  'villas-privadas': 'private-villas',
  'restaurantes-exclusivos': 'exclusive-restaurants',
  quintas: 'country-estates',
}

export const VENUE_SLUG_EN_TO_PT: Record<string, string> = Object.fromEntries(
  Object.entries(VENUE_SLUG_PT_TO_EN).map(([pt, en]) => [en, pt]),
)

export const ROUTE_PAIRS: { en: string; pt: string }[] = [
  { en: '/', pt: '/pt' },
  { en: '/services', pt: '/pt/servicos' },
  { en: '/venues', pt: '/pt/espacos' },
  { en: '/venues/luxury-resorts', pt: '/pt/espacos/resorts-de-luxo' },
  { en: '/venues/private-villas', pt: '/pt/espacos/villas-privadas' },
  { en: '/venues/exclusive-restaurants', pt: '/pt/espacos/restaurantes-exclusivos' },
  { en: '/venues/country-estates', pt: '/pt/espacos/quintas' },
  { en: '/portfolio', pt: '/pt/portfolio' },
  { en: '/kind-words', pt: '/pt/testemunhos' },
  { en: '/about', pt: '/pt/sobre' },
  { en: '/why-maison-yasmini', pt: '/pt/porque-maison-yasmini' },
  { en: '/process', pt: '/pt/processo' },
  { en: '/faq', pt: '/pt/faq' },
  { en: '/journal', pt: '/pt/journal' },
  { en: '/contact', pt: '/pt/contacto' },
  { en: '/privacy', pt: '/pt/privacidade' },
]

const EN_TO_PT: Record<string, string> = Object.fromEntries(ROUTE_PAIRS.map((p) => [p.en, p.pt]))
const PT_TO_EN: Record<string, string> = Object.fromEntries(ROUTE_PAIRS.map((p) => [p.pt, p.en]))

/** Detect the language of an incoming URL path. */
export function detectLang(pathname: string): Lang {
  return pathname === PT_PREFIX || pathname.startsWith(`${PT_PREFIX}/`) ? 'pt' : 'en'
}

/**
 * Given a canonical EN path (e.g. `/services`, `/venues/luxury-resorts`,
 * or `/journal/some-slug`), return the equivalent path for the target language.
 * Journal post slugs are not translated in v3 — we just prefix them with /pt.
 */
export function localizePath(enPath: string, target: Lang): string {
  if (target === 'en') return enPath
  const mapped = EN_TO_PT[enPath]
  if (mapped) return mapped
  // Fallback for journal post slugs (or any not-mapped path): prepend /pt.
  if (enPath.startsWith('/journal/')) return `${PT_PREFIX}${enPath}`
  return enPath
}

/**
 * Given the current URL pathname (EN or PT), return the equivalent pathname
 * in the other language. Preserves journal post slugs.
 */
export function alternatePath(pathname: string): { en: string; pt: string } {
  const lang = detectLang(pathname)
  if (lang === 'pt') {
    if (PT_TO_EN[pathname]) return { en: PT_TO_EN[pathname], pt: pathname }
    if (pathname.startsWith(`${PT_PREFIX}/journal/`)) {
      return { en: pathname.slice(PT_PREFIX.length), pt: pathname }
    }
    return { en: '/', pt: pathname }
  }
  return { en: pathname, pt: localizePath(pathname, 'pt') }
}
