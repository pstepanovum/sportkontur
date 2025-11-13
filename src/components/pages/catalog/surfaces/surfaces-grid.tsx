// FILE: src/components/pages/catalog/surfaces/surfaces-grid.tsx

import { ProductCard } from "../playgrounds/product-card";

const surfaceProducts = [
  {
    id: 1,
    title: "Резиновая крошка",
    description: "Бесшовное травмобезопасное покрытие из цветной резиновой крошки",
    image: "/images/surface-rubber.jpg",
    price: "от 1 800 ₽/м²",
  },
  {
    id: 2,
    title: "Искусственная трава",
    description: "Износостойкая искусственная трава для игровых и спортивных площадок",
    image: "/images/surface-grass.jpg",
    price: "от 1 200 ₽/м²",
  },
  {
    id: 3,
    title: "Модульные покрытия",
    description: "Пластиковые модульные плитки для быстрого монтажа",
    image: "/images/surface-modular.jpg",
    price: "от 950 ₽/м²",
  },
  {
    id: 4,
    title: "EPDM покрытие",
    description: "Цветное бесшовное покрытие из EPDM гранул высокого качества",
    image: "/images/surface-epdm.jpg",
    price: "от 2 200 ₽/м²",
  },
  {
    id: 5,
    title: "Резиновая плитка",
    description: "Прочная резиновая плитка различных цветов и толщины",
    image: "/images/surface-tile.jpg",
    price: "от 1 100 ₽/м²",
  },
  {
    id: 6,
    title: "Наливное покрытие",
    description: "Бесшовное полиуретановое покрытие для спортивных площадок",
    image: "/images/surface-poured.jpg",
    price: "от 2 500 ₽/м²",
  },
];

export default function SurfacesGrid() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-20">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--color-neutral-100)" }}
          >
            Наши покрытия
          </h2>
          <p
            className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--color-neutral-60)" }}
          >
            Безопасные и долговечные решения для любых площадок
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {surfaceProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
