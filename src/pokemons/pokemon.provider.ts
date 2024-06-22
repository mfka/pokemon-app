import { pokemonListResponseDTO, pokemonResponseDTO } from './pokemon.dto';
import { getPokemon, getPokemonList } from './pokemon.repository';

export const providePokemonList = async () => {
  try {
    const pokemonList = await getPokemonList();

    const { results } = pokemonListResponseDTO.parse(pokemonList);

    return results.map((el) => ({ ...el, id: el.name }));
  } catch (_e) {
    return undefined;
  }
};

export const providePokemon = async (name: string) => {
  try {
    const pokemonDetails = await getPokemon(name);

    const response = pokemonResponseDTO.parse(pokemonDetails);

    return response;
  } catch (_e) {
    return undefined;
  }
};
