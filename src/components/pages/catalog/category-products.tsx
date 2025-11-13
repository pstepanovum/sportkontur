// FILE: src/components/pages/catalog/category-products.tsx

"use client";

import Link from "next/link";
import { products } from "@/data/products";
import { EmptyState } from "./empty-state";

interface CategoryProductsProps {
  categoryId: string;
}

export function CategoryProducts({ categoryId }: CategoryProductsProps) {
  const categoryProducts = products.filter(
    (product) => product.category === categoryId
  );

  if (categoryProducts.length === 0) {
    return (
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-20">
          <EmptyState message="В этой категории пока нет товаров" />
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-20">
        <div className="mb-6">
          <p className="text-sm" style={{ color: "var(--color-neutral-60)" }}>
            Найдено товаров: {categoryProducts.length}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {categoryProducts.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="block rounded-2xl overflow-hidden transition-colors cursor-pointer"
              style={{
                border: "1.5px solid var(--color-border-light)",
              }}
            >
              <div
                className="relative h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${product.image})`,
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor: "rgba(84, 181, 136, 0.15)",
                  }}
                />
              </div>

              <div className="p-6">
                <div
                  className="text-xs font-medium mb-2"
                  style={{ color: "var(--color-neutral-60)" }}
                >
                  Артикул: {product.article}
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "var(--color-neutral-100)" }}
                >
                  {product.name}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--color-neutral-60)" }}
                >
                  {product.description}
                </p>
                <div
                  className="text-lg font-bold"
                  style={{ color: "var(--color-primary-main)" }}
                >
                  {product.price}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
