// FILE: src/components/pages/projects/parks/parks-hero.tsx

export default function ParksHero() {
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
            Проекты для парков
          </h1>
          <p
            className="text-xl md:text-2xl leading-relaxed mb-8"
            style={{ color: "var(--color-neutral-60)" }}
          >
            Комплексное благоустройство городских парков и зон отдыха. Создаем
            комфортные пространства для активного отдыха всей семьи с детскими
            площадками, спортивными зонами, скамейками и малыми архитектурными
            формами.
          </p>
        </div>
      </div>
    </section>
  );
}
