import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SERVICES } from "@/lib/data";

export function PopularServices() {
  const popular = SERVICES.filter((s) => s.popular).slice(0, 8);

  return (
    <Section>
      <SectionHeading
        eyebrow="Popular services"
        title="Everything you pay for, in one place"
        description="From your phone bill to streaming subscriptions, settle it all without juggling apps or logins."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {popular.map((service, i) => (
          <Reveal key={service.slug} delay={i * 0.05}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button href="/services" variant="outline">
          View all services
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </Section>
  );
}
