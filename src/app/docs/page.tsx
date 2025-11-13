// FILE: src/app/docs/page.tsx

import Header from "@/components/ui/sections/header";
import Footer from "@/components/ui/sections/footer";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import SectionWrapper from "@/components/ui/sections/helper/section-wrapper";
import { PageHero } from "@/components/pages/shared/page-hero";
import Link from "next/link";

export default function DocsPage() {
  const documents = [
    {
      title: "Сертификаты соответствия ГОСТ",
      description:
        "Вся продукция сертифицирована и соответствует требованиям безопасности",
      icon: "📄",
    },
    {
      title: "Технические паспорта",
      description:
        "Подробные технические характеристики каждого изделия",
      icon: "📋",
    },
    {
      title: "Инструкции по монтажу",
      description: "Руководства по установке и монтажу оборудования",
      icon: "🔧",
    },
    {
      title: "Руководства по эксплуатации",
      description: "Правила безопасной эксплуатации и обслуживания",
      icon: "📖",
    },
    {
      title: "Гарантийные талоны",
      description: "Условия и сроки гарантийного обслуживания",
      icon: "✅",
    },
    {
      title: "Договор поставки",
      description: "Типовой договор на поставку оборудования",
      icon: "📝",
    },
  ];

  return (
    <>
      <Header />
      <BlurWrapper>
        <main>
          <SectionWrapper headerTheme="dark">
            <PageHero
              title="Документация"
              description="Вся необходимая документация по нашему оборудованию и услугам"
            />
          </SectionWrapper>
          <SectionWrapper headerTheme="light">
            <section className="w-full py-16 md:py-24 bg-white">
              <div className="max-w-7xl mx-auto px-5 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                  {documents.map((doc, index) => (
                    <div
                      key={index}
                      className="rounded-2xl p-6 transition-colors cursor-pointer"
                      style={{
                        border: "1.5px solid var(--color-border-light)",
                      }}
                    >
                      <div className="text-4xl mb-4">{doc.icon}</div>
                      <h3
                        className="text-xl font-semibold mb-2"
                        style={{ color: "var(--color-neutral-100)" }}
                      >
                        {doc.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--color-neutral-60)" }}
                      >
                        {doc.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  className="rounded-2xl p-8 md:p-12"
                  style={{
                    border: "1.5px solid var(--color-border-light)",
                    backgroundColor: "var(--color-neutral-10)",
                  }}
                >
                  <h2
                    className="text-2xl md:text-3xl font-bold mb-4"
                    style={{ color: "var(--color-neutral-100)" }}
                  >
                    Нужна документация по конкретному товару?
                  </h2>
                  <p
                    className="text-base md:text-lg leading-relaxed mb-6"
                    style={{ color: "var(--color-neutral-60)" }}
                  >
                    Свяжитесь с нашими специалистами, и мы предоставим всю
                    необходимую документацию для интересующего вас оборудования.
                    Все документы также доступны на страницах товаров в каталоге.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-3 rounded-xl font-medium transition-colors cursor-pointer"
                    style={{
                      backgroundColor: "var(--color-primary-main)",
                      color: "white",
                    }}
                  >
                    Связаться с нами
                  </Link>
                </div>
              </div>
            </section>
          </SectionWrapper>
          <Footer />
        </main>
      </BlurWrapper>
    </>
  );
}
