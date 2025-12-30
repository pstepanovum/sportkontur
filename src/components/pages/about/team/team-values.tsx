// FILE: src/components/pages/about/team/team-values.tsx

import { CheckmarkIcon } from "@/components/icons/features/checkmark-icon";

export default function TeamValues() {
  const values = [
    {
      icon: CheckmarkIcon,
      title: "Профессионализм",
      description:
        "Высокая квалификация и постоянное развитие каждого специалиста",
    },
    {
      icon: CheckmarkIcon,
      title: "Командная работа",
      description: "Слаженная работа всех отделов для достижения результата",
    },
    {
      icon: CheckmarkIcon,
      title: "Инновации",
      description: "Внедрение современных технологий и материалов",
    },
    {
      icon: CheckmarkIcon,
      title: "Ответственность",
      description: "Мы несем ответственность за безопасность детей",
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
            Наши ценности
          </h2>
          <p
            className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--color-neutral-60)" }}
          >
            Принципы, которыми мы руководствуемся в работе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
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
                  {value.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
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
