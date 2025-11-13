// FILE: src/components/pages/catalog/product-detail.tsx

"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProductDetailProps {
  productId: string;
}

// Mock product data - in a real app, this would come from a database/API
const productData: Record<string, any> = {
  labirint: {
    name: "Лабиринт",
    article: "Р-11",
    height: "1550 мм",
    width: "2420 мм",
    length: "3250 мм",
    weight: "248 кг",
    age: "от 2 лет",
    description:
      "Игровой комплекс 'Лабиринт' - это многофункциональная конструкция для детских площадок, которая развивает координацию, ловкость и логическое мышление. Изготовлен из высококачественных материалов, устойчивых к различным погодным условиям. Все элементы конструкции имеют закругленные формы и безопасные соединения. Покрытие выполнено экологически чистыми красками, устойчивыми к выцветанию. Комплекс прошел сертификацию и соответствует всем требованиям ГОСТ.",
    features: [
      "Прочная металлическая конструкция",
      "Антикоррозийное покрытие",
      "Безопасные закругленные элементы",
      "Устойчивость к погодным условиям",
      "Сертифицировано ГОСТ",
      "Гарантия 5 лет",
    ],
    images: ["/images/hero-playground.jpg", "/images/cta-playground.jpg"],
  },
  castle: {
    name: "Игровой комплекс 'Замок'",
    article: "Р-22",
    height: "2800 мм",
    width: "4500 мм",
    length: "6200 мм",
    weight: "520 кг",
    age: "от 3 лет",
    description:
      "Большой игровой комплекс в виде замка с несколькими уровнями, горками и игровыми элементами. Идеально подходит для больших детских площадок.",
    features: [
      "Многоуровневая конструкция",
      "Несколько видов горок",
      "Лестницы и лазы",
      "Игровые панели",
      "Защита от ультрафиолета",
      "Гарантия 5 лет",
    ],
    images: ["/images/cta-playground.jpg", "/images/hero-playground.jpg"],
  },
  swing: {
    name: "Качели двойные",
    article: "Р-33",
    height: "2200 мм",
    width: "2000 мм",
    length: "3500 мм",
    weight: "180 кг",
    age: "от 3 лет",
    description:
      "Двойные качели с прочными металлическими стойками и безопасными сиденьями. Подходят для установки во дворах и парках.",
    features: [
      "Прочная рама из стали",
      "Безопасные сиденья",
      "Антикоррозийное покрытие",
      "Регулируемая высота подвеса",
      "Устойчивое основание",
      "Гарантия 5 лет",
    ],
    images: ["/images/hero-playground.jpg", "/images/cta-playground.jpg"],
  },
  sandbox: {
    name: "Песочница 'Кораблик'",
    article: "Р-44",
    height: "1800 мм",
    width: "2500 мм",
    length: "3000 мм",
    weight: "120 кг",
    age: "от 1 года",
    description:
      "Оригинальная песочница в виде корабля с навесом для защиты от солнца. Идеально подходит для маленьких детей.",
    features: [
      "Оригинальный дизайн",
      "Навес от солнца",
      "Безопасные края",
      "Обработка древесины",
      "Защита от гниения",
      "Гарантия 3 года",
    ],
    images: ["/images/cta-playground.jpg", "/images/hero-playground.jpg"],
  },
  slide: {
    name: "Горка спиральная",
    article: "Р-55",
    height: "2500 мм",
    width: "1500 мм",
    length: "3800 мм",
    weight: "220 кг",
    age: "от 4 лет",
    description:
      "Яркая спиральная горка с безопасным спуском и прочной конструкцией. Привлекательный элемент детской площадки.",
    features: [
      "Спиральный спуск",
      "Безопасные перила",
      "Прочная конструкция",
      "Яркие цвета",
      "Устойчивость к выцветанию",
      "Гарантия 5 лет",
    ],
    images: ["/images/hero-playground.jpg", "/images/cta-playground.jpg"],
  },
  carousel: {
    name: "Карусель 'Ромашка'",
    article: "Р-66",
    height: "1200 мм",
    width: "2800 мм",
    length: "2800 мм",
    weight: "350 кг",
    age: "от 3 лет",
    description:
      "Классическая карусель для 6-8 детей с прочной центральной осью и удобными поручнями.",
    features: [
      "Вместимость 6-8 детей",
      "Плавное вращение",
      "Удобные поручни",
      "Нескользящая поверхность",
      "Прочный подшипник",
      "Гарантия 5 лет",
    ],
    images: ["/images/cta-playground.jpg", "/images/hero-playground.jpg"],
  },
};

