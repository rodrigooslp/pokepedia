import React, { FC } from 'react';

type PokemonAvatarProps = {
  url: string;
};

export const PokemonAvatar: FC<PokemonAvatarProps> = ({ url, ...props }) => <img src={url} alt='avatar' {...props}/>;
