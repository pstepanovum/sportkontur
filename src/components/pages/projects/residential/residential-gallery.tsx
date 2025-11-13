// FILE: src/components/pages/projects/residential/residential-gallery.tsx

import { ProjectCard } from "../project-card";

const projects = [
  {
    id: 1,
    title: 'ЖК "Солнечный"',
    location: "г. Иркутск",
    year: "2024",
    description: "Детская площадка, спортивная зона, зона отдыха с лавочками",
    image: "/images/project-residential-1.jpg",
  },
  {
    id: 2,
    title: 'ЖК "Победа"',
    location: "г. Ангарск",
    year: "2023",
    description: "Игровой комплекс для детей разных возрастов и воркаут-площадка",
    image: "/images/project-residential-2.jpg",
  },
  {
    id: 3,
    title: 'ЖК "Европейский"',
    location: "г. Иркутск",
    year: "2024",
    description: "Многофункциональная площадка с игровым и спортивным оборудованием",
    image: "/images/project-residential-3.jpg",
  },
  {
    id: 4,
    title: 'ЖК "Новый город"',
    location: "г. Братск",
    year: "2023",
    description: "Благоустройство двора с установкой детской площадки и парковой мебели",
    image: "/images/project-residential-4.jpg",
  },
];

export default function ResidentialGallery() {
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
            Более 60 жилых комплексов оборудованы нашими площадками
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
