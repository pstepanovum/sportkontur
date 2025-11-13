// FILE: src/components/pages/catalog/playgrounds/product-card.tsx

import Link from "next/link";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  href?: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const CardContent = (
    <>
      {/* Product Image */}
      <div
        className="relative h-64 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url(/images/hero-playground.jpg)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(84, 181, 136, 0.15)",
          }}
        />
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3
          className="text-xl font-semibold mb-2"
          style={{ color: "var(--color-neutral-100)" }}
        >
          {product.title}
        </h3>
        <p
          className="text-sm leading-relaxed mb-4"
          style={{ color: "var(--color-neutral-60)" }}
        >
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span
            className="text-lg font-bold"
            style={{ color: "var(--color-primary-main)" }}
          >
            {product.price}
          </span>
          <span
            className="px-4 py-2 rounded-lg text-sm font-medium"
            style={{
              backgroundColor: "var(--color-primary-main)",
              color: "white",
            }}
          >
            Подробнее
          </span>
        </div>
      </div>
    </>
  );

  if (product.href) {
    return (
      <Link
        href={product.href}
        className="block rounded-2xl overflow-hidden transition-colors cursor-pointer"
        style={{
          border: "1.5px solid var(--color-border-light)",
        }}
      >
        {CardContent}
      </Link>
    );
  }

  return (
    <div
      className="rounded-2xl overflow-hidden transition-colors"
      style={{
        border: "1.5px solid var(--color-border-light)",
      }}
    >
      {CardContent}
    </div>
  );
}
