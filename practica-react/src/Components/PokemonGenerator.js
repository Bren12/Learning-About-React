import React, { useState, useEffect } from "react";
import PokemonAbilityCard from "./PokemonAbilityCard";
import PokemonTypeCard from "./PokemonTypeCard";
import PokemonInfoCard from "./PokemonInfoCard";
import capitalizeFirstLetter from "../Functions/capitalizeFirstLetter";
import { Button } from 'react-bootstrap';

function PokemonGenerator() {

  const [randomNumber, setNumber] = useState(0);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (808 - 1 + 1) + 1)
  };

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (randomNumber) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
        .then((response) => response.json())
        .then((data) => setPokemon(data));
    }
  }, [randomNumber]);

  return (

    <div>

      { pokemon ? (

        <div>

          <h1 class="title text-white"> {capitalizeFirstLetter(pokemon.name)} </h1>

          <div class="pokeimgs">
            <img src={pokemon.sprites.back_default} alt={pokemon.name} style={{ transform: "scale(2)" }} />
            <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ transform: "scale(2)", marginLeft: "60%"}} />
          </div>

          <div class="container-true">
            <Button variant="outline-dark" className="rounded-circle btn-lg btn-circle btn-xl" onClick={() => setNumber(generateRandomNumber)}> Random Pokemon! </Button>
            {console.log(randomNumber)}
          </div>

          <div style={{display: 'flex', justifyContent: 'center', marginBottom: "2%"}}>

            <PokemonAbilityCard datapokemon={pokemon} />

            <PokemonTypeCard datapokemon={pokemon} />

            <PokemonInfoCard data={pokemon} />

          </div>
          
        </div>

        ) : (

          <div>

            <div class="container-false text-white">
              <p > Loading... </p>
            </div>
            
            <div class="container">
              <Button variant="outline-dark" className="rounded-circle btn-lg btn-circle btn-xl-false" onClick={() => setNumber(generateRandomNumber)}> Random Pokemon! </Button>
              {console.log(randomNumber)}
            </div>

          </div>

        )
        
      }

    </div>
        
  );

}

export default PokemonGenerator;