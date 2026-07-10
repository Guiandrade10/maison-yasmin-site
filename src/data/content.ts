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

// TODO(client): replace the two placeholder entries below with real,
// authorized testimonials from past couples, then flip SHOW_TESTIMONIALS
// to true. Publishing invented quotes is a legal + reputational risk, so
// the section stays hidden until that content arrives.
export const SHOW_TESTIMONIALS = false

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

export type JournalBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }

export type JournalPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  publishedAt: string
  content: JournalBlock[]
  coverImageUrl: string
}

// TODO(client): replace these placeholder photos with real assets from the client.
// Required from client:
//   - Professional portrait of Yasmini (currently: floral still life placeholder)
//   - 3+ photos of real Algarve weddings planned by Maison Yasmini
//   - At least one panoramic Algarve landscape (client's preferred venue area)
//   - Detail shot (invites, place setting, or florals from a real event)
// Placeholder photos below are royalty-free from Unsplash — safe to publish,
// but must be replaced before final delivery to preserve brand authenticity.
export type ImageAsset = {
  src: string
  srcSet: string
  sizes: string
  width: number
  height: number
}

const build = (name: string, width: number, height: number): ImageAsset => ({
  src: `/images/${name}-1600.webp`,
  srcSet: `/images/${name}-800.webp 800w, /images/${name}-1600.webp 1600w`,
  sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 1200px',
  width,
  height,
})

export const imageAssets = {
  hero: build('hero', 1600, 900),
  yasminiPortrait: build('portrait', 1200, 1600),
  algarveLandscape: build('algarve', 1600, 900),
  detail: build('detail', 1600, 1200),
} as const

