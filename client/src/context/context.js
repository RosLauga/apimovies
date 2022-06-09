import { createContext, useState, useEffect } from "react";
import axios from 'axios'



const MoviesContext = createContext()

const MoviesData = ({children}) => {

    // ESTADOS
    const [movie, setMovies] = useState();
    const [movietittle, setMovietitle] = useState("")
    const [data, setData] = useState("");
    const [sesionLocal, setSesionLocal] = useState()

     

    const handlerLocal = () => {        
      let sesion = localStorage.getItem("favoritos") ? JSON.parse(localStorage.getItem("favoritos")) : []
      setSesionLocal(sesion)
      console.log("handler local")
    }   
    

    // FUNCION BUSQUEDA DE PELICULA
    const handleSearch = async (searchm) => {

    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTUxYzgzZjFmYzk0NzJhOTc5NDkwMzk1YWQwMDliOSIsInN1YiI6IjYxYjBiZjFhNTgwMGM0MDAxOTk5MDc2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jWoFujYMIHvXqRvaWZ - y4uNamg8haMKxcMxDzMLawuk"
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    try {
      let datos = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0551c83f1fc9472a979490395ad009b9&query=${searchm}&page=1`, config)
      let pelicula = await datos.data
      setMovies(pelicula.results);      
    }
    catch (err) {
      console.log(err)
    }
  }
   

    // FUNCION BUSQUEDA DETALLE DE PELICULA
    const callApi = (id) => {
      
    const details = movie&&movie.find((p) => p.id == id )
    const cheqfav = sesionLocal.find((o) => o.Title == details.original_title)
    
    if (cheqfav) {
      setData([details, true])
      console.log("cheqfav",cheqfav)
    }
    else {
      setData([details, false])
      console.log("cheqfav",cheqfav)
    }
  }  

    // DATA PASADA AL CONTEXTO
    const contextdata = { handleSearch, handlerLocal, movie, callApi, data, sesionLocal }

    return (
        <MoviesContext.Provider value={contextdata}>{children}</MoviesContext.Provider>
    )

}

export {MoviesData}
export default MoviesContext;