import { Input } from "@/shared/ui/Input/Input";
import { useForm, type SubmitHandler } from "react-hook-form";
import { FormField } from "@/shared/ui/FormField/FormField";
import styles from "@/features/auth/ui/AuthForm.module.css";
import { Button } from "@/shared/ui";
import type { LoginCredentials } from "../../model/types";
import { login } from "../../api/authApi";

import { useDispatch } from "react-redux";
import { sessionReceived } from "@/entities/session/model/sessionSlice";
import type { AppDispatch } from "@/store";

export function LoginForm() {
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginCredentials>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginCredentials> = async (credentials) => {
    try {
      const { user } = await login(credentials);

      dispatch(sessionReceived(user));
    } catch {
      setError("root", {
        message: "Не удалось войти. Проверьте данные или попробуйте позже.",
      });
    }
  };

  return (
    <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="Электронная почта"
        htmlFor="email"
        error={errors.email?.message}
      >
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="example@mail.ru"
          {...register("email", {
            required: "Введите электронную почту",
          })}
        />
      </FormField>
      <FormField
        label="Пароль"
        htmlFor="password"
        error={errors.password?.message}
      >
        <Input
          id="password"
          type="password"
          autoComplete="current-password"
          placeholder="********"
          {...register("password", {
            required: "Введите пароль",
          })}
        />
      </FormField>

      {errors.root?.message && <p role="alert">{errors.root.message}</p>}
      <Button type="submit" loading={isSubmitting}>
        Войти
      </Button>
    </form>
  );
}
