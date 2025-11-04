// FILE: src/components/pages/contact/contact-info.tsx

import { ContactInfo } from "./info/contact-info";
import { ContactMap } from "./map/contact-map";
import { Badge } from "@/components/ui/badge";
import { MapPinIcon } from "@/components/icons/map-pin";
import { Texture } from "@/components/icons/texture/texture";

export default function ContactInfoSection() {
  return (
    <>
      {/* Section 2: Map + Contact Info */}
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
              <Badge icon={MapPinIcon} variant="secondary">
                Наше местоположение
              </Badge>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "var(--color-neutral-100)" }}
            >
              Где нас найти
            </h2>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: "var(--color-neutral-60)" }}
            >
              Посетите наш офис или свяжитесь с нами удобным способом
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left: Map */}
              <div className="lg:col-span-7">
                <ContactMap />
              </div>

              {/* Right: Contact Info - Aligned with CTA column */}
              <div className="lg:col-span-5">
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
