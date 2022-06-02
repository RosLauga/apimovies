import CardMovie from "../cards/cardmovie";
import { Link } from 'react-router-dom'


const Home = (props) => {


    return (
        <>
            <h1>Home</h1>
            <div className="containerCards" >
                {
                    props.movie.Search ? props.movie.Search.map(m => {
                        return (
                            <div key={m.imdbID} className="containerCardMovie">
                                <Link onClick={() => props.handleDetail(m.imdbID)} to={`/${m.imdbID}`}>
                                    <CardMovie key={m.imdbID} title={m.Title} Poster={m.Poster} />
                                </Link>
                            </div>
                        )
                    })
                        : "Cargando.."

                }
            </div>
        </>
    )
}

export default Home;