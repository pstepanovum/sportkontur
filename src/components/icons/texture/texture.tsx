// FILE: src/components/icons/texture/texture.tsx

interface TextureProps {
  className?: string;
  color?: string;
}

export function Texture({ className, color = "currentColor" }: TextureProps) {
  return (
    <svg
      width="39"
      height="34"
      viewBox="0 0 39 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_24721_64209)">
        <circle cx="18.9996" cy="14.1002" r="2.4" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0_24721_64209">
          <rect
            width="38.4"
            height="38.4"
            fill="white"
            transform="translate(0 -4.8999)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
