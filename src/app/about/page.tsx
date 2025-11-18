// FILE: src/app/about/page.tsx

import Header from "@/components/ui/sections/header";
import AboutHero from "@/components/pages/about/about-hero";
import AboutStory from "@/components/pages/about/about-story";
import AboutValues from "@/components/pages/about/about-values";
import AboutTeam from "@/components/pages/about/about-team";
import Footer from "@/components/ui/sections/footer";
import { SectionWrapper } from "@/components/ui/sections/helper/section-wrapper";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import Certificates from "@/components/pages/home/certificates";
import CTA from "@/components/ui/sections/cta";
import { generateSEO } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateSEO({
  title: "О компании Спорт Контур - Производитель детских площадок в Иркутске",
  description: "Компания Спорт Контур - производство и установка детских площадок в Иркутске. Наша история, ценности, команда профессионалов. Качество и безопасность с 2010 года.",
  keywords: [
    "о компании спорт контур",
    "производитель детских площадок Иркутск",
    "компания детские площадки",
    "о нас",
    "производство площадок",
  ],
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Header />

      <BlurWrapper>
        <main>
          <SectionWrapper headerTheme="dark">
            <AboutHero />
          </SectionWrapper>

          <SectionWrapper headerTheme="light">
            <AboutStory />
          </SectionWrapper>

          <SectionWrapper headerTheme="dark">
            <AboutValues />
          </SectionWrapper>

          <SectionWrapper headerTheme="light">
            <AboutTeam />
          </SectionWrapper>

          <SectionWrapper headerTheme="dark">
            <Certificates />
          </SectionWrapper>

          <CTA />
          <Footer />
        </main>
      </BlurWrapper>
    </>
  );
}
