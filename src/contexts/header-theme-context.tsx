// FILE: src/contexts/header-theme-context.tsx

"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type HeaderTheme = "light" | "dark";

interface HeaderThemeContextType {
  theme: HeaderTheme;
  setTheme: (theme: HeaderTheme) => void;
}

const HeaderThemeContext = createContext<HeaderThemeContextType | undefined>(
  undefined
);

export function HeaderThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<HeaderTheme>("dark");

  return (
    <HeaderThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </HeaderThemeContext.Provider>
  );
}

export function useHeaderTheme() {
  const context = useContext(HeaderThemeContext);
  if (!context) {
    throw new Error("useHeaderTheme must be used within HeaderThemeProvider");
  }
  return context;
}
