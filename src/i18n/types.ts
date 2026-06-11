export const LOCALES = ["ru", "tj", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "ru";

export const LOCALE_NAMES: Record<Locale, { label: string; short: string }> = {
  ru: { label: "Русский", short: "РУ" },
  tj: { label: "Тоҷикӣ", short: "ТҶ" },
  en: { label: "English", short: "EN" },
};

interface TitledItem {
  title: string;
  desc: string;
}

interface FaqItem {
  q: string;
  a: string;
}

interface Plan {
  name: string;
  price: string;
  unit: string;
  desc: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface Dictionary {
  meta: { title: string; description: string };
  nav: {
    features: string;
    how: string;
    api: string;
    pricing: string;
    contacts: string;
    login: string;
    register: string;
    menu: string;
  };
  hero: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    points: string[];
  };
  operators: { title: string };
  features: { title: string; subtitle: string; items: TitledItem[] };
  how: { title: string; subtitle: string; steps: TitledItem[] };
  api: {
    title: string;
    subtitle: string;
    desc: string;
    cta: string;
    docs: string;
    note: string;
  };
  stats: { title: string; items: { label: string }[] };
  useCases: { title: string; subtitle: string; items: TitledItem[] };
  pricing: {
    title: string;
    subtitle: string;
    perMonth: string;
    plans: Plan[];
    note: string;
  };
  integrations: { title: string; subtitle: string; items: TitledItem[] };
  faq: { title: string; subtitle: string; items: FaqItem[]; more: string };
  cta: { title: string; subtitle: string; button: string; secondary: string };
  footer: {
    tagline: string;
    columns: { title: string; links: { label: string; href: string }[] }[];
    rights: string;
    madeIn: string;
  };
  auth: {
    login: {
      title: string;
      subtitle: string;
      email: string;
      password: string;
      submit: string;
      forgot: string;
      noAccount: string;
      registerLink: string;
      remember: string;
    };
    register: {
      title: string;
      subtitle: string;
      name: string;
      company: string;
      email: string;
      phone: string;
      password: string;
      submit: string;
      hasAccount: string;
      loginLink: string;
      agree: string;
      success: string;
      successDesc: string;
    };
  };
  apiPage: {
    title: string;
    subtitle: string;
    authTitle: string;
    authDesc: string;
    sendTitle: string;
    sendDesc: string;
    paramsTitle: string;
    params: { name: string; type: string; desc: string }[];
    responseTitle: string;
    responseDesc: string;
  };
  notFound: { title: string; desc: string; home: string };
  common: { theme: string; language: string; skip: string };
}
