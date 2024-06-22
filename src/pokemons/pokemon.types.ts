import { WithId } from '../types/utils';

export type Pokemon = WithId<{
  name: string;
}>;

export type PokemonList = {
  name: string;
  url: string;
}[];
