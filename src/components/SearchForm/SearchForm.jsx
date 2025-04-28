export default function SearchForm({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const topik = form.elements.topik.value;

    if (form.elements.topik.value.trim() === "") {
      alert("Please enter search term!");
      return;
    }

    onSearch(topik);
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input tape="text" name="topik" placeholder="Search articles..." />

      <button>Search</button>
    </form>
  );
}
