import { getWeight } from "./weights";

type Node = {
  data: { id: string; label: string };
};

type Edge = {
  data: { source: string; target: string; label: string };
};

const ALLOWED = new Set([
  "IsA",
  "UsedFor",
  "CapableOf",
  "PartOf",
  "HasProperty",
  "Causes",
  "RelatedTo"
]);

export function buildGraph(data: any) {
  const nodes = new Map<string, Node>();
  const edges: Edge[] = [];

  for (const e of data.edges ?? []) {
    const rel = e.rel?.label;
    const start = e.start?.label;
    const end = e.end?.label;

    if (!rel || !start || !end) continue;
    if (!ALLOWED.has(rel)) continue;
    if (start === end) continue;

    if (!nodes.has(start)) {
      nodes.set(start, { data: { id: start, label: start } });
    }

    if (!nodes.has(end)) {
      nodes.set(end, { data: { id: end, label: end } });
    }

    edges.push({
      data: {
        source: start,
        target: end,
        label: rel,
        weight: getWeight(rel)
      }
    });
  }

  return {
    nodes: Array.from(nodes.values()),
    edges
  };
}