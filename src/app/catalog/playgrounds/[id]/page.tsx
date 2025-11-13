// FILE: src/app/catalog/playgrounds/[id]/page.tsx

import Header from "@/components/ui/sections/header";
import ProductDetail from "@/components/pages/catalog/product-detail";
import Footer from "@/components/ui/sections/footer";
import { SectionWrapper } from "@/components/ui/sections/helper/section-wrapper";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import CTA from "@/components/ui/sections/cta";

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Header />

      <BlurWrapper>
        <main>
          <SectionWrapper headerTheme="dark">
            <ProductDetail productId={params.id} />
          </SectionWrapper>

          <CTA />
          <Footer />
        </main>
      </BlurWrapper>
    </>
  );
}
