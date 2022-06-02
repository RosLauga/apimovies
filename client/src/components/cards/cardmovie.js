


const CardMovie = (props) => {

    const { title, Poster } = props

    return (
        <>

            <img width="100" src={Poster} alt={title} />
            <span>Titulo: {title}</span>


        </>
    )
}

export default CardMovie