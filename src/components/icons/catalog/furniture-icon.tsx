// FILE: src/components/icons/catalog/furniture-icon.tsx

interface FurnitureIconProps {
  className?: string;
}

export function FurnitureIcon({ className = "" }: FurnitureIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="25"
        y="45"
        width="70"
        height="30"
        rx="4"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M30 75V90M90 75V90"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M25 45H95"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect
        x="35"
        y="30"
        width="50"
        height="15"
        rx="2"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>
  );
}
