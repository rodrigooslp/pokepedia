import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import styled from 'styled-components';
import { ElementType } from 'models';
import { PokemonName, PokemonNumber, TypeBadge } from 'components/atoms';

type PokemonInfoProps = {
  name: string;
  number: number;
  type: ElementType;
};

const StyledContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const PokemonInfo: FC<PokemonInfoProps> = ({ name, number, type, ...props }) =>
  <StyledContainer {...props}>
    <Box>
      <PokemonName text={name}/>
      <PokemonNumber number={number} />
    </Box>

    <TypeBadge type={type} />
  </StyledContainer>;
