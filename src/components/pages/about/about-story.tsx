// FILE: src/components/pages/about/about-story.tsx

import { Badge } from "@/components/ui/badge";
import { HeartIcon } from "@/components/icons/texture/urban/heart";
import { Texture } from "@/components/icons/texture/texture";

export default function AboutStory() {
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
            <Badge icon={HeartIcon} variant="secondary">
              Наша миссия
            </Badge>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--color-neutral-100)" }}
          >
            Создаем безопасное будущее
          </h2>
        </div>

        {/* Content Container with white background */}
        <div
          className="rounded-[20px] p-8 md:p-12"
          style={{
            backgroundColor: "white",
            border: "1.5px solid var(--color-border-light)",
          }}
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-neutral-60)" }}
            >
              Детские площадки и их производство — это одно из основных
              направлений деятельности компании. Основная миссия — благоустроить
              каждый уголок России, от городов до небольших деревушек, так чтобы
              они стали безопасными и родными.
            </p>

            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-neutral-60)" }}
            >
              Мы производим, доставляем и устанавливаем в г. Иркутске и
              Иркутской области детские площадки и уличные игровые комплексы,
              элементы детского оборудования, качели, карусели, горки,
              балансиры, песочницы, домики, беседки, качалки на пружине и многое
              другое.
            </p>

            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-neutral-60)" }}
            >
              Мы создаем спортивные детские площадки для здоровой и сильной
              молодежи, лавки и скамейки для задушевных бесед, уютные детские
              уголки, где звучит смех и идёт игра!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