export const imageUrls = {
  hero: imageAssets.hero.src,
  yasminiPortrait: imageAssets.yasminiPortrait.src,
  algarveLandscape: imageAssets.algarveLandscape.src,
  detail: imageAssets.detail.src,
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
      {
        type: 'p',
        text: 'One of the first questions couples ask us is what a wedding in the Algarve actually costs. The honest answer is: it depends. Budgets vary because every celebration has its own guest count, venue style and level of design direction — and each of those variables shifts the total more than most couples expect.',
      },
      {
        type: 'p',
        text: 'This is a calm overview of how we think about budgets when we plan intimate destination weddings on this coast. It is not a price list, and it is not a promise. It is a way to help you understand the shape of the investment before we sit down to build a proposal that fits your celebration specifically.',
      },
      {
        type: 'h2',
        text: 'The three variables that move the number',
      },
      {
        type: 'p',
        text: 'Guest count is the largest single driver. A wedding for twelve close family and friends and a wedding for eighty guests are two different events long before they are two different budgets. Food, beverage, staff, rentals, seating, welcome logistics and even the size of the venue itself all scale from that first decision.',
      },
      {
        type: 'p',
        text: 'Venue style is the second variable. A private estate with in-house catering behaves differently from a rustic quinta where every element is brought in. A clifftop terrace with a small elopement ceremony is a different logistical universe from a full weekend takeover of a farm with guests staying on site. Neither is more elegant than the other — but each carries a different structure of cost.',
      },
      {
        type: 'p',
        text: 'The third is the level of design direction. Some couples want the day to feel considered but not overproduced: linen, candlelight, garden florals, quiet music. Others build the day around a specific creative concept that reaches every corner of the guest experience. Both are valid. They live at different points on the same spectrum.',
      },
      {
        type: 'h2',
        text: 'Where couples typically invest',
      },
      {
        type: 'p',
        text: 'When couples are thoughtful about the budget rather than expansive with it, they tend to concentrate the investment in three places. First, the venue and setting — because the light, the landscape and the atmosphere are the memory people carry home. Second, food and wine — because the meal is the shared centre of the day. Third, photography — because it is the record.',
      },
      {
        type: 'p',
        text: 'Everything else, from florals to stationery to music, sits inside those anchors. That is how we approach design conversations: what do we protect, what do we scale down, and what do we simply leave out because it does not truly belong in your celebration.',
      },
      {
        type: 'h2',
        text: 'Our packages, as a starting point',
      },
      {
        type: 'p',
        text: 'Maison Yasmini planning packages start at 3,000€ for small weddings up to twenty guests, 5,500€ for medium celebrations up to sixty, and 8,500€ for larger weddings up to a hundred. Above a hundred guests we prepare a custom proposal because the production, staffing and logistics deserve a tailored answer.',
      },
      {
        type: 'p',
        text: 'These figures are the planning and coordination fee — the work of guiding you from the first conversation to the last dance. The venue, catering, florals, photography and the other elements you choose sit alongside that fee, priced by the suppliers we curate with you.',
      },
      {
        type: 'h2',
        text: 'A thoughtful budget is a series of decisions',
      },
      {
        type: 'p',
        text: 'A thoughtful budget is less about extravagance and more about choosing what matters most to you and letting the rest be simple. Some of the most beautiful weddings we have planned have been quiet in scale and deep in intention. That is the tone we work in. If it is the tone you want too, we would love to hear about your date.',
      },
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
      {
        type: 'p',
        text: 'The Algarve is a landscape of light. Sea cliffs falling into the Atlantic, soft vineyards on the western hills, quiet estates hidden behind fig trees and stone walls. For couples planning an intimate destination wedding, the venue does more than host the day — it sets the feeling of it. This is a calm look at the venue archetypes we return to again and again, and how we help couples find the one that fits their celebration.',
      },
      {
        type: 'h2',
        text: 'Clifftop ceremonies with the ocean as the backdrop',
      },
      {
        type: 'p',
        text: 'The Algarve is best known for its coastline, and the western cliffs in particular have a stillness that photographs beautifully at the end of the afternoon. A clifftop ceremony works exceptionally well for smaller celebrations, from elopements to weddings of twenty or thirty guests. Wind is the real consideration — we plan ceremonies here with careful timing, sheltered orientations and simple, considered florals that can hold their own in coastal air.',
      },
      {
        type: 'p',
        text: 'The dinner that follows a clifftop ceremony often moves inland or into a walled garden — because the same wind that gives the ceremony its atmosphere makes long dinners on the cliff impractical. That transition, from open ceremony to enclosed dinner, becomes part of the arc of the day.',
      },
      {
        type: 'h2',
        text: 'Vineyards for weddings that feel like a long dinner with friends',
      },
      {
        type: 'p',
        text: 'The vineyards of the western Algarve have quietly become one of our favourite settings. They are calmer than the coast, warmer in tone, and they lend themselves to long shared tables under strings of light. For couples who want a wedding that feels like an unhurried dinner with the people they love — food, wine, storytelling, small speeches, no schedule that overwhelms the evening — a vineyard is a natural fit.',
      },
      {
        type: 'p',
        text: 'Vineyards also welcome bigger groups gracefully. A well-chosen vineyard estate can host forty, sixty, sometimes eighty guests without the celebration ever feeling like a production. That balance between scale and intimacy is one of the reasons we recommend them so often.',
      },
      {
        type: 'h2',
        text: 'Private estates and quintas for full-weekend celebrations',
      },
      {
        type: 'p',
        text: 'For couples who want their guests to stay together across a weekend, a private estate — a quinta with on-site accommodation, a garden, and one or two dining spaces — becomes the entire venue. Welcome dinner on Friday, wedding on Saturday, farewell brunch on Sunday. The day of the wedding stops being an island and becomes the middle of a longer, gentler experience.',
      },
      {
        type: 'p',
        text: 'These estates require more planning coordination and a larger budget, but they give something in return that a single-day venue cannot: time. Time for your guests to arrive from different countries and settle. Time for you to spend the morning of the wedding in the same house as the people you love. Time to say goodbye slowly.',
      },
      {
        type: 'h2',
        text: 'Walled gardens and courtyards for the smallest weddings',
      },
      {
        type: 'p',
        text: 'For elopements and very intimate weddings, small enough that a single long table would seat everyone, we often look at walled gardens, hidden courtyards, or the private terraces of restored houses. These spaces are quiet by design. There is very little that needs to be dressed. The venue does most of the storytelling on its own, and the day becomes about the people around the table more than about the setting behind them.',
      },
      {
        type: 'h2',
        text: 'How we help you choose',
      },
      {
        type: 'p',
        text: 'The most important quality of a venue is not size, style or price. It is atmosphere — the way it makes you feel when you walk in. We recommend venues that feel like a home for your story rather than a stage for a production, and we visit each one with you in mind rather than showing the same shortlist to every couple.',
      },
      {
        type: 'p',
        text: 'If you have a date, a guest count and a sense of the feeling you want, we can start with the venue conversation. Everything else follows from there.',
      },
    ],
  },
]
