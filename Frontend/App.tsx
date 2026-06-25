import { useState } from "react";
import { fetchGraph, fetchPath } from "./api/graph";
import GraphView from "./components/GraphView";

export default function App() {
  const [word, setWord] = useState("dog");
  const [target, setTarget] = useState("car");

  const [graph, setGraph] = useState<any>(null);
  const [path, setPath] = useState<string[]>([]);

  async function run() {
    const g = await fetchGraph(word);
    const p = await fetchPath(word, target);

    setGraph(g);
    setPath(p.path || []);
  }

  return (
    <div
      style={{
        padding: 20,
        background: "#000",
        color: "#fff",
        minHeight: "100vh"
      }}
    >
      <h2>Word Graph Explorer</h2>

      <div style={{ marginBottom: 10 }}>
        <input
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="from"
        />

        <input
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          placeholder="to"
          style={{ marginLeft: 10 }}
        />

        <button onClick={run} style={{ marginLeft: 10 }}>
          Run
        </button>
      </div>

      <GraphView graph={graph} path={path} />
    </div>
  );
}