import express from "express";
import dotenv from "dotenv";
import wordRoutes from "./routes/words.routes";

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

/*
 * Server Entry Point
 *
 * Initializes the Express application:
 * - Loads environment variables from .env
 * - Sets up JSON parsing middleware
 * - Registers word-related routes under /word
 * - Provides a health check endpoint at /
 * - Starts the server on the configured PORT
 */
