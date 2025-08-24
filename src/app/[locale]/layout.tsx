import "../../app/globals.css";
import { IntlProvider } from "next-intl";

export const metadata = {
  title: "App Tek",
  description: "Web services for customers in Saudi Arabia",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  // Load messages for the current locale dynamically
  const messages = (await import(`@/locales/${params.locale}.json`)).default;

  // Determine text direction based on locale
  const dir = params.locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={params.locale} dir={dir}>
      <body>
        <IntlProvider locale={params.locale} messages={messages}>
          {children}
        </IntlProvider>
      </body>
    </html>
  );
}
