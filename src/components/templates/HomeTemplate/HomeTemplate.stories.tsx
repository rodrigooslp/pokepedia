import { action } from '@storybook/addon-actions';
import React from 'react';
import { HomeTemplate } from './HomeTemplate';
import { ElementType, Ability, Avatar, Stats, Pokemon } from 'models';

export default {
  title: 'templates/HomeTemplate'
}

const name = 'Squirtle';
const number = 7;

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

const cover = 'https://www.serebii.net/art/th/7.png';

const stats: Stats = {
  hp: 44,
  attack: 48,
  defense: 65,
  speed: 43,
  spAttack: 50,
  spDefense: 64
};

const pokemons: Pokemon[] = [{
  name, number, types, abilities, avatar, stats, cover
}, {
  name, number, types, abilities, avatar, stats, cover
}, {
  name, number, types, abilities, avatar, stats, cover
}, {
  name, number, types, abilities, avatar, stats, cover
}, {
  name, number, types, abilities, avatar, stats, cover
}]

export const Default = () =>
  <HomeTemplate
    pokemons={pokemons}
    handleShowStats={action('clicked show stats')}
  />;
