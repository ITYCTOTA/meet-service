import type { ComponentPropsWithRef } from "react";
import styles from "./Input.module.css";

type InputProps = ComponentPropsWithRef<"input">;

export function Input({ ref, className,  ...props }: InputProps) {
  const classes = [styles.input, className].filter(Boolean).join(" ");

  return <input ref={ref} className={classes} {...props} />;
}
