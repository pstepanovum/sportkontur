// FILE: src/app/catalog/[category]/[id]/page.tsx

import Header from "@/components/ui/sections/header";
import Footer from "@/components/ui/sections/footer";
import CTA from "@/components/ui/sections/cta";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import { SectionWrapper } from "@/components/ui/sections/helper/section-wrapper";
import ProductDetail from "@/components/pages/catalog/product-detail";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { generateSEO, getProductSchema, getBreadcrumbSchema } from "@/lib/seo";
import type { Metadata } from "next";

interface ProductPageProps {
  params: Promise<{ category: string; id: string }>;
}

// Generate static params for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    category: product.category,
    id: product.id,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category, id } = await params;
  const product = products.find((p) => p.id === id);
  const categoryData = categories.find((c) => c.id === category);

  if (!product) {
    return null;
  }

  const productSchema = getProductSchema({
    name: product.name,
    description: product.description,
    price: parseInt(product.price.replace(/\D/g, '')) || 0,
    image: product.image,
    articleNumber: product.article,
    category: categoryData?.name || product.category,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Главная', url: '/' },
    { name: 'Каталог', url: '/catalog' },
    { name: categoryData?.name || 'Категория', url: `/catalog/${category}` },
    { name: product.name, url: `/catalog/${category}/${id}` },
  ]);

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
