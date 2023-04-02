import React from "react";

const SortDropdown = ({ handleSortChange, sortBy }) => {
  const handleSelectChange = (event) => {
    const sortType = event.target.value;
    handleSortChange(sortType);
  };

  return (
    <div className="dropdown">
      <label htmlFor="sort-select">Sort By: </label>
      <select id="sort-select" value={sortBy} onChange={handleSelectChange}>
        <option value="stars">Stars</option>
        <option value="watchers">Watchers</option>
        <option value="score">Score</option>
        <option value="name">Name</option>
        <option value="created_at">Created At</option>
        <option value="updated_at">Updated At</option>
      </select>
    </div>
  );
};

export { SortDropdown };
