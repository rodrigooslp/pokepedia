import React, { FC } from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

type AbilityListItemProps = {
  name: string;
  hidden?: boolean;
};

export const AbilityListItem: FC<AbilityListItemProps> = ({ name, hidden, ...props }) =>
  <ListItem {...props}>
    <ListItemText primary={name} secondary={hidden ? 'Hidden Ability' : 'Standard Ability'} />
  </ListItem>;
