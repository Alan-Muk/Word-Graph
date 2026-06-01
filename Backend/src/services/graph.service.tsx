import { Node, Edge } from "../types/graph.types";
import { dedupeNodes } from "../utils/graph.utils";

function getWeight(type: string): number {
  switch (type) {
    case "synonym":
      return 1;
    case "similarTo":
      return 2;
    case "hypernym":
    case "hyponym":
      return 3;
    case "antonym":
      return 5;
    default:
      return 4;
  }
}

export function buildGraph(word: string, data: any) {
  const nodes: Node[] = [{ id: word }];
  const edges: Edge[] = [];

  data.forEach((group: any) => {
    const relation = group.relationshipType;

    group.words.slice(0, 5).forEach((w: string) => {
      nodes.push({ id: w });

      edges.push({
        source: word,
        target: w,
        type: relation,
        weight: getWeight(relation)
      });
    });
  });

  return {
    nodes: dedupeNodes(nodes),
    edges
  };
}

/*
 * Graph Builder
 *
 * Converts Wordnik relationship data into a graph structure.
 * - Creates nodes for the source word and related words.
 * - Creates edges based on relationship types.
 * - Assigns edge weights according to relationship strength.
 * - Removes duplicate nodes before returning the graph.
 */
