import React from "react";
import "../stylesheets/repocard.css";

export const RepoCard = ({ data }) => {
  return (
    <div class="githubCard">
      <div className="headerCardContainer">
        <div className="githubCardHeaderImage">
          <img src={data.owner.avatar_url} alt="User avatar" />
        </div>
        <div className="cardContent">
          <h1>
            <a href={`https://github.com/${data.full_name}`} target="_blank_">{data.full_name}</a>
          </h1>
          <p>{data.description}</p>
          <div class="footerContent">
            <div class="">
              <p>Language: {data.language}</p>
            </div>
            <div class="">
              <p> Stars: {data.stargazers_count}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
