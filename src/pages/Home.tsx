import React, { FC, useState, useEffect } from 'react';
import { HomeTemplate } from 'components/templates';
import { Pokemon } from 'models';
import { PokemonService } from 'services';

type HomeProps = {};

export const Home: FC<HomeProps> = (props) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [next, setNext] = useState<string>('');

  const handleShowStats = (number: number) => {

  };

  const loadPokemons = async (url?: string) => {
    const { next, results } = await PokemonService.getPokemonList(url);
    setNext(next);

    const promises = results.map((item) => PokemonService.getPokemon(item.url));
    setPokemons(await Promise.all(promises));
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <HomeTemplate pokemons={pokemons} handleShowStats={handleShowStats}/>
  );
}
