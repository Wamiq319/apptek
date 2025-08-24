import { useTranslations } from "next-intl";
import { HeroSection } from "@/components/home";

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Services Section */}
      <section
        id="services"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t("services")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Web Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Modern, responsive websites built with the latest technologies
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Mobile Apps
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Native and cross-platform mobile applications
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Digital Marketing
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                SEO, social media, and content marketing strategies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            {t("contact")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Ready to start your project? Get in touch with us today.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            {t("get_quote")}
          </button>
        </div>
      </section>
    </div>
  );
}
