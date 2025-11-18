// FILE: src/app/catalog/sports/page.tsx

import Header from "@/components/ui/sections/header";
import SportsHero from "@/components/pages/catalog/sports/sports-hero";
import SportsGrid from "@/components/pages/catalog/sports/sports-grid";
import SportsFeatures from "@/components/pages/catalog/sports/sports-features";
import Footer from "@/components/ui/sections/footer";
import { SectionWrapper } from "@/components/ui/sections/helper/section-wrapper";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import FAQ from "@/components/pages/shared/faq";
import CTA from "@/components/ui/sections/cta";
import { generateSEO } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateSEO({
  title: "Спортивное оборудование для детей - Уличные тренажеры",
  description: "Детское спортивное оборудование для улицы. Спортивные комплексы, турники, рукоходы, шведские стенки. Оборудование для школ, детских садов и дворов.",
  keywords: [
    "спортивное оборудование для детей",
    "уличные тренажеры",
    "детские турники",
    "спортивные комплексы улица",
    "рукоходы детские",
    "шведская стенка уличная",
  ],
  path: "/catalog/sports",
});

export default function SportsPage() {
  return (
    <>
      <Header />

      <BlurWrapper>
        <main>
          <SectionWrapper headerTheme="dark">
            <SportsHero />
          </SectionWrapper>

          <SectionWrapper headerTheme="light">
            <SportsGrid />
          </SectionWrapper>

          <SectionWrapper headerTheme="dark">
            <SportsFeatures />
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
