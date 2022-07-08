import React from 'react';
import logo from '../logo512.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='container--nav'>
            <nav className='navigation'>
                <img src={logo} alt="logo airbnd" />
                <span className='logo--text'>airbnd</span>
            </nav>   
        </div>
    );
};

export default Navbar;