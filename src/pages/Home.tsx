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

  const loadPokemons = async () => {
    const list = await PokemonService.getPokemonList();
    const promises = list.results.map((item) => PokemonService.getPokemon(item.url));
    setPokemons(await Promise.all(promises));
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <HomeTemplate pokemons={pokemons} handleShowStats={handleShowStats}/>
  );
}
