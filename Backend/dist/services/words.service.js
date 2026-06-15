"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWordGraph = getWordGraph;
const wordnik_client_1 = require("../clients/wordnik.client");
const graph_service_1 = require("./graph.service");
async function getWordGraph(word) {
    const relatedData = await (0, wordnik_client_1.getRelatedWords)(word);
    return (0, graph_service_1.buildGraph)(word, relatedData);
}
/*
 * Word Service
 *
 * Coordinates the word graph generation process by:
 * - Fetching related words from the Wordnik client.
 * - Transforming the response into a graph structure.
 * - Returning the completed graph data.
 */
