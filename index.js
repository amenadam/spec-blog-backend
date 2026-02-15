import express from "express";
import "dotenv/config";
import cors from "cors";
import { connectDb } from "./utils/connectDB.js";
import auhtRoute from "./routes/auth.js";
import blogRoutes from "./routes/blog.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", auhtRoute);
app.use("/api/blog", blogRoutes);
app.use("/api/message");

app.get("/", (req, res) => {
  res.json({ status: true, message: "API Running" });
});

await connectDb();
app.listen(5500, () => console.log("Server running"));
