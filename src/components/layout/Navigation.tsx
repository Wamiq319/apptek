"use client";

import { useState, useEffect } from "react";
import { Button, LanguageSwitcher } from "@/components";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Menu, X, Home } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const currentLocale = (pathname.split("/")[1] || "en") as "en" | "ar";
  const t = useTranslations("navbar");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const menuItems = [
    { label: t("home"), section: "home" },
    { label: t("services"), section: "services" },
    { label: t("about"), section: "about" },
    { label: t("contact"), section: "contact" },
  ];

  return (
    <nav
      dir={currentLocale === "ar" ? "rtl" : "ltr"}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 shadow-lg backdrop-blur-md border-b border-gray-200"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 relative">
        {/* Mobile Row */}
        <div className="flex items-center justify-between md:hidden h-full">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="ml-2 text-lg font-bold text-gray-900">
              {t("brand")}
            </span>
          </div>

          {/* Mobile: Language Switcher + Menu Button */}
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            <Button
              variant="outline"
              size="medium"
              rounded="full"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Desktop Row */}
        <div className="hidden md:flex items-center justify-between h-full">
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              {t("brand")}
            </span>
          </div>

          {/* Center: Menu */}
          <div className="flex space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.section)}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right: CTA + Language */}
          <div className="flex items-center space-x-3">
            <Button
              variant="primary"
              rounded="full"
              onClick={() => scrollToSection("contact")}
            >
              {t("contact_cta")}
            </Button>

            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200">
          <div className="px-2 pt-2 pb-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.section)}
                className="px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-md w-full text-left"
              >
                {item.label}
              </button>
            ))}

            <div className="pt-4">
              <Button
                variant="primary"
                size="medium"
                rounded="full"
                onClick={() => scrollToSection("contact")}
                className="w-full"
              >
                {t("contact_cta")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
