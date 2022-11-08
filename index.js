import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

//This is the backend connected to mongoDB with the route "/api"

import authRoutes from "./routes/auth.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

//db connection
mongoose
  .connect(process.env.MONGODM_URL)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR: ", err));

app.use("/api", authRoutes);

app.listen(process.env.PORT || 5000, () =>
  console.log("Server running on port 5000")
);
