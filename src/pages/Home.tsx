import React, { FC, useState, useEffect } from 'react';
import { HomeTemplate } from 'components/templates';
import { Pokemon } from 'models';
import { PokemonService } from 'services';
import { Box, Button } from '@material-ui/core';
import styled from 'styled-components';
import { Spinner } from 'shared';

type HomeProps = {};

const StyledButton = styled(Button)`
  color: #fff;
`;

const StyledButtonContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const Home: FC<HomeProps> = (props) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [next, setNext] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleShowStats = (number: number) => {
    const pokemon = pokemons.find((item) => item.number === number);
    if (!pokemon) return;

    const abilities = pokemon.abilities.map((item) => ({ ...item, loading: true }));

    setTimeout(() => {
      updatePokemon({ ...pokemon, abilities });
      resolveAbilityDescriptions({ ...pokemon, abilities });
    }, 500);
  };

  const resolveAbilityDescriptions = async (pokemon: Pokemon) => {
    const promises = pokemon.abilities.map((item) => PokemonService.getAbility(item.url))
    const descriptions = await Promise.all(promises);

    descriptions.forEach((item: string, index: number) => {
      pokemon.abilities[index].description = item;
      pokemon.abilities[index].loading = false;
    });

    updatePokemon(pokemon);
  }

  const updatePokemon = (pokemon: Pokemon) => {
    setPokemons(pokemons.map((item) => {
      if (item.number === pokemon.number) return pokemon;
      else return item;
    }));
  };

  const loadPokemons = async (url?: string) => {
    setLoading(true);
    const { next, results } = await PokemonService.getPokemonList(url);
    setNext(next);

    const promises = results.map((item) => PokemonService.getPokemon(item.url));
    addPokemons(await Promise.all(promises));
    setLoading(false);
  };

  const addPokemons = (list: Pokemon[]) => {
    setPokemons([...pokemons, ...list]);
  }

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <>
      <Spinner loading={loading} />
      <HomeTemplate pokemons={pokemons} handleShowStats={handleShowStats}/>
      {
        !loading && next &&
        <StyledButtonContainer>
          <StyledButton variant='contained' color='primary' onClick={() => loadPokemons(next)}>LOAD MORE</StyledButton>
        </StyledButtonContainer>
      }
    </>
  );
}
