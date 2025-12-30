// FILE: src/app/about/team/page.tsx

import Header from "@/components/ui/sections/header";
import TeamHero from "@/components/pages/about/team/team-hero";
import TeamGrid from "@/components/pages/about/team/team-grid";
import TeamValues from "@/components/pages/about/team/team-values";
import Footer from "@/components/ui/sections/footer";
import { SectionWrapper } from "@/components/ui/sections/helper/section-wrapper";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import CTA from "@/components/ui/sections/cta";
import { generateSEO } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateSEO({
  title: "Наша команда - Профессионалы Спорт Контур",
  description: "Познакомьтесь с командой Спорт Контур. Опытные специалисты по проектированию, производству и монтажу детских площадок. Профессионализм и ответственность.",
  keywords: [
    "команда спорт контур",
    "специалисты детские площадки",
    "о команде",
    "профессионалы",
  ],
  path: "/about/team",
});

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
