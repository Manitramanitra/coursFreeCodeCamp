import React from 'react';
import Contact from './Contact';
import data from './data'

const Affiche = () => {

    const datasAffiche = data.map((item)=>{
        console.log()
        return (<Contact
            coverImg={item.coverImg}
            phone={item.phone}
            name={item.name}
            email={item.email}
            description={item.description}
        />)
    })
    console.log("toto")
    console.log(datasAffiche)
    console.log("tata")
    return (
        <>
            {datasAffiche}
        </>
    );
};

export default Affiche;