import { Review } from "@/components";

export function PokemonReview() {
  return (
    <Review
      backgroundImage={{
        src: "/nextBlog/tools/pokemon/pikachu.png",
        position: "right",
        size: "contain",
      }}
      href={"/Tools/Pokemon"}
      title={"口袋妖怪 - 神奇宝贝百科"}
      content={
        <>
          <div className="mt-[20px] pt-0">Pokémon Get Daze!</div>
          <div className="mt-[20px] pt-0">Pi Ka Pi?</div>
        </>
      }
    />
  );
}

