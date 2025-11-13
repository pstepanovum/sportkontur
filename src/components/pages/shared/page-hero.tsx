// FILE: src/components/pages/shared/page-hero.tsx

interface PageHeroProps {
  title: string;
  description: string;
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="w-full pt-[120px] md:pt-[200px] pb-16 md:pb-24 bg-white">
      <div className="px-5 md:px-20 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
              style={{
                fontFamily: "var(--font-dela-gothic)",
                color: "var(--color-neutral-100)",
              }}
            >
              {title}
            </h1>
          </div>
          <div>
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: "var(--color-neutral-60)" }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
