import React from 'react';
 

const Pokecard = ({ id, name, type, base_XP }) => {
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png.`

    return ( 
        <div className='Pokecard'>
            <h3>{name}</h3>
            <img src='{imgUrl}' alt='{name}' />
            <p>Type: {type} </p>
            <p> Base_XP: {base_XP}</p>
        </div>
    );
};

export default Pokecard;