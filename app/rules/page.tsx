"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const rules = [
  {
    id: 1,
    title: "Никакого гриферства",
    description:
      "Не ломай и не порть чужие постройки. Гриф = бан без разговоров.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Читы запрещены",
    description:
      "Никаких X-Ray, килл-аур, флаев и прочего. Играем честно, без читов. Полный список можно найти на вики. (ссылка ниже)",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Уважай чужую территорию",
    description:
      "Многие места заняты. Перед постройкой уточни в чате — свободна ли территория. Здания без согласия владельца будут снесены.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Карты — нежелательны",
    description:
      "Карты мира не запрещены, но крайне нежелательны. Сохраняй полный ванильный опыт и атмосферу исследования.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Экспериментируй в рамках разумного",
    description:
      "Творить безумие можно и нужно, но в пределах правил и здравого смысла. Рамки разумного определяются администратором.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Нарушение = пермабан",
    description:
      "За несоблюдение правил — перманентный бан. Разбан возможен через разговор с админом, но шансы минимальны. Лучше не нарушай.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Пересаживай посевы",
    description:
      "Если взял урожай с фермы — обязательно посади обратно. Это важно для всех.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Пользуйся фермами ресурсов",
    description:
      "Общие фермы созданы для всех — используй их на здоровье. Но не забывай про правило выше.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
];

export default function RulesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0c1929] via-[#122338] to-[#0a1520] text-white overflow-hidden relative">
      {/* Snowflakes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-60 animate-snowfall"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
              animationDuration: `${8 + Math.random() * 12}s`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white">
                DEGROCRAFT
              </span>
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-white/60 hover:text-white font-medium transition-colors duration-300"
              >
                Главная
              </Link>
              <Link
                href="/rules"
                className="text-white font-medium transition-colors duration-300"
              >
                Правила
              </Link>
              <Link
                  href="https://wiki.degrocraft.ru"
                  className="text-white/60 hover:text-white font-medium transition-colors duration-300"
                target="_blank"
              >
                Наша вики
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Desktop badge */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/10">
              <svg
                className="w-4 h-4 text-white/80"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span className="text-sm font-medium text-white/80">
                Приватный
              </span>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/60 hover:text-white font-medium transition-colors duration-300"
                >
                  Главная
                </Link>
                <Link
                  href="/rules"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white font-medium transition-colors duration-300"
                >
                  Правила
                </Link>
                <Link
                  href="https://wiki.degrocraft.ru"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/60 hover:text-white font-medium transition-colors duration-300"
                  target="_blank"
                >
                  Наша вики
                </Link>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/10 w-fit">
                  <svg
                    className="w-4 h-4 text-white/80"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="text-sm font-medium text-white/80">
                    Приватный
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-full mb-4 sm:mb-6">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-white/80"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
              </svg>
              <span className="text-xs sm:text-sm font-medium text-white/80">
                Обязательно к прочтению
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-3 sm:mb-4">
              <span className="text-white">Правила</span>{" "}
              <span className="text-white/60">сервера</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/50 max-w-2xl mx-auto px-4">
              Простые правила для комфортной игры. Соблюдай их — и всё будет
              отлично.
            </p>
          </div>
        </div>
      </section>

      {/* Rules Grid */}
      <section className="pb-12 sm:pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rules.map((rule, index) => (
              <div
                key={rule.id}
                className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 animate-fadeInUp opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
                    {rule.icon}
                  </div>
                  <span className="text-3xl font-black text-white/20">
                    {String(rule.id).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">
                  {rule.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {rule.description}
                </p>
              </div>
            ))}
          </div>

          {/* Important Notice */}
          <div className="mt-12 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white shrink-0">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Важно знать
                </h3>
                <p className="text-white/50 leading-relaxed">
                  Нарушение правил может привести к предупреждению или бану.
                  Администрация оставляет за собой право принимать решения в
                  спорных ситуациях. Если есть вопросы — пиши в Telegram.
                  Незнание правил не освобождает от ответственности.
                </p>
                <a
                  href="https://wiki.degrocraft.ru"
                  target="_blank"
                  className="text-blue-500  "
                >
                  Дополнительную информацию можешь найти на вики
                </a>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://t.me/+E0uprMS766tlODFi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-800 hover:bg-white/90 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Написать в Telegram
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white hover:bg-white/20 border border-white/20 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Вернуться на главную
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <span className="text-lg sm:text-xl font-bold text-white">
                DEGROCRAFT
              </span>
            </div>
            <p className="text-white/40 text-xs sm:text-sm text-center">
              Приватный сервер для друзей. Не аффилирован с Mojang Studios.
            </p>
            <div className="flex items-center gap-2 text-white/40 text-xs sm:text-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span>
                by{" "}
                <a
                  href="https://t.me/only1stumpy"
                  className="hover:text-white transition-colors"
                >
                  only1stumpy
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
