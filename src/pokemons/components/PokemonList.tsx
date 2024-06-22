import React from 'react';

import { List } from '../../components/List';
import { Pokemon } from '../pokemon.types';
import PokemonElement from './PokemonElement';

interface PokemonListProps {
  items: readonly Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ items }) => <List items={items} render={PokemonElement} />;

export default PokemonList;
