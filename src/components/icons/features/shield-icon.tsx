// FILE: src/components/icons/features/shield-icon.tsx

interface ShieldIconProps {
  className?: string;
}

export function ShieldIcon({ className = "" }: ShieldIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60 20L90 35V60C90 75 75 90 60 100C45 90 30 75 30 60V35L60 20Z"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M60 20L90 35V60C90 75 75 90 60 100C45 90 30 75 30 60V35L60 20Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M50 60L57 67L72 50"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
