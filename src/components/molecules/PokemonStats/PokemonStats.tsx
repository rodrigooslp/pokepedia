import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import styled from 'styled-components';
import { StatItem } from 'components/molecules';
import { Stats } from 'models';

type PokemonStatsProps = {
  stats: Stats
};

const StyledStatItem = styled(StatItem)`
  margin-bottom: 5px;
`;

export const PokemonStats: FC<PokemonStatsProps> = ({ stats, ...props }) =>
  <Box {...props}>
    <StyledStatItem name='HP' value={stats.hp} />
    <StyledStatItem name='Attack' value={stats.attack} />
    <StyledStatItem name='Defense' value={stats.defense} />
    <StyledStatItem name='Speed' value={stats.speed} />
    <StyledStatItem name='Sp. Attack' value={stats.spAttack} />
    <StyledStatItem name='Sp. Defense' value={stats.spDefense} />
  </Box>;
