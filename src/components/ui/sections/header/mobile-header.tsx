// FILE: src/components/ui/sections/header/mobile-header.tsx

"use client";

import Link from "next/link";
import { Logo } from "@/components/icons/logo/logo";
import { Button } from "@/components/ui/button";

interface MobileHeaderProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ label: string; href: string }>;
}

export function MobileHeader({ isOpen, onClose, navLinks }: MobileHeaderProps) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-50 bg-white">
      {/* Header with Logo and Close Button - Match exact spacing from main header */}
      <div className="flex items-center justify-between h-20 px-5 py-4">
        <div className="flex items-center">
          <Link href="/" onClick={onClose}>
            <Logo width={120} height={41} />
          </Link>
        </div>

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
      <div className="flex flex-col h-[calc(100vh-5rem)] justify-between px-8 py-8">
        {/* Navigation Links */}
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-semibold"
              style={{ color: "var(--color-neutral-100)" }}
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bottom CTA Section */}
        <div className="flex flex-col gap-4 pb-8">
          <Link
            href="/login"
            className="text-center font-medium text-lg py-3"
            style={{ color: "var(--color-neutral-100)" }}
            onClick={onClose}
          >
            Login
          </Link>
          <Button href="/get-started" size="lg" className="w-full">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
