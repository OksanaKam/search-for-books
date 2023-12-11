import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Books from "../Books/Books";

function App() {

  return (
    <div className="page">
      <Routes>
        <Route path='/'
               element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;
