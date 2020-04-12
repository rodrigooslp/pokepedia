import React from 'react';
import { AbilityList } from './AbilityList';
import { Ability } from 'models';

export default {
  title: 'molecules/AbilityList'
}

const abilities: Ability[] = [{
  name: 'Rain Dish',
  hidden: true
}, {
  name: 'Torrent'
}];

export const Default = () => <AbilityList abilities={abilities}/>;
