import React from 'react';
import './navbar.css'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchbar from '../searchbar/searchbar';


export default function Navbar() {

 

    return (
        <Nav activeKey="/home">
            <div>
                Logo
            </div>
            <Nav.Item>
                <Link to="/">Home</Link>
            </Nav.Item>
            <Nav.Item className='searchbar'>
                <Searchbar />
            </Nav.Item>
            <Nav.Item>
                <Link to="/favoritos">Favoritos</Link>
            </Nav.Item>
        </Nav>
    )
}