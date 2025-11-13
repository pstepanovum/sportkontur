// FILE: src/components/icons/catalog/surface-icon.tsx

interface SurfaceIconProps {
  className?: string;
}

export function SurfaceIcon({ className = "" }: SurfaceIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="20"
        y="40"
        width="80"
        height="40"
        rx="4"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M30 50H90M30 60H90M30 70H90"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="35" cy="50" r="2" fill="currentColor" />
      <circle cx="50" cy="60" r="2" fill="currentColor" />
      <circle cx="70" cy="70" r="2" fill="currentColor" />
    </svg>
  );
}
