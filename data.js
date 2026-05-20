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
        KO: {
          name: "펜트하우스 · 강 전망",
          tagline: "최상층, 강을 마주한 테라스",
          description: "최상층 펜트하우스. 도루 강과 히베이라의 붉은 지붕이 바라다보이는 전용 테라스가 있습니다. 침실 두 개, 욕실 두 개, 거실과 주방이 트인 구조. 네 객실 중 가장 넓고 가장 조용한 곳 — 공간과 사생활, 그리고 특별한 머묾을 원하는 분께.",
          features: ["강 전망", "전용 테라스", "킹 + 퀸 침대", "욕실 2개"]
        },
        JA: {
          name: "ペントハウス · 川の眺め",
          tagline: "最上階、川に面したテラス",
          description: "最上階のペントハウス。ドウロ川とリベイラの赤瓦の屋根を一望する専用テラスがあります。寝室2つ、バスルーム2つ、開放的なリビングとキッチン。4部屋の中で最も広く、最も静か——ゆとりとプライバシー、特別な滞在を求める方へ。",
          features: ["川の眺め", "専用テラス", "キング + クイーン", "バスルーム2つ"]
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
        KO: {
          name: "디럭스 아파트 · 강 전망",
          tagline: "창 너머로 도루 강이 보이는 1베드룸",
          description: "넓은 거실, 간이 주방, 그리고 건물의 원래 목공을 떠올리게 하는 소나무 살창 파티션이 있는 1베드룸 아파트. 창은 길 끝에 흐르는 도루 강을 액자처럼 담아냅니다. 소파베드 포함 3인 가능.",
          features: ["강 전망", "퀸 + 소파베드", "주방 완비", "거실"]
        },
        JA: {
          name: "デラックスアパートメント · 川の眺め",
          tagline: "1ベッドルーム、窓の向こうの川",
          description: "1ベッドルームの広々としたアパートメント。ゆとりあるリビング、簡易キッチン、そして建物本来の指物を思わせる松の格子の間仕切り。窓は通りの先のドウロ川を額縁のように切り取ります。ソファベッドを使えば3名様までご宿泊いただけます。",
          features: ["川の眺め", "クイーン + ソファベッド", "簡易キッチン完備", "リビング"]
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
        KO: {
          name: "스튜디오 · 도시 전망",
          tagline: "초록 타일 주방의 스튜디오",
          description: "초록과 회색 시멘트 타일이 깔린 주방 바닥이 인상적인 컴팩트 스튜디오 — 입구의 노란 아줄레주와 호응하는 디테일입니다. 구시가지를 향한 높은 프렌치 창과 창가의 독서 자리.",
          features: ["도시 전망", "퀸 베드", "타일 주방", "독서 자리"]
        },
        JA: {
          name: "スタジオ · 街の眺め",
          tagline: "緑のタイルキッチンのスタジオ",
          description: "コンパクトなスタジオ。緑とグレーのセメントタイルが敷かれたキッチンの床——入口の黄色いアズレージョと響き合う細部です。旧市街を見下ろす高いフレンチ窓と、窓辺の読書スペース。",
          features: ["街の眺め", "クイーンベッド", "タイルのキッチン", "読書スペース"]
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
        KO: {
          name: "로프트 · 거리 전망",
          tagline: "상 미겔 거리 위의 로프트",
          description: "위층의 로프트. 화강암 거리를 향한 두 개의 창이 있고, 주방·식사·거실이 하나의 공간으로 이어지며, 침실은 원래의 실내 아치로 구분됩니다. 조용하고 독립적이며, 강까지 도보로 몇 분.",
          features: ["거리 전망", "퀸 베드", "오픈 주방", "원형 아치"]
        },
        JA: {
          name: "ロフト · 通りの眺め",
          tagline: "サン・ミゲル通りの上のロフト",
          description: "上階のロフト。花崗岩の通りに面した2つの窓、ひと続きのキッチン・ダイニング・リビング、寝室は本来の室内アーチで仕切られています。静かで、独立感があり、川まで徒歩数分。",
          features: ["通りの眺め", "クイーンベッド", "オープンキッチン", "原型のアーチ"]
        }
      }
    }
  ],

  // Aggregate scores per platform — researched from live listings, May 2026.
  // `sharedFeed` flags platforms whose review pool is the same upstream source.
  // VTReviews uses this to dedupe in the cross-platform total (Hotels.com + Expedia
  // share the Expedia Group feed — counting each separately would inflate totals).
  // Counts re-verified May 2026: Booking.com (414 — apartment-reviews scope, not the
  // 800+ all-language total quoted elsewhere), Tripadvisor (14, #47 of 217 condos),
  // Trip.com (32, "higher than 95% of similar properties").
  reviewScores: [
    { platform: "Booking.com", score: "9.8", outOf: "10", count: 414, badge: "Guests' Choice",     subtitle: "#1 of 3,270 vacation rentals in Porto", url: "https://www.booking.com/hotel/pt/vitorias-terrace.html" },
    { platform: "Tripadvisor", score: "5.0", outOf: "5",  count: 14,  badge: "Travellers' Choice", subtitle: "#47 of 217 condos in Porto",            url: "https://www.tripadvisor.com/Hotel_Review-g189180-d25050275-Reviews-Vitoria_s_Terrace_Apartments-Porto_Porto_District_Northern_Portugal.html" },
    { platform: "Trip.com",    score: "9.9", outOf: "10", count: 32,  badge: "Outstanding",         subtitle: "Higher than 95% of similar properties", url: "https://us.trip.com/hotels/porto-hotel-detail-58614427/vitoria-s-terrace-apartments/" },
    { platform: "Hotels.com",  score: "9.8", outOf: "10", count: 848, badge: "Loved by guests",     subtitle: "Expedia Group feed",                    url: "https://www.hotels.com/ho1484023040/vitoria-s-terrace-apartments-porto-portugal/", sharedFeed: "expedia-group" },
    { platform: "Expedia",     score: "4.9", outOf: "5",  count: 848, badge: "Exceptional",         subtitle: "Expedia Group feed",                    url: "https://www.expedia.com/Porto-Hotels-Vitorias-Terrace-Apartments.h46344470.Hotel-Information",                                          sharedFeed: "expedia-group" }
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

  // Shared sub-tag dictionary — items reference a slug; we look up translations here.
  // Renders on each card as small uppercase meta (e.g. "TRADITIONAL · 6 MIN").
  subTags: {
    traditional:  { EN: "Traditional",      PT: "Tradicional",         ES: "Tradicional",         FR: "Traditionnel",      KO: "전통",      JA: "伝統的" },
    modern:       { EN: "Modern",           PT: "Moderno",             ES: "Moderno",             FR: "Moderne",           KO: "모던",      JA: "モダン" },
    francesinha:  { EN: "Francesinha",      PT: "Francesinha",         ES: "Francesinha",         FR: "Francesinha",       KO: "프란세지냐", JA: "フランセジーニャ" },
    breakfast:    { EN: "Breakfast",        PT: "Pequeno-almoço",      ES: "Desayuno",            FR: "Petit-déjeuner",    KO: "조식",      JA: "朝食" },
    market:       { EN: "Market",           PT: "Mercado",             ES: "Mercado",             FR: "Marché",            KO: "시장",      JA: "マーケット" },
    gaia:         { EN: "Across the river", PT: "Outro lado do rio",   ES: "Otro lado del río",   FR: "Autre côté",        KO: "강 건너편",   JA: "川の対岸" },
    tower:        { EN: "Tower",            PT: "Torre",               ES: "Torre",               FR: "Tour",              KO: "탑",        JA: "塔" },
    bookshop:     { EN: "Bookshop",         PT: "Livraria",            ES: "Librería",            FR: "Librairie",         KO: "서점",      JA: "書店" },
    cathedral:    { EN: "Cathedral",        PT: "Catedral",            ES: "Catedral",            FR: "Cathédrale",        KO: "대성당",     JA: "大聖堂" },
    riverside:    { EN: "Riverside",        PT: "Beira-rio",           ES: "Junto al río",        FR: "Bord du fleuve",    KO: "강변",      JA: "川辺" },
    bridge:       { EN: "Bridge",           PT: "Ponte",               ES: "Puente",              FR: "Pont",              KO: "다리",      JA: "橋" },
    wine:         { EN: "Port wine",        PT: "Vinho do Porto",      ES: "Vino de Oporto",      FR: "Vin de Porto",      KO: "포트 와인",   JA: "ポートワイン" },
    tiles:        { EN: "Tiles",            PT: "Azulejos",            ES: "Azulejos",            FR: "Azulejos",          KO: "타일",      JA: "タイル" },
    street:       { EN: "Street",           PT: "Rua",                 ES: "Calle",               FR: "Rue",               KO: "거리",      JA: "通り" },
    avenue:       { EN: "Avenue",           PT: "Avenida",             ES: "Avenida",             FR: "Avenue",            KO: "대로",      JA: "大通り" },
    cafe:         { EN: "Café",             PT: "Café",                ES: "Café",                FR: "Café",              KO: "카페",      JA: "カフェ" },
    fado:         { EN: "Fado",             PT: "Fado",                ES: "Fado",                FR: "Fado",              KO: "파두",      JA: "ファド" },
    walkingTour:  { EN: "Walking tour",     PT: "Visita guiada",       ES: "Visita guiada",       FR: "Visite guidée",     KO: "도보 투어",   JA: "街歩きツアー" },
    dayTrip:      { EN: "Day trip",         PT: "Excursão",            ES: "Excursión",           FR: "Excursion",         KO: "당일 여행",   JA: "日帰りツアー" },
    minimarket:   { EN: "Mini-market",      PT: "Mercearia",           ES: "Tienda local",        FR: "Épicerie",          KO: "미니마트",    JA: "食料品店" },
    supermarket:  { EN: "Supermarket",      PT: "Supermercado",        ES: "Supermercado",        FR: "Supermarché",       KO: "슈퍼마켓",    JA: "スーパー" },
    laundry:      { EN: "Laundry",          PT: "Lavandaria",          ES: "Lavandería",          FR: "Laverie",           KO: "빨래방",    JA: "ランドリー" }
  },

  // 4 super-sections from Rita's guide. Each item: name + addr (canon), coords (approx), walk time,
  // optional reserveAhead flag, optional Rita note (translated), image (assets/recs/<slug>.jpg), subTag (slug → subTags above).
  // Apartment origin for walking-directions deep links: Rua de São Miguel 15 (41.143372, -8.616253).
  recommendations: [
    {
      id: "eat",
      title: { EN: "Eat & Drink",       PT: "Comer & Beber",        ES: "Comer & Beber",         FR: "Manger & Boire",         KO: "먹고 마시기",  JA: "食べる & 飲む" },
      kind:  { EN: "Where the locals still go, and where we go ourselves.",
               PT: "Onde os locais ainda vão, e onde nós vamos.",
               ES: "Donde aún van los locales, y donde vamos nosotros.",
               FR: "Où vont encore les locaux, et où nous allons aussi.",
               KO: "현지인들이 여전히 찾는 곳, 그리고 우리도 가는 곳.",
               JA: "地元の人がいまも通う場所、わたしたち自身が通う場所。" },
      items: [
        { id: "taberna-santo-antonio",  name: "Taberna Santo António",        addr: "R. das Virtudes 32, 4050-630 Porto",                                  coords: [41.1444, -8.6178], walk: "6 min",  subTag: "traditional", image: "assets/recs/taberna-santo-antonio.jpg" },
        { id: "taberna-davo",           name: "Taberna d'Avó",                 addr: "R. de São Bento da Vitória 48, 4050-542 Porto",                       coords: [41.1453, -8.6155], walk: "5 min",  subTag: "traditional", reserveAhead: true,  image: "assets/recs/taberna-davo.jpg" },
        { id: "casa-braganca",          name: "Casa Bragança",                 addr: "R. do Arquitecto Nicolau Nasoni 16, 4050-423 Porto",                  coords: [41.1462, -8.6147], walk: "6 min",  subTag: "traditional", image: "assets/recs/casa-braganca.jpg" },
        { id: "abadia-do-porto",        name: "Restaurante Abadia do Porto",   addr: "R. do Ateneu Comercial do Porto 22, 4000-380 Porto",                  coords: [41.1486, -8.6112], walk: "10 min", subTag: "traditional", reserveAhead: true,  image: "assets/recs/abadia-do-porto.jpg" },
        { id: "mistu",                  name: "MISTU",                         addr: "R. do Comércio do Porto 161, 4050-430 Porto",                         coords: [41.1416, -8.6148], walk: "8 min",  subTag: "modern",      reserveAhead: true,  image: "assets/recs/mistu.jpg" },
        { id: "cantinho-avillez",       name: "Cantinho do Avillez (Porto)",   addr: "R. de Mouzinho da Silveira 166, 4050-416 Porto",                      coords: [41.1426, -8.6131], walk: "6 min",  subTag: "modern",      reserveAhead: true,  image: "assets/recs/cantinho-avillez.jpg" },
        { id: "flow",                   name: "Flow",                          addr: "Rua da Conceição 63, 4050-215 Porto",                                 coords: [41.1471, -8.6168], walk: "6 min",  subTag: "modern",      reserveAhead: true,  image: "assets/recs/flow-porto.jpg" },
        { id: "the-door",               name: "The Door",                      addr: "Rua das Taipas 94–96, 4050-598 Porto",                                coords: [41.1452, -8.6162], walk: "3 min",  subTag: "modern",      reserveAhead: true,  image: "assets/recs/the-door-porto.jpg" },
        { id: "cafe-santiago",          name: "Café Santiago",                 addr: "R. de Passos Manuel 226, 4000-382 Porto",                             coords: [41.1492, -8.6079], walk: "12 min", subTag: "francesinha", image: "assets/recs/cafe-santiago.jpg" },
        { id: "brasao",                 name: "Brasão",                        addr: "R. de Ramalho Ortigão 28, 4000-407 Porto",                            coords: [41.1488, -8.6115], walk: "10 min", subTag: "francesinha", reserveAhead: true,  image: "assets/recs/brasao.jpg" },
        { id: "muralhas-olival",        name: "Muralhas Olival",               addr: "Campo dos Mártires da Pátria 117, 4050-367 Porto",                    coords: [41.1467, -8.6175], walk: "5 min",  subTag: "breakfast",   image: "assets/recs/muralhas-olival.jpg" },
        { id: "padaria-ribeiro",        name: "Padaria Ribeiro",               addr: "P. de Guilherme Gomes Fernandes 21, 4050-526 Porto",                  coords: [41.1478, -8.6128], walk: "8 min",  subTag: "breakfast",   image: "assets/recs/padaria-ribeiro.jpg" },
        { id: "time-out-market",        name: "Time-Out Market Porto",         addr: "Ala Sul da Estação Ferroviária de São Bento, Praça de Almeida Garrett", coords: [41.1456, -8.6105], walk: "10 min", subTag: "market",      image: "assets/recs/time-out-market.jpg" },
        { id: "pastel-bacalhau",        name: "Casa Portuguesa do Pastel de Bacalhau", addr: "Av. de Diogo Leite 122, 4400-111 Vila Nova de Gaia",          coords: [41.1390, -8.6097], walk: "15 min", subTag: "gaia",        image: "assets/recs/pastel-bacalhau.jpg" }
      ]
    },
    {
      id: "see",
      title: { EN: "See",        PT: "Ver",          ES: "Ver",          FR: "Voir",          KO: "둘러보기",     JA: "訪ねる" },
      kind:  { EN: "Iconic Porto, on foot.",
               PT: "O Porto icónico, a pé.",
               ES: "El Oporto icónico, a pie.",
               FR: "Le Porto iconique, à pied.",
               KO: "걸어서 만나는, 포르투의 상징.",
               JA: "歩いて出会う、ポルトの象徴。" },
      items: [
        { id: "clerigos",         name: "Torre dos Clérigos",            addr: "R. de São Filipe de Nery, 4050-546 Porto",   coords: [41.1453, -8.6131], walk: "3 min",  subTag: "tower",     image: "assets/recs/clerigos-tower.jpg" },
        { id: "lello",            name: "Livraria Lello",                addr: "R. das Carmelitas 144, 4050-161 Porto",      coords: [41.1466, -8.6149], walk: "5 min",  subTag: "bookshop",  reserveAhead: true,  image: "assets/recs/livraria-lello.jpg" },
        { id: "se",               name: "Sé Cathedral",                  addr: "Terreiro da Sé, 4050-573 Porto",             coords: [41.1431, -8.6112], walk: "8 min",  subTag: "cathedral", image: "assets/recs/se-cathedral.jpg" },
        { id: "ribeira",          name: "Ribeira",                       addr: "Cais da Ribeira, 4050-510 Porto",            coords: [41.1410, -8.6131], walk: "8 min",  subTag: "riverside", image: "assets/recs/ribeira.jpg",
          note: { EN: "Beautiful to walk through — we don't advise eating there because it's very touristic.",
                  PT: "Lindo para passear — não recomendamos comer aí porque é muito turístico.",
                  ES: "Precioso para pasear — no recomendamos comer allí porque es muy turístico.",
                  FR: "Magnifique pour s'y promener — on déconseille d'y manger, c'est trop touristique.",
                  KO: "걷기에는 아름답지만, 너무 관광지화되어 식사는 권하지 않습니다.",
                  JA: "散歩には素晴らしいですが、観光地化が進んでいるためお食事はおすすめしません。" } },
        { id: "ponte-luis",       name: "Dom Luís I Bridge",             addr: "Ponte Dom Luís I, Porto",                    coords: [41.1399, -8.6109], walk: "10 min", subTag: "bridge",    image: "assets/recs/ponte-dom-luis.jpg" },
        { id: "port-cellars",     name: "Port wine cellars",             addr: "Vila Nova de Gaia",                          coords: [41.1379, -8.6116], walk: "12 min", subTag: "wine",      image: "assets/recs/port-cellars.jpg" },
        { id: "sao-bento",        name: "Estação de São Bento",          addr: "Praça Almeida Garrett, 4000-069 Porto",      coords: [41.1456, -8.6101], walk: "5 min",  subTag: "tiles",     image: "assets/recs/sao-bento-station.jpg" },
        { id: "carmo",            name: "Igreja do Carmo",               addr: "R. do Carmo, 4050-164 Porto",                coords: [41.1474, -8.6142], walk: "5 min",  subTag: "tiles",     image: "assets/recs/igreja-do-carmo.jpg" },
        { id: "rua-flores",       name: "Rua das Flores",                addr: "Rua das Flores, Porto",                      coords: [41.1444, -8.6118], walk: "5 min",  subTag: "street",    image: "assets/recs/rua-das-flores.jpg" },
        { id: "mouzinho",         name: "R. de Mouzinho da Silveira",    addr: "R. de Mouzinho da Silveira, Porto",          coords: [41.1437, -8.6131], walk: "6 min",  subTag: "avenue",    image: "assets/recs/mouzinho-da-silveira.jpg" },
        { id: "aliados",          name: "Avenida dos Aliados",           addr: "Avenida dos Aliados, 4000-066 Porto",        coords: [41.1494, -8.6107], walk: "6 min",  subTag: "avenue",    image: "assets/recs/avenida-aliados.jpg" },
        { id: "bolhao",           name: "Mercado do Bolhão",             addr: "R. de Fernandes Tomás 506, 4000-211 Porto",  coords: [41.1494, -8.6072], walk: "10 min", subTag: "market",    image: "assets/recs/mercado-bolhao.jpg" },
        { id: "majestic",         name: "Café Majestic",                 addr: "R. de Santa Catarina 112, 4000-442 Porto",   coords: [41.1493, -8.6058], walk: "12 min", subTag: "cafe",      image: "assets/recs/cafe-majestic.jpg" }
      ]
    },
    {
      id: "do",
      title: { EN: "Do",      PT: "Fazer",   ES: "Hacer",    FR: "Faire",      KO: "체험하기",  JA: "体験する" },
      kind:  { EN: "A few hand-arranged things.",
               PT: "Algumas coisas feitas à medida.",
               ES: "Algunas cosas hechas a mano.",
               FR: "Quelques expériences soigneusement choisies.",
               KO: "정성껏 골라낸 몇 가지 경험.",
               JA: "心を込めて選んだ、いくつかの体験。" },
      items: [
        { id: "fado-real",        name: "Taberna Real do Fado",          addr: "R. do Dr. Barbosa de Castro 58, 4050-090 Porto", coords: [41.1455, -8.6172], walk: "4 min",  subTag: "fado",        reserveAhead: true,  image: "assets/recs/fado.jpg",
          note: { EN: "With dinner.",                       PT: "Com jantar.",                  ES: "Con cena.",                   FR: "Avec dîner.",               KO: "저녁 식사 포함.",  JA: "お食事と一緒に。" } },
        { id: "fado-mariquinhas", name: "Casa da Mariquinhas",           addr: "R. de São Sebastião 25, Porto",                coords: [41.1480, -8.6168], walk: "7 min",  subTag: "fado",        reserveAhead: true,  image: "assets/recs/fado.jpg",
          note: { EN: "With dinner.",                       PT: "Com jantar.",                  ES: "Con cena.",                   FR: "Avec dîner.",               KO: "저녁 식사 포함.",  JA: "お食事と一緒に。" } },
        { id: "fado-maior",       name: "Fado Maior do Porto",           addr: "Rua de Miragaia 54, 4050-386 Porto",           coords: [41.1421, -8.6203], walk: "9 min",  subTag: "fado",        reserveAhead: true,  image: "assets/recs/fado.jpg",
          note: { EN: "Afternoon performance, no dinner.",  PT: "Sessão à tarde, sem jantar.", ES: "Función por la tarde, sin cena.", FR: "Spectacle l'après-midi, sans dîner.", KO: "오후 공연, 식사 없음.", JA: "午後の公演、お食事なし。" } },
        { id: "civitatis",        name: "Civitatis · Free walking tour", addr: "civitatis.com",                                external: "https://www.civitatis.com/en/porto/", subTag: "walkingTour", reserveAhead: true,  image: "assets/recs/walking-tours.jpg" },
        { id: "guruwalk",         name: "GuruWalk · Free walking tour",  addr: "guruwalk.com",                                 external: "https://www.guruwalk.com/porto",     subTag: "walkingTour", reserveAhead: true,  image: "assets/recs/walking-tours.jpg" },
        { id: "douro-cruise",     name: "Day cruise · Douro Valley",     addr: "Book via GetYourGuide",                        external: "https://www.getyourguide.com/s/?q=douro+valley+from+porto", subTag: "dayTrip", reserveAhead: true,  image: "assets/recs/douro-valley.jpg" }
      ]
    },
    {
      id: "practical",
      title: { EN: "Practical",     PT: "Prático",        ES: "Práctico",        FR: "Pratique",        KO: "생활 정보",  JA: "暮らし" },
      kind:  { EN: "For longer stays.",
               PT: "Para estadias longas.",
               ES: "Para estancias largas.",
               FR: "Pour les longs séjours.",
               KO: "장기 투숙객을 위해.",
               JA: "長期滞在のために。" },
      items: [
        { id: "mercearia-garrett", name: "Mercearia Garrett",             addr: "R. do Dr. Barbosa de Castro 35, 4050-091 Porto", coords: [41.1453, -8.6171], walk: "4 min", subTag: "minimarket",
          note: { EN: "Ask for Lola.", PT: "Pergunte pela Lola.", ES: "Pregunta por Lola.", FR: "Demandez Lola.", KO: "롤라에게 물어보세요.", JA: "ロラさんに尋ねてみてください。" } },
        { id: "minipreco",         name: "Minipreço",                     addr: "Largo dos Lóios 46, 4050-338 Porto",            coords: [41.1465, -8.6116], walk: "7 min", subTag: "supermarket" },
        { id: "lavandaria",        name: "LavandaRIA Self-Service Laundry", addr: "Rua dos Caldeireiros 91, 4050-140 Porto",     coords: [41.1452, -8.6135], walk: "6 min", subTag: "laundry" }
      ]
    }
  ]
};


