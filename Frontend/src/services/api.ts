import { GraphData } from "../types/graph.types";

const BASE_URL = "http://localhost:3000";

export async function fetchWordGraph(word: string): Promise<GraphData> {
  const res = await fetch(`${BASE_URL}/word/${word}`);
  if (!res.ok) throw new Error("API error");
  return res.json();
}