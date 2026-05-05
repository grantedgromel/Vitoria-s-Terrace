// Vitoria's Terrace — content & translations
// Globally exposes: VT_DATA, VT_I18N

const VT_DATA = {
  apartments: [
    {
      id: "penthouse",
      number: "01",
      sleeps: 4, beds: 2, baths: 2, sqm: 70,
      price: 220, // TODO confirm price — real site doesn't publish the Penthouse rate
      images: ["assets/master-bed.jpg", "assets/window-view.jpg", "assets/bath-tiles.jpg", "assets/armchairs.jpg"],
      i18n: {
        EN: {
          name: "Penthouse River View",
          tagline: "Top floor, river-facing terrace",
          description: "The top-floor penthouse, with a private terrace facing the Douro and the terracotta rooftops of Ribeira beyond. Two bedrooms, two bathrooms, an open sitting room and kitchen. The largest and quietest of the four — for guests seeking space, privacy, and a truly distinctive stay.",
          features: ["River view", "Private terrace", "King + queen", "2 bathrooms"]
        },
        PT: {
          name: "Penthouse · Vista de Rio",
          tagline: "Último piso, terraço sobre o rio",
          description: "O penthouse do último andar, com um terraço privado virado para o Douro e os telhados de Ribeira. Dois quartos, duas casas de banho, sala e cozinha em conjunto. O maior e mais reservado dos quatro — para quem procura espaço, privacidade e uma estadia distinta.",
          features: ["Vista de rio", "Terraço privado", "King + queen", "2 casas de banho"]
        },
        ES: {
          name: "Ático · Vistas al Río",
          tagline: "Última planta, terraza al río",
          description: "El ático, con terraza privada hacia el Duero y los tejados de Ribera. Dos dormitorios, dos baños, salón y cocina abiertos. El más amplio y discreto de los cuatro — para quien busca espacio, privacidad y una estancia singular.",
          features: ["Vistas al río", "Terraza privada", "King + queen", "2 baños"]
        },
        FR: {
          name: "Penthouse · Vue Fleuve",
          tagline: "Dernier étage, terrasse sur le Douro",
          description: "Le penthouse au dernier étage, avec une terrasse privée donnant sur le Douro et les toits de la Ribeira. Deux chambres, deux salles de bains, salon et cuisine ouverts. Le plus grand et le plus paisible des quatre — pour ceux qui recherchent espace, intimité et un séjour singulier.",
          features: ["Vue fleuve", "Terrasse privée", "King + queen", "2 salles de bains"]
        },
        KR: {
          name: "펜트하우스 · 강 전망",
          tagline: "최상층, 강을 마주한 테라스",
          description: "최상층 펜트하우스. 도루 강과 히베이라의 붉은 지붕이 바라다보이는 전용 테라스가 있습니다. 침실 두 개, 욕실 두 개, 거실과 주방이 트인 구조. 네 객실 중 가장 넓고 가장 조용한 곳 — 공간과 사생활, 그리고 특별한 머묾을 원하는 분께.",
          features: ["강 전망", "전용 테라스", "킹 + 퀸 침대", "욕실 2개"]
        }
      }
    },
    {
      id: "delux",
      number: "02",
      sleeps: 3, beds: 1, baths: 1, sqm: 50,
      price: 100,
      images: ["assets/living-slats.jpg", "assets/bed-slats.jpg", "assets/kitchen-light.jpg", "assets/bath-detail.jpg"],
      i18n: {
        EN: {
          name: "Delux Apartment · River View",
          tagline: "One-bedroom with the river through the window",
          description: "A full one-bedroom apartment with a generous sitting room, kitchenette, and a slatted pine partition that nods to the building's original interior carpentry. The window frames the Douro at the end of the street. Sleeps three with the convertible sofa.",
          features: ["River view", "Queen + sofa bed", "Full kitchenette", "Sitting room"]
        },
        PT: {
          name: "Apartamento Delux · Vista de Rio",
          tagline: "Um quarto, o rio à janela",
          description: "Apartamento de um quarto, com sala generosa, kitchenette, e uma divisória de pinho ripado em homenagem à carpintaria original do edifício. A janela enquadra o Douro ao fundo da rua. Acomoda três pessoas com o sofá-cama.",
          features: ["Vista de rio", "Queen + sofá-cama", "Kitchenette completa", "Sala de estar"]
        },
        ES: {
          name: "Apartamento Delux · Vistas al Río",
          tagline: "Un dormitorio, el río en la ventana",
          description: "Apartamento de un dormitorio con sala amplia, kitchenette y un panel de pino listonado en guiño a la carpintería original. La ventana enmarca el Duero al final de la calle. Hasta tres personas con el sofá-cama.",
          features: ["Vistas al río", "Queen + sofá-cama", "Kitchenette completa", "Salón"]
        },
        FR: {
          name: "Appartement Delux · Vue Fleuve",
          tagline: "Une chambre, le fleuve en perspective",
          description: "Appartement d'une chambre avec un grand séjour, une kitchenette et une cloison en pin à claire-voie, écho à la menuiserie d'origine du bâtiment. La fenêtre encadre le Douro au bout de la rue. Jusqu'à trois personnes avec le canapé-lit.",
          features: ["Vue fleuve", "Queen + canapé-lit", "Kitchenette complète", "Séjour"]
        },
        KR: {
          name: "디럭스 아파트 · 강 전망",
          tagline: "창 너머로 도루 강이 보이는 1베드룸",
          description: "넓은 거실, 간이 주방, 그리고 건물의 원래 목공을 떠올리게 하는 소나무 살창 파티션이 있는 1베드룸 아파트. 창은 길 끝에 흐르는 도루 강을 액자처럼 담아냅니다. 소파베드 포함 3인 가능.",
          features: ["강 전망", "퀸 + 소파베드", "주방 완비", "거실"]
        }
      }
    },
    {
      id: "studio",
      number: "03",
      sleeps: 2, beds: 1, baths: 1, sqm: 35,
      price: 90, // TODO confirm price — real site doesn't publish the Studio rate
      images: ["assets/kitchen-tiles.jpg", "assets/sofa-detail.jpg", "assets/bath-tiles.jpg", "assets/living-window.jpg"],
      i18n: {
        EN: {
          name: "Studio Apartment · City View",
          tagline: "Studio with the green tile kitchen",
          description: "A compact studio with a hand-laid green and grey cement-tile kitchen floor — a direct echo of the yellow azulejos at the building's entrance. Tall French windows over the old town and a reading nook in the embrasure.",
          features: ["City view", "Queen bed", "Tile kitchen", "Reading nook"]
        },
        PT: {
          name: "Estúdio · Vista de Cidade",
          tagline: "Estúdio com a cozinha de mosaico verde",
          description: "Estúdio compacto com pavimento de cimento verde e cinza na cozinha — um eco direto dos azulejos amarelos da entrada. Janelões altos sobre a cidade velha e um cantinho de leitura junto à janela.",
          features: ["Vista de cidade", "Cama queen", "Cozinha em mosaico", "Cantinho de leitura"]
        },
        ES: {
          name: "Estudio · Vistas a la Ciudad",
          tagline: "Estudio con la cocina de baldosa verde",
          description: "Estudio compacto con suelo de cemento verde y gris en la cocina — un eco directo de los azulejos amarillos del portal. Ventanales altos sobre el casco antiguo y un rincón de lectura en el alféizar.",
          features: ["Vistas a la ciudad", "Cama queen", "Cocina con baldosa", "Rincón de lectura"]
        },
        FR: {
          name: "Studio · Vue Ville",
          tagline: "Studio à la cuisine en carreaux verts",
          description: "Studio compact avec un sol de carreaux ciment vert et gris dans la cuisine — un écho direct aux azulejos jaunes de l'entrée. Hautes fenêtres à la française sur la vieille ville et un coin lecture dans l'embrasure.",
          features: ["Vue ville", "Lit queen", "Cuisine carrelée", "Coin lecture"]
        },
        KR: {
          name: "스튜디오 · 도시 전망",
          tagline: "초록 타일 주방의 스튜디오",
          description: "초록과 회색 시멘트 타일이 깔린 주방 바닥이 인상적인 컴팩트 스튜디오 — 입구의 노란 아줄레주와 호응하는 디테일입니다. 구시가지를 향한 높은 프렌치 창과 창가의 독서 자리.",
          features: ["도시 전망", "퀸 베드", "타일 주방", "독서 자리"]
        }
      }
    },
    {
      id: "loft",
      number: "04",
      sleeps: 2, beds: 1, baths: 1, sqm: 42,
      price: 95,
      images: ["assets/living-window.jpg", "assets/master-bed.jpg", "assets/kitchen-dining.jpg", "assets/sofa-detail.jpg"],
      i18n: {
        EN: {
          name: "Loft · Street View",
          tagline: "Loft over Rua de São Miguel",
          description: "A loft on the upper floor with twin windows facing the granite street below. Open kitchen, dining, and sitting area; the bedroom set apart by an original interior arch. Quiet, self-contained, and a short walk from the river.",
          features: ["Street view", "Queen bed", "Open kitchen", "Original arch"]
        },
        PT: {
          name: "Loft · Vista de Rua",
          tagline: "Loft sobre a Rua de São Miguel",
          description: "Loft no piso superior com duas janelas para a rua de granito. Cozinha, sala e zona de refeições em open space; o quarto separado por um arco interior original. Tranquilo, independente, e a poucos minutos do rio.",
          features: ["Vista de rua", "Cama queen", "Cozinha aberta", "Arco original"]
        },
        ES: {
          name: "Loft · Vistas a la Calle",
          tagline: "Loft sobre la Rua de São Miguel",
          description: "Loft en planta alta con dos ventanas a la calle de granito. Cocina, comedor y salón abiertos; el dormitorio separado por un arco interior original. Tranquilo, autónomo y a pocos minutos del río.",
          features: ["Vistas a la calle", "Cama queen", "Cocina abierta", "Arco original"]
        },
        FR: {
          name: "Loft · Vue Rue",
          tagline: "Loft au-dessus de la Rua de São Miguel",
          description: "Loft à l'étage supérieur avec deux fenêtres sur la rue de granit. Cuisine, salle à manger et salon ouverts ; la chambre séparée par une arche intérieure d'origine. Calme, autonome, et à quelques minutes du fleuve.",
          features: ["Vue rue", "Lit queen", "Cuisine ouverte", "Arche d'origine"]
        },
        KR: {
          name: "로프트 · 거리 전망",
          tagline: "상 미겔 거리 위의 로프트",
          description: "위층의 로프트. 화강암 거리를 향한 두 개의 창이 있고, 주방·식사·거실이 하나의 공간으로 이어지며, 침실은 원래의 실내 아치로 구분됩니다. 조용하고 독립적이며, 강까지 도보로 몇 분.",
          features: ["거리 전망", "퀸 베드", "오픈 주방", "원형 아치"]
        }
      }
    }
  ],

// Aggregate scores per platform — researched from live listings, May 2026.
  // TODO owner: confirm Hotels.com / Expedia standalone counts (currently shared Expedia Group feed).
  reviewScores: [
    { platform: "Booking.com",  score: "9.8", outOf: "10", count: 842, badge: "Guests' Choice", subtitle: "#1 of 3,270 vacation rentals in Porto", url: "https://www.booking.com/hotel/pt/vitorias-terrace.html" },
    { platform: "Tripadvisor",  score: "5.0", outOf: "5",  count: 14,  badge: "Travellers' Choice", subtitle: "Top 10% of properties worldwide", url: "https://www.tripadvisor.com/Hotel_Review-g189180-d25050275-Reviews-Vitoria_s_Terrace_Apartments-Porto_Porto_District_Northern_Portugal.html" },
    { platform: "Trip.com",     score: "9.9", outOf: "10", count: 32,  badge: "Outstanding",       subtitle: "Top local pick", url: "https://us.trip.com/hotels/porto-hotel-detail-58614427/vitoria-s-terrace-apartments/" },
    { platform: "Hotels.com",   score: "9.8", outOf: "10", count: 848, badge: "Loved by guests",   subtitle: "Expedia Group", url: "https://www.hotels.com/ho1484023040/vitoria-s-terrace-apartments-porto-portugal/" },
    { platform: "Expedia",      score: "4.9", outOf: "5",  count: 848, badge: "Exceptional",       subtitle: "Expedia Group", url: "https://www.expedia.com/Porto-Hotels-Vitorias-Terrace-Apartments.h46344470.Hotel-Information" }
  ],

  // Verbatim guest reviews — pulled from live listings May 2026.
  reviewQuotes: [
    { text: "Perfect location, super clean, wonderful owners and staff, great security — an incredible 6-night stay.",                                            name: "Lisa",        location: "United States",       platform: "Booking.com" },
    { text: "Literally the nicest place I have ever stayed in my 30+ years of travel.",                                                                            name: "Brooke E.",   location: "Tampa, Florida",     platform: "Tripadvisor" },
    { text: "Perfectly in the old town, walkable to everything, with hospitality like no other place we have stayed in Europe.",                                    name: "PhillyFanUK", location: "London, UK",         platform: "Tripadvisor" },
    { text: "Perfect location within walking distance of Porto's major attractions. The views from the apartment were spectacular.",                                name: "Jason",       location: "Australia",          platform: "Booking.com" },
    { text: "I can't stress enough how lovely Rita, our hostess, was. Wonderful experience. 5 stars. 100% recommend.",                                              name: "Heidi",       location: "Trip.com guest",     platform: "Trip.com" },
    { text: "Room view (river side), room space, location, soundproof.",                                                                                            name: "Serge",       location: "Switzerland",        platform: "Booking.com" },
    { text: "The hotel was super clean and the staff was wonderful. We will always treasure our anniversary memories in Porto.",                                    name: "Ling",        location: "United States",      platform: "Booking.com" },
    { text: "Pristine clean, great location and owners.",                                                                                                            name: "Daghan",      location: "United Kingdom",     platform: "Booking.com" }
  ],

  meta: {
    address: "Rua de São Miguel 15 · 4050-560 Porto",
    coords: "41.143° N, 8.616° W",
    phone: "+351 960 178 336",
    email: "info@vitoriasterraceapartments.com",
    instagram: "@vitoriasterrace"
  },

  // Verbatim from Rita's printed guide. Place names + addresses are canon — do not invent notes.
  recommendations: [
    {
      id: "traditional",
      title: "Traditional Restaurants",
      kind: "Where the locals still go",
      tag: "Eat",
      icon: "01",
      items: [
        { name: "Taberna Santo António", addr: "R. das Virtudes 32, 4050-630 Porto" },
        { name: "Taberna d'Avó", addr: "R. de São Bento da Vitória 48, 4050-542 Porto" },
        { name: "Casa Bragança", addr: "R. do Arquitecto Nicolau Nasoni 16, 4050-423 Porto" },
        { name: "Restaurante Abadia do Porto", addr: "R. do Ateneu Comercial do Porto 22, 4000-380 Porto" }
      ]
    },
    {
      id: "cool",
      title: "Cool Restaurants",
      kind: "Newer, design-led",
      tag: "Eat",
      icon: "02",
      items: [
        { name: "MISTU", addr: "R. do Comércio do Porto 161, 4050-430 Porto" },
        { name: "Cantinho do Avillez (Porto)", addr: "R. de Mouzinho da Silveira 166, 4050-416 Porto" },
        { name: "Flow", addr: "Rua da Conceição 63, 4050-215 Porto" },
        { name: "The Door", addr: "Rua das Taipas 94–96, 4050-598 Porto" }
      ]
    },
    {
      id: "francesinha",
      title: "For the local dish Francesinha",
      kind: "Porto's iconic sandwich",
      tag: "Eat",
      icon: "03",
      items: [
        { name: "Café Santiago", addr: "R. de Passos Manuel 226, 4000-382 Porto" },
        { name: "Brasão", addr: "R. de Ramalho Ortigão 28, 4000-407 Porto" }
      ]
    },
    {
      id: "breakfast",
      title: "For Breakfast",
      kind: "Coffee, pastries, the morning paper",
      tag: "Eat",
      icon: "04",
      items: [
        { name: "Muralhas Olival", addr: "Campo dos Mártires da Pátria 117, 4050-367 Porto" },
        { name: "Padaria Ribeiro", addr: "P. de Guilherme Gomes Fernandes 21, 4050-526 Porto" }
      ]
    },
    {
      id: "market",
      title: "Time-Out Food Market",
      kind: "All of Porto's best food, one room",
      tag: "Eat",
      icon: "05",
      items: [
        { name: "Time-Out Market Porto", addr: "Ala Sul da Estação Ferroviária de São Bento, Praça de Almeida Garrett" }
      ]
    },
    {
      id: "gaia",
      title: "Codfish cakes in Gaia",
      kind: "Across the river, worth the walk",
      tag: "Eat",
      icon: "06",
      items: [
        { name: "Casa Portuguesa do Pastel de Bacalhau", addr: "Av. de Diogo Leite 122, 4400-111 Vila Nova de Gaia" }
      ]
    },
    {
      id: "minimarket",
      title: "Local mini-market",
      kind: "Ask for Lola",
      tag: "Shop",
      icon: "07",
      items: [
        { name: "Mercearia Garrett", addr: "R. do Dr. Barbosa de Castro 35, 4050-091 Porto", note: "Ask for Lola." }
      ]
    },
    {
      id: "supermarket",
      title: "Supermarket",
      kind: "For the apartment kitchen",
      tag: "Shop",
      icon: "08",
      items: [
        { name: "Minipreço", addr: "Largo dos Lóios 46, 4050-338 Porto" }
      ]
    },
    {
      id: "fado",
      title: "Fado",
      kind: "Porto's quieter answer to Lisbon",
      tag: "Hear",
      icon: "09",
      items: [
        { name: "Taberna Real do Fado", addr: "R. do Dr. Barbosa de Castro 58, 4050-090 Porto", note: "With dinner." },
        { name: "Casa da Mariquinhas", addr: "R. de São Sebastião 25, Porto", note: "With dinner." },
        { name: "Fado Maior do Porto", addr: "Rua de Miragaia 54, 4050-386 Porto", note: "Afternoon performance, no dinner." }
      ]
    },
    {
      id: "laundry",
      title: "Self-service laundry",
      kind: "For longer stays",
      tag: "Practical",
      icon: "10",
      items: [
        { name: "LavandaRIA Self-Service Laundry", addr: "Rua dos Caldeireiros 91, 4050-140 Porto" }
      ]
    },
    {
      id: "tours",
      title: "Free Tours",
      kind: "A first-day orientation",
      tag: "Do",
      icon: "11",
      items: [
        { name: "Civitatis", addr: "civitatis.com" },
        { name: "GuruWalk", addr: "guruwalk.com" }
      ]
    },
    {
      id: "douro",
      title: "Day cruise · Douro Valley",
      kind: "The vineyards, by river",
      tag: "Do",
      icon: "12",
      items: [
        { name: "Book via GetYourGuide", addr: "getyourguide.com" }
      ]
    },
    {
      id: "visit",
      title: "What to visit",
      kind: "A short, opinionated list",
      tag: "Do",
      icon: "13",
      items: [
        { name: "Torre dos Clérigos", addr: "3 min walk" },
        { name: "Livraria Lello", addr: "5 min walk" },
        { name: "Sé Cathedral", addr: "8 min walk" },
        { name: "Ribeira neighborhood", addr: "8 min walk", note: "Beautiful to walk through — we don't advise eating there because it's very touristic." },
        { name: "Walk D. Luís I bridge to Gaia", addr: "10 min walk" },
        { name: "Visit a Port wine cellar", addr: "Across the river, in Gaia" },
        { name: "Estação de São Bento — the tiles", addr: "5 min walk" },
        { name: "Igreja do Carmo — the tiled façade", addr: "5 min walk" },
        { name: "Rua das Flores", addr: "5 min walk" },
        { name: "R. de Mouzinho da Silveira", addr: "6 min walk" },
        { name: "Avenida dos Aliados", addr: "6 min walk" },
        { name: "Mercado do Bolhão", addr: "10 min walk" },
        { name: "Café Majestic", addr: "12 min walk" }
      ]
    }
  ]
};

