// FILE: src/components/icons/chevron-right.tsx

interface ChevronRightProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export function ChevronRight({
  width = 24,
  height = 24,
  color = "currentColor",
  className = "",
}: ChevronRightProps) {
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
        d="M9 18L15 12L9 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
