import type { ReactNode } from "react";
import styles from "./FormField.module.css";

type FormFieldProps = {
  children: ReactNode;
  label: string;
  htmlFor: string;
  error?: string;
};

export function FormField({ children, label, htmlFor, error }: FormFieldProps) {
  return (
    <div>
      <label className={styles.label} htmlFor={htmlFor}>
        {label}
      </label>
      {children}
      {error && (
        <p className={styles.error} id={`${htmlFor}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
