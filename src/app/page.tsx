"use client";

import HeroSection from "@/components/sections/hero";
import FeaturesSection from "@/components/sections/features";
import ShowcaseSection from "@/components/sections/showcase";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ShowcaseSection />
    </main>
  );
}
