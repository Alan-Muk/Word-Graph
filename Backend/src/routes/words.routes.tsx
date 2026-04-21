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