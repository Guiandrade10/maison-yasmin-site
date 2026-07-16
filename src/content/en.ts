import type { SiteContent } from '@/content/types'

export const enContent: SiteContent = {
  lang: 'en',
  htmlLang: 'en',
  ogLocale: 'en_GB',
  ogLocaleAlternate: 'pt_PT',

  header: {
    brand: 'Maison Yasmini',
    ctaLabel: 'Begin Your Wedding Journey',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    navItems: [
      { toEn: '/services', label: 'Services' },
      {
        toEn: '/venues',
        label: 'Venues',
        children: [
          { toEn: '/venues/luxury-resorts', label: 'Luxury Resorts & Boutique Hotels' },
          { toEn: '/venues/private-villas', label: 'Private Villas' },
          { toEn: '/venues/exclusive-restaurants', label: 'Exclusive Restaurants' },
          { toEn: '/venues/country-estates', label: 'Country Estates & Vineyards' },
        ],
      },
      { toEn: '/portfolio', label: 'Portfolio' },
      { toEn: '/kind-words', label: 'Kind Words' },
      { toEn: '/about', label: 'Our Story' },
      { toEn: '/contact', label: 'Get in Touch' },
    ],
    langSwitcher: {
      label: 'EN',
      en: 'EN',
      pt: 'PT',
      ariaLabel: 'Language',
    },
  },

  footer: {
    tagline: 'Where every detail tells a love story.',
    primaryLinks: [
      { toEn: '/services', label: 'Services' },
      { toEn: '/venues', label: 'Venues' },
      { toEn: '/portfolio', label: 'Portfolio' },
      { toEn: '/kind-words', label: 'Kind Words' },
      { toEn: '/about', label: 'Our Story' },
      { toEn: '/contact', label: 'Get in Touch' },
    ],
    secondaryLinks: [
      { toEn: '/why-maison-yasmini', label: 'Why Maison Yasmini' },
      { toEn: '/process', label: 'Process' },
      { toEn: '/faq', label: 'FAQ' },
      { toEn: '/journal', label: 'Journal' },
      { toEn: '/privacy', label: 'Privacy' },
    ],
    pilares: ['Excellence', 'Purpose', 'Elegance', 'Trust', 'Memories'],
    rightsPrefix: '©',
    rightsSuffix: 'All rights reserved.',
    whatsappLabel: 'WhatsApp',
    contactEmailAria: 'Email Maison Yasmini',
  },

  seo: {
    home: {
      description:
        'Luxury intimate weddings and destination weddings in Portugal for up to 75 guests, beautifully curated around your story.',
    },
    services: {
      title: 'Services',
      description:
        'Wedding planning, private events and wedding design & styling in the Algarve, for intimate celebrations of up to 75 guests.',
    },
    venues: {
      title: 'Wedding Venues in the Algarve',
      description:
        'Luxury resorts, private villas, exclusive restaurants and country estates for intimate weddings in Portugal.',
    },
    portfolio: {
      title: 'Portfolio',
      description:
        'A selection of moments we have had the honour to create. Intimate destination weddings and private events in the Algarve.',
    },
    kindWords: {
      title: 'Kind Words',
      description:
        'Words from couples who chose Maison Yasmini to plan their intimate destination wedding in the Algarve.',
    },
    about: {
      title: 'Our Story',
      description:
        'Maison Yasmini: destination weddings and event planning in the Algarve, led by Yasmini Daudo with elegance, precision and heart.',
    },
    whyMaisonYasmini: {
      title: 'Why Maison Yasmini',
      description:
        'Because your wedding deserves more than planning. Discover the boutique experience behind Maison Yasmini.',
    },
    experience: {
      title: 'Process',
      description:
        'Our five-step planning process: conversation, direction, planning, coordination, celebration. Calm structure for destination weddings in the Algarve.',
    },
    faq: {
      title: 'FAQ',
      description:
        'Answers to common questions about planning a destination wedding in the Algarve: pricing, timelines, guest counts and legal support in Portugal.',
    },
    journal: {
      title: 'Journal',
      description:
        'Editorial notes on intimate weddings, Algarve venues and destination planning, from the Maison Yasmini journal.',
    },
    contact: {
      title: 'Get in Touch',
      description:
        'Begin your wedding journey with Maison Yasmini. Share your date, guest count and vision, and we will guide you from there.',
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'How Maison Yasmini collects, uses and protects the personal data you share through this website.',
    },
    notFound: {
      title: 'Page not found',
      description: 'Page not found. Return to Maison Yasmini, boutique wedding planning in the Algarve.',
    },
  },

  common: {
    ctaBeginJourney: 'Begin Your Wedding Journey',
    ctaGetInTouch: 'Get in Touch',
    ctaDiscoverMore: 'Discover More',
    ctaReadMore: 'Read',
    ctaExploreVenues: 'Explore Our Venues',
    ctaBackToVenues: 'BACK TO VENUES',
    ctaBackToJournal: 'BACK TO JOURNAL',
    ctaBackToHome: 'Back to Home',
    heroImageAlt:
      'Couple at sunset overlooking the Atlantic on the Algarve coast, the setting for an intimate destination wedding',
    detailImageAlt: 'Details of an elegant wedding table set for an intimate celebration',
    portraitAlt: 'Portrait of Yasmini Daudo, founder of Maison Yasmini',
  },

  pilares: [
    {
      id: 'excelencia',
      title: 'Excellence',
      description:
        'A constant pursuit of precision in every detail, from the first conversation to the final moment.',
    },
    {
      id: 'proposito',
      title: 'Purpose',
      description:
        'We turn visions into real stories, with intention and care in every decision we make together.',
    },
    {
      id: 'elegancia',
      title: 'Elegance',
      description:
        'Sophistication that reveals itself through restraint. Refinement is knowing what to leave out.',
    },
    {
      id: 'confianca',
      title: 'Trust',
      description:
        'Real relationships built on transparency, clarity and consistent presence throughout the entire process.',
    },
    {
      id: 'memorias',
      title: 'Memories',
      description:
        'We turn moments into lasting memories. Celebrations that stay with the people who were there.',
    },
  ],

  home: {
    hero: {
      eyebrow: 'MAISON YASMINI · WEDDING PLANNER',
      title: 'Destination Weddings & Event Planning in the Algarve',
      tagline:
        'Luxury intimate destination weddings in Portugal, beautifully curated around your story.',
      ctaPrimary: 'Begin Your Wedding Journey',
      ctaSecondary: 'Explore Our Venues',
    },
    intro: {
      eyebrow: 'MAISON YASMINI',
      title: 'Intimate Weddings. Extraordinary Experiences.',
      paragraphs: [
        'At Maison Yasmini, we believe the most unforgettable weddings are not defined by the number of guests, but by the emotions they create and the memories they leave behind.',
        {
          pre: 'We specialise in designing and coordinating exclusive intimate weddings and destination weddings in Portugal, thoughtfully created for celebrations of ',
          strong: 'up to 75 guests',
          post: '. This allows us to provide a highly personalised experience, where every detail receives the care, creativity and attention it deserves.',
        },
        'Luxury, to us, is not about extravagance. It is about exclusivity, authenticity and the freedom to celebrate surrounded only by the people who matter most.',
      ],
    },
    servicesSection: {
      eyebrow: 'Services',
      title: 'Three ways we shape your celebration.',
      description:
        'From full wedding planning to bespoke design, every service is delivered with the same care and attention.',
      discoverMore: 'DISCOVER MORE',
    },
    venuesSection: {
      eyebrow: 'Wedding Venues in Portugal',
      title: 'Explore Our Signature Wedding Venues',
      discoverMore: 'Discover More',
    },
    whySection: {
      eyebrow: 'The Maison Yasmini way',
      title: 'Because your wedding deserves more than planning.',
      description:
        'A boutique studio that intentionally works with a limited number of couples each year, so every celebration receives our full attention.',
      bullets: [
        'Personalised planning with complete dedication.',
        'Exclusive intimate weddings for up to 75 guests.',
        'Elegant and timeless design.',
        'A calm, discreet and highly professional presence.',
      ],
      cta: 'Discover the Maison Yasmini experience',
    },
    pillarsSection: {
      title: 'OUR VALUES',
    },
    testimonialsSection: {
      eyebrow: 'Kind Words',
      title: 'What our couples say.',
    },
    finalCta: {
      eyebrow: 'BEGIN YOUR STORY',
      title: 'Every celebration deserves to be one of a kind.',
      description:
        'Share your date, guest count and the vision you have in mind. We will come back with a clear proposal built around you.',
      ctaPrimary: 'Begin Your Wedding Journey',
      ctaSecondary: 'Explore our venues',
    },
  },

  about: {
    eyebrow: 'OUR STORY',
    title: 'Maison Yasmini',
    subtitle: 'Destination Weddings & Event Planning in the Algarve',
    ctaBegin: 'Begin Your Wedding Journey',
    portraitAlt: 'Portrait of Yasmini Daudo, founder of Maison Yasmini',
    paragraphs: [
      'Maison Yasmini was born from a unique combination of precision, refined aesthetics and a genuine passion for creating meaningful and unforgettable celebrations.',
      'With more than 20 years of professional experience in the legal, administrative and management sectors, Yasmini Daudo brings a distinctive and highly structured approach to the world of wedding and event planning. Her background is reflected in every stage of the planning process, through meticulous organisation, thoughtful communication, careful attention to detail and a strong sense of responsibility.',
      'Supported by specialist training in Wedding Planning, Yasmini plans, coordinates and oversees intimate weddings, destination weddings and private events with elegance, professionalism and unwavering dedication.',
      'Our mission is to transform every celebration into a deeply personal, harmonious and beautifully curated experience, one that honours each couple’s story, vision and individuality.',
      'From selecting the right venue and trusted suppliers to managing the budget, logistics and overall event design, every element is carefully considered to create a celebration that feels effortless, sophisticated and entirely your own.',
      'At Maison Yasmini, we believe a wedding should be far more than a beautiful event. It should be an emotional and unforgettable experience, where every detail flows naturally and where couples are free to live each moment with confidence, serenity and joy.',
      'We take the time to understand who you are, what inspires you and how you wish to feel on your wedding day. This allows us to create celebrations that are not only visually elegant, but also deeply meaningful and genuinely reflective of your story.',
      'With a calm, discreet and highly professional approach, we guide you through every decision and coordinate each detail with care, allowing you to enjoy the journey as much as the celebration itself.',
    ],
    signature:
      'Maison Yasmini. Destination Weddings with Soul, Elegance and Exceptional Attention to Detail.',
    valuesEyebrow: 'OUR VALUES',
    finalCtaTitle: 'Let’s begin your story together.',
    finalCtaDescription:
      'Share your date, guest count and the atmosphere you have in mind. We will guide you from the first conversation to the last dance.',
    finalCtaButton: 'Begin Your Wedding Journey',
  },

  services: {
    eyebrow: 'SERVICES',
    title: 'Luxury Intimate Weddings in Portugal',
    subtitle: 'Intimate Weddings. Extraordinary Experiences.',
    introParagraphs: [
      'At Maison Yasmini, we believe the most unforgettable weddings are not defined by the number of guests, but by the emotions they create and the memories they leave behind.',
      'We specialise in designing and coordinating exclusive intimate weddings and destination weddings in Portugal, thoughtfully created for celebrations of up to 75 guests. This allows us to provide a highly personalised experience, where every detail receives the care, creativity and attention it deserves.',
      'Luxury, to us, is not about extravagance. It is about exclusivity, authenticity and the freedom to celebrate surrounded only by the people who matter most.',
      'Every wedding begins with your story.',
      'We take the time to understand your personalities, your vision, your lifestyle and everything that makes your relationship unique. From there, we create a celebration that feels effortless, elegant and genuinely yours.',
      'Whether you dream of exchanging vows on dramatic ocean cliffs, celebrating in a private villa, hosting an elegant dinner at a luxury resort or saying "I do" in a charming Portuguese estate, every element is thoughtfully curated to reflect your style and create an unforgettable experience.',
    ],
    philosophyLead: {
      prefix: 'Our philosophy is simple: ',
      italic: 'Quality over quantity.',
    },
    philosophyParagraphs: [
      'We intentionally focus on a limited number of weddings each year, allowing us to dedicate our full attention to every couple and deliver an exceptional level of service from beginning to end.',
      'The result is a celebration where every guest feels welcomed, every detail feels intentional and every moment becomes a lifelong memory.',
      'Because the greatest luxury is celebrating your love in a way that feels deeply personal, beautifully effortless and truly unforgettable.',
    ],
    tabsAriaLabel: 'Services on this page',
    serviceLabel: (index: number) => `0${index + 1} · SERVICE`,
    verticals: [
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
        signature:
          'Maison Yasmini. Luxury Destination Weddings Crafted with Elegance, Precision and Heart.',
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
      },
    ],
    finalCtaTitle: 'Let’s Create Something Beautiful',
    finalCtaDescription:
      'Share your date, guest count and the atmosphere you have in mind. We will respond with clarity and the next steps.',
    finalCtaButton: 'Begin Your Wedding Journey',
    heroImageAltSuffix: 'in the Algarve',
  },

  venues: {
    eyebrow: 'VENUES',
    title: 'Discover the Perfect Setting for Your Love Story',
    intro: [
      'Every unforgettable wedding begins with the perfect setting.',
      'The venue is far more than a beautiful location. It is the place where your memories will be created, your story will unfold and one of the most meaningful days of your life will come to life.',
      'At Maison Yasmini, we believe that choosing the right venue is one of the most important decisions in the entire planning journey. It sets the atmosphere, defines the experience and becomes the backdrop to every emotion, every photograph and every unforgettable moment.',
    ],
    intro2: [
      'As specialists in luxury intimate weddings and destination weddings in Portugal, we help couples discover exceptional venues that perfectly reflect their style, personality and vision.',
    ],
    algarveEyebrow: 'The Algarve',
    algarveTitle: 'Europe’s Hidden Gem for Luxury Weddings',
    algarveP1: [
      'With its dramatic cliffs, golden beaches, crystal-clear waters, world-class hospitality and over 300 days of sunshine each year, the Algarve has become one of Europe’s most sought-after wedding destinations.',
      'From breathtaking coastal settings to elegant country estates, exclusive private villas and award-winning luxury resorts, the region offers an extraordinary variety of venues for couples seeking an unforgettable celebration.',
    ],
    algarveP2: [
      'Whether you are travelling from the United Kingdom, Ireland, the United States, Canada, Australia or anywhere else in the world, the Algarve offers the perfect balance of natural beauty, accessibility and refined luxury.',
    ],
    algarveTagline: 'It is where unforgettable weddings begin.',
    approachEyebrow: 'Our approach',
    approachTitle: 'Carefully Curated Venues',
    approachIntro: [
      'Every couple is unique. Your wedding venue should be too.',
      'Rather than overwhelming you with endless options, we carefully select venues that genuinely match your vision, guest numbers, budget and wedding style.',
    ],
    approachListLead: 'Whether you imagine:',
    approachList: [
      'exchanging vows on dramatic cliffs overlooking the Atlantic Ocean;',
      'celebrating in an elegant five-star resort;',
      'hosting an intimate dinner in a private luxury villa;',
      'embracing the charm of a boutique hotel;',
      'dining beneath the stars at an exclusive restaurant;',
      'or saying "I do" in a romantic Portuguese country estate surrounded by vineyards,',
    ],
    approachClose:
      'we will help you find the setting that feels as though it was made especially for your story.',
    signatureEyebrow: 'Wedding Venues in Portugal',
    signatureTitle: 'Explore Our Signature Wedding Venues',
    cardHeroAltSuffix: 'in the Algarve',
    roleEyebrow: 'Our role',
    roleTitle: 'More Than Venue Sourcing',
    roleParagraphs: [
      'Finding a beautiful venue is only the beginning. Our role extends far beyond presenting beautiful locations.',
      'We personally guide you through the selection process, arranging site visits, coordinating meetings with venue managers, reviewing supplier requirements, assessing logistical details and ensuring that every decision supports your overall vision.',
      'We carefully evaluate accessibility, guest comfort, accommodation, ceremony flow, photography opportunities, entertainment logistics and countless other details that are often overlooked.',
      'Every recommendation is made with one goal in mind: to ensure your wedding feels effortless from beginning to end.',
    ],
    partnersEyebrow: 'Partners',
    partnersTitle: 'Trusted Relationships. Exceptional Locations.',
    partnersParagraphs: [
      'Over time, we have built valuable relationships with some of Portugal’s most exclusive wedding venues and hospitality partners.',
      'This allows us to recommend locations recognised not only for their beauty, but also for their outstanding service, exceptional cuisine and commitment to delivering unforgettable guest experiences.',
      'Each venue we recommend has been selected for its quality, elegance and ability to host extraordinary celebrations.',
    ],
    beyondEyebrow: 'Beyond weddings',
    beyondTitle: 'Creating Experiences, Not Simply Weddings',
    beyondParagraphs: [
      'The right venue transforms a celebration into an experience. It becomes the place where emotions are shared, families come together, friendships are celebrated and memories are created for generations.',
      'At Maison Yasmini, we don’t simply help you choose a venue. We help you discover the place where your love story truly belongs.',
    ],
    beyondSignature: 'Maison Yasmini. Extraordinary Venues. Timeless Celebrations. Beautiful Memories.',
    finalCtaTitle: 'Ready to discover your venue?',
    finalCtaDescription:
      'Tell us your date, guest count and the atmosphere you are dreaming of. We will guide you from there.',
    finalCtaButton: 'Begin Your Wedding Journey',
    categoryPage: {
      backToVenues: 'BACK TO VENUES',
      exploreOtherVenues: 'EXPLORE OTHER VENUES',
      finalCtaTitle: 'Begin the conversation',
      finalCtaDescription:
        'Share your date, guest count and vision. We will help you discover the venue that fits.',
      finalCtaButton: 'Begin Your Wedding Journey',
      venueEyebrow: 'VENUE',
      heroAltSuffix: 'venue in the Algarve',
      galleryAltSuffix: 'inspiration',
    },
    categories: {
      'luxury-resorts': {
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
        seoTitle: 'Luxury Resorts & Boutique Hotels',
        seoDescription:
          'Where luxury meets the ocean: prestigious Algarve resorts for unforgettable celebrations.',
      },
      'private-villas': {
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
        seoTitle: 'Private Villas',
        seoDescription: 'Exclusive privacy and timeless elegance for bespoke Algarve weddings.',
      },
      'exclusive-restaurants': {
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
        seoTitle: 'Exclusive Restaurants',
        seoDescription:
          'Fine dining and exceptional celebrations in the Algarve’s most remarkable settings.',
      },
      'country-estates': {
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
        seoTitle: 'Country Estates & Vineyards',
        seoDescription:
          'Authentic Portuguese elegance among vineyards, olive groves and gardens.',
      },
    },
  },

  portfolio: {
    eyebrow: 'PORTFOLIO',
    title: 'Moments We Have Had the Honour to Create',
    description:
      'A selection of intimate weddings and private events, curated with restraint, natural light and attention to what truly matters.',
    filterAllLabel: 'All',
    filterAriaLabel: 'Filter portfolio by category',
    categoryLabels: {
      Ceremony: 'Ceremony',
      Reception: 'Reception',
      Details: 'Details',
      Destination: 'Destination',
    },
    imageAlts: [
      'Garden ceremony framed by pine trees with the Atlantic behind the aisle of white petals',
      'Bride and groom exchanging vows under a white floral chuppah above the sea',
      'Beach ceremony under a wooden canopy draped with linen and eucalyptus',
      'Aisle lined with hydrangea pedestals leading to a cliffside altar',
      'Clifftop ceremony overlooking a turquoise cove at midday',
      'Sunlit chuppah dressed in white roses and greenery on a lawn above the sea',
      'Beach vow exchange at sunset with the couple lit by warm coastal light',
      'Long farmhouse dinner table beneath a fairy-light curtain against a whitewashed façade',
      'Vineyard reception with a long table under a canopy of café lights at dusk',
      'Guests gathered at a candlelit outdoor dinner beneath a suspended sky of fairy lights',
      'Ballroom tablescape of gold chairs, taper candles and full white rose arrangements',
      'Terrace dinner table dressed in cane chairs beneath curtains of warm string lights',
      'Grand ballroom with gilded chairs, chandeliers and towering white centrepieces',
      'Poolside reception at blue hour lit by silver candelabras and dozens of tapers',
      'Peach ribbon, wax-sealed invitation suite and dried carnations on linen',
      'Cascading bridal bouquet of white phalaenopsis orchids in the bride’s hands',
      'His and hers wedding bands resting on ivory silk beside dried gypsophila',
      'Couple kissing between rows of vines with a rose-coloured Algarve sunset behind them',
      'Elopement altar under natural sandstone arches on an Algarve beach',
      'Open-air stretch tent reception overlooking the ocean under a rising moon',
      'Aerial view of a long dinner table lit by pendant bulbs between cypress trees',
      'Beachfront ceremony arch at dusk under a string of Edison bulbs and a lone palm',
      'Couple embracing on a rocky Algarve cliff as the last sun of the day meets the sea',
      'Bride and groom facing each other on the sand at golden hour with the waves behind them',
      'Ceremony aisle scattered with rose petals leading to the sea between coastal pines',
      'Distant view of a couple embracing on a sculpted rock plateau above the Atlantic',
    ],
    finalCtaTitle: 'Ready to write your own story?',
    finalCtaButton: 'Begin Your Wedding Journey',
  },

  kindWords: {
    eyebrow: 'KIND WORDS',
    title: 'Kind Words From Our Couples',
    comingSoonEyebrow: 'Coming soon',
    comingSoonTitle: 'Kind words from our couples are on their way.',
    comingSoonBody:
      'Our couples’ stories are being gathered with the same care we give their celebrations. In the meantime, we would love to begin yours.',
    comingSoonCta: 'Begin Your Wedding Journey',
  },

  whyMaisonYasmini: {
    eyebrow: 'WHY MAISON YASMINI',
    title: 'Because Your Wedding Deserves More Than Planning',
    intro: [
      'Your wedding is not simply another event. It is one of the most meaningful chapters of your life. The place where two families become one. The day your closest friends travel from around the world to celebrate your love. The beginning of memories that will stay with you forever.',
      'That is why choosing the right wedding planner is one of the most important decisions you will make.',
      'At Maison Yasmini, we don’t simply organise weddings. We create experiences that feel effortless, deeply personal and beautifully unforgettable.',
    ],
    sections: [
      {
        title: 'A Boutique Wedding Planning Experience',
        paragraphs: [
          'Unlike companies that manage dozens of weddings every season, we intentionally accept a limited number of celebrations each year. This allows us to dedicate our complete attention, creativity and expertise to every couple we work with.',
          'We believe true luxury is never rushed. It is thoughtful. Personal. Intentional.',
          'Every wedding we create receives the care, dedication and attention it truly deserves.',
        ],
      },
      {
        title: 'Specialists in Intimate Destination Weddings',
        paragraphs: [
          'Our philosophy is simple. We exclusively specialise in intimate weddings and luxury celebrations for up to 75 guests.',
          'This is not a limitation. It is our greatest strength.',
          'Smaller weddings create deeper emotions. More meaningful conversations. More time with the people you love. Greater attention to every guest. And an atmosphere that simply cannot be recreated in large-scale celebrations.',
          'We believe the most unforgettable weddings are not measured by the number of guests. They are measured by the emotions they create and the memories they leave behind.',
        ],
      },
      {
        title: 'Every Wedding Begins With Your Story',
        paragraphs: [
          'No two couples are alike. Neither should their weddings be.',
          'Before discussing flowers, colours or venues, we take the time to understand who you are. Your personalities. Your journey together. Your dreams. Your traditions. Your families. The atmosphere you want your guests to experience.',
          'Only then do we begin designing a celebration that truly reflects your story. Because your wedding should never look like anyone else’s. It should feel unmistakably yours.',
        ],
      },
      {
        title: 'Meticulous Planning. Seamless Execution.',
        paragraphs: [
          'Behind every elegant wedding is exceptional organisation. Every timeline. Every supplier. Every contract. Every logistical detail. Every contingency plan. Every guest experience. Nothing is left to chance.',
          'Our background in law, administration and project management gives us a unique level of organisation, structure and precision, ensuring every aspect of your celebration is carefully coordinated with professionalism and discretion.',
          'While you enjoy every moment, we quietly manage everything behind the scenes.',
        ],
      },
      {
        title: 'Carefully Curated Venues & Trusted Partners',
        paragraphs: [
          'Luxury is not only about beautiful locations. It is about working with exceptional people.',
          'Over the years, we have built trusted relationships with carefully selected venues and outstanding suppliers across Portugal. From luxury resorts and private villas to celebrated chefs, talented florists, photographers and musicians, every recommendation is chosen for its quality, professionalism and commitment to excellence.',
          'Because every supplier becomes part of your story.',
        ],
      },
      {
        title: 'A Calm Presence Throughout Your Journey',
        paragraphs: [
          'Planning a destination wedding should never feel overwhelming. Our role is to simplify every decision, answer every question and guide you with confidence from your first consultation to your last dance.',
          'You will always know what comes next. You will always feel supported. You will always have someone looking after every detail.',
          'That peace of mind is one of the greatest luxuries we can offer.',
        ],
      },
      {
        title: 'More Than Beautiful Weddings',
        paragraphs: [
          'Anyone can organise a wedding. Our purpose is different.',
          'We create experiences that feel effortless. Celebrations where guests feel genuinely welcomed. Moments filled with emotion, elegance and authenticity.',
          'Weddings that are remembered not only because they were beautiful, but because they felt extraordinary.',
        ],
      },
    ],
    promiseEyebrow: 'Our promise',
    promiseTitle: 'What every couple receives from us.',
    promise: [
      'Personalised planning with complete dedication.',
      'Exclusive intimate weddings for up to 75 guests.',
      'Elegant and timeless design.',
      'Meticulous organisation and flawless coordination.',
      'Trusted venues and exceptional suppliers.',
      'Honest communication and complete transparency.',
      'A calm, discreet and highly professional presence.',
      'A celebration that reflects your story, and no one else’s.',
    ],
    finalSectionTitle: 'Because Luxury Is Not About Having More.',
    finalSectionParagraphs: [
      'It is about feeling more. More connected. More present. More relaxed. More emotional. More unforgettable.',
      'That is the Maison Yasmini experience.',
    ],
    finalSectionSignature:
      'Maison Yasmini. Luxury Intimate Destination Weddings in Portugal, Beautifully Curated Around Your Story.',
    finalCtaTitle: 'The Maison Yasmini experience begins here.',
    finalCtaButton: 'Begin Your Wedding Journey',
  },

  experience: {
    title: 'How we work.',
    description:
      'A five-step process built around clear checkpoints, thoughtful pacing and a steady presence from first conversation to wedding day.',
    ctaBegin: 'Begin Your Wedding Journey',
    stepLabel: 'STEP',
    steps: [
      {
        number: '01',
        title: 'Conversation',
        description:
          'We understand your date, guest count, priorities and the atmosphere you want to create in the Algarve.',
      },
      {
        number: '02',
        title: 'Direction',
        description:
          'We shape the concept, shortlist venues and build a planning direction that fits your celebration size.',
      },
      {
        number: '03',
        title: 'Planning',
        description:
          'Suppliers, logistics, schedule and decisions are organized with clarity so the process feels steady.',
      },
      {
        number: '04',
        title: 'Coordination',
        description:
          'We manage confirmations, timings and the full event flow so every part of the day runs with confidence.',
      },
      {
        number: '05',
        title: 'Celebration',
        description:
          'You enjoy the day with your guests while we take care of everything happening behind the scenes.',
      },
    ],
    stepAddendum:
      'We keep communication clear and warm, never corporate and never sales-driven. Every detail is handled with care so you can be fully present on the day.',
    nextEyebrow: 'Next step',
    nextTitle: 'Tell us your date and what you are hoping for.',
    nextDescription:
      'We will come back with availability, honest guidance and a clear sense of whether we are the right fit.',
    nextCta: 'Get in Touch',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Clear answers, calm decisions.',
    description:
      'If you do not see your question here, send us a note and we will respond with clarity.',
    items: [
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
    ],
  },

  journal: {
    eyebrow: 'Journal',
    title: 'Guides for international couples planning a wedding in the Algarve.',
    description:
      'Practical reads on budgets, venues, timelines and what to know before planning a wedding in Portugal.',
    readCta: 'READ',
    notFoundTitle: 'Article not found',
    notFoundBody: 'Please return to the Journal.',
    postCtaBegin: 'Begin Your Wedding Journey',
    posts: [
      {
        slug: 'how-much-does-a-destination-wedding-in-algarve-cost',
        title: 'How much does a destination wedding in the Algarve cost?',
        excerpt: 'A calm overview of budgets, priorities and where couples typically invest.',
        category: 'Planning',
        publishedAt: '2026-06-01',
        content: [
          {
            type: 'p',
            text: 'One of the first questions couples ask us is what a wedding in the Algarve actually costs. The honest answer is: it depends. Budgets vary because every celebration has its own guest count, venue style and level of design direction, and each of those variables shifts the total more than most couples expect.',
          },
          {
            type: 'p',
            text: 'This is a calm overview of how we think about budgets when we plan intimate destination weddings on this coast. It is not a price list, and it is not a promise. It is a way to help you understand the shape of the investment before we sit down to build a proposal that fits your celebration specifically.',
          },
          { type: 'h2', text: 'The three variables that move the number' },
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
          { type: 'h2', text: 'Where couples typically invest' },
          {
            type: 'p',
            text: 'When couples are thoughtful about the budget rather than expansive with it, they tend to concentrate the investment in three places. First, the venue and setting, because the light, the landscape and the atmosphere are the memory people carry home. Second, food and wine, because the meal is the shared centre of the day. Third, photography, because it is the record.',
          },
          {
            type: 'p',
            text: 'Everything else, from florals to stationery to music, sits inside those anchors. That is how we approach design conversations: what do we protect, what do we scale down, and what do we simply leave out because it does not truly belong in your celebration.',
          },
          { type: 'h2', text: 'A note on our planning fees' },
          {
            type: 'p',
            text: 'Maison Yasmini planning fees start at 3,000€ and scale according to guest count, wedding style and logistical complexity. We intentionally accept a limited number of weddings each year, exclusively for up to 75 guests, so that every couple receives the same level of attention from the first conversation to the last dance.',
          },
          {
            type: 'p',
            text: 'These figures are the planning and coordination fee. The venue, catering, florals, photography and the other elements you choose sit alongside that fee, priced by the suppliers we curate with you.',
          },
          { type: 'h2', text: 'A thoughtful budget is a series of decisions' },
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
        content: [
          {
            type: 'p',
            text: 'The Algarve is a landscape of light. Sea cliffs falling into the Atlantic, soft vineyards on the western hills, quiet estates hidden behind fig trees and stone walls. For couples planning an intimate destination wedding, the venue does more than host the day. It sets the feeling of it. This is a calm look at the venue archetypes we return to again and again, and how we help couples find the one that fits their celebration.',
          },
          { type: 'h2', text: 'Clifftop ceremonies with the ocean as the backdrop' },
          {
            type: 'p',
            text: 'The Algarve is best known for its coastline, and the western cliffs in particular have a stillness that photographs beautifully at the end of the afternoon. A clifftop ceremony works exceptionally well for smaller celebrations, from elopements to weddings of twenty or thirty guests. Wind is the real consideration. We plan ceremonies here with careful timing, sheltered orientations and simple, considered florals that can hold their own in coastal air.',
          },
          {
            type: 'p',
            text: 'The dinner that follows a clifftop ceremony often moves inland or into a walled garden, because the same wind that gives the ceremony its atmosphere makes long dinners on the cliff impractical. That transition, from open ceremony to enclosed dinner, becomes part of the arc of the day.',
          },
          { type: 'h2', text: 'Vineyards for weddings that feel like a long dinner with friends' },
          {
            type: 'p',
            text: 'The vineyards of the western Algarve have quietly become one of our favourite settings. They are calmer than the coast, warmer in tone, and they lend themselves to long shared tables under strings of light. For couples who want a wedding that feels like an unhurried dinner with the people they love, food, wine, storytelling, small speeches, no schedule that overwhelms the evening, a vineyard is a natural fit.',
          },
          {
            type: 'p',
            text: 'Vineyards also welcome intimate groups gracefully. A well-chosen vineyard estate can host forty, sixty, sometimes up to seventy guests without the celebration ever feeling like a production. That balance between scale and intimacy is one of the reasons we recommend them so often.',
          },
          { type: 'h2', text: 'Private estates and quintas for full-weekend celebrations' },
          {
            type: 'p',
            text: 'For couples who want their guests to stay together across a weekend, a private estate, a quinta with on-site accommodation, a garden, and one or two dining spaces, becomes the entire venue. Welcome dinner on Friday, wedding on Saturday, farewell brunch on Sunday. The day of the wedding stops being an island and becomes the middle of a longer, gentler experience.',
          },
          {
            type: 'p',
            text: 'These estates require more planning coordination and a larger budget, but they give something in return that a single-day venue cannot: time. Time for your guests to arrive from different countries and settle. Time for you to spend the morning of the wedding in the same house as the people you love. Time to say goodbye slowly.',
          },
          { type: 'h2', text: 'Walled gardens and courtyards for the smallest weddings' },
          {
            type: 'p',
            text: 'For elopements and very intimate weddings, small enough that a single long table would seat everyone, we often look at walled gardens, hidden courtyards, or the private terraces of restored houses. These spaces are quiet by design. There is very little that needs to be dressed. The venue does most of the storytelling on its own, and the day becomes about the people around the table more than about the setting behind them.',
          },
          { type: 'h2', text: 'How we help you choose' },
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
    ],
  },

  contact: {
    eyebrow: 'Get in Touch',
    title: 'Begin Your Wedding Journey',
    description:
      'Share your date, guest count and the atmosphere you have in mind. We will respond with clarity and the next steps.',
    form: {
      labelNames: 'NAMES',
      labelEmail: 'EMAIL',
      labelCountry: 'COUNTRY',
      labelWeddingDate: 'WEDDING DATE',
      labelGuests: 'ESTIMATED GUESTS',
      guestsPlaceholder: 'e.g. 40',
      labelService: 'SERVICE OF INTEREST',
      serviceOptions: [
        'Wedding Planning & Coordination',
        'Private Events',
        'Wedding Design & Styling',
        'Not sure yet',
      ],
      labelVenueSelected: 'VENUE ALREADY SELECTED?',
      venueSelectedOptions: { yes: 'Yes', notYet: 'Not yet' },
      labelInspiration: 'INSPIRATION LINK',
      inspirationPlaceholder: 'Pinterest, Google Drive, Instagram…',
      labelMessage: 'MESSAGE',
      honeypotLabel: 'Do not fill this field',
      submitIdle: 'Send inquiry',
      submitSending: 'Sending…',
      errorNames: 'Please share the names of the couple.',
      errorEmailRequired: 'Please add an email so we can reply.',
      errorEmailInvalid: 'That email address does not look right.',
      errorRetry:
        'We could not send your inquiry right now. Please try again in a moment, or write to us directly.',
      errorGeneric: 'Something went wrong on our side. Please write to us directly for now.',
      thankYouTitle: 'Thank you.',
      thankYouBody: 'Your inquiry is with us. We reply within two working days from the Algarve.',
      preferEmail: 'Prefer email? Write to',
      preferWhatsAppQuestion: 'Prefer WhatsApp?',
      preferWhatsAppLink: 'Message us here',
      privacyLine: {
        lead: 'By sending this inquiry you agree that we may reply to you by email or WhatsApp. Read our ',
        linkLabel: 'privacy policy',
        tail: '.',
      },
    },
  },

  privacy: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    lastReviewedPrefix: 'Last reviewed on ',
    lastReviewedSuffix:
      '. This policy explains how Maison Yasmini handles personal data submitted through this website.',
    dateLocale: 'en-GB',
    sections: [
      {
        title: 'Who we are',
        paragraphs: [
          'Maison Yasmini is a boutique wedding planning studio based in the Algarve, Portugal. We can be reached by email at __EMAIL__.',
        ],
      },
      {
        title: 'What we collect',
        paragraphs: [
          'When you send us an inquiry through the contact form, you may share your names, email address, country, wedding date, guest count, package interest, venue status, an inspiration link and any message you choose to write. We only collect what you enter.',
          'We do not use analytics cookies or third-party tracking on this site.',
        ],
      },
      {
        title: 'Why we collect it',
        paragraphs: [
          'We use this information solely to respond to your inquiry and, if you decide to work with us, to plan and coordinate your wedding. The legal basis under GDPR is the performance of a contract at your request, or our legitimate interest in replying to enquiries about our services.',
        ],
      },
      {
        title: 'Who handles the data',
        paragraphs: [
          'The contact form is delivered by a third-party form provider. Your submission travels through their servers before reaching our inbox. We rely on providers with GDPR-compliant processing agreements. Beyond that, we do not share your data with anyone else unless you ask us to introduce you to a specific supplier.',
        ],
      },
      {
        title: 'How long we keep it',
        paragraphs: [
          'Enquiries that do not lead to an active project are deleted within twelve months. Data related to weddings we plan is kept for the duration of the project and, afterwards, for the period required by Portuguese accounting and tax law.',
        ],
      },
      {
        title: 'Your rights',
        paragraphs: [
          'Under GDPR, you can ask to access, correct or delete your personal data at any time, or to restrict or object to its processing. Write to __EMAIL__ and we will respond within thirty days. If you feel we have not handled a request well, you can also complain to the Portuguese data protection authority (CNPD).',
        ],
      },
      {
        title: 'Changes to this policy',
        paragraphs: [
          'We may update this policy from time to time. The date at the top reflects the most recent review.',
        ],
      },
    ],
  },

  notFound: {
    title: 'Page not found',
    description:
      'The page you are looking for doesn’t exist. Return to the homepage or explore the main sections.',
    ctaBack: 'Back to Home',
  },
}
