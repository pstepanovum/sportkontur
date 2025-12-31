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
    </>
  );
}
