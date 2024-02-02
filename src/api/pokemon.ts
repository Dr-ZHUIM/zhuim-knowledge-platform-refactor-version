import { GetPokemonsResType} from "./type";

export async function getPokemons(params:PaginationType):Promise<GetPokemonsResType> {
	const url = `https://pokeapi.co/api/v2/pokemon/?offset=${params.limit * params.page}&limit=${params.limit}`
	try{
		const res = await (await fetch(url)).json()
		return {
			total:res.count,
			data:res.results,
			lastPage: params.page === 0 ? null : params.page - 1 ,
			nextPage: params.page * params.limit >= res.count ? null : params.page + 1
		}
	}catch(err){
		throw (err)
	}
}

export async function getPokemon(params:{name:string}):Promise<Record<string,any>>{
	const url = `https://pokeapi.co/api/v2/pokemon/${params.name}`;
	try{
		return await (await fetch(url)).json();
	}catch(err){
		throw (err)
	}
}

export async function getPokemonSpecies(params:{name:string}):Promise<Record<string,any>>{
	const url = `https://pokeapi.co/api/v2/pokemon-species/${params.name}`;
	try{
		return await (await fetch(url)).json();
	}catch(err){
		throw (err)
	}
}