import { PokemonType } from "../../const";
import { calcTypeColor, calcTypeIndex } from "../../utils";

type PokemonTypeProps = {
  type: string;
};

export default function PokemonTypeSpan({ type }: PokemonTypeProps) {
  return (
    <div
      style={{ backgroundColor: calcTypeColor(type) }}
      className="flex rounded-lg px-2 items-center justify-between text-white w-[65px]"
    >
      <span className={`sprite-type sprite-type-${calcTypeIndex(type)}`} />
      <span>{PokemonType[type]}</span>
    </div>
  );
}

