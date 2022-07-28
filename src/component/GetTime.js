/*let date = new Date();
let hours = Math.floor(Math.random(date.getHours())*25);
let timeOfDay="";
function getTimes(name) {
    if (hours >= 4 && hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 4 && hours < 12) {
        timeOfDay = "afternoon"
    } else if (hours >= 4 && hours < 12) {
        timeOfDay = "evening"
    } else if (hours >= 4 && hours < 12) {
        timeOfDay = "nigth"
    } else{
        timeOfDay = "night"
    }

        return `it is ${hours} Good ${timeOfDay} ${name}`
}
console.log(typeof(timeOfDay))
console.log(getTimes("Manitra"));*/
// import React from 'react';
// import { useEffect, useState } from 'react';



// const GetTime = () => {
//     let date = new Date()
//     let tempSecond = date.getSeconds()
//     let tempMinutes = date.getMinutes()
//     let tempHours = date.getHours()
//     console.log(tempMinutes);

//     // let [secondes, setSeconds] = React.useState(tempSecond);
//     let [minutes, setMinutes] = React.useState(tempMinutes);
//     // let [hours, setHours] = React.useState(tempHours);

//     // console.log(minutes);
//     // console.log(hours);
//     // console.log(secondes);

//     useEffect(() => {
//         setTimeout(() => {
//             // setSeconds(date.getSeconds())
//             setMinutes(date.setMinutes())
//             // setHours(date.setHours())
//         }, 1000)
//     }, [date])

//     return (
//         <div>
//             <p>il est {minutes}</p>
//         </div>
//     );
// };

// export default GetTime;

import React from 'react';

const GetTime = () => {

    // let [number, setNumber] = React.useState(0)
    // function diminuer() {
    //     setNumber((value) => {
    //         return value - 1;
    //     })
    // }
    // function augmenter() {
    //     setNumber((value) => {
    //         return value + 1;
    //     })
    // }

    // ternary syntaxe
    // let random = Math.floor(Math.random() * 2)
    // let answer = random == 1 ? true : false;
    // let [isGoing, setGoing] = React.useState(answer)
    // function change() {
    //     setGoing(oldValue=>!oldValue)
    let [things, setThings] = React.useState(["Things 1", "Things 2"])
    function AddItem(){
        setThings(() => [...things, `Things ${things.length + 1}`])
    }

    return (
        <div>
            {/* <button onClick={diminuer}> diminuer</button> *
            <p onClick={change}>{isGoing? "true":"false"}</p>
             <button onClick={augmenter}>augmenter</button> */}


            <button onClick={AddItem}>Add item</button>
            <div>{things}</div>

        </div>
    );
};

export default GetTime;