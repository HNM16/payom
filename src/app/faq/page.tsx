import type { Metadata } from "next";
import { ru } from "@/i18n/dictionaries/ru";
import { FaqView } from "@/components/pages/FaqView";

export const metadata: Metadata = {
  title: ru.pages.faq.title,
  description: ru.pages.faq.subtitle,
};

export default function FaqPage() {
  return <FaqView />;
}
