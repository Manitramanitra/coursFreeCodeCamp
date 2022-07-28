import React from 'react';

const State = () => {

    const [things, setThings] = React.useState(['Thing 1', 'Thing 2']);

    // console.log(increment);


    function addItem() {
        const newThingText = ` Thing ${things.length + 1}`
        setThings((prevState) => {
            return [...prevState, newThingText]
        })
    }

    const thingsElements = things.map((element, index) => {
        return (
            <p key={index}>{element}</p>
        )
    })
    return (
        <div>
            <button
                onClick={addItem}
            >
                Add item
            </button>
            {thingsElements}
        </div>
    );
};

export default State;