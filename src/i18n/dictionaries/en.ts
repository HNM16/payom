import type { Dictionary } from "../types";

export const en: Dictionary = {
  meta: {
    title: "Payom.tj — SMS messaging to every operator in Tajikistan",
    description:
      "SMS gateway and SMS API for business. Bulk campaigns, one-time codes, and notifications to every mobile operator in Tajikistan — thousands of messages per second.",
  },
  nav: {
    features: "Features",
    how: "How it works",
    api: "API",
    pricing: "Pricing",
    contacts: "Contacts",
    login: "Log in",
    register: "Sign up",
    menu: "Menu",
  },
  hero: {
    badge: "Delivery to every operator in Tajikistan",
    title: "SMS messaging for your",
    highlight: "business",
    subtitle:
      "Send bulk campaigns, one-time codes, and notifications through a reliable SMS gateway. Thousands of messages per second and a clean personal dashboard.",
    ctaPrimary: "Start for free",
    ctaSecondary: "API documentation",
    points: ["No monthly fees", "Set up in 5 minutes", "24/7 support"],
  },
  operators: {
    title: "We deliver messages to every mobile network in Tajikistan",
  },
  features: {
    title: "Everything you need for SMS campaigns",
    subtitle: "One service for marketing, authentication, and customer notifications.",
    items: [
      {
        title: "Bulk campaigns",
        desc: "Send messages to thousands of contacts in one click and manage campaigns from your dashboard.",
      },
      {
        title: "SMS API",
        desc: "A simple REST API to integrate messaging into your website, app, or CRM in minutes.",
      },
      {
        title: "One-time codes",
        desc: "Verify numbers and transactions with instantly delivered OTP codes.",
      },
      {
        title: "Contacts & groups",
        desc: "Create groups, add clients, and segment your audience for precise campaigns.",
      },
      {
        title: "Reports & analytics",
        desc: "Track the status of every message, delivery, and cost in real time.",
      },
      {
        title: "High throughput",
        desc: "Capacity of thousands of SMS per second ensures delivery with no delays.",
      },
    ],
  },
  how: {
    title: "How it works",
    subtitle: "Launch your first campaign in four simple steps.",
    steps: [
      {
        title: "Sign up",
        desc: "Create an account in a minute and access your personal dashboard.",
      },
      {
        title: "Top up balance",
        desc: "Choose a plan and top up your account with a convenient method.",
      },
      {
        title: "Upload contacts",
        desc: "Import numbers, create groups, and prepare your message text.",
      },
      {
        title: "Launch campaign",
        desc: "Send your messages and track delivery in real time.",
      },
    ],
  },
  api: {
    title: "A powerful SMS API for developers",
    subtitle: "Integrate in minutes",
    desc: "Connect messaging through an HTTP REST API and automate sending. Ready-made examples in cURL, PHP, Node.js, and Ruby.",
    cta: "Open documentation",
    docs: "Go to API",
    note: "Secure API-key authentication and detailed reports for every request.",
  },
  stats: {
    title: "Trusted by businesses",
    items: [
      { label: "Messages delivered" },
      { label: "Active customers" },
      { label: "Network operators" },
      { label: "Service uptime" },
    ],
  },
  useCases: {
    title: "Use cases",
    subtitle: "Built for businesses of every kind.",
    items: [
      {
        title: "Marketing & promos",
        desc: "Tell customers about discounts, new arrivals, and special offers.",
      },
      {
        title: "Authentication & OTP",
        desc: "Protect logins and transactions with instantly delivered one-time codes.",
      },
      {
        title: "Notifications",
        desc: "Keep customers informed about order status, payments, and key events.",
      },
      {
        title: "CRM integration",
        desc: "Automate messaging from your business processes and systems.",
      },
    ],
  },
  pricing: {
    title: "Simple, transparent pricing",
    subtitle: "Pay only for messages you send. No hidden fees.",
    perMonth: "per SMS",
    plans: [
      {
        name: "Start",
        price: "0.18",
        unit: "TJS / SMS",
        desc: "For small projects and your first campaigns.",
        features: [
          "Up to 10,000 SMS per month",
          "SMS API and dashboard",
          "Contacts and groups",
          "Basic reports",
          "Email support",
        ],
        cta: "Choose plan",
      },
      {
        name: "Business",
        price: "0.14",
        unit: "TJS / SMS",
        desc: "For growing companies with regular campaigns.",
        popular: true,
        features: [
          "Up to 100,000 SMS per month",
          "Priority delivery",
          "Advanced analytics",
          "Named senders",
          "24/7 support",
        ],
        cta: "Choose plan",
      },
      {
        name: "Enterprise",
        price: "Custom",
        unit: "on request",
        desc: "For high volumes and complex integrations.",
        features: [
          "Unlimited volume",
          "Dedicated delivery channel",
          "SLA and a personal manager",
          "Turnkey integration",
          "Flexible billing terms",
        ],
        cta: "Contact us",
      },
    ],
    note: "Prices shown are examples. Confirm exact pricing at sign-up.",
  },
  integrations: {
    title: "Ready-made integrations",
    subtitle: "Connect Payom.tj to the tools you already use.",
    items: [
      { title: "Bitrix24", desc: "Send SMS straight from your CRM and workflows." },
      { title: "REST API", desc: "Integrate with any website or application." },
      { title: "Dashboard", desc: "Manage campaigns with no code required." },
      { title: "Webhooks", desc: "Receive delivery statuses in real time." },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    subtitle: "Didn't find an answer? Message us — we'll help you get connected.",
    more: "Contact support",
    items: [
      {
        q: "How do I get started?",
        a: "Sign up on the site, top up your balance, and launch your first campaign from the dashboard or via the API.",
      },
      {
        q: "Which operators do you deliver to?",
        a: "We deliver SMS to every mobile network in Tajikistan with high speed and reliability.",
      },
      {
        q: "Can I integrate messaging via the API?",
        a: "Yes. We provide an HTTP REST API with examples in cURL, PHP, Node.js, and Ruby for fast integration.",
      },
      {
        q: "What is a named sender?",
        a: "It's a sender signature instead of a number — for example, your company name. You configure it in the dashboard.",
      },
      {
        q: "How is pricing calculated?",
        a: "You pay for messages actually sent at your plan rate. The higher the volume, the lower the price per SMS.",
      },
      {
        q: "Are delivery reports available?",
        a: "Yes, the dashboard shows details for every message, delivery status, and cost.",
      },
    ],
  },
  cta: {
    title: "Ready to launch your campaign?",
    subtitle: "Create an account in a minute and send your first messages today.",
    button: "Start for free",
    secondary: "View pricing",
  },
  footer: {
    tagline:
      "SMS gateway and SMS API for businesses in Tajikistan. Bulk campaigns, codes, and notifications.",
    rights: "All rights reserved.",
    madeIn: "Made in Tajikistan",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "/#features" },
          { label: "Pricing", href: "/#pricing" },
          { label: "API", href: "/api" },
          { label: "Sign up", href: "/register" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "How it works", href: "/#how" },
          { label: "Use cases", href: "/#use-cases" },
          { label: "Integrations", href: "/#integrations" },
          { label: "Contacts", href: "/#contacts" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "FAQ", href: "/#faq" },
          { label: "Documentation", href: "/api" },
          { label: "Log in", href: "/login" },
          { label: "Contact", href: "/#contacts" },
        ],
      },
    ],
  },
  auth: {
    login: {
      title: "Log in to your dashboard",
      subtitle: "Sign in to manage your campaigns.",
      email: "Email or phone number",
      password: "Password",
      submit: "Log in",
      forgot: "Forgot password?",
      noAccount: "Don't have an account?",
      registerLink: "Sign up",
      remember: "Remember me",
    },
    register: {
      title: "Create an account",
      subtitle: "Sign up and launch your first campaign.",
      name: "Full name",
      company: "Company",
      email: "Email",
      phone: "Phone number",
      password: "Password",
      submit: "Sign up",
      hasAccount: "Already have an account?",
      loginLink: "Log in",
      agree: "I accept the terms of use and privacy policy",
      success: "Account created",
      successDesc:
        "We've sent a confirmation to your email. Log in to start sending.",
    },
  },
  apiPage: {
    title: "SMS API documentation",
    subtitle: "Integrate SMS sending into your product through a simple HTTP REST API.",
    authTitle: "Authentication",
    authDesc:
      "All requests are authenticated with an API key available in your dashboard. Pass the key in the request header.",
    sendTitle: "Send a message",
    sendDesc:
      "Send a POST request to the send endpoint with the recipient number and message text.",
    paramsTitle: "Request parameters",
    params: [
      { name: "to", type: "string", desc: "Recipient number in international format." },
      { name: "from", type: "string", desc: "Sender name or number." },
      { name: "text", type: "string", desc: "Message text." },
      { name: "api_key", type: "string", desc: "Your API key from the dashboard." },
    ],
    responseTitle: "Response",
    responseDesc: "The service returns a message ID and its status in JSON format.",
  },
  notFound: {
    title: "Page not found",
    desc: "The page may have been moved or deleted.",
    home: "Back home",
  },
  common: {
    theme: "Theme",
    language: "Language",
    skip: "Skip to content",
  },
};
