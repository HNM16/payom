import {
  Smartphone,
  Wifi,
  Zap,
  Droplets,
  Flame,
  CreditCard,
  Landmark,
  GraduationCap,
  Tv,
  Bus,
  Phone,
  ShieldCheck,
  Wallet,
  Globe,
  Building2,
  Gamepad2,
  Receipt,
  PiggyBank,
  Clock,
  Lock,
  Sparkles,
  BarChart3,
  Headphones,
  UserPlus,
  ScanLine,
  CheckCircle2,
} from "lucide-react";
import type {
  Faq,
  Feature,
  NavItem,
  Service,
  Stat,
  Step,
  Testimonial,
  Transaction,
} from "./types";

export const SITE = {
  name: "Veltra",
  tagline: "Pay for everything, in seconds.",
  description:
    "Veltra is a premium payment platform to settle bills, top up mobiles, and manage your money — fast, secure, and beautifully simple.",
  email: "hello@veltra.pay",
  phone: "+1 (800) 938-7200",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Payments", href: "/payments" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES: Service[] = [
  {
    slug: "mobile-topup",
    name: "Mobile Top-up",
    description: "Recharge any carrier instantly with zero fees.",
    category: "Mobile",
    icon: Smartphone,
    popular: true,
  },
  {
    slug: "home-internet",
    name: "Home Internet",
    description: "Pay broadband providers in one tap.",
    category: "Internet",
    icon: Wifi,
    popular: true,
  },
  {
    slug: "electricity",
    name: "Electricity",
    description: "Settle power bills before they're due.",
    category: "Utilities",
    icon: Zap,
    popular: true,
  },
  {
    slug: "water",
    name: "Water Supply",
    description: "Quick payments for your water utility.",
    category: "Utilities",
    icon: Droplets,
    popular: true,
  },
  {
    slug: "gas",
    name: "Natural Gas",
    description: "Keep the heat on with on-time payments.",
    category: "Utilities",
    icon: Flame,
  },
  {
    slug: "credit-cards",
    name: "Card Repayment",
    description: "Pay down credit cards from any bank.",
    category: "Finance",
    icon: CreditCard,
    popular: true,
  },
  {
    slug: "taxes",
    name: "Taxes & Fines",
    description: "Government dues and fines, paid in seconds.",
    category: "Government",
    icon: Landmark,
  },
  {
    slug: "tuition",
    name: "Tuition & Courses",
    description: "Fund education for schools and academies.",
    category: "Education",
    icon: GraduationCap,
  },
  {
    slug: "streaming",
    name: "Streaming & TV",
    description: "Subscriptions for the platforms you love.",
    category: "Entertainment",
    icon: Tv,
    popular: true,
  },
  {
    slug: "transit",
    name: "Transit Cards",
    description: "Reload metro and bus travel cards.",
    category: "Transport",
    icon: Bus,
  },
  {
    slug: "landline",
    name: "Landline",
    description: "Pay home phone bills hassle-free.",
    category: "Mobile",
    icon: Phone,
  },
  {
    slug: "insurance",
    name: "Insurance",
    description: "Premiums for health, auto, and home.",
    category: "Finance",
    icon: ShieldCheck,
  },
  {
    slug: "wallet-topup",
    name: "Wallet Top-up",
    description: "Add funds to your Veltra balance.",
    category: "Finance",
    icon: Wallet,
  },
  {
    slug: "international",
    name: "International Transfer",
    description: "Send money across borders, low fees.",
    category: "Finance",
    icon: Globe,
  },
  {
    slug: "rent",
    name: "Rent & Housing",
    description: "Pay landlords and housing associations.",
    category: "Government",
    icon: Building2,
  },
  {
    slug: "gaming",
    name: "Gaming Credits",
    description: "Top up games and digital stores.",
    category: "Entertainment",
    icon: Gamepad2,
  },
];

export const SERVICE_CATEGORIES = [
  "All",
  "Mobile",
  "Utilities",
  "Internet",
  "Finance",
  "Government",
  "Entertainment",
  "Transport",
  "Education",
] as const;

export const STATS: Stat[] = [
  { label: "Active users", value: 2.4, suffix: "M+" },
  { label: "Payments processed", value: 180, suffix: "M+" },
  { label: "Partner billers", value: 1200, suffix: "+" },
  { label: "Uptime", value: 99.98, suffix: "%" },
];

export const FEATURES: Feature[] = [
  {
    title: "Bank-grade security",
    description:
      "256-bit encryption, biometric login, and real-time fraud monitoring keep every transaction protected.",
    icon: Lock,
  },
  {
    title: "Instant settlement",
    description:
      "Payments clear in seconds — no more waiting days for a confirmation that should be immediate.",
    icon: Zap,
  },
  {
    title: "One wallet for everything",
    description:
      "Bills, top-ups, transfers, and subscriptions live in a single, beautifully organized place.",
    icon: Wallet,
  },
  {
    title: "Smart insights",
    description:
      "Understand your spending with clear breakdowns, budgets, and gentle nudges before a bill is due.",
    icon: BarChart3,
  },
  {
    title: "Always-on support",
    description:
      "Real humans, 24/7, in chat and on call — because money questions can't wait until morning.",
    icon: Headphones,
  },
  {
    title: "Rewards that add up",
    description:
      "Earn cashback and points on everyday payments and redeem them for things you actually want.",
    icon: Sparkles,
  },
];

