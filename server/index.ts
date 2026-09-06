import express from "express";
const port = Number(process.env.APP_PORT ?? 4000);

const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen({ APP_PORT }, () => {
  console.log(`Сервер запущен: http://localhost:${APP_PORT}`);
});
