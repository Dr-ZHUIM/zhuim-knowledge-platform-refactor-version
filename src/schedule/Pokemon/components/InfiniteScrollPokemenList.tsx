"use client";
import { getPokemons } from "@/api/pokemon";
import type { PokemonListType } from "@/api/type";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import Pokemon from "./Pokemon";

// infinite-scroll version
export default function InfiniteScrollPokemonList({
  limit,
}: {
  limit: number;
}) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["get_pokemons"],
    queryFn: (c) => getPokemons({ limit, page: 0 }),
  });

  const { data: infiniteData } = useInfiniteQuery({
    queryKey: ["get_infinite_pokemons"],
    queryFn: (c) =>
      getPokemons({ page: c.pageParam.page, limit: c.pageParam.limit }),
    initialPageParam: { page: 0, limit },
    getNextPageParam: (lastPage, _, lastParams) => ({
      page: lastPage.nextPage || lastParams.page,
      limit,
    }),
  });

  let pokemons: PokemonListType[] = data ? data.data : [];

  let infinitePokemons: PokemonListType[] = infiniteData
    ? infiniteData.pages.flatMap((page) => page.data)
    : [];

  if (isLoading) return <h4 className="p-0 m-0">正在加载...</h4>;

  if (error) return <h4 className="p-0 m-0">加载失败，请重试</h4>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8">
        {/* {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.name} name={pokemon.name} />
        ))} */}
        {infinitePokemons.map((pokemon) => (
          <Pokemon key={pokemon.name} name={pokemon.name} />
        ))}
      </div>
    </div>
  );
}

