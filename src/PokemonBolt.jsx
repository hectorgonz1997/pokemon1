import React from 'react';
import './styles.css';

const PokemonBolt = () => {
  return (
    <div className="pokemon-container" >
        <div className="bolt-card">
            <h3>Pikachu</h3>
            <img className="img-card" src="https://www.cartonionline.com/wordpress/wp-content/uploads/2022/10/Pikachu.jpg" alt="Pikachu" />
            <p>Power 1: bola de rayo</p>
            <p>Power 2: cola de acero</p>
        </div>
        <div className="bolt-card">
            <h3>zapdos</h3>
            <img className="img-card" src="https://i.pinimg.com/564x/7d/09/ad/7d09ad5ee9293b2bdc0acf38166e537f.jpg" alt="zapdos" />
            <p>Power 1: Presión </p>
            <p>Power 2: Pararrayos1 </p>
        </div>
        <div className="bolt-card">
            <h3>raichu</h3>
            <img className="img-card" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png" alt="raichu" />
            <p>Power 1: ataque rapido </p>
            <p>Power 2: surfeo electrico </p>
        </div>
        <div className="bolt-card">
            <h3>elekid</h3>
            <img className="img-card" src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/a6/latest/20170617012949/Elekid.png/300px-Elekid.png" alt="" />
            <p>Power 1: bola boltio </p>
            <p>Power 2: chispa </p>
        </div>
    </div>
  );
};

    
    
export default PokemonBolt;