export default function ProductDetail({ productId }: ProductDetailProps) {
  const product = productData[productId];

  if (!product) {
    return (
      <section className="w-full pt-[120px] md:pt-[200px] pb-16 md:pb-24 bg-white min-h-screen flex items-center justify-center">
        <div className="px-5 md:px-20 max-w-[1400px] mx-auto w-full text-center">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--color-neutral-100)" }}
          >
            Товар не найден
          </h1>
          <Link href="/catalog">
            <Button>Вернуться в каталог</Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full pt-[120px] md:pt-[200px] pb-16 md:pb-24 bg-white">
      <div className="px-5 md:px-20 max-w-[1400px] mx-auto w-full">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm flex-wrap">
            <Link
              href="/"
              className="hover:opacity-70"
              style={{ color: "var(--color-neutral-60)" }}
            >
              Главная
            </Link>
            <span style={{ color: "var(--color-neutral-60)" }}>/</span>
            <Link
              href="/catalog"
              className="hover:opacity-70"
              style={{ color: "var(--color-neutral-60)" }}
            >
              Каталог
            </Link>
            <span style={{ color: "var(--color-neutral-60)" }}>/</span>
            <Link
              href="/catalog/playgrounds"
              className="hover:opacity-70"
              style={{ color: "var(--color-neutral-60)" }}
            >
              Игровые площадки
            </Link>
            <span style={{ color: "var(--color-neutral-60)" }}>/</span>
            <span style={{ color: "var(--color-neutral-100)" }}>
              {product.name}
            </span>
          </div>
        </div>

        {/* Product Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div>
            <div
              className="w-full aspect-square rounded-2xl mb-4 bg-cover bg-center"
              style={{
                backgroundImage: `url(${product.images[0]})`,
                border: "1.5px solid var(--color-border-light)",
              }}
            >
              <div
                className="w-full h-full rounded-2xl"
                style={{
                  backgroundColor: "rgba(84, 181, 136, 0.15)",
                }}
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                {product.images.slice(1).map((image: string, index: number) => (
                  <div
                    key={index}
                    className="aspect-square rounded-xl bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${image})`,
                      border: "1.5px solid var(--color-border-light)",
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div
              className="text-sm font-medium mb-2"
              style={{ color: "var(--color-neutral-60)" }}
            >
              Артикул: {product.article}
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              style={{
                color: "var(--color-neutral-100)",
              }}
            >
              {product.name}
            </h1>

            {/* Specifications */}
            <div
              className="rounded-2xl p-6 mb-6"
              style={{
                border: "1.5px solid var(--color-border-light)",
              }}
            >
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: "var(--color-neutral-100)" }}
              >
                Характеристики
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span style={{ color: "var(--color-neutral-60)" }}>
                    Высота
                  </span>
                  <span
                    className="font-medium"
                    style={{ color: "var(--color-neutral-100)" }}
                  >
                    {product.height}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--color-neutral-60)" }}>
                    Ширина
                  </span>
                  <span
                    className="font-medium"
                    style={{ color: "var(--color-neutral-100)" }}
                  >
                    {product.width}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--color-neutral-60)" }}>
                    Длина
                  </span>
                  <span
                    className="font-medium"
                    style={{ color: "var(--color-neutral-100)" }}
                  >
                    {product.length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--color-neutral-60)" }}>Вес</span>
                  <span
                    className="font-medium"
                    style={{ color: "var(--color-neutral-100)" }}
                  >
                    {product.weight}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--color-neutral-60)" }}>
                    Возраст
                  </span>
                  <span
                    className="font-medium"
                    style={{ color: "var(--color-neutral-100)" }}
                  >
                    {product.age}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link href="/contact" className="flex-1">
                <Button className="w-full">Узнать стоимость</Button>
              </Link>
              <Link href="/contact" className="flex-1">
                <button
                  className="w-full px-6 py-3 rounded-xl text-base font-medium transition-colors cursor-pointer"
                  style={{
                    border: "1.5px solid var(--color-primary-main)",
                    color: "var(--color-primary-main)",
                    backgroundColor: "transparent",
                  }}
                >
                  Заказать звонок
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-16">
          <h2
            className="text-2xl md:text-3xl font-bold mb-6"
            style={{ color: "var(--color-neutral-100)" }}
          >
            Описание товара
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed mb-6"
            style={{ color: "var(--color-neutral-60)" }}
          >
            {product.description}
          </p>
        </div>

        {/* Features */}
        <div>
          <h2
            className="text-2xl md:text-3xl font-bold mb-6"
            style={{ color: "var(--color-neutral-100)" }}
          >
            Особенности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.features.map((feature: string, index: number) => (
              <div
                key={index}
                className="p-4 rounded-xl flex items-center gap-3"
                style={{
                  border: "1.5px solid var(--color-border-light)",
                }}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: "var(--color-primary-surface)",
                  }}
                >
                  <span style={{ color: "var(--color-primary-main)" }}>✓</span>
                </div>
                <span
                  className="text-sm"
                  style={{ color: "var(--color-neutral-100)" }}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
