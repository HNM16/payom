"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { I18nProvider } from "@/i18n/I18nProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
      storageKey="payom-theme"
    >
      <I18nProvider>{children}</I18nProvider>
    </NextThemesProvider>
  );
}
