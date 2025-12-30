// FILE: src/components/pages/projects/parks/parks-features.tsx

import { CheckmarkIcon } from "@/components/icons/features/checkmark-icon";

export default function ParksFeatures() {
  const features = [
    {
      icon: CheckmarkIcon,
      title: "Ландшафтный дизайн",
      description:
        "Гармоничное встраивание оборудования в существующий ландшафт",
    },
    {
      icon: CheckmarkIcon,
      title: "Для всей семьи",
      description: "Зоны для детей, взрослых и людей старшего возраста",
    },
    {
      icon: CheckmarkIcon,
      title: "Доступная среда",
      description:
        "Учет требований доступности для людей с ограниченными возможностями",
    },
    {
      icon: CheckmarkIcon,
      title: "Экологичность",
      description: "Использование безопасных и экологичных материалов",
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
            Особенности наших проектов
          </h2>
          <p
            className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--color-neutral-60)" }}
          >
            Создаем комфортные пространства для всех жителей
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
