// FILE: src/components/pages/home/hero.tsx

import { MovingTextStripe } from "./hero/moving-text-stripe";
import { HeroContent } from "./hero/hero-content";

export default function Hero() {
  const keywords = [
    "Безопасные площадки",
    "Качественное оборудование",
    "Индивидуальные проекты",
    "Гарантия 5 лет",
  ];

  return (
    <section className="min-h-screen w-full flex flex-col justify-between pt-[162px] md:pt-[146px] relative">
      {/* Background Image with overlay and blur */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url(/images/hero-playground.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Green overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(84, 181, 136, 0.15)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center mb-25 justify-center">
        <HeroContent />
      </div>

      {/* Moving Text Stripe at Bottom */}
      <div className="relative z-10">
        <MovingTextStripe keywords={keywords} />
      </div>
    </section>
  );
}
