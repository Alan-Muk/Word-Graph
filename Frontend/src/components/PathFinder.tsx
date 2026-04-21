import { useState } from "react";

type Props = {
  onFind: (from: string, to: string) => void;
};

export default function PathFinder({ onFind }: Props) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        placeholder="From"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <input
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <button onClick={() => onFind(from, to)}>
        Find Path
      </button>
    </div>
  );
}