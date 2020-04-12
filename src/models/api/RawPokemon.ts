import { ElementType } from "models";

export type RawAbility = {
  ability: {
    name: string;
    url: string;
  }
  is_hidden: boolean;
}

export type RawStat = {
  base_stat: number,
  stat: {
    name: string;
  }
}

export type RawType = {
  type: {
    name: ElementType
  }
}

export type RawPokemon = {
  id: number;
  name: string;
  abilities: RawAbility[];
  sprites: {
    front_default: string;
    front_shiny: string;
  };
  stats: RawStat[];
  types: RawType[];
};

export type RawGetAbilityItem = {
  effect: string;
}

export type RawGetAbility = {
  effect_entries: RawGetAbilityItem[]
}
