import fetch from "node-fetch";

const BASE_URL = "https://api.wordnik.com/v4";

export async function getRelatedWords(word: string) {
  const res = await fetch(
    `${BASE_URL}/word.json/${word}/relatedWords?api_key=${process.env.WORDNIK_API_KEY}`
  );

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
