import { calcIndex } from "../../utils";
import PokemonProp from "./pokemonProp";
import PokemonPropContent from "./pokemonPropContent";
import PokemonTypeSpan from "./pokemonType";

type PokemonInfoProps = {
  primaryColor: string;
  name: string;
  ZHname: string;
  index: string;
  firstType: string;
  secondType: string;
};

export default function PokemonInfo({
  primaryColor,
  name,
  ZHname,
  index,
  firstType,
  secondType,
}: PokemonInfoProps) {
  return (
    <div
      style={{ backgroundColor: primaryColor }}
      className={`flex flex-col gap-2 w-[360px] rounded-lg p-2 mx-auto`}
    >
      {/* 名称 */}
      <div className="flex justify-between font-bold">
        <div className="flex flex-col items-center bg-white rounded-lg py-1 min-w-[200px] ">
          <div className="text-[20px]">{ZHname}</div>
          <div className="text-[14px]">{name}</div>
        </div>
        {/* 编号 */}
        <div className="flex items-center text-[20px] px-4 bg-white rounded-lg">
          {calcIndex(index)}
        </div>
      </div>
      {/* 绘图 */}
      <div className="bg-white flex flex-col items-center rounded-lg pb-2">
        <img
          width="300"
          height="300"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`}
          alt={ZHname}
        />
        <div>官方绘图</div>
      </div>
      <div className="grid grid-cols-2 gap-x-2">
        {/* 属性 */}
        <PokemonProp
          title="属性"
          primaryColor={primaryColor}
          content={
            <PokemonPropContent>
              <div className="flex gap-2">
                <PokemonTypeSpan type={firstType} />
                {secondType && <PokemonTypeSpan type={secondType} />}
              </div>
            </PokemonPropContent>
          }
        />
        {/* 分类 */}
        <PokemonProp
          title="分类"
          primaryColor={primaryColor}
          content={<PokemonPropContent>Whatever</PokemonPropContent>}
        />
      </div>
    </div>
  );
}

