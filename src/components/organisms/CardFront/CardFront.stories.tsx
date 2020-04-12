import { action } from '@storybook/addon-actions';
import React from 'react';
import { CardFront } from './CardFront';
import { ElementType, Ability } from 'models';

export default {
  title: 'organisms/CardFront'
}

const cover = 'https://www.serebii.net/art/th/7.png';
const types: ElementType[] = ['water'];
const abilities: Ability[] = [{
  name: 'Rain Dish',
  hidden: true
}, {
  name: 'Torrent'
}];

export const Default = () =>
  <CardFront
    name='Squirtle'
    number={7}
    cover={cover}
    types={types}
    abilities={abilities}
    handleActionClick={action('clicked')}
  />;
