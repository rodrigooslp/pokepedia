import React, { FC } from 'react';
import styled from 'styled-components';

type PokemonCoverProps = {
  url: string;
};

const StyledImg = styled.img`
  max-height: 160px;
`;

export const PokemonCover: FC<PokemonCoverProps> = ({ url, ...props }) => <StyledImg src={url} alt='cover' {...props}/>;
