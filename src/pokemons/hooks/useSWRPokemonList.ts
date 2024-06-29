import useSWR from "swr";

import { providePokemonList } from "@pokemons/pokemon.provider";

export const useSWRPokemonList = () => useSWR("/pokemon", providePokemonList);
