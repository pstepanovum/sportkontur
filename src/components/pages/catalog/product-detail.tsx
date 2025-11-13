// FILE: src/components/pages/catalog/product-detail.tsx

"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

interface ProductDetailProps {
  productId: string;
  categoryId?: string;
}

export default function ProductDetail({
  productId,
  categoryId,
}: ProductDetailProps) {
  // Find product from data file
  const product = products.find((p) => p.id === productId);
  const category = categoryId
    ? categories.find((c) => c.id === categoryId)
    : null;

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
            {category && (
              <>
                <span style={{ color: "var(--color-neutral-60)" }}>/</span>
                <Link
                  href={`/catalog/${category.id}`}
                  className="hover:opacity-70"
                  style={{ color: "var(--color-neutral-60)" }}
                >
                  {category.name}
                </Link>
              </>
            )}
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
                backgroundImage: `url(${product.image})`,
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
            {product.specs && (
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
                  {product.specs.height && (
                    <div className="flex justify-between">
                      <span style={{ color: "var(--color-neutral-60)" }}>
                        Высота
                      </span>
                      <span
                        className="font-medium"
                        style={{ color: "var(--color-neutral-100)" }}
                      >
                        {product.specs.height}
                      </span>
                    </div>
                  )}
                  {product.specs.width && (
                    <div className="flex justify-between">
                      <span style={{ color: "var(--color-neutral-60)" }}>
                        Ширина
                      </span>
                      <span
                        className="font-medium"
                        style={{ color: "var(--color-neutral-100)" }}
                      >
                        {product.specs.width}
                      </span>
                    </div>
                  )}
                  {product.specs.length && (
                    <div className="flex justify-between">
                      <span style={{ color: "var(--color-neutral-60)" }}>
                        Длина
                      </span>
                      <span
                        className="font-medium"
                        style={{ color: "var(--color-neutral-100)" }}
                      >
                        {product.specs.length}
                      </span>
                    </div>
                  )}
                  {product.specs.weight && (
                    <div className="flex justify-between">
                      <span style={{ color: "var(--color-neutral-60)" }}>
                        Вес
                      </span>
                      <span
                        className="font-medium"
                        style={{ color: "var(--color-neutral-100)" }}
                      >
                        {product.specs.weight}
                      </span>
                    </div>
                  )}
                  {product.specs.age && (
                    <div className="flex justify-between">
                      <span style={{ color: "var(--color-neutral-60)" }}>
                        Возраст
                      </span>
                      <span
                        className="font-medium"
                        style={{ color: "var(--color-neutral-100)" }}
                      >
                        {product.specs.age}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

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
        {product.features && product.features.length > 0 && (
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
                    <span style={{ color: "var(--color-primary-main)" }}>
                      ✓
                    </span>
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
        )}
      </div>
    </section>
  );
}
