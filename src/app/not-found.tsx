// FILE: src/app/not-found.tsx

import Link from "next/link";
import Header from "@/components/ui/sections/header";
import Footer from "@/components/ui/sections/footer";
import { Button } from "@/components/ui/button";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import { SectionWrapper } from "@/components/ui/sections/helper/section-wrapper";

export default function NotFound() {
  return (
    <>
      <Header />

      <BlurWrapper>
        <main>
          <SectionWrapper headerTheme="dark">
            <section className="w-full min-h-screen flex items-center justify-center py-24 bg-white">
              <div className="px-5 md:px-20 max-w-[1400px] mx-auto w-full text-center">
                <h1
                  className="text-9xl md:text-[200px] font-bold mb-8"
                  style={{
                    fontFamily: "var(--font-dela-gothic)",
                    color: "var(--color-neutral-100)",
                  }}
                >
                  404
                </h1>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4"
                  style={{
                    color: "var(--color-neutral-100)",
                  }}
                >
                  Страница не найдена
                </h2>
                <p
                  className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
                  style={{ color: "var(--color-neutral-60)" }}
                >
                  К сожалению, запрашиваемая страница не существует. Возможно,
                  она была перемещена или удалена.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/">
                    <Button>Вернуться на главную</Button>
                  </Link>
                  <Link
                    href="/catalog"
                    className="text-base font-medium hover:opacity-70 transition-opacity"
                    style={{ color: "var(--color-neutral-100)" }}
                  >
                    Перейти в каталог
                  </Link>
                </div>
              </div>
            </section>
          </SectionWrapper>
        </main>

        <Footer />
      </BlurWrapper>
    </>
  );
}
