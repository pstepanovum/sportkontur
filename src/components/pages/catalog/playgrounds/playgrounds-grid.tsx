// FILE: src/components/pages/catalog/playgrounds/playgrounds-grid.tsx

import { ProductCard } from "./product-card";

const playgroundProducts = [
  {
    id: 1,
    title: "Игровой комплекс 'Замок'",
    description: "Многофункциональная игровая площадка с горками, лестницами и игровыми элементами",
    image: "/images/playground-castle.jpg",
    price: "от 250 000 ₽",
  },
  {
    id: 2,
    title: "Качели двойные",
    description: "Прочные металлические качели с безопасными сиденьями",
    image: "/images/playground-swing.jpg",
    price: "от 45 000 ₽",
  },
  {
    id: 3,
    title: "Песочница 'Кораблик'",
    description: "Оригинальная песочница в виде корабля с навесом",
    image: "/images/playground-sandbox.jpg",
    price: "от 35 000 ₽",
  },
  {
    id: 4,
    title: "Горка спиральная",
    description: "Яркая спиральная горка с безопасным спуском",
    image: "/images/playground-slide.jpg",
    price: "от 55 000 ₽",
  },
  {
    id: 5,
    title: "Карусель 'Ромашка'",
    description: "Классическая карусель для 6-8 детей",
    image: "/images/playground-carousel.jpg",
    price: "от 65 000 ₽",
  },
  {
    id: 6,
    title: "Игровой домик",
    description: "Уютный домик для ролевых игр с окнами и дверью",
    image: "/images/playground-house.jpg",
    price: "от 40 000 ₽",
  },
];

export default function PlaygroundsGrid() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-20">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--color-neutral-100)" }}
          >
            Наши игровые площадки
          </h2>
          <p
            className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--color-neutral-60)" }}
          >
            Широкий ассортимент игрового оборудования для детей всех возрастов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playgroundProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
