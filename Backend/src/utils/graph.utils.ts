import { Node } from "../types/graph.types";

export function dedupeNodes(nodes: Node[]): Node[] {
  const seen = new Set();
  return nodes.filter((node) => {
    if (seen.has(node.id)) return false;
    seen.add(node.id);
    return true;
  });
}

/*
 * Node Deduplication Utility
 *
 * Removes duplicate nodes from a graph based on node.id.
 * Uses a Set to track seen IDs and filters out repeats,
 * ensuring each node appears only once in the final graph.
 */
