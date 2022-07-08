import React from 'react';
import Contact from './Contact';
import data from './data'
console.log(data)
const Affiche = () => {
    const datasAffiche = data.map((item)=>{
        console.log(item.description)
        return <Contact
            img={data.CoverImg}
            alt={item.name}
        />
    })
    return (
        {datasAffiche}
    );
};

export default Affiche;