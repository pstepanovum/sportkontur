// FILE: src/app/projects/parks/page.tsx

import Header from "@/components/ui/sections/header";
import ParksHero from "@/components/pages/projects/parks/parks-hero";
import ParksGallery from "@/components/pages/projects/parks/parks-gallery";
import ParksFeatures from "@/components/pages/projects/parks/parks-features";
import Footer from "@/components/ui/sections/footer";
import { SectionWrapper } from "@/components/ui/sections/helper/section-wrapper";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import FAQ from "@/components/pages/shared/faq";
import CTA from "@/components/ui/sections/cta";

export default function ParksPage() {
  return (
    <>
      <Header />

      <BlurWrapper>
        <main>
          <SectionWrapper headerTheme="dark">
            <ParksHero />
          </SectionWrapper>

          <SectionWrapper headerTheme="light">
            <ParksGallery />
          </SectionWrapper>

          <SectionWrapper headerTheme="dark">
            <ParksFeatures />
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
