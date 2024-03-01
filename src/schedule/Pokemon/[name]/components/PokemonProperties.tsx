import Tabs from "antd/es/tabs";
import { calcIndex } from "../../utils";
import PokemonOfficialWork from "./pokemonOfficialWork";
import PokemonProp from "./pokemonProp";
import PokemonPropContent from "./pokemonPropContent";
import PokemonTypeSpan from "./pokemonType";

type PokemonPropertiesProps = {
  primaryColor: string;
  lightenColor: string;
  name: string;
  ZHname: string;
  index: string;
  firstType: string;
  secondType: string;
};

export default function PokemonProperties({
  primaryColor,
  lightenColor,
  name,
  ZHname,
  index,
  firstType,
  secondType,
}: PokemonPropertiesProps) {
  return (
    <div
      style={{ backgroundColor: primaryColor }}
      className={`flex flex-col gap-2 w-full md:w-[360px] rounded-lg p-2`}
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
      <Tabs
        centered
        animated={false}
        indicator={{ size: 0 }}
        items={[
          {
            label: "原形绘图",
            key: "official-work",
            children: (
              <PokemonOfficialWork
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`}
                alt={ZHname}
              />
            ),
          },
          {
            label: "异色绘图",
            key: "shiny",
            children: (
              <PokemonOfficialWork
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${index}.png`}
                alt={ZHname}
              />
            ),
          },
        ]}
      />
      <div className="grid grid-cols-2 gap-x-2">
        {/* 属性 */}
        <PokemonProp
          title="属性"
          backgroundColor={lightenColor}
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
          backgroundColor={lightenColor}
          content={<PokemonPropContent>Whatever</PokemonPropContent>}
        />
      </div>
    </div>
  );
}

