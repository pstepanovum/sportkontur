// FILE: src/components/pages/home/hero/hero-content.tsx

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SmileyLoveIcon } from "@/components/icons/texture/urban/smiley-love";

export function HeroContent() {
  return (
    <div className="text-center px-8 max-w-4xl mx-auto -mt-48">
      {/* Badge */}
      <div className="flex justify-center mb-6">
        <Badge icon={SmileyLoveIcon} variant="neutral">
          Спорт Контур
        </Badge>
      </div>

      {/* Main heading with Dela Gothic One font */}
      <h1
        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
        style={{ fontFamily: "var(--font-dela-gothic)" }}
      >
        Веселье для каждого!
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
        Создаем безопасные и качественные игровые площадки для детей по всей
        России
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button variant="white" size="md" href="/catalog" iconTrailing={false}>
          Смотреть каталог
        </Button>
        <Button
          variant="primary"
          size="md"
          href="/contact"
          iconTrailing={false}
        >
          Связаться с нами
        </Button>
      </div>
    </div>
  );
}
