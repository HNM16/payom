import type { Metadata } from "next";
import { ru } from "@/i18n/dictionaries/ru";
import { BlogView } from "@/components/pages/BlogView";

export const metadata: Metadata = {
  title: ru.pages.blog.title,
  description: ru.pages.blog.subtitle,
};

export default function BlogPage() {
  return <BlogView />;
}
