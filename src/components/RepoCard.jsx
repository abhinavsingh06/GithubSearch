import React from "react";

export const RepoCard = ({ data }) => {
  console.log(data);
  return (
    <div className="repoCard">
      <h3>
        <a href={data.html_url} target="_blank" rel="noreferrer">
          {data.name}
        </a>
      </h3>
      <p>{data.description}</p>
      <ul>
        <li>Stars: {data.stargazers_count}</li>
        <li>Watchers: {data.watchers_count}</li>
        <li>Forks: {data.forks_count}</li>
      </ul>
    </div>
  );
};
