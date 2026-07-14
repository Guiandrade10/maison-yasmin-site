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
//   - Professional portrait of Yasmini (currently: placeholder)
//   - Real Algarve wedding photos for the venues galleries
//   - Portrait of Yasmini for the About page
// Photos from Images-reference/ are integrated via scripts/process-images.mjs
// and referenced by kebab-case names in public/images/.
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
  contactSunset: build('contact-sunset', 1600, 900),
  servicePlanning: build('service-planning', 1600, 1100),
  serviceEvents: build('service-events', 1600, 1100),
  serviceStyling: build('service-styling', 1600, 1100),
  stylingHero: build('styling-hero', 1600, 900),
} as const

export const imageUrls = {
  hero: imageAssets.hero.src,
  yasminiPortrait: imageAssets.yasminiPortrait.src,
  algarveLandscape: imageAssets.algarveLandscape.src,
  detail: imageAssets.detail.src,
} as const

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
      'Maison Yasmini specialises in luxury intimate weddings and destination weddings in Portugal for up to 75 guests. Our planning approach adapts to each couple, their guest count and the atmosphere they want to create.',
  },
  {
    question: 'What are your starting prices?',
    answer:
      'Planning fees start at 3,000€ and scale according to guest count, wedding style and logistical complexity. Each proposal is prepared personally for the couple after our first conversation.',
  },
  {
    question: 'What happens if we have more than 75 guests?',
    answer:
      'Our focus is on intimate celebrations for up to 75 guests, and we intentionally accept a limited number of weddings each year. Larger celebrations are considered case by case and require a bespoke proposal.',
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

/* ─── Services (new content model) ────────────────────────── */

export type ServiceVerticalSlug = 'wedding-planning' | 'private-events' | 'design-styling'

export type ServiceVertical = {
  slug: ServiceVerticalSlug
  title: string
  subtitle: string
  intro: string[]
  listTitle: string
  items: string[]
  closing: string[]
  signature: string
  image: ImageAsset
}

export const serviceVerticals: ServiceVertical[] = [
  {
    slug: 'wedding-planning',
    title: 'Wedding Planning & Coordination',
    subtitle: 'Every Wedding Begins With Your Story',
    intro: [
      'From the very first conversation to the final farewell, we manage every stage of your wedding with precision, creativity and genuine care.',
      'Planning a destination wedding involves countless decisions, trusted suppliers, detailed logistics and seamless coordination. Our role is to simplify the entire process, giving you complete peace of mind while transforming your vision into an extraordinary celebration.',
    ],
    listTitle: 'Our Full Wedding Planning Service Includes',
    items: [
      'Complete wedding planning and project management',
      'Destination Weddings throughout Portugal',
      'Venue sourcing and selection',
      'Budget planning and financial management',
      'Creative concept development',
      'Wedding design and styling',
      'Floral design coordination',
      'Supplier sourcing and contract negotiation',
      'Ceremony planning',
      'Guest logistics and timeline management',
      'Wedding day coordination',
      'Unlimited planning support throughout the entire journey',
    ],
    closing: [
      'While you celebrate with your family and friends, we discreetly coordinate every detail behind the scenes, ensuring everything unfolds flawlessly.',
      'Our commitment is simple: to allow you to be fully present on one of the most meaningful days of your life, knowing that every detail has been planned with care, elegance and professionalism.',
      'Because your only responsibility should be creating unforgettable memories.',
    ],
    signature: 'Maison Yasmini. Luxury Destination Weddings Crafted with Elegance, Precision and Heart.',
    image: imageAssets.servicePlanning,
  },
  {
    slug: 'private-events',
    title: 'Private Events',
    subtitle: 'Every Celebration Deserves to Be Extraordinary',
    intro: [
      'From intimate family gatherings to once-in-a-lifetime celebrations, we create beautifully curated experiences designed to be remembered forever.',
      'Life is filled with moments worth celebrating.',
      'Whether intimate or grand, every milestone deserves to be experienced with elegance, authenticity and impeccable attention to detail.',
      'At Maison Yasmini, we create bespoke private events that reflect your personality, your vision and the emotions you wish to share with those closest to you. Our goal is not simply to organise an event, but to design meaningful experiences that leave lasting memories long after the celebration has ended.',
      'From the initial concept to the final farewell, every element is thoughtfully planned, allowing you to relax, enjoy the occasion and be fully present with your guests.',
      'Whether you are celebrating a birthday, engagement, wedding anniversary, proposal, vow renewal, baby shower, bridal shower, private brunch, luxury dinner, housewarming, family gathering or any other special occasion, we transform your ideas into beautifully curated celebrations with elegance and sophistication.',
      'Every event is unique.',
      'That is why we begin by understanding your vision, your style and the atmosphere you wish to create. From there, we design a bespoke experience where every detail works together seamlessly, ensuring a celebration that feels effortless, refined and truly personal.',
    ],
    listTitle: 'Our Private Event Planning Services Include',
    items: [
      'Complete event planning and project management',
      'Venue sourcing or planning at your private residence or estate',
      'Creative concept development',
      'Event styling and bespoke decoration',
      'Floral design coordination',
      'Luxury table styling and tablescapes',
      'Catering selection and fine dining experiences',
      'Entertainment and live performances',
      'Photography and cinematography',
      'Guest experience planning',
      'Budget management',
      'Supplier sourcing and coordination',
      'Full event coordination on the day',
    ],
    closing: [
      'While you celebrate with your family and friends, we work discreetly behind the scenes, ensuring every detail unfolds flawlessly.',
      'From welcoming your guests to coordinating suppliers, managing timelines and overseeing every element of the event, we anticipate every detail before it happens, allowing you to experience each moment with complete confidence and peace of mind.',
      'Because true luxury is not simply about creating beautiful events. It is about creating moments where every guest feels genuinely welcomed, every detail has purpose and every memory becomes part of your family’s story.',
      'At Maison Yasmini, we believe the most unforgettable celebrations are those that feel effortless, meaningful and deeply personal.',
    ],
    signature: 'Maison Yasmini. Elegant Private Celebrations Designed Around You.',
    image: imageAssets.serviceEvents,
  },
  {
    slug: 'design-styling',
    title: 'Wedding Design & Styling',
    subtitle: 'Every Detail Tells Your Story',
    intro: [
      'A truly unforgettable wedding begins long before the wedding day. It begins with a vision, an emotion and a story waiting to be beautifully told.',
      'At Maison Yasmini, we believe that exceptional wedding design goes far beyond decoration. It is about creating an atmosphere that captures emotions, reflects your personalities and leaves every guest inspired from the moment they arrive.',
      'Every celebration we design is unique. From the colour palette to the floral arrangements, from the lighting to the textures, from bespoke stationery to the perfectly styled table settings, every detail is thoughtfully curated to create an elegant, harmonious and timeless experience.',
      'Nothing is chosen by chance. Every element has a purpose. Every detail contributes to telling your story.',
      'No two love stories are alike. Your wedding should never look like anyone else’s.',
      'We take the time to understand your personalities, your lifestyle, your inspirations and the atmosphere you wish to create. This allows us to develop a bespoke design concept that is entirely personal and unmistakably yours.',
      'Whether your style is timeless and elegant, modern and minimalist, romantic and refined or effortlessly luxurious, we transform your vision into a cohesive celebration where every element feels naturally connected.',
      'The result is a wedding that is not only beautiful, but deeply meaningful. One that feels authentic to who you are.',
    ],
    listTitle: 'Our Wedding Design Services Include',
    items: [
      'Creative concept development',
      'Bespoke wedding styling',
      'Mood board creation',
      'Colour palette development',
      'Floral design concept',
      'Ceremony styling',
      'Reception styling',
      'Luxury tablescape design',
      'Lighting design and ambience',
      'Furniture and décor selection',
      'Decorative accessories and finishing touches',
      'Coordination of all styling suppliers',
      'Complete aesthetic direction for the entire celebration',
    ],
    closing: [
      'The smallest details often create the most lasting memories. The gentle glow of candlelight. The fragrance of fresh flowers. The elegance of beautifully dressed tables. The music that welcomes your guests. The soft textures, carefully selected colours and perfectly balanced atmosphere.',
      'Together, these details create far more than a beautiful wedding. They create an experience. An experience that your guests will remember long after the last dance.',
      'At Maison Yasmini, we design celebrations that are sophisticated without feeling excessive, luxurious without losing authenticity and timeless without ever following trends.',
      'Our philosophy is simple. Beauty should never compete for attention. It should feel effortless.',
      'Because when thoughtful design meets genuine emotion, something extraordinary happens. Your wedding becomes more than a celebration. It becomes a memory that will stay with you for a lifetime.',
    ],
    signature: 'Maison Yasmini. Timeless Design. Meaningful Details. Unforgettable Celebrations.',
    image: imageAssets.serviceStyling,
  },
]

/* ─── Venues ──────────────────────────────────────────────── */

export type VenueCategorySlug =
  | 'luxury-resorts'
  | 'private-villas'
  | 'exclusive-restaurants'
  | 'country-estates'

export type VenueCategoryData = {
  slug: VenueCategorySlug
  title: string
  tagline: string
  cardBlurb: string
  paragraphs: string[]
  subsections?: { title: string; paragraphs: string[] }[]
  signature?: string
  hero: ImageAsset
  gallery: ImageAsset[]
}

const venueGalleryPlaceholder = (slot: string): ImageAsset[] => [
  build(`${slot}-01`, 1600, 1067),
  build(`${slot}-02`, 1600, 1067),
  build(`${slot}-03`, 1600, 1067),
  build(`${slot}-04`, 1600, 1067),
]

export const venueCategories: VenueCategoryData[] = [
  {
    slug: 'luxury-resorts',
    title: 'Luxury Resorts & Boutique Hotels',
    tagline: 'Where Luxury Meets the Ocean',
    cardBlurb: 'World-class hospitality with breathtaking coastal views.',
    paragraphs: [
      'Imagine exchanging your vows overlooking the Atlantic Ocean, celebrating with breathtaking sunset views and ending the evening beneath a sky filled with stars.',
      'The Algarve is home to some of Europe’s most prestigious luxury resorts and boutique hotels, where exceptional hospitality, sophisticated architecture and world-class cuisine come together to create unforgettable celebrations.',
      'At Maison Yasmini, we carefully select venues renowned not only for their beauty, but also for their impeccable service, elegant surroundings and outstanding guest experience.',
      'Whether you envision an intimate ceremony by the sea, a stylish cocktail reception overlooking dramatic cliffs or an elegant ballroom celebration, we will help you discover the perfect venue to bring your vision to life.',
      'Every recommendation is tailored to your style, guest experience and wedding aspirations, ensuring a celebration that feels both effortless and extraordinary.',
      'Because extraordinary love deserves an extraordinary setting.',
    ],
    hero: build('venue-resorts-01', 1600, 900),
    gallery: venueGalleryPlaceholder('venue-resorts'),
  },
  {
    slug: 'private-villas',
    title: 'Private Villas',
    tagline: 'Exclusive Privacy. Timeless Elegance.',
    cardBlurb: 'Exclusive celebrations in complete privacy.',
    paragraphs: [
      'For couples seeking complete privacy and a truly bespoke celebration, nothing compares to the charm of a luxury private villa.',
      'Imagine celebrating your wedding surrounded by lush Mediterranean gardens, infinity pools, panoramic ocean views and the people who matter most.',
      'A private villa offers the freedom to create a wedding that is entirely your own, without compromise and without limitations. Every moment unfolds at your own pace, creating an atmosphere that is intimate, relaxed and deeply personal.',
      'At Maison Yasmini, we work with a carefully curated collection of exceptional villas throughout the Algarve, each selected for its elegance, privacy and breathtaking surroundings.',
      'Whether you dream of an alfresco dinner beneath the stars, a sunset ceremony overlooking the sea or an unforgettable weekend shared with family and friends, we design every detail around your story.',
      'Private villas offer something truly rare: the opportunity to transform your wedding into a private destination experience where every guest feels at home while enjoying the finest standards of luxury and hospitality.',
      'Because the greatest luxury is celebrating in a place that feels exclusively yours.',
    ],
    hero: build('venue-villas-01', 1600, 900),
    gallery: venueGalleryPlaceholder('venue-villas'),
  },
  {
    slug: 'exclusive-restaurants',
    title: 'Exclusive Restaurants',
    tagline: 'Fine Dining. Exceptional Celebrations.',
    cardBlurb: 'Exceptional cuisine in unforgettable settings.',
    paragraphs: [
      'For couples who appreciate outstanding cuisine, elegant surroundings and impeccable service, an exclusive restaurant provides the perfect setting for an intimate and sophisticated wedding celebration.',
      'Imagine welcoming your guests to an exceptional dining experience where every course has been carefully crafted, every table beautifully styled and every detail thoughtfully considered.',
      'Whether overlooking the ocean, nestled within an elegant marina or hidden inside one of the Algarve’s most exclusive locations, these venues combine remarkable gastronomy with unforgettable atmospheres.',
      'At Maison Yasmini, we carefully select restaurants that share our passion for excellence, ensuring that every celebration offers not only beautiful surroundings but also an exceptional culinary journey.',
      'From bespoke menus and curated wine pairings to personalised guest experiences, every element is designed to delight the senses and create memories that will last a lifetime.',
      'Because unforgettable weddings are remembered not only for how they looked, but also for how they made people feel.',
    ],
    hero: build('venue-restaurants-01', 1600, 900),
    gallery: venueGalleryPlaceholder('venue-restaurants'),
  },
  {
    slug: 'country-estates',
    title: 'Charming Country Estates & Vineyards',
    tagline: 'Authentic Elegance. Timeless Romance.',
    cardBlurb: 'Authentic Portuguese elegance surrounded by nature.',
    paragraphs: [
      'Some places possess a rare kind of magic. A quiet elegance that cannot be created, only experienced.',
      'Nestled among rolling vineyards, ancient olive groves and beautifully landscaped gardens, Portugal’s charming country estates offer an atmosphere where romance, authenticity and refined luxury exist in perfect harmony.',
      'At Maison Yasmini, we carefully curate a collection of exceptional estates that combine breathtaking natural beauty with impeccable hospitality, creating the perfect setting for intimate destination weddings filled with warmth, sophistication and unforgettable moments.',
      'Imagine exchanging your vows surrounded by endless vineyards, enjoying sunset cocktails beneath centuries-old olive trees and dining under a canopy of lights as the evening sky fills with stars.',
      'Every moment feels effortless. Every photograph becomes timeless. Every memory lasts forever.',
    ],
    subsections: [
      {
        title: 'A Celebration Inspired by Nature',
        paragraphs: [
          'Country estates offer something few venues can provide: space, tranquillity and an atmosphere that encourages genuine connection.',
          'Far from the distractions of everyday life, your guests can relax, celebrate and fully immerse themselves in the experience, creating unforgettable moments together.',
          'Whether your vision is inspired by timeless European elegance, contemporary luxury or understated romance, these remarkable venues provide the perfect canvas for a celebration that is both sophisticated and deeply personal.',
          'Nature becomes part of the design. The landscape becomes part of your story.',
        ],
      },
      {
        title: 'Carefully Curated for Your Vision',
        paragraphs: [
          'No two estates are alike. Some are historic manor houses rich in Portuguese heritage and architectural charm. Others are contemporary vineyard estates where modern luxury blends seamlessly with breathtaking scenery.',
          'At Maison Yasmini, we carefully match each venue to your personalities, your guest experience and the atmosphere you wish to create.',
          'Every recommendation is based not only on beauty, but also on comfort, accessibility, service quality and the overall experience your guests will enjoy throughout the celebration.',
        ],
      },
      {
        title: 'A Wedding That Feels Effortlessly Beautiful',
        paragraphs: [
          'From your first venue visit to the final toast, we coordinate every aspect of your celebration with precision, discretion and genuine care.',
          'Working alongside trusted venues and carefully selected suppliers, we ensure that every detail comes together seamlessly, allowing you to embrace every moment with complete confidence.',
          'Our goal is simple: to create a wedding that feels elegant without being excessive, luxurious without losing authenticity and unforgettable for all the right reasons.',
          'Because some love stories deserve to begin surrounded by vineyards, golden sunsets and landscapes that will forever hold a place in your heart.',
        ],
      },
    ],
    signature: 'Maison Yasmini. Where Timeless Romance Meets the Beauty of Portugal.',
    hero: build('venue-estates-01', 1600, 900),
    gallery: venueGalleryPlaceholder('venue-estates'),
  },
]

/* ─── Portfolio ──────────────────────────────────────────── */

export type PortfolioImage = ImageAsset & { alt: string; category?: string }

// TODO(client): populate with real portfolio images once scripts/process-images.mjs
// has processed Images-reference/ into public/images/portfolio-*.webp. Alt text
// must be descriptive of the specific moment, never generic.
export const portfolioImages: PortfolioImage[] = [
  { ...build('portfolio-hero-01', 1600, 1067), alt: 'Couple sharing a quiet moment at sunset on the Algarve coast', category: 'Ceremony' },
  { ...build('portfolio-ceremony-01', 1600, 1067), alt: 'Intimate outdoor ceremony under a floral arch', category: 'Ceremony' },
  { ...build('portfolio-reception-01', 1600, 1067), alt: 'Long dinner table dressed with candlelight and garden florals', category: 'Reception' },
  { ...build('portfolio-details-01', 1600, 1067), alt: 'Bespoke stationery suite in soft ivory and champagne tones', category: 'Details' },
  { ...build('portfolio-algarve-01', 1600, 1067), alt: 'Golden Algarve cliffs at the end of the afternoon', category: 'Destination' },
]

/* ─── Journal ────────────────────────────────────────────── */

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
        text: 'One of the first questions couples ask us is what a wedding in the Algarve actually costs. The honest answer is: it depends. Budgets vary because every celebration has its own guest count, venue style and level of design direction, and each of those variables shifts the total more than most couples expect.',
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
        text: 'Guest count is the largest single driver. A wedding for twelve close family and friends and a wedding for seventy guests are two different events long before they are two different budgets. Food, beverage, staff, rentals, seating, welcome logistics and even the size of the venue itself all scale from that first decision.',
      },
      {
        type: 'p',
        text: 'Venue style is the second variable. A private estate with in-house catering behaves differently from a rustic quinta where every element is brought in. A clifftop terrace with a small elopement ceremony is a different logistical universe from a full weekend takeover of a farm with guests staying on site. Neither is more elegant than the other. Each carries a different structure of cost.',
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
        text: 'When couples are thoughtful about the budget rather than expansive with it, they tend to concentrate the investment in three places. First, the venue and setting, because the light, the landscape and the atmosphere are the memory people carry home. Second, food and wine, because the meal is the shared centre of the day. Third, photography, because it is the record.',
      },
      {
        type: 'p',
        text: 'Everything else, from florals to stationery to music, sits inside those anchors. That is how we approach design conversations: what do we protect, what do we scale down, and what do we simply leave out because it does not truly belong in your celebration.',
      },
      {
        type: 'h2',
        text: 'A note on our planning fees',
      },
      {
        type: 'p',
        text: 'Maison Yasmini planning fees start at 3,000€ and scale according to guest count, wedding style and logistical complexity. We intentionally accept a limited number of weddings each year, exclusively for up to 75 guests, so that every couple receives the same level of attention from the first conversation to the last dance.',
      },
      {
        type: 'p',
        text: 'These figures are the planning and coordination fee. The venue, catering, florals, photography and the other elements you choose sit alongside that fee, priced by the suppliers we curate with you.',
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
        text: 'The Algarve is a landscape of light. Sea cliffs falling into the Atlantic, soft vineyards on the western hills, quiet estates hidden behind fig trees and stone walls. For couples planning an intimate destination wedding, the venue does more than host the day. It sets the feeling of it. This is a calm look at the venue archetypes we return to again and again, and how we help couples find the one that fits their celebration.',
      },
      {
        type: 'h2',
        text: 'Clifftop ceremonies with the ocean as the backdrop',
      },
      {
        type: 'p',
        text: 'The Algarve is best known for its coastline, and the western cliffs in particular have a stillness that photographs beautifully at the end of the afternoon. A clifftop ceremony works exceptionally well for smaller celebrations, from elopements to weddings of twenty or thirty guests. Wind is the real consideration. We plan ceremonies here with careful timing, sheltered orientations and simple, considered florals that can hold their own in coastal air.',
      },
      {
        type: 'p',
        text: 'The dinner that follows a clifftop ceremony often moves inland or into a walled garden, because the same wind that gives the ceremony its atmosphere makes long dinners on the cliff impractical. That transition, from open ceremony to enclosed dinner, becomes part of the arc of the day.',
      },
      {
        type: 'h2',
        text: 'Vineyards for weddings that feel like a long dinner with friends',
      },
      {
        type: 'p',
        text: 'The vineyards of the western Algarve have quietly become one of our favourite settings. They are calmer than the coast, warmer in tone, and they lend themselves to long shared tables under strings of light. For couples who want a wedding that feels like an unhurried dinner with the people they love, food, wine, storytelling, small speeches, no schedule that overwhelms the evening, a vineyard is a natural fit.',
      },
      {
        type: 'p',
        text: 'Vineyards also welcome intimate groups gracefully. A well-chosen vineyard estate can host forty, sixty, sometimes up to seventy guests without the celebration ever feeling like a production. That balance between scale and intimacy is one of the reasons we recommend them so often.',
      },
      {
        type: 'h2',
        text: 'Private estates and quintas for full-weekend celebrations',
      },
      {
        type: 'p',
        text: 'For couples who want their guests to stay together across a weekend, a private estate, a quinta with on-site accommodation, a garden, and one or two dining spaces, becomes the entire venue. Welcome dinner on Friday, wedding on Saturday, farewell brunch on Sunday. The day of the wedding stops being an island and becomes the middle of a longer, gentler experience.',
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
        text: 'The most important quality of a venue is not size, style or price. It is atmosphere, the way it makes you feel when you walk in. We recommend venues that feel like a home for your story rather than a stage for a production, and we visit each one with you in mind rather than showing the same shortlist to every couple.',
      },
      {
        type: 'p',
        text: 'If you have a date, a guest count and a sense of the feeling you want, we can start with the venue conversation. Everything else follows from there.',
      },
    ],
  },
]
