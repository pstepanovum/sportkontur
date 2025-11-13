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
