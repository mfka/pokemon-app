import axios, { type AxiosResponse } from "axios";

import { pokemonEnvironment } from "./pokemon.environment";

export const pokemonClient = axios.create({
	baseURL: pokemonEnvironment.API_BASE_URL,
});

pokemonClient.interceptors.response.use((r: AxiosResponse) => r.data);
