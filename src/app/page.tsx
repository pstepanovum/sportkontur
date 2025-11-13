// FILE: src/app/page.tsx

import Header from "@/components/ui/sections/header";
import Hero from "@/components/pages/home/hero";
import Features from "@/components/pages/home/features";
import Footer from "@/components/ui/sections/footer";
import { SectionWrapper } from "@/components/ui/sections/helper/section-wrapper";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import Certificates from "@/components/pages/home/certificates";
import FAQ from "@/components/pages/shared/faq";
import CTA from "@/components/ui/sections/cta";

export default function Home() {
  return (
    <>
      <Header />

      <BlurWrapper>
        <main>
          <SectionWrapper headerTheme="light">
            <Hero />
          </SectionWrapper>

          <SectionWrapper headerTheme="dark">
            <Features />
          </SectionWrapper>

          <SectionWrapper headerTheme="dark">
            <Certificates />
          </SectionWrapper>

          <SectionWrapper headerTheme="dark">
            <FAQ />
          </SectionWrapper>
          
          <CTA />
          <Footer />
        </main>
      </BlurWrapper>
    </>
  );
}
