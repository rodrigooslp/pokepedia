import React, { FC } from 'react';

type PokemonCoverProps = {
  url: string;
};

export const PokemonCover: FC<PokemonCoverProps> = ({ url, ...props }) => <img src={url} alt='cover' {...props}/>;
