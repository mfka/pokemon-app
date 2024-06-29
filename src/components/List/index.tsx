import type React from "react";
import type { Key } from "react";

import ListElement from "./ListElement";

interface ListProps<T> {
	render: React.FC<T>;
	items: readonly T[];
	type?: "ol" | "ul";
}

export const List = <T,>({ items, render, type }: ListProps<T & { id: Key }>) => {
	const elements = items.map((el) => <ListElement key={el.id}>{render(el)}</ListElement>);

	if (type === "ol") {
		return <ol>{elements}</ol>;
	}

	return <ul>{elements}</ul>;
};
