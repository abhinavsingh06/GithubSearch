import React from 'react'
import '../stylesheets/textfield.css'

export const TextField = ({ searchTerm, handleInputChange, handleKeyDown }) => {
  return (
    <>
      <div className="fullWidth">
        <input
          className="textArea"
          type="text"
          placeholder="Search any repo..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};
