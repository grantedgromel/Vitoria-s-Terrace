// Vitoria's Terrace: content and translations
// Globally exposes: VT_DATA, VT_I18N

const VT_DATA = {
  // Four apartment layouts (six apartments). `price` is the published low-season nightly rate in euros;
  // null means no rate is published, and the site shows "rate on request" instead of a number.
  apartments: [
    {
      id: "penthouse",
      sleeps: 4,
      beds: 2,
      baths: 2,
      sqm: 70,
      price: null,
      i18n: {
        EN: {
          name: "Penthouse · River View",
          tagline: "Top floor, with a terrace facing the river",
          description: "The top floor of the house, with a private terrace facing the Douro and the rooftops of Ribeira. Two bedrooms, two bathrooms and an open sitting room with kitchen. It is the largest apartment in the house and the quietest.",
          features: ["River view", "Private terrace", "King bed and queen bed", "Open-plan sitting room and kitchen"]
        },
        PT: {
          name: "Penthouse · Vista de rio",
          tagline: "Último piso, com terraço virado para o rio",
          description: "O último piso da casa, com terraço privado virado para o Douro e para os telhados da Ribeira. Dois quartos, duas casas de banho e uma sala com cozinha em espaço aberto. É o maior apartamento da casa e o mais sossegado.",
          features: ["Vista de rio", "Terraço privado", "Cama king e cama queen", "Sala e cozinha em espaço aberto"]
        },
        ES: {
          name: "Ático · Vistas al río",
          tagline: "Última planta, con terraza orientada al río",
          description: "Ocupa la última planta de la casa y tiene una terraza privada orientada al Duero y a los tejados de la Ribeira. Dos dormitorios, dos baños y un salón abierto con cocina. Es el apartamento más grande de la casa y el más tranquilo.",
          features: ["Vistas al río", "Terraza privada", "Cama king y cama queen", "Salón y cocina abiertos"]
        },
        FR: {
          name: "Penthouse · Vue fleuve",
          tagline: "Dernier étage, avec une terrasse face au fleuve",
          description: "Le dernier étage de la maison, avec une terrasse privée face au Douro et aux toits de la Ribeira. Deux chambres, deux salles de bains et un salon avec cuisine ouverte. C'est le plus grand appartement de la maison, et le plus calme.",
          features: ["Vue fleuve", "Terrasse privée", "Lit king size et lit queen size", "Salon et cuisine ouverts"]
        },
        KR: {
          name: "펜트하우스 · 강 전망",
          tagline: "강을 향한 테라스가 있는 최상층",
          description: "이 집의 최상층으로, 도루 강과 히베이라의 지붕들을 향한 전용 테라스가 있습니다. 침실 2개, 욕실 2개, 주방이 딸린 개방형 거실로 이루어져 있습니다. 이 집에서 가장 넓고 가장 조용한 객실입니다.",
          features: ["강 전망", "전용 테라스", "킹 침대와 퀸 침대", "오픈형 거실과 주방"]
        },
        JA: {
          name: "ペントハウス · 川の眺め",
          tagline: "最上階、川に面したテラス付き",
          description: "建物の最上階にあり、ドウロ川とリベイラの屋根並みを望む専用テラスがあります。寝室とバスルームが2室ずつあり、リビングはキッチン付きのオープンな空間です。館内で最も広く、最も静かなアパートメントです。",
          features: ["川の眺め", "専用テラス", "キングベッドとクイーンベッド", "オープンなリビングとキッチン"]
        }
      }
    },
    {
      id: "delux",
      sleeps: 3,
      beds: 1,
      baths: 1,
      sqm: 50,
      price: 100,
      i18n: {
        EN: {
          name: "Deluxe Apartment · River View",
          tagline: "One bedroom, with the river at the end of the street",
          description: "A one-bedroom apartment with a separate sitting room and kitchenette. A slatted pine partition follows the building's original carpentry. The window looks down the street to the Douro, and the sofa bed sleeps a third guest.",
          features: ["River view", "Queen bed and sofa bed", "Kitchenette", "Sitting room"]
        },
        PT: {
          name: "Apartamento Deluxe · Vista de rio",
          tagline: "Um quarto, com o rio ao fundo da rua",
          description: "Apartamento de um quarto, com sala de estar separada e kitchenette. Uma divisória em ripado de pinho segue o estilo da carpintaria original do edifício. Da janela vê-se a rua até ao Douro, e o sofá-cama acomoda um terceiro hóspede.",
          features: ["Vista de rio", "Cama queen e sofá-cama", "Kitchenette", "Sala de estar"]
        },
        ES: {
          name: "Apartamento Deluxe · Vistas al río",
          tagline: "Un dormitorio, con el río al final de la calle",
          description: "Apartamento de un dormitorio con salón independiente y kitchenette. Un tabique de listones de pino sigue el estilo de la carpintería original del edificio. La ventana mira calle abajo, hacia el Duero, y el sofá cama permite alojar a un tercer huésped.",
          features: ["Vistas al río", "Cama queen y sofá cama", "Kitchenette", "Salón"]
        },
        FR: {
          name: "Appartement Deluxe · Vue fleuve",
          tagline: "Une chambre, avec le fleuve au bout de la rue",
          description: "Un appartement d'une chambre avec un salon séparé et une kitchenette. Une cloison en pin à claire-voie reprend la menuiserie d'origine du bâtiment. La fenêtre donne sur la rue, avec le Douro au bout. Le canapé-lit permet d'accueillir une troisième personne.",
          features: ["Vue fleuve", "Lit queen size et canapé-lit", "Kitchenette", "Salon"]
        },
        KR: {
          name: "디럭스 아파트 · 강 전망",
          tagline: "침실 1개, 길 끝으로 강이 보이는 객실",
          description: "별도의 거실과 간이 주방이 있는 침실 1개 아파트입니다. 소나무 살창 칸막이는 건물 본래의 목공 양식을 따른 것입니다. 창에서는 길을 따라 도루 강까지 보이며, 소파베드가 있어 세 번째 투숙객도 묵을 수 있습니다.",
          features: ["강 전망", "퀸 침대와 소파베드", "간이 주방", "거실"]
        },
        JA: {
          name: "デラックス · 川の眺め",
          tagline: "1ベッドルーム、通りの先に川",
          description: "独立したリビングと簡易キッチンのある1ベッドルームのアパートメントです。松材の格子の間仕切りは、建物にもともとある木工に倣ったものです。窓からは通りの先にドウロ川が見え、ソファベッドを使えば3人目の方も宿泊できます。",
          features: ["川の眺め", "クイーンベッドとソファベッド", "簡易キッチン", "リビング"]
        }
      }
    },
    {
      id: "studio",
      sleeps: 2,
      beds: 1,
      baths: 1,
      sqm: 35,
      price: null,
      i18n: {
        EN: {
          name: "Studio · City View",
          tagline: "Studio with a green tile kitchen floor",
          description: "A compact studio with a hand-laid green and grey cement-tile kitchen floor. Tall French windows look over the old town, and there is a reading seat in the window recess.",
          features: ["City view", "Queen bed", "Tiled kitchen", "Reading seat"]
        },
        PT: {
          name: "Estúdio · Vista de cidade",
          tagline: "Estúdio com chão de mosaico verde na cozinha",
          description: "Um estúdio compacto, com o chão da cozinha em mosaico hidráulico verde e cinzento, assente à mão. Janelas de sacada altas dão para o centro histórico, e há um cantinho de leitura no vão da janela.",
          features: ["Vista de cidade", "Cama queen", "Cozinha em mosaico", "Cantinho de leitura"]
        },
        ES: {
          name: "Estudio · Vistas a la ciudad",
          tagline: "Estudio con suelo de baldosa verde en la cocina",
          description: "Un estudio compacto, con el suelo de la cocina de baldosa hidráulica verde y gris colocada a mano. Los ventanales altos dan al casco antiguo y en el hueco de la ventana hay un rincón de lectura.",
          features: ["Vistas a la ciudad", "Cama queen", "Cocina con baldosa", "Rincón de lectura"]
        },
        FR: {
          name: "Studio · Vue ville",
          tagline: "Studio avec carrelage vert dans la cuisine",
          description: "Un studio compact, avec un sol de cuisine en carreaux de ciment verts et gris posés à la main. De hautes portes-fenêtres donnent sur la vieille ville, et un coin lecture est aménagé dans l'embrasure de la fenêtre.",
          features: ["Vue ville", "Lit queen size", "Cuisine carrelée", "Coin lecture"]
        },
        KR: {
          name: "스튜디오 · 도시 전망",
          tagline: "주방 바닥에 초록색 타일을 깐 스튜디오",
          description: "아담한 스튜디오로, 주방 바닥에 초록색과 회색 시멘트 타일을 손으로 깔았습니다. 높은 프렌치 창으로 구시가지가 보이며, 창가의 움푹 들어간 공간에 책을 읽을 수 있는 자리가 있습니다.",
          features: ["도시 전망", "퀸 침대", "타일 주방", "독서 자리"]
        },
        JA: {
          name: "スタジオ · 街の眺め",
          tagline: "キッチンの床に緑のタイルを敷いたスタジオ",
          description: "コンパクトなスタジオで、キッチンの床には緑とグレーのセメントタイルを手作業で敷いています。背の高いフレンチウィンドウから旧市街を見渡せ、窓辺のくぼみには読書スペースがあります。",
          features: ["街の眺め", "クイーンベッド", "タイル張りのキッチン", "読書スペース"]
        }
      }
    },
    {
      id: "loft",
      sleeps: 2,
      beds: 1,
      baths: 1,
      sqm: 42,
      price: 95,
      i18n: {
        EN: {
          name: "Loft · Street View",
          tagline: "Upper floor, over Rua de São Miguel",
          description: "An upper-floor loft with two windows onto the granite street below. Kitchen, dining and sitting area share one open room, and the bedroom sits behind an original interior arch.",
          features: ["Street view", "Queen bed", "Open kitchen", "Original arch"]
        },
        PT: {
          name: "Loft · Vista de rua",
          tagline: "Piso superior, sobre a Rua de São Miguel",
          description: "Loft no piso superior com duas janelas para a rua de granito. Cozinha, zona de refeições e sala partilham um único espaço aberto, e o quarto fica por trás de um arco interior original.",
          features: ["Vista de rua", "Cama queen", "Cozinha aberta", "Arco original"]
        },
        ES: {
          name: "Loft · Vistas a la calle",
          tagline: "Planta alta, sobre la Rua de São Miguel",
          description: "Un loft en planta alta con dos ventanas que dan a la calle de granito. La cocina, el comedor y el salón comparten un mismo espacio abierto, y el dormitorio queda detrás de un arco interior original.",
          features: ["Vistas a la calle", "Cama queen", "Cocina abierta", "Arco original"]
        },
        FR: {
          name: "Loft · Vue rue",
          tagline: "Étage supérieur, au-dessus de la Rua de São Miguel",
          description: "Un loft à l'étage supérieur, avec deux fenêtres sur la rue de granit en contrebas. La cuisine, le coin repas et le salon forment une seule pièce ouverte, et la chambre se trouve derrière une arche intérieure d'origine.",
          features: ["Vue rue", "Lit queen size", "Cuisine ouverte", "Arche d'origine"]
        },
        KR: {
          name: "로프트 · 거리 전망",
          tagline: "상 미겔 거리가 내려다보이는 위층",
          description: "위층에 있는 로프트로, 화강암이 깔린 아래쪽 거리를 향해 창이 두 개 나 있습니다. 주방, 식사 공간, 거실이 하나로 트인 공간에 있고, 침실은 원래의 실내 아치 뒤에 있습니다.",
          features: ["거리 전망", "퀸 침대", "오픈 주방", "원래의 아치"]
        },
        JA: {
          name: "ロフト · 通りの眺め",
          tagline: "サン・ミゲル通りに面した上階",
          description: "上階にあるロフトで、2つの窓から花崗岩の石畳の通りを見下ろせます。キッチン、ダイニング、リビングはひと続きの空間で、寝室は建物本来の室内アーチの奥にあります。",
          features: ["通りの眺め", "クイーンベッド", "オープンキッチン", "建物本来のアーチ"]
        }
      }
    }
  ],

  // Interior photos, shown together. Not assigned to apartments until the owner confirms which is which.
  gallery: [
    "assets/master-bed.jpg",
    "assets/living-window.jpg",
    "assets/window-view.jpg",
    "assets/armchairs.jpg",
    "assets/living-slats.jpg",
    "assets/bed-slats.jpg",
    "assets/sofa-detail.jpg",
    "assets/kitchen-dining.jpg",
    "assets/kitchen-light.jpg",
    "assets/kitchen-tiles.jpg",
    "assets/bath-tiles.jpg",
    "assets/bath-detail.jpg"
  ],

  // Scores as listed on each platform's public page (October 2026). Review counts are left out
  // because they change weekly. Hotels.com and Expedia share one Expedia Group review pool.
  reviewScores: [
    { platform: "Booking.com", score: "9.8", outOf: "10", url: "https://www.booking.com/hotel/pt/vitorias-terrace.html" },
    {
      platform: "Tripadvisor",
      score: "5.0",
      outOf: "5",
      url: "https://www.tripadvisor.com/Hotel_Review-g189180-d25050275-Reviews-Vitoria_s_Terrace_Apartments-Porto_Porto_District_Northern_Portugal.html"
    },
    {
      platform: "Trip.com",
      score: "9.8",
      outOf: "10",
      url: "https://us.trip.com/hotels/porto-hotel-detail-58614427/vitoria-s-terrace-apartments/"
    },
    {
      platform: "Hotels.com / Expedia",
      score: "10",
      outOf: "10",
      url: "https://www.hotels.com/ho1484023040/vitoria-s-terrace-apartments-porto-portugal/"
    }
  ],

  // `rnal`: Alojamento Local registration numbers as listed on the property's Booking.com page.
  // Check them against the RNAL registry (registos.turismodeportugal.pt) before relying on them.
  meta: {
    address: "Rua de São Miguel 15 · 4050-560 Porto",
    phone: "+351 960 178 336",
    whatsapp: "351960178336",
    email: "info@vitoriasterraceapartments.com",
    instagram: "@vitoriasterrace",
    rnal: ["105689/AL", "105690/AL", "105692/AL", "105693/AL", "105694/AL", "105695/AL"]
  },

  // Shared sub-tag dictionary: recommendation items reference a slug and the label is looked up here.
  subTags: {
    traditional: { EN: "Traditional", PT: "Tradicional", ES: "Tradicional", FR: "Traditionnel", KR: "전통", JA: "伝統的" },
    modern: { EN: "Modern", PT: "Moderno", ES: "Moderno", FR: "Moderne", KR: "모던", JA: "モダン" },
    francesinha: { EN: "Francesinha", PT: "Francesinha", ES: "Francesinha", FR: "Francesinha", KR: "프란세지냐", JA: "フランセジーニャ" },
    breakfast: { EN: "Breakfast", PT: "Pequeno-almoço", ES: "Desayuno", FR: "Petit-déjeuner", KR: "조식", JA: "朝食" },
    market: { EN: "Market", PT: "Mercado", ES: "Mercado", FR: "Marché", KR: "시장", JA: "マーケット" },
    gaia: { EN: "Across the river", PT: "Outro lado do rio", ES: "Otro lado del río", FR: "Sur l'autre rive", KR: "강 건너편", JA: "川の対岸" },
    tower: { EN: "Tower", PT: "Torre", ES: "Torre", FR: "Tour", KR: "탑", JA: "塔" },
    bookshop: { EN: "Bookshop", PT: "Livraria", ES: "Librería", FR: "Librairie", KR: "서점", JA: "書店" },
    cathedral: { EN: "Cathedral", PT: "Catedral", ES: "Catedral", FR: "Cathédrale", KR: "대성당", JA: "大聖堂" },
    riverside: { EN: "Riverside", PT: "Beira-rio", ES: "Junto al río", FR: "Bord du fleuve", KR: "강변", JA: "川辺" },
    bridge: { EN: "Bridge", PT: "Ponte", ES: "Puente", FR: "Pont", KR: "다리", JA: "橋" },
    wine: { EN: "Port wine", PT: "Vinho do Porto", ES: "Vino de Oporto", FR: "Vin de Porto", KR: "포트 와인", JA: "ポートワイン" },
    tiles: { EN: "Tiles", PT: "Azulejos", ES: "Azulejos", FR: "Azulejos", KR: "아줄레주", JA: "アズレージョ" },
    street: { EN: "Street", PT: "Rua", ES: "Calle", FR: "Rue", KR: "거리", JA: "通り" },
    avenue: { EN: "Avenue", PT: "Avenida", ES: "Avenida", FR: "Avenue", KR: "대로", JA: "大通り" },
    cafe: { EN: "Café", PT: "Café", ES: "Café", FR: "Café", KR: "카페", JA: "カフェ" },
    fado: { EN: "Fado", PT: "Fado", ES: "Fado", FR: "Fado", KR: "파두", JA: "ファド" },
    walkingTour: { EN: "Walking tour", PT: "Visita guiada", ES: "Visita guiada", FR: "Visite guidée", KR: "도보 투어", JA: "街歩きツアー" },
    dayTrip: { EN: "Day trip", PT: "Excursão", ES: "Excursión", FR: "Excursion", KR: "당일 여행", JA: "日帰りツアー" },
    minimarket: { EN: "Mini-market", PT: "Mercearia", ES: "Tienda local", FR: "Épicerie", KR: "미니마트", JA: "食料品店" },
    supermarket: { EN: "Supermarket", PT: "Supermercado", ES: "Supermercado", FR: "Supermarché", KR: "슈퍼마켓", JA: "スーパー" },
    laundry: { EN: "Laundry", PT: "Lavandaria", ES: "Lavandería", FR: "Laverie", KR: "빨래방", JA: "ランドリー" }
  },

  // Rita's guide in four sections. Each item: name + addr (plain, or per-locale where the name translates),
  // approximate coords, walking time,
  // optional reserveAhead flag, optional translated note, subTag slug, and an image for the See section only.
  // Walking-direction links start from Rua de São Miguel 15 (41.1428, -8.6155).
  recommendations: [
    {
      id: "eat",
      title: { EN: "Eat and drink", PT: "Comer e beber", ES: "Comer y beber", FR: "Manger et boire", KR: "먹고 마시기", JA: "食べる・飲む" },
      kind: {
        EN: "Mostly Portuguese cooking, all within a short walk.",
        PT: "Sobretudo cozinha portuguesa, tudo a poucos minutos a pé.",
        ES: "Sobre todo cocina portuguesa, todo a pocos minutos a pie.",
        FR: "Surtout de la cuisine portugaise, à quelques minutes à pied.",
        KR: "대부분 포르투갈 요리이며, 모두 걸어서 갈 수 있습니다.",
        JA: "主にポルトガル料理の店で、どこも徒歩圏内です。"
      },
      items: [
        {
          id: "taberna-santo-antonio",
          name: "Taberna Santo António",
          addr: "R. das Virtudes 32, 4050-630 Porto",
          coords: [41.1444, -8.6178],
          walk: "6 min",
          subTag: "traditional"
        },
        {
          id: "taberna-davo",
          name: "Taberna d'Avó",
          addr: "R. de São Bento da Vitória 48, 4050-542 Porto",
          coords: [41.1453, -8.6155],
          walk: "5 min",
          subTag: "traditional",
          reserveAhead: true
        },
        {
          id: "casa-braganca",
          name: "Casa Bragança",
          addr: "R. do Arquitecto Nicolau Nasoni 16, 4050-423 Porto",
          coords: [41.1462, -8.6147],
          walk: "6 min",
          subTag: "traditional"
        },
        {
          id: "abadia-do-porto",
          name: "Restaurante Abadia do Porto",
          addr: "R. do Ateneu Comercial do Porto 22, 4000-380 Porto",
          coords: [41.1486, -8.6112],
          walk: "10 min",
          subTag: "traditional",
          reserveAhead: true
        },
        {
          id: "mistu",
          name: "MISTU",
          addr: "R. do Comércio do Porto 161, 4050-430 Porto",
          coords: [41.1416, -8.6148],
          walk: "8 min",
          subTag: "modern",
          reserveAhead: true
        },
        {
          id: "cantinho-avillez",
          name: "Cantinho do Avillez (Porto)",
          addr: "R. de Mouzinho da Silveira 166, 4050-416 Porto",
          coords: [41.1426, -8.6131],
          walk: "6 min",
          subTag: "modern",
          reserveAhead: true
        },
        {
          id: "flow",
          name: "Flow",
          addr: "Rua da Conceição 63, 4050-215 Porto",
          coords: [41.1471, -8.6168],
          walk: "6 min",
          subTag: "modern",
          reserveAhead: true
        },
        {
          id: "the-door",
          name: "The Door",
          addr: "Rua das Taipas 94-96, 4050-598 Porto",
          coords: [41.1452, -8.6162],
          walk: "3 min",
          subTag: "modern",
          reserveAhead: true
        },
        {
          id: "cafe-santiago",
          name: "Café Santiago",
          addr: "R. de Passos Manuel 226, 4000-382 Porto",
          coords: [41.1492, -8.6079],
          walk: "12 min",
          subTag: "francesinha"
        },
        {
          id: "brasao",
          name: "Brasão",
          addr: "R. de Ramalho Ortigão 28, 4000-407 Porto",
          coords: [41.1488, -8.6115],
          walk: "10 min",
          subTag: "francesinha",
          reserveAhead: true
        },
        {
          id: "muralhas-olival",
          name: "Muralhas Olival",
          addr: "Campo dos Mártires da Pátria 117, 4050-367 Porto",
          coords: [41.1467, -8.6175],
          walk: "5 min",
          subTag: "breakfast"
        },
        {
          id: "padaria-ribeiro",
          name: "Padaria Ribeiro",
          addr: "P. de Guilherme Gomes Fernandes 21, 4050-526 Porto",
          coords: [41.1478, -8.6128],
          walk: "8 min",
          subTag: "breakfast"
        },
        {
          id: "time-out-market",
          name: "Time Out Market Porto",
          addr: "Ala Sul da Estação Ferroviária de São Bento, Praça de Almeida Garrett",
          coords: [41.1456, -8.6105],
          walk: "10 min",
          subTag: "market"
        },
        {
          id: "pastel-bacalhau",
          name: "Casa Portuguesa do Pastel de Bacalhau",
          addr: "Av. de Diogo Leite 122, 4400-111 Vila Nova de Gaia",
          coords: [41.139, -8.6097],
          walk: "15 min",
          subTag: "gaia"
        }
      ]
    },
    {
      id: "see",
      title: { EN: "See", PT: "Ver", ES: "Ver", FR: "Voir", KR: "볼거리", JA: "見る" },
      kind: {
        EN: "The well-known sights, all within walking distance.",
        PT: "Os pontos de interesse mais conhecidos, todos acessíveis a pé.",
        ES: "Los lugares más conocidos, todos a poca distancia a pie.",
        FR: "Les sites célèbres, tous accessibles à pied.",
        KR: "잘 알려진 명소들로, 모두 걸어서 갈 수 있습니다.",
        JA: "よく知られた名所で、どれも徒歩圏内です。"
      },
      items: [
        {
          id: "clerigos",
          name: {
            EN: "Clérigos Tower",
            PT: "Torre dos Clérigos",
            ES: "Torre de los Clérigos",
            FR: "Tour des Clérigos",
            KR: "클레리구스 탑",
            JA: "クレリゴスの塔"
          },
          addr: "R. de São Filipe de Nery, 4050-546 Porto",
          coords: [41.1453, -8.6131],
          walk: "3 min",
          subTag: "tower",
          image: "assets/recs/clerigos-tower.jpg"
        },
        {
          id: "lello",
          name: { EN: "Livraria Lello", PT: "Livraria Lello", ES: "Livraria Lello", FR: "Livraria Lello", KR: "렐루 서점", JA: "レロ書店" },
          addr: "R. das Carmelitas 144, 4050-161 Porto",
          coords: [41.1466, -8.6149],
          walk: "5 min",
          subTag: "bookshop",
          reserveAhead: true,
          image: "assets/recs/livraria-lello.jpg"
        },
        {
          id: "se",
          name: { EN: "Sé Cathedral", PT: "Sé do Porto", ES: "Catedral de Oporto", FR: "Cathédrale de Porto (Sé)", KR: "포르투 대성당", JA: "ポルト大聖堂" },
          addr: "Terreiro da Sé, 4050-573 Porto",
          coords: [41.1431, -8.6112],
          walk: "8 min",
          subTag: "cathedral",
          image: "assets/recs/se-cathedral.jpg"
        },
        {
          id: "ribeira",
          name: { EN: "Ribeira", PT: "Ribeira", ES: "Ribeira", FR: "Ribeira", KR: "히베이라", JA: "リベイラ" },
          addr: "Cais da Ribeira, 4050-510 Porto",
          coords: [41.141, -8.6131],
          walk: "8 min",
          subTag: "riverside",
          image: "assets/recs/ribeira.jpg",
          note: {
            EN: "Beautiful for a walk. We don't recommend eating there, because it is very touristy.",
            PT: "Bonita para passear. Não recomendamos comer lá, porque é muito turística.",
            ES: "Preciosa para pasear. No recomendamos comer allí porque es muy turística.",
            FR: "Un beau quartier pour se promener. Nous déconseillons d'y manger, car c'est très touristique.",
            KR: "산책하기에는 아름답지만, 관광객이 매우 많은 곳이라 식사는 권하지 않습니다.",
            JA: "散歩するにはきれいな場所です。ただし観光地化が進んでいるため、食事はおすすめしません。"
          }
        },
        {
          id: "ponte-luis",
          name: {
            EN: "Dom Luís I Bridge",
            PT: "Ponte Dom Luís I",
            ES: "Puente Dom Luís I",
            FR: "Pont Dom Luís I",
            KR: "동 루이스 1세 다리",
            JA: "ドン・ルイス1世橋"
          },
          addr: "Ponte Dom Luís I, Porto",
          coords: [41.1399, -8.6109],
          walk: "10 min",
          subTag: "bridge",
          image: "assets/recs/ponte-dom-luis.jpg"
        },
        {
          id: "port-cellars",
          name: {
            EN: "Port wine cellars",
            PT: "Caves do vinho do Porto",
            ES: "Bodegas de vino de Oporto",
            FR: "Caves de porto",
            KR: "포트 와인 셀러",
            JA: "ポートワインセラー"
          },
          addr: "Vila Nova de Gaia",
          coords: [41.1379, -8.6116],
          walk: "12 min",
          subTag: "wine",
          image: "assets/recs/port-tasting.jpg"
        },
        {
          id: "sao-bento",
          name: {
            EN: "São Bento Station",
            PT: "Estação de São Bento",
            ES: "Estación de São Bento",
            FR: "Gare de São Bento",
            KR: "상 벤투 역",
            JA: "サン・ベント駅"
          },
          addr: "Praça Almeida Garrett, 4000-069 Porto",
          coords: [41.1456, -8.6101],
          walk: "5 min",
          subTag: "tiles",
          image: "assets/recs/sao-bento-station.jpg"
        },
        {
          id: "carmo",
          name: { EN: "Igreja do Carmo", PT: "Igreja do Carmo", ES: "Igreja do Carmo", FR: "Igreja do Carmo", KR: "카르무 성당", JA: "カルモ教会" },
          addr: "R. do Carmo, 4050-164 Porto",
          coords: [41.1474, -8.6142],
          walk: "5 min",
          subTag: "tiles",
          image: "assets/recs/igreja-do-carmo.jpg"
        },
        {
          id: "rua-flores",
          name: { EN: "Rua das Flores", PT: "Rua das Flores", ES: "Rua das Flores", FR: "Rua das Flores", KR: "플로레스 거리", JA: "フローレス通り" },
          addr: "Rua das Flores, Porto",
          coords: [41.1444, -8.6118],
          walk: "5 min",
          subTag: "street",
          image: "assets/recs/rua-das-flores.jpg"
        },
        {
          id: "mouzinho",
          name: {
            EN: "R. de Mouzinho da Silveira",
            PT: "R. de Mouzinho da Silveira",
            ES: "R. de Mouzinho da Silveira",
            FR: "R. de Mouzinho da Silveira",
            KR: "무지뉴 다 실베이라 거리",
            JA: "ムジーニョ・ダ・シルヴェイラ通り"
          },
          addr: "R. de Mouzinho da Silveira, Porto",
          coords: [41.1437, -8.6131],
          walk: "6 min",
          subTag: "street",
          image: "assets/recs/mouzinho-da-silveira.jpg"
        },
        {
          id: "aliados",
          name: {
            EN: "Avenida dos Aliados",
            PT: "Avenida dos Aliados",
            ES: "Avenida dos Aliados",
            FR: "Avenida dos Aliados",
            KR: "알리아도스 대로",
            JA: "アリアードス大通り"
          },
          addr: "Avenida dos Aliados, 4000-066 Porto",
          coords: [41.1494, -8.6107],
          walk: "6 min",
          subTag: "avenue",
          image: "assets/recs/avenida-aliados.jpg"
        },
        {
          id: "bolhao",
          name: { EN: "Mercado do Bolhão", PT: "Mercado do Bolhão", ES: "Mercado do Bolhão", FR: "Mercado do Bolhão", KR: "볼량 시장", JA: "ボリャオン市場" },
          addr: "R. de Fernandes Tomás 506, 4000-211 Porto",
          coords: [41.1494, -8.6072],
          walk: "10 min",
          subTag: "market",
          image: "assets/recs/mercado-bolhao.jpg"
        },
        {
          id: "majestic",
          name: { EN: "Café Majestic", PT: "Café Majestic", ES: "Café Majestic", FR: "Café Majestic", KR: "마제스틱 카페", JA: "カフェ・マジェスティック" },
          addr: "R. de Santa Catarina 112, 4000-442 Porto",
          coords: [41.1493, -8.6058],
          walk: "12 min",
          subTag: "cafe",
          image: "assets/recs/cafe-majestic.jpg"
        }
      ]
    },
    {
      id: "do",
      title: { EN: "Do", PT: "Fazer", ES: "Hacer", FR: "Faire", KR: "할 거리", JA: "体験する" },
      kind: {
        EN: "Fado, walking tours and a day on the Douro.",
        PT: "Fado, visitas guiadas a pé e um dia no Douro.",
        ES: "Fado, visitas guiadas a pie y un día en el Duero.",
        FR: "Fado, visites guidées à pied et une journée sur le Douro.",
        KR: "파두, 도보 투어, 도루 강에서의 하루.",
        JA: "ファド、街歩きツアー、ドウロ川で過ごす1日。"
      },
      items: [
        {
          id: "fado-real",
          name: "Taberna Real do Fado",
          addr: "R. do Dr. Barbosa de Castro 58, 4050-090 Porto",
          coords: [41.1455, -8.6172],
          walk: "4 min",
          subTag: "fado",
          reserveAhead: true,
          note: { EN: "With dinner.", PT: "Com jantar.", ES: "Con cena.", FR: "Avec dîner.", KR: "저녁 식사 포함.", JA: "ディナー付き。" }
        },
        {
          id: "fado-mariquinhas",
          name: "Casa da Mariquinhas",
          addr: "R. de São Sebastião 25, Porto",
          coords: [41.148, -8.6168],
          walk: "7 min",
          subTag: "fado",
          reserveAhead: true,
          note: { EN: "With dinner.", PT: "Com jantar.", ES: "Con cena.", FR: "Avec dîner.", KR: "저녁 식사 포함.", JA: "ディナー付き。" }
        },
        {
          id: "fado-maior",
          name: "Fado Maior do Porto",
          addr: "Rua de Miragaia 54, 4050-386 Porto",
          coords: [41.1421, -8.6203],
          walk: "9 min",
          subTag: "fado",
          reserveAhead: true,
          note: {
            EN: "Afternoon performance, no dinner.",
            PT: "Sessão à tarde, sem jantar.",
            ES: "Función por la tarde, sin cena.",
            FR: "Spectacle l'après-midi, sans dîner.",
            KR: "오후 공연, 식사 없음.",
            JA: "午後の公演、お食事なし。"
          }
        },
        {
          id: "civitatis",
          name: {
            EN: "Civitatis · Free walking tour",
            PT: "Civitatis · Free tour a pé",
            ES: "Civitatis · Free tour a pie",
            FR: "Civitatis · Visite guidée gratuite",
            KR: "Civitatis · 무료 도보 투어",
            JA: "Civitatis · 無料ウォーキングツアー"
          },
          addr: "civitatis.com",
          external: "https://www.civitatis.com/en/porto/",
          subTag: "walkingTour",
          reserveAhead: true
        },
        {
          id: "guruwalk",
          name: {
            EN: "GuruWalk · Free walking tour",
            PT: "GuruWalk · Free tour a pé",
            ES: "GuruWalk · Free tour a pie",
            FR: "GuruWalk · Visite guidée gratuite",
            KR: "GuruWalk · 무료 도보 투어",
            JA: "GuruWalk · 無料ウォーキングツアー"
          },
          addr: "guruwalk.com",
          external: "https://www.guruwalk.com/porto",
          subTag: "walkingTour",
          reserveAhead: true
        },
        {
          id: "douro-cruise",
          name: {
            EN: "Day cruise · Douro Valley",
            PT: "Cruzeiro de um dia · Vale do Douro",
            ES: "Crucero de un día · Valle del Duero",
            FR: "Croisière d'une journée · Vallée du Douro",
            KR: "당일 크루즈 · 도루 밸리",
            JA: "日帰りクルーズ · ドウロ渓谷"
          },
          addr: {
            EN: "Book via GetYourGuide",
            PT: "Reserva através do GetYourGuide",
            ES: "Reserva a través de GetYourGuide",
            FR: "Réservation via GetYourGuide",
            KR: "GetYourGuide에서 예약",
            JA: "GetYourGuideで予約"
          },
          external: "https://www.getyourguide.com/s/?q=douro+valley+from+porto",
          subTag: "dayTrip",
          reserveAhead: true
        }
      ]
    },
    {
      id: "practical",
      title: { EN: "Practical", PT: "Prático", ES: "Práctico", FR: "Pratique", KR: "생활 정보", JA: "実用情報" },
      kind: {
        EN: "For longer stays.",
        PT: "Para estadias mais longas.",
        ES: "Para estancias largas.",
        FR: "Pour les longs séjours.",
        KR: "장기 투숙객을 위한 정보입니다.",
        JA: "長期滞在の方へ。"
      },
      items: [
        {
          id: "mercearia-garrett",
          name: "Mercearia Garrett",
          addr: "R. do Dr. Barbosa de Castro 35, 4050-091 Porto",
          coords: [41.1453, -8.6171],
          walk: "4 min",
          subTag: "minimarket",
          note: {
            EN: "Ask for Lola.",
            PT: "Pergunte pela Lola.",
            ES: "Pregunta por Lola.",
            FR: "Demandez Lola.",
            KR: "롤라에게 물어보세요.",
            JA: "ロラさんに尋ねてみてください。"
          }
        },
        {
          id: "minipreco",
          name: "Minipreço",
          addr: "Largo dos Lóios 46, 4050-338 Porto",
          coords: [41.1465, -8.6116],
          walk: "7 min",
          subTag: "supermarket"
        },
        {
          id: "lavandaria",
          name: "LavandaRIA Self-Service Laundry",
          addr: "Rua dos Caldeireiros 91, 4050-140 Porto",
          coords: [41.1452, -8.6135],
          walk: "6 min",
          subTag: "laundry"
        }
      ]
    }
  ]
};

