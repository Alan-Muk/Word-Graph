import { getRelatedWords } from "../clients/wordnik.client";
import { buildGraph } from "./graph.service";

export async function getWordGraph(word: string) {
  const relatedData = await getRelatedWords(word);
  return buildGraph(word, relatedData);
}

/*
 * Word Service
 *
 * Coordinates the word graph generation process by:
 * - Fetching related words from the Wordnik client.
 * - Transforming the response into a graph structure.
 * - Returning the completed graph data.
 */
