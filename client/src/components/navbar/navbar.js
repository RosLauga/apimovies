import React from 'react';
import './navbar.css'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchbar from '../searchbar/searchbar';


export default function Navbar(props) {

    const { handleSearch } = props
    console.log(props)
    return (
        <Nav activeKey="/home">
            <Nav.Item>
                Logo
            </Nav.Item>
            <Nav.Item>
                <Link to="/">Home</Link>
            </Nav.Item>
            <Nav.Item className='searchbar'>
                <Searchbar handleSearch={handleSearch} />
            </Nav.Item>
            <Nav.Item>
                <Link to="/favoritos">Favoritos</Link>
            </Nav.Item>
        </Nav>
    )
}