// FILE: src/components/pages/projects/schools/schools-gallery.tsx

const projects = [
  {
    id: 1,
    title: "Школа №15",
    location: "г. Иркутск",
    year: "2024",
    description: "Спортивная площадка с воркаут-зоной и баскетбольной площадкой",
    image: "/images/project-school-1.jpg",
  },
  {
    id: 2,
    title: "Гимназия №2",
    location: "г. Ангарск",
    year: "2023",
    description: "Многофункциональная спортивная площадка для различных видов спорта",
    image: "/images/project-school-2.jpg",
  },
  {
    id: 3,
    title: "Школа №27",
    location: "г. Иркутск",
    year: "2024",
    description: "Беговые дорожки и площадка для футбола с искусственным покрытием",
    image: "/images/project-school-3.jpg",
  },
  {
    id: 4,
    title: "Лицей №3",
    location: "г. Братск",
    year: "2023",
    description: "Комплекс уличных тренажеров и зона для игровых видов спорта",
    image: "/images/project-school-4.jpg",
  },
];

export default function SchoolsGallery() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-20">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--color-neutral-100)" }}
          >
            Наши реализованные проекты
          </h2>
          <p
            className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--color-neutral-60)" }}
          >
            Более 40 школ Иркутской области оборудованы нашими площадками
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1.5px solid var(--color-border-light)",
              }}
            >
              <div
                className="relative h-80 bg-gradient-to-br overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, var(--color-primary-surface) 0%, var(--color-neutral-20) 100%)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="text-8xl"
                    style={{ color: "var(--color-neutral-40)" }}
                  >
                    🏫
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-sm font-medium px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "var(--color-primary-surface)",
                      color: "var(--color-primary-main)",
                    }}
                  >
                    {project.year}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: "var(--color-neutral-60)" }}
                  >
                    {project.location}
                  </span>
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "var(--color-neutral-100)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-neutral-60)" }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
