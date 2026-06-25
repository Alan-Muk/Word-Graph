const BASE = "http://localhost:3001";

export async function fetchGraph(word: string) {
  const res = await fetch(`${BASE}/graph/${word}`);
  return res.json();
}

export async function fetchPath(from: string, to: string) {
  const res = await fetch(
    `${BASE}/path?from=${from}&to=${to}`
  );
  return res.json();
}