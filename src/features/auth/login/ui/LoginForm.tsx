import { Input } from "@/shared/ui/Input/Input";
import { useForm, type SubmitHandler } from "react-hook-form";
import { FormField } from "@/shared/ui/FormField/FormField";
import styles from "@/features/auth/ui/AuthForm.module.css";

type Inputs = {
  email: string;
  password: string;
};

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
          placeholder="1234Qwert_"
          {...register("password", {
            required: "Введите пароль",
          })}
        />
      </FormField>

      <button type="submit">Войти</button>
    </form>
  );
}
