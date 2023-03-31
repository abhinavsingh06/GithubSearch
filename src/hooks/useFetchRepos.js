import { useEffect } from "react";
import axios from "axios";

const PAGE_SIZE = 20;
const DEBOUNCE_DELAY = 500;

export const useFetchRepos = (
  searchTerm,
  currentPage,
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

      const url = `https://api.github.com/search/repositories?q=${searchTerm}&sort=stars&order=desc&page=${currentPage}&per_page=${PAGE_SIZE}`;
      const headers = {
        Authorization: process.env.ACCESS_TOKEN,
      };

      try {
        const response = await axios.get(url, { headers });
        setRepos((prevRepos) => [...prevRepos, ...response.data.items]);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    if (searchTerm) {
      timerId = setTimeout(fetchRepos, DEBOUNCE_DELAY);
    }

    return () => clearTimeout(timerId);
  }, [searchTerm, currentPage, setRepos, setLoading]);
};
