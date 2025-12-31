// FILE: src/components/pages/shared/faq/faq.tsx

"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { FaqItem } from "./faq/faq-item";
import { BoltIcon } from "@/components/icons/texture/urban/bolt";

const faqs = [
  {
    question: "Как долго занимает производство игровой площадки?",
    answer:
      "Срок производства зависит от сложности проекта и составляет от 2 до 6 недель. После согласования проекта мы предоставим точные сроки изготовления и монтажа оборудования.",
  },
  {
    question: "Можно ли создать индивидуальный проект?",
    answer:
      "Да, мы специализируемся на индивидуальных проектах. Наши дизайнеры разработают уникальную площадку с учетом ваших пожеланий, возраста детей и особенностей территории.",
  },
  {
    question: "Какие материалы вы используете?",
    answer:
      "Мы используем только качественные и безопасные материалы: металл с антикоррозийным покрытием, водостойкую фанеру, экологичный пластик и натуральное дерево. Все материалы имеют сертификаты соответствия.",
  },
  {
    question: "Выполняете ли вы монтаж оборудования?",
    answer:
      "Да, наши опытные специалисты выполняют профессиональный монтаж с соблюдением всех технологий и требований безопасности. Монтаж входит в стоимость проекта.",
  },
  {
    question: "Какие документы необходимы для заказа?",
    answer:
      "Для начала работы необходим план территории и техническое задание. После этого мы подготовим коммерческое предложение и договор. Для юридических лиц потребуются реквизиты компании.",
  },
  {
    question: "Предоставляете ли вы послегарантийное обслуживание?",
    answer:
      "Да, после окончания гарантийного срока мы предлагаем услуги по техническому обслуживанию оборудования, ремонту и замене изношенных элементов по доступным ценам.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-6 md:py-14 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-6">
            <Badge icon={BoltIcon} variant="secondary">
              Вопросы и ответы
            </Badge>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "var(--color-neutral-100)" }}
          >
            Часто задаваемые вопросы
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--color-neutral-60)" }}
          >
            Мы собрали самые популярные вопросы, чтобы помочь вам начать работу
            с нами.
          </p>
        </div>

        {/* FAQ Items Container */}
        <div
          className="rounded-[20px] p-6 md:p-2"
          style={{
            backgroundColor: "var(--color-neutral-20)",
            border: "1.5px solid var(--color-border-light)",
          }}
        >
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
