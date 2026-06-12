import type { Metadata } from "next";
import { ru } from "@/i18n/dictionaries/ru";
import { IntegrationsView } from "@/components/pages/IntegrationsView";

export const metadata: Metadata = {
  title: ru.pages.integrations.title,
  description: ru.pages.integrations.subtitle,
};

export default function IntegrationsPage() {
  return <IntegrationsView />;
}
