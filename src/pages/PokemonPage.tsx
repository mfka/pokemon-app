import { useSWRPokemonList } from "@pokemons/hooks/useSWRPokemonList";

import PokemonList from "../pokemons/components/PokemonList";

export default function PokemonPage() {
	const { data } = useSWRPokemonList();

	if (data) {
		return <PokemonList items={data} />;
	}
}
