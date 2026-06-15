export interface Node {
  id: string;
}

export interface Edge {
  source: string;
  target: string;
  relation: string; // or "type", but be consistent
  weight?: number;
}

/*
 * Graph Type Definitions
 *
 * Node:
 * - Represents a word in the graph.
 *
 * Edge:
 * - Represents a relationship between two words.
 * - Stores the source word, target word, and relationship type.
 */
