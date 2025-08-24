import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Navigation } from "@/components";
import { Metadata } from "next";

import "../globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title:
      locale === "ar"
        ? "آب تك - خدمات التطوير الرقمي"
        : "App Tek - Digital Development Services",
    description:
      locale === "ar"
        ? "خدمات تطوير الويب والتطبيقات والتصميم الرقمي"
        : "Web development, mobile apps, and digital design services",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Determine text direction based on locale
  const isRTL = ["ar"].includes(locale); // Add other RTL languages as needed
  const direction = isRTL ? "rtl" : "ltr";

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} dir={direction}>
      <head>
        <link rel="icon" href="/assets/svgs/logo.svg" type="image/svg+xml" />
      </head>
      <body className={direction}>
        {/* This is the main content of the page */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navigation />
          <main className={direction}>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
