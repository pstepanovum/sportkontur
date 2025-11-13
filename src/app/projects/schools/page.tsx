// FILE: src/app/projects/schools/page.tsx

import Header from "@/components/ui/sections/header";
import SchoolsHero from "@/components/pages/projects/schools/schools-hero";
import SchoolsGallery from "@/components/pages/projects/schools/schools-gallery";
import SchoolsFeatures from "@/components/pages/projects/schools/schools-features";
import Footer from "@/components/ui/sections/footer";
import { SectionWrapper } from "@/components/ui/sections/helper/section-wrapper";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import FAQ from "@/components/pages/shared/faq";
import CTA from "@/components/ui/sections/cta";

export default function SchoolsPage() {
  return (
    <>
      <Header />

      <BlurWrapper>
        <main>
          <SectionWrapper headerTheme="dark">
            <SchoolsHero />
          </SectionWrapper>

          <SectionWrapper headerTheme="light">
            <SchoolsGallery />
          </SectionWrapper>

          <SectionWrapper headerTheme="dark">
            <SchoolsFeatures />
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
