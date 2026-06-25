import axios from "axios";

const BASE_URL = "https://api.conceptnet.io";
const cache = new Map<string, any>();

export async function fetchNode(word: string) {
  if (cache.has(word)) {
    return cache.get(word);
  }

  const url = `${BASE_URL}/c/en/${word}`;

  const res = await axios.get(url, {
    timeout: 8000,
    headers: {
      "User-Agent": "word-graph-backend/1.0"
    }
  });

  cache.set(word, res.data);
  return res.data;
}