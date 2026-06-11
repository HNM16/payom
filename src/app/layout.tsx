import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ru } from "@/i18n/dictionaries/ru";
import { Providers } from "@/components/layout/Providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://payom.tj";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: ru.meta.title,
    template: "%s · Payom.tj",
  },
  description: ru.meta.description,
  keywords: [
    "SMS",
    "SMS рассылка",
    "SMS шлюз",
    "SMS API",
    "Таджикистан",
    "массовая рассылка",
    "OTP",
    "Payom",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: ru.meta.title,
    description: ru.meta.description,
    siteName: "Payom.tj",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: ru.meta.title,
    description: ru.meta.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#060b18" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            {ru.common.skip}
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
