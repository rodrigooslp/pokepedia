import React, { FC } from 'react';
import { Grid, Box, AppBar, Toolbar, Typography } from '@material-ui/core';
import { PokemonCard } from 'components/organisms';
import { Pokemon } from 'models';
import styled from 'styled-components';

import background from 'assets/background.jpg'

type HomeTemplateProps = {
  pokemons: Pokemon[];
  handleShowStats: (number: number) => void;
};

const BackgroundImage = styled.div`
  background-image: url(${background});
  width: 100%;
  height: 100%;
  opacity: 0.04;
  position: absolute;
  top: 0;
  background-repeat: repeat;
  z-index: -1;
`;

const StyledContainer = styled(Box)`
  overflow: hidden;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const StyledCardContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;

const StyledAppBar = styled(AppBar)`
  z-index: 1;
`;

const StyledAppName = styled(Typography)`
  color: #fff;
`;

export const HomeTemplate: FC<HomeTemplateProps> = ({ pokemons, handleShowStats, ...props }) => {
  return (
    <>
      <StyledAppBar position="static">
        <Toolbar>
          <StyledAppName variant="h6">Poképedia</StyledAppName>
        </Toolbar>
      </StyledAppBar>

      <StyledContainer>
        <BackgroundImage />
        <Grid container spacing={4}>
          {pokemons.map((pokemon: Pokemon, index: number) =>
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <StyledCardContainer>
                <PokemonCard {...pokemon} showStats={handleShowStats} key={index}/>
              </StyledCardContainer>
            </Grid>
          )}
        </Grid>
      </StyledContainer>
    </>
  );
}
