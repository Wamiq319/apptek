import { useTranslations } from "next-intl";
import { HeroSection, ServicesSection } from "@/components";

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
    </div>
  );
}
