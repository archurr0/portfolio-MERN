import React from 'react';
import './navbar.css'
import {Link} from 'react-router-dom';

export const Navbar=()=>{
    return (    
        <ul className='navBar'>
            <li className='item'>
                <Link to="/Home">Home</Link>
            </li>
            <li className='item'>
                <Link to="/AboutMe">About Me</Link>
            </li>
            <li className='item'>
                <Link to="/Projects">Projects</Link>
            </li>
            <li className='item'>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
    )

}