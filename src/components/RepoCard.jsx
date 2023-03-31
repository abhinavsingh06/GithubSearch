import React from "react";
import "../stylesheets/repocard.css";

export const RepoCard = ({ data }) => {
  console.log(data);
  return (
    // <div className="repoCardContainer">
    //   <h3>
    //     <a href={data.html_url} target="_blank" rel="noreferrer">
    //       {data.name}
    //     </a>
    //   </h3>
    //   <p>{data.description}</p>
    //   <ul>
    //     <li>Stars: {data.stargazers_count}</li>
    //     <li>Watchers: {data.watchers_count}</li>
    //     <li>Forks: {data.forks_count}</li>
    //   </ul>
    // </div>
    <div class="github-card">
      <div className="headerCardContainer">
        <div className="githubCardHeaderImage">
          <img src={data.owner.avatar_url} alt="User avatar" />
        </div>
        <div className="cardContent">
          <h2>{data.full_name}</h2>
          <p>{data.description}</p>
        </div>
      </div>
      <div class="github-card-body">
        <div class="github-card-metric">
          <p>Language: {data.language}</p>
        </div>
        <div class="github-card-metric">
          <p> Stars: {data.stargazers_count}</p>
        </div>
      </div>
    </div>
  );
};
