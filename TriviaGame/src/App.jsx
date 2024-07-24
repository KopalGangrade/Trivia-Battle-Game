import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import PlayerSetup from './components/PlayerSetup';
import CategoryList from './components/CategoryList';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PlayerSetup/>}/>
          <Route path="/category" element={<CategoryList/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
