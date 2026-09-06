import { db } from "./db.ts";

const findUserByEmailQuery = db.prepare(`
  SELECT id, name, surname, email, password_hash
  FROM users
  WHERE email = ?
`);

export function findUserByEmail(email: string) {
  return findUserByEmailQuery.get(email);
}

type CreateUserData = {
  name: string;
  surname: string;
  email: string;
  passwordHash: string;
};

const createUserQuery = db.prepare(`
  INSERT INTO users (name, surname, email, password_hash)
  VALUES (?, ?, ?, ?)
`);

export function createUser(data: CreateUserData) {
  const result = createUserQuery.run(
    data.name,
    data.surname,
    data.email,
    data.passwordHash,
  );

  return {
    id: String(result.lastInsertRowid),
    name: data.name,
    surname: data.surname,
    email: data.email,
  }
}
