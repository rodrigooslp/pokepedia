import React from 'react';
import { PokemonMiniature } from './PokemonMiniature';

export default {
  title: 'molecules/PokemonMiniature'
}

const commonAvatar = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png';
const shinyAvatar = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png';

export const Common = () => <PokemonMiniature avatar={commonAvatar}/>;
export const Shiny = () => <PokemonMiniature avatar={shinyAvatar} shiny/>;
