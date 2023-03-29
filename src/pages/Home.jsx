import React from 'react'
import { Header } from '../components/Header';
import { SortDropdown } from '../components/SortDropdown';
import { TextField } from '../components/TextField';
import '../stylesheets/home.css'

export const Home = () => {
  return (
    <>
      <Header/>
      <section className='inputWrapper'>
        <TextField />
        <SortDropdown/>
      </section>
    </>
  );
}
