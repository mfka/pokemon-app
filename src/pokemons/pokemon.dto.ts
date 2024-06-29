import { z } from "zod";

export const pokemonListResponseDTO = z.object({
	count: z.number(),
	next: z.string(),
	previous: z.null(),
	results: z.array(z.object({ name: z.string(), url: z.string().url() })),
});

export type PokemonListResponseDTO = z.infer<typeof pokemonListResponseDTO>;

export const pokemonAbilitiesDTO = z.array(
	z.object({
		ability: z.object({ name: z.string(), url: z.string() }),
		is_hidden: z.boolean(),
		slot: z.number(),
	}),
);

export type PokemonAbilitiesDTO = z.infer<typeof pokemonAbilitiesDTO>;

export const pokemonResponseDTO = z.object({
	abilities: pokemonAbilitiesDTO,
	base_experience: z.number(),
	height: z.number(),
	id: z.number(),
	species: z.object({ name: z.string(), url: z.string() }),
	stats: z.array(
		z.object({
			base_stat: z.number(),
			effort: z.number(),
			stat: z.object({ name: z.string(), url: z.string() }),
		}),
	),
	types: z.array(
		z.object({
			slot: z.number(),
			type: z.object({ name: z.string(), url: z.string() }),
		}),
	),
	weight: z.number(),
});

export type PokemonResponseDTO = z.infer<typeof pokemonResponseDTO>;