const VT_I18N = {
  EN: {
    nav: {
      stays: "Apartments",
      story: "The house",
      porto: "Location",
      recs: "Recommendations",
      contact: "Contact",
      book: "Book a stay",
      menu: "Menu",
      mainLabel: "Main navigation",
      homeLabel: "Vitória's Terrace, home"
    },
    hero: {
      title: "A quiet refuge\nin the heart of Porto.",
      sub: "Apartments in a restored 19th-century house in the old town, a few minutes' walk from the Douro.",
      cta: "Check availability",
      ctaAlt: "See the apartments"
    },
    sec: {
      stays: "The apartments",
      story: "The house",
      porto: "Location",
      amen: "What's included",
      reviews: "Guest reviews",
      staysIntro: "Six apartments in four layouts.",
      photos: "Inside the apartments"
    },
    apt: {
      perNight: "per night, low season",
      onRequest: "Rate on request",
      onRequestNote: "Send your dates and we will quote a price",
      reserve: "Request this apartment",
      guests: "guests",
      bed: "bed",
      beds: "beds",
      bath: "bathroom",
      baths: "bathrooms",
      from: "from"
    },
    storyCaption: "The doors at nº 15-17, restored to their original cobalt.",
    storyBody: [
      "The owner grew up on Rua da Vitória, the street the house is named after. Buying the building was a long-held plan, and the restoration took nearly three years.",
      "The cobalt doors, the granite stonework, the yellow and white tiles at the entrance, the wooden arches over the staircase and the old handrail were all kept.",
      "The house is inside Porto's UNESCO World Heritage centre, so an archaeological team monitored every phase of the work. Several artefacts were found along the way, and a few small objects from the owner's family have been placed on each floor."
    ],
    portoPhotoAlt: "Azulejo-tiled façade in Porto's old town",
    mapAlt: "Map of Porto's old town with the house marked on Rua de São Miguel",
    portoLead: "Rua de São Miguel is a quiet granite street in the UNESCO-listed old town. Clérigos Tower is three minutes away on foot, and the river about eight.",
    portoAddressLabel: "Address",
    portoWalkLabel: "Walking times from the door",
    openInMaps: "Open in Google Maps",
    walkingDistances: [
      ["3 min", "Clérigos Tower"],
      ["5 min", "Livraria Lello"],
      ["5 min", "São Bento Station"],
      ["8 min", "Ribeira and the river"],
      ["10 min", "Dom Luís I Bridge"],
      ["12 min", "Port wine cellars, Gaia"]
    ],
    amenitiesIntro: "Included in the rate. The Porto city tax is paid separately.",
    amenities: [
      { label: "Concierge", note: "Daily, 8:00 to 20:00" },
      { label: "Welcome basket", note: "Port wine, pastéis de nata and fruit" },
      { label: "Linens", note: "Portuguese cotton, changed mid-stay" },
      { label: "Heating and air conditioning", note: "Controlled in each apartment" },
      { label: "Wi-Fi", note: "Fibre, throughout the house" },
      { label: "Kitchen", note: "Nespresso machine, induction hob" },
      { label: "Washer and dryer", note: "Penthouse and Deluxe only" }
    ],
    recs: {
      heading: "Recommendations from Rita",
      byline: "These are the places we send friends to, and where we go ourselves. Print the list, keep it on your phone, and ask us about anything on it.",
      signature: "Rita, your host",
      print: "Print this list",
      whatsappTitle: "During your stay, message us on WhatsApp.",
      whatsappBody: "We can book a table, suggest something for a rainy afternoon or lend you an umbrella.",
      whatsappCta: "Open WhatsApp"
    },
    reviews: {
      platform: "Platform",
      score: "Score",
      read: "Read the reviews",
      note: "Scores as shown on each platform. Follow the links for current figures and the full reviews."
    },
    footer: {
      visit: "Address",
      contact: "Contact",
      wander: "Pages",
      language: "Language",
      reserve: "Book a stay",
      tagline: "Guest apartments in Porto's UNESCO-listed old town.",
      privacy: "Privacy",
      terms: "Terms",
      complaints: "Complaints book",
      license: "Local accommodation licence"
    },
    book: {
      title: "Booking request",
      sub: "Tell us your dates. We reply by email with availability and the final price.",
      stepDates: "Dates",
      details: "Your details",
      stepSend: "Send",
      checkin: "Check-in",
      checkout: "Check-out",
      nightsLabel: "Nights",
      guests: "Guests",
      fewer: "Fewer guests",
      more: "More guests",
      apartment: "Apartment",
      any: "No preference",
      anyNote: "We will suggest the one that fits",
      next: "Continue",
      back: "Back",
      summary: "Estimate",
      night: "night",
      nights: "nights",
      cityTax: "Porto city tax",
      total: "Estimated total",
      estimateNote: "Estimate at the low-season rate; prices vary with the dates. City tax is €3 per guest aged 13 or over, per night, for up to 7 nights, and is not included in the rate. The estimate counts every guest; children under 13 are exempt. We confirm the final price in our reply.",
      estimateNone: "We will quote a price in our reply.",
      first: "First name",
      last: "Last name",
      nameL: "Name",
      emailL: "Email",
      phoneL: "Phone",
      optional: "optional",
      notes: "Anything we should know?",
      notesL: "Notes",
      confirm: "Review request",
      readyTitle: "Send your request",
      readySub: "Choose email or WhatsApp. A message with these details opens in that app. Nothing is sent until you press send there.",
      sendEmail: "Send by email",
      sendWhatsapp: "Send on WhatsApp",
      readyNote: "This is a request, not a confirmed booking. If neither app opens, write to",
      requestSubject: "Booking request",
      close: "Close",
      groupNote: "No single apartment sleeps more than 4. We will suggest two apartments for your group.",
      errName: "Add your first and last name.",
      errEmail: "Check the email address.",
      errDates: "Check-out must be after check-in.",
      legalLabel: "Privacy and terms:"
    },
    photosNote: "Photos from across the house. Layouts and furnishings vary from one apartment to another.",
    arrivalLabel: "Arrival and house rules",
    arrival: "Check-in 15:00 to 20:00 (later by arrangement; a fee may apply). Check-out by 11:00. No pets. No smoking inside.",
    galleryAlt: [
      "Bedroom with a double bed, a sitting area and two windows",
      "Sitting room with a sofa, armchairs and two tall windows",
      "Armchair by a window over the old town",
      "Two armchairs and a reading lamp",
      "Open room divided by a slatted pine partition",
      "Double bed behind a slatted pine partition",
      "Corner sofa under a carved wall medallion",
      "Dining table beside a fitted kitchen",
      "Fitted kitchen with under-cabinet lighting",
      "Kitchen with a patterned cement-tile floor",
      "Bathroom with a glass shower and patterned tiles",
      "Washbasin and towel rail in a white-tiled bathroom"
    ],
    meta: { title: "Vitória's Terrace Apartments, Porto" }
  },

  PT: {
    nav: {
      stays: "Apartamentos",
      story: "A casa",
      porto: "Localização",
      recs: "Recomendações",
      contact: "Contactos",
      book: "Reservar estadia",
      menu: "Menu",
      mainLabel: "Navegação principal",
      homeLabel: "Vitória's Terrace, página inicial"
    },
    hero: {
      title: "Um refúgio tranquilo\nno coração do Porto.",
      sub: "Apartamentos numa casa do século XIX restaurada, no centro histórico, a poucos minutos a pé do Douro.",
      cta: "Ver disponibilidade",
      ctaAlt: "Ver os apartamentos"
    },
    sec: {
      stays: "Os apartamentos",
      story: "A casa",
      porto: "Localização",
      amen: "O que está incluído",
      reviews: "Avaliações dos hóspedes",
      staysIntro: "Seis apartamentos, em quatro tipologias.",
      photos: "Dentro dos apartamentos"
    },
    apt: {
      perNight: "por noite, época baixa",
      onRequest: "Preço sob consulta",
      onRequestNote: "Envie-nos as suas datas e indicamos-lhe um preço",
      reserve: "Pedir este apartamento",
      guests: "hóspedes",
      bed: "cama",
      beds: "camas",
      bath: "casa de banho",
      baths: "casas de banho",
      from: "desde"
    },
    storyCaption: "As portas dos n.º 15-17, restauradas no seu azul cobalto original.",
    storyBody: [
      "O proprietário cresceu na Rua da Vitória, a rua que dá nome à casa. Comprar o edifício era um plano de longa data, e o restauro demorou quase três anos.",
      "Foram mantidas as portas azul cobalto, a cantaria em granito, os azulejos amarelos e brancos da entrada, os arcos de madeira sobre a escadaria e o corrimão antigo.",
      "A casa fica no centro histórico do Porto, classificado como Património Mundial pela UNESCO, por isso uma equipa de arqueologia acompanhou todas as fases da obra. Foram encontrados vários artefactos durante os trabalhos, e em cada piso foram colocados alguns pequenos objetos da família do proprietário."
    ],
    portoPhotoAlt: "Fachada com azulejos no centro histórico do Porto",
    mapAlt: "Mapa do centro histórico do Porto com a casa assinalada na Rua de São Miguel",
    portoLead: "A Rua de São Miguel é uma rua tranquila de granito, no centro histórico classificado pela UNESCO. A Torre dos Clérigos fica a três minutos a pé, e o rio a cerca de oito.",
    portoAddressLabel: "Morada",
    portoWalkLabel: "Tempos a pé a partir da porta",
    openInMaps: "Abrir no Google Maps",
    walkingDistances: [
      ["3 min", "Torre dos Clérigos"],
      ["5 min", "Livraria Lello"],
      ["5 min", "Estação de São Bento"],
      ["8 min", "Ribeira e o rio"],
      ["10 min", "Ponte Dom Luís I"],
      ["12 min", "Caves do vinho do Porto, Gaia"]
    ],
    amenitiesIntro: "Incluído no preço. A taxa turística do Porto é paga à parte.",
    amenities: [
      { label: "Acolhimento", note: "Todos os dias, das 8h00 às 20h00" },
      { label: "Cesto de boas-vindas", note: "Vinho do Porto, pastéis de nata e fruta" },
      { label: "Roupa de cama", note: "Algodão português, mudada a meio da estadia" },
      { label: "Aquecimento e ar condicionado", note: "Controlo próprio em cada apartamento" },
      { label: "Wi-Fi", note: "Fibra ótica, em toda a casa" },
      { label: "Cozinha", note: "Máquina Nespresso, placa de indução" },
      { label: "Máquina de lavar e secar", note: "Apenas no Penthouse e no Deluxe" }
    ],
    recs: {
      heading: "Recomendações da Rita",
      byline: "São os sítios para onde mandamos os amigos e onde nós próprios vamos. Imprima a lista, guarde-a no telemóvel e pergunte-nos o que quiser sobre ela.",
      signature: "Rita, a sua anfitriã",
      print: "Imprimir esta lista",
      whatsappTitle: "Durante a estadia, envie-nos uma mensagem pelo WhatsApp.",
      whatsappBody: "Podemos reservar uma mesa, sugerir algo para uma tarde chuvosa ou emprestar-lhe um chapéu de chuva.",
      whatsappCta: "Abrir WhatsApp"
    },
    reviews: {
      platform: "Plataforma",
      score: "Pontuação",
      read: "Ler as avaliações",
      note: "Pontuações tal como aparecem em cada plataforma. Siga as ligações para ver os valores atuais e as avaliações completas."
    },
    footer: {
      visit: "Morada",
      contact: "Contactos",
      wander: "Páginas",
      language: "Idioma",
      reserve: "Reservar estadia",
      tagline: "Apartamentos para hóspedes no centro histórico do Porto, Património Mundial da UNESCO.",
      privacy: "Privacidade",
      terms: "Termos",
      complaints: "Livro de reclamações",
      license: "Registo de Alojamento Local"
    },
    book: {
      title: "Pedido de reserva",
      sub: "Indique as suas datas. Respondemos por email com a disponibilidade e o preço final.",
      stepDates: "Datas",
      details: "Os seus dados",
      stepSend: "Enviar",
      checkin: "Entrada",
      checkout: "Saída",
      nightsLabel: "Noites",
      guests: "Hóspedes",
      fewer: "Menos hóspedes",
      more: "Mais hóspedes",
      apartment: "Apartamento",
      any: "Sem preferência",
      anyNote: "Sugerimos o mais adequado",
      next: "Continuar",
      back: "Voltar",
      summary: "Estimativa",
      night: "noite",
      nights: "noites",
      cityTax: "Taxa turística do Porto",
      total: "Total estimado",
      estimateNote: "Estimativa com o preço de época baixa; os preços variam com as datas. A taxa turística é de 3 € por hóspede com 13 ou mais anos, por noite, até um máximo de 7 noites, e não está incluída no preço. A estimativa inclui todos os hóspedes; os menores de 13 anos estão isentos. Confirmamos o preço final na nossa resposta.",
      estimateNone: "Indicamos o preço na nossa resposta.",
      first: "Nome",
      last: "Apelido",
      nameL: "Nome",
      emailL: "Email",
      phoneL: "Telefone",
      optional: "opcional",
      notes: "Algo que devamos saber?",
      notesL: "Notas",
      confirm: "Rever pedido",
      readyTitle: "Envie o seu pedido",
      readySub: "Escolha entre email e WhatsApp. A aplicação escolhida abre com uma mensagem já preenchida com estes dados. Nada é enviado até carregar em enviar nessa aplicação.",
      sendEmail: "Enviar por email",
      sendWhatsapp: "Enviar por WhatsApp",
      readyNote: "Este pedido ainda não é uma reserva confirmada. Se nenhuma das aplicações abrir, escreva para",
      requestSubject: "Pedido de reserva",
      close: "Fechar",
      groupNote: "Nenhum apartamento acolhe mais de 4 pessoas. Vamos sugerir dois apartamentos para o seu grupo.",
      errName: "Indique o nome e o apelido.",
      errEmail: "Verifique o endereço de email.",
      errDates: "A data de saída tem de ser posterior à de entrada.",
      legalLabel: "Privacidade e termos:"
    },
    photosNote: "Fotografias de vários apartamentos da casa. A disposição e o mobiliário variam de apartamento para apartamento.",
    arrivalLabel: "Chegada e regras da casa",
    arrival: "Check-in das 15h00 às 20h00 (mais tarde, mediante acordo; pode ter custo). Check-out até às 11h00. Não são aceites animais. Não é permitido fumar no interior.",
    galleryAlt: [
      "Quarto com cama de casal, zona de estar e duas janelas",
      "Sala com sofá, cadeirões e duas janelas altas",
      "Cadeirão junto a uma janela sobre o centro histórico",
      "Dois cadeirões e um candeeiro de leitura",
      "Espaço aberto dividido por um ripado de pinho",
      "Cama de casal atrás de um ripado de pinho",
      "Sofá de canto sob um medalhão de parede esculpido",
      "Mesa de refeições junto a uma cozinha equipada",
      "Cozinha equipada com luz sob os armários",
      "Cozinha com chão de mosaico hidráulico",
      "Casa de banho com duche de vidro e azulejos padronizados",
      "Lavatório e toalheiro numa casa de banho de azulejo branco"
    ],
    meta: { title: "Vitória's Terrace, apartamentos no Porto" }
  },

  ES: {
    nav: {
      stays: "Apartamentos",
      story: "La casa",
      porto: "Ubicación",
      recs: "Recomendaciones",
      contact: "Contacto",
      book: "Reservar estancia",
      menu: "Menú",
      mainLabel: "Navegación principal",
      homeLabel: "Vitória's Terrace, inicio"
    },
    hero: {
      title: "Un refugio tranquilo\nen el corazón de Oporto.",
      sub: "Apartamentos en una casa del siglo XIX restaurada en el casco antiguo, a pocos minutos a pie del Duero.",
      cta: "Ver disponibilidad",
      ctaAlt: "Ver los apartamentos"
    },
    sec: {
      stays: "Los apartamentos",
      story: "La casa",
      porto: "Ubicación",
      amen: "Qué está incluido",
      reviews: "Opiniones de los huéspedes",
      staysIntro: "Seis apartamentos de cuatro tipos.",
      photos: "Dentro de los apartamentos"
    },
    apt: {
      perNight: "por noche, temporada baja",
      onRequest: "Tarifa a consultar",
      onRequestNote: "Envíanos tus fechas y te indicaremos el precio",
      reserve: "Solicitar este apartamento",
      guests: "huéspedes",
      bed: "cama",
      beds: "camas",
      bath: "baño",
      baths: "baños",
      from: "desde"
    },
    storyCaption: "Las puertas del n.º 15-17, restauradas con su color cobalto original.",
    storyBody: [
      "El propietario se crio en la Rua da Vitória, la calle que da nombre a la casa. Comprar el edificio era un plan que tenía desde hacía mucho tiempo, y la restauración duró casi tres años.",
      "Se conservaron las puertas azul cobalto, la cantería de granito, los azulejos amarillos y blancos de la entrada, los arcos de madera sobre la escalera y el pasamanos antiguo.",
      "La casa está en el centro histórico de Oporto, declarado Patrimonio de la Humanidad por la UNESCO, así que un equipo de arqueólogos supervisó cada fase de la obra. Durante los trabajos se hicieron varios hallazgos arqueológicos, y en cada planta se han colocado algunos objetos pequeños de la familia del propietario."
    ],
    portoPhotoAlt: "Fachada de azulejos en el casco antiguo de Oporto",
    mapAlt: "Mapa del casco antiguo de Oporto con la casa marcada en la Rua de São Miguel",
    portoLead: "La Rua de São Miguel es una calle tranquila de granito en el casco antiguo, declarado Patrimonio de la Humanidad por la UNESCO. La Torre de los Clérigos está a tres minutos a pie y el río, a unos ocho.",
    portoAddressLabel: "Dirección",
    portoWalkLabel: "Tiempos a pie desde la puerta",
    openInMaps: "Abrir en Google Maps",
    walkingDistances: [
      ["3 min", "Torre de los Clérigos"],
      ["5 min", "Livraria Lello"],
      ["5 min", "Estación de São Bento"],
      ["8 min", "Ribeira y el río"],
      ["10 min", "Puente Dom Luís I"],
      ["12 min", "Bodegas de vino de Oporto, Gaia"]
    ],
    amenitiesIntro: "Incluido en la tarifa. La tasa turística de Oporto se paga aparte.",
    amenities: [
      { label: "Conserjería", note: "Todos los días, de 8:00 a 20:00" },
      { label: "Cesta de bienvenida", note: "Vino de Oporto, pastéis de nata y fruta" },
      { label: "Ropa de cama", note: "Algodón portugués, con cambio a mitad de la estancia" },
      { label: "Calefacción y aire acondicionado", note: "Regulables en cada apartamento" },
      { label: "Wi-Fi", note: "Fibra óptica en toda la casa" },
      { label: "Cocina", note: "Cafetera Nespresso, placa de inducción" },
      { label: "Lavadora y secadora", note: "Solo en el Ático y el Deluxe" }
    ],
    recs: {
      heading: "Recomendaciones de Rita",
      byline: "Son los sitios a los que mandamos a nuestros amigos y a los que vamos nosotros. Imprime la lista, guárdala en el móvil y pregúntanos por cualquiera de ellos.",
      signature: "Rita, tu anfitriona",
      print: "Imprimir esta lista",
      whatsappTitle: "Durante tu estancia, escríbenos por WhatsApp.",
      whatsappBody: "Podemos reservarte una mesa, sugerirte algo para una tarde de lluvia o prestarte un paraguas.",
      whatsappCta: "Abrir WhatsApp"
    },
    reviews: {
      platform: "Plataforma",
      score: "Puntuación",
      read: "Leer las opiniones",
      note: "Puntuaciones tal como aparecen en cada plataforma. En los enlaces encontrarás las cifras actualizadas y las opiniones completas."
    },
    footer: {
      visit: "Dirección",
      contact: "Contacto",
      wander: "Páginas",
      language: "Idioma",
      reserve: "Reservar estancia",
      tagline: "Apartamentos turísticos en el casco antiguo de Oporto, Patrimonio de la Humanidad.",
      privacy: "Privacidad (en inglés)",
      terms: "Condiciones (en inglés)",
      complaints: "Libro de reclamaciones",
      license: "Licencia de alojamiento local"
    },
    book: {
      title: "Solicitud de reserva",
      sub: "Indícanos tus fechas. Te respondemos por correo electrónico con la disponibilidad y el precio final.",
      stepDates: "Fechas",
      details: "Tus datos",
      stepSend: "Enviar",
      checkin: "Llegada",
      checkout: "Salida",
      nightsLabel: "Noches",
      guests: "Huéspedes",
      fewer: "Menos huéspedes",
      more: "Más huéspedes",
      apartment: "Apartamento",
      any: "Sin preferencia",
      anyNote: "Te propondremos el más adecuado",
      next: "Continuar",
      back: "Atrás",
      summary: "Estimación",
      night: "noche",
      nights: "noches",
      cityTax: "Tasa turística de Oporto",
      total: "Total estimado",
      estimateNote: "Estimación con la tarifa de temporada baja; los precios varían según las fechas. La tasa turística es de 3 € por huésped de 13 años o más, por noche, hasta un máximo de 7 noches, y no está incluida en la tarifa. La estimación cuenta a todos los huéspedes; los menores de 13 años están exentos. Confirmamos el precio final en nuestra respuesta.",
      estimateNone: "Te indicaremos el precio en nuestra respuesta.",
      first: "Nombre",
      last: "Apellidos",
      nameL: "Nombre",
      emailL: "Correo electrónico",
      phoneL: "Teléfono",
      optional: "opcional",
      notes: "¿Algo que debamos saber?",
      notesL: "Notas",
      confirm: "Revisar solicitud",
      readyTitle: "Envía tu solicitud",
      readySub: "Elige correo electrónico o WhatsApp. Se abrirá un mensaje con estos datos en esa aplicación. No se enviará nada hasta que pulses el botón de enviar en ella.",
      sendEmail: "Enviar por correo electrónico",
      sendWhatsapp: "Enviar por WhatsApp",
      readyNote: "Esto es una solicitud, no una reserva confirmada. Si no se abre ninguna de las dos aplicaciones, escríbenos a",
      requestSubject: "Solicitud de reserva",
      close: "Cerrar",
      groupNote: "Ningún apartamento admite más de 4 personas. Te propondremos dos apartamentos para tu grupo.",
      errName: "Indica tu nombre y apellidos.",
      errEmail: "Revisa la dirección de correo electrónico.",
      errDates: "La salida debe ser posterior a la entrada.",
      legalLabel: "Privacidad y condiciones:"
    },
    photosNote: "Fotos de varios apartamentos de la casa. La distribución y el mobiliario varían de un apartamento a otro.",
    arrivalLabel: "Llegada y normas de la casa",
    arrival: "Entrada de 15:00 a 20:00 (más tarde, previo acuerdo; puede tener coste). Salida hasta las 11:00. No se admiten mascotas. No se permite fumar dentro.",
    galleryAlt: [
      "Dormitorio con cama doble, zona de estar y dos ventanas",
      "Salón con sofá, butacas y dos ventanas altas",
      "Butaca junto a una ventana sobre el casco antiguo",
      "Dos butacas y una lámpara de lectura",
      "Espacio abierto dividido por un tabique de listones de pino",
      "Cama doble detrás de un tabique de listones de pino",
      "Sofá rinconera bajo un medallón de pared tallado",
      "Mesa de comedor junto a una cocina equipada",
      "Cocina equipada con luz bajo los armarios",
      "Cocina con suelo de baldosa hidráulica",
      "Baño con ducha de cristal y azulejos estampados",
      "Lavabo y toallero en un baño de azulejo blanco"
    ],
    meta: { title: "Vitória's Terrace, apartamentos en Oporto" }
  },

  FR: {
    nav: {
      stays: "Appartements",
      story: "La maison",
      porto: "Emplacement",
      recs: "Recommandations",
      contact: "Contact",
      book: "Réserver un séjour",
      menu: "Menu",
      mainLabel: "Navigation principale",
      homeLabel: "Vitória's Terrace, accueil"
    },
    hero: {
      title: "Un refuge paisible\nau cœur de Porto.",
      sub: "Des appartements dans une maison du XIXᵉ siècle restaurée, dans la vieille ville, à quelques minutes à pied du Douro.",
      cta: "Voir les disponibilités",
      ctaAlt: "Voir les appartements"
    },
    sec: {
      stays: "Les appartements",
      story: "La maison",
      porto: "Emplacement",
      amen: "Ce qui est inclus",
      reviews: "Avis des voyageurs",
      staysIntro: "Six appartements, répartis en quatre configurations.",
      photos: "À l'intérieur des appartements"
    },
    apt: {
      perNight: "par nuit, basse saison",
      onRequest: "Tarif sur demande",
      onRequestNote: "Envoyez-nous vos dates et nous vous indiquerons un prix",
      reserve: "Demander cet appartement",
      guests: "voyageurs",
      bed: "lit",
      beds: "lits",
      bath: "salle de bains",
      baths: "salles de bains",
      from: "à partir de"
    },
    storyCaption: "Les portes du 15-17, restaurées dans leur bleu cobalt d'origine.",
    storyBody: [
      "Le propriétaire a grandi dans la Rua da Vitória, la rue qui a donné son nom à la maison. Acheter le bâtiment était un projet de longue date, et la restauration a pris près de trois ans.",
      "Les portes cobalt, la pierre de granit, les azulejos jaunes et blancs de l'entrée, les arches en bois au-dessus de l'escalier et l'ancienne rampe ont tous été conservés.",
      "Comme la maison se trouve dans le centre historique de Porto, classé au patrimoine mondial de l'UNESCO, une équipe archéologique a suivi chaque phase des travaux. Plusieurs artefacts ont été mis au jour pendant le chantier, et quelques petits objets de la famille du propriétaire ont été disposés à chaque étage."
    ],
    portoPhotoAlt: "Façade couverte d'azulejos dans la vieille ville de Porto",
    mapAlt: "Plan de la vieille ville de Porto indiquant la maison, Rua de São Miguel",
    portoLead: "La Rua de São Miguel est une rue de granit tranquille, dans la vieille ville classée au patrimoine mondial de l'UNESCO. La tour des Clérigos est à trois minutes à pied, et le fleuve à huit minutes environ.",
    portoAddressLabel: "Adresse",
    portoWalkLabel: "Temps de marche depuis la porte",
    openInMaps: "Ouvrir dans Google Maps",
    walkingDistances: [
      ["3 min", "Tour des Clérigos"],
      ["5 min", "Livraria Lello"],
      ["5 min", "Gare de São Bento"],
      ["8 min", "Ribeira et le fleuve"],
      ["10 min", "Pont Dom Luís I"],
      ["12 min", "Caves de porto, Gaia"]
    ],
    amenitiesIntro: "Inclus dans le tarif. La taxe de séjour de Porto est payée à part.",
    amenities: [
      { label: "Conciergerie", note: "Tous les jours, de 8 h à 20 h" },
      { label: "Panier d'accueil", note: "Vin de Porto, pastéis de nata et fruits" },
      { label: "Linge de maison", note: "Coton portugais, changé à mi-séjour" },
      { label: "Chauffage et climatisation", note: "Réglables dans chaque appartement" },
      { label: "Wi-Fi", note: "Fibre, dans toute la maison" },
      { label: "Cuisine", note: "Machine Nespresso, plaque à induction" },
      { label: "Lave-linge et sèche-linge", note: "Penthouse et Deluxe uniquement" }
    ],
    recs: {
      heading: "Les recommandations de Rita",
      byline: "Voici les adresses où nous envoyons nos amis, et où nous allons nous-mêmes. Imprimez la liste, gardez-la sur votre téléphone et n'hésitez pas à nous interroger sur chacune de ces adresses.",
      signature: "Rita, votre hôte",
      print: "Imprimer la liste",
      whatsappTitle: "Pendant votre séjour, écrivez-nous sur WhatsApp.",
      whatsappBody: "Nous pouvons vous réserver une table, vous proposer quelque chose à faire par un après-midi de pluie ou vous prêter un parapluie.",
      whatsappCta: "Ouvrir WhatsApp"
    },
    reviews: {
      platform: "Plateforme",
      score: "Note",
      read: "Lire les avis",
      note: "Notes telles qu'elles apparaissent sur chaque plateforme. Suivez les liens pour consulter les notes à jour et l'intégralité des avis."
    },
    footer: {
      visit: "Adresse",
      contact: "Contact",
      wander: "Pages",
      language: "Langue",
      reserve: "Réserver un séjour",
      tagline: "Appartements pour voyageurs dans la vieille ville de Porto, classée au patrimoine mondial de l'UNESCO.",
      privacy: "Confidentialité (en anglais)",
      terms: "Conditions (en anglais)",
      complaints: "Livre de réclamations",
      license: "Licence d'hébergement local"
    },
    book: {
      title: "Demande de réservation",
      sub: "Indiquez-nous vos dates. Nous vous répondons par e-mail avec les disponibilités et le prix définitif.",
      stepDates: "Dates",
      details: "Vos coordonnées",
      stepSend: "Envoi",
      checkin: "Arrivée",
      checkout: "Départ",
      nightsLabel: "Nuits",
      guests: "Voyageurs",
      fewer: "Moins de voyageurs",
      more: "Plus de voyageurs",
      apartment: "Appartement",
      any: "Sans préférence",
      anyNote: "Nous vous proposerons celui qui convient",
      next: "Continuer",
      back: "Retour",
      summary: "Estimation",
      night: "nuit",
      nights: "nuits",
      cityTax: "Taxe de séjour de Porto",
      total: "Total estimé",
      estimateNote: "Estimation au tarif basse saison ; les prix varient selon les dates. La taxe de séjour est de 3 € par personne âgée de 13 ans ou plus et par nuit, dans la limite de 7 nuits, et n'est pas incluse dans le tarif. L'estimation compte tous les voyageurs ; les moins de 13 ans en sont exonérés. Nous confirmons le prix définitif dans notre réponse.",
      estimateNone: "Nous vous indiquerons un prix dans notre réponse.",
      first: "Prénom",
      last: "Nom",
      nameL: "Nom",
      emailL: "E-mail",
      phoneL: "Téléphone",
      optional: "facultatif",
      notes: "Quelque chose à nous signaler ?",
      notesL: "Remarques",
      confirm: "Vérifier la demande",
      readyTitle: "Envoyer votre demande",
      readySub: "Choisissez l'e-mail ou WhatsApp. Un message contenant ces informations s'ouvre dans l'application choisie. Rien n'est envoyé tant que vous n'avez pas appuyé sur Envoyer dans cette application.",
      sendEmail: "Envoyer par e-mail",
      sendWhatsapp: "Envoyer sur WhatsApp",
      readyNote: "Il s'agit d'une demande et non d'une réservation confirmée. Si aucune des deux applications ne s'ouvre, écrivez-nous à",
      requestSubject: "Demande de réservation",
      close: "Fermer",
      groupNote: "Aucun appartement n'accueille plus de 4 personnes. Nous vous proposerons deux appartements pour votre groupe.",
      errName: "Indiquez votre prénom et votre nom.",
      errEmail: "Vérifiez l'adresse e-mail.",
      errDates: "Le départ doit être après l'arrivée.",
      legalLabel: "Confidentialité et conditions :"
    },
    photosNote: "Photos prises dans plusieurs appartements de la maison. L'agencement et le mobilier varient d'un appartement à l'autre.",
    arrivalLabel: "Arrivée et règles de la maison",
    arrival: "Arrivée de 15 h à 20 h (plus tard sur accord préalable, avec un supplément possible). Départ avant 11 h. Animaux non admis. Il est interdit de fumer à l'intérieur.",
    galleryAlt: [
      "Chambre avec lit double, coin salon et deux fenêtres",
      "Salon avec canapé, fauteuils et deux hautes fenêtres",
      "Fauteuil près d'une fenêtre donnant sur la vieille ville",
      "Deux fauteuils et un lampadaire de lecture",
      "Pièce ouverte séparée par une claustra en pin",
      "Lit double derrière une claustra en pin",
      "Canapé d'angle sous un médaillon mural sculpté",
      "Table à manger à côté d'une cuisine équipée",
      "Cuisine équipée avec éclairage sous les placards",
      "Cuisine au sol en carreaux de ciment",
      "Salle de bains avec douche vitrée et carreaux à motifs",
      "Lavabo et porte-serviettes dans une salle de bains carrelée de blanc"
    ],
    meta: { title: "Vitória's Terrace, appartements à Porto" }
  },

  KR: {
    nav: {
      stays: "객실",
      story: "건물 이야기",
      porto: "위치",
      recs: "추천",
      contact: "문의",
      book: "예약하기",
      menu: "메뉴",
      mainLabel: "주 메뉴",
      homeLabel: "Vitória's Terrace 홈"
    },
    hero: { title: "포르투 중심의\n조용한 안식처.", sub: "구시가지의 19세기 가옥을 복원한 아파트로, 도루 강까지 걸어서 몇 분 거리입니다.", cta: "예약 가능 여부 확인", ctaAlt: "객실 보기" },
    sec: { stays: "객실", story: "건물 이야기", porto: "위치", amen: "포함 사항", reviews: "투숙객 후기", staysIntro: "네 가지 유형의 아파트 여섯 채가 있습니다.", photos: "객실 내부" },
    apt: {
      perNight: "비수기 1박 기준",
      onRequest: "요금 문의",
      onRequestNote: "날짜를 보내주시면 요금을 안내해 드립니다",
      reserve: "이 객실 예약 요청",
      guests: "명",
      bed: "침대",
      beds: "침대",
      bath: "욕실",
      baths: "욕실",
      from: "최저",
      fmt: { guests: "{n}명", bed: "침대 {n}개", beds: "침대 {n}개", bath: "욕실 {n}개", baths: "욕실 {n}개", from: "{p}부터" }
    },
    storyCaption: "본래의 코발트색으로 복원한 15-17번지의 문.",
    storyBody: [
      "주인은 이 집의 이름이 된 비토리아 거리(Rua da Vitória)에서 자랐습니다. 건물 매입은 오래전부터 계획해 온 일이었고, 복원에는 3년 가까이 걸렸습니다.",
      "코발트색 문, 화강암 석조, 입구의 노란색과 흰색 타일, 계단 위의 목조 아치, 오래된 난간은 모두 그대로 보존했습니다.",
      "이 집은 포르투의 유네스코 세계유산 지구 안에 있어, 공사의 모든 단계를 고고학팀이 감독했습니다. 작업 중 여러 유물이 발견되었고, 주인 가족의 작은 물건 몇 점을 각 층에 놓아두었습니다."
    ],
    portoPhotoAlt: "포르투 구시가지의 아줄레주 타일 외벽",
    mapAlt: "상 미겔 거리(Rua de São Miguel)에 이 집의 위치가 표시된 포르투 구시가지 지도",
    portoLead: "상 미겔 거리(Rua de São Miguel)는 유네스코 세계유산으로 지정된 구시가지에 있는, 화강암이 깔린 조용한 거리입니다. 클레리구스 탑까지 걸어서 3분, 강까지는 약 8분입니다.",
    portoAddressLabel: "주소",
    portoWalkLabel: "현관에서 도보 소요 시간",
    openInMaps: "Google Maps에서 열기",
    walkingDistances: [["3분", "클레리구스 탑"], ["5분", "렐루 서점"], ["5분", "상 벤투 역"], ["8분", "히베이라와 도루 강"], ["10분", "동 루이스 1세 다리"], ["12분", "포트 와인 셀러, 가이아"]],
    amenitiesIntro: "객실 요금에 포함되어 있습니다. 포르투 관광세는 별도로 지불합니다.",
    amenities: [
      { label: "컨시어지", note: "매일 8:00부터 20:00까지" },
      { label: "웰컴 바스켓", note: "포트 와인, 파스텔 드 나타, 과일" },
      { label: "침구", note: "포르투갈산 면, 숙박 중간에 교체" },
      { label: "난방 및 에어컨", note: "객실마다 개별 조절" },
      { label: "Wi-Fi", note: "광섬유 인터넷, 건물 전체에서 사용 가능" },
      { label: "주방", note: "Nespresso 머신, 인덕션" },
      { label: "세탁기 및 건조기", note: "펜트하우스와 디럭스에만 있음" }
    ],
    recs: {
      heading: "리타의 추천",
      byline: "저희가 친구들에게 권하고, 저희도 직접 가는 곳들입니다. 목록을 인쇄하거나 휴대폰에 저장해 두시고, 목록에 있는 곳에 대해 궁금한 점은 무엇이든 물어보세요.",
      signature: "호스트 리타",
      print: "목록 인쇄",
      whatsappTitle: "숙박 중에는 WhatsApp으로 메시지를 보내주세요.",
      whatsappBody: "식당 예약을 해 드리거나, 비 오는 오후에 할 만한 일을 추천해 드리거나, 우산을 빌려 드릴 수 있습니다.",
      whatsappCta: "WhatsApp 열기"
    },
    reviews: { platform: "플랫폼", score: "평점", read: "후기 읽기", note: "평점은 각 플랫폼에 표시된 그대로입니다. 최신 평점과 전체 후기는 링크에서 확인하세요." },
    footer: {
      visit: "주소",
      contact: "문의",
      wander: "페이지",
      language: "언어",
      reserve: "예약하기",
      tagline: "유네스코 세계유산으로 지정된 포르투 구시가지의 아파트입니다.",
      privacy: "개인정보 처리방침(영문)",
      terms: "이용약관(영문)",
      complaints: "고객 불만 접수부",
      license: "지역 숙박업 허가"
    },
    book: {
      title: "예약 요청",
      sub: "원하시는 날짜를 알려주세요. 이메일로 예약 가능 여부와 최종 요금을 안내해 드립니다.",
      stepDates: "날짜",
      details: "예약자 정보",
      stepSend: "보내기",
      checkin: "체크인",
      checkout: "체크아웃",
      nightsLabel: "숙박 일수",
      guests: "인원",
      fewer: "인원 줄이기",
      more: "인원 늘리기",
      apartment: "객실",
      any: "상관없음",
      anyNote: "알맞은 객실을 추천해 드립니다",
      next: "다음",
      back: "이전",
      summary: "예상 요금",
      night: "박",
      nights: "박",
      cityTax: "포르투 관광세",
      total: "예상 합계",
      estimateNote: "비수기 요금 기준 예상 금액이며, 요금은 날짜에 따라 달라집니다. 관광세는 13세 이상 투숙객 1인 1박당 €3이며, 최대 7박까지 부과되고 객실 요금에 포함되어 있지 않습니다. 예상 금액은 모든 투숙객 기준이며, 13세 미만은 면제됩니다. 최종 요금은 답장에서 확정해 드립니다.",
      estimateNone: "요금은 답장에서 안내해 드립니다.",
      first: "이름",
      last: "성",
      nameL: "이름",
      emailL: "이메일",
      phoneL: "전화번호",
      optional: "선택",
      notes: "미리 알려주실 사항이 있나요?",
      notesL: "메모",
      confirm: "요청 내용 확인",
      readyTitle: "요청 보내기",
      readySub: "이메일 또는 WhatsApp을 선택하세요. 선택한 앱에서 이 내용이 담긴 메시지가 열립니다. 그 앱에서 보내기를 누르기 전에는 아무것도 전송되지 않습니다.",
      sendEmail: "이메일로 보내기",
      sendWhatsapp: "WhatsApp으로 보내기",
      readyNote: "이 요청은 확정된 예약이 아닙니다. 두 앱 모두 열리지 않으면 다음 주소로 메일을 보내주세요:",
      requestSubject: "예약 요청",
      close: "닫기",
      groupNote: "한 객실의 최대 인원은 4명입니다. 일행을 위해 객실 두 개를 제안해 드리겠습니다.",
      errName: "이름과 성을 입력해 주세요.",
      errEmail: "이메일 주소를 확인해 주세요.",
      errDates: "체크아웃 날짜는 체크인 이후여야 합니다.",
      nightsFmt: "{n}박. ",
      legalLabel: "개인정보 및 이용약관:"
    },
    photosNote: "건물 내 여러 객실의 사진입니다. 객실마다 구조와 가구가 다릅니다.",
    arrivalLabel: "체크인 및 이용 규칙",
    arrival: "체크인은 15:00부터 20:00까지입니다(이후 도착은 사전 협의가 필요하며 추가 요금이 있을 수 있습니다). 체크아웃은 11:00까지입니다. 반려동물은 동반할 수 없으며 실내는 금연입니다.",
    galleryAlt: [
      "더블 침대와 휴식 공간, 창문 두 개가 있는 침실",
      "소파와 안락의자, 높은 창문 두 개가 있는 거실",
      "구시가지가 보이는 창가의 안락의자",
      "안락의자 두 개와 독서등",
      "소나무 루버 칸막이로 나뉜 트인 공간",
      "소나무 루버 칸막이 뒤의 더블 침대",
      "조각 장식 메달리온 아래의 코너 소파",
      "붙박이 주방 옆의 식탁",
      "수납장 아래 조명이 있는 붙박이 주방",
      "패턴 시멘트 타일 바닥의 주방",
      "유리 샤워 부스와 패턴 타일이 있는 욕실",
      "흰 타일 욕실의 세면대와 수건걸이"
    ],
    meta: { title: "Vitória's Terrace, 포르투 아파트" }
  },

  JA: {
    nav: {
      stays: "客室",
      story: "建物について",
      porto: "ロケーション",
      recs: "おすすめ",
      contact: "お問い合わせ",
      book: "宿泊を予約",
      menu: "メニュー",
      mainLabel: "メインメニュー",
      homeLabel: "Vitória's Terrace ホーム"
    },
    hero: { title: "ポルトの中心に、\n静かな隠れ家。", sub: "旧市街にある19世紀の家を修復したアパートメントです。ドウロ川まで徒歩数分。", cta: "空室を確認", ctaAlt: "客室を見る" },
    sec: {
      stays: "客室",
      story: "建物について",
      porto: "ロケーション",
      amen: "料金に含まれるもの",
      reviews: "宿泊者のレビュー",
      staysIntro: "4タイプ、全6室のアパートメントです。",
      photos: "客室の様子"
    },
    apt: {
      perNight: "オフシーズンの1泊料金",
      onRequest: "料金はお問い合わせください",
      onRequestNote: "ご希望の日程をお送りいただければ、料金をお見積りします",
      reserve: "この客室をリクエスト",
      guests: "名様",
      bed: "ベッド",
      beds: "ベッド",
      bath: "バスルーム",
      baths: "バスルーム",
      from: "より",
      fmt: { guests: "{n}名様", bed: "ベッド{n}台", beds: "ベッド{n}台", bath: "バスルーム{n}室", baths: "バスルーム{n}室", from: "{p}から" }
    },
    storyCaption: "15-17番地の扉。もとのコバルトブルーに修復しました。",
    storyBody: [
      "オーナーは、この家の名前の由来であるヴィトリア通りで育ちました。この建物の購入は長年の計画で、修復には3年近くかかりました。",
      "コバルトブルーの扉、花崗岩の石造り、入口の黄色と白のタイル、階段の上の木製アーチ、古い手すりは、すべてそのまま残しています。",
      "建物はポルトのユネスコ世界遺産地区の中にあるため、工事のすべての段階に考古学チームが立ち会いました。工事の途中でいくつかの遺物が見つかりました。また、各階にはオーナーの家族ゆかりの小さな品をいくつか置いています。"
    ],
    portoPhotoAlt: "ポルト旧市街にある、アズレージョ張りの建物の正面",
    mapAlt: "サン・ミゲル通りにあるこの家の位置を示した、ポルト旧市街の地図",
    portoLead: "サン・ミゲル通り（Rua de São Miguel）は、ユネスコ世界遺産に登録された旧市街にある、花崗岩の石畳が敷かれた静かな通りです。クレリゴスの塔までは徒歩3分、川までは徒歩約8分です。",
    portoAddressLabel: "住所",
    portoWalkLabel: "玄関からの徒歩時間",
    openInMaps: "Google Mapsで開く",
    walkingDistances: [["3分", "クレリゴスの塔"], ["5分", "レロ書店"], ["5分", "サン・ベント駅"], ["8分", "リベイラと川"], ["10分", "ドン・ルイス1世橋"], ["12分", "ガイアのポートワインセラー"]],
    amenitiesIntro: "宿泊料金に含まれています。ポルトの観光税は別途お支払いいただきます。",
    amenities: [
      { label: "コンシェルジュ", note: "毎日8:00から20:00まで" },
      { label: "ウェルカムバスケット", note: "ポートワイン、パステル・デ・ナタ、果物" },
      { label: "リネン", note: "ポルトガル産コットン、滞在の途中で交換" },
      { label: "暖房とエアコン", note: "各客室で個別に調節可能" },
      { label: "Wi-Fi", note: "光回線、館内全域で利用可能" },
      { label: "キッチン", note: "Nespressoマシン、IHコンロ" },
      { label: "洗濯機と乾燥機", note: "ペントハウスとデラックスのみ" }
    ],
    recs: {
      heading: "リタのおすすめ",
      byline: "わたしたちが友人にすすめている場所で、自分たちもよく行くところです。リストは印刷しても、スマートフォンに保存してもかまいません。リストの場所について、何でもお尋ねください。",
      signature: "ホストのリタ",
      print: "このリストを印刷",
      whatsappTitle: "ご滞在中は、WhatsAppでメッセージをお送りください。",
      whatsappBody: "レストランの席を予約したり、雨の午後の過ごし方をご提案したり、傘をお貸ししたりできます。",
      whatsappCta: "WhatsAppを開く"
    },
    reviews: { platform: "サイト", score: "スコア", read: "レビューを読む", note: "スコアは各サイトでの表示どおりです。最新の数値とレビューの全文は、リンク先でご確認ください。" },
    footer: {
      visit: "住所",
      contact: "お問い合わせ",
      wander: "ページ",
      language: "言語",
      reserve: "宿泊を予約",
      tagline: "ユネスコ世界遺産に登録されたポルト旧市街のアパートメントです。",
      privacy: "プライバシーポリシー（英語）",
      terms: "利用規約（英語）",
      complaints: "苦情受付簿",
      license: "民泊営業許可"
    },
    book: {
      title: "予約リクエスト",
      sub: "ご希望の日程をお知らせください。空室状況と最終料金をメールでご連絡します。",
      stepDates: "日程",
      details: "お客様情報",
      stepSend: "送信",
      checkin: "チェックイン",
      checkout: "チェックアウト",
      nightsLabel: "宿泊数",
      guests: "人数",
      fewer: "人数を減らす",
      more: "人数を増やす",
      apartment: "客室",
      any: "指定なし",
      anyNote: "条件に合う客室をご提案します",
      next: "次へ",
      back: "戻る",
      summary: "お見積り",
      night: "泊",
      nights: "泊",
      cityTax: "ポルト市観光税",
      total: "概算合計",
      estimateNote: "オフシーズン料金での概算です。料金は日程によって異なります。観光税は、13歳以上の方1名につき1泊€3（最大7泊分）で、宿泊料金には含まれていません。概算は全員分で計算しています。13歳未満の方は免除されます。最終料金は返信の際にお知らせします。",
      estimateNone: "料金のお見積りは、返信の際にお知らせします。",
      first: "名",
      last: "姓",
      nameL: "お名前",
      emailL: "メールアドレス",
      phoneL: "電話番号",
      optional: "任意",
      notes: "事前にお知らせいただくことはありますか？",
      notesL: "備考",
      confirm: "リクエスト内容を確認",
      readyTitle: "リクエストを送信",
      readySub: "メールかWhatsAppをお選びください。選んだアプリで、この内容が入力されたメッセージが開きます。そのアプリで送信を押すまで、何も送信されません。",
      sendEmail: "メールで送信",
      sendWhatsapp: "WhatsAppで送信",
      readyNote: "これは予約リクエストで、予約はまだ確定していません。どちらのアプリも開かない場合は、次のアドレスまでメールでご連絡ください：",
      requestSubject: "予約リクエスト",
      close: "閉じる",
      groupNote: "1室の定員は最大4名です。グループの場合は2室をご提案します。",
      errName: "姓と名を入力してください。",
      errEmail: "メールアドレスをご確認ください。",
      errDates: "チェックアウト日はチェックイン日より後にしてください。",
      nightsFmt: "{n}泊。",
      legalLabel: "プライバシーと利用規約："
    },
    photosNote: "館内の複数の客室の写真です。間取りや家具は客室ごとに異なります。",
    arrivalLabel: "チェックインとハウスルール",
    arrival: "チェックインは15:00から20:00まで（それ以降は事前のご相談が必要で、追加料金がかかる場合があります）。チェックアウトは11:00まで。ペット不可、室内禁煙です。",
    galleryAlt: [
      "ダブルベッドとくつろぎスペース、2つの窓がある寝室",
      "ソファとアームチェア、背の高い2つの窓があるリビング",
      "旧市街を望む窓辺のアームチェア",
      "2脚のアームチェアと読書灯",
      "松材のルーバーで仕切られたひと続きの空間",
      "松材のルーバーの奥にあるダブルベッド",
      "彫刻入りの壁飾りの下にあるコーナーソファ",
      "システムキッチン横のダイニングテーブル",
      "吊り戸棚の下に照明があるシステムキッチン",
      "柄入りセメントタイルの床のキッチン",
      "ガラス張りのシャワーと柄タイルのバスルーム",
      "白いタイル張りのバスルームの洗面台とタオル掛け"
    ],
    meta: { title: "Vitória's Terrace, ポルトのアパートメント" }
  }
};

// Any key missing from a locale falls back to the English string.
(function fillFromEnglish() {
  const fill = (base, target) => {
    Object.keys(base).forEach((k) => {
      if (target[k] === undefined) target[k] = base[k];
      else if (base[k] && typeof base[k] === "object" && !Array.isArray(base[k])) fill(base[k], target[k]);
    });
  };
  Object.keys(VT_I18N).forEach((l) => { if (l !== "EN") fill(VT_I18N.EN, VT_I18N[l]); });
})();

window.VT_DATA = VT_DATA;
window.VT_I18N = VT_I18N;
