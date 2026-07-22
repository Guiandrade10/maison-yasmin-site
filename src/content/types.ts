import type { VenueCategorySlug, ServiceVerticalSlug, PortfolioCategory } from '@/data/content'

export type SeoBlock = { title?: string; description: string }

export type ProseBlock = string | { h2: string }

export type ServiceVerticalCopy = {
  slug: ServiceVerticalSlug
  title: string
  subtitle: string
  intro: ProseBlock[]
  listTitle: string
  items: string[]
  closing: ProseBlock[]
  signature: string
}

export type VenueSubsection = { title: string; paragraphs: string[] }

export type VenueCategoryCopy = {
  slug: VenueCategorySlug
  title: string
  tagline: string
  cardBlurb: string
  paragraphs: string[]
  subsections?: VenueSubsection[]
  signature?: string
  seoTitle: string
  seoDescription: string
}

export type ProcessStepCopy = { number: string; title: string; description: string }

export type FaqItemCopy = { question: string; answer: string }

export type JournalBlockCopy =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }

export type JournalPostCopy = {
  slug: string
  title: string
  excerpt: string
  category: string
  publishedAt: string
  content: JournalBlockCopy[]
}

export type PillarCopy = { id: string; title: string; description: string }

export type PrivacySection = { title: string; paragraphs: string[] }

export type ContactWhatsAppCopy = {
  invitation: string
  buttonLabel: string
  responseTime: string
}

export type NavChild = { toEn: string; label: string }
export type NavItem = { toEn: string; label: string; children?: NavChild[] }

