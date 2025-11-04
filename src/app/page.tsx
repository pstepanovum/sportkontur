// FILE: src/app/page.tsx

import Header from "@/components/ui/sections/header";
import Hero from "@/components/pages/home/hero";
import Features from "@/components/pages/home/features";
import Footer from "@/components/ui/sections/footer";
import { SectionWrapper } from "@/components/ui/sections/helper/section-wrapper";

export default function Home() {
  return (
    <main>
      <Header />

      <SectionWrapper headerTheme="light">
        <Hero />
      </SectionWrapper>

      <SectionWrapper headerTheme="dark">
        <Features />
      </SectionWrapper>

      <Footer />
    </main>
  );
}
