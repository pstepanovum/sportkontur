// FILE: src/components/ui/button-outline.tsx

"use client";

import { ArrowUpRight } from "@/components/icons/arrow-up-right";
import { ReactNode } from "react";

interface ButtonOutlineProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "warning";
  size?: "sm" | "md" | "lg";
  iconOnly?: boolean;
  iconLeading?: boolean;
  iconTrailing?: boolean;
  disabled?: boolean;
  className?: string;
}

export function ButtonOutline({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  iconOnly = false,
  iconLeading = false,
  iconTrailing = false,
  disabled = false,
  className = "",
}: ButtonOutlineProps) {
  // Size styles with box-shadow for inset border
  const sizeStyles = {
    sm: iconOnly ? "w-8 h-8 p-1" : "px-3 py-2 text-sm",
    md: iconOnly ? "w-10 h-10 p-2" : "px-4 py-2.5 text-sm",
    lg: iconOnly ? "w-12 h-12 p-2.5" : "px-5 py-3 text-base",
  };

  // Variant styles with inset box-shadow
  const variantStyles = {
    primary: {
      default:
        "bg-transparent text-[var(--color-primary-main)] hover:bg-white hover:text-[var(--color-primary-main)] active:bg-[var(--color-neutral-20)] focus:ring-2 focus:ring-[var(--color-primary-focus)] focus:ring-offset-2",
      shadow: "0 0 0 2px var(--color-primary-main) inset",
      hoverShadow: "0 0 0 2px white inset",
      disabled:
        "bg-transparent text-[var(--color-neutral-60)] cursor-not-allowed",
      disabledShadow: "0 0 0 2px var(--color-neutral-40) inset",
    },
    secondary: {
      default:
        "bg-transparent text-[var(--color-secondary-main)] hover:bg-white hover:text-[var(--color-secondary-main)] active:bg-[var(--color-neutral-20)] focus:ring-2 focus:ring-[var(--color-secondary-focus)] focus:ring-offset-2",
      shadow: "0 0 0 2px var(--color-secondary-main) inset",
      hoverShadow: "0 0 0 2px white inset",
      disabled:
        "bg-transparent text-[var(--color-neutral-60)] cursor-not-allowed",
      disabledShadow: "0 0 0 2px var(--color-neutral-40) inset",
    },
    warning: {
      default:
        "bg-transparent text-[var(--color-warning-main)] hover:bg-white hover:text-[var(--color-warning-main)] active:bg-[var(--color-neutral-20)] focus:ring-2 focus:ring-[var(--color-warning-focus)] focus:ring-offset-2",
      shadow: "0 0 0 2px var(--color-warning-main) inset",
      hoverShadow: "0 0 0 2px white inset",
      disabled:
        "bg-transparent text-[var(--color-neutral-60)] cursor-not-allowed",
      disabledShadow: "0 0 0 2px var(--color-neutral-40) inset",
    },
  };

  const baseStyles = `inline-flex items-center justify-center gap-2 rounded-[10px] font-medium transition-all duration-200 ${
    sizeStyles[size]
  } ${disabled ? variantStyles[variant].disabled : variantStyles[variant].default} ${className}`;

  const boxShadow = disabled
    ? variantStyles[variant].disabledShadow
    : variantStyles[variant].shadow;

  const icon =
    iconTrailing || iconLeading ? (
      <ArrowUpRight width={20} height={20} />
    ) : null;

  const content = (
    <>
      {iconLeading && icon}
      {!iconOnly && <span className="leading-[21px]">{children}</span>}
      {iconTrailing && !iconLeading && icon}
      {iconOnly && icon}
    </>
  );

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (!disabled) {
      (e.currentTarget as HTMLElement).style.boxShadow = variantStyles[variant].hoverShadow;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (!disabled) {
      (e.currentTarget as HTMLElement).style.boxShadow = boxShadow;
    }
  };

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={baseStyles}
        style={{ boxShadow }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
      style={{ boxShadow }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </button>
  );
}