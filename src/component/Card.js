import React from 'react';
import './Card.css'

const Card = () => {
    const date = new Date;
    const hours = date.getHours();
    const minutes = date.getMinutes();
    let timeOfDay;
    if( hours>=4 && hours<=15)
        timeOfDay = "Good Morning!";
    else if(hours >15 && hours<=19)
        timeOfDay = "Good Evening";
    else
        timeOfDay = "Good night" 
    return (
        <div>
            <p>voici l'heure actuel de l'ordinateur</p>
            <p> it is {hours}:{minutes} and {timeOfDay}</p>
        </div>
    );
};

export default Card;