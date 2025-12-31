// FILE: src/app/catalog/[category]/[id]/page.tsx

import Header from "@/components/ui/sections/header";
import Footer from "@/components/ui/sections/footer";
import CTA from "@/components/ui/sections/cta";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import { SectionWrapper } from "@/components/ui/sections/helper/section-wrapper";
import ProductDetail from "@/components/pages/catalog/product-detail";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

// Generate static params for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    category: product.category,
    id: product.id,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: { category: string; id: string };
}) {
  const { category, id } = await params;
  const product = products.find((p) => p.id === id);
  const categoryData = categories.find((c) => c.id === category);

  if (!product) {
    return null;
  }

  return (
    <>
      <Header />
      <BlurWrapper>
        <main>
          <SectionWrapper headerTheme="dark">
            <ProductDetail productId={id} categoryId={category} />
          </SectionWrapper>
          <CTA />
          <Footer />
        </main>
      </BlurWrapper>
    </>
  );
}
