export const EDGE_WEIGHT: Record<string, number> = {
  IsA: 1,
  UsedFor: 2,
  CapableOf: 2,
  HasProperty: 2,
  PartOf: 3,
  Causes: 3,
  RelatedTo: 5
};

export function getWeight(rel: string) {
  return EDGE_WEIGHT[rel] ?? 10;
}