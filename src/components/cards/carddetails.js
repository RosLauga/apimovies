import { useState, useEffect } from 'react';
import imgplain from '../../images/waitingimage.jpg';
const Carddetails = ({ title }) => {

    const [data, setData] = useState();
    // http://www.omdbapi.com/?t=matrix&p=1&plot=full&apikey=ccf0242c
    useEffect(() => {
        fetch(`http://www.omdbapi.com/?t=${title}&p=1&plot=full&apikey=ccf0242c`)
            .then(movi => movi.json())
            .then(info => setData(info))
    }, [])

    return (
        <>
            {
                data ?
                    <>
                        <h3>Details</h3>
                        <div className='containerCardDetails'>
                            <img src={data.Poster} alt={data.Title} />
                            <div className="containerInfo">
                                <span>Title: {data.Title}</span>
                                <span>Directo: {data.Director}</span>
                                <span>Released: {data.Released}</span>
                                <span>Runtime: {data.Runtime}</span>
                                <span>Rating: {data.imdbRating}</span>
                                <span>Country: {data.Country}</span>
                                <hr></hr>
                                <span>Plot: {data.Plot}</span>
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