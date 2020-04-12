export type RawPokemonListItem = {
  name: string;
  url: string;
}

export type RawPokemonList = {
  next: string;
  results: RawPokemonListItem[];
}
