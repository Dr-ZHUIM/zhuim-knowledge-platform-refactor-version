import { calcLightenColor } from "../../utils";
type PokemonPropProps = {
  primaryColor: string;
  title: string;
  content: React.ReactNode;
};

export default function PokemonProp({
  primaryColor,
  content,
  title,
}: PokemonPropProps) {
  return (
    <div
      style={{
        backgroundColor: calcLightenColor(primaryColor),
      }}
      className="flex flex-col items-center px-1 py-2 rounded-lg"
    >
      <div className="font-bold">{title}</div>
      <div className="w-full">{content}</div>
    </div>
  );
}

