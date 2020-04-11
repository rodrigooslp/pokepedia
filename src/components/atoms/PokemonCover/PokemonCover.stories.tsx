import React from 'react';
import { PokemonCover } from './PokemonCover';

export default {
  title: 'atoms/PokemonCover'
}

const url = 'https://www.serebii.net/art/th/7.png';
export const Default = () => <PokemonCover url={url} />;
