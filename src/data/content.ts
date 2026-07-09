export type Pilar = {
  id: string
  title: string
  description: string
}

export type Testimonial = {
  name: string
  location: string
  text: string
}

export const pilares: Pilar[] = [
  {
    id: 'excelencia',
    title: 'Excellence',
    description: 'A constant pursuit of precision in every detail, from the first conversation to the final moment.',
  },
  {
    id: 'proposito',
    title: 'Purpose',
    description: 'We turn visions into real stories, with intention and care in every decision we make together.',
  },
  {
    id: 'elegancia',
    title: 'Elegance',
    description: 'Sophistication that reveals itself through restraint. Refinement is knowing what to leave out.',
  },
  {
    id: 'confianca',
    title: 'Trust',
    description: 'Real relationships built on transparency, clarity and consistent presence throughout the entire process.',
  },
  {
    id: 'memorias',
    title: 'Memories',
    description: 'We turn moments into lasting memories. Celebrations that stay with the people who were there.',
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Ana and Ricardo',
    location: 'Lisbon, Portugal',
    text: 'Yasmini turned every detail of our wedding into a memory we will carry forever. The care, the taste, the calm. Nothing felt accidental.',
  },
  {
    name: 'Sofia and Miguel',
    location: 'Porto, Portugal',
    text: 'Professionalism and real presence at every step. Our day was exactly what we had hoped for: light, elegant and full of meaning.',
  },
]

export type WeddingPackageSlug = 'small' | 'medium' | 'large'

export type WeddingPackage = {
  slug: WeddingPackageSlug
  title: string
  guestRange: string
  priceFrom: string
  description: string
  highlights: string[]
}

export type ProcessStep = {
  number: string
  title: string
  description: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type JournalPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  publishedAt: string
  content: string[]
  coverImageUrl: string
}

export const imageUrls = {
  hero:
    'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=cinematic%20wedding%20scene%20on%20the%20Algarve%20coast%20at%20golden%20hour%2C%20clifftop%20view%20over%20the%20Atlantic%2C%20elegant%20couple%20and%20intimate%20table%20setting%2C%20warm%20stone%20tones%2C%20natural%20light%2C%20refined%20editorial%20photography%2C%20realistic%2C%20high%20detail%2C%20no%20text&image_size=landscape_16_9',
  yasminiPortrait:
    'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=editorial%20portrait%20of%20an%20elegant%20wedding%20planner%20woman%20in%20the%20Algarve%2C%20natural%20light%2C%20soft%20neutral%20palette%2C%20refined%20European%20style%2C%20warm%20expression%2C%20realistic%20skin%20texture%2C%20high%20detail%2C%20no%20text&image_size=portrait_4_3',
  algarveLandscape:
    'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=panoramic%20view%20of%20the%20Algarve%20coast%20with%20golden%20cliffs%2C%20turquoise%20Atlantic%20water%2C%20soft%20Mediterranean%20light%2C%20quiet%20luxury%20travel%20editorial%20photography%2C%20natural%20textures%2C%20realistic%2C%20high%20detail%2C%20no%20text&image_size=landscape_16_9',
  detail:
    'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=close%20up%20wedding%20detail%20shot%20with%20ivory%20paper%2C%20linen%20ribbon%2C%20soft%20neutral%20palette%2C%20natural%20light%2C%20editorial%20photography%2C%20realistic%2C%20high%20detail%2C%20no%20text&image_size=landscape_4_3',
} as const

