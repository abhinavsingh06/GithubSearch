import React from "react";
import { Logo } from "./Logo";
import "../stylesheets/header.css";

export const Header = () => {
  return (
    <>
      <main className="headerContainer">
        <div className="imageWrapper">
          <Logo/>
        </div>
        <div className="headingWrapper">
          <h1>Github Repository search</h1>
        </div>
      </main>
    </>
  );
};

