// FILE: src/components/icons/features/checkmark-icon.tsx

interface CheckmarkIconProps {
  className?: string;
}

export function CheckmarkIcon({ className = "" }: CheckmarkIconProps) {
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
        fill="currentColor"
        opacity="0.2"
      />
      <circle
        cx="60"
        cy="60"
        r="35"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M45 60L55 70L75 48"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
