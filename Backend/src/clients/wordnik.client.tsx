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