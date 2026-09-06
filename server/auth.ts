import { Router } from "express";
import bcrypt from "bcrypt";
import { createUser, findUserByEmail } from "./users.ts";

export const authRouter = Router();



authRouter.post("/register", async (req, res) => {
  try {
    const { name, surname, email, password } = req.body ?? {};

    if (
      typeof name !== "string" ||
      typeof surname !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      return res.status(400).json({
        message: "Все поля должны быть типа string",
      });
    }

    if (!name.trim() || !surname.trim() || !email.trim() || !password) {
      return res.status(400).json({
        message: "Все поля должны быть заполнены",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Пароль должен содержать минимум 8 символов",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const existingUser = findUserByEmail(normalizedEmail);

    if (existingUser) {
      return res.status(409).json({
        message: "Пользователь с такой почтой уже существует",
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = createUser({
      name: name.trim(),
      surname: surname.trim(),
      email: normalizedEmail,
      passwordHash,
    });

    return res.status(201).json({
      message: "Пользователь зарегистрирован",
      user,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Ошибка сервера",
    });
  }
});
