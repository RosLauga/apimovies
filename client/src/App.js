import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import Favoritos from './components/favourites/favourites';
import Home from './components/home/home';
import { useState } from 'react';
function App() {

  const [movie, setMovies] = useState("")

  const handleSearch = (searchm) => {
    setMovies(searchm)
  }
  return (
    <Router>

      <div className="App">
        <Navbar handleSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home movie={movie} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
