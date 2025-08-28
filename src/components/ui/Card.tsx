"use client";

import React from "react";
import { IconType } from "react-icons";

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
  backgroundImage: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  backgroundImage,
}) => {
  return (
    <div className="group relative h-72 overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Gradient Overlay (bottom → top) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/30 transition-colors duration-500" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-5 text-white">
        {/* Icon */}
        <div className="flex justify-start">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-[#10b3bc]/30">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Title & Description */}
        <div className="mt-auto">
          {/* Title (always visible) */}
          <h3 className="text-2xl font-bold text-[#10b3bc] mb-2 drop-shadow-md">
            {title}
          </h3>

          {/* Description → always visible on mobile, fades in on hover for desktop */}
          <p className="text-sm text-gray-200 leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
