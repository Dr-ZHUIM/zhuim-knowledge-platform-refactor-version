"use client";
import { useQuery } from "@tanstack/react-query";
import { Review } from "@/components";
import { getPokemon, getPokemonSpecies } from "@/api/pokemon";
import { PokemonType } from "../const";
import { calcIndex, calcTypeColor } from "../utils";

export default function Pokemon({ name }: { name: string }) {
  const { data: pokemon } = useQuery({
    queryKey: ["get_pokemon", name],
    queryFn: (c) => getPokemon({ name: c.queryKey[1] }),
  });

  const { data: pokemonSpecies } = useQuery({
    queryKey: ["get_pokemon_species", name],
    queryFn: (c) => getPokemonSpecies({ name: c.queryKey[1] }),
  });

  const bgc = pokemon
    ? calcTypeColor(pokemon.types[0].type.name)
    : "var(--color-primary-800)";
  const names = pokemonSpecies ? pokemonSpecies.names : [];
  const lan = names.filter((obj: any) => {
    return obj.language.name === "zh-Hans"; //
  });
  const theName = pokemonSpecies ? lan[0].name : name;

  return (
    <Review
      size="sm"
      href={`/Tools/Pokemon/${name}`}
      cardStyle={{ backgroundColor: bgc }}
      title={
        <div className={`flex justify-between`}>
          <div className="flex flex-col justify-between">
            <div className="text-[black] font-bold">
              {pokemon
                ? `${calcIndex(pokemon.id)} ${theName}` || name
                : `Loading ${name}...`}
            </div>
            <div>
              {pokemon &&
                pokemon.types.map((type: any) => (
                  <span
                    className="inline-block bg-white bg-opacity-85 rounded-lg px-3 text-sm text-gray-700 mr-3"
                    key={type.type.name}
                  >
                    {PokemonType[type.type.name]}
                  </span>
                ))}
            </div>
          </div>
          {pokemon && (
            <img
              width={60}
              height={60}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              alt={theName || name}
            />
          )}
        </div>
      }
    />
  );
}

