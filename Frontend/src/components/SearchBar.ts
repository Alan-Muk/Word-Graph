import { useState } from "react";

type Props = {
  onSearch: (word: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [value, setValue] = useState("");

  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter a word..."
      />
      <button onClick={() => onSearch(value)}>Search</button>
    </div>
  );
}