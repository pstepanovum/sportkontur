// FILE: src/components/pages/home/features.tsx

import { FeatureCard } from "./features/feature-card";
import { Badge } from "@/components/ui/badge";
import { BoltIcon } from "@/components/icons/texture/stripe/bolt";
import { CrownIcon } from "@/components/icons/texture/stripe/crown";
import { SmileIcon } from "@/components/icons/texture/stripe/smile";
import { SmileyLoveIcon } from "@/components/icons/texture/stripe/smiley-love";
import { DoodleOne } from "@/components/icons/texture/illustration/doodle-one";
import { DoodleTwo } from "@/components/icons/texture/illustration/doodle-two";
import { DoodleThree } from "@/components/icons/texture/illustration/doodle-three";
import { DoodleFour } from "@/components/icons/texture/illustration/doodle-four";

const features = [
  {
    icon: BoltIcon,
    title: "Проектирование",
    description:
      "Разрабатываем уникальные проекты игровых площадок с учетом ваших пожеланий, возраста детей и особенностей территории.",
    illustration: DoodleOne,
  },
  {
    icon: CrownIcon,
    title: "Производство",
    description:
      "Изготавливаем игровое оборудование из качественных материалов на современном производстве с соблюдением всех стандартов безопасности.",
    illustration: DoodleTwo,
  },
  {
    icon: SmileIcon,
    title: "Монтаж",
    description:
      "Профессиональная установка оборудования нашими опытными специалистами с соблюдением всех технологий и требований безопасности.",
    illustration: DoodleThree,
  },
  {
    icon: SmileyLoveIcon,
    title: "Гарантия",
    description:
      "Предоставляем 5 лет гарантии на все оборудование и осуществляем гарантийное обслуживание в течение всего срока.",
    illustration: DoodleFour,
  },
];

export default function Features() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-20">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-6">
            <Badge icon={BoltIcon} variant="primary">
              Наш процесс
            </Badge>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--color-neutral-100)" }}
          >
            Как мы работаем
          </h2>
          <p
            className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--color-neutral-60)" }}
          >
            От идеи до готовой площадки — полный цикл производства
          </p>
        </div>

        {/* Feature Cards Grid with Horizontal Bento Grid Layout */}
        <div className="space-y-4 md:space-y-5">
          {/* Row 1 - First card narrower, Second card wider */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            <div className="md:col-span-5">
              <FeatureCard
                icon={features[0].icon}
                title={features[0].title}
                description={features[0].description}
                illustration={features[0].illustration}
              />
            </div>
            <div className="md:col-span-7">
              <FeatureCard
                icon={features[1].icon}
                title={features[1].title}
                description={features[1].description}
                illustration={features[1].illustration}
              />
            </div>
          </div>

          {/* Row 2 - First card wider, Second card narrower */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            <div className="md:col-span-7">
              <FeatureCard
                icon={features[2].icon}
                title={features[2].title}
                description={features[2].description}
                illustration={features[2].illustration}
              />
            </div>
            <div className="md:col-span-5">
              <FeatureCard
                icon={features[3].icon}
                title={features[3].title}
                description={features[3].description}
                illustration={features[3].illustration}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
