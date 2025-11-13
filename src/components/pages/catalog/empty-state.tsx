// FILE: src/components/pages/catalog/empty-state.tsx

import { DoodleThree } from "@/components/icons/texture/illustration/doodle-three";

interface EmptyStateProps {
  message?: string;
}

export function EmptyState({ message = "Товары не найдены" }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 md:py-24">
      <div className="w-48 h-48 md:w-64 md:h-64 mb-8">
        <DoodleThree className="w-full h-full" />
      </div>
      <p
        className="text-base md:text-lg text-center max-w-md px-4"
        style={{ color: "var(--color-neutral-60)" }}
      >
        {message}
      </p>
      <p
        className="text-xs md:text-sm text-center mt-2 px-4"
        style={{ color: "var(--color-neutral-60)" }}
      >
        Попробуйте изменить параметры поиска или фильтры
      </p>
    </div>
  );
}
