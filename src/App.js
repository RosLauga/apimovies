import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import Favoritos from './components/favourites/favourites';
import Home from './components/home/home';
import { useState } from 'react';
import Carddetails from './components/cards/carddetails';
function App() {

  const [movie, setMovies] = useState("");
  const [movietittle, setMovietitle] = useState("")

  const [favobj, setfavobj] = useState()


  let sesionLocal = localStorage.getItem("favoritos") ? JSON.parse(localStorage.getItem("favoritos")) : []


  const handleSearch = (searchm) => {
    setMovies(searchm);
  }

  const handleDetail = (searchd) => {
    setMovietitle(searchd)
  }

  const handlerFav = (obj) => {
    sesionLocal.push(obj)
    localStorage.setItem("favoritos", JSON.stringify(sesionLocal))
  }




  return (
    <Router>

      <div className="App">
        <Navbar handleSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home movie={movie} handleDetail={handleDetail} />} />
          <Route path="/:id" element={<Carddetails title={movietittle} handlerFav={handlerFav} sesion={sesionLocal} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
