// FILE: src/components/icons/projects/building-icon.tsx

interface BuildingIconProps {
  className?: string;
}

export function BuildingIcon({ className = "" }: BuildingIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="30"
        y="30"
        width="60"
        height="60"
        rx="4"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M25 25L60 10L95 25V95H25V25Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect x="45" y="45" width="10" height="10" fill="currentColor" opacity="0.4" />
      <rect x="65" y="45" width="10" height="10" fill="currentColor" opacity="0.4" />
      <rect x="45" y="65" width="10" height="10" fill="currentColor" opacity="0.4" />
      <rect x="65" y="65" width="10" height="10" fill="currentColor" opacity="0.4" />
    </svg>
  );
}
