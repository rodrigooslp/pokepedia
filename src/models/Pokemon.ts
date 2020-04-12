import { ElementType, Stats, Avatar, Ability } from "models";

export type Pokemon = {
  name: string;
  number: number;
  types: ElementType[];
  avatar: Avatar;
  stats: Stats;
  abilities: Ability[];
  cover: string;
};
