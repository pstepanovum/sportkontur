// FILE: src/components/icons/catalog/playground-icon.tsx

interface PlaygroundIconProps {
  className?: string;
}

export function PlaygroundIcon({ className = "" }: PlaygroundIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="20"
        y="80"
        width="80"
        height="20"
        rx="4"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M30 80V40L60 20L90 40V80"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="60"
        cy="45"
        r="8"
        fill="currentColor"
        opacity="0.3"
      />
      <path
        d="M45 60H75"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
