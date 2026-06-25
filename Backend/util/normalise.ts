export function normalize(word: string) {
  return word
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_");
}