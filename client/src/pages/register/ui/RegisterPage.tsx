import { RegisterForm } from "@/features/auth/register/ui/RegisterForm";

import styles from './RegisterPage.module.css'

export function RegisterPage() {
  return (
    <main className={styles.main}>
      <RegisterForm></RegisterForm>
    </main>
  );
}
