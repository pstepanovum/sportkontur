// FILE: src/app/layout.tsx

import type { Metadata, Viewport } from "next";
import { Inter, Dela_Gothic_One } from "next/font/google";
import { HeaderThemeProvider } from "@/contexts/header-theme-context";
import { BlurOverlayProvider } from "@/contexts/blur-overlay-context";
import { ModalLockProvider } from "@/contexts/modal-lock-context";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const delaGothicOne = Dela_Gothic_One({
  variable: "--font-dela-gothic",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FF6B35",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sportkontur.ru"),
  title: {
    default: "Спорт Контур | Детские игровые площадки в Иркутске",
    template: "%s | Спорт Контур",
  },
  description: "Производство и монтаж детских игровых площадок, спортивного оборудования и уличной мебели в Иркутске. Безопасные площадки с гарантией 5 лет.",
  keywords: [
    "детские площадки",
    "производство детских площадок",
    "спортивное оборудование",
    "уличная мебель",
    "Иркутск",
    "спорт контур",
  ],
  authors: [{ name: "Спорт Контур" }],
  creator: "Спорт Контур",
  publisher: "Спорт Контур",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://sportkontur.ru",
    siteName: "Спорт Контур",
    title: "Спорт Контур | Детские игровые площадки в Иркутске",
    description: "Производство и монтаж детских игровых площадок, спортивного оборудования и уличной мебели в Иркутске. Безопасные площадки с гарантией 5 лет.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Спорт Контур - Детские игровые площадки",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Спорт Контур | Детские игровые площадки в Иркутске",
    description: "Производство и монтаж детских игровых площадок, спортивного оборудования и уличной мебели в Иркутске.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
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
