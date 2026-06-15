import type { Metadata } from "next";
import { ru } from "@/i18n/dictionaries/ru";
import { ApiDocs } from "@/components/api/ApiDocs";

export const metadata: Metadata = {
  title: ru.apiPage.title,
  description: ru.apiPage.subtitle,
};

export default function ApiPage() {
  return <ApiDocs />;
}
