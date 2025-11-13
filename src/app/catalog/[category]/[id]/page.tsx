// FILE: src/app/catalog/[category]/[id]/page.tsx

import Header from "@/components/ui/sections/header";
import Footer from "@/components/ui/sections/footer";
import CTA from "@/components/ui/sections/cta";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import {SectionWrapper} from "@/components/ui/sections/helper/section-wrapper";
import ProductDetail from "@/components/pages/catalog/product-detail";

interface ProductPageProps {
  params: Promise<{ category: string; id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category, id } = await params;

  return (
    <>
      <Header />
      <BlurWrapper>
        <main>
          <SectionWrapper headerTheme="dark">
            <ProductDetail productId={id} categoryId={category} />
          </SectionWrapper>
          <CTA />
          <Footer />
        </main>
      </BlurWrapper>
    </>
  );
}
