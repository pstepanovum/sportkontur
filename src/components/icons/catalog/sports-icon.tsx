// FILE: src/components/icons/catalog/sports-icon.tsx

interface SportsIconProps {
  className?: string;
}

export function SportsIcon({ className = "" }: SportsIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="60"
        cy="60"
        r="35"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M60 25V95M25 60H95"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle
        cx="60"
        cy="60"
        r="12"
        fill="currentColor"
        opacity="0.2"
      />
    </svg>
  );
}
