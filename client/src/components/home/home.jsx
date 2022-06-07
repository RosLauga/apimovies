import CardMovie from "../cards/cardmovie";
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from "react";
import CardIncoming from "../cards/cardincoming";
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import MoviesContext from "../../context/context";


const Home = () => {

    
    const [incom, setIncom] = useState()
    const { movie, handlerLocal } = useContext(MoviesContext)

    useEffect(() => {
        handlerLocal()
        console.log("Home Local")
    },[])
    
    return (
        <>
            <h1>Coming Soon</h1>
            <div className="contentmain">
                {/* <OwlCarousel className="owl-theme" items={4}>
                    {
                        incom ? incom.map((p) => (
                            <div key={p.id} className="Owl-item">
                                <CardIncoming
                                    title={p.original_title}
                                    Poster={p.poster_path}
                                    movieid={p.id}
                                />
                            </div>
                        )) : "sin información"
                    }
                </OwlCarousel> */}
                <div className="containerCards" >
                    {
                        movie ? movie.map(m => {
                            return (
                                <Link 
                                className="containera" 
                                key={m.id}                                
                                to={`/${m.id}`}>
                                    <div className="containerCardMovie">
                                        <CardMovie 
                                        key={m.id} 
                                        title={m.original_title} 
                                        poster={m.poster_path} 
                                        movieid={m.id} />
                                    </div>
                                </Link>
                            )
                        })
                            : "Waiting for a title..."
                    }
                </div>
            </div>
        </>
    )
}

export default Home;