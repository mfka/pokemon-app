import axios, { AxiosResponse } from 'axios';

import { pokemonEnvironment } from './pokemon.environment';

export const pokemonClient = axios.create({
  baseURL: pokemonEnvironment.API_BASE_URL,
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
pokemonClient.interceptors.response.use((r: AxiosResponse) => r.data);
