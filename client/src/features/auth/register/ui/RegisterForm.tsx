import { Input } from "@/shared/ui/Input/Input";
import { useForm, type SubmitHandler } from "react-hook-form";
import { FormField } from "@/shared/ui/FormField/FormField";
import styles from "@/features/auth/ui/AuthForm.module.css";
import { Button } from "@/shared/ui";
import { registerUser } from "@/entities/user/api/userApi";

export type RegisterCredentials = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCredentials>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterCredentials> = async (data) => {
    try {
      const user = await registerUser(data);
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Имя" htmlFor="name" error={errors.name?.message}>
        <Input
          id="name"
          type="text"
          autoComplete="given-name"
          placeholder="Иван"
          {...register("name", {
            required: "Введите имя",
          })}
        />
      </FormField>
      <FormField
        label="Фамилия"
        htmlFor="surname"
        error={errors.surname?.message}
      >
        <Input
          id="surname"
          type="text"
          autoComplete="family-name"
          placeholder="Иванов"
          {...register("surname", {
            required: "Введите фамилию",
          })}
        />
      </FormField>
      <FormField
        label="Электронная почта"
        htmlFor="email"
        error={errors.email?.message}
      >
        <Input
          aria-invalid={Boolean(errors.email)}
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
          autoComplete="new-password"
          placeholder="********"
          {...register("password", {
            required: "Введите пароль",
            minLength: {
              value: 8,
              message: "Минимум 8 символов",
            },
          })}
        />
      </FormField>

      <Button type="submit">Зарегистрироваться</Button>
    </form>
  );
}
