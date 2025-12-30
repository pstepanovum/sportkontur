// FILE: src/app/contact/page.tsx

import Header from "@/components/ui/sections/header";
import ContactSection from "@/components/pages/contact/contact-form";
import ContactInfo from "@/components/pages/contact/contact-info";
import Footer from "@/components/ui/sections/footer";
import { SectionWrapper } from "@/components/ui/sections/helper/section-wrapper";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import FAQ from "@/components/pages/shared/faq";
import CTA from "@/components/ui/sections/cta";

export default function ContactPage() {
  return (
    <>
      <Header />

      <BlurWrapper>
        <main>
          <SectionWrapper headerTheme="dark">
            <ContactSection />
          </SectionWrapper>

          <SectionWrapper headerTheme="light">
            <ContactInfo />
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
