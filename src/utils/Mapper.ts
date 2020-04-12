import { RawPokemon, Pokemon, Ability, RawAbility, RawType, ElementType, RawStat } from 'models';
import { Formatter } from './Formatter';

export abstract class Mapper {
  public static mapPokemonFromRaw (raw: RawPokemon) {
    const pokemon: Pokemon = {
      name: Formatter.toStartCase(raw.name),
      number: raw.id,
      avatar: {
        common: raw.sprites.front_default,
        shiny: raw.sprites.front_shiny
      },
      stats: {
        hp: this.findStat('hp', raw.stats),
        attack: this.findStat('attack', raw.stats),
        defense: this.findStat('defense', raw.stats),
        speed: this.findStat('speed', raw.stats),
        spAttack: this.findStat('special-attack', raw.stats),
        spDefense: this.findStat('special-defense', raw.stats)
      },
      abilities: raw.abilities.map((item) => this.mapAbilityFromRaw(item)),
      types: raw.types.map((item) => this.mapTypesFromRaw(item)),
      cover: this.getCoverUrl(raw.id)
    }

    return pokemon;
  }

  private static findStat (name: string, raw: RawStat[]) {
    const result = raw.find((item) => item.stat.name === name);
    if (result) return result.base_stat;
    else return 0;
  };

  private static mapAbilityFromRaw (raw: RawAbility) {
    const ability: Ability = {
      name: Formatter.toStartCase(raw.ability.name),
      url: raw.ability.url,
      hidden: raw.is_hidden
    };

    return ability;
  }

  private static mapTypesFromRaw (raw: RawType) {
    const type: ElementType = raw.type.name;
    return type;
  }

  private static getCoverUrl (number: number) {
    return `https://www.serebii.net/art/th/${number}.png`;
  }
}
