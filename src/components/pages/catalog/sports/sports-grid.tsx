// FILE: src/components/pages/catalog/sports/sports-grid.tsx

import { ProductCard } from "../playgrounds/product-card";

const sportsProducts = [
  {
    id: 1,
    title: "Воркаут площадка",
    description: "Комплекс для уличных тренировок с турниками и брусьями",
    image: "/images/sports-workout.jpg",
    price: "от 180 000 ₽",
  },
  {
    id: 2,
    title: "Спортивный комплекс",
    description: "Многофункциональная спортивная площадка для различных видов тренировок",
    image: "/images/sports-complex.jpg",
    price: "от 320 000 ₽",
  },
  {
    id: 3,
    title: "Футбольные ворота",
    description: "Профессиональные металлические ворота для мини-футбола",
    image: "/images/sports-goals.jpg",
    price: "от 45 000 ₽",
  },
  {
    id: 4,
    title: "Баскетбольная стойка",
    description: "Регулируемая баскетбольная стойка с профессиональным щитом",
    image: "/images/sports-basketball.jpg",
    price: "от 65 000 ₽",
  },
  {
    id: 5,
    title: "Уличный тренажер",
    description: "Профессиональный уличный тренажер для всех групп мышц",
    image: "/images/sports-trainer.jpg",
    price: "от 55 000 ₽",
  },
  {
    id: 6,
    title: "Турник-брусья",
    description: "Комбинированный турник с брусьями для силовых тренировок",
    image: "/images/sports-bars.jpg",
    price: "от 35 000 ₽",
  },
];

export default function SportsGrid() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-20">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--color-neutral-100)" }}
          >
            Наше спортивное оборудование
          </h2>
          <p
            className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--color-neutral-60)" }}
          >
            Качественные тренажеры и оборудование для активного образа жизни
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sportsProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
