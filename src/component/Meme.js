import React from 'react';
import { useEffect } from 'react';
import maki from './childerKeeper.jpg'
import './Meme.css';

const Meme = () => {
    const [chargement, setChargement] = React.useState(false)
    const [object, setObject] = React.useState({})
    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then((res) => res.json())
            .then((data) => {

                setObject(data);
                setChargement(true);
            })
    }, [])


    return (
        <div>
            <form className="form" action="">
                <div className="containerForm">
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
                    // onClick={getImage}
                    >
                        Get a random cat image
                    </button>
                    <div className="containerImage">
                        {chargement && <img src={object[0].url} alt="photo de deux enfants avec un baobab" />}
                        {!chargement && <p>loading image ...</p>}
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Meme;