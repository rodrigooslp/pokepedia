import React from 'react';
import { PokemonInfo } from './PokemonInfo';
import { ElementType } from 'models';

export default {
  title: 'molecules/PokemonInfo'
}

const oneType: ElementType[] = ['water'];
const multipleTypes: ElementType[] = ['poison', 'grass'];

export const OneType = () => <PokemonInfo name='Squirtle' number={7} types={oneType} />;
export const MultipleTypes = () => <PokemonInfo name='Bulbasaur' number={1} types={multipleTypes} />;
