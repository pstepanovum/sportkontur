// FILE: src/components/pages/catalog/furniture/furniture-grid.tsx

import { ProductCard } from "../playgrounds/product-card";

const furnitureProducts = [
  {
    id: 1,
    title: "Скамейка парковая",
    description: "Удобная скамейка с деревянными планками и металлическим каркасом",
    image: "/images/furniture-bench.jpg",
    price: "от 15 000 ₽",
  },
  {
    id: 2,
    title: "Стол со скамьями",
    description: "Комплект уличной мебели для отдыха и пикников",
    image: "/images/furniture-table.jpg",
    price: "от 35 000 ₽",
  },
  {
    id: 3,
    title: "Урна уличная",
    description: "Прочная металлическая урна с антивандальным покрытием",
    image: "/images/furniture-bin.jpg",
    price: "от 8 000 ₽",
  },
  {
    id: 4,
    title: "Велопарковка",
    description: "Удобная стойка для парковки велосипедов на 5 мест",
    image: "/images/furniture-bike.jpg",
    price: "от 25 000 ₽",
  },
  {
    id: 5,
    title: "Цветочница",
    description: "Декоративная цветочница для озеленения территории",
    image: "/images/furniture-planter.jpg",
    price: "от 12 000 ₽",
  },
  {
    id: 6,
    title: "Ограждение декоративное",
    description: "Металлическое ограждение для зонирования пространства",
    image: "/images/furniture-fence.jpg",
    price: "от 3 500 ₽/м",
  },
];

export default function FurnitureGrid() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-20">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--color-neutral-100)" }}
          >
            Наша уличная мебель
          </h2>
          <p
            className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--color-neutral-60)" }}
          >
            Функциональная и долговечная мебель для общественных пространств
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {furnitureProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
