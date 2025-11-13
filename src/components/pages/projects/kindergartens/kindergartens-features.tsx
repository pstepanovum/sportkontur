// FILE: src/components/pages/projects/kindergartens/kindergartens-features.tsx

export default function KindergartensFeatures() {
  const features = [
    {
      icon: "📋",
      title: "Соответствие ФГОС",
      description: "Все проекты соответствуют требованиям образовательных стандартов",
    },
    {
      icon: "🎯",
      title: "Возрастное зонирование",
      description: "Разделение игровых зон для разных возрастных групп",
    },
    {
      icon: "🛡️",
      title: "Безопасность",
      description: "Травмобезопасные покрытия и сертифицированное оборудование",
    },
    {
      icon: "🎨",
      title: "Яркий дизайн",
      description: "Красочное оформление для развития детского восприятия",
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
            Профессиональный подход к обустройству детских садов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl"
              style={{
                border: "1.5px solid var(--color-border-light)",
              }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
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
          ))}
        </div>
      </div>
    </section>
  );
}
