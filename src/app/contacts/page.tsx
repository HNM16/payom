import type { Metadata } from "next";
import { ru } from "@/i18n/dictionaries/ru";
import { ContactsView } from "@/components/pages/ContactsView";

export const metadata: Metadata = {
  title: ru.pages.contacts.title,
  description: ru.pages.contacts.subtitle,
};

export default function ContactsPage() {
  return <ContactsView />;
}
