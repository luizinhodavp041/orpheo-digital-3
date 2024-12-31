"use client";

import Header from "@/components/layout/header";
import HeroSection from "@/components/sections/hero";
import FeaturesSection from "@/components/sections/features";
import ShowcaseSection from "@/components/sections/showcase";
import TestimonialsSection from "@/components/sections/testimonials";
import CTASection from "@/components/sections/cta";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ShowcaseSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
