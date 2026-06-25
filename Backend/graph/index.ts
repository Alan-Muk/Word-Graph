export function buildAdjacency(edges: any[]) {
  const graph = new Map<string, { node: string; weight: number }[]>();

  for (const e of edges) {
    const { source, target, weight } = e.data;

    if (!graph.has(source)) graph.set(source, []);
    if (!graph.has(target)) graph.set(target, []);

    graph.get(source)!.push({ node: target, weight });
    graph.get(target)!.push({ node: source, weight }); // undirected
  }

  return graph;
}