// FILE: src/components/ui/sections/footer.tsx

"use client";

import Link from "next/link";
import { Logo } from "@/components/icons/logo/logo";
import { Texture } from "@/components/icons/texture/texture";
import { FooterCredits } from "./footer/footer-credits";

const footerLinks = {
  company: {
    title: "Компания",
    links: [
      { label: "О нас", href: "/about" },
      { label: "Наша команда", href: "/about/team" },
      { label: "Контакты", href: "/contact" },
    ],
  },
  products: {
    title: "Каталог",
    links: [
      { label: "Все товары", href: "/catalog" },
      { label: "Игровые площадки", href: "/catalog/playgrounds" },
      { label: "Спортивное оборудование", href: "/catalog/sports" },
      { label: "Уличная мебель", href: "/catalog/furniture" },
      { label: "Покрытия", href: "/catalog/surfaces" },
    ],
  },
  projects: {
    title: "Проекты",
    links: [
      { label: "Детские сады", href: "/projects/kindergartens" },
      { label: "Школы", href: "/projects/schools" },
      { label: "Парки", href: "/projects/parks" },
      { label: "Жилые комплексы", href: "/projects/residential" },
    ],
  },
  info: {
    title: "Информация",
    links: [
      { label: "Доставка", href: "/delivery" },
      { label: "Документация", href: "/docs" },
      { label: "Политика конфиденциальности", href: "/privacy" },
      { label: "Условия использования", href: "/terms" },
    ],
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white">
      {/* Main Footer Content */}
      <div className="relative overflow-hidden">
        {/* Texture Background Pattern - Grid of dots */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.5,
            color: "var(--color-neutral-30)",
          }}
        >
          <div className="grid grid-cols-[repeat(auto-fill,39px)] gap-0 w-full h-full">
            {Array.from({ length: 500 }).map((_, index) => (
              <div key={index} className="w-[39px] h-[34px]">
                <Texture />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-20 py-12">
          {/* Top Section - Logo and Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {/* Logo and Contact Info */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1 mb-8 lg:mb-0">
              <Logo width={100} height={34} />
              <div className="mt-4 space-y-2">
                <a
                  href="mailto:sportkontur@yandex.ru"
                  className="block text-sm hover:opacity-70"
                  style={{ color: "var(--color-neutral-100)" }}
                >
                  sportkontur@yandex.ru
                </a>
                <a
                  href="tel:+73952404029"
                  className="block text-sm hover:opacity-70"
                  style={{ color: "var(--color-neutral-100)" }}
                >
                  8 (3952) 40-40-29
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3
                className="font-semibold mb-4"
                style={{ color: "var(--color-neutral-100)" }}
              >
                {footerLinks.company.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:opacity-70"
                      style={{ color: "var(--color-neutral-60)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3
                className="font-semibold mb-4"
                style={{ color: "var(--color-neutral-100)" }}
              >
                {footerLinks.products.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.products.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:opacity-70"
                      style={{ color: "var(--color-neutral-60)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div>
              <h3
                className="font-semibold mb-4"
                style={{ color: "var(--color-neutral-100)" }}
              >
                {footerLinks.projects.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.projects.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:opacity-70"
                      style={{ color: "var(--color-neutral-60)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info */}
            <div>
              <h3
                className="font-semibold mb-4"
                style={{ color: "var(--color-neutral-100)" }}
              >
                {footerLinks.info.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.info.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:opacity-70"
                      style={{ color: "var(--color-neutral-60)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section - Copyright */}
          <div className="pt-8">
            <p
              className="text-sm text-center md:text-left"
              style={{ color: "var(--color-neutral-60)" }}
            >
              © {currentYear} Спорт Контур. Все права защищены.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Credits */}
      <FooterCredits />
    </footer>
  );
}
