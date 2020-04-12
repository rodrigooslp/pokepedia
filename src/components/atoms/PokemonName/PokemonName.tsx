import React, { FC } from 'react';
import { Typography } from '@material-ui/core';

type PokemonNameProps = {
  text: string;
};

export const PokemonName: FC<PokemonNameProps> = ({ text, ...props }) =>
  <Typography variant='h5' {...props}>{text}</Typography>;
