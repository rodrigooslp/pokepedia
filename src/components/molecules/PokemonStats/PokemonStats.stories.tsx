import React from 'react';
import { PokemonStats } from './PokemonStats';
import { Stats } from 'models';

export default {
  title: 'molecules/PokemonStats'
}

const stats: Stats = {
  hp: 106,
  attack: 190,
  defense: 100,
  speed: 154,
  spAttack: 100,
  spDefense: 130
};

export const Default = () => <PokemonStats stats={stats}/>;
