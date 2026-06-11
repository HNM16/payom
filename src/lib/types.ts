import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  name: string;
  description: string;
  category: ServiceCategory;
  icon: LucideIcon;
  popular?: boolean;
}

export type ServiceCategory =
  | "Mobile"
  | "Utilities"
  | "Internet"
  | "Finance"
  | "Government"
  | "Entertainment"
  | "Transport"
  | "Education";

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Step {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  initials: string;
  rating: number;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Transaction {
  id: string;
  merchant: string;
  category: ServiceCategory;
  amount: number;
  status: "Completed" | "Pending" | "Failed";
  date: string;
}
