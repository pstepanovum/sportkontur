// FILE: src/app/consultation/page.tsx

import Header from "@/components/ui/sections/header";
import ConsultationForm from "@/components/pages/consultation/consultation-form";
import Footer from "@/components/ui/sections/footer";
import { SectionWrapper } from "@/components/ui/sections/helper/section-wrapper";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import FAQ from "@/components/pages/shared/faq";
import CTA from "@/components/ui/sections/cta";

export default function ConsultationPage() {
  return (
    <>
      <Header />

      <BlurWrapper>
        <main>
          <SectionWrapper headerTheme="dark">
            <ConsultationForm />
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
