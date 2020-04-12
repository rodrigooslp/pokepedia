import axios from 'axios';
import { RawPokemon, RawPokemonList } from 'models';
import { Mapper } from 'utils';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';


export class PokemonService {

  public static async getPokemonList (next?: string): Promise<RawPokemonList> {
    if (next) {
      const { data } = await axios.get(next);
      return data;
    } else {
      const { data } = await axios.get('/pokemon');
      return data;
    }
  }

  public static async getPokemon (url: string) {
    const { data }: { data: RawPokemon } = await axios.get(url);
    return Mapper.mapPokemonFromRaw(data);
  }
}
