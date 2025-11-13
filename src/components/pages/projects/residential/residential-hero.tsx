// FILE: src/components/pages/projects/residential/residential-hero.tsx

export default function ResidentialHero() {
  return (
    <section className="w-full pt-[120px] md:pt-[200px] pb-16 md:pb-24 bg-white min-h-screen flex items-center">
      <div className="px-5 md:px-20 max-w-[1400px] mx-auto w-full">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8"
            style={{
              fontFamily: "var(--font-dela-gothic)",
              color: "var(--color-neutral-100)",
            }}
          >
            Проекты для жилых комплексов
          </h1>
          <p
            className="text-xl md:text-2xl leading-relaxed mb-8"
            style={{ color: "var(--color-neutral-60)" }}
          >
            Комплексное благоустройство дворовых территорий жилых комплексов.
            Создаем безопасные детские площадки, спортивные зоны, зоны отдыха и
            парковки с современной уличной мебелью и озеленением для комфортной
            жизни жильцов.
          </p>
        </div>
      </div>
    </section>
  );
}
