/**
 * Central contact + external links.
 * Telegram is a placeholder until the real handle is provided.
 */
export const SITE_CONTACT = {
  telegram: "https://t.me/payom_tj",
  email: "payompaydo@gmail.com",
  phone: "+992 44 600 00 00",
};

/** Integration partners shown as wordmarks (swap in real logos under /public/partners). */
export interface Partner {
  name: string;
  /** Optional logo path in /public; falls back to a styled wordmark. */
  logo?: string;
  color?: string;
}

export const PARTNERS: Partner[] = [
  { name: "Эсхата", color: "#009a4e" },
  { name: "Алиф", color: "#27ae8f" },
  { name: "Арванд", color: "#22b9c4" },
  { name: "DC City", color: "#1f5fbf" },
  { name: "Душанбе Сити", color: "#e8821f" },
  { name: "Spitamen", color: "#1a3a8f" },
];
