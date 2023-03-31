import React, { useState } from "react";

const SortDropdown = ({ handleSortChange, sortBy }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (sortType) => {
    setIsOpen(false);
    handleSortChange(sortType);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        Sort By: {sortBy}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li onClick={() => handleItemClick("stars")}>Stars</li>
          <li onClick={() => handleItemClick("watchers")}>Watchers</li>
          <li onClick={() => handleItemClick("score")}>Score</li>
          <li onClick={() => handleItemClick("name")}>Name</li>
          <li onClick={() => handleItemClick("created_at")}>Created At</li>
          <li onClick={() => handleItemClick("updated_at")}>Updated At</li>
        </ul>
      )}
    </div>
  );
};

export { SortDropdown };
