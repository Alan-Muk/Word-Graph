"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const words_routes_1 = __importDefault(require("./routes/words.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use("/word", words_routes_1.default);
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
