import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import Favoritos from './components/favourites/favourites';
import Home from './components/home/home';
function App() {
  return (
    <Router>
      
      <div className="App"> 
      <Navbar />     
      <Routes> 
        <Route path="/" element={<Home />} />      
      </Routes>
      </div>
    </Router>
  );
}

export default App;
