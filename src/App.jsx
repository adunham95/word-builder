import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { WordBoard } from './Components/WordBoard/WordBoard';
// import { Board } from './Components/Board';
import Home from './Pages';
import Builder from './Pages/builder';

function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<WordBoard />} />
        <Route path="about" element={<Builder />} />
      </Routes>
    </div>
  );
}

export default App;
