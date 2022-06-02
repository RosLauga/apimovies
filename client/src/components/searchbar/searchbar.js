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
        fetch(`https://imdb-api.com/en/API/SearchMovie/k_99nmup8g/${inputtext}`)
            .then(data => data.json())
            .then(info => handleSearch(info.results))
    }, [inputtext])

    console.log()
    // https://imdb-api.com/en/API/SearchMovie/k_99nmup8g/only
    return (
        <div>
            <input type="text" value={inputtext} onChange={handleChange} placeholder='ingrese el nombre' />
        </div>
    )
}