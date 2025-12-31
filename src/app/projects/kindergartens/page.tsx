// FILE: src/app/projects/kindergartens/page.tsx

import Header from "@/components/ui/sections/header";
import KindergartensHero from "@/components/pages/projects/kindergartens/kindergartens-hero";
import KindergartensGallery from "@/components/pages/projects/kindergartens/kindergartens-gallery";
import KindergartensFeatures from "@/components/pages/projects/kindergartens/kindergartens-features";
import Footer from "@/components/ui/sections/footer";
import { SectionWrapper } from "@/components/ui/sections/helper/section-wrapper";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import FAQ from "@/components/pages/shared/faq";
import CTA from "@/components/ui/sections/cta";

export default function KindergartensPage() {
  return (
    <>
      <Header />

      <BlurWrapper>
        <main>
          <SectionWrapper headerTheme="dark">
            <KindergartensHero />
          </SectionWrapper>

          <SectionWrapper headerTheme="light">
            <KindergartensGallery />
          </SectionWrapper>

          <SectionWrapper headerTheme="dark">
            <KindergartensFeatures />
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
