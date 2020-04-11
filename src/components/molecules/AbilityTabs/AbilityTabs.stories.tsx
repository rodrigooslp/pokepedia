import React from 'react';
import { AbilityTabs } from './AbilityTabs';
import { Ability } from 'models';

export default {
  title: 'molecules/AbilityTabs'
}

const abilities: Ability[] = [{
  name: 'Rain Dish',
  description: 'This Pokémon heals for 1/16 of its maximum HP after each turn during rain.',
  hidden: true,
  loading: true
}, {
  name: 'Torrent',
  description: 'When this Pokémon has 1/3 or less of its HP remaining, its water-type moves inflict 1.5× as much regular damage.'
}];

export const Default = () => <AbilityTabs abilities={abilities}/>;
