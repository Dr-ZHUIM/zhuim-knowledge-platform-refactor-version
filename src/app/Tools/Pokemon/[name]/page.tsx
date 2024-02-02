"use client";
import { useQuery } from "@tanstack/react-query";
import { getPokemon, getPokemonSpecies } from "@/api/pokemon";
import { PokemenTypeColor, PokemonType } from "../const";
import PokemonInfo from "./components/pokemonInfo";

type Params = {
  params: {
    name: string;
  };
};

export default function Page({ params: { name } }: Params) {
  const { data: pokemon } = useQuery({
    queryKey: ["get_pokemon", name],
    queryFn: (c) => getPokemon({ name: c.queryKey[1] }),
  });

  const { data: pokemonSpecies } = useQuery({
    queryKey: ["get_pokemon_species", name],
    queryFn: (c) => getPokemonSpecies({ name: c.queryKey[1] }),
  });

  const firstType = pokemon?.types[0].type.name;
  const secondType = pokemon?.types[1]?.type.name;

  const primaryColor = pokemon
    ? PokemenTypeColor[PokemonType[firstType]]
    : "var(--color-primary-800)";

  const names = pokemonSpecies ? pokemonSpecies.names : [];
  const lan = names.filter((obj: any) => {
    return obj.language.name === "zh-Hans"; //
  });
  const ZHname = pokemonSpecies ? lan[0].name : name;

  return (
    <div>
      <PokemonInfo
        ZHname={ZHname}
        name={name}
        index={pokemon ? pokemon.id : "#0000"}
        primaryColor={primaryColor}
        firstType={firstType}
        secondType={secondType}
      />
    </div>
  );
}

