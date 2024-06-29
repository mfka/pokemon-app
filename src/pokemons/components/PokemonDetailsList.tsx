import type React from "react";

import { List } from "../../components/List";
import { firstToUpperCase } from "../../utils/string";

const PokemonDetailsList: React.FC<{ details: string[]; title: string }> = ({ details, title }) => {
	return (
		<figure>
			<figcaption>{firstToUpperCase(title)}:</figcaption>
			<List items={details.map((el) => ({ id: el, name: el }))} render={(el) => el.name} />
		</figure>
	);
};

export default PokemonDetailsList;
