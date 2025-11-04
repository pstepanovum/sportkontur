// FILE: src/components/ui/sections/header/mobile-header.tsx

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface MobileHeaderProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{
    label: string;
    href: string;
    hasDropdown?: boolean;
    dropdownItems?: Array<{ label: string; href: string }>;
  }>;
}

export function MobileHeader({ isOpen, onClose, navLinks }: MobileHeaderProps) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-50 bg-white">
      {/* Header with Close Button only */}
      <div className="flex items-center justify-end h-20 px-5 py-4">
        {/* Close Button (X) */}
        <button
          onClick={onClose}
          className="relative w-10 h-10 flex items-center justify-center"
          aria-label="Close menu"
        >
          <span className="absolute w-6 h-0.5 bg-[var(--color-neutral-100)] rotate-45" />
          <span className="absolute w-6 h-0.5 bg-[var(--color-neutral-100)] -rotate-45" />
        </button>
      </div>

      {/* Menu Content */}
      <div className="flex flex-col h-[calc(100vh-5rem)] justify-between px-5 py-8">
        {/* Navigation Links - Left aligned */}
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-3xl font-semibold py-2"
              style={{ color: "var(--color-neutral-100)" }}
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bottom CTA Section */}
        <div className="flex flex-col gap-4">
          <Link
            href="/consultation"
            className="text-center font-medium text-lg py-3"
            style={{ color: "var(--color-neutral-100)" }}
            onClick={onClose}
          >
            Консультация
          </Link>
          <Button href="/request-quote" className="w-full">
            Запросить расчет
          </Button>
        </div>
      </div>
    </div>
  );
}
