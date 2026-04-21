import express from "express";
import dotenv from "dotenv";
import wordRoutes from "./routes/word.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/word", wordRoutes);

app.get("/", (_, res) => {
  res.send("Word Graph API is running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});