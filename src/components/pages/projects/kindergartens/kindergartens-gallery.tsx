// FILE: src/components/pages/projects/kindergartens/kindergartens-gallery.tsx

import { ProjectCard } from "../project-card";

const projects = [
  {
    id: 1,
    title: 'Детский сад "Солнышко"',
    location: "г. Иркутск",
    year: "2024",
    description: "Комплексное благоустройство с игровыми площадками и спортзоной",
    image: "/images/project-kindergarten-1.jpg",
  },
  {
    id: 2,
    title: 'Детский сад "Радуга"',
    location: "г. Ангарск",
    year: "2023",
    description: "Оборудование игровых площадок для разных возрастных групп",
    image: "/images/project-kindergarten-2.jpg",
  },
  {
    id: 3,
    title: 'Детский сад "Ромашка"',
    location: "г. Иркутск",
    year: "2023",
    description: "Установка современного игрового комплекса и песочниц",
    image: "/images/project-kindergarten-3.jpg",
  },
  {
    id: 4,
    title: 'Детский сад "Теремок"',
    location: "г. Братск",
    year: "2024",
    description: "Создание безопасной игровой зоны с травмобезопасным покрытием",
    image: "/images/project-kindergarten-4.jpg",
  },
];

export default function KindergartensGallery() {
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
            Более 50 детских садов оснащены нашим оборудованием
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
