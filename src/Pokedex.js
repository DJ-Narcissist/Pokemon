import React from "react";
import Pokecard from "./Pokecard";

const Pokedex = ({ pokemon }) => {
    return (
        <div className="Pokedex">
            {pokemon.map((p) => (
                <Pokecard
                key={p.id}
                id={p.id}
                name={p.name}
                type={p.type}
                base_XP={p.base_XP}
                />
            ))}
        </div>
    );
};

export default Pokedex;