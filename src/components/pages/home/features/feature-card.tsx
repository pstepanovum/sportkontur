// FILE: src/components/pages/home/features/feature-card.tsx

import { Texture } from "@/components/icons/texture/texture";

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string; color?: string }>;
  title: string;
  description: string;
  illustration: React.ComponentType<{ className?: string }>;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  illustration: Illustration,
}: FeatureCardProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        border: "1.5px solid var(--color-border-light)",
      }}
    >
      {/* Info Section */}
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-3">
          <Icon
            className="w-6 h-6 flex-shrink-0"
            color="var(--color-text-muted)"
          />
          <h3
            className="text-lg md:text-xl font-semibold"
            style={{ color: "var(--color-neutral-100)" }}
          >
            {title}
          </h3>
        </div>
        <p
          className="text-sm md:text-base leading-relaxed"
          style={{
            color: "var(--color-text-muted)",
            letterSpacing: "normal",
          }}
        >
          {description}
        </p>
      </div>

      {/* Illustration Section with Texture */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        {/* Texture Background - positioned with padding from edges */}
        <div
          className="absolute inset-4 pointer-events-none"
          style={{
            opacity: 0.5,
            color: "var(--color-neutral-30)",
          }}
        >
          <div className="grid grid-cols-[repeat(auto-fill,39px)] gap-0 w-full h-full">
            {Array.from({ length: 100 }).map((_, index) => (
              <div key={index} className="w-[39px] h-[34px]">
                <Texture />
              </div>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <div className="relative z-10 flex items-center justify-center h-full p-8">
          <Illustration className="w-full h-full max-w-md" />
        </div>
      </div>
    </div>
  );
}
