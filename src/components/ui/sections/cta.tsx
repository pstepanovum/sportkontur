// FILE: src/components/ui/sections/cta.tsx

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BoltIcon } from "@/components/icons/texture/urban/bolt";
import { CTAStripe } from "./cta/cta-stripe";

export default function CTA() {
  const keywords = [
    "Бесплатная консультация",
    "Гарантия качества",
    "Быстрая установка",
    "Индивидуальный подход",
  ];

  return (
    <section className="w-full py-16 md:py-16 px-5 md:px-16">
      <div
        className="relative rounded-[16px] overflow-hidden"
        style={{
          minHeight: "600px",
        }}
      >
        {/* Background Image with Blur */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url(/images/cta-playground.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(8px)",
            transform: "scale(1.1)",
          }}
        />

        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-between h-full min-h-[600px]">
          {/* Main Content - Centered */}
          <div className="flex-1 flex items-center justify-center px-8 py-20">
            <div className="text-center max-w-3xl">
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <Badge icon={BoltIcon} variant="neutral">
                  Готовы начать?
                </Badge>
              </div>

              {/* Heading */}
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
                style={{ fontFamily: "var(--font-dela-gothic)" }}
              >
                Создадим площадку вашей мечты
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Свяжитесь с нами для бесплатной консультации и расчета стоимости
                вашего проекта
              </p>

              {/* Button */}
              <Button variant="primary" size="lg" href="/contact">
                Связаться с нами
              </Button>
            </div>
          </div>

          {/* Moving Text Stripe at Bottom */}
          <CTAStripe keywords={keywords} />
        </div>
      </div>
    </section>
  );
}
