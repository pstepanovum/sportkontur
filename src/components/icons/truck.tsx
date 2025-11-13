// FILE: src/components/icons/truck.tsx

interface TruckIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export function TruckIcon({
  width = 24,
  height = 24,
  color = "currentColor",
  className = "",
}: TruckIconProps) {
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
        d="M1 3h15v13H1V3zM16 8h4l3 3v5h-7V8z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="5.5" cy="18.5" r="2.5" stroke={color} strokeWidth="2" />
      <circle cx="18.5" cy="18.5" r="2.5" stroke={color} strokeWidth="2" />
    </svg>
  );
}
