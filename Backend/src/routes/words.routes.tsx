import { Router } from "express";
import { getWordGraph } from "../services/word.service";

const router = Router();

router.get("/:word", async (req, res) => {
  try {
    const data = await getWordGraph(req.params.word);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch word graph" });
  }
});

export default router;

/*
 * Route: GET /:word
 *
 * Purpose:
 * - Accepts a word as a URL parameter.
 * - Retrieves the word graph from the service layer.
 * - Returns the graph data as JSON.
 *
 * Error Handling:
 * - Returns HTTP 500 if the word graph cannot be fetched.
 */
