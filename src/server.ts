// Imports
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import chalk from "chalk";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
  PORT,
} from "./utils/envs";
import multer from "multer";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

// Variables
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("src/public"));
app.use("/uploads", express.static("uploads"));

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads",
    allowedFormats: ["jpg", "png", "jpeg", "webp"],
  } as any,
});
const upload = multer({ storage: storage });

// Routes

app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    res.status(400).send("No file uploaded");
    return;
  }
  console.log(req.file);
  const base_url = "https://res.cloudinary.com/jsjj/image/upload/";
  const trans = "c_thumb,g_face,h_200,w_200/r_max/f_auto/";
  const end = req.file.filename + path.extname(req.file.originalname);
  res.status(200).send(`
    <h1>Image uploaded successfully</h1>
    <img src="${base_url}${trans}${end}" width="500"/>
    `);
});

app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

// Foutafhandeling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

// Server Listening
app.listen(PORT, () => {
  console.log(
    chalk.bgBlue.bold(` 🚀 Server is up and running on port ${PORT}! 🚀 `)
  );
});
