import { Router } from "express";
import { normalize } from "../util/normalise";
import { expandGraph } from "../graph/expand";
import { buildAdjacency } from "../graph/index";
import { dijkstra } from "../graph/dijkstra";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const from = normalize(req.query.from as string);
    const to = normalize(req.query.to as string);

    if (!from || !to) {
      return res.status(400).json({
        error: "Missing 'from' or 'to'"
      });
    }

    const graph = await expandGraph(from, 2);

    const adjacency = buildAdjacency(graph.edges);

    const path = dijkstra(adjacency, from, to);

    res.json({
      from,
      to,
      path
    });
  } catch (err: any) {
    console.error(err.message);

    res.status(500).json({
      error: "Path computation failed"
    });
  }
});

export default router;