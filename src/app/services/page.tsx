import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServicesExplorer } from "@/components/services/ServicesExplorer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Browse 1,200+ billers and services — mobile top-ups, utilities, internet, finance, government, and more. Pay any of them in seconds with Veltra.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Pay any bill, any biller"
        description="Search and filter across every category. If you can pay it, chances are Veltra already supports it."
      />
      <Container className="py-16 sm:py-20">
        <ServicesExplorer />
      </Container>
    </>
  );
}
