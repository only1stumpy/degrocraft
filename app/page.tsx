"use client";

import Scene from "@/components/Scene";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: "heart",
      title: "Дружное сообщество",
      description: "Маленькая компания друзей, где каждый знает каждого",
    },
    {
      icon: "pickaxe",
      title: "Ванильный геймплей",
      description: "Чистый Minecraft без лишних плагинов и модов",
    },
    {
      icon: "home",
      title: "Совместные стройки",
      description: "Создаём невероятные проекты вместе",
    },
    {
      icon: "star",
      title: "Атмосфера кайфа",
      description: "Заходи отдохнуть после тяжёлого дня",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0c1929] via-[#122338] to-[#0a1520] text-white overflow-hidden relative">
      {/* Snowflakes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
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
            <div className="flex items-center gap-3">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white">
                DEGROCRAFT
              </span>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#about"
                className="text-white/60 hover:text-white font-medium transition-colors duration-300"
              >
                О сервере
              </a>
              <a
                href="#join"
                className="text-white/60 hover:text-white font-medium transition-colors duration-300"
              >
                Как попасть
              </a>
              <a
                href="/rules"
                className="text-white/60 hover:text-white font-medium transition-colors duration-300"
              >
                Правила
              </a>
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
                <a
                  href="#about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/60 hover:text-white font-medium transition-colors duration-300"
                >
                  О сервере
                </a>
                <a
                  href="#join"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/60 hover:text-white font-medium transition-colors duration-300"
                >
                  Как попасть
                </a>
                <a
                  href="/rules"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/60 hover:text-white font-medium transition-colors duration-300"
                >
                  Правила
                </a>
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 sm:pt-20 md:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left content */}
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-white/80">
                    Только по приглашению
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
                  <span className="text-white">DEGRO</span>
                  <span className="text-white/60">CRAFT</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-lg leading-relaxed">
                  Уютный приватный сервер для своих.
                  <br />
                  Тут любят Лизу Барашик.
                </p>
              </div>

              {/* Telegram Invite */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#join"
                  className="group relative flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-4 bg-white text-slate-800 hover:bg-white/90 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  <span>Получить приглашение</span>
                </a>
                <a
                  href="#about"
                  className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300"
                >
                  Узнать больше
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-6 pt-4">
                <div className="flex flex-col items-center p-2 sm:p-3 md:p-4 bg-white/5 rounded-lg sm:rounded-xl border border-white/10">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/80 mb-0.5 sm:mb-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                  <span className="text-sm sm:text-base md:text-lg font-bold text-white">Ламповый</span>
                  <span className="text-xs text-white/50">Сервер</span>
                </div>
                <div className="flex flex-col items-center p-2 sm:p-3 md:p-4 bg-white/5 rounded-lg sm:rounded-xl border border-white/10">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/80 mb-0.5 sm:mb-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.79 10.62L3.5 21.9 2.1 20.5l11.28-11.29c-.4-.64-.6-1.38-.6-2.12C12.78 4.51 14.87 2.42 17.45 2.42c.69 0 1.36.15 1.97.42l-3.8 3.8 1.8 1.8 3.8-3.8c.27.61.42 1.28.42 1.97 0 2.58-2.09 4.67-4.67 4.67-.74 0-1.48-.2-2.12-.6z" />
                  </svg>
                  <span className="text-sm sm:text-base md:text-lg font-bold text-white">1.21.11</span>
                  <span className="text-xs text-white/50">Версия</span>
                </div>
                <div className="flex flex-col items-center p-2 sm:p-3 md:p-4 bg-white/5 rounded-lg sm:rounded-xl border border-white/10">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/80 mb-0.5 sm:mb-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                  <span className="text-sm sm:text-base md:text-lg font-bold text-white">24/7</span>
                  <span className="text-xs text-white/50">Онлайн</span>
                </div>
              </div>
            </div>

            {/* Right content - 3D Campfire */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative aspect-square max-w-sm sm:max-w-md lg:max-w-xl mx-auto">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,200,150,0.15)_0%,transparent_60%)] rounded-full blur-2xl" />
                <div className="relative z-10 w-full h-full">
                  <Scene />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/40 text-sm">Листай вниз</span>
            <svg
              className="w-6 h-6 text-white/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-12 sm:py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white">
              Что такое DEGROCRAFT?
            </h2>
            <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Небольшое сообщество друзей, которые любят Minecraft и ценят
              уютную атмосферу
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 animate-fadeInUp opacity-0"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 mb-4 bg-white/10 rounded-xl flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
                  {feature.icon === "heart" && (
                    <svg
                      className="w-7 h-7"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  )}
                  {feature.icon === "pickaxe" && (
                    <svg
                      className="w-7 h-7"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M14.79 10.62L3.5 21.9 2.1 20.5l11.28-11.29c-.4-.64-.6-1.38-.6-2.12C12.78 4.51 14.87 2.42 17.45 2.42c.69 0 1.36.15 1.97.42l-3.8 3.8 1.8 1.8 3.8-3.8c.27.61.42 1.28.42 1.97 0 2.58-2.09 4.67-4.67 4.67-.74 0-1.48-.2-2.12-.6z" />
                    </svg>
                  )}
                  {feature.icon === "home" && (
                    <svg
                      className="w-7 h-7"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </svg>
                  )}
                  {feature.icon === "star" && (
                    <svg
                      className="w-7 h-7"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/50 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section id="join" className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white">
              Как присоединиться?
            </h2>
            <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto px-4">
              DEGROCRAFT — приватный сервер. Вход только по приглашению через
              Telegram
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Прочитай правила",
                description: "Ознакомься с правилами сервера",
                icon: (
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Напиши в Telegram",
                description: "Свяжись с нами и расскажи о себе",
                icon: (
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Присоединяйся",
                description: "Заходи и чувствуй себя как дома!",
                icon: (
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-center transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <span className="block text-5xl font-extrabold text-white/20 mt-4 mb-4 leading-none">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <a
              href="/rules"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-800 hover:bg-white/90 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
              </svg>
              Прочитать правила
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <span className="text-lg sm:text-xl font-bold text-white">DEGROCRAFT</span>
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
