import React from 'react';
import Contact from './Contact';
import data from './data'

const Affiche = () => {

    const datasAffiche = data.map((item)=>{
        console.log(item.openSpots)
        return (<Contact
            key={item.id}
            coverImg={item.coverImg}
            phone={item.phone}
            name={item.name}
            email={item.email}
            description={item.description}
            openSpots={item.openSpots}
        />)
    })
    return (
        <>
            {datasAffiche}
        </>
    );
};

export default Affiche;