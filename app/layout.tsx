import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Приватный сервер Minecraft — DEGROCRAFT | Ванильное выживание",
  description:
    "Уютный приватный Minecraft сервер для друзей. Ламповое сообщество, ванильный геймплей, совместные стройки. Вход только по приглашению через Telegram.",
  keywords: [
    "minecraft",
    "сервер",
    "degrocraft",
    "приватный",
    "ванильный",
    "для друзей",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "DEGROCRAFT" }],
  openGraph: {
    title: "DEGROCRAFT — Приватный Minecraft сервер",
    description: "Уютный приватный сервер для друзей. Собираемся у костра!",
    type: "website",
    siteName: "DEGROCRAFT",
    locale: "ru_RU",
    images: [
      {
        url: "/og-image.png", // Создайте красивую картинку с надписью "Приватный сервер"
        width: 2048,
        height: 512,
        alt: "DEGROCRAFT Minecraft Server",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DEGROCRAFT — Приватный Minecraft сервер",
    description: "Уютный приватный сервер для друзей",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
