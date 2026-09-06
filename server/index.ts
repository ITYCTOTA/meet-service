import express from "express";
import "./db.ts";
import { authRouter } from "./auth.ts";

const port = Number(process.env.APP_PORT ?? 4000);

const app = express();

app.use(express.json());
app.use("/api/auth", authRouter);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen({ port }, () => {
  console.log(`Сервер запущен: http://localhost:${port}`);
});
