import React from 'react';
import logo from '../image/logo.png'

const Navbar = () => {
    return (
        <div>
            <nav className='navigation'>
                <img src={logo} alt="logo airbnd" />
                <span>airbnd</span>
            </nav>   
        </div>
    );
};

export default Navbar;