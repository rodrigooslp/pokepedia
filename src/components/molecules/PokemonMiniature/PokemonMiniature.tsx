import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import styled from 'styled-components';

import { PokemonAvatar } from 'components/atoms';

type PokemonMiniatureProps = {
  avatar: string;
  shiny?: boolean;
};

const StyledContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PokemonMiniature: FC<PokemonMiniatureProps> = ({ shiny, avatar, ...props }) => {
  return (
    <StyledContainer {...props}>
      <Typography variant='body2'>{shiny ? 'Shiny' : 'Common'}</Typography>
      <Box>
        <PokemonAvatar url={avatar} />
      </Box>
    </StyledContainer>
  );
}
