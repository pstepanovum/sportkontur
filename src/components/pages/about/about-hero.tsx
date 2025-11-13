// FILE: src/components/pages/about/about-hero.tsx

export default function AboutHero() {
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
            О компании Спорт Контур
          </h1>
          <p
            className="text-xl md:text-2xl leading-relaxed mb-8"
            style={{ color: "var(--color-neutral-60)" }}
          >
            Мы работаем в г. Иркутске и основными направлениями деятельности
            нашей компании являются производство детских площадок,
            спортивно-гимнастических комплексов, различной уличной мебели для
            дворов и детских садов — всего того, что привносит в нашу жизнь
            комфорт, уют, безопасность и здоровье наших детей.
          </p>
        </div>
      </div>
    </section>
  );
}
