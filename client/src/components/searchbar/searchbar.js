import { useContext, useState } from 'react';
import "./searchbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import MoviesContext from '../../context/context';


export default function Searchbar() {
    
    const initialValue = ""
    const [inputtext, setInputtext] = useState(initialValue)
    const { handleSearch } = useContext(MoviesContext)
    
    const handleChange = (e) => {
        setInputtext(e.target.value)
    }

    return (
        <>

            <input type="text" value={inputtext} onChange={handleChange} placeholder='ingrese el nombre' />
            <FontAwesomeIcon className="lupasearch" onClick={() => handleSearch(inputtext)} icon={faMagnifyingGlass} />

        </>

    )
}

