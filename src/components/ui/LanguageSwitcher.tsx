"use client";

import {
  useRouter as useIntlRouter,
  usePathname as useIntlPathname,
} from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const LanguageSwitcher = () => {
  const pathname = useIntlPathname();
  const router = useIntlRouter();
  const rawPathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState("en");

  useEffect(() => {
    const locale = (rawPathname.split("/")[1] || "en") as "en" | "ar";
    setCurrentLocale(locale);
  }, [rawPathname]);

  const mobileButtonLabel = currentLocale === "en" ? "العربية" : "Eng";
  const desktopButtonLabel =
    currentLocale === "en" ? "العربية - KSA 🇸🇦" : "Eng - Global 🌍";

  const handleToggle = () => {
    const newLocale = currentLocale === "en" ? "ar" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Button
      variant="outline"
      rounded="full"
      size="medium"
      onClick={handleToggle}
      className="font-semibold"
    >
      <span className="hidden md:inline">{desktopButtonLabel}</span>
      <span className="md:hidden">{mobileButtonLabel}</span>
    </Button>
  );
};
