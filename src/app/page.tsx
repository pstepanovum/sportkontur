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
import { generateSEO, getOrganizationSchema, getLocalBusinessSchema } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateSEO({
  title: "Спорт Контур - Производство детских площадок в Иркутске",
  description: "Производство и монтаж безопасных детских игровых площадок, спортивного оборудования и уличной мебели. Индивидуальные проекты с гарантией 5 лет. Работаем по всей России.",
  keywords: [
    "производство детских площадок",
    "детские площадки под ключ",
    "спортивное оборудование для детей",
    "монтаж детских площадок",
    "безопасные детские площадки",
    "игровые комплексы",
  ],
  path: "/",
});

export default function Home() {
  const organizationSchema = getOrganizationSchema();
  const localBusinessSchema = getLocalBusinessSchema();

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

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
