// FILE: src/app/privacy/page.tsx

import Header from "@/components/ui/sections/header";
import Footer from "@/components/ui/sections/footer";
import { BlurWrapper } from "@/components/ui/blur-wrapper";
import SectionWrapper from "@/components/ui/sections/helper/section-wrapper";
import { PageHero } from "@/components/pages/shared/page-hero";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <BlurWrapper>
        <main>
          <SectionWrapper headerTheme="dark">
            <PageHero
              title="Политика конфиденциальности"
              description="Мы серьезно относимся к защите ваших персональных данных"
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
                      1. Общие положения
                    </h2>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "var(--color-neutral-60)" }}
                    >
                      Настоящая Политика конфиденциальности персональных данных
                      (далее — Политика) действует в отношении всей информации,
                      которую сайт СпортКонтур, расположенный на доменном имени
                      sportkontur.ru, может получить о Пользователе во время
                      использования сайта.
                    </p>
                  </div>

                  <div>
                    <h2
                      className="text-2xl font-bold mb-4"
                      style={{ color: "var(--color-neutral-100)" }}
                    >
                      2. Персональная информация пользователей
                    </h2>
                    <p
                      className="text-base leading-relaxed mb-4"
                      style={{ color: "var(--color-neutral-60)" }}
                    >
                      В рамках настоящей Политики под «персональной информацией
                      Пользователя» понимаются:
                    </p>
                    <ul
                      className="list-disc list-inside space-y-2 text-base"
                      style={{ color: "var(--color-neutral-60)" }}
                    >
                      <li>
                        Персональная информация, которую Пользователь
                        предоставляет о себе самостоятельно при регистрации или
                        в процессе использования Сервисов
                      </li>
                      <li>
                        Данные, которые автоматически передаются Сервисам в
                        процессе их использования
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2
                      className="text-2xl font-bold mb-4"
                      style={{ color: "var(--color-neutral-100)" }}
                    >
                      3. Цели сбора персональной информации
                    </h2>
                    <p
                      className="text-base leading-relaxed mb-4"
                      style={{ color: "var(--color-neutral-60)" }}
                    >
                      Персональную информацию Пользователя Администрация сайта
                      может использовать в целях:
                    </p>
                    <ul
                      className="list-disc list-inside space-y-2 text-base"
                      style={{ color: "var(--color-neutral-60)" }}
                    >
                      <li>
                        Идентификации Пользователя для оформления заказа и
                        заключения договора
                      </li>
                      <li>Предоставления Пользователю доступа к сервисам сайта</li>
                      <li>
                        Связи с Пользователем для получения обратной связи
                      </li>
                      <li>
                        Обработки и получения платежей, подтверждения налога
                        или налоговых льгот
                      </li>
                      <li>
                        Предоставления эффективной клиентской и технической
                        поддержки при возникновении проблем
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2
                      className="text-2xl font-bold mb-4"
                      style={{ color: "var(--color-neutral-100)" }}
                    >
                      4. Защита персональной информации
                    </h2>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "var(--color-neutral-60)" }}
                    >
                      Администрация сайта принимает необходимые и достаточные
                      организационные и технические меры для защиты персональной
                      информации Пользователя от неправомерного или случайного
                      доступа, уничтожения, изменения, блокирования,
                      копирования, распространения, а также от иных
                      неправомерных действий с ней третьих лиц.
                    </p>
                  </div>

                  <div>
                    <h2
                      className="text-2xl font-bold mb-4"
                      style={{ color: "var(--color-neutral-100)" }}
                    >
                      5. Контактная информация
                    </h2>
                    <p
                      className="text-base leading-relaxed mb-4"
                      style={{ color: "var(--color-neutral-60)" }}
                    >
                      По всем вопросам, связанным с политикой конфиденциальности,
                      пожалуйста, свяжитесь с нами:
                    </p>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "var(--color-neutral-60)" }}
                    >
                      Email: info@sportkontur.ru
                      <br />
                      Телефон: +7 (3952) XXX-XXX
                      <br />
                      Адрес: г. Иркутск, ул. Примерная, д. 1
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
