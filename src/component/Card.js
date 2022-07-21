import React from 'react';
import { useState, useEffect } from 'react';
import './Card.css'

const Card = () => {
    let second = new Date().getSeconds()
    let hour = new Date().getHours()
    let minute = new Date().getMinutes()
    const [[hours,minutes,secondes], setdate] = useState([hour,minute,second])
    setTimeout(() => {
        setdate((curr)=>{
            return [new Date().getHours(),new Date().getMinutes(),new Date().getSeconds()]
        }
        )
    }, 1000)
    // const date = new Date;
    // // const hours = date.getHours();
    // const minutes = date.getMinutes();
    let timeOfDay;
    if (hours >= 4 && hours <= 15)
        timeOfDay = "Good Morning!";
    else if (hours > 15 && hours <= 19)
        timeOfDay = "Good Evening";
    else
        timeOfDay = "Good night"
    return (
        <div>
            <p>voici l'heure actuel de l'ordinateur</p>
            <p> it is {hours}:{minutes}:{secondes}</p>
        </div>
    );
};

export default Card;