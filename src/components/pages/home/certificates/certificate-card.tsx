// FILE: src/components/pages/home/certificates/certificate-card.tsx

"use client";

interface CertificateCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
}

export function CertificateCard({
  title,
  description,
  imageUrl,
  onClick,
}: CertificateCardProps) {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      {/* Certificate Image */}
      <div
        className="aspect-[3/4] rounded-[12px] overflow-hidden mb-4 transition-transform duration-300 group-hover:scale-[1.02]"
        style={{
          backgroundColor: "var(--color-neutral-20)",
          border: "1.5px solid var(--color-border-light)",
        }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          {/* Placeholder if no image */}
          <div className="w-full h-full flex items-center justify-center">
            <span
              className="text-sm"
              style={{ color: "var(--color-neutral-60)" }}
            >
              Certificate
            </span>
          </div>
        </div>
      </div>

      {/* Certificate Info */}
      <div>
        <h3
          className="text-lg font-bold mb-2"
          style={{ color: "var(--color-neutral-100)" }}
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--color-neutral-60)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
