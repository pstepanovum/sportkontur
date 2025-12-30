// FILE: src/components/pages/projects/project-card.tsx

import { BuildingIcon } from "@/components/icons/projects/building-icon";

interface Project {
  id: number;
  title: string;
  location: string;
  year: string;
  description: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        border: "1.5px solid var(--color-border-light)",
      }}
    >
      <div
        className="relative h-64 md:h-80 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url(/images/hero-playground.jpg)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(84, 181, 136, 0.15)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <BuildingIcon className="w-24 h-24 md:w-32 md:h-32" />
        </div>
      </div>

      <div className="p-5 md:p-6">
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
  );
}
