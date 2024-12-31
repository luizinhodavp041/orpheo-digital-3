"use client";

import HeroSection from "@/components/sections/hero";
import FeaturesSection from "@/components/sections/features";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
