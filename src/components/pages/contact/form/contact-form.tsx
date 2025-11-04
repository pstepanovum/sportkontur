// FILE: src/components/pages/contact/form/contact-form.tsx

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
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
    <form onSubmit={handleSubmit} className="space-y-6 max-w-[500px] mx-auto">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-2"
          style={{ color: "var(--color-neutral-100)" }}
        >
          Имя *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Иван Иванов"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 transition-colors duration-200 shadow-sm"
          style={{
            borderRadius: "10px",
            border: "1px solid var(--color-border-light)",
            backgroundColor: "white",
            color: "var(--color-neutral-100)",
            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
          }}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2"
          style={{ color: "var(--color-neutral-100)" }}
        >
          Электронная почта *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="email@компания.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 transition-colors duration-200 shadow-sm"
          style={{
            borderRadius: "10px",
            border: "1px solid var(--color-border-light)",
            backgroundColor: "white",
            color: "var(--color-neutral-100)",
            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
          }}
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium mb-2"
          style={{ color: "var(--color-neutral-100)" }}
        >
          Компания
        </label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Название компании"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 transition-colors duration-200 shadow-sm"
          style={{
            borderRadius: "10px",
            border: "1px solid var(--color-border-light)",
            backgroundColor: "white",
            color: "var(--color-neutral-100)",
            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
          }}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2"
          style={{ color: "var(--color-neutral-100)" }}
        >
          Сообщение *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Расскажите нам о ваших потребностях..."
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 transition-colors duration-200 resize-none shadow-sm"
          style={{
            borderRadius: "10px",
            border: "1px solid var(--color-border-light)",
            backgroundColor: "white",
            color: "var(--color-neutral-100)",
            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
          }}
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        Отправить сообщение
      </Button>
    </form>
  );
}
