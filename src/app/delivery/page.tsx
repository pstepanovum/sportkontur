// FILE: src/app/delivery/page.tsx

import Header from "@/components/ui/sections/header";
import Footer from "@/components/ui/sections/footer";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import { SectionWrapper } from "@/components/ui/sections/helper/section-wrapper";
import { PageHero } from "@/components/pages/shared/page-hero";
import { TruckIcon } from "@/components/icons/truck";

export default function DeliveryPage() {
  const deliveryOptions = [
    {
      title: "Доставка по Иркутску",
      description: "Бесплатная доставка при заказе от 50 000 ₽",
      details: [
        "Сроки доставки: 1-2 рабочих дня",
        "Стоимость: от 1 500 ₽",
        "Возможна доставка в день заказа",
      ],
    },
    {
      title: "Доставка по Иркутской области",
      description: "Доставка в города и населенные пункты области",
      details: [
        "Сроки доставки: 2-5 рабочих дней",
        "Стоимость рассчитывается индивидуально",
        "Разгрузка спецтехникой при необходимости",
      ],
    },
    {
      title: "Доставка по России",
      description: "Отправка транспортными компаниями",
      details: [
        "Сроки доставки: от 5 рабочих дней",
        "Работаем с ведущими ТК",
        "Упаковка для транспортировки включена",
      ],
    },
  ];

  return (
    <>
      <Header />
      <BlurWrapper>
        <main>
          <SectionWrapper headerTheme="dark">
            <PageHero
              title="Доставка и монтаж"
              description="Доставим и установим оборудование в любой точке Иркутска и области"
            />
          </SectionWrapper>
          <SectionWrapper headerTheme="light">
            <section className="w-full py-16 md:py-24 bg-white">
              <div className="max-w-7xl mx-auto px-5 md:px-20">
                {/* Delivery Options */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                  {deliveryOptions.map((option, index) => (
                    <div
                      key={index}
                      className="rounded-2xl p-6"
                      style={{
                        border: "1.5px solid var(--color-border-light)",
                      }}
                    >
                      <div className="mb-4">
                        <TruckIcon
                          className="w-12 h-12"
                        />
                      </div>
                      <h3
                        className="text-xl font-semibold mb-2"
                        style={{ color: "var(--color-neutral-100)" }}
                      >
                        {option.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed mb-4"
                        style={{ color: "var(--color-neutral-60)" }}
                      >
                        {option.description}
                      </p>
                      <ul className="space-y-2">
                        {option.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm"
                            style={{ color: "var(--color-neutral-60)" }}
                          >
                            <span
                              style={{ color: "var(--color-primary-main)" }}
                            >
                              •
                            </span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Installation Services */}
                <div className="mb-16">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-8"
                    style={{
                      fontFamily: "var(--font-dela-gothic)",
                      color: "var(--color-neutral-100)",
                    }}
                  >
                    Услуги монтажа
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div
                      className="rounded-2xl p-6"
                      style={{
                        border: "1.5px solid var(--color-border-light)",
                      }}
                    >
                      <h3
                        className="text-xl font-semibold mb-3"
                        style={{ color: "var(--color-neutral-100)" }}
                      >
                        Профессиональный монтаж
                      </h3>
                      <ul className="space-y-2">
                        {[
                          "Подготовка площадки",
                          "Установка оборудования",
                          "Бетонирование опор",
                          "Настройка и проверка",
                          "Гарантия на монтажные работы",
                        ].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-base"
                          >
                            <div
                              className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                              style={{
                                backgroundColor: "var(--color-primary-surface)",
                              }}
                            >
                              <span
                                style={{ color: "var(--color-primary-main)" }}
                              >
                                ✓
                              </span>
                            </div>
                            <span style={{ color: "var(--color-neutral-60)" }}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className="rounded-2xl p-6"
                      style={{
                        border: "1.5px solid var(--color-border-light)",
                      }}
                    >
                      <h3
                        className="text-xl font-semibold mb-3"
                        style={{ color: "var(--color-neutral-100)" }}
                      >
                        Сроки и стоимость
                      </h3>
                      <p
                        className="text-base leading-relaxed mb-4"
                        style={{ color: "var(--color-neutral-60)" }}
                      >
                        Сроки монтажа зависят от объема работ и сложности
                        проекта. Типовая детская площадка устанавливается за 2-3
                        дня.
                      </p>
                      <p
                        className="text-base leading-relaxed"
                        style={{ color: "var(--color-neutral-60)" }}
                      >
                        Стоимость монтажа рассчитывается индивидуально и
                        составляет в среднем 15-20% от стоимости оборудования.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Block */}
                <div
                  className="rounded-2xl p-8 md:p-12 text-center"
                  style={{
                    backgroundColor: "var(--color-primary-surface)",
                    border: "1.5px solid var(--color-primary-main)",
                  }}
                >
                  <h2
                    className="text-2xl md:text-3xl font-bold mb-4"
                    style={{ color: "var(--color-neutral-100)" }}
                  >
                    Рассчитать стоимость доставки и монтажа?
                  </h2>
                  <p
                    className="text-base md:text-lg leading-relaxed mb-6 max-w-2xl mx-auto"
                    style={{ color: "var(--color-neutral-60)" }}
                  >
                    Свяжитесь с нами для точного расчета стоимости доставки и
                    монтажа оборудования в вашем регионе
                  </p>
                  <a
                    href="/contact"
                    className="inline-block px-8 py-4 rounded-xl font-medium transition-colors cursor-pointer"
                    style={{
                      backgroundColor: "var(--color-primary-main)",
                      color: "white",
                    }}
                  >
                    Получить расчет
                  </a>
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
