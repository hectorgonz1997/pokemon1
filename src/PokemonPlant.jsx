import React from 'react';
import './styles.css';

const PokemonPlant = () => {
  return (
    <div className="pokemon-container" >
        <div className="plant-card">
            <h3 className="title3-plant">Bulbasaur</h3>
            <img className="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="bulbasaur" />
            <p>Power 1: espesura</p>
            <p>Power 2: veneno</p>
        </div>
        <div className="plant-card">
            <h3 className="title3-plant">oddish</h3>
            <img className="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png" alt="oddish" />
            <p>Power 1: clorofila </p>
            <p>Power 2: envenamiento </p>
        </div>
        <div className="plant-card">
            <h3 className="title3-plant">paras</h3>
            <img className="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png" alt="paras" />
            <p>Power 1: efecto espora </p>
            <p>Power 2: piel seca </p>
        </div>
        <div className="plant-card">
            <h3 className="title3-plant">fomantis</h3>
            <img className="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/753.png" alt="" />
            <p>Power 1: defensa hoja </p>
            <p>Power 2: corte navaja </p>
        </div>
    </div>
  );
};

    
    
export default PokemonPlant;
