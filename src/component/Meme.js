import React from 'react';
import { useEffect } from 'react';
import './spinner.css';
import maki from './childerKeeper.jpg'
import './Meme.css';

const Meme = () => {
    const [chargement, setChargement] = React.useState(false)
    const [object, setObject] = React.useState({})
    const randomIndex = Math.floor(Math.random() * (101))
    const [image, setImage]=React.useState(0)
    let [formData, setFormData] = React.useState({
        up: "",
        down: ""
    })
    const miovaSary = (e)=>{
        e.preventDefault();
        setImage(prevValue=>prevValue++)
    }
    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then((res) => res.json())
            .then((data) => {
                setObject(data);
                setChargement(true);
            })
        console.log('dans useEffect')
    }, [image])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevalue => {
            return {
                ...prevalue,
                [name]: value
            }
        })

    }


    console.log("any ivelany");
    return (
        <div>
            {image}
            <form className="form" action="">
                <div className="containerForm">
                    {randomIndex}
                    <input
                        className='form--input'
                        placeholder='text top'
                        type="text"
                        onChange={handleChange}
                        name="up"
                    />
                    <input
                        className='form--input'
                        placeholder='text bottom'
                        type="text"
                        onChange={handleChange}
                        name="down"
                    />
                    <button onClick={miovaSary}className='form--button'>
                        Get a random cat image
                    </button>
                    <div className="containerImage">
                        {chargement &&
                            <div>
                                <div className="absolute">{formData.up}</div>
                                <img src={object.data.memes[randomIndex].url} alt="Random cat image" />
                                <div className="absolute">{formData.down}</div>
                            </div>
                        }
                        {!chargement && <div className='spinner-container'><div className="loading-spinner"></div></div>}
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Meme;