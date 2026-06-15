"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildGraph = buildGraph;
const graph_utils_1 = require("../utils/graph.utils");
function getWeight(type) {
    switch (type) {
        case "synonym":
            return 1;
        case "similarTo":
            return 2;
        case "hypernym":
        case "hyponym":
            return 3;
        case "antonym":
            return 5;
        default:
            return 4;
    }
}
function buildGraph(word, data) {
    const nodes = [{ id: word }];
    const edges = [];
    data.forEach((group) => {
        const relation = group.relationshipType;
        group.words.slice(0, 5).forEach((w) => {
            nodes.push({ id: w });
            edges.push({
                source: word,
                target: w,
                relation,
                weight: getWeight(relation)
            });
        });
    });
    return {
        nodes: (0, graph_utils_1.dedupeNodes)(nodes),
        edges
    };
}
/*
 * Graph Builder
 *
 * Converts Wordnik relationship data into a graph structure.
 * - Creates nodes for the source word and related words.
 * - Creates edges based on relationship types.
 * - Assigns edge weights according to relationship strength.
 * - Removes duplicate nodes before returning the graph.
 */
