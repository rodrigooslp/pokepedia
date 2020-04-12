import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import styled from 'styled-components';
import { StatItem } from 'components/molecules';
import { Stats } from 'models';

type PokemonStatsProps = {
  stats: Stats
};

const StyledStatItem = styled.div`
  margin-bottom: 5px;
`;

export const PokemonStats: FC<PokemonStatsProps> = ({ stats, ...props }) =>
  <Box {...props}>
    <StyledStatItem>
      <StatItem name='HP' value={stats.hp} />
    </StyledStatItem>

    <StyledStatItem>
      <StatItem name='Attack' value={stats.attack} />
    </StyledStatItem>

    <StyledStatItem>
      <StatItem name='Defense' value={stats.defense} />
    </StyledStatItem>

    <StyledStatItem>
      <StatItem name='Speed' value={stats.speed} />
    </StyledStatItem>

    <StyledStatItem>
      <StatItem name='Sp. Attack' value={stats.spAttack} />
    </StyledStatItem>

    <StyledStatItem>
      <StatItem name='Sp. Defense' value={stats.spDefense} />
    </StyledStatItem>
  </Box>;
