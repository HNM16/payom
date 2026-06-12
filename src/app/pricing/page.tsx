import type { Metadata } from "next";
import { ru } from "@/i18n/dictionaries/ru";
import { PricingView } from "@/components/pages/PricingView";

export const metadata: Metadata = {
  title: ru.pages.pricing.title,
  description: ru.pages.pricing.subtitle,
};

export default function PricingPage() {
  return <PricingView />;
}
