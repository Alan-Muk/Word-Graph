import { Node } from "../types/graph.types";

export function dedupeNodes(nodes: Node[]): Node[] {
  const seen = new Set();
  return nodes.filter((node) => {
    if (seen.has(node.id)) return false;
    seen.add(node.id);
    return true;
  });
}