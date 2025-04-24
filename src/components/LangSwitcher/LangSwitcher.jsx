import { useId } from "react";

export default function LangSwitcher({ onSelect, value }) {
  const selectId = useId();

  return (
    <div>
      <label htmlFor={selectId}>Choose language</label>
      <select id={selectId} onChange={onSelect} value={value}>
        <option value="en">English</option>
        <option value="uk">Ukrainian</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
}
