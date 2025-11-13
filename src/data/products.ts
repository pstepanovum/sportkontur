// FILE: src/data/products.ts

export interface Product {
  id: string;
  name: string;
  category: string;
  article: string;
  price: string;
  description: string;
  image: string;
  href: string;
  specs?: {
    height?: string;
    width?: string;
    length?: string;
    weight?: string;
    age?: string;
  };
  features?: string[];
}

// Mock product data - will be replaced with PostgreSQL database
export const products: Product[] = [
  // Горки (Slides)
  {
    id: "slide-spiral",
    name: "Горка спиральная",
    category: "slides",
    article: "ГР-01",
    price: "от 55 000 ₽",
    description: "Яркая спиральная горка с безопасным спуском. Привлекательный элемент для детской площадки в Иркутске.",
    image: "/images/hero-playground.jpg",
    href: "/catalog/slides/slide-spiral",
    specs: {
      height: "2500 мм",
      width: "1500 мм",
      length: "3800 мм",
      weight: "220 кг",
      age: "от 4 лет",
    },
    features: [
      "Спиральный спуск",
      "Безопасные перила",
      "Прочная конструкция",
      "Яркие цвета",
      "Устойчивость к выцветанию",
      "Гарантия 5 лет",
    ],
  },
  {
    id: "slide-wave",
    name: "Горка волна",
    category: "slides",
    article: "ГР-02",
    price: "от 48 000 ₽",
    description: "Горка с волнообразным спуском для дополнительных ощущений. Подходит для установки в парках и дворах.",
    image: "/images/cta-playground.jpg",
    href: "/catalog/slides/slide-wave",
    specs: {
      height: "2200 мм",
      width: "1400 мм",
      length: "3500 мм",
      weight: "195 кг",
      age: "от 3 лет",
    },
  },

  // Качели (Swings)
  {
    id: "swing-double",
    name: "Качели двойные",
    category: "swings",
    article: "КЧ-01",
    price: "от 45 000 ₽",
    description: "Двойные качели с прочными металлическими стойками и безопасными сиденьями. Идеально подходят для дворов Иркутска.",
    image: "/images/hero-playground.jpg",
    href: "/catalog/swings/swing-double",
    specs: {
      height: "2200 мм",
      width: "2000 мм",
      length: "3500 мм",
      weight: "180 кг",
      age: "от 3 лет",
    },
    features: [
      "Прочная рама из стали",
      "Безопасные сиденья",
      "Антикоррозийное покрытие",
      "Регулируемая высота подвеса",
      "Устойчивое основание",
      "Гарантия 5 лет",
    ],
  },
  {
    id: "swing-nest",
    name: "Качели-гнездо",
    category: "swings",
    article: "КЧ-02",
    price: "от 38 000 ₽",
    description: "Популярные качели-гнездо для группового катания. Выдерживают нескольких детей одновременно.",
    image: "/images/cta-playground.jpg",
    href: "/catalog/swings/swing-nest",
    specs: {
      height: "2400 мм",
      width: "1800 мм",
      length: "3000 мм",
      weight: "165 кг",
      age: "от 4 лет",
    },
  },

  // Качалки-балансиры (Balance Rockers)
  {
    id: "balance-seesaw",
    name: "Балансир-качалка двойная",
    category: "balance-rockers",
    article: "БЛ-01",
    price: "от 28 000 ₽",
    description: "Классическая качалка-балансир на двоих детей. Развивает координацию и навыки взаимодействия.",
    image: "/images/hero-playground.jpg",
    href: "/catalog/balance-rockers/balance-seesaw",
    specs: {
      height: "800 мм",
      width: "400 мм",
      length: "2800 мм",
      weight: "85 кг",
      age: "от 3 лет",
    },
  },
  {
    id: "balance-quad",
    name: "Балансир четырехместный",
    category: "balance-rockers",
    article: "БЛ-02",
    price: "от 42 000 ₽",
    description: "Балансир для четверых детей с безопасными ручками и удобными сиденьями.",
    image: "/images/cta-playground.jpg",
    href: "/catalog/balance-rockers/balance-quad",
    specs: {
      height: "900 мм",
      width: "1200 мм",
      length: "2400 мм",
      weight: "125 кг",
      age: "от 4 лет",
    },
  },

  // Качалки на пружине (Spring Rockers)
  {
    id: "spring-horse",
    name: "Качалка на пружине 'Лошадка'",
    category: "spring-rockers",
    article: "ПР-01",
    price: "от 18 000 ₽",
    description: "Яркая качалка в виде лошадки на прочной пружине. Любимое развлечение малышей.",
    image: "/images/hero-playground.jpg",
    href: "/catalog/spring-rockers/spring-horse",
    specs: {
      height: "900 мм",
      width: "350 мм",
      length: "800 мм",
      weight: "45 кг",
      age: "от 2 лет",
    },
  },
  {
    id: "spring-motorcycle",
    name: "Качалка на пружине 'Мотоцикл'",
    category: "spring-rockers",
    article: "ПР-02",
    price: "от 20 000 ₽",
    description: "Качалка в виде мотоцикла с рулем и удобным сиденьем. Развивает вестибулярный аппарат.",
    image: "/images/cta-playground.jpg",
    href: "/catalog/spring-rockers/spring-motorcycle",
    specs: {
      height: "950 мм",
      width: "400 мм",
      length: "850 мм",
      weight: "48 кг",
      age: "от 3 лет",
    },
  },

  // Карусели (Carousels)
  {
    id: "carousel-daisy",
    name: "Карусель 'Ромашка'",
    category: "carousels",
    article: "КР-01",
    price: "от 65 000 ₽",
    description: "Классическая карусель для 6-8 детей с прочной центральной осью и удобными поручнями. Плавное вращение.",
    image: "/images/cta-playground.jpg",
    href: "/catalog/carousels/carousel-daisy",
    specs: {
      height: "1200 мм",
      width: "2800 мм",
      length: "2800 мм",
      weight: "350 кг",
      age: "от 3 лет",
    },
    features: [
      "Вместимость 6-8 детей",
      "Плавное вращение",
      "Удобные поручни",
      "Нескользящая поверхность",
      "Прочный подшипник",
      "Гарантия 5 лет",
    ],
  },

  // Песочницы (Sandboxes)
  {
    id: "sandbox-boat",
    name: "Песочница 'Кораблик'",
    category: "sandboxes",
    article: "ПС-01",
    price: "от 35 000 ₽",
    description: "Оригинальная песочница в виде корабля с навесом для защиты от солнца. Идеально для малышей.",
    image: "/images/cta-playground.jpg",
    href: "/catalog/sandboxes/sandbox-boat",
    specs: {
      height: "1800 мм",
      width: "2500 мм",
      length: "3000 мм",
      weight: "120 кг",
      age: "от 1 года",
    },
    features: [
      "Оригинальный дизайн",
      "Навес от солнца",
      "Безопасные края",
      "Обработка древесины",
      "Защита от гниения",
      "Гарантия 3 года",
    ],
  },
  {
    id: "sandbox-hexagon",
    name: "Песочница шестиугольная",
    category: "sandboxes",
    article: "ПС-02",
    price: "от 25 000 ₽",
    description: "Вместительная шестиугольная песочница с удобными бортиками для сидения.",
    image: "/images/hero-playground.jpg",
    href: "/catalog/sandboxes/sandbox-hexagon",
    specs: {
      height: "400 мм",
      width: "2200 мм",
      length: "2200 мм",
      weight: "95 кг",
      age: "от 1 года",
    },
  },

  // Домики (Playhouses)
  {
    id: "playhouse-cottage",
    name: "Домик 'Сказка'",
    category: "playhouses",
    article: "ДМ-01",
    price: "от 85 000 ₽",
    description: "Уютный игровой домик с окнами и дверью. Создает пространство для сюжетно-ролевых игр.",
    image: "/images/hero-playground.jpg",
    href: "/catalog/playhouses/playhouse-cottage",
    specs: {
      height: "2200 мм",
      width: "1800 мм",
      length: "2000 мм",
      weight: "280 кг",
      age: "от 3 лет",
    },
  },

  // Игровые комплексы (Play Complexes)
  {
    id: "complex-castle",
    name: "Игровой комплекс 'Замок'",
    category: "play-complexes",
    article: "ИК-01",
    price: "от 250 000 ₽",
    description: "Большой многофункциональный комплекс в виде замка с горками, лестницами и игровыми элементами для детей разного возраста.",
    image: "/images/cta-playground.jpg",
    href: "/catalog/play-complexes/complex-castle",
    specs: {
      height: "2800 мм",
      width: "4500 мм",
      length: "6200 мм",
      weight: "520 кг",
      age: "от 3 лет",
    },
    features: [
      "Многоуровневая конструкция",
      "Несколько видов горок",
      "Лестницы и лазы",
      "Игровые панели",
      "Защита от ультрафиолета",
      "Гарантия 5 лет",
    ],
  },
  {
    id: "complex-labyrinth",
    name: "Лабиринт",
    category: "play-complexes",
    article: "ИК-02",
    price: "от 180 000 ₽",
    description: "Многофункциональный комплекс для развития координации, ловкости и логического мышления детей.",
    image: "/images/hero-playground.jpg",
    href: "/catalog/play-complexes/complex-labyrinth",
    specs: {
      height: "1550 мм",
      width: "2420 мм",
      length: "3250 мм",
      weight: "248 кг",
      age: "от 2 лет",
    },
    features: [
      "Прочная металлическая конструкция",
      "Антикоррозийное покрытие",
      "Безопасные закругленные элементы",
      "Устойчивость к погодным условиям",
      "Сертифицировано ГОСТ",
      "Гарантия 5 лет",
    ],
  },

  // Лазательные элементы (Climbing)
  {
    id: "climbing-wall",
    name: "Скалодром детский",
    category: "climbing",
    article: "ЛЗ-01",
    price: "от 95 000 ₽",
    description: "Детский скалодром с разноцветными зацепами. Развивает силу, ловкость и смелость.",
    image: "/images/hero-playground.jpg",
    href: "/catalog/climbing/climbing-wall",
    specs: {
      height: "2400 мм",
      width: "3000 мм",
      length: "800 мм",
      weight: "320 кг",
      age: "от 5 лет",
    },
  },

  // Спортивное оборудование (Sports for Kids)
  {
    id: "sports-complex",
    name: "Детский спортивный комплекс",
    category: "sports-kids",
    article: "СП-01",
    price: "от 120 000 ₽",
    description: "Уличный спортивный комплекс с турниками, брусьями и рукоходом для физического развития детей.",
    image: "/images/cta-playground.jpg",
    href: "/catalog/sports-kids/sports-complex",
    specs: {
      height: "2500 мм",
      width: "3500 мм",
      length: "4000 мм",
      weight: "380 кг",
      age: "от 6 лет",
    },
  },

  // Мебель (Furniture)
  {
    id: "table-bench-set",
    name: "Столик со скамейками",
    category: "furniture",
    article: "МБ-01",
    price: "от 32 000 ₽",
    description: "Детский столик с двумя скамейками для творчества и игр на свежем воздухе.",
    image: "/images/hero-playground.jpg",
    href: "/catalog/furniture/table-bench-set",
    specs: {
      height: "600 мм",
      width: "1200 мм",
      length: "800 мм",
      weight: "75 кг",
      age: "от 3 лет",
    },
  },

  // Навесы (Canopies)
  {
    id: "canopy-flower",
    name: "Теневой навес 'Цветок'",
    category: "canopies",
    article: "НВ-01",
    price: "от 145 000 ₽",
    description: "Большой теневой навес в виде цветка для защиты детей от солнца и дождя на площадках Иркутска.",
    image: "/images/cta-playground.jpg",
    href: "/catalog/canopies/canopy-flower",
    specs: {
      height: "3200 мм",
      width: "4000 мм",
      length: "4000 мм",
      weight: "450 кг",
      age: "для всех возрастов",
    },
  },

  // Интерактивное оборудование (Interactive)
  {
    id: "interactive-panel",
    name: "Интерактивная игровая панель",
    category: "interactive",
    article: "ИН-01",
    price: "от 55 000 ₽",
    description: "Современная интерактивная панель с музыкальными и развивающими элементами.",
    image: "/images/hero-playground.jpg",
    href: "/catalog/interactive/interactive-panel",
    specs: {
      height: "1400 мм",
      width: "1200 мм",
      length: "200 мм",
      weight: "65 кг",
      age: "от 2 лет",
    },
  },
];
