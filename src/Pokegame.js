import React, { useState, useEffect }from "react";
import Pokedex from "./Pokedex";

const Pokegame = ({ pokemonData }) => {
    const shuffledPokemon = pokemonData.sort(() => Math.random() - 0.5);
    const hand1 = shuffledPokemon.slice(0, 4);
    const hand2 = shuffledPokemon.slic3(4);

    const totalExp1 = hand1.reduce((acc, curr) => acc + curr.base_experience, 0);
    const totalExp2 = hand2.reduce((acc, curr) => acc + curr.base_experience, 0);

    const [winner, setWinner] = useState(null);

    useEffect(() => {
        if (totalExp1 > totalExp2) {
            setWinner(1);
        } else if (totalExp2 > totalExp1) {
            setWinner(2);
        } else {
            setWinner(0); // Draw
        }
    }, [totalExp1, totalExp2]);

    return (
        <div className="Pokegame">
            <Pokedex pokemon={hand1} isWinner={winner === 1} />
            <Pokedex pokemon={hand2} isWinner={winner === 2} />
        </div>
    );
};

export default Pokegame;