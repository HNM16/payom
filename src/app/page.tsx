import { Hero } from "@/components/home/Hero";
import { Operators } from "@/components/home/Operators";
import { Features } from "@/components/home/Features";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ApiSection } from "@/components/home/ApiSection";
import { Stats } from "@/components/home/Stats";
import { UseCases } from "@/components/home/UseCases";
import { Pricing } from "@/components/home/Pricing";
import { Integrations } from "@/components/home/Integrations";
import { Faq } from "@/components/home/Faq";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Operators />
      <Features />
      <HowItWorks />
      <ApiSection />
      <Stats />
      <UseCases />
      <Pricing />
      <Integrations />
      <Faq />
      <CtaBanner />
    </>
  );
}
