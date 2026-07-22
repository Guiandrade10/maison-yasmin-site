import type { Lang } from '@/i18n/routes'

export const siteConfig = {
  name: 'Maison Yasmini',
  tagline: 'Where every detail tells a love story.',
  // TODO(client): replace with the studio's real Instagram handle.
  instagramUrl: 'https://www.instagram.com/',
  whatsappUrl: 'https://wa.me/351967870651',
  // TODO(client): confirm final domain.
  siteUrl: 'https://maisonyasmini.com',
} as const

const WHATSAPP_MESSAGES: Record<Lang, string> = {
  en: "Hello! I'd love to know more about planning my wedding in the Algarve with Maison Yasmini.",
  pt: 'Olá! Gostaria de saber mais sobre a organização do meu casamento no Algarve com a Maison Yasmini.',
}

export function getWhatsappUrl(lang: Lang): string {
  return `${siteConfig.whatsappUrl}?text=${encodeURIComponent(WHATSAPP_MESSAGES[lang])}`
}
