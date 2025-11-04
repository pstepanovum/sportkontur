// FILE: src/contexts/blur-overlay-context.tsx

"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface BlurOverlayContextType {
  isBlurred: boolean;
  setIsBlurred: (blurred: boolean) => void;
}

const BlurOverlayContext = createContext<BlurOverlayContextType | undefined>(
  undefined
);

export function BlurOverlayProvider({ children }: { children: ReactNode }) {
  const [isBlurred, setIsBlurred] = useState(false);

  return (
    <BlurOverlayContext.Provider value={{ isBlurred, setIsBlurred }}>
      {children}
    </BlurOverlayContext.Provider>
  );
}

export function useBlurOverlay() {
  const context = useContext(BlurOverlayContext);
  if (!context) {
    throw new Error("useBlurOverlay must be used within BlurOverlayProvider");
  }
  return context;
}
