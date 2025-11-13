// FILE: src/app/layout.tsx

import type { Metadata } from "next";
import { Inter, Dela_Gothic_One } from "next/font/google";
import { HeaderThemeProvider } from "@/contexts/header-theme-context";
import { BlurOverlayProvider } from "@/contexts/blur-overlay-context";
import { ModalLockProvider } from "@/contexts/modal-lock-context";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const delaGothicOne = Dela_Gothic_One({
  variable: "--font-dela-gothic",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Спорт Контур | Детские игровые площадки",
  description: "Производство детских игровых площадок",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.variable} ${delaGothicOne.variable} antialiased font-sans`}
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <HeaderThemeProvider>
          <BlurOverlayProvider>
            <ModalLockProvider>{children}</ModalLockProvider>
          </BlurOverlayProvider>
        </HeaderThemeProvider>
      </body>
    </html>
  );
}
