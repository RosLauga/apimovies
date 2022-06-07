


const CardMovie = (props) => {

    const { title, poster } = props

    return (
        <>
            <img src={`https://image.tmdb.org/t/p/original/${poster}`} alt={title} />
            <h2>{title}</h2>
        </>
    )
}

export default CardMovie