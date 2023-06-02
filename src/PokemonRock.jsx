import React from "react";
import './styles.css';

const PokemonRock = () => {
    return(
    <div className="pokemon-container">
        <div className="rock-card">
             <h3 className="title3-rock">Aerodactyl</h3>
             <img className="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png" alt="aerodactyl" />
             <p>Power 1: Lanzarrocas </p>
             <p>Power 2: Avalancha</p>
        </div>
        <div className="rock-card">
            <h3 className="title3-rock">rhyperior</h3>
            <img className="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/464.png" alt="rhyperior" />
            <p>Power 1: Pararrayos </p>
            <p>Power 2: Roca Sólida </p>
        </div>
        <div className="rock-card">
            <h3   className="title3-rock">geodude</h3>
            <img className="img-card" src="https://img.pokemondb.net/artwork/large/geodude.jpg" alt="rhyperior" />
            <p>Power 1: cabeza roca </p>
            <p>Power 2: velo arena</p>
        </div>
        <div className="rock-card">
            <h3   className="title3-rock">graveler</h3>
            <img className="img-card" src="https://img.pokemondb.net/artwork/large/graveler.jpg" alt="rhyperior" />
            <p>Power 1: cabeza robusta </p>
            <p>Power 2: velo arena</p>
        </div>
    </div>
    )

};

export default PokemonRock;