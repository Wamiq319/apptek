"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  useRouter as useIntlRouter,
  usePathname as useIntlPathname,
} from "@/i18n/navigation";

export const LanguageSwitcher = () => {
  const pathname = useIntlPathname();
  const router = useIntlRouter();
  const currentLocale = (pathname.split("/")[1] || "en") as "en" | "ar";
  const [open, setOpen] = useState(false);

  const options = [
    { code: "en" as const, label: "English - Global 🌍" },
    { code: "ar" as const, label: "العربية - KSA 🇸🇦" },
  ];

  // Show the language the user will switch TO
  const buttonLabel =
    currentLocale === "en" ? "العربية - KSA 🇸🇦" : "English - Global 🌍";

  return (
    <div className="relative inline-block text-left">
      <Button
        variant="outline"
        size="small"
        rounded="full"
        onClick={() => setOpen((s) => !s)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {buttonLabel}
      </Button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 mt-2 w-52 bg-white border rounded-lg shadow-lg z-50 overflow-hidden"
        >
          {options
            .filter((o) => o.code !== currentLocale)
            .map((o) => (
              <button
                role="option"
                key={o.code}
                onClick={() => {
                  router.replace(pathname, { locale: o.code });
                  setOpen(false);
                }}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
              >
                {o.label}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};
