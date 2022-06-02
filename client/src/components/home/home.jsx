import CardMovie from "../cardmovie";


const Home = (props) => {
    console.log("info", props)
    return (
        <>
            <h1>Home</h1>
            <ul>
                {
                    props.movie ? props.movie.map(m => <li><CardMovie title={m.title} /></li>) : "Cargando.."

                }
            </ul>
        </>
    )
}

export default Home;