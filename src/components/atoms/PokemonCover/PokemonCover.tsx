import React, { FC } from 'react';
// import styled from 'styled-components';

type PokemonCoverProps = {
  url: string;
};

// const StyledPokemonCover = styled.img`
//   width: 48px;
//   height: 48px;
//   cursor: pointer;
// `;

export const PokemonCover: FC<PokemonCoverProps> = ({ url, ...props }) => <img src={url} alt='cover'/>;
