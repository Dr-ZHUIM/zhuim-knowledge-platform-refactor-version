"use client";
import { getPokemons } from "@/api/pokemon";
import type { PokemonListType } from "@/api/type";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Pagination } from "antd";
import { useState } from "react";
import Pokemon from "./Pokemon";

// pagination version
export default function PokemonList({ limit }: { limit: number }) {
  const [page, setPage] = useState(0);

  const { data, isLoading, error } = useQuery({
    queryKey: ["get_pokemons", page],
    queryFn: () => getPokemons({ limit, page: page }),
    placeholderData: keepPreviousData,
  });

  let pokemons: PokemonListType[] = data ? data.data : [];

  if (isLoading) return <h4 className="p-0 m-0">正在加载...</h4>;

  if (error) return <h4 className="p-0 m-0">加载失败，请重试</h4>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8">
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.name} name={pokemon.name} />
        ))}
      </div>
      {data && (
        <Pagination
          className="mt-8 flex justify-end"
          hideOnSinglePage={true}
          showSizeChanger={false}
          pageSizeOptions={[limit]}
          current={page + 1}
          pageSize={limit}
          onChange={(p) => setPage(p - 1)}
          total={data.total}
        />
      )}
    </div>
  );
}

