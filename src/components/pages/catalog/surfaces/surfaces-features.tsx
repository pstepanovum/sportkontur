// FILE: src/components/pages/catalog/surfaces/surfaces-features.tsx

export default function SurfacesFeatures() {
  const features = [
    {
      icon: "🛡️",
      title: "Травмобезопасность",
      description: "Мягкое покрытие снижает риск травм при падении детей",
    },
    {
      icon: "☔",
      title: "Водопроницаемость",
      description: "Быстрый отвод воды, нет луж после дождя",
    },
    {
      icon: "🌡️",
      title: "Температурная стойкость",
      description: "Сохраняет свойства от -40°C до +70°C",
    },
    {
      icon: "🎨",
      title: "Разнообразие цветов",
      description: "Широкая палитра цветов для любого дизайна",
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
            Преимущества наших покрытий
          </h2>
          <p
            className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--color-neutral-60)" }}
          >
            Безопасность и комфорт для всех возрастов
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
