"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const words_service_1 = require("../services/words.service");
const router = (0, express_1.Router)();
router.get("/:word", async (req, res) => {
    try {
        const data = await (0, words_service_1.getWordGraph)(req.params.word);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch word graph" });
    }
});
exports.default = router;
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
