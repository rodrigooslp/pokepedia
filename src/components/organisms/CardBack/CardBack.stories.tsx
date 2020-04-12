import { action } from '@storybook/addon-actions';
import React from 'react';
import { CardBack } from './CardBack';
import { ElementType, Ability, Avatar, Stats } from 'models';

export default {
  title: 'organisms/CardBack'
}

const types: ElementType[] = ['water'];

const abilities: Ability[] = [{
  name: 'Rain Dish',
  description: 'This Pokémon heals for 1/16 of its maximum HP after each turn during rain.',
  hidden: true
}, {
  name: 'Torrent',
  loading: true,
  description: 'When this Pokémon has 1/3 or less of its HP remaining, its water-type moves inflict 1.5× as much regular damage.'
}];

const avatar: Avatar = {
  common: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
  shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png'
};

const stats: Stats = {
  hp: 44,
  attack: 48,
  defense: 65,
  speed: 43,
  spAttack: 50,
  spDefense: 64
};

export const Default = () =>
  <CardBack
    name='Squirtle'
    number={7}
    avatar={avatar}
    stats={stats}
    types={types}
    abilities={abilities}
    handleActionClick={action('clicked')}
  />;
