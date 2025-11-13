// FILE: src/components/pages/consultation/consultation-form.tsx

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/pages/shared/page-hero";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="w-full pt-[120px] md:pt-[160px] pb-16 md:pb-24 bg-white">
      <div className="px-5 md:px-20 max-w-[1400px] mx-auto w-full">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
          <div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{
                fontFamily: "var(--font-dela-gothic)",
                color: "var(--color-neutral-100)",
              }}
            >
              Бесплатная консультация
            </h1>
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: "var(--color-neutral-60)" }}
            >
              Оставьте заявку и наш специалист свяжется с вами в течение 15
              минут для консультации по вашему проекту
            </p>
          </div>
          <div>
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                border: "1.5px solid var(--color-border-light)",
              }}
            >
              <h3
                className="text-xl font-semibold mb-6"
                style={{ color: "var(--color-neutral-100)" }}
              >
                Что вы получите:
              </h3>
              <ul className="space-y-4">
                {[
                  "Консультацию опытного специалиста",
                  "Расчет стоимости вашего проекта",
                  "Подбор оптимального оборудования",
                  "Ответы на все вопросы",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        backgroundColor: "var(--color-primary-surface)",
                      }}
                    >
                      <span style={{ color: "var(--color-primary-main)" }}>
                        ✓
                      </span>
                    </div>
                    <span
                      className="text-base"
                      style={{ color: "var(--color-neutral-100)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--color-neutral-100)" }}
              >
                Ваше имя *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl text-base"
                style={{
                  border: "1.5px solid var(--color-border-light)",
                  color: "var(--color-neutral-100)",
                }}
                placeholder="Иван Иванов"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--color-neutral-100)" }}
              >
                Телефон *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl text-base"
                style={{
                  border: "1.5px solid var(--color-border-light)",
                  color: "var(--color-neutral-100)",
                }}
                placeholder="+7 (900) 123-45-67"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--color-neutral-100)" }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl text-base"
                style={{
                  border: "1.5px solid var(--color-border-light)",
                  color: "var(--color-neutral-100)",
                }}
                placeholder="example@mail.ru"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--color-neutral-100)" }}
              >
                Сообщение
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl text-base resize-none"
                style={{
                  border: "1.5px solid var(--color-border-light)",
                  color: "var(--color-neutral-100)",
                }}
                placeholder="Расскажите о вашем проекте..."
              />
            </div>

            <Button className="w-full md:w-auto">Отправить заявку</Button>

            <p
              className="text-sm"
              style={{ color: "var(--color-neutral-60)" }}
            >
              Нажимая кнопку, вы соглашаетесь с{" "}
              <a
                href="/privacy"
                className="underline hover:opacity-70"
                style={{ color: "var(--color-neutral-100)" }}
              >
                политикой конфиденциальности
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
