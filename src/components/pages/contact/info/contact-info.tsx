// FILE: src/components/pages/contact/info/contact-info.tsx

import { MapPinIcon } from "@/components/icons/map-pin";
import { PhoneIcon } from "@/components/icons/phone";
import { MailIcon } from "@/components/icons/mail";
import { ClockIcon } from "@/components/icons/clock";

const contactDetails = [
  {
    icon: PhoneIcon,
    label: "Телефоны",
    value: "8 (3952) 40-40-29",
    secondaryValue: "8-902-512-60-29",
    link: "tel:+73952404029",
    secondaryLink: "tel:+79025126029",
  },
  {
    icon: MailIcon,
    label: "Email",
    value: "sportkontur@yandex.ru",
    link: "mailto:sportkontur@yandex.ru",
  },
  {
    icon: MapPinIcon,
    label: "Адрес",
    value: "г. Иркутск, ул. Рабочего Штаба, д. 30",
    link: null,
  },
  {
    icon: ClockIcon,
    label: "Режим работы",
    value: "Пн. – Пт.: с 8:30 до 18:00",
    secondaryValue: "Сб.: с 8:30 до 12:00",
    tertiaryValue: "Выходные: Вс",
    link: null,
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--color-neutral-100)" }}
        >
          Контактная информация
        </h3>
        <p
          className="text-base leading-relaxed"
          style={{ color: "var(--color-neutral-60)" }}
        >
          Мы всегда готовы ответить на ваши вопросы и помочь с выбором
          оборудования.
        </p>
      </div>

      <div className="space-y-6">
        {contactDetails.map((detail, index) => {
          const Icon = detail.icon;
          return (
            <div key={index} className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-lg flex items-start pt-1 justify-center"
                style={{ backgroundColor: "var(--color-neutral-10)" }}
              >
                <Icon width={20} height={20} color="var(--color-primary)" />
              </div>
              <div>
                <p
                  className="text-sm font-medium mb-1"
                  style={{ color: "var(--color-neutral-60)" }}
                >
                  {detail.label}
                </p>
                <div className="space-y-1">
                  {detail.link ? (
                    <a
                      href={detail.link}
                      className="block text-base font-medium hover:opacity-80 transition-opacity"
                      style={{ color: "var(--color-neutral-100)" }}
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p
                      className="text-base font-medium"
                      style={{ color: "var(--color-neutral-100)" }}
                    >
                      {detail.value}
                    </p>
                  )}
                  {detail.secondaryValue &&
                    (detail.secondaryLink ? (
                      <a
                        href={detail.secondaryLink}
                        className="block text-base font-medium hover:opacity-80 transition-opacity"
                        style={{ color: "var(--color-neutral-100)" }}
                      >
                        {detail.secondaryValue}
                      </a>
                    ) : (
                      <p
                        className="text-base font-medium"
                        style={{ color: "var(--color-neutral-100)" }}
                      >
                        {detail.secondaryValue}
                      </p>
                    ))}
                  {detail.tertiaryValue && (
                    <p
                      className="text-base font-medium"
                      style={{ color: "var(--color-neutral-100)" }}
                    >
                      {detail.tertiaryValue}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
