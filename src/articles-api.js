import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export default async function fetchArticlesWithTopic(topik) {
  const response = await axios.get(`/search?query=${topik}`);
  return response.data.hits;
}
