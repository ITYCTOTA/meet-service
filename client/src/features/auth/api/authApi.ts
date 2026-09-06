import type { User } from "@/entities/user/model/types";
import type { LoginCredentials } from "../model/types";

type LoginResponse = {
  user: User;
};

export async function login(
  credentials: LoginCredentials,
): Promise<LoginResponse> {}
