"use client";

import React, { useState } from "react";
import { Button, ServiceCard } from "@/components";
import { useTranslations } from "next-intl";
import {
  FaMobileAlt,
  FaGlobe,
  FaCogs,
  FaApple,
  FaCloud,
  FaShieldAlt,
  FaRobot,
  FaCube,
  FaTools,
  FaNetworkWired,
  FaChartLine,
  FaPencilRuler,
} from "react-icons/fa";

export const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const t = useTranslations("homePage.serviceSection");

  const coreServices = [
    {
      icon: FaCogs,
      title: t("core.enterprise.title"),
      description: t("core.enterprise.desc"),
      backgroundImage: "/images/services/application.jpg",
    },
    {
      icon: FaGlobe,
      title: t("core.website.title"),
      description: t("core.website.desc"),
      backgroundImage: "/images/services/website.jpg",
    },
    {
      icon: FaMobileAlt,
      title: t("core.mobile.title"),
      description: t("core.mobile.desc"),
      backgroundImage: "/images/services/mobile.jpg",
    },
    {
      icon: FaApple,
      title: t("core.ios.title"),
      description: t("core.ios.desc"),
      backgroundImage: "/images/services/ios.avif",
    },
    {
      icon: FaCloud,
      title: t("core.saas.title"),
      description: t("core.saas.desc"),
      backgroundImage: "/images/services/saas.png",
    },
    {
      icon: FaRobot,
      title: t("core.ai.title"),
      description: t("core.ai.desc"),
      backgroundImage: "/images/services/ai.jpg",
    },
  ];

  const extraServices = [
    {
      icon: FaChartLine,
      title: t("extra.dashboard.title"),
      description: t("extra.dashboard.desc"),
      backgroundImage: "/images/services/dashboard.jpg",
    },
    {
      icon: FaPencilRuler,
      title: t("extra.custom.title"),
      description: t("extra.custom.desc"),
      backgroundImage: "/images/services/custom-software.jpg",
    },
    {
      icon: FaShieldAlt,
      title: t("extra.security.title"),
      description: t("extra.security.desc"),
      backgroundImage: "/images/services/security.jpg",
    },
    {
      icon: FaCube,
      title: t("extra.blockchain.title"),
      description: t("extra.blockchain.desc"),
      backgroundImage: "/images/services/blockchain.jpg",
    },
    {
      icon: FaNetworkWired,
      title: t("extra.infrastructure.title"),
      description: t("extra.infrastructure.desc"),
      backgroundImage: "/images/services/infrastructure.jpg",
    },
    {
      icon: FaTools,
      title: t("extra.support.title"),
      description: t("extra.support.desc"),
      backgroundImage: "/images/services/support.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#10b3bc]">{t("title")}</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">{t("subtitle")}</p>

        {/* Core Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {coreServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Extra Services */}
        {showAll && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {extraServices.map((service, index) => (
              <ServiceCard key={`extra-${index}`} {...service} />
            ))}
          </div>
        )}

        {/* Toggle Button */}
        <Button rounded="full" onClick={() => setShowAll((prev) => !prev)}>
          {showAll ? t("showLess") : t("seeMore")}
        </Button>
      </div>
    </section>
  );
};
