


const CardMovie = (props) => {

    const { title, Poster } = props

    return (
        <>
            <img src={Poster} alt={title} />
            <h2>{title}</h2>
        </>
    )
}

export default CardMovie