import React from 'react';
import UseFetch from './MemeData';
import maki from './childerKeeper.jpg'
import './Meme.css';

const Meme = () => {
    function getImage() {
        // (async () => {
        //     console.log(await UseFetch());
        // })()
        console.log(UseFetch)
    }
    return (
        <div>
            <form className="form" action="">
                <input
                    className='form--input'
                    placeholder='text top'
                    type="text"
                />
                <input
                    className='form--input'
                    placeholder='text bottom'
                    type="text"
                />
                <button
                    className='form--button'
                    onClick={getImage}
                >
                    Get a new meme image
                </button>
                <img src={maki} alt="photo de deux enfants avec un baobab" />
            </form>
        </div>
    );
};

export default Meme;