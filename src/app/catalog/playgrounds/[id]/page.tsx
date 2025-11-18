// FILE: src/app/catalog/playgrounds/[id]/page.tsx

import Header from "@/components/ui/sections/header";
import ProductDetail from "@/components/pages/catalog/product-detail";
import Footer from "@/components/ui/sections/footer";
import { SectionWrapper } from "@/components/ui/sections/helper/section-wrapper";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import CTA from "@/components/ui/sections/cta";
import { products } from "@/data/products";
import { generateSEO, getProductSchema, getBreadcrumbSchema } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return generateSEO({
      title: "Продукт не найден",
      description: "Запрашиваемый продукт не найден в каталоге.",
      noIndex: true,
    });
  }

  return generateSEO({
    title: `${product.name} - ${product.article}`,
    description: `${product.description} Цена: ${product.price}. Заказать в Иркутске.`,
    keywords: [product.name, product.article, "купить", "Иркутск"],
    path: `/catalog/playgrounds/${id}`,
    type: "product",
  });
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return null;
  }

  const productSchema = getProductSchema({
    name: product.name,
    description: product.description,
    price: parseInt(product.price.replace(/\D/g, '')) || 0,
    image: product.image,
    articleNumber: product.article,
    category: product.category,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Главная', url: '/' },
    { name: 'Каталог', url: '/catalog' },
    { name: 'Игровые комплексы', url: '/catalog/playgrounds' },
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
