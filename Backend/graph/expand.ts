import { fetchNode } from "../services/conceptnet";
import { buildGraph } from "./builder";
import pLimit from "p-limit";

const limit = pLimit(5); // concurrency control

const ALLOWED = new Set([
  "IsA",
  "UsedFor",
  "CapableOf",
  "PartOf",
  "HasProperty",
  "Causes",
  "RelatedTo"
]);

type Cache = Map<string, any>;

export async function expandGraph(
  root: string,
  depth = 2,
  cache: Cache = new Map()
) {
  const nodes = new Map<string, any>();
  const edges: any[] = [];

  async function explore(word: string, d: number) {
    if (d > depth) return;

    if (cache.has(word)) {
      const cached = cache.get(word);
      merge(cached);
      return;
    }

    const data = await fetchNode(word);
    cache.set(word, data);

    const { nodes: newNodes, edges: newEdges } = buildGraph(data);

    merge({ nodes: newNodes, edges: newEdges });

    const nextWords = newEdges
      .slice(0, 20) // limit branching
      .map(e => e.data.target);

    await Promise.all(
      nextWords.map(w =>
        limit(() => explore(w, d + 1))
      )
    );
  }

  function merge(graph: any) {
    for (const n of graph.nodes) {
      nodes.set(n.data.id, n);
    }
    for (const e of graph.edges) {
      edges.push(e);
    }
  }

  await explore(root, 0);

  return {
    center: root,
    nodes: Array.from(nodes.values()),
    edges
  };
}