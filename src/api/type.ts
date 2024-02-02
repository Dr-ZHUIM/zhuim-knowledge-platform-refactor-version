export type PokemonListType = {
	name: string;
	url: string;
	id?: string;
}

export type GetPokemonsResType  = {
	total: number;
	data: PokemonListType[];
	lastPage:number | null;
	nextPage:number | null;
}

export type getPokemonSpeciesResType = {
	name: string;
	picSrc: string;
	href: string;
}

