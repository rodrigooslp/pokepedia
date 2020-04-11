import React, { FC } from 'react';
import { Box, Card } from '@material-ui/core';
import { ElementType, Ability } from 'models';
import styled from 'styled-components';
import { PokemonCover, ActionButton } from 'components/atoms';
import { PokemonInfo, AbilityList } from 'components/molecules';

type CardFrontProps = {
  name: string;
  number: number;
  types: ElementType[];
  cover: string;
  abilities: Ability[];
  handleActionClick: () => void;
};

const StyledCard = styled(Card)`
  width: 340px;
  height: 540px;
`;

const StyledPokemonInfo = styled(PokemonInfo)`
  padding: 1rem;
`;

const StyledCoverContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
`;

const StyledButtonContainer = styled(Box)`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;

export const CardFront: FC<CardFrontProps> = ({ name, number, types, cover, abilities, handleActionClick, ...props }) =>
  <StyledCard>
    <StyledPokemonInfo name={name} number={number} types={types} />

    <StyledCoverContainer>
      <PokemonCover url={cover} />
    </StyledCoverContainer>

    <AbilityList abilities={abilities} />

    <StyledButtonContainer>
      <ActionButton handleClick={handleActionClick}>STATS</ActionButton>
    </StyledButtonContainer>
  </StyledCard>
