import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../components/Header";
import { SortDropdown } from "../components/SortDropdown";
import { TextField } from "../components/TextField";
import "../stylesheets/home.css";
import { RepoCard } from "../components/RepoCard";

const PAGE_SIZE = 6;

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchRepos = async () => {
      if (!searchTerm) {
        return;
      }

      const url = `https://api.github.com/search/repositories?q=${searchTerm}&sort=stars&order=desc&page=${currentPage}&per_page=6`;
      const headers = {
        Authorization: process.env.ACCESS_TOKEN,
      };
      try {
        const response = await axios.get(url, { headers });
        setRepos((prevRepos) => [...prevRepos, ...response.data.items]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRepos();
  }, [searchTerm, currentPage]);

  const handleSearch = () => {
    setCurrentPage(1);
  };

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handlePaginationClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (repos.length === PAGE_SIZE) {
      setCurrentPage(currentPage + 1);
    }
  };

  const indexOfLastRepo = currentPage * PAGE_SIZE;
  const indexOfFirstRepo = indexOfLastRepo - PAGE_SIZE;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  return (
    <>
      <Header />
      <section className="inputWrapper">
        <TextField
          searchTerm={searchTerm}
          handleInputChange={handleInputChange}
          handleKeyUp={handleKeyUp}
        />
        <SortDropdown />
      </section>
      <section>
        {currentRepos.map((repo, index) => (
          <RepoCard key={index} data={repo} />
        ))}
      </section>
      <div>
        <button onClick={handlePreviousClick}>Previous</button>
        {repos.length > 0 &&
          Array(Math.ceil(repos.length / PAGE_SIZE))
            .fill()
            .map((_, index) => (
              <button
                key={index}
                id={index + 1}
                onClick={handlePaginationClick}
                disabled={currentPage === index + 1}
              >
                {index + 1}
              </button>
            ))}
        <button onClick={handleNextClick} disabled={repos.length !== PAGE_SIZE}>
          Next
        </button>
      </div>
    </>
  );
};
