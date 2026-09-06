export type RegisterCredentials = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

export async function registerUser(credentials: RegisterCredentials) {
  const response = await fetch("/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message ?? "Ошибка регистрации");
  }

  return data;
}