const VT_I18N = {
  EN: {
    nav: { stays: "Stays", story: "Our Story", porto: "Porto", recs: "Recommendations", contact: "Contact", book: "Book a stay" },
    hero: {
      eyebrow: "Porto · A 19th-century house",
      title1: "The best",
      title2: "view in town,",
      title3: "from a quiet street.",
      sub: "Four apartments in a 19th-century granite house in Porto's UNESCO old town. Quietly restored, rented one party at a time.",
      cta: "Check availability",
      ctaAlt: "View listings"
    },
    secStay: { num: "i.", label: "The Stays", title: "Four apartments,\nfour temperaments." },
    secStory: { num: "ii.", label: "The House", title: "A 19th-century house.\nBrought back, slowly." },
    secPorto: { num: "iii.", label: "The City", title: "Below us, Porto." },
    secAmen: { num: "iv.", label: "Quiet Comforts", title: "Everything you need.\nNothing you don't." },
    secReviews: { num: "vi.", label: "What guests say", title: "Across every platform,\nthe same story." },
    apt: { perNight: "Per night, low season", reserve: "Reserve", guests: "guests", bed: "bed", beds: "beds", bath: "bath", baths: "baths", from: "from" },
    storyCaption: "The doors at nº 15–17, restored to their original cobalt",
    storyLead: "A 19th-century house in the UNESCO old town — a fine example of Porto's bourgeois functional architecture, a few minutes' walk from the Douro.",
    storyBody: [
      "The owner was born and raised on Rua da Vitória, the street that gives this house its name. Acquiring the building was a long-held dream; restoring it took close to three years. From the start, it mattered that the soul of the house remain — the cobalt doors, the granite stonework, the yellow and white tiles at the threshold, the wooden arches above the staircase, and the handrail you reach for, instinctively, on the way up.",
      "All of it preserved. All of it still here.",
      "Because the building sits in the UNESCO World Heritage centre, every phase of the renovation was overseen by an archaeological team. Several artefacts were uncovered along the way; a few small objects belonging to the owner's family were also brought in — a quiet conversation between past and present, on every floor."
    ],
    storyHeritage: [["19th c.", "Year built"], ["3 yrs", "Restoration"], ["UNESCO", "Heritage zone"]],
    portoLead: "We sit on Rua de São Miguel — a quiet granite street in the UNESCO old town, minutes from the Clérigos tower and the Douro.",
    portoAddressLabel: "Address",
    walkingDistances: [["3 min", "Clérigos Tower"], ["5 min", "Livraria Lello"], ["5 min", "São Bento Station"], ["8 min", "Ribeira & the Douro"], ["10 min", "Dom Luís I Bridge"], ["12 min", "Port lodges, Gaia"]],
    amenitiesIntro: "Direct booking includes everything below. No upsells, no add-ons at check-in.",
    amenities: [
      { label: "Concierge",        note: "Daily, 8 → 20h" },
      { label: "Welcome basket",   note: "Port, pastel de nata, fruit" },
      { label: "Linens",           note: "Portuguese cotton, changed mid-stay" },
      { label: "Heating & A/C",    note: "Individually controlled" },
      { label: "Wi-Fi",            note: "Fibre, throughout" },
      { label: "Self check-in",    note: "Smart-lock, 24h" },
      { label: "Equipped kitchen", note: "Nespresso, induction" },
      { label: "Washer & dryer",   note: "Penthouse & Delux only" }
    ],
    recs: {
      eyebrow: "Our Recommendations",
      heading: "A short letter,\nfrom Rita.",
      byline: "\"These are the places we send our friends to, and the places we go ourselves. Print this, save it, ask us anything.\" — R.",
      filter: "Filter", all: "All", print: "⌃ Print this guide",
      showLess: "Show less", more: "more",
      whatsappEyebrow: "One more thing",
      whatsappTitle: "We're a WhatsApp away during your stay.",
      whatsappBody: "Reservations, last-minute table bookings, an umbrella if it rains — just write.",
      whatsappCta: "Open WhatsApp",
      tags: { Eat: "Eat", Shop: "Shop", Hear: "Hear", Practical: "Practical", Do: "Do" }
    },
    reviews: { acrossLabel: "across", reviewsLabel: "reviews", reviewsLabelOne: "review" },
    footer: { visit: "Visit", contact: "Contact", wander: "Wander", language: "Language", reserve: "Reserve a stay", tagline: "Four apartments in a 19th-century granite house in the UNESCO old town. Direct bookings always include the best available rate, no fees, and a welcome basket." },
    book: {
      title: "Reserve",
      sub: "Direct booking · best rate guaranteed",
      checkin: "Check-in",
      checkout: "Check-out",
      guests: "Guests",
      apartment: "Apartment",
      any: "Any apartment",
      adult: "adult",
      adults: "adults",
      next: "Continue",
      back: "Back",
      summary: "Your stay",
      nights: "nights",
      total: "Total",
      includes: "Includes city tax & cleaning",
      details: "Your details",
      first: "First name",
      last: "Last name",
      emailL: "Email",
      phoneL: "Phone",
      notes: "Anything we should know?",
      confirm: "Confirm reservation",
      done: "Reservation held",
      doneSub: "We've sent a confirmation to",
      doneNote: "Rita will write within the hour to arrange check-in.",
      close: "Close"
    }
  },
  PT: {
    nav: { stays: "Estadias", story: "A Casa", porto: "Porto", recs: "Recomendações", contact: "Contactos", book: "Reservar" },
    hero: {
      eyebrow: "Porto · Casa do séc. XIX",
      title1: "A melhor vista",
      title2: "da cidade,",
      title3: "de uma rua tranquila.",
      sub: "Quatro apartamentos numa casa burguesa do século XIX, no centro histórico do Porto. Restaurada com calma, alugada uma família de cada vez.",
      cta: "Ver disponibilidade",
      ctaAlt: "Ver os apartamentos"
    },
    secStay: { num: "i.", label: "As Estadias", title: "Quatro apartamentos,\nquatro temperamentos." },
    secStory: { num: "ii.", label: "A Casa", title: "Uma casa do séc. XIX.\nDevolvida, devagar." },
    secPorto: { num: "iii.", label: "A Cidade", title: "Lá em baixo, o Porto." },
    secAmen: { num: "iv.", label: "Confortos Discretos", title: "Tudo o que precisa.\nNada do que não precisa." },
    secReviews: { num: "vi.", label: "O que dizem os hóspedes", title: "Em cada plataforma,\na mesma história." },
    apt: { perNight: "Por noite, época baixa", reserve: "Reservar", guests: "hóspedes", bed: "cama", beds: "camas", bath: "casa de banho", baths: "casas de banho", from: "desde" },
    storyCaption: "As portas dos nº 15–17, restauradas no seu azul cobalto original",
    storyLead: "Uma casa do século XIX no centro histórico classificado pela UNESCO — um belo exemplo da arquitetura burguesa funcional do Porto, a poucos minutos do Douro.",
    storyBody: [
      "O proprietário nasceu e cresceu na Rua da Vitória, a rua que dá nome a esta casa. Adquirir o edifício foi um sonho longamente acalentado; restaurá-lo levou cerca de três anos. Desde o início, era importante que a alma da casa permanecesse — as portas cobalto, a cantaria em granito, os azulejos amarelos e brancos da soleira, os arcos de madeira sobre a escadaria, e o corrimão em que se apoia, instintivamente, ao subir.",
      "Tudo preservado. Tudo ainda aqui.",
      "Por estar inserido no centro histórico classificado pela UNESCO, todas as fases da renovação foram acompanhadas por uma equipa arqueológica. Vários artefactos foram descobertos ao longo do caminho; alguns objetos pertencentes à família do proprietário foram também trazidos — uma conversa silenciosa entre o passado e o presente, em cada andar."
    ],
    storyHeritage: [["séc. XIX", "Ano de construção"], ["3 anos", "Restauro"], ["UNESCO", "Zona patrimonial"]],
    portoLead: "Estamos na Rua de São Miguel — uma rua de granito tranquila no centro histórico classificado pela UNESCO, a poucos minutos da Torre dos Clérigos e do Douro.",
    portoAddressLabel: "Morada",
    walkingDistances: [["3 min", "Torre dos Clérigos"], ["5 min", "Livraria Lello"], ["5 min", "Estação de São Bento"], ["8 min", "Ribeira & o Douro"], ["10 min", "Ponte Dom Luís I"], ["12 min", "Caves do Porto, Gaia"]],
    amenitiesIntro: "A reserva direta inclui tudo o que se segue. Sem custos adicionais, sem extras no check-in.",
    amenities: [
      { label: "Acolhimento",      note: "Diário, 8h → 20h" },
      { label: "Cesto de boas-vindas", note: "Vinho do Porto, pastéis de nata, fruta" },
      { label: "Roupa de cama",    note: "Algodão português, mudada a meio da estadia" },
      { label: "Aquecimento & A/C", note: "Controlo individual" },
      { label: "Wi-Fi",            note: "Fibra ótica em toda a casa" },
      { label: "Check-in autónomo", note: "Fechadura inteligente, 24h" },
      { label: "Cozinha equipada", note: "Nespresso, indução" },
      { label: "Máquina de lavar e secar", note: "Apenas Penthouse e Delux" }
    ],
    recs: {
      eyebrow: "As Nossas Recomendações",
      heading: "Uma carta breve,\nda Rita.",
      byline: "\"São os sítios que recomendamos aos amigos, e os sítios para onde vamos. Imprima, guarde, pergunte-nos qualquer coisa.\" — R.",
      filter: "Filtrar", all: "Tudo", print: "⌃ Imprimir guia",
      showLess: "Ver menos", more: "mais",
      whatsappEyebrow: "Mais uma coisa",
      whatsappTitle: "Estamos a um WhatsApp de distância durante a sua estadia.",
      whatsappBody: "Reservas, marcações de última hora, um chapéu de chuva se chover — basta escrever.",
      whatsappCta: "Abrir WhatsApp",
      tags: { Eat: "Comer", Shop: "Comprar", Hear: "Ouvir", Practical: "Prático", Do: "Fazer" }
    },
    reviews: { acrossLabel: "em", reviewsLabel: "avaliações", reviewsLabelOne: "avaliação" },
    footer: { visit: "Visitar", contact: "Contactos", wander: "Explorar", language: "Idioma", reserve: "Reservar estadia", tagline: "Quatro apartamentos numa casa de granito do século XIX no centro histórico classificado pela UNESCO. As reservas directas incluem sempre a melhor tarifa disponível, sem comissões e com cesto de boas-vindas." },
    book: {
      title: "Reservar",
      sub: "Reserva directa · melhor preço garantido",
      checkin: "Entrada",
      checkout: "Saída",
      guests: "Hóspedes",
      apartment: "Apartamento",
      any: "Qualquer apartamento",
      adult: "adulto",
      adults: "adultos",
      next: "Continuar",
      back: "Voltar",
      summary: "A sua estadia",
      nights: "noites",
      total: "Total",
      includes: "Inclui taxa turística e limpeza",
      details: "Os seus dados",
      first: "Nome",
      last: "Apelido",
      emailL: "Email",
      phoneL: "Telefone",
      notes: "Algo que devamos saber?",
      confirm: "Confirmar reserva",
      done: "Reserva guardada",
      doneSub: "Enviámos confirmação para",
      doneNote: "A Rita escreverá dentro de uma hora para combinar a entrada.",
      close: "Fechar"
    }
  },
  ES: {
    nav: { stays: "Estancias", story: "La Casa", porto: "Oporto", recs: "Recomendaciones", contact: "Contacto", book: "Reservar" },
    hero: {
      eyebrow: "Oporto · Casa del s. XIX",
      title1: "La mejor vista",
      title2: "de la ciudad,",
      title3: "desde una calle tranquila.",
      sub: "Cuatro apartamentos en una casa burguesa del siglo XIX, en el centro histórico de Oporto. Restaurada con calma, alquilada de una familia en una.",
      cta: "Ver disponibilidad",
      ctaAlt: "Ver los apartamentos"
    },
    secStay: { num: "i.", label: "Las Estancias", title: "Cuatro apartamentos,\ncuatro temperamentos." },
    secStory: { num: "ii.", label: "La Casa", title: "Una casa del s. XIX.\nDevuelta, despacio." },
    secPorto: { num: "iii.", label: "La Ciudad", title: "Abajo, Oporto." },
    secAmen: { num: "iv.", label: "Comodidades Discretas", title: "Todo lo que necesitas.\nNada que no." },
    secReviews: { num: "vi.", label: "Lo que dicen los huéspedes", title: "En cada plataforma,\nla misma historia." },
    apt: { perNight: "Por noche, temporada baja", reserve: "Reservar", guests: "huéspedes", bed: "cama", beds: "camas", bath: "baño", baths: "baños", from: "desde" },
    storyCaption: "Las puertas de los nº 15–17, restauradas a su cobalto original",
    storyLead: "Una casa del siglo XIX en el casco antiguo declarado Patrimonio de la Humanidad — un magnífico ejemplo de la arquitectura burguesa funcional de Oporto, a pocos minutos del Duero.",
    storyBody: [
      "El propietario nació y se crio en la Rua da Vitória, la calle que da nombre a esta casa. Adquirir el edificio fue un sueño largamente acariciado; restaurarlo llevó casi tres años. Desde el principio, importó que el alma de la casa permaneciera — las puertas cobalto, la cantería de granito, los azulejos amarillos y blancos del umbral, los arcos de madera sobre la escalera, y el pasamanos al que uno se aferra, instintivamente, al subir.",
      "Todo conservado. Todo aún aquí.",
      "Por estar en el centro histórico declarado Patrimonio de la Humanidad por la UNESCO, todas las fases de la renovación fueron supervisadas por un equipo arqueológico. Se descubrieron varios artefactos durante el proceso; algunos pequeños objetos de la familia del propietario también se incorporaron — una conversación silenciosa entre el pasado y el presente, en cada planta."
    ],
    storyHeritage: [["s. XIX", "Año de construcción"], ["3 años", "Restauración"], ["UNESCO", "Zona patrimonial"]],
    portoLead: "Estamos en la Rua de São Miguel — una calle tranquila de granito en el casco antiguo declarado Patrimonio de la Humanidad, a pocos minutos de la Torre de los Clérigos y del Duero.",
    portoAddressLabel: "Dirección",
    walkingDistances: [["3 min", "Torre de los Clérigos"], ["5 min", "Librería Lello"], ["5 min", "Estación de São Bento"], ["8 min", "Ribera & el Duero"], ["10 min", "Puente D. Luís I"], ["12 min", "Bodegas de Oporto, Gaia"]],
    amenitiesIntro: "La reserva directa incluye todo lo siguiente. Sin extras, sin sorpresas al llegar.",
    amenities: [
      { label: "Conserjería",       note: "Diaria, 8h → 20h" },
      { label: "Cesta de bienvenida", note: "Oporto, pastel de nata, fruta" },
      { label: "Ropa de cama",      note: "Algodón portugués, cambiada a mitad de estancia" },
      { label: "Calefacción y A/C", note: "Control individual" },
      { label: "Wi-Fi",             note: "Fibra en toda la casa" },
      { label: "Check-in autónomo", note: "Cerradura inteligente, 24h" },
      { label: "Cocina equipada",   note: "Nespresso, inducción" },
      { label: "Lavadora y secadora", note: "Solo Penthouse y Delux" }
    ],
    recs: {
      eyebrow: "Nuestras Recomendaciones",
      heading: "Una breve carta,\nde Rita.",
      byline: "\"Son los sitios que recomendamos a los amigos, y a los que vamos nosotras. Imprime, guarda, pregúntanos lo que sea.\" — R.",
      filter: "Filtrar", all: "Todo", print: "⌃ Imprimir guía",
      showLess: "Ver menos", more: "más",
      whatsappEyebrow: "Una cosa más",
      whatsappTitle: "Estamos a un WhatsApp durante tu estancia.",
      whatsappBody: "Reservas, mesas de última hora, un paraguas si llueve — solo escríbenos.",
      whatsappCta: "Abrir WhatsApp",
      tags: { Eat: "Comer", Shop: "Comprar", Hear: "Escuchar", Practical: "Práctico", Do: "Hacer" }
    },
    reviews: { acrossLabel: "en", reviewsLabel: "reseñas", reviewsLabelOne: "reseña" },
    footer: { visit: "Visitar", contact: "Contacto", wander: "Explorar", language: "Idioma", reserve: "Reservar estancia", tagline: "Cuatro apartamentos en una casa de granito del s. XIX en el casco antiguo declarado Patrimonio de la Humanidad. Las reservas directas siempre incluyen la mejor tarifa, sin comisiones y con cesta de bienvenida." },
    book: {
      title: "Reservar", sub: "Reserva directa · mejor precio garantizado",
      checkin: "Llegada", checkout: "Salida", guests: "Huéspedes",
      apartment: "Apartamento", any: "Cualquier apartamento", adult: "adulto", adults: "adultos",
      next: "Continuar", back: "Atrás", summary: "Su estancia", nights: "noches",
      total: "Total", includes: "Incluye tasa turística y limpieza",
      details: "Sus datos", first: "Nombre", last: "Apellido", emailL: "Correo", phoneL: "Teléfono",
      notes: "¿Algo que debamos saber?", confirm: "Confirmar reserva",
      done: "Reserva confirmada", doneSub: "Hemos enviado una confirmación a",
      doneNote: "Rita le escribirá en una hora para coordinar la llegada.",
      close: "Cerrar"
    }
  },
  FR: {
    nav: { stays: "Séjours", story: "La Maison", porto: "Porto", recs: "Recommandations", contact: "Contact", book: "Réserver" },
    hero: {
      eyebrow: "Porto · Maison du XIXᵉ",
      title1: "La plus belle vue",
      title2: "sur la ville,",
      title3: "depuis une rue paisible.",
      sub: "Quatre appartements dans une maison bourgeoise du XIXᵉ siècle, au cœur du Porto historique classé UNESCO. Restaurée doucement, louée à une famille à la fois.",
      cta: "Voir les disponibilités", ctaAlt: "Voir les appartements"
    },
    secStay: { num: "i.", label: "Les Séjours", title: "Quatre appartements,\nquatre tempéraments." },
    secStory: { num: "ii.", label: "La Maison", title: "Une maison du XIXᵉ.\nRendue, lentement." },
    secPorto: { num: "iii.", label: "La Ville", title: "En bas, Porto." },
    secAmen: { num: "iv.", label: "Conforts Discrets", title: "Tout ce qu'il faut.\nRien de plus." },
    secReviews: { num: "vi.", label: "Ce que disent les hôtes", title: "Sur chaque plateforme,\nla même histoire." },
    apt: { perNight: "Par nuit, basse saison", reserve: "Réserver", guests: "voyageurs", bed: "lit", beds: "lits", bath: "salle de bain", baths: "salles de bain", from: "à partir de" },
    storyCaption: "Les portes des nº 15–17, restaurées dans leur cobalt d'origine",
    storyLead: "Une maison du XIXᵉ siècle au cœur du Porto historique classé UNESCO — un bel exemple de l'architecture bourgeoise fonctionnelle de Porto, à quelques minutes du Douro.",
    storyBody: [
      "Le propriétaire est né et a grandi sur la Rua da Vitória, la rue qui donne son nom à cette maison. Acquérir le bâtiment était un rêve longuement caressé ; le restaurer a pris près de trois ans. Dès le départ, il importait que l'âme de la maison demeure — les portes cobalt, la pierre de granit, les azulejos jaunes et blancs du seuil, les arches en bois au-dessus de l'escalier, et la rampe que l'on saisit, instinctivement, en montant.",
      "Tout est préservé. Tout est encore là.",
      "Parce que le bâtiment se trouve dans le centre historique classé au patrimoine mondial de l'UNESCO, chaque phase de la rénovation a été supervisée par une équipe archéologique. Plusieurs artefacts ont été mis au jour ; quelques petits objets appartenant à la famille du propriétaire ont aussi été apportés — une conversation discrète entre le passé et le présent, à chaque étage."
    ],
    storyHeritage: [["XIXᵉ s.", "Année de construction"], ["3 ans", "Restauration"], ["UNESCO", "Zone patrimoniale"]],
    portoLead: "Nous sommes Rua de São Miguel — une rue de granit paisible au cœur du Porto historique classé UNESCO, à quelques minutes de la Tour des Clercs et du Douro.",
    portoAddressLabel: "Adresse",
    walkingDistances: [["3 min", "Tour des Clercs"], ["5 min", "Librairie Lello"], ["5 min", "Gare de São Bento"], ["8 min", "Ribeira & le Douro"], ["10 min", "Pont D. Luís I"], ["12 min", "Caves à Porto, Gaia"]],
    amenitiesIntro: "La réservation directe inclut tout ce qui suit. Sans frais cachés, sans extras à l'arrivée.",
    amenities: [
      { label: "Accueil",          note: "Tous les jours, 8h → 20h" },
      { label: "Panier d'accueil", note: "Porto, pastel de nata, fruits" },
      { label: "Linge de maison",  note: "Coton portugais, changé à mi-séjour" },
      { label: "Chauffage & climatisation", note: "Réglage individuel" },
      { label: "Wi-Fi",            note: "Fibre dans toute la maison" },
      { label: "Arrivée autonome", note: "Serrure connectée, 24h/24" },
      { label: "Cuisine équipée",  note: "Nespresso, induction" },
      { label: "Lave-linge & sèche-linge", note: "Penthouse et Delux uniquement" }
    ],
    recs: {
      eyebrow: "Nos Recommandations",
      heading: "Une courte lettre,\nde Rita.",
      byline: "\"Ce sont les adresses que nous recommandons à nos amis, et où nous allons nous-mêmes. Imprimez, gardez, demandez-nous tout.\" — R.",
      filter: "Filtrer", all: "Tout", print: "⌃ Imprimer le guide",
      showLess: "Voir moins", more: "de plus",
      whatsappEyebrow: "Encore une chose",
      whatsappTitle: "Nous sommes à un WhatsApp pendant votre séjour.",
      whatsappBody: "Réservations, tables de dernière minute, un parapluie s'il pleut — écrivez-nous.",
      whatsappCta: "Ouvrir WhatsApp",
      tags: { Eat: "Manger", Shop: "Acheter", Hear: "Écouter", Practical: "Pratique", Do: "Faire" }
    },
    reviews: { acrossLabel: "sur", reviewsLabel: "avis", reviewsLabelOne: "avis" },
    footer: { visit: "Visiter", contact: "Contact", wander: "Flâner", language: "Langue", reserve: "Réserver un séjour", tagline: "Quatre appartements dans une maison de granit du XIXᵉ siècle au cœur du Porto historique classé UNESCO. Les réservations directes incluent toujours le meilleur tarif disponible, sans frais et avec un panier d'accueil." },
    book: {
      title: "Réserver", sub: "Réservation directe · meilleur tarif garanti",
      checkin: "Arrivée", checkout: "Départ", guests: "Voyageurs",
      apartment: "Appartement", any: "Tout appartement", adult: "adulte", adults: "adultes",
      next: "Continuer", back: "Retour", summary: "Votre séjour", nights: "nuits",
      total: "Total", includes: "Taxe de séjour & ménage inclus",
      details: "Vos coordonnées", first: "Prénom", last: "Nom", emailL: "Courriel", phoneL: "Téléphone",
      notes: "Quelque chose à savoir ?", confirm: "Confirmer la réservation",
      done: "Réservation enregistrée", doneSub: "Nous avons envoyé la confirmation à",
      doneNote: "Rita vous écrira dans l'heure pour organiser l'arrivée.",
      close: "Fermer"
    }
  },
  KR: {
    nav: { stays: "객실", story: "이 집", porto: "포르투", recs: "추천", contact: "문의", book: "예약하기" },
    hero: {
      eyebrow: "포르투 · 19세기 가옥",
      title1: "도시에서",
      title2: "가장 아름다운 풍경,",
      title3: "조용한 골목에서.",
      sub: "유네스코 세계유산 포르투 구시가지에 자리한 19세기 화강암 저택의 네 개 아파트. 천천히 복원되어, 한 번에 한 팀씩만 맞이합니다.",
      cta: "예약 가능 확인", ctaAlt: "객실 보기"
    },
    secStay: { num: "i.", label: "객실", title: "네 개의 아파트,\n네 개의 분위기." },
    secStory: { num: "ii.", label: "이 집", title: "19세기 가옥,\n천천히 되살아났습니다." },
    secPorto: { num: "iii.", label: "도시", title: "아래로, 포르투." },
    secAmen: { num: "iv.", label: "조용한 편의", title: "필요한 모든 것,\n그 이상은 없이." },
    secReviews: { num: "vi.", label: "손님들의 이야기", title: "어느 플랫폼에서나,\n같은 이야기." },
    apt: { perNight: "1박 기준, 비수기", reserve: "예약", guests: "명", bed: "침대", beds: "침대", bath: "욕실", baths: "욕실", from: "부터" },
    storyCaption: "15–17번지의 문, 본래의 코발트색으로 복원되었습니다",
    storyLead: "유네스코 세계유산 구시가지에 자리한 19세기 가옥 — 포르투의 부르주아 기능주의 건축의 아름다운 사례이며, 도루 강에서 도보 몇 분 거리에 있습니다.",
    storyBody: [
      "주인은 이 집에 이름을 준 거리, 히베이라 다 비토리아에서 태어나고 자랐습니다. 이 건물을 사들이는 것은 오래 품어온 꿈이었고, 복원에는 약 3년이 걸렸습니다. 처음부터 가장 중요했던 것은 집의 영혼을 그대로 두는 일이었습니다 — 코발트색 문, 화강암의 벽, 입구의 노랗고 흰 타일, 계단 위의 목조 아치, 그리고 오를 때 무심코 손이 가닿는 그 난간까지.",
      "모두 보존되었습니다. 모두 여기 있습니다.",
      "건물이 유네스코 세계유산 지구 안에 있어, 복원의 모든 단계는 고고학팀의 감독을 받았습니다. 작업 중 여러 유물이 발견되었으며, 가족이 간직해 온 작은 물건들도 함께 들였습니다 — 매 층마다, 과거와 현재가 조용히 나누는 대화입니다."
    ],
    storyHeritage: [["19세기", "건축 연도"], ["3년", "복원 기간"], ["UNESCO", "유산 구역"]],
    portoLead: "우리는 상 미겔 거리에 있습니다 — 유네스코 세계유산 구시가지의 조용한 화강암 거리, 클레리구스 탑과 도루 강에서 단 몇 분 거리.",
    portoAddressLabel: "주소",
    walkingDistances: [["3분", "클레리구스 탑"], ["5분", "렐루 서점"], ["5분", "상 벤투 역"], ["8분", "히베이라 & 도루 강"], ["10분", "동 루이스 1세 다리"], ["12분", "포트 와인 셀러, 가이아"]],
    amenitiesIntro: "공식 예약 시 아래 모든 항목이 포함됩니다. 숨겨진 비용도, 체크인 시 추가 결제도 없습니다.",
    amenities: [
      { label: "컨시어지",         note: "매일 8 → 20시" },
      { label: "웰컴 바스켓",       note: "포르투 와인, 파스텔 드 나타, 과일" },
      { label: "침구",            note: "포르투갈산 면, 중간 교체" },
      { label: "난방 & 에어컨",     note: "객실별 개별 조절" },
      { label: "Wi-Fi",          note: "광섬유, 전 객실" },
      { label: "셀프 체크인",       note: "스마트락, 24시간" },
      { label: "주방 설비",         note: "네스프레소, 인덕션" },
      { label: "세탁기 & 건조기",   note: "펜트하우스·디럭스 전용" }
    ],
    recs: {
      eyebrow: "우리의 추천",
      heading: "리타가 보내는\n짧은 편지.",
      byline: "\"친구들에게 권하는, 그리고 우리가 직접 가는 곳들이에요. 인쇄해 두시고, 무엇이든 물어보세요.\" — R.",
      filter: "필터", all: "전체", print: "⌃ 가이드 인쇄",
      showLess: "접기", more: "더 보기",
      whatsappEyebrow: "한 가지 더",
      whatsappTitle: "머무시는 동안, WhatsApp으로 언제든 연락 주세요.",
      whatsappBody: "예약, 갑작스러운 식당 자리, 비가 올 때 우산 — 메시지 한 통이면 됩니다.",
      whatsappCta: "WhatsApp 열기",
      tags: { Eat: "먹기", Shop: "장보기", Hear: "듣기", Practical: "생활", Do: "체험" }
    },
    reviews: { acrossLabel: "·", reviewsLabel: "건의 후기", reviewsLabelOne: "건의 후기" },
    footer: { visit: "방문", contact: "문의", wander: "둘러보기", language: "언어", reserve: "예약하기", tagline: "유네스코 세계유산 구시가지에 자리한 19세기 화강암 저택의 네 개 아파트. 공식 예약은 항상 최저가가 보장되며, 수수료가 없고 웰컴 바스켓이 포함됩니다." },
    book: {
      title: "예약", sub: "공식 예약 · 최저가 보장",
      checkin: "체크인", checkout: "체크아웃", guests: "인원",
      apartment: "객실", any: "전 객실", adult: "성인", adults: "성인",
      next: "다음", back: "이전", summary: "예약 내용", nights: "박",
      total: "합계", includes: "관광세 및 청소비 포함",
      details: "예약자 정보", first: "이름", last: "성", emailL: "이메일", phoneL: "전화번호",
      notes: "전달 사항이 있나요?", confirm: "예약 확정",
      done: "예약이 접수되었습니다", doneSub: "확인 메일을 보냈습니다 →",
      doneNote: "한 시간 안에 리타가 체크인 안내를 드립니다.",
      close: "닫기"
    }
  }
};

window.VT_DATA = VT_DATA;
window.VT_I18N = VT_I18N;
