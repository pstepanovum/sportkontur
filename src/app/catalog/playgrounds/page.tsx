// FILE: src/app/catalog/playgrounds/page.tsx

import Header from "@/components/ui/sections/header";
import PlaygroundsHero from "@/components/pages/catalog/playgrounds/playgrounds-hero";
import PlaygroundsGrid from "@/components/pages/catalog/playgrounds/playgrounds-grid";
import PlaygroundsFeatures from "@/components/pages/catalog/playgrounds/playgrounds-features";
import Footer from "@/components/ui/sections/footer";
import { SectionWrapper } from "@/components/ui/sections/helper/section-wrapper";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import FAQ from "@/components/pages/shared/faq";
import CTA from "@/components/ui/sections/cta";

export default function PlaygroundsPage() {
  return (
    <>
      <Header />

      <BlurWrapper>
        <main>
          <SectionWrapper headerTheme="dark">
            <PlaygroundsHero />
          </SectionWrapper>

          <SectionWrapper headerTheme="light">
            <PlaygroundsGrid />
          </SectionWrapper>

          <SectionWrapper headerTheme="dark">
            <PlaygroundsFeatures />
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
