import type { Metadata } from "next";
import { ru } from "@/i18n/dictionaries/ru";
import { AboutView } from "@/components/pages/AboutView";

export const metadata: Metadata = {
  title: ru.pages.about.title,
  description: ru.pages.about.subtitle,
};

export default function AboutPage() {
  return <AboutView />;
}
