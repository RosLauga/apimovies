import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import Favoritos from './components/favourites/favourites';
import axios from 'axios'
import Home from './components/home/home';
import { useState } from 'react';
import Carddetails from './components/cards/carddetails';
import { MoviesData } from './context/context';



function App() {

  
  return (
    <Router>

      <div className="App">
        <MoviesData>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Carddetails />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
        </MoviesData>
      </div>
    </Router>
  );
}

export default App;
