import React from 'react';
import { PokemonNumber } from './PokemonNumber';

export default {
  title: 'atoms/PokemonNumber'
}

export const Default = () => <PokemonNumber number={1} />;
export const BigNumber = () => <PokemonNumber number={99} />;
export const BiggerNumber = () => <PokemonNumber number={999} />;
