export type Node = {
  id: string;
};

export type Edge = {
  source: string;
  target: string;
  type: string;
};

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
