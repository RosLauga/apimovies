

const Carddetails = ({ movied }) => {

    const [arr] = movied
    console.log(arr)
    return (
        <>
            <h1>Detalles</h1>
            <p>{arr.Title}</p>
        </>
    )
}

export default Carddetails;