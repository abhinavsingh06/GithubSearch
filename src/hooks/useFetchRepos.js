import { useEffect } from "react";
import axios from "axios";

const PAGE_SIZE = 100;
const DEBOUNCE_DELAY = 500;

export const useFetchRepos = (
  searchTerm,
  currentPage,
  sortBy,
  setRepos,
  setLoading
) => {
  useEffect(() => {
    let timerId;
    setLoading(true);

    const fetchRepos = async () => {
      if (!searchTerm) {
        setRepos([]);
        setLoading(false);
        return;
      }

      const url = `https://api.github.com/search/repositories?q=${searchTerm}&sort=${sortBy}&order=desc&page=${currentPage}&per_page=${PAGE_SIZE}`;
      const headers = {
        Authorization: process.env.ACCESS_TOKEN,
      };

      try {
        const response = await axios.get(url, { headers });

        const sortedRepos = response.data.items.sort((a, b) => {
          if (sortBy === "stars") {
            return b.stargazers_count - a.stargazers_count;
          } else if (sortBy === "watchers") {
            return b.watchers_count - a.watchers_count;
          } else if (sortBy === "score") {
            return b.score - a.score;
          } else if (sortBy === "name") {
            return a.name.localeCompare(b.name);
          } else if (sortBy === "created_at") {
            return new Date(b.created_at) - new Date(a.created_at);
          } else if (sortBy === "updated_at") {
            return new Date(b.updated_at) - new Date(a.updated_at);
          } else {
            return 0;
          }
        });

        setRepos(sortedRepos);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    if (searchTerm) {
      timerId = setTimeout(fetchRepos, DEBOUNCE_DELAY);
    }

    return () => clearTimeout(timerId);
  }, [searchTerm, currentPage, sortBy, setRepos, setLoading]);
};
