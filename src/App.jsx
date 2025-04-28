import { useState } from "react";
import ArticleList from "./components/ArticleList/ArticleList";
import { useEffect } from "react";
import { SyncLoader } from "react-spinners";
import fetchArticlesWithTopic from "./articles-api";
import SearchForm from "./components/SearchForm/SearchForm";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        const data = await fetchArticlesWithTopic("react");
        setArticles(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  const handleSearch = async (topik) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topik);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Latest articles</h1>

      <SearchForm onSearch={handleSearch} />

      {loading && <SyncLoader color="#2e30f9" loading margin={7} size={12} />}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
}
