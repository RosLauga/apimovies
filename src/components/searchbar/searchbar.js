import React, { useEffect, useState } from 'react';
import "./searchbar.css"

export default function Searchbar(props) {
    const { handleSearch } = props
    const initialValue = ""

    const [inputtext, setInputtext] = useState(initialValue)

    const handleChange = (e) => {
        setInputtext(e.target.value)
    }

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?s=${inputtext}&p=1&apikey=ccf0242c`)
            .then(data => data.json())
            .then(info => handleSearch(info))
    }, [inputtext])


    // https://imdb-api.com/en/API/SearchMovie/k_99nmup8g/only
    return (

        <input type="text" value={inputtext} onChange={handleChange} placeholder='ingrese el nombre' />

    )
}