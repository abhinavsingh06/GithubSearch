import React, { useState } from "react";
import { Header } from "../components/Header";
import { SortDropdown } from "../components/SortDropdown";
import { TextField } from "../components/TextField";
import "../stylesheets/home.css";
import { RepoCard } from "../components/RepoCard";
import {useFetchRepos} from "../hooks/useFetchRepos"

const PAGE_SIZE = 20;

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useFetchRepos(searchTerm, currentPage, setRepos, setLoading);

  const handleSearch = () => {
    setCurrentPage(1);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

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
      <section className="repoCardWrapper">
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
        <button
          onClick={handleNextClick}
          disabled={loading || currentRepos.length !== PAGE_SIZE}
        >
          Next
        </button>
        {loading && <p>Loading...</p>}
      </div>
    </>
  );
};
