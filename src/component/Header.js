import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header container'>
            <div className="logo">
                <img src="" alt="logo meme" />
                <p>Meme Generator</p>
            </div>
            <div className="project">
                <p>React course - project3</p>
            </div>
        </div>
    );
};

export default Header;