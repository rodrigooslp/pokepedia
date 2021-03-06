import React, { FC } from 'react';
import { Box, List, Divider, Typography } from '@material-ui/core';
import styled from 'styled-components';

import { AbilityListItem } from 'components/atoms';
import { Ability } from 'models'

type AbilityListProps = {
  abilities: Ability[];
};

const StyledDivider = styled(Divider)`
  margin: 0 16px;
`;

const StyledTypography = styled(Typography)`
  margin-left: 16px;
`;

const StyledList = styled(List)`
  max-height: 150px;
  overflow: hidden;
`;

export const AbilityList: FC<AbilityListProps> = ({ abilities, ...props }) =>
  <Box {...props}>
    <StyledTypography variant='body2'>Abilities</StyledTypography>
    <StyledList>
      {abilities.map((ability: Ability, index: number) =>
        <Box key={index}>
          <AbilityListItem name={ability.name} hidden={ability.hidden} />
          <StyledDivider />
        </Box>
      )}
    </StyledList>
  </Box>;
