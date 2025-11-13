// FILE: src/components/icons/star.tsx

interface StarIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export function StarIcon({
  width = 24,
  height = 24,
  color = "currentColor",
  className = "",
}: StarIconProps) {
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
        d="M18 6L6 18M6 6L18 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