const VT_I18N = {
  EN: {
    nav: { stays: "Stays", story: "Our Story", porto: "Porto", recs: "Recommendations", contact: "Contact", book: "Book a stay" },
    hero: {
      title: "A quiet refuge\nin the heart of Porto.",
      sub: "Above the Douro. Apart from the crowd.",
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
    storyBody: [
      "The owner was born and raised on Rua da Vitória, the street that gives this house its name. Acquiring the building was a long-held dream; restoring it took close to three years. From the start, it mattered that the soul of the house remain — the cobalt doors, the granite stonework, the yellow and white tiles at the threshold, the wooden arches above the staircase, and the handrail you reach for, instinctively, on the way up.",
      "All of it preserved. All of it still here.",
      "Because the building sits in the UNESCO World Heritage centre, every phase of the renovation was overseen by an archaeological team. Several artefacts were uncovered along the way; a few small objects belonging to the owner's family were also brought in — a quiet conversation between past and present, on every floor."
    ],
    storyHeritage: [["19th c.", "Year built"], ["3 yrs", "Restoration"], ["UNESCO", "Heritage zone"]],
    portoLead: "We sit on Rua de São Miguel — a quiet granite street in the UNESCO old town, minutes from the Clérigos tower and the Douro.",
    portoAddressLabel: "Address",
    walkingDistances: [["3 min", "Clérigos Tower"], ["5 min", "Livraria Lello"], ["5 min", "São Bento Station"], ["8 min", "Ribeira & the Douro"], ["10 min", "Dom Luís I Bridge"], ["12 min", "Port lodges, Gaia"]],
    amenitiesIntro: "Everything below is included. No upsells, no add-ons at check-in.",
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
      filter: "Filter", all: "All", print: "Print this guide",
      showLess: "Show less", more: "more",
      whatsappEyebrow: "One more thing",
      whatsappTitle: "We're a WhatsApp away during your stay.",
      whatsappBody: "Reservations, last-minute table bookings, an umbrella if it rains — just write.",
      whatsappCta: "Open WhatsApp",
      tags: { Eat: "Eat", Shop: "Shop", Hear: "Hear", Practical: "Practical", Do: "Do" }
    },
    reviews: { acrossLabel: "across", reviewsLabel: "reviews", reviewsLabelOne: "review" },
    footer: { visit: "Visit", contact: "Contact", wander: "Wander", language: "Language", reserve: "Reserve a stay", tagline: "Direct booking always includes the best available rate, no fees, and a welcome basket." },
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
      title: "Um refúgio tranquilo\nno coração do Porto.",
      sub: "Sobre o Douro. Longe do bulício.",
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
    storyBody: [
      "O proprietário nasceu e cresceu na Rua da Vitória, a rua que dá nome a esta casa. Adquirir o edifício foi um sonho longamente acalentado; restaurá-lo levou cerca de três anos. Desde o início, era importante que a alma da casa permanecesse — as portas cobalto, a cantaria em granito, os azulejos amarelos e brancos da soleira, os arcos de madeira sobre a escadaria, e o corrimão em que se apoia, instintivamente, ao subir.",
      "Tudo preservado. Tudo ainda aqui.",
      "Por estar inserido no centro histórico classificado pela UNESCO, todas as fases da renovação foram acompanhadas por uma equipa arqueológica. Vários artefactos foram descobertos ao longo do caminho; alguns objetos pertencentes à família do proprietário foram também trazidos — uma conversa silenciosa entre o passado e o presente, em cada andar."
    ],
    storyHeritage: [["séc. XIX", "Ano de construção"], ["3 anos", "Restauro"], ["UNESCO", "Zona patrimonial"]],
    portoLead: "Estamos na Rua de São Miguel — uma rua de granito tranquila no centro histórico classificado pela UNESCO, a poucos minutos da Torre dos Clérigos e do Douro.",
    portoAddressLabel: "Morada",
    walkingDistances: [["3 min", "Torre dos Clérigos"], ["5 min", "Livraria Lello"], ["5 min", "Estação de São Bento"], ["8 min", "Ribeira & o Douro"], ["10 min", "Ponte Dom Luís I"], ["12 min", "Caves do Porto, Gaia"]],
    amenitiesIntro: "Tudo o que se segue está incluído. Sem custos adicionais, sem extras no check-in.",
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
      filter: "Filtrar", all: "Tudo", print: "Imprimir guia",
      showLess: "Ver menos", more: "mais",
      whatsappEyebrow: "Mais uma coisa",
      whatsappTitle: "Estamos a um WhatsApp de distância durante a sua estadia.",
      whatsappBody: "Reservas, marcações de última hora, um chapéu de chuva se chover — basta escrever.",
      whatsappCta: "Abrir WhatsApp",
      tags: { Eat: "Comer", Shop: "Comprar", Hear: "Ouvir", Practical: "Prático", Do: "Fazer" }
    },
    reviews: { acrossLabel: "em", reviewsLabel: "avaliações", reviewsLabelOne: "avaliação" },
    footer: { visit: "Visitar", contact: "Contactos", wander: "Explorar", language: "Idioma", reserve: "Reservar estadia", tagline: "A reserva directa inclui sempre a melhor tarifa disponível, sem comissões e com cesto de boas-vindas." },
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
      title: "Un refugio tranquilo\nen el corazón de Oporto.",
      sub: "Sobre el Duero. Lejos del bullicio.",
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
    storyBody: [
      "El propietario nació y se crio en la Rua da Vitória, la calle que da nombre a esta casa. Adquirir el edificio fue un sueño largamente acariciado; restaurarlo llevó casi tres años. Desde el principio, importó que el alma de la casa permaneciera — las puertas cobalto, la cantería de granito, los azulejos amarillos y blancos del umbral, los arcos de madera sobre la escalera, y el pasamanos al que uno se aferra, instintivamente, al subir.",
      "Todo conservado. Todo aún aquí.",
      "Por estar en el centro histórico declarado Patrimonio de la Humanidad por la UNESCO, todas las fases de la renovación fueron supervisadas por un equipo arqueológico. Se descubrieron varios artefactos durante el proceso; algunos pequeños objetos de la familia del propietario también se incorporaron — una conversación silenciosa entre el pasado y el presente, en cada planta."
    ],
    storyHeritage: [["s. XIX", "Año de construcción"], ["3 años", "Restauración"], ["UNESCO", "Zona patrimonial"]],
    portoLead: "Estamos en la Rua de São Miguel — una calle tranquila de granito en el casco antiguo declarado Patrimonio de la Humanidad, a pocos minutos de la Torre de los Clérigos y del Duero.",
    portoAddressLabel: "Dirección",
    walkingDistances: [["3 min", "Torre de los Clérigos"], ["5 min", "Librería Lello"], ["5 min", "Estación de São Bento"], ["8 min", "Ribera & el Duero"], ["10 min", "Puente D. Luís I"], ["12 min", "Bodegas de Oporto, Gaia"]],
    amenitiesIntro: "Todo lo siguiente está incluido. Sin extras, sin sorpresas al llegar.",
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
      filter: "Filtrar", all: "Todo", print: "Imprimir guía",
      showLess: "Ver menos", more: "más",
      whatsappEyebrow: "Una cosa más",
      whatsappTitle: "Estamos a un WhatsApp durante tu estancia.",
      whatsappBody: "Reservas, mesas de última hora, un paraguas si llueve — solo escríbenos.",
      whatsappCta: "Abrir WhatsApp",
      tags: { Eat: "Comer", Shop: "Comprar", Hear: "Escuchar", Practical: "Práctico", Do: "Hacer" }
    },
    reviews: { acrossLabel: "en", reviewsLabel: "reseñas", reviewsLabelOne: "reseña" },
    footer: { visit: "Visitar", contact: "Contacto", wander: "Explorar", language: "Idioma", reserve: "Reservar estancia", tagline: "La reserva directa siempre incluye la mejor tarifa, sin comisiones y con cesta de bienvenida." },
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
      title: "Un refuge paisible\nau cœur de Porto.",
      sub: "Au-dessus du Douro. À l'écart de la foule.",
      cta: "Voir les disponibilités", ctaAlt: "Voir les appartements"
    },
    secStay: { num: "i.", label: "Les Séjours", title: "Quatre appartements,\nquatre tempéraments." },
    secStory: { num: "ii.", label: "La Maison", title: "Une maison du XIXᵉ.\nRendue, lentement." },
    secPorto: { num: "iii.", label: "La Ville", title: "En bas, Porto." },
    secAmen: { num: "iv.", label: "Conforts Discrets", title: "Tout ce qu'il faut.\nRien de plus." },
    secReviews: { num: "vi.", label: "Ce que disent les hôtes", title: "Sur chaque plateforme,\nla même histoire." },
    apt: { perNight: "Par nuit, basse saison", reserve: "Réserver", guests: "voyageurs", bed: "lit", beds: "lits", bath: "salle de bain", baths: "salles de bain", from: "à partir de" },
    storyCaption: "Les portes des nº 15–17, restaurées dans leur cobalt d'origine",
    storyBody: [
      "Le propriétaire est né et a grandi sur la Rua da Vitória, la rue qui donne son nom à cette maison. Acquérir le bâtiment était un rêve longuement caressé ; le restaurer a pris près de trois ans. Dès le départ, il importait que l'âme de la maison demeure — les portes cobalt, la pierre de granit, les azulejos jaunes et blancs du seuil, les arches en bois au-dessus de l'escalier, et la rampe que l'on saisit, instinctivement, en montant.",
      "Tout est préservé. Tout est encore là.",
      "Parce que le bâtiment se trouve dans le centre historique classé au patrimoine mondial de l'UNESCO, chaque phase de la rénovation a été supervisée par une équipe archéologique. Plusieurs artefacts ont été mis au jour ; quelques petits objets appartenant à la famille du propriétaire ont aussi été apportés — une conversation discrète entre le passé et le présent, à chaque étage."
    ],
    storyHeritage: [["XIXᵉ s.", "Année de construction"], ["3 ans", "Restauration"], ["UNESCO", "Zone patrimoniale"]],
    portoLead: "Nous sommes Rua de São Miguel — une rue de granit paisible au cœur du Porto historique classé UNESCO, à quelques minutes de la Tour des Clercs et du Douro.",
    portoAddressLabel: "Adresse",
    walkingDistances: [["3 min", "Tour des Clercs"], ["5 min", "Librairie Lello"], ["5 min", "Gare de São Bento"], ["8 min", "Ribeira & le Douro"], ["10 min", "Pont D. Luís I"], ["12 min", "Caves à Porto, Gaia"]],
    amenitiesIntro: "Tout ce qui suit est inclus. Sans frais cachés, sans extras à l'arrivée.",
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
      filter: "Filtrer", all: "Tout", print: "Imprimer le guide",
      showLess: "Voir moins", more: "de plus",
      whatsappEyebrow: "Encore une chose",
      whatsappTitle: "Nous sommes à un WhatsApp pendant votre séjour.",
      whatsappBody: "Réservations, tables de dernière minute, un parapluie s'il pleut — écrivez-nous.",
      whatsappCta: "Ouvrir WhatsApp",
      tags: { Eat: "Manger", Shop: "Acheter", Hear: "Écouter", Practical: "Pratique", Do: "Faire" }
    },
    reviews: { acrossLabel: "sur", reviewsLabel: "avis", reviewsLabelOne: "avis" },
    footer: { visit: "Visiter", contact: "Contact", wander: "Flâner", language: "Langue", reserve: "Réserver un séjour", tagline: "La réservation directe inclut toujours le meilleur tarif disponible, sans frais et avec un panier d'accueil." },
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
  KO: {
    nav: { stays: "객실", story: "이 집", porto: "포르투", recs: "추천", contact: "문의", book: "예약하기" },
    hero: {
      title: "포르투 중심의\n조용한 안식처.",
      sub: "도루 강 위, 인파에서 한 걸음 떨어져.",
      cta: "예약 가능 확인", ctaAlt: "객실 보기"
    },
    secStay: { num: "i.", label: "객실", title: "네 개의 아파트,\n네 개의 분위기." },
    secStory: { num: "ii.", label: "이 집", title: "19세기 가옥,\n천천히 되살아났습니다." },
    secPorto: { num: "iii.", label: "도시", title: "아래로, 포르투." },
    secAmen: { num: "iv.", label: "조용한 편의", title: "필요한 모든 것,\n그 이상은 없이." },
    secReviews: { num: "vi.", label: "손님들의 이야기", title: "어느 플랫폼에서나,\n같은 이야기." },
    apt: { perNight: "1박 기준, 비수기", reserve: "예약", guests: "명", bed: "침대", beds: "침대", bath: "욕실", baths: "욕실", from: "부터" },
    storyCaption: "15–17번지의 문, 본래의 코발트색으로 복원되었습니다",
    storyBody: [
      "주인은 이 집에 이름을 준 거리, 히베이라 다 비토리아에서 태어나고 자랐습니다. 이 건물을 사들이는 것은 오래 품어온 꿈이었고, 복원에는 약 3년이 걸렸습니다. 처음부터 가장 중요했던 것은 집의 영혼을 그대로 두는 일이었습니다 — 코발트색 문, 화강암의 벽, 입구의 노랗고 흰 타일, 계단 위의 목조 아치, 그리고 오를 때 무심코 손이 가닿는 그 난간까지.",
      "모두 보존되었습니다. 모두 여기 있습니다.",
      "건물이 유네스코 세계유산 지구 안에 있어, 복원의 모든 단계는 고고학팀의 감독을 받았습니다. 작업 중 여러 유물이 발견되었으며, 가족이 간직해 온 작은 물건들도 함께 들였습니다 — 매 층마다, 과거와 현재가 조용히 나누는 대화입니다."
    ],
    storyHeritage: [["19세기", "건축 연도"], ["3년", "복원 기간"], ["UNESCO", "유산 구역"]],
    portoLead: "우리는 상 미겔 거리에 있습니다 — 유네스코 세계유산 구시가지의 조용한 화강암 거리, 클레리구스 탑과 도루 강에서 단 몇 분 거리.",
    portoAddressLabel: "주소",
    walkingDistances: [["3분", "클레리구스 탑"], ["5분", "렐루 서점"], ["5분", "상 벤투 역"], ["8분", "히베이라 & 도루 강"], ["10분", "동 루이스 1세 다리"], ["12분", "포트 와인 셀러, 가이아"]],
    amenitiesIntro: "아래의 모든 항목이 포함됩니다. 숨겨진 비용도, 체크인 시 추가 결제도 없습니다.",
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
      filter: "필터", all: "전체", print: "가이드 인쇄",
      showLess: "접기", more: "더 보기",
      whatsappEyebrow: "한 가지 더",
      whatsappTitle: "머무시는 동안, WhatsApp으로 언제든 연락 주세요.",
      whatsappBody: "예약, 갑작스러운 식당 자리, 비가 올 때 우산 — 메시지 한 통이면 됩니다.",
      whatsappCta: "WhatsApp 열기",
      tags: { Eat: "먹기", Shop: "장보기", Hear: "듣기", Practical: "생활", Do: "체험" }
    },
    reviews: { acrossLabel: "·", reviewsLabel: "건의 후기", reviewsLabelOne: "건의 후기" },
    footer: { visit: "방문", contact: "문의", wander: "둘러보기", language: "언어", reserve: "예약하기", tagline: "공식 예약은 항상 최저가가 보장되며, 수수료가 없고 웰컴 바스켓이 포함됩니다." },
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
  },
  JA: {
    nav: { stays: "客室", story: "このお家", porto: "ポルト", recs: "おすすめ", contact: "お問い合わせ", book: "ご予約" },
    hero: {
      title: "ポルトの中心に、\n静かな隠れ家。",
      sub: "ドウロ川の上、喧騒を離れて。",
      cta: "空室を確認", ctaAlt: "客室を見る"
    },
    secStay:    { num: "i.",  label: "客室",         title: "4つのアパートメント、\n4つの趣。" },
    secStory:   { num: "ii.", label: "このお家",       title: "19世紀の家。\nゆっくりと、よみがえりました。" },
    secPorto:   { num: "iii.",label: "街",           title: "眼下に、ポルト。" },
    secAmen:    { num: "iv.", label: "静かな心配り",   title: "必要なものすべて。\nそれ以上のものは何もなく。" },
    secReviews: { num: "vi.", label: "お客様の声",     title: "どの予約サイトでも、\n同じ物語。" },
    apt: { perNight: "1泊あたり、オフシーズン", reserve: "ご予約", guests: "名様", bed: "ベッド", beds: "ベッド", bath: "バスルーム", baths: "バスルーム", from: "より" },
    storyCaption: "15–17番地の扉、本来のコバルトブルーに修復されました",
    storyBody: [
      "オーナーは、この家に名を冠したヴィトリア通りで生まれ育ちました。この建物を手に入れることは長年の夢で、修復にはおよそ3年を要しました。最初から大切にしたのは、家の魂を残すこと——コバルトブルーの扉、花崗岩の石造り、入口の黄色と白のタイル、階段の上の木製アーチ、そして昇るときに思わず手をかける、あの手すりまで。",
      "すべて、保たれています。すべて、まだここに。",
      "建物がユネスコ世界遺産地区にあるため、修復のすべての段階は考古学チームの監督のもとで行われました。作業中にいくつもの遺物が発見され、オーナーの家族から受け継がれた小さな品々もそっと持ち込まれました——各階で、過去と現在が静かに対話しています。"
    ],
    storyHeritage: [["19世紀", "建築"], ["3年", "修復"], ["UNESCO", "遺産地区"]],
    portoLead: "わたしたちはサン・ミゲル通りに——ユネスコ世界遺産の旧市街にある静かな花崗岩の通りで、クレリゴスの塔とドウロ川から数分のところにあります。",
    portoAddressLabel: "住所",
    walkingDistances: [["3分", "クレリゴスの塔"], ["5分", "レロ書店"], ["5分", "サン・ベント駅"], ["8分", "リベイラ & ドウロ川"], ["10分", "ドン・ルイス1世橋"], ["12分", "ポートワイン蔵, ガイア"]],
    amenitiesIntro: "以下のすべてが含まれます。隠れた費用も、チェックイン時の追加料金もありません。",
    amenities: [
      { label: "コンシェルジュ",       note: "毎日 8時 → 20時" },
      { label: "ウェルカムバスケット", note: "ポートワイン、パステル・デ・ナタ、果物" },
      { label: "リネン",             note: "ポルトガル産コットン、滞在中半ばに交換" },
      { label: "暖房 & エアコン",     note: "部屋ごとに個別調節" },
      { label: "Wi-Fi",            note: "光ファイバー、全室" },
      { label: "セルフチェックイン",   note: "スマートロック、24時間" },
      { label: "設備の整ったキッチン", note: "ネスプレッソ、IH" },
      { label: "洗濯機 & 乾燥機",     note: "ペントハウス・デラックス専用" }
    ],
    recs: {
      eyebrow: "わたしたちのおすすめ",
      heading: "リタからの\n短い手紙。",
      byline: "「友人にすすめる場所であり、わたしたち自身が通う場所です。印刷して、保存して、何でも聞いてください。」 — R.",
      filter: "絞り込み", all: "すべて", print: "ガイドを印刷",
      showLess: "閉じる", more: "もっと見る",
      whatsappEyebrow: "もうひとつ",
      whatsappTitle: "ご滞在中、WhatsAppでいつでもご連絡ください。",
      whatsappBody: "ご予約、急な席の確保、雨が降ったら傘——メッセージひとつで結構です。",
      whatsappCta: "WhatsAppを開く",
      tags: { Eat: "食べる", Shop: "買う", Hear: "聴く", Practical: "暮らし", Do: "体験する" }
    },
    reviews: { acrossLabel: "·", reviewsLabel: "件のレビュー", reviewsLabelOne: "件のレビュー" },
    footer: { visit: "訪れる", contact: "お問い合わせ", wander: "散策", language: "言語", reserve: "ご予約", tagline: "公式予約は常に最低価格保証で、手数料なし、ウェルカムバスケット付きです。" },
    book: {
      title: "ご予約", sub: "公式予約 · 最低価格保証",
      checkin: "チェックイン", checkout: "チェックアウト", guests: "人数",
      apartment: "客室", any: "任意の客室", adult: "大人", adults: "大人",
      next: "次へ", back: "戻る", summary: "ご予約内容", nights: "泊",
      total: "合計", includes: "観光税・清掃料込み",
      details: "お客様情報", first: "名", last: "姓", emailL: "メールアドレス", phoneL: "電話番号",
      notes: "ご要望はございますか?", confirm: "予約を確定する",
      done: "予約が完了しました", doneSub: "確認メールをお送りしました →",
      doneNote: "1時間以内にリタからチェックインのご案内をお送りします。",
      close: "閉じる"
    }
  }
};

window.VT_DATA = VT_DATA;
window.VT_I18N = VT_I18N;
