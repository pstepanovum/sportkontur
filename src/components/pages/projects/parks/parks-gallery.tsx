// FILE: src/components/pages/projects/parks/parks-gallery.tsx

import { ProjectCard } from "../project-card";

const projects = [
  {
    id: 1,
    title: "Парк Победы",
    location: "г. Иркутск",
    year: "2024",
    description: "Детская площадка, спортзона, зона отдыха с уличной мебелью",
    image: "/images/project-park-1.jpg",
  },
  {
    id: 2,
    title: "Парк Комсомольский",
    location: "г. Ангарск",
    year: "2023",
    description: "Многофункциональная спортивная площадка и игровая зона для детей",
    image: "/images/project-park-2.jpg",
  },
  {
    id: 3,
    title: "Парк Юбилейный",
    location: "г. Иркутск",
    year: "2024",
    description: "Воркаут-площадка, детский городок и зона для пикников",
    image: "/images/project-park-3.jpg",
  },
  {
    id: 4,
    title: "Сквер Кирова",
    location: "г. Братск",
    year: "2023",
    description: "Благоустройство с установкой уличной мебели и освещения",
    image: "/images/project-park-4.jpg",
  },
];

export default function ParksGallery() {
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
            Более 30 парков и скверов благоустроены нашей компанией
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
