import { useState } from "react";
import SearchBar from "./components/SearchBar";
import GraphView from "./components/GraphView";
import PathFinder from "./components/PathFinder";
import { fetchWordGraph } from "./services/api";
import { GraphData } from "./types/graph.types";
import "./styles/app.css";

export default function App() {
  const [graph, setGraph] = useState<GraphData | null>(null);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [cyInstance, setCyInstance] = useState<any>(null);

  async function handleSearch(word: string) {
    const data = await fetchWordGraph(word);
    setGraph(data);
    setExpanded(new Set([word]));
  }

  async function handleNodeClick(word: string) {
    if (expanded.has(word)) return;

    const data = await fetchWordGraph(word);

    setGraph((prev) => ({
      nodes: [...(prev?.nodes || []), ...data.nodes],
      edges: [...(prev?.edges || []), ...data.edges]
    }));

    setExpanded((prev) => new Set(prev).add(word));
  }

  async function expandWord(word: string) {
    if (expanded.has(word)) return;

    const data = await fetchWordGraph(word);

    setGraph((prev) => ({
      nodes: [...(prev?.nodes || []), ...data.nodes],
      edges: [...(prev?.edges || []), ...data.edges]
    }));

    setExpanded((prev) => new Set(prev).add(word));
  }

  async function findPathWithExpansion(from: string, to: string) {
    if (!cyInstance) return;

    let attempts = 0;
    const maxAttempts = 3;

    while (attempts < maxAttempts) {
      const dijkstra = cyInstance.elements().dijkstra({
        root: `#${from}`,
        weight: (edge: any) => edge.data("weight") || 1
      });

      const path = dijkstra.pathTo(cyInstance.$(`#${to}`));

      if (path && path.length > 0) {
        cyInstance.elements().removeClass("highlighted");
        path.addClass("highlighted");
        return;
      }

      const nodesToExpand = cyInstance.nodes().slice(0, 5);

      for (let node of nodesToExpand) {
        await expandWord(node.id());
      }

      attempts++;
    }

    alert("No path found (try expanding more)");
  }

  return (
    <div className="container">
      <h1>Word Graph Explorer</h1>

      <div className="card">
        <SearchBar onSearch={handleSearch} />
        <PathFinder onFind={findPathWithExpansion} />
      </div>

      <div className="card">
        <GraphView
          data={graph}
          onNodeClick={handleNodeClick}
          onReady={setCyInstance}
        />
      </div>
    </div>
  );
}