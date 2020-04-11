import React from 'react';
import { AbilityListItem } from './AbilityListItem';

export default {
  title: 'atoms/AbilityListItem'
}

export const Hidden = () => <AbilityListItem name='Rain Dish' hidden />;
export const Standard = () => <AbilityListItem name='Torrent' />;
