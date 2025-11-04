// FILE: src/components/ui/badge.tsx

import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  icon?: React.ComponentType<{ color?: string; className?: string }>;
  variant?: "primary" | "secondary" | "neutral";
  className?: string;
}

export function Badge({
  children,
  icon: Icon,
  variant = "neutral",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    primary: {
      bg: "bg-[var(--color-primary-surface)]",
      text: "text-[var(--color-primary-main)]",
    },
    secondary: {
      bg: "bg-[var(--color-secondary-surface)]",
      text: "text-[var(--color-secondary-main)]",
    },
    neutral: {
      bg: "bg-white/20",
      text: "text-white",
    },
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm ${variantStyles[variant].bg} ${variantStyles[variant].text} ${className}`}
    >
      {Icon && <Icon className="w-5 h-5 flex-shrink-0" color="currentColor" />}
      <span className="text-sm font-medium">{children}</span>
    </div>
  );
}
