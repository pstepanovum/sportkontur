// FILE: src/app/catalog/playgrounds/[id]/page.tsx

import Header from "@/components/ui/sections/header";
import ProductDetail from "@/components/pages/catalog/product-detail";
import Footer from "@/components/ui/sections/footer";
import { SectionWrapper } from "@/components/ui/sections/helper/section-wrapper";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import CTA from "@/components/ui/sections/cta";
import { products } from "@/data/products";

// Generate static params for all playground-related products
export async function generateStaticParams() {
  // Include all products (or specify which categories are "playground equipment")
  const playgroundCategories = [
    "slides",
    "swings",
    "balance-rockers",
    "spring-rockers",
    "carousels",
    "sandboxes",
    "playhouses",
    "play-complexes",
    "climbing",
    "sports-kids",
    "furniture",
    "canopies",
    "interactive",
  ];

  const playgroundProducts = products.filter((product) =>
    playgroundCategories.includes(product.category)
  );

  return playgroundProducts.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return null;
  }

  const productSchema = getProductSchema({
    name: product.name,
    description: product.description,
    price: parseInt(product.price.replace(/\D/g, "")) || 0,
    image: product.image,
    articleNumber: product.article,
    category: product.category,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Главная", url: "/" },
    { name: "Каталог", url: "/catalog" },
    { name: "Игровые комплексы", url: "/catalog/playgrounds" },
    { name: product.name, url: `/catalog/playgrounds/${id}` },
  ]);

  return (
    <>
      <Header />
      <BlurWrapper>
        <main>
          <SectionWrapper headerTheme="dark">
            <ProductDetail productId={id} />
          </SectionWrapper>
          <CTA />
          <Footer />
        </main>
      </BlurWrapper>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
