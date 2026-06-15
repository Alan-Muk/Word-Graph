import CytoscapeComponent from "react-cytoscapejs";
import { useRef } from "react";

export default function GraphView({ data, onNodeClick, onReady }: any) {
  const cyRef = useRef<any>(null);

  if (!data) return <div>No data</div>;

  const elements = [
    ...data.nodes.map((n: any) => ({ data: { id: n.id, label: n.id } })),
    ...data.edges.map((e: any) => ({
      data: {
        source: e.source,
        target: e.target,
        label: e.type,
        weight: e.weight
      }
    }))
  ];

  return (
    <CytoscapeComponent
      elements={elements}
      style={{ width: "100%", height: "500px" }}
      layout={{ name: "cose" }}
      cy={(cy) => {
        cyRef.current = cy;

        cy.on("tap", "node", (evt) => {
          const word = evt.target.id();
          onNodeClick(word);
        });

        if (onReady) onReady(cy);
      }}
      stylesheet={[
        {
          selector: "node",
          style: {
            label: "data(label)",
            "background-color": "#3b82f6",
            color: "#fff",
            "text-valign": "center",
            "text-halign": "center"
          }
        },
        {
          selector: "edge",
          style: {
            label: "data(label)",
            "curve-style": "bezier",
            "target-arrow-shape": "triangle",
            "line-color": "#64748b",
            "target-arrow-color": "#64748b",
            "font-size": "8px"
          }
        },
        {
          selector: 'edge[label="synonym"]',
          style: { "line-color": "#22c55e" }
        },
        {
          selector: 'edge[label="antonym"]',
          style: { "line-color": "#ef4444" }
        },
        {
          selector: ".highlighted",
          style: {
            "background-color": "#facc15",
            "line-color": "#facc15",
            "target-arrow-color": "#facc15",
            width: 4
          }
        }
      ]}
    />
  );
}