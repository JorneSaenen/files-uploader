// Imports
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import chalk from "chalk";
import { PORT } from "./utils/envs";

// Variables
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("src/public"));

// Routes
app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

// Foutafhandeling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send(err.message);
});

// Server Listening
app.listen(PORT, () => {
  console.log(
    chalk.bgBlue.bold(` 🚀 Server is up and running on port ${PORT}! 🚀 `)
  );
});
