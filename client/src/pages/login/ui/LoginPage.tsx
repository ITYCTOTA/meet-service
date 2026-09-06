import { LoginForm } from "@/features/auth/login/ui/LoginForm";

import styles from './LoginPage.module.css'

export function LoginPage() {
  return (
    <main className={styles.main}>
      <LoginForm></LoginForm>
    </main>
  );
}