export const STEPS: Step[] = [
  {
    title: "Create your account",
    description:
      "Sign up in under a minute with just your phone number and a quick verification.",
    icon: UserPlus,
  },
  {
    title: "Pick a service",
    description:
      "Search 1,200+ billers or scan a QR code to find exactly what you need to pay.",
    icon: ScanLine,
  },
  {
    title: "Confirm securely",
    description:
      "Review the details and approve with Face ID or a one-tap passcode.",
    icon: ShieldCheck,
  },
  {
    title: "Done in seconds",
    description:
      "Get instant confirmation and a receipt — saved automatically to your history.",
    icon: CheckCircle2,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Amelia Hart",
    role: "Freelance designer",
    quote:
      "Veltra replaced four different apps for me. Paying rent, my phone, and Netflix now takes one minute total.",
    initials: "AH",
    rating: 5,
  },
  {
    name: "Daniel Okonkwo",
    role: "Small business owner",
    quote:
      "The spending insights are genuinely useful. I caught a duplicate subscription within the first week.",
    initials: "DO",
    rating: 5,
  },
  {
    name: "Sofia Marchetti",
    role: "Graduate student",
    quote:
      "Cashback on tuition and transit actually adds up. The interface feels like a premium banking app.",
    initials: "SM",
    rating: 5,
  },
  {
    name: "Liam Andersen",
    role: "Product manager",
    quote:
      "Settlement really is instant. I've never had a payment sit in limbo, and support replied in two minutes.",
    initials: "LA",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Marketing lead",
    quote:
      "Dark mode, fast, and gorgeous. It's the first finance app I don't dread opening.",
    initials: "PN",
    rating: 5,
  },
  {
    name: "Marcus Webb",
    role: "Restaurant owner",
    quote:
      "Splitting utility bills across my locations is effortless now. Veltra just works.",
    initials: "MW",
    rating: 5,
  },
];

export const FAQS: Faq[] = [
  {
    question: "Is Veltra free to use?",
    answer:
      "Creating an account and paying most bills is completely free. A small, transparent fee may apply to international transfers and certain instant card repayments — always shown before you confirm.",
  },
  {
    question: "How secure are my payments?",
    answer:
      "Every transaction is protected with 256-bit encryption, biometric authentication, and 24/7 fraud monitoring. We never store your full card numbers, and we're certified to the highest industry security standards.",
  },
  {
    question: "Which billers and services are supported?",
    answer:
      "We connect to more than 1,200 partners across mobile, utilities, internet, government, education, entertainment, and finance. New billers are added every week based on what our community requests.",
  },
  {
    question: "How fast do payments go through?",
    answer:
      "Most payments settle instantly. A handful of billers process on their own schedule, in which case we show you the expected clearing time up front and notify you the moment it completes.",
  },
  {
    question: "Can I get a refund if something goes wrong?",
    answer:
      "Yes. If a payment fails or is duplicated, funds are automatically returned to your Veltra wallet, usually within minutes. Our support team can help with anything that needs a closer look.",
  },
  {
    question: "Do you have a mobile app?",
    answer:
      "Veltra works beautifully in any modern browser and as an installable progressive web app on iOS and Android. Native apps for the App Store and Google Play are on the way.",
  },
];

export const TRANSACTIONS: Transaction[] = [
  {
    id: "TXN-90412",
    merchant: "Skyline Mobile",
    category: "Mobile",
    amount: 24.0,
    status: "Completed",
    date: "Jun 11, 2026",
  },
  {
    id: "TXN-90388",
    merchant: "BrightGrid Power",
    category: "Utilities",
    amount: 86.5,
    status: "Completed",
    date: "Jun 09, 2026",
  },
  {
    id: "TXN-90351",
    merchant: "FiberNet Home",
    category: "Internet",
    amount: 49.99,
    status: "Pending",
    date: "Jun 08, 2026",
  },
  {
    id: "TXN-90299",
    merchant: "StreamPlus",
    category: "Entertainment",
    amount: 15.99,
    status: "Completed",
    date: "Jun 05, 2026",
  },
  {
    id: "TXN-90245",
    merchant: "Metro Transit",
    category: "Transport",
    amount: 40.0,
    status: "Failed",
    date: "Jun 03, 2026",
  },
  {
    id: "TXN-90201",
    merchant: "AquaFlow Utilities",
    category: "Utilities",
    amount: 31.2,
    status: "Completed",
    date: "Jun 01, 2026",
  },
];

export const DASHBOARD_CARDS = [
  { label: "Wallet balance", value: "$1,284.50", change: "+12.4%", icon: Wallet },
  { label: "This month", value: "$642.18", change: "-3.2%", icon: Receipt },
  { label: "Saved with rewards", value: "$58.90", change: "+8.1%", icon: PiggyBank },
  { label: "Upcoming bills", value: "3 due", change: "in 5 days", icon: Clock },
];

export const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "Services", href: "/services" },
      { label: "Payments", href: "/payments" },
      { label: "Dashboard", href: "/dashboard" },
      { label: "Pricing", href: "/payments" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/about" },
      { label: "Terms", href: "/about" },
      { label: "Security", href: "/about" },
      { label: "Compliance", href: "/about" },
    ],
  },
];
