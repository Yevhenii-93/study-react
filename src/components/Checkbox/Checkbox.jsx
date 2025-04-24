export default function Checkbox({ onSelect, value }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="terms"
          onChange={onSelect}
          checked={value}
        />
        I accept terms and conditions
      </label>
      <button type="button" disabled={!value}>
        Proceed
      </button>
    </div>
  );
}
