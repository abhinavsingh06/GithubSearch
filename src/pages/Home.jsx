import React, { useState } from "react";
import axios from "axios";
import { Header } from "../components/Header";
import { SortDropdown } from "../components/SortDropdown";
import { TextField } from "../components/TextField";
import "../stylesheets/home.css";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [repos, setRepos] = useState([]);

  async function fetchRepos() {
    const url = `https://api.github.com/search/repositories?q=${searchTerm}`;
    const headers = {
      Authorization: process.env.ACCESS_TOKEN,
    };

    try {
      const response = await axios.get(url, { headers });
      const repos = response.data.items;
      setRepos(repos);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSearch() {
    fetchRepos(searchTerm);
  }

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleKeyUp(event) {
    console.log(event)
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  }

  console.log(searchTerm)

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
    </>
  );
};
