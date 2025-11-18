// FILE: src/app/catalog/page.tsx

import Header from "@/components/ui/sections/header";
import CatalogHero from "@/components/pages/catalog/catalog-hero";
import CatalogFilter from "@/components/pages/catalog/catalog-filter";
import Footer from "@/components/ui/sections/footer";
import { SectionWrapper } from "@/components/ui/sections/helper/section-wrapper";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import CTA from "@/components/ui/sections/cta";
import { generateSEO } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateSEO({
  title: "Каталог детских площадок и оборудования",
  description: "Полный каталог детских игровых площадок, спортивного оборудования, уличной мебели и резинового покрытия. Горки, качели, песочницы, игровые комплексы и многое другое.",
  keywords: [
    "каталог детских площадок",
    "детское оборудование каталог",
    "горки для детей",
    "качели детские",
    "песочницы",
    "игровые комплексы каталог",
  ],
  path: "/catalog",
});

export default function CatalogPage() {
  return (
    <>
      <Header />

      <BlurWrapper>
        <main>
          <SectionWrapper headerTheme="dark">
            <CatalogHero />
          </SectionWrapper>

          <SectionWrapper headerTheme="light">
            <CatalogFilter />
          </SectionWrapper>

          <CTA />
          <Footer />
        </main>
      </BlurWrapper>
    </>
  );
}
