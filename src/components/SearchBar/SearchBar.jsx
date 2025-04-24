import { useState } from "react";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>{inputValue}</p>
    </>
  );
}
