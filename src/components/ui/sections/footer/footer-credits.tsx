// FILE: src/components/ui/sections/footer/footer-credits.tsx

import { USAFlag } from "@/components/icons/flags/usa-flag";

export function FooterCredits() {
  return (
    <div
      className="w-full px-6 py-2 md:py-1.5 flex justify-center items-center gap-1.5"
      style={{ backgroundColor: "var(--color-neutral-10)" }}
    >
      <span
        className="text-xs"
        style={{
          color: "var(--color-neutral-60)",
        }}
      >
        Designed by
      </span>
      <a
        href="https://swendl.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-medium hover:opacity-70 transition-opacity"
        style={{
          color: "var(--color-neutral-70)",
        }}
      >
        swendl.com
      </a>
      <USAFlag className="w-3 h-2" />
    </div>
  );
}
