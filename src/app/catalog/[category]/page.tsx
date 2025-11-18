// FILE: src/app/catalog/[category]/page.tsx

import Header from "@/components/ui/sections/header";
import Footer from "@/components/ui/sections/footer";
import { CTA } from "@/components/ui/sections/cta";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import SectionWrapper from "@/components/ui/sections/helper/section-wrapper";
import { PageHero } from "@/components/pages/shared/page-hero";
import { CategoryProducts } from "@/components/pages/catalog/category-products";
import { categories } from "@/data/categories";
import { notFound } from "next/navigation";
import { generateSEO } from "@/lib/seo";
import type { Metadata } from "next";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryData = categories.find((cat) => cat.id === category);

  if (!categoryData || categoryData.id === "all") {
    return generateSEO({
      title: "Категория не найдена",
      description: "Запрашиваемая категория не найдена в каталоге.",
      noIndex: true,
    });
  }

  return generateSEO({
    title: `${categoryData.name} - Каталог`,
    description: categoryData.description || `Каталог товаров категории ${categoryData.name}. Качественное оборудование для детских площадок от производителя в Иркутске.`,
    keywords: [categoryData.name, "детское оборудование", "купить в Иркутске"],
    path: `/catalog/${category}`,
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  // Find the category from our data
  const categoryData = categories.find((cat) => cat.id === category);

  // If category doesn't exist, show 404
  if (!categoryData || categoryData.id === "all") {
    notFound();
  }

  return (
    <>
      <Header />
      <BlurWrapper>
        <main>
          <SectionWrapper headerTheme="dark">
            <PageHero
              title={categoryData.name}
              description={
                categoryData.description ||
                `Каталог товаров категории ${categoryData.name}`
              }
            />
          </SectionWrapper>
          <SectionWrapper headerTheme="light">
            <CategoryProducts categoryId={category} />
          </SectionWrapper>
          <CTA />
          <Footer />
        </main>
      </BlurWrapper>
    </>
  );
}
