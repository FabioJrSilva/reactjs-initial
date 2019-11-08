import React from 'react';
import './App.css';
import img from './assets/DEV.jpg';
import TechList from './components/TechList';

function App() {
  return (
    <>
      <img src={img} width="150" />
      <TechList />
    </>
  );
}

export default App;
