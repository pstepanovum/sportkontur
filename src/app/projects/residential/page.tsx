// FILE: src/app/projects/residential/page.tsx

import Header from "@/components/ui/sections/header";
import ResidentialHero from "@/components/pages/projects/residential/residential-hero";
import ResidentialGallery from "@/components/pages/projects/residential/residential-gallery";
import ResidentialFeatures from "@/components/pages/projects/residential/residential-features";
import Footer from "@/components/ui/sections/footer";
import { SectionWrapper } from "@/components/ui/sections/helper/section-wrapper";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import FAQ from "@/components/pages/shared/faq";
import CTA from "@/components/ui/sections/cta";

export default function ResidentialPage() {
  return (
    <>
      <Header />

      <BlurWrapper>
        <main>
          <SectionWrapper headerTheme="dark">
            <ResidentialHero />
          </SectionWrapper>

          <SectionWrapper headerTheme="light">
            <ResidentialGallery />
          </SectionWrapper>

          <SectionWrapper headerTheme="dark">
            <ResidentialFeatures />
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
