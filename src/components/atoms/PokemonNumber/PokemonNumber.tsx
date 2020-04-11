import React, { FC } from 'react';
import { Typography } from '@material-ui/core';

type PokemonNumberProps = {
  number: number;
};

export const PokemonNumber: FC<PokemonNumberProps> = ({ number, ...props }) => {
  const formatNumber = (number: number) => `#${String(number).padStart(3, '0')}`;

  return (
    <Typography variant='body2' {...props}>{formatNumber(number)}</Typography>
  );
};
