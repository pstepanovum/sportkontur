// FILE: src/components/icons/chevron-left.tsx

interface ChevronLeftProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export function ChevronLeft({
  width = 24,
  height = 24,
  color = "currentColor",
  className = "",
}: ChevronLeftProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15 18L9 12L15 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
