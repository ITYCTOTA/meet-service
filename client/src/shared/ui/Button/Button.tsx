import type { ComponentPropsWithRef } from "react"
import styles from "./Button.module.css"

type ButtonProps = ComponentPropsWithRef<"button"> & {
  variant?: "primary" | "secondary"
  loading?: boolean
}

export function Button({
  ref,
  className,
  variant = "primary",
  loading = false,
  disabled,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <button
      {...props}
      ref={ref}
      type={type}
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading}
    >
      {loading ? "Загрузка…" : children}
    </button>
  )
}