// FILE: src/components/pages/projects/schools/schools-gallery.tsx

import { ProjectCard } from "../project-card";

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
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
