"use client";

import { Button } from "@/components/ui/Button";
import {
  Play,
  Monitor,
  Smartphone,
  Users,
  Award,
  Clock,
  Globe,
  Code,
  Brain,
  MessageSquare,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/67484f50c81917747d2e5bcd_KSA%20hero%20banner%20-p-500.webp')",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Digital Services to{" "}
              <span className="text-primary">
                Help Your Business Grow and Work Smarter
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              We help Saudi businesses get more customers, save time, and build
              a stronger online presence — with modern websites, digital
              marketing, and smart tools.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="large">
                GET QUOTE
              </Button>
              <Button
                variant="green"
                size="large"
                className="flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center lg:justify-end animate-scale-in relative">
            <div className="relative w-full max-w-lg">
              {/* Floating Icons */}
              <div className="absolute -top-8 left-8 w-16 h-16 bg-white/95 rounded-3xl shadow-xl flex items-center justify-center animate-bounce backdrop-blur-sm z-30">
                <div className="w-8 h-8 bg-gradient-to-br from-secondary-blue to-blue-600 rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white/95 rounded-2xl shadow-xl flex items-center justify-center animate-pulse backdrop-blur-sm z-30">
                <div className="w-7 h-7 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <Brain className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="absolute -top-6 right-8 w-12 h-12 bg-white/95 rounded-2xl shadow-xl flex items-center justify-center animate-bounce backdrop-blur-sm z-30">
                <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
