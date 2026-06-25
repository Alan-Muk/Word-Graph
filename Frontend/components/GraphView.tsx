import { useEffect, useRef } from "react";
import cytoscape from "cytoscape";

type Props = {
  graph: any;
  path: string[];
};

export default function GraphView({ graph, path }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cyRef = useRef<any>(null);

  useEffect(() => {
    if (!graph || !containerRef.current) return;

    if (cyRef.current) {
      cyRef.current.destroy();
    }

    cyRef.current = cytoscape({
      container: containerRef.current,

      elements: [
        ...(graph.nodes || []),
        ...(graph.edges || [])
      ],

      style: [
        {
          selector: "node",
          style: {
            label: "data(label)",
            "background-color": "#666",
            color: "#fff",
            "text-outline-width": 2,
            "text-outline-color": "#000"
          }
        },
        {
          selector: "edge",
          style: {
            label: "data(label)",
            "line-color": "#888",
            "target-arrow-shape": "triangle",
            "target-arrow-color": "#888",
            width: 2,
            "curve-style": "bezier"
          }
        },
        {
          selector: ".active",
          style: {
            "background-color": "#00e5ff",
            "line-color": "#00e5ff",
            "target-arrow-color": "#00e5ff",
            width: 4
          }
        }
      ],

      layout: {
        name: "cose"
      }
    });
  }, [graph]);

  // animate path
  useEffect(() => {
    if (!cyRef.current || !path?.length) return;

    const cy = cyRef.current;

    cy.elements().removeClass("active");

    let i = 0;

    const step = () => {
      if (i >= path.length) return;

      const id = path[i];
      const node = cy.getElementById(id);

      if (node) {
        node.addClass("active");

        cy.animate({
          center: { eles: node },
          duration: 400
        });
      }

      if (i > 0) {
        const prev = path[i - 1];

        const edge = cy.edges().filter(e =>
          (e.data("source") === prev && e.data("target") === id) ||
          (e.data("target") === prev && e.data("source") === id)
        );

        edge.addClass("active");
      }

      i++;
      setTimeout(step, 600);
    };

    step();
  }, [path]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "600px",
        background: "#111",
        borderRadius: "8px"
      }}
    />
  );
}