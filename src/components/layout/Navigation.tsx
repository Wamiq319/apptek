"use client";

import { useState, useEffect } from "react";
import { Button, LanguageSwitcher } from "@/components";

import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Menu, X, Smartphone, Users, HelpCircle } from "lucide-react";

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
    { label: t("services"), section: "services", icon: Smartphone },
    { label: t("about"), section: "about", icon: Users },
    { label: t("contact"), section: "contact", icon: HelpCircle },
  ];

  return (
    <nav
      dir={currentLocale === "ar" ? "rtl" : "ltr"}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 shadow-lg backdrop-blur-lg border-b border-gray-200"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Smartphone className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">{t("brand")}</span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.section)}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition"
            >
              {item.label}
            </button>
          ))}

          <div className="flex items-center space-x-3">
            <Button
              variant="primary"
              rounded="full"
              onClick={() => scrollToSection("contact")}
            >
              {t("get_quote")}
            </Button>

            {/* Language switcher */}
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="outline"
            size="medium"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200">
          <div className="px-2 pt-2 pb-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.section)}
                className="flex items-center gap-3 px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-md w-full text-left"
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}

            <div className="pt-4 space-y-2">
              <Button
                variant="primary"
                size="medium"
                rounded="full"
                onClick={() => scrollToSection("contact")}
                className="w-full"
              >
                {t("get_quote")}
              </Button>

              <div className="w-full flex justify-center">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
