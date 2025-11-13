// FILE: src/app/catalog/page.tsx

import Header from "@/components/ui/sections/header";
import CatalogHero from "@/components/pages/catalog/catalog-hero";
import CatalogFilter from "@/components/pages/catalog/catalog-filter";
import Footer from "@/components/ui/sections/footer";
import { SectionWrapper } from "@/components/ui/sections/helper/section-wrapper";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import CTA from "@/components/ui/sections/cta";

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
