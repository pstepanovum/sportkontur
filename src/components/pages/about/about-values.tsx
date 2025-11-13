// FILE: src/components/pages/about/about-values.tsx

import { ShieldCheckIcon } from "@/components/icons/shield-check";
import { StarIcon } from "@/components/icons/star";
import { UsersIcon } from "@/components/icons/users";
import { TruckIcon } from "@/components/icons/truck";

const values = [
  {
    icon: ShieldCheckIcon,
    title: "Качество и безопасность",
    description:
      "Вся наша продукция соответствует международным стандартам качества и безопасности. Мы используем только проверенные материалы.",
  },
  {
    icon: StarIcon,
    title: "Широкий ассортимент",
    description:
      "От детских площадок до спортивных комплексов и малых архитектурных форм — у нас есть всё для благоустройства территории.",
  },
  {
    icon: UsersIcon,
    title: "Индивидуальный подход",
    description:
      "Мы поможем вам с выбором оборудования и создадим индивидуальный проект, учитывая все ваши пожелания и особенности участка.",
  },
  {
    icon: TruckIcon,
    title: "Полный цикл работ",
    description:
      "Производство, доставка и установка — мы берем на себя весь процесс от проектирования до монтажа готовой площадки.",
  },
];

export default function AboutValues() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="px-5 md:px-20 max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--color-neutral-100)" }}
          >
            Наши преимущества
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--color-neutral-60)" }}
          >
            Почему клиенты выбирают нас для создания детских площадок и
            спортивных комплексов
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-[20px] transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: "var(--color-neutral-20)",
                  border: "1.5px solid var(--color-border-light)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "var(--color-primary-surface)" }}
                >
                  <Icon
                    width={28}
                    height={28}
                    color="var(--color-primary-main)"
                  />
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--color-neutral-100)" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--color-neutral-60)" }}
                >
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
