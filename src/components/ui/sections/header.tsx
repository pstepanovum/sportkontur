// FILE: src/components/ui/sections/header.tsx

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Logo } from "@/components/icons/logo/logo";
import { LogoWhite } from "@/components/icons/logo/logo-white";
import { Button } from "@/components/ui/button";
import { MobileHeader } from "./header/mobile-header";
import { AnnouncementBanner } from "./header/announcement-banner";
import { useHeaderTheme } from "@/contexts/header-theme-context";
import { useBlurOverlay } from "@/contexts/blur-overlay-context";

const navLinks = [
  { label: "Главная", href: "/" },
  {
    label: "Каталог",
    href: "/catalog",
    hasDropdown: true,
    dropdownItems: [
      { label: "Игровые комплексы", href: "/catalog/playgrounds" },
      { label: "Спортивное оборудование", href: "/catalog/sports" },
      { label: "Уличная мебель", href: "/catalog/furniture" },
      { label: "Резиновое покрытие", href: "/catalog/surfaces" },
    ],
  },
  {
    label: "О нас",
    href: "/about",
    hasDropdown: true,
    dropdownItems: [
      { label: "Наша команда", href: "/about/team" },
      { label: "История компании", href: "/about/history" },
      { label: "Сертификаты", href: "/about/certificates" },
    ],
  },
  {
    label: "Проекты",
    href: "/projects",
    hasDropdown: true,
    dropdownItems: [
      { label: "Детские сады", href: "/projects/kindergartens" },
      { label: "Школы", href: "/projects/schools" },
      { label: "Парки", href: "/projects/parks" },
      { label: "Жилые комплексы", href: "/projects/residential" },
    ],
  },
  { label: "Контакты", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme } = useHeaderTheme();
  const { setIsBlurred } = useBlurOverlay();

  const isLight = theme === "light";
  const isDropdownOpen = activeDropdown !== null;

  // Update blur state when dropdown opens/closes
  useEffect(() => {
    setIsBlurred(isDropdownOpen);
  }, [isDropdownOpen, setIsBlurred]);

  // When dropdown is open, everything is black, otherwise use theme colors
  const textColor = isDropdownOpen
    ? "#000000"
    : isLight
    ? "#FFFFFF"
    : "var(--color-neutral-100)";

  // Show dark logo when: dropdown is open OR theme is dark
  const showDarkLogo = isDropdownOpen || !isLight;

  return (
    <>
      {/* Announcement Banner */}
      <AnnouncementBanner message="Специальное предложение: скидка 20% на все игровые комплексы — ограниченное время!" />

      {/* Header - absolute positioning, stays at top */}
      <header
        className="absolute top-[42px] md:top-[12px] left-0 right-0 z-40"
        onMouseLeave={() => setActiveDropdown(null)}
      >
        {/* Background with smooth transition */}
        <div
          className="absolute inset-0 transition-all duration-300 ease-out"
          style={{
            backgroundColor: isDropdownOpen
              ? "rgba(255, 255, 255, 1)"
              : "transparent",
          }}
        />

        {/* Content */}
        <div className="relative">
          <div className="px-5 md:px-20 py-4">
            <nav className="flex items-center h-20">
              {/* Logo with smooth transition - fixed width */}
              <div className="flex items-center flex-shrink-0 w-[240px]">
                <Link href="/" className="flex items-center h-full">
                  <div className="relative w-[120px] h-[41px] flex items-center">
                    <div
                      className="absolute inset-0 transition-opacity duration-300 flex items-center"
                      style={{ opacity: showDarkLogo ? 0 : 1 }}
                    >
                      <LogoWhite width={120} height={41} />
                    </div>
                    <div
                      className="absolute inset-0 transition-opacity duration-300 flex items-center"
                      style={{ opacity: showDarkLogo ? 1 : 0 }}
                    >
                      <Logo width={120} height={41} />
                    </div>
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation Links - centered */}
              <div className="hidden lg:flex items-center gap-6 flex-1 justify-center">
                {navLinks.map((link) => (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() =>
                      link.hasDropdown && setActiveDropdown(link.label)
                    }
                  >
                    <Link
                      href={link.href}
                      className="font-medium text-base transition-colors duration-300 whitespace-nowrap"
                      style={{ color: textColor }}
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>

              {/* Desktop CTA Buttons - fixed width to match logo side */}
              <div className="hidden lg:flex items-center justify-end gap-6 flex-shrink-0 w-[240px]">
                <Link
                  href="/consultation"
                  className="font-medium text-base transition-colors duration-300 whitespace-nowrap"
                  style={{ color: textColor }}
                >
                  Консультация
                </Link>
                <div className="whitespace-nowrap">
                  <Button
                    href="/request-quote"
                    className="transition-none hover:brightness-100"
                  >
                    Запросить расчет
                  </Button>
                </div>
              </div>

              {/* Mobile Hamburger Menu */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center ml-auto"
                aria-label="Toggle menu"
              >
                <span
                  className="w-6 h-0.5 transition-colors duration-300"
                  style={{ backgroundColor: textColor }}
                />
                <span
                  className="w-6 h-0.5 transition-colors duration-300"
                  style={{ backgroundColor: textColor }}
                />
                <span
                  className="w-6 h-0.5 transition-colors duration-300"
                  style={{ backgroundColor: textColor }}
                />
              </button>
            </nav>
          </div>

          {/* Dropdown Menu */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              activeDropdown ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-5 md:px-20 pb-8">
              {navLinks.map(
                (link) =>
                  link.hasDropdown &&
                  activeDropdown === link.label && (
                    <div key={link.label} className="grid grid-cols-4 gap-6">
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group"
                        >
                          <div className="aspect-video bg-gray-200 rounded-md mb-3 overflow-hidden">
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                              <span className="text-sm">Image</span>
                            </div>
                          </div>
                          <h4 className="font-medium text-base text-black">
                            {item.label}
                          </h4>
                        </Link>
                      ))}
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
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
