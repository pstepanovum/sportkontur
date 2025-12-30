// FILE: src/components/pages/contact/form/contact-form.tsx

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact.php", {
        // ← Changed to .php
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Произошла ошибка при отправке");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setErrorMessage(
        "Не удалось отправить форму. Проверьте подключение к интернету."
      );
    }
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
          disabled={status === "loading"}
          className="w-full px-4 py-3 transition-colors duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
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
          disabled={status === "loading"}
          className="w-full px-4 py-3 transition-colors duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
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
          disabled={status === "loading"}
          className="w-full px-4 py-3 transition-colors duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
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
          disabled={status === "loading"}
          className="w-full px-4 py-3 transition-colors duration-200 resize-none shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            borderRadius: "10px",
            border: "1px solid var(--color-border-light)",
            backgroundColor: "white",
            color: "var(--color-neutral-100)",
            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
          }}
        />
      </div>

      {status === "success" && (
        <div
          className="p-4 rounded-lg border"
          style={{
            backgroundColor: "#f0fdf4",
            borderColor: "#86efac",
          }}
        >
          <p style={{ color: "#166534" }}>
            ✅ Спасибо! Ваше сообщение успешно отправлено. Мы свяжемся с вами в
            ближайшее время.
          </p>
        </div>
      )}

      {status === "error" && (
        <div
          className="p-4 rounded-lg border"
          style={{
            backgroundColor: "#fef2f2",
            borderColor: "#fca5a5",
          }}
        >
          <p style={{ color: "#991b1b" }}>
            ❌{" "}
            {errorMessage ||
              "Произошла ошибка при отправке. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону."}
          </p>
        </div>
      )}

      <Button
        size="lg"
        className="w-full"
        disabled={status === "loading"}
        type="submit"
      >
        {status === "loading" ? "Отправка..." : "Отправить сообщение"}
      </Button>
    </form>
  );
}
