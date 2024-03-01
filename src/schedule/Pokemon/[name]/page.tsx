"use client";
import { useQuery } from "@tanstack/react-query";
import { getPokemon, getPokemonSpecies } from "@/api/pokemon";
import { PokemenTypeColor, PokemonType } from "../const";
import PokemonProperties from "./components/PokemonProperties";
import { useEffect } from "react";
import PokemonInfo from "./components/PokemonInfo";
import { calcLightenColor } from "../utils";

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

  useEffect(() => {
    console.log("pokemon", pokemon);
    console.log("pokemonSpecies", pokemonSpecies);
  }, [pokemon, pokemonSpecies]);

  const primaryColor = pokemon
    ? PokemenTypeColor[PokemonType[firstType]]
    : "var(--color-primary-800)";
  const lightenColor = calcLightenColor(primaryColor);
  const names = pokemonSpecies ? pokemonSpecies.names : [];
  const lan = names.filter((obj: any) => {
    return obj.language.name === "zh-Hans"; //
  });
  const ZHname = pokemonSpecies ? lan[0].name : name;

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      <PokemonInfo primaryColor={primaryColor} lightenColor={lightenColor} />
      <PokemonProperties
        ZHname={ZHname}
        name={name}
        index={pokemon ? pokemon.id : "#0000"}
        primaryColor={primaryColor}
        lightenColor={lightenColor}
        firstType={firstType}
        secondType={secondType}
      />
    </div>
  );
}

