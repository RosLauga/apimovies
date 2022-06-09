import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCircleMinus } from '@fortawesome/free-solid-svg-icons';


export default function Favoritos () {

    const favmovies = localStorage.getItem("favoritos")?JSON.parse(localStorage.getItem("favoritos")):[]


    console.log("localstore fav",favmovies)

      
    return (
        <div>
            <h2>Favoritos</h2>
            <div className='containerCards'>
            {
                favmovies ? favmovies.map((fm) => (
                    
                    <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${fm.Poster})`}} className='containerCardDetailsFav'>
                            
                            <div  className="containerInfoFav">
                                <span>Title: {fm.Title}</span>
                                <span>Director: </span>
                                <span>Released:</span>
                                <span>Runtime: {fm.Runtime}</span>
                                <span>Rating: {fm.Rating}</span>
                                <hr></hr>
                                <span>Plot: {fm.Plot}</span>
                                
                                <FontAwesomeIcon className="fav-minus" icon={faHeartCircleMinus}></FontAwesomeIcon>
                                
                            </div>
                            {/* <div  alt={fm.Title} /> */}

                    </div>
                ))

                : "Sin favoritos"            
            }
            </div>
        </div>
    )
}