import { DatabaseSync } from "node:sqlite";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const dataDirectory = new URL("./data/", import.meta.url);
mkdirSync(dataDirectory, { recursive: true });

const databasePath = fileURLToPath(
  new URL("meet-service.sqlite", dataDirectory),
);

export const db = new DatabaseSync(databasePath);

db.exec(
  `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    surname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL
  );
  `,
);
