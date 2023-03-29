import React from 'react'
import '../stylesheets/textfield.css'

export const TextField = () => {
  return (
    <>
      <div className="fullWidth">
        <input className="textArea" type="text" placeholder='Search any repo...' />
      </div>
    </>
  );
}
