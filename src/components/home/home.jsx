import CardMovie from "../cards/cardmovie";
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import CardIncoming from "../cards/cardincoming";
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Home = (props) => {

    const { movie, handleDetail } = props
    const [incom, setIncom] = useState()

    useEffect(() => {
        fetch('http://localhost:3000/items')
            .then(data => data.json())
            .then(info => setIncom(info))
    }, [])

    return (
        <>
            <h1>Coming Soon</h1>
            <div className="contentmain">


                <OwlCarousel className="owl-theme" items={4}>
                    {
                        incom ? incom.map((p) => (
                            <div key={p.title} className="Owl-item">
                                <CardIncoming
                                    title={p.title}
                                    Poster={p.image}
                                />
                            </div>
                        )) : "sin información"
                    }
                </OwlCarousel>
                <div className="containerCards" >
                    {
                        movie.Search ? movie.Search.map(m => {
                            return (
                                <Link className="containera" key={m.imdbID} onClick={() => handleDetail(m.Title)} to={`/${m.imdbID}`}>
                                    <div className="containerCardMovie">
                                        <CardMovie key={m.imdbID} title={m.Title} Poster={m.Poster} />
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