"use client";

import HeroSection from "@/components/sections/hero";
import FeaturesSection from "@/components/sections/features";
import ShowcaseSection from "@/components/sections/showcase";
import CTASection from "@/components/sections/cta";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ShowcaseSection />
      <CTASection />
      <Footer />
    </main>
  );
}
