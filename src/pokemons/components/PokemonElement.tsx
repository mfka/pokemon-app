import type React from "react";
import { useState } from "react";

import Loader from "@components/Loader";
import Arrow from "@icons/arrow.svg";

import { useSWRPokemon } from "../hooks/useSWRPokemon";
import type { Pokemon } from "../pokemon.types";
import PokemonDetailsList from "./PokemonDetailsList";

type PokemonElementProp = Omit<Pokemon, "id">;

export const PokemonElement: React.FC<PokemonElementProp> = ({ name }) => {
	const [shouldGetDetails, setShouldGetDetails] = useState<null | string>(null);

	const { data, isLoading } = useSWRPokemon(shouldGetDetails);

	const handleShowMoreEvent = () => {
		setShouldGetDetails(() => name);
	};

	return (
		<div className="container mx-auto">
			<details className="border-2 border-dashed border-stone-500 p-4 [&_svg]:open:-rotate-180">
				<summary
					className="flex cursor-pointer list-none items-center gap-4"
					onClick={handleShowMoreEvent}
					onKeyDown={handleShowMoreEvent}
				>
					<Arrow className="rotate-0 transfrm text-blue-700 transition-all duration-300" />
					{name}
					{isLoading && <Loader className="ml-auto" />}
				</summary>

				{data?.height && <p>height: {data.height}</p>}
				{data?.weight && <p>weight: {data.weight}</p>}
				{data?.base_experience && <p>experience: {data.base_experience}</p>}
				{data?.species && <p>specie: {data.species.name}</p>}
				{data?.stats && <PokemonDetailsList details={data.stats.map((el) => el.stat.name)} title="statistics" />}
			</details>
		</div>
	);
};

export default PokemonElement;
