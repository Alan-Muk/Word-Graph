export type Node = {
  id: string;
};

export type Edge = {
  source: string;
  target: string;
  type: string;
  weight?: number;
};

export type GraphData = {
  nodes: Node[];
  edges: Edge[];
};