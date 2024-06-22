import useSWR from 'swr';

import { providePokemon } from '../pokemon.provider';

export const useSWRPokemon = (name: null | string) =>
  useSWR<Awaited<ReturnType<typeof providePokemon>>, Error>(name, providePokemon, {
    revalidateOnFocus: false,
    revalidateOnMount: true,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0,
  });
