import { getRelatedWords } from "../clients/wordnik.client";
import { buildGraph } from "./graph.service";

export async function getWordGraph(word: string) {
  const relatedData = await getRelatedWords(word);
  return buildGraph(word, relatedData);
}