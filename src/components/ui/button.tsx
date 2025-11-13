// FILE: src/components/ui/button.tsx

import { ArrowUpRight } from "@/components/icons/arrow-up-right";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "tertiary" | "white";
  size?: "sm" | "md" | "lg";
  iconOnly?: boolean;
  iconLeading?: boolean;
  iconTrailing?: boolean;
  disabled?: boolean;
  className?: string;
}

export function Button({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  iconOnly = false,
  iconLeading = false,
  iconTrailing = true,
  disabled = false,
  className = "",
}: ButtonProps) {
  // Size styles
  const sizeStyles = {
    sm: iconOnly ? "w-8 h-8 p-1" : "px-3 py-2 text-sm",
    md: iconOnly ? "w-10 h-10 p-2" : "px-4 py-2.5 text-sm",
    lg: iconOnly ? "w-12 h-12 p-2.5" : "px-5 py-3 text-base",
  };

  // Variant styles
  const variantStyles = {
    primary: {
      default:
        "bg-[var(--color-primary-main)] text-white hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-pressed)] focus:ring-2 focus:ring-[var(--color-primary-focus)] focus:ring-offset-2",
      disabled:
        "bg-[var(--color-neutral-40)] text-[var(--color-neutral-60)] cursor-not-allowed",
    },
    white: {
      default:
        "bg-white text-[var(--color-neutral-100)] hover:bg-[var(--color-neutral-10)] active:bg-[var(--color-neutral-20)] focus:ring-2 focus:ring-[var(--color-neutral-60)] focus:ring-offset-2",
      disabled:
        "bg-[var(--color-neutral-40)] text-[var(--color-neutral-60)] cursor-not-allowed",
    },
    secondary: {
      default:
        "bg-[var(--color-secondary-main)] text-white hover:bg-[var(--color-secondary-hover)] active:bg-[var(--color-secondary-pressed)] focus:ring-2 focus:ring-[var(--color-secondary-focus)] focus:ring-offset-2",
      disabled:
        "bg-[var(--color-neutral-40)] text-[var(--color-neutral-60)] cursor-not-allowed",
    },
    tertiary: {
      default:
        "bg-transparent text-[var(--color-neutral-100)] border border-[var(--color-neutral-50)] hover:bg-[var(--color-neutral-20)] active:bg-[var(--color-neutral-30)] focus:ring-2 focus:ring-[var(--color-neutral-60)] focus:ring-offset-2",
      disabled:
        "bg-transparent text-[var(--color-neutral-60)] border border-[var(--color-neutral-40)] cursor-not-allowed",
    },
  };

  const baseStyles = `inline-flex items-center justify-center gap-2 rounded-[10px] font-medium transition-all duration-200 cursor-pointer ${
    sizeStyles[size]
  } ${
    disabled ? variantStyles[variant].disabled : variantStyles[variant].default
  } ${className}`;

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

  if (href && !disabled) {
    return (
      <a href={href} className={baseStyles}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={baseStyles}>
      {content}
    </button>
  );
}
