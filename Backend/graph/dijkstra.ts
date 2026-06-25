export function dijkstra(
  graph: Map<string, { node: string; weight: number }[]>,
  start: string,
  end: string
) {
  const distances = new Map<string, number>();
  const prev = new Map<string, string | null>();
  const visited = new Set<string>();

  const nodes = Array.from(graph.keys());

  for (const n of nodes) {
    distances.set(n, Infinity);
    prev.set(n, null);
  }

  distances.set(start, 0);

  while (nodes.length) {
    nodes.sort((a, b) => (distances.get(a)! - distances.get(b)!));

    const current = nodes.shift()!;
    if (current === end) break;

    if (visited.has(current)) continue;
    visited.add(current);

    const neighbors = graph.get(current) || [];

    for (const { node, weight } of neighbors) {
      const alt = distances.get(current)! + weight;

      if (alt < distances.get(node)!) {
        distances.set(node, alt);
        prev.set(node, current);
      }
    }
  }

  // reconstruct path
  const path: string[] = [];
  let curr: string | null = end;

  while (curr) {
    path.unshift(curr);
    curr = prev.get(curr)!;
  }

  return path[0] === start ? path : [];
}