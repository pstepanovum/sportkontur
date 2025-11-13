// FILE: src/components/pages/about/about-team.tsx

import { Badge } from "@/components/ui/badge";
import { PhoneIcon } from "@/components/icons/phone";
import { Button } from "@/components/ui/button";

export default function AboutTeam() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="px-5 md:px-20 max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-6">
            <Badge icon={PhoneIcon} variant="secondary">
              Свяжитесь с нами
            </Badge>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--color-neutral-100)" }}
          >
            Готовы начать проект?
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8"
            style={{ color: "var(--color-neutral-60)" }}
          >
            Звоните нам 8 (3952) 40-40-29, и мы всегда договоримся!
          </p>
        </div>

        {/* Contact Card */}
        <div
          className="rounded-[20px] p-8 md:p-12 text-center"
          style={{
            backgroundColor: "var(--color-neutral-20)",
            border: "1.5px solid var(--color-border-light)",
          }}
        >
          <div className="max-w-2xl mx-auto">
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "var(--color-neutral-60)" }}
            >
              С уважением к Вам, начальник отдела продаж компании «Спорт Контур»
              г. Иркутск
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="tel:+73952404029">
                Позвонить нам
              </Button>
              <Button variant="secondary" size="lg" href="/contact">
                Написать сообщение
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
