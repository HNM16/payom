import { Hero } from "@/components/home/Hero";
import { PopularServices } from "@/components/home/PopularServices";
import { Stats } from "@/components/home/Stats";
import { Features } from "@/components/home/Features";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PopularServices />
      <Stats />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
