import React, { FC } from 'react';
import { Box, Card } from '@material-ui/core';
import { ElementType, Ability, Avatar, Stats } from 'models';
import styled from 'styled-components';
import { ActionButton } from 'components/atoms';
import { PokemonInfo, PokemonMiniature, PokemonStats, AbilityTabs } from 'components/molecules';

type CardBackProps = {
  name: string;
  number: number;
  types: ElementType[];
  avatar: Avatar;
  stats: Stats;
  abilities: Ability[];
  handleActionClick: () => void;
};

const StyledCard = styled(Card)`
  width: 340px;
  height: 540px;
  display: flex;
  flex-direction: column;
`;

const StyledPokemonInfo = styled(PokemonInfo)`
  padding: 1rem;
`;

const StyledContentContainer = styled(Box)`
  display: flex;
`;

const StyledStatsContainer = styled(Box)`
  flex-grow: 1;
  padding-right: 1.25rem;
  padding-left: 0.25rem;
`;

const StyledAbilityTabs = styled(AbilityTabs)`
  flex-grow: 1;
`;

const StyledButtonContainer = styled(Box)`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;

export const CardBack: FC<CardBackProps> = ({ name, number, types, avatar, stats, abilities, handleActionClick, ...props }) =>
  <StyledCard>
    <StyledPokemonInfo name={name} number={number} types={types} />

    <StyledContentContainer>
      <Box>
        <PokemonMiniature avatar={avatar.common} />
        <PokemonMiniature shiny avatar={avatar.shiny}/>
      </Box>

      <StyledStatsContainer>
        <PokemonStats stats={stats} />
      </StyledStatsContainer>
    </StyledContentContainer>

    <StyledAbilityTabs abilities={abilities} />

    <StyledButtonContainer>
      <ActionButton handleClick={handleActionClick}>COVER</ActionButton>
    </StyledButtonContainer>
  </StyledCard>
