// FILE: src/components/pages/catalog/playgrounds/product-card.tsx

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
      style={{
        border: "1.5px solid var(--color-border-light)",
      }}
    >
      {/* Product Image */}
      <div
        className="relative h-64 bg-gradient-to-br overflow-hidden"
        style={{
          background: "linear-gradient(135deg, var(--color-primary-surface) 0%, var(--color-neutral-20) 100%)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="text-6xl"
            style={{ color: "var(--color-neutral-40)" }}
          >
            🏗️
          </div>
        </div>
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
          <button
            className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            style={{
              backgroundColor: "var(--color-primary-main)",
              color: "white",
            }}
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
}
