import type { SiteContent } from '@/content/types'

export const ptContent: SiteContent = {
  lang: 'pt',
  htmlLang: 'pt-PT',
  ogLocale: 'pt_PT',
  ogLocaleAlternate: 'en_GB',

  header: {
    brand: 'Maison Yasmini',
    // PROVISÓRIO — aguarda aprovação da cliente
    // Proposta: "Comecem a Vossa Jornada" (ver Lacunas do COPY-PT-VERBATIM)
    ctaLabel: 'Comecem a Vossa Jornada',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
    navItems: [
      { toEn: '/services', label: 'Serviços' },
      {
        toEn: '/venues',
        label: 'Espaços',
        children: [
          { toEn: '/venues/luxury-resorts', label: 'Resorts de Luxo e Hotéis Boutique' },
          { toEn: '/venues/private-villas', label: 'Villas Privadas' },
          { toEn: '/venues/exclusive-restaurants', label: 'Restaurantes Exclusivos' },
          { toEn: '/venues/country-estates', label: 'Quintas de Charme' },
        ],
      },
      { toEn: '/portfolio', label: 'Portefólio' },
      { toEn: '/kind-words', label: 'Testemunhos' },
      { toEn: '/about', label: 'Sobre Nós' },
      { toEn: '/contact', label: 'Contacte-nos' },
    ],
    langSwitcher: {
      label: 'PT',
      en: 'EN',
      pt: 'PT',
      ariaLabel: 'Idioma',
    },
  },

  footer: {
    // PROVISÓRIO — aguarda copy da cliente (mantém posicionamento da tagline EN traduzido)
    tagline: 'Onde cada detalhe conta uma história de amor.',
    primaryLinks: [
      { toEn: '/services', label: 'Serviços' },
      { toEn: '/venues', label: 'Espaços' },
      { toEn: '/portfolio', label: 'Portefólio' },
      { toEn: '/kind-words', label: 'Testemunhos' },
      { toEn: '/about', label: 'Sobre Nós' },
      { toEn: '/contact', label: 'Contacte-nos' },
    ],
    secondaryLinks: [
      { toEn: '/why-maison-yasmini', label: 'Porquê Maison Yasmini' },
      { toEn: '/process', label: 'Processo' },
      { toEn: '/faq', label: 'FAQ' },
      { toEn: '/journal', label: 'Journal' },
      { toEn: '/privacy', label: 'Privacidade' },
    ],
    pilares: ['Excelência', 'Propósito', 'Elegância', 'Confiança', 'Memórias'],
    rightsPrefix: '©',
    rightsSuffix: 'Todos os direitos reservados.',
    whatsappLabel: 'WhatsApp',
    contactEmailAria: 'Email para a Maison Yasmini',
  },

  seo: {
    home: {
      description:
        'Casamentos intimistas e destination weddings de luxo em Portugal para até 75 convidados, cuidadosamente pensados em torno da vossa história.',
    },
    services: {
      title: 'Serviços',
      description:
        'Wedding planning, eventos privados e styling & design para casamentos intimistas no Algarve, até 75 convidados.',
    },
    venues: {
      title: 'Espaços para Casamento no Algarve',
      description:
        'Resorts de luxo, villas privadas, restaurantes exclusivos e quintas de charme para casamentos intimistas em Portugal.',
    },
    portfolio: {
      title: 'Portefólio',
      description:
        'Uma seleção de momentos que tivemos a honra de criar. Destination weddings intimistas e eventos privados no Algarve.',
    },
    kindWords: {
      title: 'Testemunhos',
      description:
        'Palavras dos casais que escolheram a Maison Yasmini para planear o seu destination wedding intimista no Algarve.',
    },
    about: {
      title: 'Sobre Nós',
      description:
        'Maison Yasmini: destination weddings e organização de eventos no Algarve, com Yasmini Daudo — método, elegância e atenção ao detalhe.',
    },
    whyMaisonYasmini: {
      title: 'Porquê Maison Yasmini',
      description:
        'Porque o vosso casamento merece mais do que planeamento. Descubram a experiência boutique da Maison Yasmini.',
    },
    experience: {
      title: 'Processo',
      description:
        'O nosso processo em cinco etapas: conversa, direção, planeamento, coordenação, celebração. Estrutura serena para destination weddings no Algarve.',
    },
    faq: {
      title: 'FAQ',
      description:
        'Respostas às perguntas mais frequentes sobre destination weddings no Algarve: preços, prazos, número de convidados e apoio jurídico em Portugal.',
    },
    journal: {
      title: 'Journal',
      description:
        'Notas editoriais sobre casamentos intimistas, espaços no Algarve e destination weddings, do journal da Maison Yasmini.',
    },
    contact: {
      title: 'Contacte-nos',
      description:
        'Comecem a vossa jornada com a Maison Yasmini. Partilhem data, número de convidados e visão — guiamos-vos a partir daí.',
    },
    privacy: {
      title: 'Política de Privacidade',
      description:
        'Como a Maison Yasmini recolhe, utiliza e protege os dados pessoais partilhados através deste site.',
    },
    notFound: {
      title: 'Página não encontrada',
      description:
        'Página não encontrada. Regressem à Maison Yasmini, atelier boutique de wedding planning no Algarve.',
    },
  },

  common: {
    ctaBeginJourney: 'Comecem a Vossa Jornada',
    ctaGetInTouch: 'Contacte-nos',
    ctaDiscoverMore: 'Descobrir Mais',
    ctaReadMore: 'Ler',
    ctaExploreVenues: 'Explorar Espaços',
    ctaBackToVenues: 'VOLTAR AOS ESPAÇOS',
    ctaBackToJournal: 'VOLTAR AO JOURNAL',
    ctaBackToHome: 'Voltar ao Início',
    heroImageAlt:
      'Casal ao pôr do sol com o Atlântico ao fundo na costa algarvia, o cenário para um destination wedding intimista',
    detailImageAlt: 'Detalhes de uma mesa de casamento elegante para uma celebração intimista',
    portraitAlt: 'Yasmini Daudo, fundadora da Maison Yasmini',
  },

  pilares: [
    {
      id: 'excelencia',
      title: 'Excelência',
      description:
        'A procura constante do rigor em cada detalhe, desde a primeira conversa até ao último momento.',
    },
    {
      id: 'proposito',
      title: 'Propósito',
      description:
        'Transformamos visões em histórias reais, com intenção e cuidado em cada decisão tomada em conjunto.',
    },
    {
      id: 'elegancia',
      title: 'Elegância',
      description:
        'Sofisticação que se revela na contenção. O requinte está em saber o que deixar de fora.',
    },
    {
      id: 'confianca',
      title: 'Confiança',
      description:
        'Relações verdadeiras assentes em transparência, clareza e presença constante ao longo de todo o processo.',
    },
    {
      id: 'memorias',
      title: 'Memórias',
      description:
        'Transformamos momentos em memórias duradouras. Celebrações que permanecem em quem as viveu.',
    },
  ],

  home: {
    hero: {
      eyebrow: 'MAISON YASMINI · WEDDING PLANNER',
      // Nota: "Maison Yasmini —" removido do H1 verbatim da cliente porque
      // duplica o eyebrow já visível acima do título.
      title: 'Destination Weddings & Event Planning in Algarve',
      // PROVISÓRIO — tagline de hero não fornecida separadamente pela cliente
      tagline:
        'Destination weddings intimistas em Portugal, cuidadosamente pensados em torno da vossa história.',
      ctaPrimary: 'Comecem a Vossa Jornada',
      ctaSecondary: 'Explorar Espaços',
    },
    intro: {
      eyebrow: 'MAISON YASMINI',
      // Nota: usamos como título de secção a assinatura de fecho aprovada
      title: 'Destination Weddings com alma, requinte e atenção ao detalhe.',
      paragraphs: [
        'A Maison Yasmini nasce da união entre rigor, sensibilidade estética e paixão pela criação de momentos verdadeiramente memoráveis.',
        'Com mais de 20 anos de experiência profissional nas áreas jurídica, administrativa e de gestão, Yasmini Daudo traz para o universo dos eventos uma abordagem diferenciadora, assente no método, na organização, na atenção ao detalhe e numa comunicação próxima com cada cliente. A sua formação especializada em Wedding Planning permite-lhe planear, coordenar e acompanhar casamentos, destination weddings e eventos privados com elegância, profissionalismo e elevado sentido de responsabilidade.',
        'A nossa missão é transformar cada celebração numa experiência única, personalizada e harmoniosa, respeitando a visão, a história e a essência de cada casal. Da escolha dos fornecedores à gestão do orçamento, da logística ao design do evento, cada detalhe é pensado com cuidado, equilíbrio e sofisticação.',
        'Na Maison Yasmini, acreditamos que um casamento deve ser mais do que um evento bonito: deve ser uma experiência emocional, fluida e inesquecível, onde os noivos possam viver cada momento com confiança, tranquilidade e alegria.',
      ],
    },
    servicesSection: {
      eyebrow: 'Serviços',
      title: 'Três formas de dar vida à vossa celebração.',
      description:
        'Do planeamento integral ao design personalizado, cada serviço é entregue com o mesmo cuidado e atenção.',
      discoverMore: 'DESCOBRIR MAIS',
    },
    venuesSection: {
      eyebrow: 'Espaços em Portugal',
      title: 'Descubram os nossos espaços de eleição',
      discoverMore: 'Descobrir Mais',
    },
    whySection: {
      eyebrow: 'A forma Maison Yasmini',
      title: 'Porque o vosso casamento merece mais do que planeamento.',
      description:
        'Um atelier boutique que aceita, intencionalmente, um número limitado de casais por ano, para que cada celebração receba a nossa total atenção.',
      bullets: [
        'Planeamento personalizado com dedicação completa.',
        'Casamentos intimistas exclusivos até 75 convidados.',
        'Design elegante e intemporal.',
        'Uma presença serena, discreta e altamente profissional.',
      ],
      cta: 'Descobrir a experiência Maison Yasmini',
    },
    pillarsSection: {
      title: 'OS NOSSOS VALORES',
    },
    testimonialsSection: {
      eyebrow: 'Testemunhos',
      title: 'O que os nossos casais dizem.',
    },
    finalCta: {
      eyebrow: 'COMECEM A VOSSA HISTÓRIA',
      title: 'Cada celebração merece ser única.',
      description:
        'Partilhem data, número de convidados e a visão que têm em mente. Voltamos com uma proposta clara, pensada para vocês.',
      ctaPrimary: 'Comecem a Vossa Jornada',
      ctaSecondary: 'Explorar espaços',
    },
  },

  about: {
    // PROVISÓRIO — aguarda copy dedicado da cliente. Base: bio da Home (parágrafos 2 e 3).
    isProvisional: true,
    eyebrow: 'SOBRE NÓS',
    title: 'Maison Yasmini',
    subtitle: 'Destination Weddings & Event Planning in Algarve',
    ctaBegin: 'Comecem a Vossa Jornada',
    portraitAlt: 'Yasmini Daudo, fundadora da Maison Yasmini',
    portraitEditorialAlt: 'Yasmini Daudo, fundadora da Maison Yasmini',
    paragraphs: [
      'Com mais de 20 anos de experiência profissional nas áreas jurídica, administrativa e de gestão, Yasmini Daudo traz para o universo dos eventos uma abordagem diferenciadora, assente no método, na organização, na atenção ao detalhe e numa comunicação próxima com cada cliente.',
      'A sua formação especializada em Wedding Planning permite-lhe planear, coordenar e acompanhar casamentos, destination weddings e eventos privados com elegância, profissionalismo e elevado sentido de responsabilidade.',
      'A nossa missão é transformar cada celebração numa experiência única, personalizada e harmoniosa, respeitando a visão, a história e a essência de cada casal. Da escolha dos fornecedores à gestão do orçamento, da logística ao design do evento, cada detalhe é pensado com cuidado, equilíbrio e sofisticação.',
      'Na Maison Yasmini, acreditamos que um casamento deve ser mais do que um evento bonito: deve ser uma experiência emocional, fluida e inesquecível, onde os noivos possam viver cada momento com confiança, tranquilidade e alegria.',
      'Dedicamos tempo a conhecer quem são, o que vos inspira e como desejam sentir-se no dia do casamento. Assim conseguimos criar celebrações que não são apenas visualmente elegantes, mas também profundamente significativas e genuinamente reflexo da vossa história.',
      'Com uma abordagem serena, discreta e altamente profissional, acompanhamos cada decisão e coordenamos cada detalhe com cuidado, para que possam desfrutar da jornada tanto quanto da celebração.',
    ],
    signature: 'Maison Yasmini — Destination Weddings com alma, requinte e atenção ao detalhe.',
    valuesEyebrow: 'OS NOSSOS VALORES',
    finalCtaTitle: 'Comecemos juntos a vossa história.',
    finalCtaDescription:
      'Partilhem a data, o número de convidados e o ambiente que têm em mente. Acompanhamos-vos da primeira conversa à última dança.',
    finalCtaButton: 'Comecem a Vossa Jornada',
  },

  services: {
    eyebrow: 'SERVIÇOS',
    title: 'Intimate Weddings in Algarve',
    subtitle: 'Intimate Weddings. Timeless Memories.',
    introParagraphs: [
      'Na Maison Yasmini, acreditamos que os momentos mais marcantes são aqueles vividos de forma autêntica, rodeados das pessoas que verdadeiramente fazem parte da nossa história. É por isso que nos dedicamos à organização de casamentos intimistas, onde cada detalhe é cuidadosamente pensado para refletir a essência de cada casal.',
      'Para nós, os casamentos mais inesquecíveis não são necessariamente os maiores, mas sim aqueles em que cada momento tem significado, cada escolha conta uma história e cada experiência é vivida de forma genuína. Acreditamos que o verdadeiro luxo reside na exclusividade, na atenção ao detalhe e na criação de memórias que perduram para toda a vida.',
      'Somos especializados na organização de casamentos intimistas e destination weddings, cuidadosamente planeados para um máximo de 75 convidados. Esta dimensão permite-nos oferecer uma experiência verdadeiramente exclusiva, onde cada decisão é personalizada e cada momento é vivido com autenticidade.',
      'Mais do que planear um casamento, dedicamo-nos a conhecer a vossa história, os vossos sonhos e a essência da vossa relação. Só assim conseguimos criar uma celebração que reflita quem realmente são, transformando o vosso casamento numa experiência única, elegante e profundamente memorável.',
      'Optamos por privilegiar a qualidade em detrimento da dimensão do evento, criando celebrações sofisticadas, acolhedoras e emocionalmente memoráveis. Cada casamento é pensado para proporcionar uma atmosfera exclusiva, onde os noivos e os seus convidados podem desfrutar de cada momento com tranquilidade, proximidade e verdadeira conexão.',
      'Seja numa falésia com vista para o oceano, numa villa privada, numa quinta de charme ou num hotel de luxo, desenvolvemos experiências únicas que refletem a personalidade de cada casal e transformam o seu casamento numa celebração elegante, intemporal e inesquecível.',
    ],
    philosophyLead: {
      prefix:
        'Porque acreditamos que o verdadeiro luxo reside na exclusividade, na atenção ao detalhe e na criação de momentos profundamente significativos.',
      italic: '',
    },
    philosophyParagraphs: [],
    tabsAriaLabel: 'Serviços nesta página',
    serviceLabel: (index: number) => `0${index + 1} · SERVIÇO`,
    verticals: [
      {
        slug: 'wedding-planning',
        title: 'Wedding and Events Planning',
        subtitle: 'In Algarve',
        intro: [
          { h2: 'Um acompanhamento personalizado do início ao fim' },
          'Organizar um casamento, sobretudo quando envolve convidados vindos do estrangeiro, exige tempo, conhecimento e uma coordenação rigorosa. A nossa missão é tornar todo este processo simples, tranquilo e absolutamente prazeroso.',
          'Desde o primeiro encontro até ao último momento do grande dia, estaremos ao vosso lado para assegurar que tudo decorre com perfeição, permitindo-vos viver esta etapa sem preocupações e desfrutar plenamente de cada instante.',
        ],
        listTitle: 'Os nossos serviços incluem',
        items: [
          'Planeamento integral do casamento',
          'Destination Weddings em Portugal',
          'Seleção do espaço ideal',
          'Desenvolvimento do conceito e identidade do evento',
          'Design, decoração e styling',
          'Gestão do orçamento',
          'Pesquisa, seleção e coordenação de fornecedores',
          'Negociação e acompanhamento contratual',
          'Planeamento da cerimónia',
          'Gestão do cronograma e da logística',
          'Coordenação completa no dia do casamento',
          'Acompanhamento permanente e comunicação ilimitada durante todo o processo',
        ],
        closing: [
          { h2: 'Porque o vosso único compromisso deverá ser celebrar.' },
          'Enquanto desfrutam da companhia da família e dos amigos, nós coordenamos cada detalhe nos bastidores com discrição, profissionalismo e dedicação.',
          'Na Maison Yasmini, acreditamos que o verdadeiro luxo reside na tranquilidade de saber que tudo foi cuidadosamente pensado e executado. O nosso compromisso é criar uma celebração elegante, intemporal e genuinamente vossa, para que possam viver o vosso casamento exatamente como sempre imaginaram: sem preocupações, com emoção e rodeados das pessoas que mais amam.',
        ],
        signature: 'Maison Yasmini — Luxury Intimate Weddings in Portugal.',
      },
      {
        slug: 'private-events',
        title: 'Private Events',
        subtitle: 'Every Milestone Deserves to Be Beautifully Celebrated',
        intro: [
          'Na Maison Yasmini, acreditamos que os momentos mais importantes da vida merecem ser celebrados com elegância, autenticidade e atenção aos mais pequenos detalhes.',
          'Mais do que organizar eventos, criamos experiências memoráveis que refletem a personalidade de cada anfitrião e proporcionam momentos inesquecíveis a todos os convidados. Cada celebração é única e merece um planeamento cuidadosamente pensado, para que possa desfrutar do momento sem preocupações.',
          'Quer esteja a celebrar um aniversário, um pedido de casamento, um aniversário de casamento, uma renovação de votos, um chá de bebé, um brunch privado, um jantar exclusivo, uma festa de inauguração de casa ou qualquer outra ocasião especial, a Maison Yasmini transforma a sua visão numa celebração sofisticada e personalizada.',
          { h2: 'Um serviço pensado ao detalhe' },
          'Acompanhamos todo o processo de organização, desde a primeira ideia até ao último convidado abandonar o evento, assegurando que cada elemento contribui para criar uma experiência harmoniosa e inesquecível.',
        ],
        listTitle: 'Os nossos serviços incluem',
        items: [
          'Conceção e planeamento integral do evento',
          'Seleção do espaço ideal ou organização na sua residência ou propriedade privada',
          'Desenvolvimento do conceito e identidade visual',
          'Decoração e styling personalizados',
          'Seleção e coordenação de fornecedores',
          'Catering e experiências gastronómicas',
          'Música, animação e entretenimento',
          'Fotografia e vídeo',
          'Gestão do orçamento',
          'Coordenação completa no dia do evento',
        ],
        closing: [
          { h2: 'O seu único compromisso será viver o momento.' },
          'Enquanto celebram ao lado da família e dos amigos, nós tratamos de toda a organização com profissionalismo, discrição e dedicação.',
          'Porque os melhores eventos não são apenas aqueles que impressionam pela sua beleza, mas aqueles que emocionam, aproximam pessoas e criam memórias que permanecem para sempre.',
        ],
        signature:
          'Maison Yasmini — Elegant Celebrations. Beautifully Planned. Unforgettable Experiences.',
      },
      {
        slug: 'design-styling',
        title: 'Styling & Design',
        subtitle: 'Every Detail Tells Your Story',
        intro: [
          'Um casamento memorável começa muito antes do grande dia. Começa com uma visão, uma emoção e um conjunto de pequenos detalhes que, cuidadosamente harmonizados, dão vida a uma celebração verdadeiramente única.',
          'Na Maison Yasmini, acreditamos que o design de um evento vai muito além da decoração. Trata-se de criar uma atmosfera que desperte emoções, envolva os convidados e conte a história de quem vocês são.',
          'Cada elemento é pensado com intenção — das flores às texturas, da iluminação à paleta de cores, da mesa aos pequenos apontamentos decorativos. Tudo é cuidadosamente selecionado para criar um ambiente elegante, intemporal e em perfeita sintonia com a identidade de cada casal.',
          { h2: 'Um conceito criado exclusivamente para si' },
          'Nenhum casamento deve parecer igual a outro.',
          'Por isso, dedicamos tempo a conhecer os nossos clientes, o seu estilo de vida, as suas inspirações e a forma como imaginam viver este dia tão especial. A partir dessa visão, desenvolvemos um conceito estético exclusivo, onde cada detalhe contribui para criar uma experiência harmoniosa e inesquecível.',
          'Quer já tenha uma ideia bem definida ou procure orientação criativa, estaremos ao seu lado para transformar inspirações em realidade, propondo soluções elegantes, personalizadas e cuidadosamente pensadas.',
        ],
        listTitle: 'O que desenvolvemos',
        items: [
          'Conceito criativo e identidade visual do evento',
          'Moodboards personalizados',
          'Paleta de cores e seleção de materiais',
          'Design floral',
          'Decoração da cerimónia e da receção',
          'Styling das mesas',
          'Iluminação ambiente',
          'Seleção de mobiliário e elementos decorativos',
          'Coordenação estética de todos os fornecedores',
        ],
        closing: [
          { h2: 'Porque a beleza está nos detalhes.' },
          'São os pequenos detalhes que transformam um espaço num cenário, uma celebração numa experiência e um casamento numa memória para toda a vida.',
          'Na Maison Yasmini, desenhamos eventos que refletem a essência de cada casal, criando ambientes sofisticados, acolhedores e intemporais, onde tudo faz sentido e cada elemento foi pensado para emocionar.',
          'Porque quando o design encontra a emoção, nasce um casamento verdadeiramente inesquecível.',
        ],
        signature: 'Maison Yasmini — Styling & Design.',
      },
    ],
    finalCtaTitle: 'Vamos criar algo verdadeiramente especial.',
    finalCtaDescription:
      'Partilhem a data, o número de convidados e o ambiente que têm em mente. Respondemos com clareza e os próximos passos.',
    finalCtaButton: 'Comecem a Vossa Jornada',
    heroImageAltSuffix: 'no Algarve',
  },

  venues: {
    eyebrow: 'ESPAÇOS',
    title: 'Venues Selection',
    intro: [
      'Discover the Perfect Setting for Your Story.',
      'O cenário certo transforma um casamento bonito numa experiência verdadeiramente inesquecível.',
      'Na Maison Yasmini, acreditamos que o espaço é muito mais do que um local para celebrar. É o palco onde serão vividos alguns dos momentos mais importantes da vossa vida e, por isso, merece ser escolhido com todo o cuidado.',
    ],
    intro2: [
      'Especializamo-nos em casamentos intimistas e destination weddings no Algarve, uma das regiões mais procuradas da Europa para celebrar o amor. Com paisagens deslumbrantes, um clima privilegiado durante grande parte do ano e uma hospitalidade reconhecida internacionalmente, o Algarve reúne todos os ingredientes para um casamento elegante e memorável.',
    ],
    algarveEyebrow: 'Espaços cuidadosamente selecionados',
    algarveTitle: 'Cada casal tem uma história única e cada casamento merece um ambiente que a represente.',
    algarveP1: [
      'Quer sonhem com uma cerimónia sobre as falésias com vista para o Atlântico, um jantar ao pôr do sol numa villa privada, um boutique hotel repleto de charme, uma quinta portuguesa rodeada pela natureza ou um resort de cinco estrelas com serviço de excelência, ajudamos a encontrar o espaço que melhor traduz a vossa visão.',
      'Graças ao nosso conhecimento do mercado e à nossa rede de parceiros, apresentamos apenas locais que combinam beleza, qualidade e uma experiência excecional para os noivos e convidados.',
    ],
    algarveP2: [
      'Muito mais do que encontrar um espaço.',
      'A escolha do local é apenas o início.',
    ],
    algarveTagline: 'Deixem-se inspirar pelo Algarve.',
    approachEyebrow: 'A nossa abordagem',
    approachTitle: 'Muito mais do que encontrar um espaço',
    approachIntro: [
      'Visitamos os espaços convosco, analisamos todos os detalhes logísticos, coordenamos reuniões com os responsáveis, avaliamos fornecedores e garantimos que cada decisão está alinhada com o conceito do casamento, o orçamento e a experiência que pretendem proporcionar.',
      'O nosso objetivo é que cada local escolhido não seja apenas bonito, mas o cenário perfeito para criar memórias que permanecerão para toda a vida.',
    ],
    approachListLead: 'Entre praias douradas, falésias impressionantes, jardins luxuriantes e:',
    approachList: [
      'vinhas e palácios históricos;',
      'quintas tradicionais e hotéis de luxo;',
      'villas privadas com vista sobre o Atlântico;',
      'restaurantes exclusivos em marinas ou junto ao mar;',
      'jardins murados e pátios recatados;',
      'ou cerimónias íntimas em falésias douradas,',
    ],
    approachClose:
      'ajudamos-vos a descobrir o espaço onde a vossa história fará verdadeiramente sentido.',
    signatureEyebrow: 'Espaços em Portugal',
    signatureTitle: 'Descubram os nossos espaços de eleição',
    cardHeroAltSuffix: 'no Algarve',
    // PROVISÓRIO — as secções "role/partners/beyond" não têm equivalente PT verbatim; tradução do EN
    roleEyebrow: 'O nosso papel',
    roleTitle: 'Muito mais do que apresentar espaços',
    roleParagraphs: [
      'Encontrar um espaço bonito é apenas o início. O nosso papel vai muito além de mostrar locais.',
      'Acompanhamos pessoalmente todo o processo de seleção, marcando visitas, coordenando reuniões com os responsáveis, revendo requisitos de fornecedores, avaliando detalhes logísticos e garantindo que cada decisão apoia a vossa visão.',
      'Avaliamos cuidadosamente acessibilidade, conforto dos convidados, alojamento, fluxo da cerimónia, oportunidades fotográficas, logística de entretenimento e inúmeros outros pormenores muitas vezes esquecidos.',
      'Cada recomendação é feita com um objetivo: garantir que o vosso casamento se sinta fluido do início ao fim.',
    ],
    partnersEyebrow: 'Parceiros',
    partnersTitle: 'Relações de confiança. Espaços excecionais.',
    partnersParagraphs: [
      'Ao longo do tempo, construímos relações valiosas com alguns dos espaços de casamento mais exclusivos de Portugal e parceiros de hospitalidade de referência.',
      'Isto permite-nos recomendar locais reconhecidos não só pela sua beleza, mas também pelo serviço notável, gastronomia excecional e compromisso com uma experiência inesquecível para os convidados.',
      'Cada espaço que recomendamos foi selecionado pela sua qualidade, elegância e capacidade de acolher celebrações extraordinárias.',
    ],
    beyondEyebrow: 'Para além do casamento',
    beyondTitle: 'Criamos experiências, não apenas casamentos',
    beyondParagraphs: [
      'O espaço certo transforma uma celebração numa experiência. Torna-se o lugar onde se partilham emoções, as famílias se reúnem, se celebram amizades e se criam memórias para gerações.',
      'Na Maison Yasmini, não vos ajudamos apenas a escolher um espaço. Ajudamos-vos a descobrir o lugar onde a vossa história de amor verdadeiramente pertence.',
    ],
    beyondSignature:
      'Maison Yasmini. Espaços extraordinários. Celebrações intemporais. Memórias marcantes.',
    finalCtaTitle: 'Prontos para descobrir o vosso espaço?',
    finalCtaDescription:
      'Partilhem data, número de convidados e o ambiente com que sonham. Guiamo-vos a partir daí.',
    finalCtaButton: 'Comecem a Vossa Jornada',
    categoryPage: {
      backToVenues: 'VOLTAR AOS ESPAÇOS',
      exploreOtherVenues: 'EXPLORAR OUTROS ESPAÇOS',
      finalCtaTitle: 'Comecemos a conversa',
      finalCtaDescription:
        'Partilhem data, número de convidados e a vossa visão. Ajudamos-vos a descobrir o espaço certo.',
      finalCtaButton: 'Comecem a Vossa Jornada',
      venueEyebrow: 'ESPAÇO',
      heroAltSuffix: 'espaço no Algarve',
      galleryAltSuffix: 'inspiração',
    },
    categories: {
      'luxury-resorts': {
        slug: 'luxury-resorts',
        title: 'Luxury Resorts',
        tagline: 'Where Luxury Meets the Ocean',
        cardBlurb: 'Hospitalidade de excelência com vistas costeiras deslumbrantes.',
        paragraphs: [
          'Imagine trocar votos com o oceano como cenário, brindar ao pôr do sol sobre falésias douradas e celebrar rodeado de elegância, conforto e um serviço de excelência.',
          'O Algarve alberga alguns dos resorts de luxo mais exclusivos da Europa, onde arquitetura sofisticada, jardins exuberantes, gastronomia de alta qualidade e vistas deslumbrantes se unem para criar o cenário perfeito para um casamento inesquecível.',
          'Na Maison Yasmini, selecionamos cuidadosamente resorts que oferecem muito mais do que beleza. Procuramos espaços que proporcionem uma experiência completa aos noivos e aos seus convidados, aliando privacidade, hospitalidade, conforto e um serviço irrepreensível.',
          'Quer imagine uma cerimónia junto ao mar, um cocktail ao pôr do sol ou um jantar elegante sob as estrelas, ajudamo-lo a encontrar o resort que melhor traduz a vossa personalidade e o estilo do vosso casamento.',
          'Com o nosso acompanhamento especializado, cada detalhe é cuidadosamente planeado para que possam viver este dia com total tranquilidade, sabendo que tudo foi pensado para superar as vossas expectativas.',
          'Porque um casamento de sonho merece um cenário verdadeiramente extraordinário.',
        ],
        seoTitle: 'Resorts de Luxo',
        seoDescription:
          'Where luxury meets the ocean: resorts de luxo no Algarve para celebrações inesquecíveis.',
      },
      'private-villas': {
        slug: 'private-villas',
        title: 'Private Villas',
        tagline: 'Exclusive Privacy. Timeless Elegance.',
        cardBlurb: 'Celebrações exclusivas em total privacidade.',
        paragraphs: [
          'Para os casais que procuram uma celebração verdadeiramente exclusiva, uma villa privada oferece muito mais do que um espaço: proporciona uma experiência íntima, sofisticada e inteiramente personalizada.',
          'Imagine celebrar o vosso casamento numa propriedade privada, rodeados apenas pelas pessoas mais importantes da vossa vida. Entre jardins mediterrânicos, piscinas infinitas, terraços com vista para o oceano e um ambiente de absoluta tranquilidade, cada momento torna-se ainda mais especial.',
          'Na Maison Yasmini, selecionamos cuidadosamente villas de charme que combinam privacidade, requinte e cenários deslumbrantes, criando o ambiente perfeito para casamentos intimistas até 75 convidados.',
          'Cada espaço é escolhido em função da vossa visão, do estilo da celebração e da experiência que pretendem proporcionar aos vossos convidados. Desde uma cerimónia ao pôr do sol até um jantar elegante sob as estrelas, desenhamos cada detalhe para que o ambiente reflita a vossa história e personalidade.',
          'Uma villa privada permite uma liberdade criativa incomparável, oferecendo a possibilidade de criar um casamento totalmente exclusivo, sem limitações, onde cada elemento é pensado à medida dos noivos.',
          'Na Maison Yasmini, tratamos de toda a organização e coordenação, para que possam simplesmente desfrutar de um dia repleto de emoção, serenidade e momentos inesquecíveis.',
          'Porque o verdadeiro luxo é celebrar num lugar onde tudo foi pensado exclusivamente para vocês.',
        ],
        seoTitle: 'Villas Privadas',
        seoDescription:
          'Privacidade exclusiva e elegância intemporal para casamentos personalizados no Algarve.',
      },
      'exclusive-restaurants': {
        slug: 'exclusive-restaurants',
        title: 'Exclusive Restaurants',
        tagline: 'Fine Dining. Exceptional Celebrations.',
        cardBlurb: 'Gastronomia excecional em cenários inesquecíveis.',
        paragraphs: [
          'Para os casais que sonham com uma celebração elegante e intimista, os restaurantes exclusivos oferecem o equilíbrio perfeito entre gastronomia de excelência, ambientes sofisticados e um serviço irrepreensível.',
          'Na Maison Yasmini, selecionamos cuidadosamente restaurantes que se distinguem pela sua localização privilegiada, design requintado e experiências gastronómicas memoráveis. Seja junto ao mar, numa falésia com vistas deslumbrantes, numa marina elegante ou num espaço contemporâneo de charme, cada local proporciona um ambiente único para celebrar o amor.',
          'Um casamento num restaurante exclusivo permite criar uma experiência intimista e envolvente, onde cada convidado desfruta de uma atmosfera acolhedora, de um serviço personalizado e de uma cozinha de elevado nível, cuidadosamente preparada para tornar o vosso dia ainda mais especial.',
          'Acompanhamos todo o processo de seleção e coordenação do espaço, garantindo que cada detalhe — desde a disposição das mesas à decoração, passando pelo menu e pela experiência dos convidados — está perfeitamente alinhado com a vossa visão.',
          'Porque um casamento inesquecível também se vive à mesa, através de sabores excecionais, ambientes sofisticados e momentos partilhados com quem mais importa.',
        ],
        seoTitle: 'Restaurantes Exclusivos',
        seoDescription:
          'Fine dining e celebrações excecionais nos cenários mais notáveis do Algarve.',
      },
      'country-estates': {
        slug: 'country-estates',
        title: 'Quintas de Charme (Country Estates)',
        tagline: 'Authentic Elegance. Timeless Romance.',
        cardBlurb: 'Elegância portuguesa autêntica em plena natureza.',
        paragraphs: [
          'As quintas de charme são o cenário perfeito para casamentos que combinam sofisticação, autenticidade e a beleza intemporal da paisagem portuguesa.',
          'Na Maison Yasmini, selecionamos cuidadosamente propriedades exclusivas rodeadas por jardins exuberantes, olivais centenários e deslumbrantes vinhas, onde a tranquilidade do campo se alia a um ambiente de requinte e elegância. Estes espaços oferecem o cenário ideal para celebrar o amor num ambiente intimista, romântico e verdadeiramente inesquecível.',
          'Imagine uma cerimónia ao ar livre com vista sobre extensas vinhas, um cocktail ao pôr do sol entre jardins cuidadosamente cuidados e um jantar elegante sob um céu estrelado. Cada momento é pensado para criar uma experiência única, onde a natureza e a sofisticação convivem em perfeita harmonia.',
          'Cada quinta possui uma identidade própria, desde propriedades históricas repletas de carácter até herdades contemporâneas rodeadas por paisagens naturais de rara beleza. Ajudamo-vos a encontrar o espaço que melhor representa a vossa história e o ambiente que desejam proporcionar aos vossos convidados.',
          'Desde a seleção da propriedade até à coordenação integral do casamento, acompanhamos cada detalhe com dedicação, garantindo uma celebração elegante, personalizada e absolutamente memorável.',
          'Porque algumas histórias de amor merecem começar entre vinhas, jardins e paisagens que permanecem para sempre na memória.',
        ],
        seoTitle: 'Quintas de Charme',
        seoDescription:
          'Elegância portuguesa autêntica entre vinhas, olivais e jardins.',
      },
    },
  },

  portfolio: {
    // PROVISÓRIO — aguarda copy dedicado da cliente; conteúdo é essencialmente visual
    isProvisional: true,
    eyebrow: 'PORTEFÓLIO',
    title: 'Momentos que tivemos a honra de criar',
    description:
      'Uma seleção de casamentos intimistas e eventos privados, com contenção, luz natural e atenção ao que verdadeiramente importa.',
    filterAllLabel: 'Todos',
    filterAriaLabel: 'Filtrar portefólio por categoria',
    categoryLabels: {
      Ceremony: 'Cerimónia',
      Reception: 'Receção',
      Details: 'Detalhes',
      Destination: 'Destino',
    },
    imageAlts: [
      'Cerimónia num jardim entre pinheiros com o Atlântico ao fundo do corredor de pétalas brancas',
      'Noivos a trocar votos sob uma chuppah floral branca acima do mar',
      'Cerimónia na praia sob um dossel de madeira decorado com linho e eucalipto',
      'Corredor ladeado por pedestais de hortênsias que conduz a um altar sobre a falésia',
      'Cerimónia numa falésia com vista para uma enseada turquesa ao meio-dia',
      'Chuppah iluminada pelo sol vestida de rosas brancas e vegetação num relvado sobre o mar',
      'Troca de votos na praia ao pôr do sol com o casal iluminado pela luz costeira',
      'Longa mesa rústica de jantar sob cortinas de luzes contra uma fachada caiada de branco',
      'Receção numa vinha com uma mesa longa sob um dossel de luzes ao entardecer',
      'Convidados reunidos num jantar ao ar livre à luz de velas sob um céu suspenso de luzes',
      'Mesa de salão em receção com cadeiras douradas, velas altas e arranjos de rosas brancas',
      'Mesa de jantar em terraço com cadeiras de vime sob cortinas de luzes quentes',
      'Grande salão com cadeiras douradas, lustres e imponentes centros brancos',
      'Receção junto à piscina à hora azul iluminada por candelabros prateados e dezenas de velas',
      'Fita pêssego, suite de convite selada a cera e cravos secos sobre linho',
      'Bouquet de noiva em cascata de orquídeas phalaenopsis brancas nas mãos da noiva',
      'Alianças de casamento em seda marfim junto a gypsophila seca',
      'Casal a beijar-se entre vinhas com um pôr do sol algarvio rosa ao fundo',
      'Altar para elopement sob arcos naturais de arenito numa praia do Algarve',
      'Receção sob tenda ao ar livre com vista para o oceano e lua nascente',
      'Vista aérea de uma longa mesa de jantar iluminada por lâmpadas suspensas entre ciprestes',
      'Arco de cerimónia junto à praia ao anoitecer sob uma fila de lâmpadas Edison e uma palmeira',
      'Casal abraçado numa falésia rochosa do Algarve com o último sol do dia a encontrar o mar',
      'Noivos frente a frente na areia à hora dourada com as ondas ao fundo',
      'Corredor de cerimónia coberto de pétalas de rosa a conduzir ao mar entre pinheiros',
      'Vista distante de um casal abraçado num plateau rochoso esculpido sobre o Atlântico',
    ],
    finalCtaTitle: 'Prontos para escrever a vossa história?',
    finalCtaButton: 'Comecem a Vossa Jornada',
  },

  kindWords: {
    // PROVISÓRIO — secção desativada até chegarem testemunhos reais
    isProvisional: true,
    eyebrow: 'TESTEMUNHOS',
    title: 'Testemunhos dos nossos casais',
    comingSoonEyebrow: 'Em breve',
    comingSoonTitle: 'Os testemunhos dos nossos casais estão a caminho.',
    comingSoonBody:
      'As histórias dos nossos casais estão a ser reunidas com o mesmo cuidado que dedicamos às suas celebrações. Entretanto, adoraríamos começar a vossa.',
    comingSoonCta: 'Comecem a Vossa Jornada',
  },

  whyMaisonYasmini: {
    // PROVISÓRIO — aguarda copy da cliente; tradução do EN aprovado
    isProvisional: true,
    eyebrow: 'PORQUÊ MAISON YASMINI',
    title: 'Porque o vosso casamento merece mais do que planeamento',
    intro: [
      'O vosso casamento não é apenas mais um evento. É um dos capítulos mais significativos da vossa vida. O lugar onde duas famílias se tornam uma. O dia em que os vossos amigos mais próximos viajam de todo o mundo para celebrar o vosso amor. O início de memórias que vos acompanharão para sempre.',
      'É por isso que escolher o wedding planner certo é uma das decisões mais importantes que farão.',
      'Na Maison Yasmini, não organizamos apenas casamentos. Criamos experiências que se sentem fluidas, profundamente pessoais e maravilhosamente inesquecíveis.',
    ],
    sections: [
      {
        title: 'Uma experiência boutique de wedding planning',
        paragraphs: [
          'Ao contrário de empresas que gerem dezenas de casamentos por época, aceitamos intencionalmente um número limitado de celebrações por ano. Isto permite-nos dedicar total atenção, criatividade e experiência a cada casal com que trabalhamos.',
          'Acreditamos que o verdadeiro luxo nunca é apressado. É pensado. Pessoal. Intencional.',
          'Cada casamento que criamos recebe o cuidado, a dedicação e a atenção que verdadeiramente merece.',
        ],
      },
      {
        title: 'Especialistas em destination weddings intimistas',
        paragraphs: [
          'A nossa filosofia é simples. Especializamo-nos exclusivamente em casamentos intimistas e celebrações de luxo até 75 convidados.',
          'Não é uma limitação. É a nossa maior força.',
          'Casamentos mais pequenos geram emoções mais profundas. Conversas mais significativas. Mais tempo com as pessoas que amam. Maior atenção a cada convidado. E uma atmosfera que simplesmente não se consegue recriar em celebrações de grande escala.',
          'Acreditamos que os casamentos mais inesquecíveis não se medem pelo número de convidados. Medem-se pelas emoções que criam e pelas memórias que deixam.',
        ],
      },
      {
        title: 'Cada casamento começa com a vossa história',
        paragraphs: [
          'Não há dois casais iguais. Também os seus casamentos não devem ser.',
          'Antes de falarmos de flores, cores ou espaços, dedicamos tempo a conhecer-vos. As vossas personalidades. A vossa jornada em comum. Os vossos sonhos. As vossas tradições. As vossas famílias. A atmosfera que querem que os convidados vivam.',
          'Só então começamos a desenhar uma celebração que reflita verdadeiramente a vossa história. Porque o vosso casamento nunca deve parecer o de outra pessoa. Deve ser inequivocamente vosso.',
        ],
      },
      {
        title: 'Planeamento meticuloso. Execução impecável.',
        paragraphs: [
          'Por trás de cada casamento elegante existe uma organização excecional. Cada cronograma. Cada fornecedor. Cada contrato. Cada detalhe logístico. Cada plano de contingência. Cada experiência de convidado. Nada é deixado ao acaso.',
          'A nossa formação em direito, administração e gestão de projetos garante um nível único de organização, estrutura e rigor, assegurando que cada aspeto da vossa celebração é cuidadosamente coordenado com profissionalismo e discrição.',
          'Enquanto vivem cada momento, geramos silenciosamente tudo nos bastidores.',
        ],
      },
      {
        title: 'Espaços cuidadosamente selecionados e parceiros de confiança',
        paragraphs: [
          'Luxo não é apenas beleza dos locais. É trabalhar com pessoas excecionais.',
          'Ao longo dos anos, construímos relações de confiança com espaços cuidadosamente escolhidos e fornecedores notáveis em todo o Portugal. De resorts de luxo e villas privadas a chefs consagrados, floristas talentosos, fotógrafos e músicos, cada recomendação é escolhida pela sua qualidade, profissionalismo e compromisso com a excelência.',
          'Porque cada fornecedor passa a ser parte da vossa história.',
        ],
      },
      {
        title: 'Uma presença serena ao longo da vossa jornada',
        paragraphs: [
          'Planear um destination wedding nunca deve ser esmagador. O nosso papel é simplificar cada decisão, responder a cada pergunta e guiar-vos com confiança da primeira consulta até à última dança.',
          'Saberão sempre o que se segue. Sentir-se-ão sempre apoiados. Terão sempre alguém a cuidar de cada detalhe.',
          'Essa tranquilidade é um dos maiores luxos que podemos oferecer.',
        ],
      },
      {
        title: 'Mais do que casamentos bonitos',
        paragraphs: [
          'Qualquer pessoa pode organizar um casamento. O nosso propósito é diferente.',
          'Criamos experiências que se sentem fluidas. Celebrações onde os convidados se sentem genuinamente acolhidos. Momentos cheios de emoção, elegância e autenticidade.',
          'Casamentos que ficam na memória não apenas por terem sido bonitos, mas por terem parecido extraordinários.',
        ],
      },
    ],
    promiseEyebrow: 'A nossa promessa',
    promiseTitle: 'O que cada casal recebe de nós.',
    promise: [
      'Planeamento personalizado com dedicação completa.',
      'Casamentos intimistas exclusivos até 75 convidados.',
      'Design elegante e intemporal.',
      'Organização meticulosa e coordenação impecável.',
      'Espaços de confiança e fornecedores excecionais.',
      'Comunicação honesta e total transparência.',
      'Uma presença serena, discreta e altamente profissional.',
      'Uma celebração que reflete a vossa história, e de mais ninguém.',
    ],
    finalSectionTitle: 'Porque luxo não é ter mais.',
    finalSectionParagraphs: [
      'É sentir mais. Mais ligação. Mais presença. Mais serenidade. Mais emoção. Mais memórias.',
      'Essa é a experiência Maison Yasmini.',
    ],
    finalSectionSignature:
      'Maison Yasmini. Destination Weddings intimistas de luxo em Portugal, cuidadosamente pensados em torno da vossa história.',
    finalCtaTitle: 'A experiência Maison Yasmini começa aqui.',
    finalCtaButton: 'Comecem a Vossa Jornada',
  },

  experience: {
    // PROVISÓRIO — aguarda copy da cliente; tradução do EN aprovado
    isProvisional: true,
    title: 'Como trabalhamos.',
    description:
      'Um processo em cinco etapas assente em checkpoints claros, ritmo pensado e presença constante desde a primeira conversa até ao dia do casamento.',
    ctaBegin: 'Comecem a Vossa Jornada',
    stepLabel: 'ETAPA',
    steps: [
      {
        number: '01',
        title: 'Conversa',
        description:
          'Percebemos data, número de convidados, prioridades e a atmosfera que querem criar no Algarve.',
      },
      {
        number: '02',
        title: 'Direção',
        description:
          'Definimos o conceito, uma shortlist de espaços e uma direção de planeamento adequada à dimensão da celebração.',
      },
      {
        number: '03',
        title: 'Planeamento',
        description:
          'Fornecedores, logística, cronograma e decisões são organizados com clareza para que o processo pareça sereno.',
      },
      {
        number: '04',
        title: 'Coordenação',
        description:
          'Gerimos confirmações, tempos e todo o fluxo do evento para que cada parte do dia decorra com confiança.',
      },
      {
        number: '05',
        title: 'Celebração',
        description:
          'Desfrutam do dia com os convidados enquanto tratamos de tudo o que se passa nos bastidores.',
      },
    ],
    stepAddendum:
      'Mantemos a comunicação clara e próxima, nunca corporativa nem comercial. Cada detalhe é tratado com cuidado para que possam estar totalmente presentes no dia.',
    nextEyebrow: 'Próximo passo',
    nextTitle: 'Contem-nos a vossa data e o que imaginam.',
    nextDescription:
      'Voltamos com disponibilidade, orientação honesta e uma noção clara de se somos a escolha certa.',
    nextCta: 'Contacte-nos',
  },

  faq: {
    // PROVISÓRIO — aguarda copy da cliente; tradução do EN aprovado; regra: uma linha de preço apenas
    isProvisional: true,
    eyebrow: 'FAQ',
    title: 'Respostas claras, decisões serenas.',
    description:
      'Se não encontrarem a vossa pergunta aqui, escrevam-nos e respondemos com clareza.',
    items: [
      {
        question: 'Que tipo de casamentos organizam?',
        answer:
          'A Maison Yasmini é especialista em casamentos intimistas de luxo e destination weddings em Portugal para até 75 convidados. A nossa abordagem adapta-se a cada casal, ao número de convidados e à atmosfera que pretendem criar.',
      },
      {
        question: 'Quais são os vossos valores de partida?',
        answer:
          'Os honorários de planeamento começam em 3.000€ e ajustam-se ao número de convidados, ao estilo do casamento e à complexidade logística. Cada proposta é preparada pessoalmente após a primeira conversa.',
      },
      {
        question: 'E se tivermos mais do que 75 convidados?',
        answer:
          'O nosso foco são celebrações intimistas até 75 convidados, e aceitamos intencionalmente um número limitado de casamentos por ano. Celebrações maiores são analisadas caso a caso e exigem uma proposta à medida.',
      },
      {
        question: 'Podem ajudar com os requisitos legais em Portugal?',
        answer:
          'Sim. A Yasmini tem formação jurídica e pode acompanhar-vos no processo com clareza, ligando-vos ao apoio local certo sempre que necessário.',
      },
      {
        question: 'Com que antecedência devemos começar?',
        answer:
          'Para destination weddings, começar entre 9 a 15 meses antes é o ideal. Celebrações mais pequenas podem, por vezes, ser planeadas em prazos mais curtos consoante a data e a disponibilidade dos espaços.',
      },
      {
        question: 'Porquê escolher o Algarve para um destination wedding?',
        answer:
          'O Algarve oferece uma costa impressionante, quintas elegantes, luz quente e uma atmosfera descontraída. É um cenário perfeito para casais que procuram natureza, intimidade e a facilidade de um destino bem ligado.',
      },
    ],
  },

  journal: {
    // Journal PT: hub traduzido, posts permanecem em EN (v3.1)
    eyebrow: 'Journal',
    title: 'Guias para casais internacionais a planear um casamento no Algarve.',
    description:
      'Leituras práticas sobre orçamentos, espaços, prazos e o que saber antes de planear um casamento em Portugal.',
    readCta: 'LER',
    provisionalNote:
      'Os artigos do journal estão disponíveis em inglês nesta versão. Uma tradução completa para português chega na próxima atualização.',
    notFoundTitle: 'Artigo não encontrado',
    notFoundBody: 'Regressem ao Journal.',
    postCtaBegin: 'Comecem a Vossa Jornada',
    posts: [
      // PROVISÓRIO: posts permanecem em EN na v3; tradução planeada para v3.1
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
    eyebrow: 'Contacte-nos',
    title: 'Comecem a Vossa Jornada',
    description:
      'Partilhem a data, o número de convidados e o ambiente que têm em mente. Respondemos pessoalmente a partir do Algarve, com clareza e os próximos passos.',
    whatsapp: {
      invitation:
        'A forma mais simples de começar é uma mensagem no WhatsApp. Contem-nos um pouco sobre a vossa celebração e seguimos a partir daí.',
      buttonLabel: 'Falar connosco no WhatsApp',
      responseTime: 'Respondemos habitualmente em dois dias úteis.',
    },
  },

  privacy: {
    // PROVISÓRIO — validar juridicamente com a cliente
    isProvisional: true,
    eyebrow: 'Legal',
    title: 'Política de Privacidade',
    lastReviewedPrefix: 'Última revisão em ',
    lastReviewedSuffix:
      '. Esta política explica como a Maison Yasmini trata os dados pessoais submetidos através deste site.',
    dateLocale: 'pt-PT',
    sections: [
      {
        title: 'Quem somos',
        paragraphs: [
          'A Maison Yasmini é um atelier boutique de wedding planning sediado no Algarve, Portugal. Podem contactar-nos por email em __EMAIL__.',
        ],
      },
      {
        title: 'O que recolhemos',
        paragraphs: [
          'Quando nos enviam um pedido através do formulário de contacto, podem partilhar os vossos nomes, endereço de email, país, data do casamento, número de convidados, serviço de interesse, estado da escolha do espaço, um link de inspiração e qualquer mensagem que decidam escrever. Só recolhemos o que inserirem.',
          'Não utilizamos cookies analíticos nem rastreamento de terceiros neste site.',
        ],
      },
      {
        title: 'Porque recolhemos',
        paragraphs: [
          'Usamos esta informação apenas para responder ao vosso pedido e, se decidirem trabalhar connosco, para planear e coordenar o vosso casamento. A base legal ao abrigo do RGPD é a execução de um contrato a vosso pedido ou o nosso interesse legítimo em responder a pedidos sobre os nossos serviços.',
        ],
      },
      {
        title: 'Quem trata os dados',
        paragraphs: [
          'O formulário de contacto é fornecido por um fornecedor externo de formulários. O vosso envio viaja pelos servidores desse fornecedor antes de chegar à nossa caixa de correio. Trabalhamos com fornecedores que asseguram acordos de tratamento em conformidade com o RGPD. Fora isto, não partilhamos os vossos dados com terceiros salvo se nos pedirem que vos apresentemos a um fornecedor específico.',
        ],
      },
      {
        title: 'Quanto tempo guardamos',
        paragraphs: [
          'Pedidos que não deem origem a um projeto ativo são eliminados no prazo de doze meses. Os dados relativos a casamentos que planeamos são mantidos durante a duração do projeto e, depois, pelo período exigido pela legislação portuguesa de contabilidade e fiscal.',
        ],
      },
      {
        title: 'Os vossos direitos',
        paragraphs: [
          'Ao abrigo do RGPD, podem pedir a qualquer momento para aceder, retificar ou eliminar os vossos dados pessoais, ou para restringir ou opor-se ao respetivo tratamento. Escrevam para __EMAIL__ e responderemos no prazo de trinta dias. Se sentirem que não tratámos bem um pedido, podem apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD).',
        ],
      },
      {
        title: 'Alterações a esta política',
        paragraphs: [
          'Poderemos atualizar esta política de tempos a tempos. A data no topo reflete a revisão mais recente.',
        ],
      },
    ],
  },

  notFound: {
    // PROVISÓRIO — aguarda revisão da cliente
    isProvisional: true,
    title: 'Página não encontrada',
    description:
      'A página que procuram não existe. Regressem à página inicial ou explorem as secções principais.',
    ctaBack: 'Voltar ao Início',
  },
}
