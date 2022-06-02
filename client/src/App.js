import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import Favoritos from './components/favourites/favourites';
import Home from './components/home/home';
import { useState } from 'react';
import Carddetails from './components/cards/carddetails';
function App() {

  const [movie, setMovies] = useState("");
  const [movied, setMoviesd] = useState("")

  const handleSearch = (searchm) => {
    setMovies(searchm);
  }

  const handleDetail = (searchd) => {
    const { Search } = movie
    const resmov = Search.filter((mov) => mov.imdbID == searchd)
    setMoviesd(resmov)
  }
  return (
    <Router>

      <div className="App">
        <Navbar handleSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home movie={movie} handleDetail={handleDetail} />} />
          <Route path="/:id" element={<Carddetails movied={movied} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
