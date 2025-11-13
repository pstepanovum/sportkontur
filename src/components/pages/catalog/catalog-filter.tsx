// FILE: src/components/pages/catalog/catalog-filter.tsx

"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { EmptyState } from "./empty-state";
import { categories as baseCategories } from "@/data/categories";
import { products } from "@/data/products";

export default function CatalogFilter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Calculate category counts dynamically from products
  const categoriesWithCounts = useMemo(() => {
    return baseCategories.map((category) => {
      const count =
        category.id === "all"
          ? products.length
          : products.filter((p) => p.category === category.id).length;
      return { ...category, count };
    });
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            {/* Search */}
            <div className="mb-6">
              <label
                className="block text-sm font-medium mb-3"
                style={{ color: "var(--color-neutral-100)" }}
              >
                Поиск
              </label>
              <input
                type="text"
                placeholder="Найти товар..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-base"
                style={{
                  border: "1.5px solid var(--color-border-light)",
                  color: "var(--color-neutral-100)",
                }}
              />
            </div>

            {/* Categories */}
            <div>
              <label
                className="block text-sm font-medium mb-3"
                style={{ color: "var(--color-neutral-100)" }}
              >
                Категории
              </label>
              <div className="space-y-2">
                {categoriesWithCounts.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer"
                    style={{
                      backgroundColor:
                        selectedCategory === category.id
                          ? "var(--color-primary-main)"
                          : "var(--color-neutral-20)",
                      color:
                        selectedCategory === category.id
                          ? "white"
                          : "var(--color-neutral-100)",
                    }}
                  >
                    <span className="flex items-center justify-between">
                      <span>{category.name}</span>
                      <span
                        className="text-xs"
                        style={{
                          opacity: selectedCategory === category.id ? 0.9 : 0.6,
                        }}
                      >
                        {category.count}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Reset Filters */}
            {(searchQuery || selectedCategory !== "all") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="w-full mt-6 px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer"
                style={{
                  border: "1.5px solid var(--color-border-light)",
                  color: "var(--color-neutral-100)",
                }}
              >
                Сбросить фильтры
              </button>
            )}
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6">
              <p
                className="text-sm"
                style={{ color: "var(--color-neutral-60)" }}
              >
                Найдено товаров: {filteredProducts.length}
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
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
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
