import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Правила сервера | DEGROCRAFT — Приватный Minecraft сервер",
  description:
    "Правила приватного Minecraft сервера DEGROCRAFT. Уважение, честная игра, никакого гриферства. Читай перед тем, как присоединиться.",
  openGraph: {
    title: "Правила сервера | DEGROCRAFT",
    description:
      "Правила приватного Minecraft сервера DEGROCRAFT. Уважение, честная игра, никакого гриферства.",
    type: "website",
    siteName: "DEGROCRAFT",
    locale: "ru_RU",
  },
};

export default function RulesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
