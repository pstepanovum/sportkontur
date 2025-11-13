// FILE: src/components/icons/projects/park-icon.tsx

interface ParkIconProps {
  className?: string;
}

export function ParkIcon({ className = "" }: ParkIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="45"
        cy="40"
        r="20"
        fill="currentColor"
        opacity="0.2"
      />
      <circle
        cx="75"
        cy="35"
        r="15"
        fill="currentColor"
        opacity="0.2"
      />
      <rect
        x="42"
        y="60"
        width="6"
        height="30"
        fill="currentColor"
      />
      <rect
        x="72"
        y="50"
        width="6"
        height="40"
        fill="currentColor"
      />
      <rect
        x="20"
        y="90"
        width="80"
        height="5"
        rx="2"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>
  );
}
