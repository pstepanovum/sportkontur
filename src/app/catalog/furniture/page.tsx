// FILE: src/app/catalog/furniture/page.tsx

import Header from "@/components/ui/sections/header";
import FurnitureHero from "@/components/pages/catalog/furniture/furniture-hero";
import FurnitureGrid from "@/components/pages/catalog/furniture/furniture-grid";
import FurnitureFeatures from "@/components/pages/catalog/furniture/furniture-features";
import Footer from "@/components/ui/sections/footer";
import { SectionWrapper } from "@/components/ui/sections/helper/section-wrapper";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import FAQ from "@/components/pages/shared/faq";
import CTA from "@/components/ui/sections/cta";
import { generateSEO } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateSEO({
  title: "Уличная мебель для детей - Столики, скамейки, навесы",
  description: "Детская уличная мебель для площадок и дворов. Столики, скамейки, теневые навесы. Прочные материалы, безопасная конструкция для детских садов и школ.",
  keywords: [
    "уличная мебель для детей",
    "детские столики уличные",
    "скамейки детские",
    "теневые навесы",
    "мебель для площадок",
    "уличная мебель детский сад",
  ],
  path: "/catalog/furniture",
});

export default function FurniturePage() {
  return (
    <>
      <Header />

      <BlurWrapper>
        <main>
          <SectionWrapper headerTheme="dark">
            <FurnitureHero />
          </SectionWrapper>

          <SectionWrapper headerTheme="light">
            <FurnitureGrid />
          </SectionWrapper>

          <SectionWrapper headerTheme="dark">
            <FurnitureFeatures />
          </SectionWrapper>

          <SectionWrapper headerTheme="light">
            <FAQ />
          </SectionWrapper>

          <CTA />
          <Footer />
        </main>
      </BlurWrapper>
    </>
  );
}
