import { Input } from "@/shared/ui/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRef } from "react";

type Inputs = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

export function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Электронная почта">
        <Input
          {...register("email")}
          type="email"
          name="email"
          autoComplete="email"
        />
      </FormField>
    </form>
  );
}
