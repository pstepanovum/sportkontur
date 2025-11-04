// FILE: src/components/ui/sections/header.tsx

"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/icons/logo/logo";
import { LogoWhite } from "@/components/icons/logo/logo-white";
import { Button } from "@/components/ui/button";
import { MobileHeader } from "./header/mobile-header";
import { AnnouncementBanner } from "./header/announcement-banner";
import { useHeaderTheme } from "@/contexts/header-theme-context";

const navLinks = [
  { label: "Главная", href: "/" },
  { label: "Каталог", href: "/catalog" },
  { label: "О нас", href: "/about" },
  { label: "Проекты", href: "/projects" },
  { label: "Контакты", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useHeaderTheme();

  const isLight = theme === "light";
  const textColor = isLight ? "#FFFFFF" : "var(--color-neutral-100)";

  return (
    <>
      {/* Announcement Banner */}
      <AnnouncementBanner message="Специальное предложение: скидка 20% на все игровые комплексы — ограниченное время!" />

      {/* Header - positioned below announcement banner */}
      <header className="fixed top-[42px] md:top-[30px] left-0 right-0 z-40 px-5 md:px-20 py-4 transition-colors duration-500">
        <nav className="flex items-center h-20">
          {/* Logo with smooth transition - fixed width */}
          <div className="flex items-center flex-shrink-0 w-[240px]">
            <Link href="/" className="flex items-center h-full">
              <div className="relative w-[120px] h-[41px] flex items-center">
                <div
                  className="absolute inset-0 transition-opacity duration-500 flex items-center"
                  style={{ opacity: isLight ? 1 : 0 }}
                >
                  <LogoWhite width={120} height={41} />
                </div>
                <div
                  className="absolute inset-0 transition-opacity duration-500 flex items-center"
                  style={{ opacity: isLight ? 0 : 1 }}
                >
                  <Logo width={120} height={41} />
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links - centered */}
          <div className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-base transition-colors duration-500 whitespace-nowrap"
                style={{ color: textColor }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons - fixed width to match logo side */}
          <div className="hidden lg:flex items-center justify-end gap-6 flex-shrink-0 w-[240px]">
            <Link
              href="/consultation"
              className="font-medium text-base transition-colors duration-500 whitespace-nowrap"
              style={{ color: textColor }}
            >
              Консультация
            </Link>
            <div className="whitespace-nowrap">
              <Button href="/request-quote">Запросить расчет</Button>
            </div>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center ml-auto"
            aria-label="Toggle menu"
          >
            <span
              className="w-6 h-0.5 transition-colors duration-500"
              style={{ backgroundColor: textColor }}
            />
            <span
              className="w-6 h-0.5 transition-colors duration-500"
              style={{ backgroundColor: textColor }}
            />
            <span
              className="w-6 h-0.5 transition-colors duration-500"
              style={{ backgroundColor: textColor }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Full Screen Menu */}
      <MobileHeader
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
