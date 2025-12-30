// FILE: src/components/pages/catalog/sports/sports-features.tsx

import { CheckmarkIcon } from "@/components/icons/features/checkmark-icon";
import { ShieldIcon } from "@/components/icons/features/shield-icon";

export default function SportsFeatures() {
  const features = [
    {
      icon: CheckmarkIcon,
      title: "Профессиональное качество",
      description:
        "Оборудование соответствует стандартам спортивных тренировок",
    },
    {
      icon: CheckmarkIcon,
      title: "Всепогодное",
      description: "Антикоррозийное покрытие для использования в любую погоду",
    },
    {
      icon: CheckmarkIcon,
      title: "Для всех уровней",
      description: "Подходит как для начинающих, так и для профессионалов",
    },
    {
      icon: ShieldIcon,
      title: "Сертифицировано",
      description: "Все оборудование имеет необходимые сертификаты качества",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-20">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--color-neutral-100)" }}
          >
            Преимущества нашего оборудования
          </h2>
          <p
            className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--color-neutral-60)" }}
          >
            Надежность и качество для эффективных тренировок
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl"
                style={{
                  border: "1.5px solid var(--color-border-light)",
                }}
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-16 h-16" />
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--color-neutral-100)" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-neutral-60)" }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
