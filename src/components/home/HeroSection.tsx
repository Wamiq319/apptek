"use client";

import { useTranslations } from "next-intl";
import {
  Lock,
  Smartphone,
  Monitor,
  Globe,
  Code,
  Brain,
  Play,
  CreditCard,
  Shield,
  Zap,
  Database,
  Cloud,
  Wifi,
  Settings,
  BarChart3,
  Users,
} from "lucide-react";

export const HeroSection = () => {
  const floatingIcons = [
    {
      icon: Cloud,
      size: "w-8 h-8 sm:w-11 sm:h-11",
      innerSize: "w-5 h-5 sm:w-6 sm:h-6",
      position: "absolute top-10 left-10",
      gradient: "from-sky-400 to-sky-600",
      animation: "animate-bounce",
      delay: "0.6s",
    },
    {
      icon: Wifi,
      size: "w-7 h-7 sm:w-10 sm:h-10",
      innerSize: "w-4 h-4 sm:w-5 sm:h-5",
      position: "absolute top-1/3 right-12",
      gradient: "from-cyan-400 to-cyan-600",
      animation: "animate-pulse",
      delay: "1.4s",
    },
    {
      icon: Settings,
      size: "w-8 h-8 sm:w-12 sm:h-12",
      innerSize: "w-5 h-5 sm:w-7 sm:h-7",
      position: "absolute bottom-8 left-1/4",
      gradient: "from-gray-400 to-gray-600",
      animation: "animate-spin",
      delay: "0s",
    },
    {
      icon: BarChart3,
      size: "w-8 h-8 sm:w-11 sm:h-11",
      innerSize: "w-5 h-5 sm:w-6 sm:h-6",
      position: "absolute bottom-12 right-1/4",
      gradient: "from-emerald-400 to-emerald-600",
      animation: "animate-bounce",
      delay: "1s",
    },

    {
      icon: Globe,
      size: "w-10 h-10 sm:w-14 sm:h-14",
      innerSize: "w-6 h-6 sm:w-8 sm:h-8",
      position: "absolute -top-4 left-4",
      gradient: "from-blue-400 to-blue-600",
      animation: "animate-bounce",
      delay: "0s",
    },
    {
      icon: Brain,
      size: "w-8 h-8 sm:w-12 sm:h-12",
      innerSize: "w-5 h-5 sm:w-7 sm:h-7",
      position: "absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2",
      gradient: "from-purple-400 to-purple-600",
      animation: "animate-pulse",
      delay: "0s",
    },
    {
      icon: Smartphone,
      size: "w-8 h-8 sm:w-10 sm:h-10",
      innerSize: "w-5 h-5 sm:w-6 sm:h-6",
      position: "absolute -top-2 right-4",
      gradient: "from-green-400 to-green-600",
      animation: "animate-bounce",
      delay: "0.5s",
    },
    {
      icon: Code,
      size: "w-8 h-8 sm:w-12 sm:h-12",
      innerSize: "w-5 h-5 sm:w-7 sm:h-7",
      position: "absolute -bottom-4 left-6",
      gradient: "from-orange-400 to-orange-600",
      animation: "animate-bounce",
      delay: "1.5s",
    },
    {
      icon: Monitor,
      size: "w-8 h-8 sm:w-10 sm:h-10",
      innerSize: "w-5 h-5 sm:w-6 sm:h-6",
      position: "absolute -bottom-2 right-6 sm:right-8",
      gradient: "from-indigo-400 to-indigo-600",
      animation: "animate-pulse",
      delay: "2s",
    },
    {
      icon: CreditCard,
      size: "w-8 h-8 sm:w-11 sm:h-11",
      innerSize: "w-5 h-5 sm:w-6 sm:h-6",
      position: "absolute top-1/2 -translate-y-1/2 -left-6 sm:-left-8",
      gradient: "from-pink-400 to-pink-600",
      animation: "animate-bounce",
      delay: "1s",
    },
    {
      icon: Shield,
      size: "w-8 h-8 sm:w-11 sm:h-11",
      innerSize: "w-5 h-5 sm:w-6 sm:h-6",
      position: "absolute top-1/2 -translate-y-1/2 -right-6 sm:-right-8",
      gradient: "from-teal-400 to-teal-600",
      animation: "animate-bounce",
      delay: "1.5s",
    },
    {
      icon: Zap,
      size: "w-7 h-7 sm:w-10 sm:h-10",
      innerSize: "w-4 h-4 sm:w-5 sm:h-5",
      position: "absolute top-1/4 left-2",
      gradient: "from-yellow-400 to-yellow-600",
      animation: "animate-pulse",
      delay: "0.8s",
    },
    {
      icon: Database,
      size: "w-7 h-7 sm:w-10 sm:h-10",
      innerSize: "w-4 h-4 sm:w-5 sm:h-5",
      position: "absolute bottom-1/4 right-2",
      gradient: "from-red-400 to-red-600",
      animation: "animate-pulse",
      delay: "1.2s",
    },
  ];
  const t = useTranslations("homePage.hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero_bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-[#000000e0]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#10b3bc] mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
              <span className="text-secondary-blue">{t("title")}</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 leading-relaxed drop-shadow-lg">
              {(() => {
                const subtitle = t("subtitle");
                const parts = subtitle.split(" — ");
                const firstPart = parts[0];
                const secondPart = parts[1] || "";

                const highlightTerms = (text: string) => {
                  return text
                    .replace(
                      /(application)/gi,
                      '<span class="text-secondary-blue font-bold">$1</span>'
                    )
                    .replace(
                      /(website)/gi,
                      '<span class="text-secondary-blue font-bold">$1</span>'
                    );
                };

                return (
                  <>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: highlightTerms(firstPart),
                      }}
                    />
                    {parts.length > 1 && " — "}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: highlightTerms(secondPart),
                      }}
                    />
                  </>
                );
              })()}
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/20 shadow-xl">
                <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-blue drop-shadow-lg" />
                <span className="text-blue-100 text-sm sm:text-lg font-medium drop-shadow-lg">
                  {t("secure")}
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/20 shadow-xl">
                <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-blue drop-shadow-lg" />
                <span className="text-blue-100 text-sm sm:text-lg font-medium drop-shadow-lg">
                  Applications
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/20 shadow-xl">
                <Monitor className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-blue drop-shadow-lg" />
                <span className="text-blue-100 text-sm sm:text-lg font-medium drop-shadow-lg">
                  Websites
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/20 shadow-xl">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-blue drop-shadow-lg" />
                <span className="text-blue-100 text-sm sm:text-lg font-medium drop-shadow-lg">
                  {t("trusted")}
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Desktop & Mobile UI Frames */}
          <div className="flex justify-center lg:justify-end animate-scale-in relative order-1 lg:order-2">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              {/* Floating Graphics Elements Container */}
              <div className="absolute inset-0 pointer-events-none">
                {floatingIcons.map(
                  (
                    {
                      icon: Icon,
                      size,
                      innerSize,
                      position,
                      gradient,
                      animation,
                      delay,
                    },
                    i
                  ) => (
                    <div
                      key={i}
                      className={`${position} ${size} bg-white/95 rounded-2xl shadow-xl flex items-center justify-center backdrop-blur-sm z-30 ${animation}`}
                      style={{ animationDelay: delay }}
                    >
                      <div
                        className={`${innerSize} bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center`}
                      >
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Desktop and Mobile Frames Container */}
              <div className="relative z-20 flex items-end gap-2 sm:gap-3 justify-center">
                {/* Desktop Frame */}
                <div className="w-full max-w-xs sm:max-w-sm h-56 sm:h-64 lg:h-72 bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-2 sm:p-3">
                  <div className="w-full h-full bg-gray-50 rounded-xl sm:rounded-2xl overflow-hidden relative border border-gray-200 flex flex-col">
                    {/* Browser Header */}
                    <div className="bg-gray-100 h-8 sm:h-10 flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 border-b border-gray-200">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                      <div className="ml-2 sm:ml-4 flex-1 h-5 sm:h-6 bg-white rounded-lg text-xs text-gray-600 flex items-center px-2 sm:px-3 border border-gray-200">
                        www.yourbusiness.sa
                      </div>
                    </div>

                    {/* Desktop Content */}
                    <div className="flex-1 bg-gradient-to-br from-white to-gray-50 flex flex-col items-center justify-center text-center px-3 sm:px-4">
                      <h3 className="text-gray-700 text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                        {t("desktop_view")}
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                        {t("desktop_text")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile Frame - White UI */}
                <div className="w-24 sm:w-28 lg:w-32 h-40 sm:h-48 lg:h-56 bg-white rounded-2xl sm:rounded-3xl shadow-xl p-1 border border-gray-200 relative">
                  <div className="w-full h-full bg-gray-50 rounded-xl sm:rounded-2xl overflow-hidden relative">
                    {/* Mobile Header */}
                    <div className="bg-gray-100 h-5 sm:h-6 flex items-center justify-center border-b border-gray-200">
                      <div className="w-6 sm:w-8 h-1 bg-gray-400 rounded-full"></div>
                    </div>

                    {/* Mobile Content */}
                    <div className="flex-1 bg-gradient-to-br from-white to-gray-50 flex flex-col items-center justify-center relative p-2">
                      {/* Mobile Play Button */}
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-secondary-blue rounded-full flex items-center justify-center backdrop-blur-sm mb-2 shadow-md">
                        <Play
                          className="w-3 h-3 sm:w-4 sm:h-4 text-white ml-0.5"
                          fill="white"
                        />
                      </div>

                      {/* Mobile UI Indicator */}
                      <div className="flex items-center space-x-1 mb-2">
                        <Smartphone className="w-2 h-2 sm:w-3 sm:h-3 text-gray-600" />
                        <span className="text-gray-600 text-xs">Mobile</span>
                      </div>

                      {/* Mobile UI Elements */}
                      <div className="w-full space-y-1">
                        <div className="h-1 bg-secondary-blue/30 rounded w-full"></div>
                        <div className="h-1 bg-gray-300 rounded w-3/4 mx-auto"></div>
                        <div className="h-6 sm:h-8 bg-gray-200 rounded-lg border border-gray-300"></div>
                        <div className="flex space-x-1">
                          <div className="flex-1 h-2 sm:h-3 bg-secondary-blue/30 rounded"></div>
                          <div className="flex-1 h-2 sm:h-3 bg-gray-300 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
