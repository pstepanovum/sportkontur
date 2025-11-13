// FILE: src/data/categories.ts

export interface Category {
  id: string;
  name: string;
  description?: string;
  count?: number;
  href?: string;
}

export const categories: Category[] = [
  {
    id: "all",
    name: "Все товары",
    description: "Полный каталог оборудования для детских и спортивных площадок",
  },
  {
    id: "slides",
    name: "Горки",
    description: "Детские горки различных размеров и конфигураций",
    href: "/catalog/slides",
  },
  {
    id: "swings",
    name: "Качели",
    description: "Одинарные и двойные качели для детских площадок",
    href: "/catalog/swings",
  },
  {
    id: "balance-rockers",
    name: "Качалки-балансиры",
    description: "Балансиры для развития координации и равновесия",
    href: "/catalog/balance-rockers",
  },
  {
    id: "spring-rockers",
    name: "Качалки на пружине",
    description: "Пружинные качалки различных форм и размеров",
    href: "/catalog/spring-rockers",
  },
  {
    id: "carousels",
    name: "Карусели",
    description: "Карусели для групповых игр",
    href: "/catalog/carousels",
  },
  {
    id: "sandboxes",
    name: "Песочницы",
    description: "Песочницы с навесами и без для детских площадок",
    href: "/catalog/sandboxes",
  },
  {
    id: "playhouses",
    name: "Домики",
    description: "Игровые домики для сюжетно-ролевых игр",
    href: "/catalog/playhouses",
  },
  {
    id: "role-play",
    name: "Сюжетно-ролевые игровые элементы",
    description: "Элементы для развития воображения и социальных навыков",
    href: "/catalog/role-play",
  },
  {
    id: "play-complexes",
    name: "Игровые комплексы",
    description: "Многофункциональные игровые комплексы",
    href: "/catalog/play-complexes",
  },
  {
    id: "inclusive",
    name: "Инклюзивное оборудование",
    description: "Оборудование для детей с ограниченными возможностями",
    href: "/catalog/inclusive",
  },
  {
    id: "climbing",
    name: "Лазательные элементы",
    description: "Лестницы, сетки и элементы для лазания",
    href: "/catalog/climbing",
  },
  {
    id: "sports-kids",
    name: "Спортивное оборудование для детей",
    description: "Детские спортивные комплексы и тренажеры",
    href: "/catalog/sports-kids",
  },
  {
    id: "furniture",
    name: "Детские столики и скамейки",
    description: "Уличная мебель для детских площадок",
    href: "/catalog/furniture",
  },
  {
    id: "canopies",
    name: "Теневые навесы для детских учреждений",
    description: "Навесы для защиты от солнца и дождя",
    href: "/catalog/canopies",
  },
  {
    id: "interactive",
    name: "Интерактивные детские площадки",
    description: "Современные интерактивные игровые элементы",
    href: "/catalog/interactive",
  },
];
