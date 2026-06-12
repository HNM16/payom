import type { Metadata } from "next";
import { ru } from "@/i18n/dictionaries/ru";
import { LegalView } from "@/components/pages/LegalView";

export const metadata: Metadata = {
  title: ru.pages.legal.offer.title,
};

export default function OfferPage() {
  return <LegalView doc="offer" />;
}
