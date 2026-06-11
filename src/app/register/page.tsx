import type { Metadata } from "next";
import { ru } from "@/i18n/dictionaries/ru";
import { AuthShell } from "@/components/auth/AuthShell";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: ru.auth.register.title,
  description: ru.auth.register.subtitle,
};

export default function RegisterPage() {
  return (
    <AuthShell variant="register">
      <RegisterForm />
    </AuthShell>
  );
}