export const weddingPackages: WeddingPackage[] = [
  {
    slug: 'small',
    title: 'Small wedding package',
    guestRange: '2 to 20 guests',
    priceFrom: 'From 3,000€',
    description: 'For elopements, intimate ceremonies and small destination celebrations with close family and friends.',
    highlights: ['Planning and timeline', 'Venue and supplier curation', 'Ceremony coordination', 'Remote support for destination couples'],
  },
  {
    slug: 'medium',
    title: 'Medium wedding package',
    guestRange: '21 to 60 guests',
    priceFrom: 'From 5,500€',
    description: 'For couples who want a complete wedding experience in the Algarve, with structure, style and calm execution from start to finish.',
    highlights: ['Design guidance', 'Supplier management', 'Guest logistics support', 'Full wedding day coordination'],
  },
  {
    slug: 'large',
    title: 'Large wedding package',
    guestRange: '61 to 100 guests',
    priceFrom: 'From 8,500€',
    description: 'For larger celebrations that need more production, more coordination and a stronger planning structure from the start.',
    highlights: ['Advanced production planning', 'Expanded supplier coordination', 'Guest flow and schedule management', 'On-site lead team support'],
  },
]

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Conversation',
    description: 'We understand your date, guest count, priorities and the atmosphere you want to create in the Algarve.',
  },
  {
    number: '02',
    title: 'Direction',
    description: 'We shape the concept, shortlist venues and build a planning direction that fits your celebration size.',
  },
  {
    number: '03',
    title: 'Planning',
    description: 'Suppliers, logistics, schedule and decisions are organized with clarity so the process feels steady.',
  },
  {
    number: '04',
    title: 'Coordination',
    description: 'We manage confirmations, timings and the full event flow so every part of the day runs with confidence.',
  },
  {
    number: '05',
    title: 'Celebration',
    description: 'You enjoy the day with your guests while we take care of everything happening behind the scenes.',
  },
]

export const faqs: FaqItem[] = [
  {
    question: 'What kind of weddings do you plan?',
    answer:
      'Maison Yasmini plans destination weddings in the Algarve for small, medium and large celebrations. The planning approach always adapts to the guest count and the type of experience the couple wants.',
  },
  {
    question: 'What are your starting prices?',
    answer:
      'Planning packages start at 3,000€ for small weddings. Medium and large celebrations scale according to guest count, complexity and logistics.',
  },
  {
    question: 'What happens if we have more than 100 guests?',
    answer:
      'Celebrations with more than 100 guests require a custom proposal. These events usually involve more production, staffing and logistics, so we prepare a tailored quote.',
  },
  {
    question: 'Can you help with legal requirements in Portugal?',
    answer:
      'Yes. Yasmini has a legal background and can guide you through the process with clarity, connecting you with the right local support when needed.',
  },
  {
    question: 'How far in advance should we start?',
    answer:
      'For destination weddings, starting 9 to 15 months in advance is ideal. Smaller celebrations can sometimes be planned on a shorter timeline depending on the date and venue availability.',
  },
  {
    question: 'Why choose the Algarve for a destination wedding?',
    answer:
      'The Algarve offers dramatic coastlines, elegant estates, warm light and a relaxed atmosphere. It is a beautiful setting for couples who want nature, intimacy and the ease of a well-connected destination.',
  },
]

export const journalPosts: JournalPost[] = [
  {
    slug: 'how-much-does-a-destination-wedding-in-algarve-cost',
    title: 'How much does a destination wedding in the Algarve cost?',
    excerpt: 'A calm overview of budgets, priorities and where couples typically invest.',
    category: 'Planning',
    publishedAt: '2026-06-01',
    coverImageUrl: imageUrls.detail,
    content: [
      'Budgets in the Algarve vary widely because each celebration has its own guest count, venue style and planning needs.',
      'Guest count, venue style and the level of design direction are the three major variables.',
      'A thoughtful budget is less about extravagance and more about choosing what matters most to you.',
    ],
  },
  {
    slug: 'best-intimate-wedding-venues-in-algarve',
    title: 'Best intimate wedding venues in the Algarve',
    excerpt: 'Beach, vineyard, estate or garden. The venue shapes the entire feeling of the day.',
    category: 'Venues',
    publishedAt: '2026-05-18',
    coverImageUrl: imageUrls.hero,
    content: [
      'The Algarve is a landscape of light: sea cliffs, soft vineyards and quiet estates.',
      'For intimate weddings, the most important quality is not size. It is atmosphere.',
      'We recommend venues that feel like a home for your story, not a stage for a production.',
    ],
  },
]
