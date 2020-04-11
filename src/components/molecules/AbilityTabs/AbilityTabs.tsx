import React, { FC, useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import styled from 'styled-components';

import { Ability } from 'models'

type AbilityTabsProps = {
  abilities: Ability[];
};

const StyledContainer = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const StyledTypography = styled(Typography)`
  padding: 1rem;
  flex-grow: 1;
`;

const StyledSkeleton = styled(Skeleton)`
  flex-grow: 1;
`;

export const AbilityTabs: FC<AbilityTabsProps> = ({ abilities, ...props }) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledContainer {...props}>
      <Tabs
        textColor='primary'
        indicatorColor='primary'
        onChange={handleChange}
        value={value}>
          {abilities.map((ability: Ability) => <Tab label={ability.name} />)}
      </Tabs>

      {
        abilities.map((ability: Ability, index: number) => {
          if (index !== value) return null;
          if (ability.loading) return <StyledSkeleton variant='rect' animation='wave'/>;

          return <StyledTypography variant='body2'>{ability.description}</StyledTypography>;
        })
      }
    </StyledContainer>
  );
};
