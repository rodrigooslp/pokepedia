import React from 'react';
import { PokemonAvatar } from './PokemonAvatar';

export default {
  title: 'atoms/PokemonAvatar'
}

const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png';
export const Default = () => <PokemonAvatar url={url} />;
