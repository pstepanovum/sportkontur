// FILE: src/components/pages/contact/contact-form.tsx

import { ContactForm } from "./form/contact-form";

export default function ContactFormSection() {
  return (
    <>
      {/* Section 1: Hero + Form */}
      <section className="w-full pt-[120px] md:pt-[140px] pb-12 md:pb-16 bg-white min-h-screen flex items-center">
        <div className="px-5 md:px-20 max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Hero Content */}
            <div className="lg:max-w-[500px]">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{ color: "var(--color-neutral-100)" }}
              >
                Свяжитесь с нами
              </h1>
              <p
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: "var(--color-neutral-60)" }}
              >
                Готовы создать идеальную игровую площадку? Мы ответим на все
                ваши вопросы и поможем воплотить вашу идею в реальность.
              </p>
            </div>

            {/* Right: Contact Form with outer box */}
            <div className="w-full">
              <div
                className="p-3 md:p-6"
                style={{
                  borderRadius: "24px",
                  backgroundColor: "var(--color-neutral-20)",
                  border: "1.5px solid var(--color-border-light)",
                }}
              >
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
