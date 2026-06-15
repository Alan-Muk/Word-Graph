"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRelatedWords = getRelatedWords;
const node_fetch_1 = __importDefault(require("node-fetch"));
const BASE_URL = "https://api.wordnik.com/v4";
async function getRelatedWords(word) {
    const res = await (0, node_fetch_1.default)(`${BASE_URL}/word.json/${word}/relatedWords?api_key=${process.env.WORDNIK_API_KEY}`);
    if (!res.ok) {
        throw new Error("Wordnik API error");
    }
    return res.json();
}
/*
 * Module Summary:
 * - Connects to the Wordnik API.
 * - Fetches words related to the provided input word.
 * - Throws an error when the API request is unsuccessful.
 * - Returns the parsed JSON response from Wordnik.
 *
 * Required environment variable:
 * - WORDNIK_API_KEY
 */
