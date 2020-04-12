import axios from 'axios';
import { RawPokemon, RawPokemonList, RawGetAbility } from 'models';
import { Mapper } from 'utils';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';

export class PokemonService {

  public static async getPokemonList (next?: string): Promise<RawPokemonList> {
    if (next) {
      const { data } = await axios.get(next);
      return data;
    } else {
      const { data } = await axios.get('/pokemon?limit=10');
      return data;
    }
  }

  public static async getPokemon (url: string) {
    const { data }: { data: RawPokemon } = await axios.get(url);
    return Mapper.mapPokemonFromRaw(data);
  }

  public static async getAbility (url?: string) {
    if (!url) return '';

    const { data }: { data: RawGetAbility } = await axios.get(url);
    if (data.effect_entries.length > 0) return data.effect_entries[0].effect
    return ''
  }
}
