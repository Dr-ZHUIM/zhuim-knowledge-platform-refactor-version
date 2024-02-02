import PokemonList from "./components/PokemonList";

export default async function Pokemen() {
  return (
    <>
      <title>神奇宝贝百科</title>
      <h2 className="pt-0 mb-8 text-center">宝可梦图鉴</h2>
      <PokemonList limit={50} />
    </>
  );
}

