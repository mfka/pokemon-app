import urlJoin from 'url-join';

import { pokemonClient } from './pokemon.client';
import { pokemonEnvironment } from './pokemon.environment';

export const getPokemonList = () => pokemonClient.get<unknown>(pokemonEnvironment.POKEMON_RESOURCE_PATH);

export const getPokemon = (name: string) => {
  return pokemonClient.get<unknown>(urlJoin(pokemonEnvironment.POKEMON_RESOURCE_PATH, name));
};
