// FILE: src/app/terms/page.tsx

import Header from "@/components/ui/sections/header";
import Footer from "@/components/ui/sections/footer";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import SectionWrapper from "@/components/ui/sections/helper/section-wrapper";
import { PageHero } from "@/components/pages/shared/page-hero";

export default function TermsPage() {
  return (
    <>
      <Header />
      <BlurWrapper>
        <main>
          <SectionWrapper headerTheme="dark">
            <PageHero
              title="Условия использования"
              description="Правила и условия использования сайта СпортКонтур"
            />
          </SectionWrapper>
          <SectionWrapper headerTheme="light">
            <section className="w-full py-16 md:py-24 bg-white">
              <div className="max-w-4xl mx-auto px-5 md:px-20">
                <div className="space-y-8">
                  <div>
                    <h2
                      className="text-2xl font-bold mb-4"
                      style={{ color: "var(--color-neutral-100)" }}
                    >
                      1. Общие условия
                    </h2>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "var(--color-neutral-60)" }}
                    >
                      Используя сайт СпортКонтур, вы принимаете настоящие
                      условия использования. Если вы не согласны с какими-либо
                      из этих условий, пожалуйста, не используйте наш сайт.
                    </p>
                  </div>

                  <div>
                    <h2
                      className="text-2xl font-bold mb-4"
                      style={{ color: "var(--color-neutral-100)" }}
                    >
                      2. Использование сайта
                    </h2>
                    <p
                      className="text-base leading-relaxed mb-4"
                      style={{ color: "var(--color-neutral-60)" }}
                    >
                      Вы можете использовать наш сайт для:
                    </p>
                    <ul
                      className="list-disc list-inside space-y-2 text-base"
                      style={{ color: "var(--color-neutral-60)" }}
                    >
                      <li>Просмотра информации о наших товарах и услугах</li>
                      <li>Оформления заказов на покупку оборудования</li>
                      <li>Получения консультаций по выбору оборудования</li>
                      <li>Просмотра реализованных проектов</li>
                    </ul>
                  </div>

                  <div>
                    <h2
                      className="text-2xl font-bold mb-4"
                      style={{ color: "var(--color-neutral-100)" }}
                    >
                      3. Права интеллектуальной собственности
                    </h2>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "var(--color-neutral-60)" }}
                    >
                      Все материалы, размещенные на сайте, включая тексты,
                      изображения, логотипы, являются объектами авторского права
                      и охраняются законодательством Российской Федерации.
                      Использование материалов сайта возможно только с
                      письменного разрешения администрации.
                    </p>
                  </div>

                  <div>
                    <h2
                      className="text-2xl font-bold mb-4"
                      style={{ color: "var(--color-neutral-100)" }}
                    >
                      4. Оформление заказа
                    </h2>
                    <p
                      className="text-base leading-relaxed mb-4"
                      style={{ color: "var(--color-neutral-60)" }}
                    >
                      При оформлении заказа через наш сайт:
                    </p>
                    <ul
                      className="list-disc list-inside space-y-2 text-base"
                      style={{ color: "var(--color-neutral-60)" }}
                    >
                      <li>
                        Вы гарантируете, что предоставляете точную и полную
                        информацию
                      </li>
                      <li>Все цены указаны в рублях и могут быть изменены</li>
                      <li>
                        Окончательная стоимость согласовывается с менеджером
                      </li>
                      <li>
                        Договор считается заключенным после подписания
                        документов обеими сторонами
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2
                      className="text-2xl font-bold mb-4"
                      style={{ color: "var(--color-neutral-100)" }}
                    >
                      5. Гарантии и ответственность
                    </h2>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "var(--color-neutral-60)" }}
                    >
                      Все оборудование поставляется с гарантией производителя.
                      Сроки гарантии указаны в технической документации на
                      каждый товар. СпортКонтур не несет ответственности за
                      повреждения, возникшие в результате неправильной
                      эксплуатации оборудования.
                    </p>
                  </div>

                  <div>
                    <h2
                      className="text-2xl font-bold mb-4"
                      style={{ color: "var(--color-neutral-100)" }}
                    >
                      6. Изменение условий
                    </h2>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "var(--color-neutral-60)" }}
                    >
                      СпортКонтур оставляет за собой право изменять настоящие
                      условия в любое время. Все изменения вступают в силу с
                      момента их публикации на сайте.
                    </p>
                  </div>

                  <div>
                    <h2
                      className="text-2xl font-bold mb-4"
                      style={{ color: "var(--color-neutral-100)" }}
                    >
                      7. Контактная информация
                    </h2>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "var(--color-neutral-60)" }}
                    >
                      По всем вопросам обращайтесь:
                      <br />
                      Email: info@sportkontur.ru
                      <br />
                      Телефон: +7 (3952) XXX-XXX
                      <br />
                      Адрес: г. Иркутск
                    </p>
                  </div>

                  <div
                    className="text-sm italic"
                    style={{ color: "var(--color-neutral-60)" }}
                  >
                    Дата последнего обновления: {new Date().toLocaleDateString("ru-RU")}
                  </div>
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
