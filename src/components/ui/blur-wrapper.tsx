// FILE: src/components/ui/blur-wrapper.tsx

"use client";

import { useBlurOverlay } from "@/contexts/blur-overlay-context";
import { ReactNode } from "react";

export function BlurWrapper({ children }: { children: ReactNode }) {
  const { isBlurred } = useBlurOverlay();

  return (
    <div
      className="transition-all duration-300"
      style={{
        filter: isBlurred ? "blur(6px)" : "none",
        pointerEvents: isBlurred ? "none" : "auto",
      }}
    >
      {children}
    </div>
  );
}
