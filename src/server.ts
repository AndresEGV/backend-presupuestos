import express from "express";
import colors from "colors";
import morgan from "morgan";
import { db } from "./config/db";
import budgetRouter from "./routes/budgetRouter";
import authRouter from "./routes/authRouter";
import cors from "cors";

async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log(colors.blue.bold("Conexión a la base de datos exitosa"));
  } catch (error) {
    console.log(colors.red.bold("Falló la conexión a la base de datos"));
  }
}

connectDB();

const app = express();

app.use(morgan("dev"));
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Permite solicitudes desde tu frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
    credentials: true, // Permitir cookies y encabezados de autorización
  })
);
app.use(express.json());

app.use("/api/budgets", budgetRouter);
app.use("/api/auth", authRouter);

export default app;