export type SiteContent = {
  lang: 'en' | 'pt'
  htmlLang: string
  ogLocale: string
  ogLocaleAlternate: string

  header: {
    brand: string
    ctaLabel: string
    menuOpen: string
    menuClose: string
    navItems: NavItem[]
    langSwitcher: {
      label: string
      en: string
      pt: string
      ariaLabel: string
    }
  }

  footer: {
    tagline: string
    primaryLinks: { toEn: string; label: string }[]
    secondaryLinks: { toEn: string; label: string }[]
    pilares: string[]
    rightsPrefix: string
    rightsSuffix: string
    whatsappLabel: string
    contactEmailAria: string
  }

  seo: {
    home: SeoBlock
    services: SeoBlock
    venues: SeoBlock
    portfolio: SeoBlock
    kindWords: SeoBlock
    about: SeoBlock
    whyMaisonYasmini: SeoBlock
    experience: SeoBlock
    faq: SeoBlock
    journal: SeoBlock
    contact: SeoBlock
    privacy: SeoBlock
    notFound: SeoBlock
  }

  common: {
    ctaBeginJourney: string
    ctaGetInTouch: string
    ctaDiscoverMore: string
    ctaReadMore: string
    ctaExploreVenues: string
    ctaBackToVenues: string
    ctaBackToJournal: string
    ctaBackToHome: string
    heroImageAlt: string
    detailImageAlt: string
    portraitAlt: string
  }

  pilares: PillarCopy[]

  home: {
    hero: {
      eyebrow: string
      title: string
      tagline: string
      ctaPrimary: string
      ctaSecondary: string
    }
    intro: {
      eyebrow: string
      title: string
      paragraphs: Array<string | { pre: string; strong: string; post: string }>
    }
    servicesSection: {
      eyebrow: string
      title: string
      description: string
      discoverMore: string
    }
    venuesSection: {
      eyebrow: string
      title: string
      discoverMore: string
    }
    whySection: {
      eyebrow: string
      title: string
      description: string
      bullets: string[]
      cta: string
    }
    pillarsSection: {
      title: string
    }
    testimonialsSection: {
      eyebrow: string
      title: string
    }
    finalCta: {
      eyebrow: string
      title: string
      description: string
      ctaPrimary: string
      ctaSecondary: string
    }
  }

  about: {
    eyebrow: string
    title: string
    subtitle: string
    ctaBegin: string
    portraitAlt: string
    portraitEditorialAlt: string
    paragraphs: string[]
    signature: string
    valuesEyebrow: string
    finalCtaTitle: string
    finalCtaDescription: string
    finalCtaButton: string
    isProvisional?: boolean
  }

  services: {
    eyebrow: string
    title: string
    subtitle: string
    introParagraphs: string[]
    philosophyLead: { prefix: string; italic: string }
    philosophyParagraphs: string[]
    tabsAriaLabel: string
    serviceLabel: (index: number) => string
    verticals: ServiceVerticalCopy[]
    finalCtaTitle: string
    finalCtaDescription: string
    finalCtaButton: string
    heroImageAltSuffix: string
  }

  venues: {
    eyebrow: string
    title: string
    intro: string[]
    intro2: string[]
    algarveEyebrow: string
    algarveTitle: string
    algarveP1: string[]
    algarveP2: string[]
    algarveTagline: string
    approachEyebrow: string
    approachTitle: string
    approachIntro: string[]
    approachListLead: string
    approachList: string[]
    approachClose: string
    signatureEyebrow: string
    signatureTitle: string
    cardHeroAltSuffix: string
    roleEyebrow: string
    roleTitle: string
    roleParagraphs: string[]
    partnersEyebrow: string
    partnersTitle: string
    partnersParagraphs: string[]
    beyondEyebrow: string
    beyondTitle: string
    beyondParagraphs: string[]
    beyondSignature: string
    finalCtaTitle: string
    finalCtaDescription: string
    finalCtaButton: string
    categoryPage: {
      backToVenues: string
      exploreOtherVenues: string
      finalCtaTitle: string
      finalCtaDescription: string
      finalCtaButton: string
      venueEyebrow: string
      heroAltSuffix: string
      galleryAltSuffix: string
    }
    categories: Record<VenueCategorySlug, VenueCategoryCopy>
  }

  portfolio: {
    eyebrow: string
    title: string
    description: string
    filterAllLabel: string
    filterAriaLabel: string
    categoryLabels: Record<PortfolioCategory, string>
    imageAlts: string[]
    finalCtaTitle: string
    finalCtaButton: string
    isProvisional?: boolean
  }

  kindWords: {
    eyebrow: string
    title: string
    comingSoonEyebrow: string
    comingSoonTitle: string
    comingSoonBody: string
    comingSoonCta: string
    isProvisional?: boolean
  }

  whyMaisonYasmini: {
    eyebrow: string
    title: string
    intro: string[]
    sections: { title: string; paragraphs: string[] }[]
    promiseEyebrow: string
    promiseTitle: string
    promise: string[]
    finalSectionTitle: string
    finalSectionParagraphs: string[]
    finalSectionSignature: string
    finalCtaTitle: string
    finalCtaButton: string
    isProvisional?: boolean
  }

  experience: {
    title: string
    description: string
    ctaBegin: string
    stepLabel: string
    steps: ProcessStepCopy[]
    stepAddendum: string
    nextEyebrow: string
    nextTitle: string
    nextDescription: string
    nextCta: string
    isProvisional?: boolean
  }

  faq: {
    eyebrow: string
    title: string
    description: string
    items: FaqItemCopy[]
    isProvisional?: boolean
  }

  journal: {
    eyebrow: string
    title: string
    description: string
    readCta: string
    provisionalNote?: string
    notFoundTitle: string
    notFoundBody: string
    posts: JournalPostCopy[]
    postCtaBegin: string
  }

  contact: {
    eyebrow: string
    title: string
    description: string
    whatsapp: ContactWhatsAppCopy
    isProvisional?: boolean
  }

  privacy: {
    eyebrow: string
    title: string
    lastReviewedPrefix: string
    lastReviewedSuffix: string
    dateLocale: string
    sections: PrivacySection[]
    isProvisional?: boolean
  }

  notFound: {
    title: string
    description: string
    ctaBack: string
    isProvisional?: boolean
  }
}
