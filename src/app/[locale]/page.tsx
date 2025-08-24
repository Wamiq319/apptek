import { useTranslations } from "next-intl";
import { HeroSection } from "@/components/home";

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen">
      <HeroSection />
    </div>
  );
}
