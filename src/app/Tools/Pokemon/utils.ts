import { PokemonType, PokemenTypeColor } from "./const";

export function calcIndex (index: string){
	let prefix = "#";
	let num = +index;
	while(num < 10000){
		prefix = prefix + "0"
		num = num * 10
	}
	return prefix + index;
}

// 这里的 type 都为英文

export function calcTypeColor (type: string){
	return PokemenTypeColor[PokemonType[type]]
}

export function calcTypeIndex (type: string){
	return Object.keys(PokemonType).indexOf(type) + 1
}

export function calcLightenColor (color:string){
	let r = parseInt(color.slice(1, 3), 16)
	let g = parseInt(color.slice(3, 5), 16)
	let b = parseInt(color.slice(5, 7), 16)
	r = r + 45
	g = g + 45
	b = b + 45
	r = r > 255 ? 255 : r
	g = g > 255 ? 255 : g
	b = b > 255 ? 255 : b
	return "#" + r.toString(16) + g.toString(16) + b.toString(16)
}