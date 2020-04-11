import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import styled from 'styled-components';
import { ElementType } from 'models';
import { PokemonName, PokemonNumber, TypeBadge } from 'components/atoms';

type PokemonInfoProps = {
  name: string;
  number: number;
  types: ElementType[];
};

const StyledInfoContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

const StyledBadgeContainer = styled(Box)`
  display: flex;
  align-items: center;
`;

const StyledBadge = styled(TypeBadge)`
  margin-left: 10px;
`;

export const PokemonInfo: FC<PokemonInfoProps> = ({ name, number, types, ...props }) =>
  <StyledInfoContainer {...props}>
    <Box>
      <PokemonName text={name}/>
      <PokemonNumber number={number} />
    </Box>

    <StyledBadgeContainer>
      {types.map((type: ElementType, index: number) =>
        <StyledBadge type={type} key={index}/>
      )}
    </StyledBadgeContainer>
  </StyledInfoContainer>;
