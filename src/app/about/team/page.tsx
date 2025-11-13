// FILE: src/app/about/team/page.tsx

import Header from "@/components/ui/sections/header";
import TeamHero from "@/components/pages/about/team/team-hero";
import TeamGrid from "@/components/pages/about/team/team-grid";
import TeamValues from "@/components/pages/about/team/team-values";
import Footer from "@/components/ui/sections/footer";
import { SectionWrapper } from "@/components/ui/sections/helper/section-wrapper";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import CTA from "@/components/ui/sections/cta";

export default function TeamPage() {
  return (
    <>
      <Header />

      <BlurWrapper>
        <main>
          <SectionWrapper headerTheme="dark">
            <TeamHero />
          </SectionWrapper>

          <SectionWrapper headerTheme="light">
            <TeamGrid />
          </SectionWrapper>

          <SectionWrapper headerTheme="dark">
            <TeamValues />
          </SectionWrapper>

          <CTA />
          <Footer />
        </main>
      </BlurWrapper>
    </>
  );
}
