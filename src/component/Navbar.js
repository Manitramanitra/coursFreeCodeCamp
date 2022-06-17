import React from 'react';
import imageLogo from"../image/logo192.png"
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav className='Navigation'>
                <img src={imageLogo} alt="logo react" className='nav-icon'/> 
                <h3 className='nav--logo_text'>ReactFacts</h3>
                <h4 className='nav--title'> React Course - Project 1</h4>
            </nav>
        </div>
    );
};

export default Navbar;