import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles.css';
import React from 'react';
import PokemonBolt from './PokemonBolt';
import PokemonRock from './PokemonRock';
import PokemonPlant from './PokemonPlant';

const App = () => {
  return (
    <>
      <h1 className="title-bolt">Pokémon Bolt</h1>
      <div>
        <PokemonBolt />
      </div>
      <h1 className="title-rock">Pokemon Rock</h1>
      <div>
        <PokemonRock />
      </div>
      <h1 className="title-plant">Pokemon Plant</h1>
      <div>
        <PokemonPlant />
      </div>
    </>
  );
};

export default App;