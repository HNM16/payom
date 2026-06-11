import type { Metadata } from "next";
import { ru } from "@/i18n/dictionaries/ru";
import { AuthShell } from "@/components/auth/AuthShell";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: ru.auth.login.title,
  description: ru.auth.login.subtitle,
};

export default function LoginPage() {
  return (
    <AuthShell variant="login">
      <LoginForm />
    </AuthShell>
  );
}
