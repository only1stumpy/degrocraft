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
  metadataBase: new URL("https://degrocraft.ru"),
  title: {
    default: "DEGROCRAFT — Приватный Minecraft сервер | Ванильное выживание",
    template: "%s | DEGROCRAFT",
  },
  description:
    "Уютный приватный Minecraft сервер для друзей. Ламповое сообщество, ванильный геймплей 1.21.11, совместные стройки. Вход только по приглашению через Telegram.",
  keywords: [
    "minecraft сервер",
    "приватный сервер minecraft",
    "degrocraft",
    "ванильный minecraft",
    "minecraft для друзей",
    "minecraft 1.21",
    "майнкрафт сервер",
    "приватный майнкрафт",
    "survival minecraft",
    "minecraft россия",
  ],
  icons: {
    icon: '/favicon.ico', // положи файл в папку public
    apple: '/apple-touch-icon.png',
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
  authors: [{ name: "DEGROCRAFT Team" }],
  creator: "DEGROCRAFT",
  publisher: "DEGROCRAFT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://degrocraft.ru",
  },
  openGraph: {
    title: "DEGROCRAFT — Приватный Minecraft сервер",
    description:
      "Уютный приватный сервер для друзей. Ламповое сообщество, ванильный геймплей, совместные стройки.",
    type: "website",
    siteName: "DEGROCRAFT",
    locale: "ru_RU",
    url: "https://degrocraft.ru",
    images: [
      {
        url: "/og-image.png",
        width: 2048,
        height: 512,
        alt: "DEGROCRAFT — Приватный Minecraft сервер для друзей",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DEGROCRAFT — Приватный Minecraft сервер",
    description: "Уютный приватный сервер для друзей. Ванильный геймплей 1.21",
    images: ["/og-image.png"],
  },
  verification: {
    // Добавь свои ключи верификации после регистрации в консолях
    // google: "ваш-google-site-verification-код",
    yandex: "9355eade0b127eec",
  },
  category: "games",
};

// JSON-LD структурированные данные
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DEGROCRAFT",
  description: "Приватный Minecraft сервер для друзей",
  url: "https://degrocraft.ru",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://degrocraft.ru/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const gameServerJsonLd = {
  "@context": "https://schema.org",
  "@type": "GameServer",
  name: "DEGROCRAFT Minecraft Server",
  description:
    "Уютный приватный Minecraft сервер для друзей. Ванильный геймплей, версия 1.21.11",
  url: "https://degrocraft.ru",
  game: {
    "@type": "VideoGame",
    name: "Minecraft",
    gamePlatform: ["PC", "Java Edition"],
  },
  serverStatus: "Online",
  playersOnline: "Приватный",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(gameServerJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
