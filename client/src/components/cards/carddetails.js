import { useState, useContext, useEffect } from 'react';
import imgplain from '../../images/waitingimage.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faLightHeart } from '@fortawesome/free-regular-svg-icons'
import { useParams } from 'react-router';
import MoviesContext from '../../context/context';


const Carddetails = () => {
    
    const { data, sesionLocal, callApi, handlerLocal } = useContext(MoviesContext)
    
    const [ detalle, cheq ] = data

    const { id } = useParams()
    const [fav, setFav] = useState(cheq);    
    const [favstar, setFavstar] = useState();
    
    
    console.log("Data", cheq)

    useEffect(() =>{   
            callApi(id)
            console.log("Cargue APIcall")
            return () => {
            }    
    },[fav,favstar])    

    // ID POR PARAMS
    const handlerPrevFav = (e) => {

        if(e.target.id == "fav"){          
        setFav(true);
        const obj = {
             Title: detalle.original_title,
             Runtime: detalle.runtime ,
             Rating: detalle.vote_average,
             Plot: detalle.overview ,
             Poster: detalle.poster_path,             
         }
         sesionLocal.push(obj)
         localStorage.setItem("favoritos", JSON.stringify(sesionLocal)) 
        }
        else {            
            const newstorage = sesionLocal.filter((fm) => fm.Title !== detalle.original_title);
            console.log("cancela favorito", newstorage);
            localStorage.setItem("favoritos", JSON.stringify(newstorage));
            setFav(false);
            return handlerLocal()
        }    
    }
   
    // Revisa si la sesion existe en LocalStorage para llamarla
    
    return (
        <>
            {
                detalle ?
                    <>
                        <h3>Details</h3>
                        <div className='containerCardDetails'>
                            <img src={`https://image.tmdb.org/t/p/original/${detalle.poster_path}`} alt={detalle.original_title} />
                            <div className="containerInfo">
                                <span>Title: {detalle.original_title}</span>
                                <span>Director: </span>
                                <span>Released:</span>
                                <span>Runtime: {detalle.runtime}</span>
                                <span>Rating: {detalle.vote_average}</span>
                                <hr></hr>
                                <span>Plot: {detalle.overview}</span>
                                {
                                 cheq || favstar ? 
                                        <FontAwesomeIcon
                                            id="nofav" 
                                            onClick={(e) => {
                                                handlerPrevFav(e); 
                                                setFavstar(false);                                               
                                            }}
                                        icon={faHeart} 
                                        />
                                        : <FontAwesomeIcon
                                            id="fav"  
                                            onClick={(e) => {
                                                handlerPrevFav(e);
                                                setFavstar(true);
                                            }}
                                            icon={faLightHeart} 
                                            />
                                }                                
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <h3>Details</h3>
                        <div className='containerCardDetails'>
                            <img src={imgplain} alt="" />
                            <div className="containerInfo">
                                <span>Title:</span>
                                <span>Director:</span>
                                <span>Released:</span>
                                <span>Runtime:</span>
                                <span>Rating:</span>
                                <span>Country:</span>
                                <hr></hr>
                                <span>Plot:</span>
                            </div>
                        </div>

                    </>
            }
        </>
    )
}

export default Carddetails;


