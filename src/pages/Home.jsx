import React, {useState} from 'react';
import axios from 'axios';
import { Header } from '../components/Header';
import { SortDropdown } from '../components/SortDropdown';
import { TextField } from '../components/TextField';
import '../stylesheets/home.css';

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }


  return (
    <>
      <Header/>
      <section className='inputWrapper'>
        <TextField searchTerm={searchTerm} handleInputChange={handleInputChange} onKeyDown={handleKeyDown} />
        <SortDropdown/>
      </section>
    </>
  );
}
