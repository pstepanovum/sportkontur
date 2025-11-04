// FILE: src/components/pages/contact/info/contact-info.tsx

import { MapPinIcon } from "@/components/icons/map-pin";
import { PhoneIcon } from "@/components/icons/phone";
import { MailIcon } from "@/components/icons/mail";
import { ClockIcon } from "@/components/icons/clock";

const contactDetails = [
  {
    icon: PhoneIcon,
    label: "Телефон",
    value: "+7 (495) 123-45-67",
    link: "tel:+74951234567",
  },
  {
    icon: MailIcon,
    label: "Email",
    value: "info@sport-kontur.ru",
    link: "mailto:info@sport-kontur.ru",
  },
  {
    icon: MapPinIcon,
    label: "Адрес",
    value: "Москва, ул. Примерная, д. 123",
    link: null,
  },
  {
    icon: ClockIcon,
    label: "Время работы",
    value: "Пн-Пт: 9:00 - 18:00",
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
          Мы всегда готовы ответить на ваши вопросы и помочь с выбором оборудования.
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
                <Icon
                  width={20}
                  height={20}
                  color="var(--color-primary)"
                />
              </div>
              <div>
                <p
                  className="text-sm font-medium mb-1"
                  style={{ color: "var(--color-neutral-60)" }}
                >
                  {detail.label}
                </p>
                {detail.link ? (
                  <a
                    href={detail.link}
                    className="text-base font-medium hover:opacity-80 transition-opacity"
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}