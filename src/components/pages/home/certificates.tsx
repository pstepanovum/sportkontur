// FILE: src/components/pages/home/certificates.tsx

import { Badge } from "@/components/ui/badge";
import { ShieldCheckIcon } from "@/components/icons/shield-check";
import { Texture } from "@/components/icons/texture/texture";
import { CertificateGrid } from "./certificates/certificate-grid";

export default function Certificates() {
  return (
    <section
      className="w-full py-16 md:py-24 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-neutral-20)" }}
    >
      {/* Texture Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.3,
          color: "var(--color-neutral-40)",
        }}
      >
        <div className="grid grid-cols-[repeat(auto-fill,45px)] gap-0 w-full h-full">
          {Array.from({ length: 1000 }).map((_, index) => (
            <div key={index} className="w-[45px] h-[45px]">
              <Texture />
            </div>
          ))}
        </div>
      </div>

      <div className="relative px-5 md:px-60">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-6">
            <Badge icon={ShieldCheckIcon} variant="secondary">
              Сертификаты и качество
            </Badge>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--color-neutral-100)" }}
          >
            Наши сертификаты
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--color-neutral-60)" }}
          >
            Вся наша продукция соответствует международным стандартам качества и
            безопасности
          </p>
        </div>

        {/* Content Container with white background */}
        <div
          className="rounded-[20px] p-12 md:p-12"
          style={{
            backgroundColor: "white",
            border: "1.5px solid var(--color-border-light)",
          }}
        >
          <CertificateGrid />
        </div>
      </div>
    </section>
  );
}
