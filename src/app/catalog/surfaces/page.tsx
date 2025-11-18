// FILE: src/app/catalog/surfaces/page.tsx

import Header from "@/components/ui/sections/header";
import SurfacesHero from "@/components/pages/catalog/surfaces/surfaces-hero";
import SurfacesGrid from "@/components/pages/catalog/surfaces/surfaces-grid";
import SurfacesFeatures from "@/components/pages/catalog/surfaces/surfaces-features";
import Footer from "@/components/ui/sections/footer";
import { SectionWrapper } from "@/components/ui/sections/helper/section-wrapper";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import FAQ from "@/components/pages/shared/faq";
import CTA from "@/components/ui/sections/cta";
import { generateSEO } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateSEO({
  title: "Резиновое покрытие для детских площадок - Безопасное покрытие",
  description: "Резиновое покрытие для детских площадок и спортивных зон. Травмобезопасное, износостойкое покрытие. Монтаж резинового покрытия в Иркутске.",
  keywords: [
    "резиновое покрытие для площадок",
    "покрытие детской площадки",
    "травмобезопасное покрытие",
    "резиновая плитка",
    "покрытие для спортивных площадок",
    "монтаж резинового покрытия",
  ],
  path: "/catalog/surfaces",
});

export default function SurfacesPage() {
  return (
    <>
      <Header />

      <BlurWrapper>
        <main>
          <SectionWrapper headerTheme="dark">
            <SurfacesHero />
          </SectionWrapper>

          <SectionWrapper headerTheme="light">
            <SurfacesGrid />
          </SectionWrapper>

          <SectionWrapper headerTheme="dark">
            <SurfacesFeatures />
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
