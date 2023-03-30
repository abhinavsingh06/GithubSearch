import React from 'react'
import '../stylesheets/textfield.css'

export const TextField = ({ searchTerm, handleInputChange, handleKeyUp }) => {
  return (
    <>
      <div className="fullWidth">
        <input
          className="textArea"
          type="text"
          placeholder="Search any repo..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
        />
      </div>
    </>
  );
};
